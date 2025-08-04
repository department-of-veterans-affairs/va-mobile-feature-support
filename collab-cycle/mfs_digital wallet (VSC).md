# Architecture Intent: Digital Wallet (VSC)

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

## Checklist

## Product description
- Brief overview of motivation for the change from an engineering & security point of view
- Link to Collaboration Cycle Request issue
    
## UX design description
- For user-facing changes, link to UX prototype or wireframes if available
- Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
## Frontend changes
- Identify any significant code changes
  - Implement platform-specific "Add to Wallet" buttons for Apple and Google Wallet
  - Fetch and handle digital wallet passes (.pkpass for Apple, JWT/URL for Google) from backend APIs
  - Handling user permissions and errors
- Identify any new design system components needed or changes to current components
  - No new custom components required
  - Use officially branded Apple Wallet and Google Wallet buttons per platform guidelines
- Describe any product analytics being gathered
  - We want analytics to track when a user adds the VSC to their wallet for both iOS and Android platforms
## Backend changes
- Does the project introduce any new or unusual infrastructure dependencies?
- Do you need to poll any APIs for status?
- Are you handling all failure and error cases while in custody of your users's data?
## Internal API changes
- List new or modified APIs in `vets-api`
- Are you deprecating or removing any APIs?
- Do you have API documentation?
- Describe expected call patterns
## External API changes
- List new or modified APIs for upstream or external systems
- Describe expected call patterns
- What PII or PHI will be transmitted to/from the external systems?
## Background jobs
- List any required background processing
- Describe error and dead letter handling
## Data storage
- Describe new or modified databases, tables or columns
- Describe indexes and constraints
- Identify PII and PHI and where and how it will be stored, processed, expired and deleted
## Libraries and dependencies
- `react-native-wallet-pass`: React Native module to handle PassKit pass
## Metrics, logging, observability, alerting
- Identify key areas to monitor
## Infrastructure and network changes
- List any changes or additions
## Test strategy
- Describe automated, manual and user acceptance test strategy
  - Unit tests and end-to-end tests for testing "Add to Wallet" flow on frontend
  - Manual testing will involve testers on physical Android and iOS devices verifying that they can add passes to their wallets from the VA mobile app
- Describe required test data and test user accounts
  - Any user who has a VSC can be used to test this feature
## Rollout plan
- List scope of any feature flags
  - We plan to use a feature flag for this work and enabling it when the time comes
  - If there are any issues with the feature then we can disable the flag
- Identify other teams to coordinate with
  - Likely working with VA Notify for work relating to push notifications (iOS only)
- Describe rollback plan
  - We can turn off the feature flag if need be which would hide the "Add to Wallet" button
## Internal administration tasks
- What maintenance or administration tasks do you anticipate will need to be performed periodically?
  - Apple Pass Type ID `.p12`: renew annually and update on the server.  
  - Google service-account key: rotate per security policy. 
- Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
  - Perform certificate and key rotations through the Apple Developer Portal and Google Cloud Console
## Security
- What questions do you have regarding items on the [security checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#security-checklist)?
- Are there any other security concerns about your project that you want to discuss?
- What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture?

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete: 

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle kick-off ticket (so we know who you are). Date should be supplied in the format MMDDYYYY.

Once you've dropped this checklist into this folder, please update your Collab Cycle ticket with the location as well as a link to your user data flow document.
