# VAHB Mobile App - Mobile Feature Support Team Release Notes

Please view the release notes below for information about our deployments to various VAHB mobile app products. For additional information, please visit the following links:

- [Who is the Mobile Feature Support team?](https://github.com/department-of-veterans-affairs/va-mobile-feature-support)
- [What products do we work on, and why?](https://github.com/department-of-veterans-affairs/va-mobile-feature-support)
- [Who are our stakeholders?](https://github.com/department-of-veterans-affairs/va-mobile-feature-support?tab=readme-ov-file#key-stakeholders)

------
## Overpayment and Copayment Implementation | 12/17/2025
- All overpayment and copayment features are implemented in the mobile app with a few exceptions:
  - The team still needs to add separate `overpayments` and `copays` feature flags to allow for separate release cycles.
  - The team still needs to fix a few accessibilty issues.
  - The team still needs to take another pass to make content updates, mainly to rename `Overpayment debts` to just `Overpayments`.
  - The team still needs to incorporate 12 VBA alerts from the Financial Management team.
  - The team still needs to implement the new copays API from the Financial Management team.
  - The team still needs to implement both backend and frontend analytics.

## Overpayment and Copayment Implementation Build-Out | 10/31/2025
- Updated the Overpayment and Copay components for the Activity section of the Home screen to show the total amount of money owed
and the number of debts/bills.
- Implemented the Overpayment debts list screen and corresponding `Resolve debt` button

## Payment Screen: Update Overpay & Copay Components | 9/24/2025
- Updated overpay/copay components on the Payment screen to show total amount of money owed and the number of debts/bills. Also, included empty state screens for both ovepay and copay.

## Mobile Wallet POC | 9/15/2025
- Added scaffolding for Google and Apple wallets in new repository [here](https://github.com/department-of-veterans-affairs/mobile-wallet-poc)
- Deployed mobile wallet api to a hosted server and tested Apple responses

## Overpayment and Copayment High-level User Navigation | 9/5/2025
- Added main UX elements, screens and navigation for overpayments and copays.
- Implemented buttons for `Resolve debt` and `Resolve bill` action/bottom sheet.

## Update Mobile App Documentation | 9/3/2025
- Updated mermaid documentation for the mobile app to reflect the addition of medical copay endpoints.

## Added Medical Copay Endpoints to Mobile App | 9/2/2025
- Added the endpoints `/v0/medical_copays`, `/v0/medical_copays/{id}`, & `/v0/medical_copays/download/{id}` to the project so now we can fetch medical copay data and download copay statements in the app.

## Added Debt Endpoints to Mobile App | 8/29/2025
- Added the endpoints `/v0/debts` and `/v0/debts/:id` to the project so now we can get Overpayment Debts in the app.

## Veteran Status Card Redesign | 8/27/2025
- Removed `vet_status_stage_1` feature flag, errors details and titles are now dynamically generated and sent by the API.

## Overpayment and Copayment Feature Flag Toggle | 08/26/2025
- Added the `overpayCopay` feaure flag to the project for the upcoming overpay/copay work.

## Overpayment and Copayment Debts | 08/20/2025
- Developed the Medical Copays Endpoint

## Claim Letter Downloads Analytics | 08/12/2025
- Released to VA Mobile App.

## Veteran Status Card Web Redesign | 08/08/2025
- Enabled monitors to track any errors that are surfaced when users try to download their VSC as a PDF on VA.gov.

## Veteran Status Card Web Redesign | 08/07/2025
- Fixed a blocked popup issue for users downloading the VSC PDF.

## Veteran Status Card Web Redesign | 07/31/2025
- Removed the old VSC card entirely from the Military Information page including tests amd feature flag.

## Claim Letter Downloads Analytics | 07/28/2025
- Add claim letter type descriptions to the analytics event that already exists.

## VAHB Mobile App Analytics | 07/22/2025
- **Claim/Decision Letter Type Analytics** - Updated the `vama_ddl_letter_view` event so the Claims team can view a breakdown of Claim/Decision Letter types and their total counts in Google Analytics.

## Veteran Status Card Redesign Mobile | 07/17/2025
- Wrapped the VSC in the availability framework components.

## Veteran Status Card Redesign Mobile | 07/14/2025
- Fixed e2e test due to consistent timeout failures.

## Mobile App Sort Updates | 07/10/2025
- Implemented front end work to move sorting activites to the API layer.
- Released to VA Mobile App.

## Veteran Status Card Web Redesign | 07/10/2025
- Released to VA.gov to 100% of users. 

## Veteran Status Card Web Redesign | 07/09/2025
- Updated "Something went wrong" alert to be a yellow warning alert.

## Veteran Status Card Web Redesign | 07/07/2025
- Updated web monitors to 60% threshold for error monitors.

## Mobile App Sort Updates | 06/30/2025
- Moved front end sorting activities to the API layer.

## Veteran Status Card Web Redesign | 06/24/2025
- Made updates to VoiceOver to be less  "wordy".
- Updated a font in the page heading.

## Veteran Status Card Web Redesign | 06/23/2025
- Veterans who have a 0% disability rating  can now see the disability rating on the card.
- Updated H1's on the Profile page to match the rest of the site's H1's.

## Veteran Status Card Web Redesign | 06/12/2025
- Made a styling adjustment to a heading on VSC page.
- Made a styling adjustment to intro paragraph on VSC page.

## Veteran Status Card Web Redesign Continued Updates | 05/30/2025
- **PDF updates** – Proof-of-Veteran-Status PDF page copy updated; PDF-error guidance moved into the new FAQ.
- **Dedicated VSC page** – Introduces a standalone route that hosts the redesigned card and its FAQ.
- **Easy access from Profile** – “Access your Veteran Status Card” link added in Profile › Military Information (feature-flag controlled).
- **FAQ section** – Covers eligibility, PDF downloads, and troubleshooting; displayed directly beneath the card on the new page.
- **Alert updates** – Centralized `VeteranStatusAlerts` component shows system, eligibility, and PDF-error messages.
- **A11y tested & zoom verified** – Tested zoom up to 400 % to meet accessibility requirements. Ran Axe DevTools scan and fixed a11y issues.
- **Legacy card hidden** – Original card suppressed when the `vetStatusStage1` flag is enabled to avoid duplicate UI.

## Public Repository | 05/20/2025
- Made Mobile Feature Support repository public.

## Veteran Status Card Web Redesign | 05/16/2025
- Created a Data Dog dashboard to capture analytics.

## Veteran Status Card Web Redesign | 05/12/2025
- Provided link to the VSC on the Profile page.

## Veteran Status Card Web Redesign | 05/08/2025
- Added the Feedback button to the bottom of the new page for the Veteran Status Card.

## Veteran Status Card Web Redesign | 05/06/2025
- Released to VA Mobile App.

## Veteran Status Card Web Redesign | 05/02/2025
- Update the Veteran Status Card PDF to match stage 1 redesign.

## Veteran Status Card Web Redesign | 04/30/2025
- Implemented an FAQ section below the Veteran Status Card on new page.

## Veteran Status Card Web Redesign | 04/29/2025
- Created a dedicated page for the Veteran Status Card under Profile.

## VAHB Mobile App Veteran Status Card Surfacing | 04/22/2025
- Released to VA Mobile App.

## Veteran Status Card Web Redesign | 04/17/2025
- Added feature flag for front end elements

## Veteran Status Card Web Redesign | 04/16/2025
- Added feature flag for back end elements

## VAHB Mobile App Veteran Status Card Redesign 04/09/2025
- Added feature flag for redesign implementation

## VAHB Mobile App Veteran Status Card Redesign 04/07/2025
- Veteran Status Card now supports zooming on both iOS and Android so that Veterans can read text at various zoom percentages

## VAHB Mobile App Bug Fixes 04/03/2025
- Fixed multitap issue where developers were unable to log in to demo mode without editing `e2e/tests/utils.ts`

## VAHB Mobile App Veteran Status Card Surfacing | 04/03/2025
- Added logging and monitoring so that mobile app API traffic can be differentiated from web app API traffic

## VAHB Mobile App Veteran Status Card Redesign 04/03/2025
- Implemented design and content updates for a better user experience
- Add screen orientation awareness so the Veteran Status Card displays correctly when a user changes their screen orientation

## VAHB Mobile App Veteran Status Card Surfacing | 03/20/2025
- Display a contextual error message when the Veteran Service History and Eligibility API returns an unexpected error response
- Display a contextual error message when the Veteran Service History and Eligibility API returns a status of `NOT_TITLE_API`.
- Display a contextual error message when there is a system error or when the Veteran Service History and Eligibility API returns a status of `ERROR`.
- All users of the mobile app are now able to see the Proof of Veteran Status button, regardless of their eligibility.

## VAHB Mobile App Bug Fixes | 03/19/2025
- Fixed an issue where a console banner was getting in the way and making local development difficult.

## VAHB Mobile App Veteran Status Card Surfacing | 03/19/2025
- Ensured that the mobile app can successfully connect to the Veteran Service History and Eligibility API.

## VAHB Mobile App Bug Fixes | 03/06/2025
- Fixed a bug where some users using VoiceOver on iPhone 15 Pro were redirected to the home screen after sending a secure message instead of returning to the messages screen with a confirmation snackbar. Now, all users will receive the snackbar and remain in the messages screen for a consistent experience.
- Fixed a bug where users were unable to use tap to focus on SnackBar if other focusable content was behind SnackBar.
- Fixed a bug where “Claims History” text was not wrapping and infringing on “VA” header space.
- Fixed a bug where push notifications when tapped did not disappear from the device list of notifications.

## VAHB Mobile App Design System | 03/06/2025
- The new Loading component that was built out by the Design System team is now incorporated into the app.
- The new SnackBar component that was built out by the Design System team is now incorporated into the Global sections of the app.

## VAHB Mobile App Bug Fixes | 03/03/2025
- Fixed a bug where deeplinking from a specific push notification was happening more than once for a given push notification. Users will now only be deeplinked once for a given push notification.
- Resolved an issue where macOS label was resolving to a machine that doesn’t exist.

## VAHB Mobile App Bug Fixes | 02/25/2025
- Fixed a bug where phone number, SSN and Email were not properly recognized if they ended in punctuation.
- Fixed a bug where the notification onboarding screen did not appear in the onboarding flow after hitting reset.
- Improved error handling for messaging outages. When /v0/messaging/health/folders/0/messages is down, the VA Mobile app now provides clearer error messaging and improved navigation, preventing users from getting stuck in the inbox.
- Fixed a bug where some assistive tech tech could not get ‘into’/’onto’ screens where the only actionable items are initially offscreen.

## VAHB Mobile App Design System | 02/25/2025
- Incorporated the Icon Component into the app so that the app is compliant with the Design System requirements.

## VAHB Mobile App Design System | 02/19/2025
- Fixed a bug where the Alert Icon was misaligned and not displaying properly. The first line of the description text is now vertically centered with the Alert Icon.

## VAHB Mobile App Bug Fixes | 02/18/2025
- Fixed a bug where rows in a simple list component were too tall.
- Fixed a bug where the Alert component heading was not announced with VoiceOver.

## VAHB Mobile App Bug Fixes | 02/17/2025
- Fixed a bug where VoiceOver was not announcing the role of the SegmentedControl component.
- Resolved an issue where some tests were failing due to how heading roles were set in alert messages. This update ensures tests run smoothly and helps maintain the app’s quality and reliability.

## VAHB Mobile App Design System | 02/17/2025
- The LoadingIndicator was patched in order for the detox/e2e tests to function properly.
- Updated how Snackbars are handled to prevent them from disappearing unexpectedly during navigation. This makes in-app notifications more reliable and consistent.

## VAHB Mobile App Executive Order - Off-Cycle Release | 02/13/2025
- In response to an Executive Order, gender identity information was removed from the profile section of the app.

## VAHB Mobile App Bug Fixes | 02/13/2025
- Fixed a bug where session refresh rates were too short. Users now maintain login session tokens for the full 45 days.

## VAHB Mobile App Bug Fixes | 02/12/2025
- Fixed a bug where there was a typo in the message that’s created for veterans when they select “share the app” from the settings screen.

## VAHB Mobile App Bug Fixes | 02/11/2025
- Fixed a bug where users were not able to see the status of claims they had submitted due to receiving error messages.

## VAHB Mobile App Bug Fixes | 02/04/2025
- Improved the UI for when fields such as date, groupName, type and dosage data comes back empty.

## Mid-December 2024 through late January 2025
- Due to a [holiday mobile code freeze](https://dsva.slack.com/archives/C018V2JCWRJ/p1734372001524819) from December 17 through January 28, no mobile features were released during this period.
- In addition, our team was not granted access to approve PRs in the mobile repo until January 29, 2025. This access was rescinded on March 13, 2025 once the new core mobile team was up and running.

## VAHB Mobile App Unit Tests | 12/13/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Address Summary, Address Validations and Edit Address Screen within the Contact Information Screen.

## VAHB Mobile App Unit Tests | 12/11/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Account Security, In App Recruitment Screen, Notifications Settings Screen and Settings Screen within the Profile Settings Screen.
- Updated app unit tests to use i18n translations instead of hardcoded strings for Edit Direct Deposit Screen, How To Update Direct Deposit Screen and Direct Deposit Screen within the Payments Screen.

## VAHB Mobile App Unit Tests | 12/04/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Edit Email Screen, Edit Phone Number Screen and How Will You Screen within the Contact Information Screen.
- Updated app unit tests to use i18n translations instead of hardcoded strings for No Payments Screen, Payment Issue Screen, Payment Missing Screen and Payment History Screen within the Payment History Screen.
- Updated app unit tests to use i18n translations instead of hardcoded strings for Loa Gate, Login Screen, Onboarding Carousel, Sync Screen and Login Screen within Screens.

## VAHB Mobile App Unit Tests | 11/15/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Personal Information Screen, Gender Identity Screen, How Do I Update Screen and Preferred Name Screen within the Personal Information Screen.

## VAHB Mobile App Unit Tests | 11/14/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Incorrect Service Info, Military Information Screen and No Military Information Access within the Profile Screen.

## VAHB Mobile App Unit Tests | 11/12/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Contact VA Screen, Veterans Crisis Line Screen and Profile Screen within the Home Screen.

## VAHB Mobile App Unit Tests | 11/6/2024
- Updated app unit tests to use i18n translations instead of hardcoded strings for Home Screen.


