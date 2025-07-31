.PHONY: help install compile build clean clean-all

# Default target
help:
	@echo "Mermaid Diagram Compiler"
	@echo "========================"
	@echo ""
	@echo "Available commands:"
	@echo "  make install          Install Node.js dependencies"
	@echo "  make compile          Compile all projects"
	@echo "  make build            Alias for compile"
	@echo "  make clean            Remove all output directories"
	@echo "  make clean-all        Remove outputs and node_modules"
	@echo ""
	@echo "Project-specific compilation:"
	@echo "  make compile PROJECT=<name>    Compile specific project"
	@echo ""
	@echo "Format options:"
	@echo "  make compile FORMAT=svg        Use SVG format"
	@echo "  make compile FORMAT=pdf        Use PDF format"
	@echo "  make compile THEME=dark        Use dark theme"
	@echo ""
	@echo "Examples:"
	@echo "  make compile PROJECT=my-project FORMAT=svg"
	@echo "  make compile THEME=dark FORMAT=pdf"

# Install dependencies
install:
	@echo "Installing Node.js dependencies..."
	npm install

# Compile all projects or specific project
compile: install
	@if [ -n "$(PROJECT)" ]; then \
		echo "Compiling project: $(PROJECT)"; \
		node cli.js --project $(PROJECT) $(if $(FORMAT),--format $(FORMAT)) $(if $(THEME),--theme $(THEME)); \
	else \
		echo "Compiling all projects"; \
		node cli.js $(if $(FORMAT),--format $(FORMAT)) $(if $(THEME),--theme $(THEME)); \
	fi

# Alias for compile
build: compile

# Clean output directories
clean:
	@echo "Cleaning output directories..."
	@find projects -type d -name "outputs" -exec rm -rf {} + 2>/dev/null || true
	@echo "Output directories cleaned"

# Clean everything including node_modules
clean-all: clean
	@echo "Removing node_modules..."
	@rm -rf node_modules
	@echo "All cleaned"

# Check if projects directory exists
check-projects:
	@if [ ! -d "projects" ]; then \
		echo "Creating projects directory..."; \
		mkdir -p projects; \
	fi