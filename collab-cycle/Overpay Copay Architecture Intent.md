# Architecture Intent: Overpay/Copay

## Product Description
- Brief overview of motivation for the change from an engineering & security point of view
- Link to Collaboration Cycle Request issue

## UX Design Description
- For user-facing changes, link to UX prototype or wireframes if available
- Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]

## Frontend changes
- Identify any significant code changes:
  - Adding new screens for debts and copayments overview/details
  - Integration of new backend API endpoints (e.g., [new medical_copays controller](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/402#issuecomment-2847360826))
- Identify any new design system components needed or changes to current components:
  - If the team decides we want to include integrated payments, we anticipate creating a new action sheet/menu component within the app. This component would initially not be part of the design system library, though it may be integrated into it later if successful and approved by VA UX standards. No other components are expected.
- Describe any product analytics being gathered:
  - Page view events (overpayment & copayment debt screens)
  - Interaction events for external payment links (pay.va.gov & pay.gov)
  - Overall app volume after feature is implemented

## Backend changes
- Does the project introduce any new or unusual infrastructure dependencies?
  - No, the mobile backend will use existing infrastructure and patterns already established in vets-api
- Do you need to poll any APIs for status?
  - No, APIs involved will use standard request-response patterns
- Are you handling all failure and error cases while in custody of your users's data?
  - Yes, standard error handling and logging patterns in vets-api will be implemented. We will handle API failures gracefully, providing clear error messages to the frontend and logging detailed error information for debugging purposes

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

## Libraries and dependencies
- No new libraries/dependencies are expected to be added

## Metrics, logging, observability, alerting
- Identify key areas to monitor
  - Key areas to monitor for the user include screen views, statement downloads, and url navigation to pay.gov with Firebase/Google Analytics
  - Success and errors through the API will be tracked and alerted through datadog and linked to an alert slack channel

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
- Are there any other security concerns about your project that you want to discuss?
- What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture?
