# CI/CD and Infrastructure Tools

## Tool Ownership and Management

### MFS Team Role
**The MFS team does not maintain, configure, or manage any CI/CD or infrastructure tools.** We are a mercenary-style development team that utilizes existing tools and pipelines provided by the VA.gov Platform and VA Mobile teams to deploy our code changes.

### Platform-Provided Tools
All CI/CD and deployment tools are owned and managed by the respective platform teams:
- **VA.gov Platform Team**: Manages web deployment pipelines
- **VA Mobile Team**: Manages mobile app build and release processes
- **VA.gov Platform Team**: Manages API deployment pipelines

## Deployment Process

### Web Platform (vets-website)
- **Staging**: staging.va.gov
- **Production**: va.gov
- **MFS Role**: Submit code changes through existing platform pipelines

### Mobile Platform (va-mobile-app)
- **Staging**: TestFlight and Firebase App Distribution
- **Production**: Apple App Store and Google Play Store
- **MFS Role**: Submit code changes that trigger builds through standard processes

### API Platform (vets-api)
- **Staging**: staging-api.va.gov
- **Production**: api.va.gov
- **MFS Role**: Submit mobile API changes through existing platform processes

## MFS Team Workflow

1. **Development**: Write and test code changes
2. **Pull Requests**: Submit changes through standard workflows
3. **Review**: Participate in code reviews with platform teams
4. **Deployment**: Platform teams handle all deployment through their existing pipelines

## No Direct Tool Access

The MFS team does not manage:
- CI/CD pipeline configuration
- Infrastructure management tools
- Production environments
- Build system configuration

All deployments require coordination with the respective platform teams who own and operate the infrastructure.