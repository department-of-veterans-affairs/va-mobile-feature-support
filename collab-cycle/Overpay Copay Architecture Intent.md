# Architecture Intent: Overpay/Copay

## Product Description
- Brief overview of motivation for the change from an engineering & security point of view
- Link to Collaboration Cycle Request issue

## UX Design Description
- For user-facing changes, link to UX prototype or wireframes if available
- Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]

## Frontend changes
- Identify any significant code changes
- Identify any new design system components needed or changes to current components
- Describe any product analytics being gathered

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
- List new or updated dependencies

## Metrics, logging, observability, alerting
- Identify key areas to monitor
  - Key areas to monitor for the user include screen views, statement downloads, and url navigation to pay.gov with Firebase/Google Analytics
  - Success and errors through the API will be tracked and alerted through datadog and linked to an alert slack channel

## Infrastructure and network changes
- List any changes or additions

## Test strategy
- Describe automated, manual and user acceptance test strategy
- Describe required test data and test user accounts

## Rollout plan
- List scope of any feature flags
- Identify other teams to coordinate with
- Describe rollback plan

## Internal administration tasks
- What maintenance or administration tasks do you anticipate will need to be performed periodically?
- Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).

## Security
- What questions do you have regarding items on the [security checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#security-checklist)?
- Are there any other security concerns about your project that you want to discuss?
- What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture?
