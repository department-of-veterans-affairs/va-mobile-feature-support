# Veteran Status Card API Refactor

## Overview

This project documents the architectural refactor of the Veteran Status Card feature, moving from a distributed frontend computation model to a unified backend service approach. The refactor addresses current pain points around code duplication, inconsistent user experience, and maintenance complexity.

## Problem Statement

### Current Implementation Issues

The existing Veteran Status Card feature suffers from several architectural problems:

1. **Duplicated Business Logic**: Both web (va.gov) and mobile platforms implement their own computation logic for determining veteran status display
2. **Inconsistent Messaging**: Each platform handles error states and user messaging differently, leading to inconsistent user experience
3. **Frontend Complexity**: Complex business logic in frontend applications makes testing and maintenance difficult
4. **Platform Drift Risk**: Separate implementations increase the risk of platforms diverging over time
5. **Maintenance Overhead**: Changes to business logic require coordinated updates across multiple codebases

### Current Architecture

The current implementation follows this pattern:
- **Web Platform**: Calls `/serviceHistory` and `/vetVerificationStatus` APIs, performs computation in frontend, displays results
- **Mobile Platform**: Calls separate mobile-specific APIs, performs similar computation in frontend, displays results with hardcoded messaging based on `notConfirmedReason`

📊 **[View Current Architecture Diagram](./current-architecture.md)**

## Proposed Solution

### New Unified Architecture

The refactor introduces a new unified backend service that:

1. **Centralizes Business Logic**: All computation moves to a single backend service
2. **Standardizes Response Format**: Returns UI-ready data with consistent messaging
3. **Maintains Backward Compatibility**: Introduces new endpoints while preserving existing ones
4. **Future-Proofs Design**: Easily accommodates additional data sources and business logic changes

### Key Components

#### New Unified Endpoint
- **Endpoint**: `/veteranStatusCard`
- **Consumers**: Both web and mobile applications
- **Response**: Standardized format with status, data, UI configuration, and messaging

#### Unified Backend Service
- **Service**: Veteran Status Card Service
- **Responsibilities**: 
  - Aggregate data from multiple sources (Service History, Vet Verification Status, future sources)
  - Apply business logic to determine veteran status
  - Generate standardized responses with UI-ready data
  - Handle all error conditions and messaging

#### Standardized Response Structure
```json
{
  "status": "success|warning|error",
  "data": {
    "displayType": "verified|pending|unavailable",
    "branch": "string",
    "serviceYears": "string"
  },
  "ui": {
    "title": "string",
    "description": "string",
    "actionButton": {
      "text": "string",
      "action": "string"
    }
  },
  "message": "string (for warning/error cases)"
}
```

📊 **[View Proposed Architecture Diagram](./proposed-architecture.md)** | 📊 **[View API Response Structure](./api-response-structure.md)**

## Benefits

### Immediate Benefits
1. **Single Source of Truth**: All business logic centralized in one service
2. **Consistent User Experience**: Identical messaging and behavior across platforms
3. **Simplified Frontend**: Frontends simply render what the API provides
4. **Improved Maintainability**: Changes only require backend updates

### Long-term Benefits
1. **Future-Proof Design**: Easy to add new data sources or modify business logic
2. **Reduced Development Overhead**: New features don't require platform-specific implementations
3. **Enhanced Testing**: Business logic can be thoroughly tested in isolation
4. **Better Reliability**: Centralized error handling and messaging

📊 **[View Data Flow Comparison](./data-flow-comparison.md)** - See the complete transformation from current to proposed architecture

## Migration Strategy

### Phase 1: New Endpoint Development
- Develop new `/veteranStatusCard` endpoint
- Implement unified backend service
- Create comprehensive test suite

### Phase 2: Client Integration
- Update web application to consume new endpoint
- Update mobile application to consume new endpoint
- Maintain parallel operation with existing endpoints

### Phase 3: Validation & Optimization
- Monitor performance and reliability
- Collect user feedback on consistency improvements
- Optimize based on usage patterns

### Phase 4: Legacy Deprecation
- Gradually deprecate old endpoints
- Remove frontend computation logic
- Clean up unused code

## Architecture Documentation

This project includes comprehensive architectural diagrams that illustrate the refactor approach:

### 📊 **Architecture Diagrams**

1. **[Current Architecture](./current-architecture.md)** - Shows the existing parallel implementation with frontend computation issues
2. **[Proposed Architecture](./proposed-architecture.md)** - Illustrates the new unified backend service architecture
3. **[Data Flow Comparison](./data-flow-comparison.md)** - Side-by-side comparison showing the transformation and benefits
4. **[API Response Structure](./api-response-structure.md)** - Details the new standardized response format

Each diagram includes detailed descriptions, high-resolution images, and links to the source Mermaid files for editing.

## Getting Started

### Building Diagrams

To regenerate visual diagrams from the mermaid source files:

```bash
# From the mermaid project root
make build PROJECT=vsc-api-refactor
```

This generates high-resolution PNG files (2400x1600) using the official VA.gov Design System colors.

## Future Considerations

### Extensibility
The new architecture easily accommodates:
- Additional data sources (disability ratings, education benefits, etc.)
- New business logic rules
- Enhanced error handling and recovery
- Performance optimizations

### Monitoring
Consider implementing:
- Performance metrics for the new service
- User experience tracking across platforms
- Error rate monitoring and alerting
- Business logic audit trails

## Conclusion

This refactor represents a significant architectural improvement that addresses current pain points while positioning the Veteran Status Card feature for future growth and maintenance. The unified backend approach ensures consistent user experience, reduces maintenance overhead, and provides a solid foundation for future enhancements.