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
- Describe any product analytics being gathered:
  - Page view events (overpayment & copayment debt screens)
  - Interaction events for external payment links (pay.va.gov & pay.gov)
  - Overall app volume after feature is implemented

## Backend changes
- Does the project introduce any new or unusual infrastructure dependencies?
  - No, the mobile backend will use existing infrastructure and patterns already established in vets-api
- **Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`)**
- Do you need to poll any APIs for status?
  - No, APIs involved will use standard request-response patterns
- Are you handling all failure and error cases while in custody of your users's data?
  - Yes, standard error handling and logging patterns in vets-api will be implemented. We will handle API failures gracefully, providing clear error messages to the frontend and logging detailed error information for debugging purposes
- **Does this update change shared code?**
- **What information will be captured in logs or metrics?**
- **Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses?**
- **Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism?**

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
- **Are there any third party integrations, and how are they vetted?**
- **Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?)**
- **Is schema validation enforced (ex: using the vets-json-schema repo)?**

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
- **Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?**
- **Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?**

## Libraries and dependencies
- No new libraries/dependencies are expected to be added

## Metrics, logging, observability, alerting
- Identify key areas to monitor
  - Key areas to monitor for the user include screen views, statement downloads, and url navigation to pay.gov with Firebase/Google Analytics
  - Success and errors through the API will be tracked and alerted through datadog and linked to an alert slack channel
- **Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost**
- **Are there any sensitive data risks with logging?**

## Infrastructure and network changes
- List any changes or additions

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

## Security
- What questions do you have regarding items on the [security checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#security-checklist)?
  - None
- Are there any other security concerns about your project that you want to discuss?
  - None
- What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture?
  - N/A
