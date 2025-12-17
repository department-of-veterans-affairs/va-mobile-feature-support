# Architecture Intent: Digital Wallet (VSC)

## Instructions

Your document should be brief and high-level. Please keep it to a single page. Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay. You may not be able to fill in some items that _do_ apply to your work--that's also okay. If you don't have answers, please come ready to ask questions.

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
- Does this update change shared code?
  - No, it does not.
- Describe any product analytics being gathered
  - We want analytics to track when a user adds the VSC to their wallet for both iOS and Android platforms

## Backend changes

- Does the project introduce any new or unusual infrastructure dependencies?
- Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`)
- Do you need to poll any APIs for status?
- Are you handling all failure and error cases while in custody of your users's data?
- Does this update change shared code?
- What information will be captured in logs or metrics?
- Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses?
- Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism?

## Internal API changes

- List new or modified APIs in `vets-api`
- Are you deprecating or removing any APIs?
- Do you have API documentation?
- Describe expected call patterns
- Are there new endpoints or services that require rate limiting or throttling?
- Are there any third party integrations, and how are they vetted?
- Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?)
- Is schema validation enforced (ex: using the vets-json-schema repo)?

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
- Is this change introducing a large or new volume of data?
- Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?
- Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?

## Libraries and dependencies

- `react-native-wallet-pass`: React Native module to handle PassKit pass

## Metrics, logging, observability, alerting

- Identify key areas to monitor
  - Total number of downloads of the Veteran Status Card to add the card to an Apple Wallet
  - Total number of downloads of the Veteran Status Card to add the card to a Google Wallet
- Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost
  - No, we've not considered custom metric tags
- Are there any sensitive data risks with logging?
  - We would only log interaction events like number of downloads, no personal information will be logged
## Infrastructure and network changes
  - Apple: Implement PassKit web-service endpoints (register device, check updates, deliver pass) and serve a freshly signed `.pkpass`. Trigger silent updates via APNs when data changes.
    - DB for pass metadata (`serialNumber`, `authenticationToken`, `deviceID`, `pushToken`).
  - Google: Add backend service to create/update passes via **Google Wallet REST API**
  - TBD: Depending on how we handle pass updates for both Apple and Google, additional services, queues, or triggers may be needed to detect data changes and initiate updates.
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
  - The Core Mobile team will be responsible for handling and rotating these credentials.
- Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
  - Perform certificate and key rotations through the Apple Developer Portal and Google Cloud Console

## Security

The following product or feature descriptions may be answered with a reference link to the team's documentation. However, the provided links must be specific to the request.

- Please describe what problem this product or feature solves.
  - Allowing a veteran to add their Veteran's Status Card from their VA mobile app to their Apple/Google wallet as a generic pass.
  - We will add a platform-specific button titled "Add to Apple/Google Wallet" to the Veteran Status Card page.
- Please describe a plan to monitor this code base after deployment, including the following scenarios (NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!).
  - The code base is compromised at source- or run-time.
    - How does the code base get disabled in the product?
      - We will hide it behind a feature flag, which can be toggled on/off whenever we choose
    - How would you detect a compromise?
      - Monitor error rates and anomalies via Sentry/DataDog dashboards (5xx spikes, unexpected payloads).
      - Veteran support tickets and direct feedback channels.
    - What process and privilege does the code base execute under?
      - Read VSC data, sign Apple passes, call Apple/Google Wallet APIs, and write its own pass/registration records.
      - If so, is that process isolated?
        - Yes — it runs in isolation.
      - If so, what additional credentials are available to that process?
        - Apple and Google both require security credentials (certificates or service account keys). We’ll also need authentication to access Veteran data.
    - The code base is infiltrated or ex-filtrated.
      - The code repository is public access but the write privileges are managed by the VA.
  - Links to dashboards that help identify and debug application issues
    - Not built yet
- Provide your Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
  - Releasing on the mobile app is different than releasing to VA.gov. On the mobile app, releases occur every two weeks on Tuesdays. You can find the release schedule [here](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Releases/) and information about the release process [here](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Releases/release-process).
  - Releases are not a slow rollout to only a percentage of users, but rather the release is to 100% of users.
  - All releases are behind a feature flag, so if a bug is discovered, we can turn off the feature flag.
  - For mobile releases we do not create a release plan since we do not have a Phase I or Phase II, we simply Go Live.
- Are there any new application endpoints, front- or back-end? If so, please give examples of how any of the endpoints could be abused by unauthorized parties, as well as a plan to mitigate such threats.
  - We will be adding new endpoints to fetch the wallet passes: `.pkpass` on iOS and `JWT` on Android.
- Is there any new logging data being captured? If so, what data is being captured, how, and where is it stored?
  - We are logging new analytics such as how often the pass is added to the veteran's wallet. This will use our typical analytics and this data will live in our respective analytics dashboards
- Is Personal Health Information/PHI, Personal Identifiable Information/PII, or any other Personal Information/PI being captured? If so, please answer the following questions:
  - We only store pass metadata (`serialNumber`, `authenticationToken`) and the Wallet-provided `deviceID/pushToken`.
- Are there any new, modified, or existing Cookies being used?
  - No new, modified, or existing Cookies are being used
- Is this feature authenticated or unauthenticated?
  - Authenticated
- Are there any other specific subjects that you want to highlight or focus additional attention on?
  - None

### Artifacts

Please provide the following documentation as attachments.

- Architecture Diagram:
  This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
  This diagram must also illustrate the following specifics.
  - Which implementation of security approaches were considered along with the approach that was chosen and why?
  - If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected?
- Incident Response Plan, including Points of Contact for your system and dependent VA back-ends.
  - If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
- Sequence Diagram:
  This diagram must include any authentication steps if this is an authenticated experience.
- Data Flow Diagram:
  This diagram must illustrate the following specifics.
  - What data is collected or used, and where, including information such as credentials used by this system?
  - Where is the data is stored and how, including information such as any encryption used?
  - How is the data transferred, including information such as any encryption used?
  - Who accesses the data and in what capacity (read or read-write)?
  - What is the audit trail of data access and manipulation?
- API Endpoint Documentation:
  This may include a link to a Swagger/OpenAPI document. Any new API endpoints introduced by this product or feature must be explicitly identified.
- Product Specifics:
  - A link to the Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
  - A link to the Product Outline
  - Ensure Product Outline contains Incident Response info, including:
    - Points of contact for your system and dependent VA back-ends
    - Links to dashboards that help identify and debug application issues
  - Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your Product Playbook

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete:

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle kick-off ticket (so we know who you are). Date should be supplied in the format MMDDYYYY.

Once you've dropped this checklist into this folder, please update your Collab Cycle ticket with the location as well as a link to your user data flow document.
