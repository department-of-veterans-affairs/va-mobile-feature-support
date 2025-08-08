# Architecture Intent: Overpay/Copay

## Product Description
- Brief overview of motivation for the change from an engineering & security point of view
  - Currently, within the mobile app, a Veteran cannot access any information about how much they owe for Benefit Overpayment Debt or Copayment bills. This feature will allow Veterans to view the total amount they owe for those respective debts on the app. This information is available on VA.gov within the Debt Portal. 
  - This feature would be added within the Payments tab, and if a Veteran has either Overpayments or Copayments, they would see the amount of money owed and how many outstanding debts/bills they have.
  - As part of the MVP, we could allow for Veterans to take action on their debts/bills. These actions include resolving the debt, which would take them directly out of the app and to pay.gov (for copayments) and pay.va.gov (for overpayments). Veterans can also dispute charges and request assistance from the VA due to financial hardship, with both actions linking them to the appropriate resources within VA.gov. At this time, we are conducting user testing sessions to see how users interact with these interactions and will then decide if we will incorporate them into MVP. 
  - The MFS team is working with the Financial Management Team on this initiative. 
- [Link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109407) to Collaboration Cycle Request issue

## UX Design Description
- [UX prototype](https://www.figma.com/proto/kRA7JHbthNrSLxTQHrzH8T/MFS---Overpayments---Copays-%7C-VA-Mobile?page-id=2001%3A429&node-id=7372-28070&p=f&viewport=5509%2C774%2C0.13&t=SY3zHNrIPef78j9o-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7372%3A28070&show-proto-sidebar=1)
  - This includes the option for Veterans to make a payment on their Overpayment debt or Copayment bill. We tested a couple of different patterns. Overpayments generally tested better with the debt resolution options located together in a new menu, so we’ll be updating copays to match. There will be additional changes as a result of testing. 
- There are no engineering concerns with the UX design. 

## Frontend changes
- Identify any significant code changes:
  - Adding new screens for debts and copayments overview/details
  - Integration of new backend API endpoints (e.g., [new medical_copays controller](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/402#issuecomment-2847360826))
- Identify any new design system components needed or changes to current components:
  - If the team decides we want to include integrated payments, we anticipate creating a new action sheet/menu component within the app. This component would initially not be part of the design system library, though it may be integrated into it later if successful and approved by VA UX standards. No other components are expected.
- **Does this update change shared code?**
  - No, this feature will add new screens and components specific to debt/copayment functionality without modifying existing shared code or components.
- Describe any product analytics being gathered:
  - Page view events (overpayment & copayment debt screens)
  - Interaction events for external payment links (pay.va.gov & pay.gov)
  - Overall app volume after feature is implemented

## Backend changes
- Does the project introduce any new or unusual infrastructure dependencies?
  - No, the mobile backend will use existing infrastructure and patterns already established in vets-api
- **Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`)**
  - No, this project will use existing connections and information types already present in vets-api. Both medical copayments and benefit overpayment debts are already available in existing VA backend systems. We will be creating a new mobile-specific endpoint to access this existing data.
- Do you need to poll any APIs for status?
  - No, APIs involved will use standard request-response patterns
- Are you handling all failure and error cases while in custody of your users's data?
  - Yes, standard error handling and logging patterns in vets-api will be implemented. We will handle API failures gracefully, providing clear error messages to the frontend and logging detailed error information for debugging purposes
- **Does this update change shared code?**
  - No, this update will add a new medical_copays controller and related mobile endpoints without modifying existing shared backend code or libraries.
- **What information will be captured in logs or metrics?**
  - We will follow existing logging patterns and standards already established in vets-api. No additional logging outside of these standard patterns will be implemented.
- **Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses?**
  - No, this project does not involve user-uploaded data or files. It only displays existing debt and copayment information.
- **Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism?**
  - No, this project does not generate any intermediate or temporary files during processing. All data flows through standard API request-response patterns.

## Internal API changes
- List new or modified APIs in `vets-api`
  - A new controller (`medical_copays`) will be introduced to support mobile app copayment data requests
- Are you deprecating or removing any APIs?
  - Eventually `pay.va.gov` will be deprecated in favor of `pay.gov` in regards to payments but no clear timeline has been provided
- Do you have API documentation?
  - Yes, [here](https://department-of-veterans-affairs.github.io/va-mobile-app/api/) and for vets-api [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/README.md)
  - The documentation will be updated after the new medical copayment endpoint is added
- Describe expected call patterns
  - API calls will follow standard REST request patterns, triggered when users navigate to relevant screens in the mobile app (debt overview, debt details, copayments, etc.)
- **Are there new endpoints or services that require rate limiting or throttling?**
  - No, the new medical_copays controller endpoints will follow existing vets-api rate limiting patterns already in place.
- **Are there any third party integrations, and how are they vetted?**
  - No new third party integrations are being introduced. The project uses existing VA backend systems already vetted and integrated within vets-api.
- **Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?)**
  - No, this project does not introduce any new scheduled or cron jobs. All functionality is based on real-time API requests.
- **Is schema validation enforced (ex: using the vets-json-schema repo)?**
  - No we will not be submitting any data, parameter protection will utilize rails params.permit

## External API changes
- List new or modified APIs for upstream or external systems
  - None
- Describe expected call patterns
  - They'll follow the standard synchronous request-response API calls to existing external APIs
- What PII or PHI will be transmitted to/from the external systems?
  - Veteran identifiers (like a veterans UUID) will be transmitted securely, consistent with existing patterns in vets-api. All sensitive data handling practices already in place will continue to be followed

## Background jobs
- List any required background processing
  - None
- Describe error and dead letter handling
  - N/A

## Data storage
- Describe new or modified databases, tables or columns
  - No new or modified database structures will be introduced
- Describe indexes and constraints
  - N/A
- Identify PII and PHI and where and how it will be stored, processed, expired and deleted
  - No new storage of PII or PHI is introduced. Existing vets-api standards and patterns for secure handling of sensitive data continue to apply
- **Is this change introducing a large or new volume of data?**
  - No, this change does not introduce large or new volumes of data. It displays existing debt and copayment data that is already stored//fetched in VA backend systems.
- **Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?**
  - No significant impact on database or caching layers. The new API endpoints will use existing database queries and caching patterns already established in vets-api.
- **Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?**
  - No, this project does not persist any new information. It only retrieves and displays existing data from VA backend systems without storing additional data in the mobile app or vets-api.

## Libraries and dependencies
- No new libraries/dependencies are expected to be added

## Metrics, logging, observability, alerting
- Identify key areas to monitor
  - Key areas to monitor for the user include screen views, statement downloads, and url navigation to pay.gov with Firebase/Google Analytics
  - Success and errors through the API will be tracked and alerted through datadog and linked to an alert slack channel
- **Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost**
  - Yes, we plan to introduce custom metric tags via Firebase to track specific user interactions related to benefit overpayments and medical copayments. The metrics will include:
    - Total number of views of benefit overpayments and medical copayments screens (tracked monthly)
    - Overall app volume after debt feature implementation (tracked monthly) 
    - Total number of clicks on links to access VA.gov for payments (tracked monthly)
    - Total number of clicks on empty state screens for benefit overpayments and medical copayments (tracked monthly for design assessment)
    - Downloads of PDF copay statements
    - Error alerts shown to the user
- **Are there any sensitive data risks with logging?**
  - No significant sensitive data risks. Logging will follow existing vets-api patterns that exclude PII/PHI from logs.

## Infrastructure and network changes
- No new infrastructure or network changes will happen as part of this effort

## Test strategy
- Describe automated, manual and user acceptance test strategy:
  - Our new feature will be covered by unit tests utilizing mock data
  - We will also be adding E2E tests for the new components
  - We will leverage test users for manual testing covering various scenarios/use cases
- Describe required test data and test user accounts:
  - That information will be captured [here](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/577)

## Rollout plan
- List scope of any feature flags
  - We plan to use a feature flag for this work and enabling it when the time comes
  - If there are any issues with the feature then we can disable the flag
- Identify other teams to coordinate with
  - We'll coordinate with the Financial Management Team in case of any issues
- Describe rollback plan
  - We can turn off the feature flag if need be. Worst case our changes can be reverted as well if there are further issues. 

## Internal administration tasks
- What maintenance or administration tasks do you anticipate will need to be performed periodically?
  - We do not anticipate introducing any new periodic maintenance or internal administrative tasks for this feature.
- Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
  - N/A (no tasks expected)
  - 

## Security Checklist
### Questions to be Answered

The following product or feature descriptions may be answered with a reference link to the team’s documentation. However, the provided links must be specific to the request.
- Please describe what problem this product or feature solves.
  - Currently, within the mobile app, a Veteran cannot access any information about how much they owe for Benefit Overpayment Debt or Copayment bills. This feature will allow Veterans to view the total amount they owe for those respective debts on the app. This information is available on VA.gov within the Debt Portal. 
  - This feature would be added within the Payments tab, and if a Veteran has either Overpayments or Copayments, they would see the amount of money owed and how many outstanding debts/bills they have.
  - As part of the MVP, we could allow for Veterans to take action on their debts/bills. These actions include resolving the debt, which would take them directly out of the app and to pay.gov (for copayments) and pay.va.gov (for overpayments). Veterans can also dispute charges and request assistance from the VA due to financial hardship, with both actions linking them to the appropriate resources within VA.gov. At this time, we are conducting user testing sessions to see how users interact with these interactions and will then decide if we will incorporate them into MVP. 
  - The MFS team is working with the Financial Management Team on this initiative. 
- Please describe a plan to monitor this code base after deployment, including the following scenarios (NOTE: If you don't (yet) have such a plan, or don't know how to get started with one, we can work on this with you!).
  - The code base is compromised at source- or run-time.
    - How does the code base get disabled in the product?
      - We gate the Overpay Copay feature behind a feature flag that can be toggled off at any time.
    - How would you detect a compromise?
      - We’ll watch for unusual error-rate spikes in Sentry and metric anomalies in DataDog.
    - What process and privilege does the code base execute under?
      - No plan at this time
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
  - We are adding a new `medical_copays` endpoint in vets-api. To prevent unauthorized access, only veterans logged in to the mobile app can call it.
  - We’ll also introduce the `medical_copays/get_pdf_statement_by_id` endpoint for downloading copay statements, guarded by the same authentication checks.
- Is there any new logging data being captured? If so, what data is being captured, how, and where is it stored?
  - We will log pageview events, interaction events with payment links for pay.gov and pay.va.gov as well as overall app volume. This data will be stored in Google analytics.
- Is Personal Health Information/PHI, Personal Identifiable Information/PII, or any other Personal Information/PI being captured? If so, please answer the following questions:
  - No PII/PHI being captured
- Are there any new, modified, or existing Cookies being used?
  - No new, modified or existing Cookies being added
- Is this feature authenticated or unauthenticated?
  - Authenticated
- Are there any other specific subjects that you want to highlight or focus additional attention on?
  - None
 
## Artifacts
Please provide the following documentation as attachments.
- Architecture Diagram:
This diagram must go beyond simple boxes and lines. It must clearly indicate which portions of the architecture are within the scope of the review, which portions are dependencies within the product, and which portions are external dependencies.
This diagram must also illustrate the following specifics.
  - [Link to Architecture Diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-architecture-diagram-20250806.md)
  - Which implementation of security approaches were considered along with the approach that was chosen and why?
    - The implementation uses existing security approaches to authenticate users and connect to the VA network.
  - If there are any libraries or components that this code base will depend upon that are currently not yet part of the code base? How and why were these selected?
    - No new libraries or components will be utilized.
- Incident Response Plan, including Points of Contact for your system and dependent VA back-ends.
  - The FM team (with support from the MFS team) will be responsible for any corrections that need to be made. We can be reached in this [slack channel](https://dsva.slack.com/archives/C05RJS5DANT). The plan for fixing and timeline will depend on the specific nature of the problem, but we are a full-time contract and expect to be able to address issues promptly.
    - If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?
      - We’ll triage and develop a solution immediately, then test and deploy the fix (typically within 72 hours), with stakeholders notified as soon as it’s live. 
- Sequence Diagram: This diagram must include any authentication steps if this is an authenticated experience.
  - [Link to Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-sequence-diagram-20250808.md)
- Data Flow Diagram:
This diagram must illustrate the following specifics.
  - [Link to Data Flow Diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-data-flow-diagram-20250808.md)
  - What data is collected or used, and where, including information such as credentials used by this system?
    - The user's email and password are used to log into the mobile app.
  - Where is the data is stored and how, including information such as any encryption used?
    - No data is stored.
  - How is the data transferred, including information such as any encryption used?
    - All data is transferred via HTTPS.
  - Who accesses the data and in what capacity (read or read-write)?
    - The mobile app user has access to the data in a read-only capacity.
  - What is the audit trail of data access and manipulation?
    - No audit trail is generated and there is no manipulation.
- API Endpoint Documentation:
This may include a link to a Swagger/OpenAPI document. Any new API endpoints introduced by this product or feature must be explicitly identified.
  - We will be adding new endpoints `v0/medical_copays` and `/v0/medical_copays/get_pdf_statement_by_id/{id}` to the mobile api. It is currently in development and documentation will be noted once that work is completed.
- Product Specifics:
    - A link to the Release Plan with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
      - A release plan is not applicable for mobile releases. Please refer to the comment in the Security Checklist section.   
    - [Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md) to the Product Outline
    - Ensure Product Outline contains Incident Response info, including:
        - Points of contact for your system and dependent VA back-ends
        - Links to dashboards that help identify and debug application issues
    - Is there a playbook included in your product outline, for investigating and handling likely failure modes? If so, link to your Product Playbook
      - At this time we have not created this artifact since we have not set up specific monitors for the APIs that will be called for this feature. We will work with the Financial Management team to figure out who will monitor the health of this feature within the mobile app. 
## Where to put this checklist and what to name it

This document should be in markdown and should be shared in this location:
[va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist)

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle Request ticket (so we know who you are). Date should be supplied in the format MMDDYYYY. All Collab Cycle Request tickets can be found in the [Collaboration Cycle Reviews GH project](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1). 

Once you've dropped this checklist into this folder, please update your Collab Cycle Request ticket with the location as well as a link to your user data flow document.
