# Digital VHIC Integration - Research & Questions

## Overview

This document outlines the research, questions, and architectural considerations for integrating Digital Veterans Health Identification Card (VHIC) functionality into the VA mobile app. The project involves connecting with the VHIC system to enable veterans to request, receive, and display their digital health ID cards within the VA mobile ecosystem.

## Current State Analysis

The VHIC team has provided a complex flow diagram showing their proposed integration approach. Our analysis reveals several architectural inefficiencies when viewed through the lens of the VA.gov platform architecture.

### Current Provider Flow (VHIC Team's Proposal)

The current approach involves multiple direct integrations and complex decision trees:

📊 **[Current Card Creation Flow](./current-mobile-creation.png)** - Shows the provider's proposed sequence for card creation with separate mobile app and VA Notify integrations

📊 **[Current Card Display Flow](./current-mobile-display.png)** - Illustrates the complex authentication and validation flow for displaying cards

### Issues with Current Approach
1. **Architectural Misunderstanding**: The flow treats VA mobile app and VA.gov as separate systems, missing the shared vets-api backend
2. **Complex Integration Points**: Multiple direct API calls between VHIC service, mobile app, and VA Notify

## Proposed Ideal State

Our recommended approach leverages the existing VA.gov platform architecture for a cleaner, more maintainable solution.

### Simplified Integration Architecture

📊 **[Ideal Card Creation Flow](./ideal-mobile-creation.png)** - Streamlined approach using vets-api as the central integration point

📊 **[Ideal Card Display Flow](./ideal-mobile-display.png)** - Standard VA mobile app pattern for data retrieval and display

### Benefits of Ideal Approach
1. **Platform Consistency**: Uses established vets-api patterns
2. **Reduced Complexity**: Single integration point instead of multiple direct connections
3. **Existing Infrastructure**: Leverages current VA Notify integration within vets-api
4. **Maintainability**: Follows existing VA.gov architectural patterns

## Research Findings

### Technical Research

- The [CDSP Proxy](https://github.com/department-of-veterans-affairs/cdsp-mpi-proxy/tree/772497cdb29e498b9bb13a30c8d920ce35660a9b) is a proxy server that utilizes [HAProxy](https://www.haproxy.org/) to help platform applications make requests to different services including MPI, VHIC, and PCMM.
- The [CDS Console API](https://github.com/department-of-veterans-affairs/cds-console-api) is a Spring Boot application that provides a "RESTful" API for the CDS Console. It is a backend service that provides the ability to add additional functionality to the CDS Console.

**Digital Wallet Technical Limitations:**
- Standard image files (JPEG/PNG) cannot be used directly to represent cards in Apple Wallet or Google Wallet
- Apple Wallet allows custom background images but always overlays required elements that cannot be disabled
- Google Wallet restricts custom images to a specific "hero" area at the top
- Neither platform supports passes that are purely image-based

**Digital Wallet Security & Offline Capabilities:**
- Digital wallets are protected by multiple security layers including biometrics (Face ID, fingerprints) and PINs, making them more secure than physical cards
- Core visual and functional card data is cached offline for accessibility
- Internet connection required only for initial setup, token refresh, and real-time updates

### Platform & Infrastructure Research

**Platform Guidelines:**
- [Platform PII Guidance](https://depo-platform-documentation.scrollhelp.site/developer-docs/personal-identifiable-information-pii-guidelines)

### Comparative Analysis Research

**Government Digital ID Card Implementations:**
- Research needed on how other government apps handle similar card features
- Best practices for government digital wallet integrations
- Security patterns used by other federal agencies

### Performance Benchmarking Research

**Expected Performance Characteristics:**
- Response time requirements for card display
- Service Level Agreements (SLAs) with VHIC system
- Baseline performance metrics for comparison

### Accessibility Requirements Research

**Mobile Accessibility Standards:**
- Screen reader support for digital card display
- High contrast mode compatibility
- Voice control integration requirements

## Outstanding Questions

### API Integration & Data Management

**VHIC Endpoints & Integration:**
- What VHIC endpoints currently exist and what is being built?
- Do we need to store VHIC data within VA.gov infrastructure, or can we make real-time API calls for authenticated users?
  - What are the cons of making API calls every time beyond latency?
  - What are response time guarantees or expectations?
- What types of notifications are needed and for what scenarios? Could VA.gov handle these internally without VHIC system callbacks?

**Data Synchronization:**
- How do we handle card updates/revocations in real-time?
- What happens when a veteran's eligibility status changes?
- How often should we sync card data between systems?

### Digital Wallet Implementation

**Wallet Integration Requirements:**
- Can we accurately represent the physical VHIC card in digital wallets without using static images?
- If exact visual representation isn't possible, is it acceptable to provide functionally equivalent data (name, barcode, etc.) with different styling?

### Card Display & Visual Requirements

**Display Specifications:**
- Does card display require a generated image file specifically?
- Who controls style and content guidelines—is there flexibility?
- Could we display a UI version with download options (image, PDF) similar to the Veteran Status Card?
- If image generation is required, what are the specifications?
  - Resolution/Quality requirements
  - Dimensions
  - Format requirements

### Implementation Approach & User Experience

**Integration Strategy:**
- Can integration be handled asynchronously via API rather than redirecting through the VHIC application?
- Is the plan still mobile-first implementation, then web later?

**Offline/Connectivity Handling:**
- What happens when VHIC service is down or unavailable?
- How should we handle network connectivity issues?
- What data should be cached locally for offline access?

### Performance & Infrastructure

**System Capacity & Performance:**
- What volume of requests are anticipated?
- Where is the VHIC Self Service App hosted and are there networking restrictions?
- What are the performance characteristics of downstream systems (timeouts, long-running requests)?
- Is the VHIC system load tested?

**Testing Strategy:**
- How will end-to-end testing work across systems?
- What test environments are available?
- How do we test error scenarios and edge cases?

**Monitoring & Alerting:**
- What metrics should we track for the integration?
- How do we monitor VHIC system health and availability?
- What alerting should be in place for integration failures?

**User Analytics:**
- What usage patterns should we measure?
- How do we track user engagement with digital VHIC features?
- What success metrics define a successful integration?

## Architecture Documentation

This project includes comprehensive architectural diagrams that illustrate both current and proposed approaches:

### 📊 **Architecture Diagrams**

1. **[Current Card Creation](./current-mobile-creation.png)** - Shows the VHIC team's proposed integration flow with separate mobile app handling
2. **[Current Card Display](./current-mobile-display.png)** - Illustrates the complex authentication and validation flow for card display
3. **[Ideal Card Creation](./ideal-mobile-creation.png)** - Streamlined approach using vets-api as the central integration point
4. **[Ideal Card Display](./ideal-mobile-display.png)** - Standard VA mobile app pattern for data retrieval and display

Each diagram includes detailed flow descriptions and highlights the architectural differences between the current proposal and our recommended approach.

### Building Diagrams

To regenerate visual diagrams from the mermaid source files:

```bash
# From the mermaid project root
make compile PROJECT=digital-vhic
```

This generates high-resolution PNG files (2400x1600) using the official VA.gov Design System colors.
