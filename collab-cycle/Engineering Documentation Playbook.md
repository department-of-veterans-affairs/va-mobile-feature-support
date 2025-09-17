# Engineering Documentation Playbook

The purpose of this playbook is to provide recommendations for how engineers can efficiently create the necessary [artifacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/eng-sec-checklist.md#artifacts) for a [collaboration cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/overview). There are many touchpoints in a collaboration cycle. This playbook focuses on the [Architecure Intent](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/architecture-intent) touchpoint and the documents/diagrams engineers must create. As an example, here is a [link](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/mfsimh-mobile-overpay-copay-08082025.md#artifacts) to the artifacts created for the overpay/copay architecture intent.

All documents/diagrams must be stored in the [mobile feature support sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support) and be named in this format: `[application]-[document/diagram name]-[date].md`. Date should be in MMDDYYYY format.

## API Endpoint Documentation

TODO

## Engineering Diagrams

After experimenting with multiple tools, [Mermaid Chart](https://www.mermaidchart.com/) has proven to be an excellent way to create engineering diagrams. It offers a "diagrams as code" approach, which brings several key benefits to a technical workflow:

- **Diagram Types**: Mermaid provides syntax to create a variety of engineering diagrams, including flowcharts, sequence diagrams and architecture diagrams.
- **Version Control**: Unlike traditional drag-and-drop tools, Mermaid diagrams are created using a simple, human-readable text syntax that can be stored and versioned in a Git repository. This allows you to track changes to your diagrams alongside your source code, making it easy to see who changed what and when. This also ensures that your documentation stays in sync with your codebase.
- **Speed and Efficiency**: With a simple syntax, you can quickly generate complex diagrams without the manual effort of dragging, dropping, and connecting shapes. This eliminates a lot of the "busy work" associated with traditional diagramming tools.
- **Integration and Portability**: Mermaid diagrams can be easily embedded in GitHub. This makes it simple to include diagrams directly in your project's README.md files or technical documentation. The diagrams are also self-documenting, as the code itself describes the structure.
- **Accessibility and Collaboration**: Since the diagrams are text-based, they can be edited and reviewed by anyone with a simple text editor. This fosters better collaboration among team members, as changes can be proposed and discussed through standard code review processes like pull requests.
- **Automation**: The text-based nature of Mermaid allows for automation. You can use tools and scripts to generate diagrams programmatically, or even use AI-powered tools (like Mermaid Chart's AI chat) to create diagrams from natural language descriptions. This makes it easier to keep diagrams up-to-date as systems evolve.

Here are three different ways to create a diagram with Mermaid:

- **Mermaid's Website**: You can use the free edition of Mermaid create and save up to three diagrams. Once you have finished your diagram, it can be copied and pasted into GitHub and shared with others (see note below). This is probaly the simplest and easiest approach.
- **Visual Studio Code**: There is a [Mermaid Chart extension for VS Code](https://marketplace.visualstudio.com/items?itemName=MermaidChart.vscode-mermaid-chart) that allows you to create, edit and visualize diagrams locally. This also works great.
- **GitHub**: Our GitHub repos also support Mermaid via a plug-in. Using this method, you could edit and preview diagrams directly within GitHub (see note below).

> NOTE: To embed a Mermaid chart in GitHub, you must surround the diagram with a leading line that has three backtick characters followed by the word "mermaid" and a trailing line that has three backtick characters.

Here are some recommendations on how to get started if you are new to Mermaid:

- **Mermaid Documentation**: [Here](https://docs.mermaidchart.com/mermaid-oss/intro/index.html) you can read all about the Mermaid syntax and diagram types.
- **AI Tools**: ChatGPT, Gemini and Copilot can generate Mermaid code via prompting. The paid version of Mermaid also allows for AI chats to create and modify diagrams.

### Architecture Diagram

An architecture diagram is a visual representation that serves as a blueprint for a system, illustrating its components, their relationships, and how they interact. It is a crucial tool for understanding, designing, communicating, and maintaining complex systems.

Mermaid does offer an [architecture](https://docs.mermaidchart.com/mermaid-oss/syntax/architecture.html) diagram type, but it is in beta and very limited. It is better to use a Mermaid [flowchart/graph](https://docs.mermaidchart.com/mermaid-oss/syntax/flowchart.html) to represent an architecture diagram. [Here is an example](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-architecture-diagram-20250806.md) created for the overpay/copay architecture intent.

### Data Flow Diagram

A data flow diagram is a visual representation that maps out how data moves through an information system or a business process. Think of it as a map of data's journey, showing where it originates, how it's transformed, where it's stored, and where it ultimately goes.

Use a Mermaid [flowchart diagram](https://docs.mermaidchart.com/mermaid-oss/syntax/flowchart.html) to create a data flow diagram. [Here is an example](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-data-flow-diagram-20250808.md) created for the overpay/copay architecture intent.

### Sequence Diagram

A sequence diagram is a type of UML (Unified Modeling Language) interaction diagram that visualizes how objects or components interact with each other in a specific scenario or use case over time. It's crucial in software development for understanding and designing the dynamic behavior of a system. Sequence diagrams focus on the order in which messages are sent and received between different participants (objects, components, or actors) in a system.

Use a Mermaid [sequence diagram](https://docs.mermaidchart.com/mermaid-oss/syntax/sequenceDiagram.html) to create one of these. [Here is an example](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-sequence-diagram-20250808.md) created for the overpay/copay architecture intent.

### User Data Flow Diagram

A User Data Flow Diagram is a visual representation that illustrates how data moves through a system from the perspective of a user. It's a specialized type of Data Flow Diagram that emphasizes the user's interaction with the data and the system's response.

Use a Mermaid [flowchart diagram](https://docs.mermaidchart.com/mermaid-oss/syntax/flowchart.html) to create a user data flow diagram. [Here is an example](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/mobile-feature-support/overpayments-copays-user-data-flow-20250729.md) created for the overpay/copay architecture intent.

More advice and examples can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md).

> NOTE: It is not clear whether a User Data Flow Diagram is necessary or not, as it is only mentioned at the bottom of the [Engineering and Security Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/eng-sec-checklist.md#where-to-put-this-checklist-and-what-to-name-it) but is not called out in the [Artifacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/eng-sec-checklist.md#artifacts) section.

## Incident Response Plan

```Incident Response Plan, including Points of Contact for your system and dependent VA back-ends.```
- **Points of Contact**: Identify which team(s) are responsible for owning incidents related to the project. Provide a Slack channel where issues should be reported. If there is an individual PoC, reference them here. If other VA back-end teams are dependencies, note which teams they are and how escalation should occur.
- **Coordination and Messaging**: If applicable, note how you will work with other teams (e.g., Core Mobile) to coordinate any messaging to affected users.
  
```If a security vulnerability is discovered or reported in this code base, what is the plan and timeline for rolling out the fix?```
- **Security Vulnerabilities**: Describe the plan and typical timeline for addressing reported vulnerabilities (e.g., “triage and develop a solution immediately, then test and deploy the fix, with stakeholders notified as soon as it’s live.”).
