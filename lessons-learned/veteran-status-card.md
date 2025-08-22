# Lessons Learned 
## Product: Veteran Status Card (IIR)

This tracks lessons learned from working on features for other teams so that we can continuously improve our process. Everyone from both teams is welcome to contribute to this document.

## Product/Delivery
- Syncing with Megan once a week. Allowed us to hear about changes as they were happening. 
- Staging Review + PSIRR! IIR was impressed by our teams work on this. Nice to work with IIR and see previous examples of their artifacts.
- Kickoff mtg with the team with IIR/MFS on this effort. (project handoff).
- Kickoff mtg with MFS team following kickoff with IIR/MFS
  - High level kickoff with MFS team before design.
  - Engineering spikes during design.
  - Review as a team after design is done before implementation.
- Stakeholders changing their mind after something has been implemented and even got sign off. Re. displaying disability rating at 0%.
- LOE for the VA.gov work. I assumed this would be a smaller lift. This goes back to how complicated the VSC error logic actually was. How can we get a better sense of LOE?
- Figuring out analytics and tracking.
  - Talking with engineers earlier in the process about those and creating tickets to make sure we can track everything BEFORE we release. 

## Research/Design
- xx

## Engineering
- Using TestRail to organize test cases.
  - Start using TestRail earlier in the process as you find staging test users and understand error conditions. 
- Rolling out the feature was very successful! We didn't see any major concerns and didn't have any bug fixes for VA.gov or that I can recall on mobile.
- Finding staging users to test various error conditions.
  - Find staging test users and define all error conditions up front.
- VSC error logic confusing to implement.
  - If MFS would have been involved with the Architecture Intent meeting, it would have helped our team to gauge the LOE/complexities that could exist.
- Late feedback from Profile team that changed what engineers had already implemented.
- PR review and not understanding that process. It pushed our internal testing back by a Sprint, which then caused us to reschedule staging review.
- We need to make sure we are testing on different desktop and mobile web browsers. 

## Other
- A mobile team working on VA.gov for the first time!
- Are there a list of questions that need to be answered by a web experience team before MFS engineers pick up the work?
  - List of test users
