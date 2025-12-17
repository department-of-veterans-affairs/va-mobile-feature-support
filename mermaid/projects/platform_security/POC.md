# Point of Contact (POC) Information

## Team/System Information

### What is the name of your product(s)/system(s)?
**Mobile Feature Support (MFS) Team Features**

The MFS team develops and maintains multiple features across the VA ecosystem. Current features covered by this ATO documentation:
- **Veteran Status Card (VSC)**

### Describe the team's purpose
The Mobile Feature Support (MFS) team operates as a mercenary-style development team providing targeted feature support across the VA ecosystem. We develop frontend components and API integrations that run within existing VA.gov and VA Mobile App infrastructure.

**Team Approach:**
- **Targeted Development**: Focus on specific features through their complete lifecycle
- **Cross-Platform**: Develop features simultaneously for web and mobile platforms  
- **Integration Specialists**: Connect frontend experiences to existing VA backend services
- **Architecture Intent Compliance**: All features complete Architecture Intent review process

### Current Features and Relationships

#### Veteran Status Card (VSC)
**Purpose**: Enables Veterans to display and access a digital version of their Veteran Status Card within both the VA mobile app and va.gov website.

**Implementation consists of:**
- **Mobile VSC**: Component within the VA mobile app (`VeteranStatusCard.tsx`) that displays veteran status information
- **Web VSC**: Component on va.gov profile section that displays the same information with additional PDF generation capabilities

**Feature Relationships**: Both mobile and web implementations are tightly related as they:
- Access the same underlying data sources (veteran verification status, military service history, disability ratings)
- Serve the same user population (verified Veterans)
- Provide equivalent functionality across platforms
- Use similar API endpoints with mobile-specific adaptations

### Expected Duration
The MFS team provides ongoing maintenance and enhancement support for features as needed. This is not a fixed-duration engagement but rather ongoing product support that continues as long as features remain active and require development support.

End of Contract Date: 09/22/2027


## Team Information

### Primary Points of Contact
- **Team**: Mobile Feature Support (MFS) Team
- **Repository**: https://github.com/department-of-veterans-affairs/va-mobile-feature-support
- **Role**: Development support, feature enhancement, maintenance

### Team Scope
The MFS team operates as a mercenary-style development team that provides targeted support for specific features across the VA ecosystem. For all features:
- We develop and maintain the frontend components
- We implement API integrations
- We do not own or maintain the underlying infrastructure or backend services
- We utilize existing platform services and deployment pipelines

*Additional features will be added here as they complete the collab cycle process.*