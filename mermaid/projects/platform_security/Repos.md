# Repository Information

## Repositories Maintained by MFS Team

### Primary Repository
**Repository**: https://github.com/department-of-veterans-affairs/va-mobile-feature-support  
**Purpose**: Documentation, project management, and coordination for MFS team initiatives  
**POC**: MFS Team  
**Access Level**: Internal VA team repository  
**Contents**:
- Project documentation
- Architecture diagrams and specifications
- Ticket management and tracking
- Lessons learned documentation
- Collaboration cycle artifacts

### Repository Usage
This repository serves as the central coordination point for the MFS team but does not contain production code for any features. All implementation code exists in the repositories listed below under "Repositories Used by MFS Team."

## Repositories Used by MFS Team

### VA Mobile App Repository
**Repository**: https://github.com/department-of-veterans-affairs/va-mobile-app  
**Purpose**: VA's official mobile application codebase  
**POC**: VA Mobile Team  
**MFS Usage**: Mobile feature implementations across multiple features  
**Current Feature Files**:
- **VSC**: `VAMobile/src/screens/HomeScreen/VeteranStatusScreen/VeteranStatusCard/VeteranStatusCard.tsx`
- **VSC Tests**: `VAMobile/e2e/tests/VeteranStatusCard.e2e.ts`

### VA Website Repository  
**Repository**: https://github.com/department-of-veterans-affairs/vets-website  
**Purpose**: VA.gov website frontend codebase  
**POC**: VA.gov Platform Team  
**MFS Usage**: Web feature implementations across multiple features  
**Current Feature Files**:
- **VSC**: `src/applications/personalization/profile/components/veteran-status-card/VeteranStatusCard.jsx`
- **VSC**: `src/applications/personalization/profile/components/veteran-status-card/VeteranStatus.jsx`
- **VSC Styles**: `src/applications/personalization/profile/sass/veteran-status-card.scss`

### VA API Repository
**Repository**: https://github.com/department-of-veterans-affairs/vets-api  
**Purpose**: Rails-based API backend for VA.gov and mobile app  
**POC**: VA.gov Platform Team  
**MFS Usage**: Mobile API endpoints and services for multiple features  
**Current Feature Files**:
- **VSC**: `modules/mobile/app/controllers/mobile/v0/vet_verification_statuses_controller.rb`
- **VSC**: `modules/mobile/app/services/mobile/v0/veteran_verification/service.rb`
- **VSC Route**: `modules/mobile/config/routes.rb` (line 112: `/vet_verification_status`)

*Additional feature files will be documented here as new features are developed.*

## Points of Contact by Repository

### MFS Team Repository
- **Primary POC**: Jason DeHaan -- Delivery Manager
- **Secondary POC**: Alex Teal -- Tech Lead
- **Access**: Public
- **Responsibility**: Documentation, project coordination, artifact management

### External Repository POCs
- **va-mobile-app**: VA Mobile Team
- **vets-website**: VA.gov Platform Team / Frontend Tools Team
- **vets-api**: VA.gov Platform Team / Backend Tools Team

*Note: MFS team operates as contributors to these repositories but does not serve as primary maintainers or POCs for the overall codebases.*

## Other Groups Using MFS-Related Code

### VA Teams with Feature Dependencies
**Core Mobile Team**
- Uses MFS mobile implementations in app releases
- Coordinates with MFS for mobile-specific enhancements
- Manages mobile app store deployments

**IIR Team**  
- Collaborated with MFS on web VSC visibility improvements
- Previously maintained web VSC before MFS involvement
- Continues coordination on veteran status features

*Specific team dependencies will vary by feature and will be documented as additional features are added.*
