# AWS Resources

## AWS Services Used

### MFS Team Direct Usage
The MFS team does not directly provision or manage AWS resources for any features. Our team operates at the application layer, developing frontend components and API integrations that run within the existing VA.gov and VA Mobile App infrastructure.

### Platform AWS Resources Utilized
MFS team features operate within the broader VA.gov Platform AWS environment, utilizing:

**Web Platform (va.gov)**
- Deployed to staging.va.gov (staging environment)
- Deployed to va.gov (production environment)
- Utilizes existing VA.gov infrastructure including:
  - Logging and monitoring services

**Mobile Platform**
- Mobile API endpoints deployed to staging-api.va.gov (staging)
- Mobile API endpoints deployed to api.va.gov (production)
- Mobile app distributed through:
  - TestFlight and Firebase App Distribution (staging builds)
  - Apple App Store and Google Play Store (production builds)

## Named Instances of Services

### Application Components by Feature

#### Veteran Status Card (VSC)
**Web Implementation:**
- Route: `/profile/veteran-status-card` (va.gov profile section)
- Component: `VeteranStatusCard.jsx`
- Parent: `VeteranStatus.jsx`

**Mobile Implementation:**
- API Route: `/mobile/v0/vet_verification_status`
- Controller: `Mobile::V0::VetVerificationStatusesController`
- Service: `Mobile::V0::VeteranVerification::Service`
- Component: `VeteranStatusCard.tsx`

*Additional features will have their monitoring implementations documented here as they are developed.*

## PII Handling

### Types of PII Processed
MFS team features handle various categories of Personally Identifiable Information (PII) depending on feature requirements:

#### Feature-Specific PII Details

**Veteran Status Card (VSC):**
- Full name (formatted from first, middle, last, suffix)
- DoD ID Number (EDIPI)
- Service branch and service date ranges (latest period only)
- VA disability rating percentage (when available)

**VSC-Specific Data Flow:**
- **Input**: PII received from authenticated user sessions and Lighthouse Veteran Verification API
- **Processing**: PII processed in frontend components for display purposes
- **Output**: PII displayed in user interfaces and PDF downloads (web only)

*Additional features will have their specific PII types documented here as they are developed.*

### PII Data Flow
1. **Input**: PII is received from authenticated user sessions and upstream VA services
2. **Processing**: PII is processed in frontend components for display purposes
3. **Storage**: No permanent storage of PII by MFS-developed components
4. **Transmission**: PII is transmitted between frontend and backend via HTTPS
5. **Output**: PII is displayed in user interfaces

### PII Security Measures
- All PII transmission occurs over HTTPS
- PII display is restricted to authenticated veterans viewing their own information
- No PII is logged or stored by MFS-developed components
- PDF generation (web only) processes PII client-side before download

## Other Cloud Resources

### No Additional Cloud Resources
The MFS team does not utilize any cloud resources outside of the VA.gov Platform AWS Environment. All development, staging, and production workloads for all features operate within the established VA infrastructure.

### Platform Dependency
All MFS team features are entirely dependent on the VA.gov Platform's existing AWS infrastructure and services. The MFS team does not provision, configure, or manage any independent cloud resources for any features.