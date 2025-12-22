```
 ********** ********     **     ****     ****       ****     **** ********  ********
/////**/// /**/////     ****   /**/**   **/**      /**/**   **/**/**/////  **////// 
    /**    /**         **//**  /**//** ** /**      /**//** ** /**/**      /**       
    /**    /*******   **  //** /** //***  /**      /** //***  /**/******* /*********
    /**    /**////   **********/**  //*   /**      /**  //*   /**/**////  ////////**
    /**    /**      /**//////**/**   /    /**      /**   /    /**/**             /**
    /**    /********/**     /**/**        /**      /**        /**/**       ******** 
    //     //////// //      // //         //       //         // //       ////////  
```
# VA Mobile Feature Support (MFS)

The VA: Health and Benefits mobile application gives Veterans the ability to manage their health care, benefits, and payments from their mobile phone or tablet. This app is accessible to Veterans on Apple and Android devices. The focus of the Mobile Feature Support team is to develop new features that will improve the VA: Health and Benefits mobile application and support the team’s mission to continuously deliver high-quality digital experiences for the benefit of all Veterans and their families. 

The process of adding a new feature to the mobile app begins with collaboration from the VA.gov product team to better understand how to solve the user's needs. After aligning on the problem to be solved, our team will conduct user research to verify that the feature will meet the user's needs, create designs that align with user research, and finally implement a solution that will provide Veterans with a beneficial user experience. Please connect with our team on OCTO Slack channel #mobile-feature-support-public if your team manages a product not included on the mobile app.  

## Aligned to 2025 OCTO OKRs

MFS actively contributes toward the following 2025 OCTO OKRs:

- **Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.**

## List of Products

Our team has contributed to the following products to date:

#### Currently in progress
   
- [Overpayment and Copayment Debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md)  |  **Objective 1** - Veterans can experience benefit overpayment debt and medical copayment debt. Currently, the mobile app does not have any debt-related information for Veterans to access. MFS is working closely with the Financial Management team to allow Veterans to view their benefit overpayment and medical copayment debts, as well as information and statements on the mobile app within the Payment section. The team is in the process of usability testing. 
- [Digital Wallet: Veteran Status Card](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/mobile/Digital%20Wallet_%20Veteran%20Status%20Card%20Product%20Brief%20.md) | **Objective 1** - Building on the effort to ease the burden on Veterans accessing their Veteran Status Card and providing a digital experience consistent with other consumer mobile apps, the team is developing a digital wallet feature for the Veteran Status Card. The Iterate, Innovate, and Run (IIR) team began initial designs but has passed this project to our team to review, make design adjustments, and implement it on the mobile app. The team is in the process of making design adjustments based on technical findings.
- [Veteran Health Identification Card](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/digital-vhic/product-brief.md) (VHIC) |  **Objective 1** - The VHIC is currently a physical card that is a photo ID Card which offers Veterans convenient and secure access to their identification for VA healthcare services, commissary/exchange privileges, and verification of Veteran status for discounts. The MFS team is working with the VHIC team to make this physical card digital on the VAHB mobile app. The team is in the process of reviewing documentation and diagrams from the VHIC team and coming up with technical limitations that we could experience.
- [API Refactor: Veteran Status Card](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/blob/art.ariel/mermaid/projects/vsc-api-refactor/README.md) | This project documents the architectural refactor of the Veteran Status Card feature, moving from a distributed frontend computation model to a unified backend service approach. The refactor addresses current pain points around code duplication, inconsistent user experience, and maintenance complexity. The benefit of this tech debt to Veterans will allow for additional logic to be implemented on both mobile and web (at the same time and not a coordinated effort for an update on web and an update on mobile) so that Veterans can view their Veteran Status Card or understand why they might not have access to one. The MFS team is collaboratively working with the IIR team on this effort and is currently waiting for the IIR team to create the Shared Service. 

 

#### Completed Product Contributions

- Mobile Analytics | MFS is worked with the Benefits team to track mobile analytics for claim letter downloads in aggregate and by type of claim letter. This enabled the Benefits and Mobile app teams to continue improving experiences for Veterans related to claim letters and how they need to surface that information. This was part of the August 12 mobile app release, and the Benefits team will be able to begin tracking analytics for individual claim letter downloads and in aggregate.
- Mobile App Sort Updates | To reduce load on Veterans' devices, the team is addressing technical debt by refactoring the sort function to move it from the frontend to an API layer. This was released on July 29, 2025 to the mobile app.
- [Veteran Status Card Redesign Web](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/new-home-and-ux-product-outline.md)  |  **Objective 1** - The Veteran Status Card design on VA.gov and the mobile app are not aligned. The Iterate, Innovate, and Run (IIR) team managed the research and designs that would provide Veterans with designs that are the same as VA.gov and mobile. Our team launched this to 100% users on July 10, 2025.  
- [Veteran Status Card Redesign Mobile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/mobile/implementation-of-vsc-redesign.md)  |  **Objective 1** - The Veteran Status Card design on VA.gov and the mobile app are not aligned. The Iterate, Innovate, and Run (IIR) team managed the research and designs that would provide Veterans with designs that are the same as VA.gov and mobile. This was released on May 6, 2025 to the mobile app.  
- [Pre-Need Burial](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/product/product-brief.md)  |  **Objective 1** - Within the authenticated section of VA.gov, Veterans can learn what pre-need burial is and if they are eligible to be buried in a VA national cemetery, by completing form 40-10007. Eligibility decisions are currently sent via mail or phone, and no digital versions are accessible from Veterans’ accounts. Our team conducted user research to understand if Veterans would like to see status updates on their application, have the decision letter available within their VA.gov account, and be able to share the decision letter with other individuals. The research findings and current technical limitations to implement research recommendations on the mobile app are listed in the Pre-Need Burial Product Brief and the MFS team concluded the research findings on May 5, 2025.   
- [Veteran Status Card Surfacing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/mobile/surfacing-vsc-product-brief.md)  |  **Objective 1** - The Veteran Status Card provides information about a Veteran's Status and is only accessible to eligible Veterans. Mobile app users do not know the Veteran Status Card exists in the mobile app if they are not eligible. The Iterate, Innovate, and Run (IIR) team managed the research and designs to allow ineligible Veterans to be presented with the Proof of Veteran Status button and understand why they are not eligible for this card. This was released on April 22, 2025 to the mobile app.

## Our Work at a Glance
- [Release Notes](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/blob/main/release-notes/readme.md)
- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746818307189/ca2c7cbf7050f6c2b68a8c1d2052694ed5c94d15)

## DSVA Slack Channel

Please reach out to us at our DSVA Slack channel: `#mobile-feature-support-public`

## Key Stakeholders
- Michelle Middaugh, VA Product Owner, VA, suzanne.middaugh@va.gov
- Parker Baranowski, Program Manager, Oddball, parker.baranowski@oddball.io
- Natalie Gibbons, Product Lead, Oddball, natalie.davied@oddball.io
- Emily Goodrich, Delivery Lead, Oddball, emily.goodrich@oddball.io
- Dave Formanek, Tech Lead, Oddball, dave.formanek@oddball.io
- Natasha Huckleberry, UX Lead, Oddball, natasha.huckleberry@oddball.io 
