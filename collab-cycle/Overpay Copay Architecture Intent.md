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
- No new libraries/dependencies are expected to be added

## Metrics, logging, observability, alerting
- Identify key areas to monitor

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
