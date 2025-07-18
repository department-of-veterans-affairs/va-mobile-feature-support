#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONFIG_FILE = path.join(__dirname, 'config.json');
const PROJECTS_DIR = path.join(__dirname, 'projects');

function loadConfig() {
  try {
    const configData = fs.readFileSync(CONFIG_FILE, 'utf8');
    return JSON.parse(configData);
  } catch (error) {
    console.error('Error loading config.json:', error.message);
    process.exit(1);
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    project: null,
    format: null,
    theme: null,
    width: null,
    height: null,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--project':
      case '-p':
        options.project = args[++i];
        break;
      case '--format':
      case '-f':
        options.format = args[++i];
        break;
      case '--theme':
      case '-t':
        options.theme = args[++i];
        break;
      case '--width':
      case '-w':
        options.width = parseInt(args[++i]);
        break;
      case '--height':
      case '-h':
        options.height = parseInt(args[++i]);
        break;
      case '--help':
        options.help = true;
        break;
      default:
        console.error(`Unknown option: ${arg}`);
        process.exit(1);
    }
  }

  return options;
}

function showHelp() {
  console.log(`
Mermaid Diagram Compiler

Usage: node cli.js [options]

Options:
  -p, --project <name>    Compile specific project only
  -f, --format <format>   Output format (png, svg, pdf) [default: png]
  -t, --theme <theme>     Theme (va-custom, default, dark, forest, etc.)
  -w, --width <pixels>    Output width in pixels
  -h, --height <pixels>   Output height in pixels
      --help              Show this help message

Available Themes:
  va-custom               Official VA.gov Design System colors
  default                 Mermaid default theme
  dark                    Dark theme
  forest                  Forest theme
  neutral                 Neutral theme
  base                    Base theme (customizable)

Examples:
  node cli.js                           # Compile all projects with va-custom theme
  node cli.js --project my-project      # Compile specific project
  node cli.js --format svg --theme dark # Use SVG format with dark theme
  node cli.js --theme va-custom          # Use custom VA theme
  `);
}

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function findMermaidFiles(projectDir) {
  const files = fs.readdirSync(projectDir);
  return files.filter(file => file.endsWith('.mmd') || file.endsWith('.mermaid'));
}

function compileFile(inputFile, outputFile, config) {
  const mmdc = path.join(__dirname, 'node_modules', '.bin', 'mmdc');
  
  let command = `"${mmdc}" -i "${inputFile}" -o "${outputFile}"`;
  
  if (config.format) {
    command += ` -f ${config.format}`;
  }
  
  // Handle custom themes or built-in themes
  if (config.theme) {
    if (config.customThemes && config.customThemes[config.theme]) {
      // Use custom theme configuration
      const customTheme = config.customThemes[config.theme];
      const configData = {
        theme: customTheme.theme,
        themeVariables: customTheme.themeVariables
      };
      
      // Create a temporary config file for the custom theme
      const tempConfigFile = path.join(__dirname, 'temp-config.json');
      fs.writeFileSync(tempConfigFile, JSON.stringify(configData, null, 2));
      command += ` -c "${tempConfigFile}"`;
    } else {
      // Use built-in theme
      command += ` -t ${config.theme}`;
    }
  }
  
  if (config.width) {
    command += ` -w ${config.width}`;
  }
  
  if (config.height) {
    command += ` -H ${config.height}`;
  }
  
  if (config.backgroundColor) {
    command += ` -b ${config.backgroundColor}`;
  }

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✓ Compiled: ${path.basename(inputFile)} → ${path.basename(outputFile)}`);
    
    // Clean up temporary config file if it was created
    const tempConfigFile = path.join(__dirname, 'temp-config.json');
    if (fs.existsSync(tempConfigFile)) {
      fs.unlinkSync(tempConfigFile);
    }
  } catch (error) {
    console.error(`✗ Failed to compile ${path.basename(inputFile)}:`, error.message);
    
    // Clean up temporary config file on error too
    const tempConfigFile = path.join(__dirname, 'temp-config.json');
    if (fs.existsSync(tempConfigFile)) {
      fs.unlinkSync(tempConfigFile);
    }
  }
}

function compileProject(projectName, config) {
  const projectDir = path.join(PROJECTS_DIR, projectName);
  
  if (!fs.existsSync(projectDir)) {
    console.error(`Project directory not found: ${projectDir}`);
    return;
  }

  const outputDir = path.join(projectDir, 'outputs');
  ensureDirectory(outputDir);

  const mermaidFiles = findMermaidFiles(projectDir);
  
  if (mermaidFiles.length === 0) {
    console.log(`No Mermaid files found in project: ${projectName}`);
    return;
  }

  console.log(`\nCompiling project: ${projectName}`);
  console.log(`Found ${mermaidFiles.length} Mermaid file(s)`);

  for (const file of mermaidFiles) {
    const inputFile = path.join(projectDir, file);
    const baseName = path.parse(file).name;
    const outputFile = path.join(outputDir, `${baseName}.${config.format}`);
    
    compileFile(inputFile, outputFile, config);
  }
}

function compileAllProjects(config) {
  if (!fs.existsSync(PROJECTS_DIR)) {
    console.error(`Projects directory not found: ${PROJECTS_DIR}`);
    console.log('Please create the projects directory and add your Mermaid projects.');
    return;
  }

  const projects = fs.readdirSync(PROJECTS_DIR).filter(item => {
    const itemPath = path.join(PROJECTS_DIR, item);
    return fs.statSync(itemPath).isDirectory();
  });

  if (projects.length === 0) {
    console.log('No projects found in the projects directory.');
    return;
  }

  console.log(`Found ${projects.length} project(s): ${projects.join(', ')}`);

  for (const project of projects) {
    compileProject(project, config);
  }
}

function main() {
  const options = parseArgs();
  
  if (options.help) {
    showHelp();
    return;
  }

  const config = loadConfig();
  
  // Override config with command line options
  if (options.format) config.format = options.format;
  if (options.theme) config.theme = options.theme;
  if (options.width) config.width = options.width;
  if (options.height) config.height = options.height;

  console.log('Mermaid Diagram Compiler');
  console.log('========================');
  console.log(`Format: ${config.format}`);
  
  if (config.customThemes && config.customThemes[config.theme]) {
    console.log(`Theme: ${config.theme} (custom)`);
  } else {
    console.log(`Theme: ${config.theme} (built-in)`);
  }

  if (options.project) {
    compileProject(options.project, config);
  } else {
    compileAllProjects(config);
  }

  console.log('\nCompilation complete!');
}

if (require.main === module) {
  main();
}