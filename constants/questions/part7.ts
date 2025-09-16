import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 301,
    question: "Which of the following security concepts is accomplished when granting access after an individual has logged into a computer network?",
    options: [
      { label: 'A', text: 'Authorization' },
      { label: 'B', text: 'Identification' },
      { label: 'C', text: 'Non-repudiation' },
      { label: 'D', text: 'Authentication' }
    ],
    answer: ['A'],
    explanation: "Authorization is the security concept that is accomplished when granting access after an individual has successfully logged into a computer network. Logging in typically involves identification (claiming an identity) and authentication (verifying that identity). Once the system has confirmed the user's identity, authorization is the subsequent process of determining the specific resources, services, or operations the authenticated user is permitted to access or perform. This aligns with the principle of least privilege, ensuring users only have access to what they explicitly need.",
    incorrectOptionsExplanation: "B. Identification: This is the act of a user claiming an identity (e.g., providing a username). It occurs before or during the login process, not as the step of granting access after login.\nC. Non-repudiation: This ensures that a party cannot deny having performed an action. While an important security service, it's not the process of granting access rights after login.\nD. Authentication: This is the process of verifying a user's claimed identity (e.g., checking a password). It is a prerequisite to authorization and part of the login process, not the act of granting access based on that verified identity.",
    isMultipleChoice: false
  },
  {
    id: 302,
    question: "A security professional discovers a folder containing an employee's personal information on the enterprise's shared drive. Which of the following best describes the data type the security professional should use to identify organizational policies and standards concerning the storage of employees' personal information?",
    options: [
      { label: 'A', text: 'Legal' },
      { label: 'B', text: 'Financial' },
      { label: 'C', text: 'Privacy' },
      { label: 'D', text: 'Intellectual property' }
    ],
    answer: ['C'],
    explanation: "Employee personal information, often referred to as Personally Identifiable Information (PII), directly pertains to an individual's privacy. Organizational policies and standards concerning the collection, storage, handling, and protection of such data are categorized under 'Privacy.' Identifying the data as privacy-sensitive allows the security professional to locate the specific 'Privacy Policies' or 'Data Protection Policies' that govern its appropriate management within the enterprise. This aligns with established frameworks for data governance and information security.",
    incorrectOptionsExplanation: "A. Legal: While there are legal requirements for protecting personal information (e.g., data privacy laws), 'Legal' is a very broad category. 'Privacy' is the more specific domain concerning personal data.\nB. Financial: Personal information encompasses more than just financial data (e.g., home address, contact details, health records). Classifying it solely as financial would be too narrow.\n· D. Intellectual property: Intellectual property refers to creations of the mind (e.g., patents, copyrights, trademarks). An employee's personal information is not considered intellectual property in this context.",
    isMultipleChoice: false
  },
  {
    id: 303,
    question: "An organization needs to monitor its users' activities to prevent insider threats. Which of the following solutions would help the organization achieve this goal?",
    options: [
      { label: 'A', text: 'Behavioral analytics' },
      { label: 'B', text: 'Access control lists' },
      { label: 'C', text: 'Identity and access management' },
      { label: 'D', text: 'Network intrusion detection system' }
    ],
    answer: ['A'],
    explanation: "Behavioral analytics, often part of User and Entity Behavior Analytics (UEBA) systems, is designed to monitor users' activities by establishing a baseline of normal behavior and then detecting deviations or anomalies. These anomalies can be indicative of insider threats, such as compromised credentials, malicious insiders, or unintentional risky behavior. This solution directly addresses the need to 'monitor users' activities to prevent insider threats' by focusing on how users interact with systems and data.",
    incorrectOptionsExplanation: "· B. Access control lists (ACLs): ACLs are a preventative control that define permissions for resources (e.g., files, network services). They specify what a user is allowed to access but do not actively monitor or analyze the ongoing behavior of users' activities for anomalies indicative of threats.\n· C. Identity and access management (IAM): IAM systems manage user identities and their access privileges, focusing on authentication and authorization. While IAM logs access events, its primary function is not the continuous monitoring and analysis of user behavior for suspicious patterns beyond initial access control.\n· D. Network intrusion detection system (NIDS): A NIDS monitors network traffic for known malicious signatures or anomalous network activity. While it might detect some network-based insider activities, it doesn't specifically focus on individual user behavior at the host or application level, which is crucial for many insider threat scenarios.",
    isMultipleChoice: false
  },
  {
    id: 304,
    question: "A company wants to track modifications to the code used to build new virtual servers. Which of the following will the company most likely deploy?",
    options: [
      { label: 'A', text: 'Change management ticketing system' },
      { label: 'B', text: 'Behavioral analyzer' },
      { label: 'C', text: 'Collaboration platform' },
      { label: 'D', text: 'Version control tool' }
    ],
    answer: ['D'],
    explanation: "A version control system (VCS) is a software tool specifically designed to manage and track changes to source code and other collections of files over time. It allows multiple developers to collaborate, maintains a history of all modifications, and enables reverting to previous versions if needed. This directly addresses the company's need to track modifications to the code used for building virtual servers.",
    incorrectOptionsExplanation: "· A. Change management ticketing system: While related to managing changes in an IT environment, a ticketing system primarily tracks the lifecycle of a change request (approval, implementation, closure) rather than the specific code modifications themselves. It often integrates with a VCS but doesn't perform the code tracking.\n· B. Behavioral analyzer: This type of tool is typically used for security monitoring by detecting anomalies in system or network behavior, or in software testing to observe program execution, not for tracking changes to source code.\n· C. Collaboration platform: While development teams use collaboration platforms (e.g., wikis, messaging tools), these platforms facilitate communication and document sharing. They do not inherently provide the granular tracking of code modifications that a version control system offers.",
    isMultipleChoice: false
  },
  {
    id: 305,
    question: "Which of the following should an organization focus on the most when making decisions about vulnerability prioritization?",
    options: [
      { label: 'A', text: 'Exposure factor' },
      { label: 'B', text: 'CVSS' },
      { label: 'C', text: 'CVE' },
      { label: 'D', text: 'Industry impact' }
    ],
    answer: ['B'],
    explanation: "Organizations should primarily focus on the Common Vulnerability Scoring System (CVSS) when making decisions about vulnerability prioritization. CVSS provides a standardized, open framework for communicating the characteristics and severity of software vulnerabilities. Its numerical scores (Base, Temporal, and Environmental) help organizations systematically assess and prioritize vulnerabilities for remediation based on their potential impact, exploitability, and the current threat landscape. This allows for a consistent and data-driven approach to addressing the most critical issues first. While other factors are relevant, CVSS offers the most direct and widely adopted system for scoring vulnerability severity to inform prioritization.",
    incorrectOptionsExplanation: "· A. Exposure factor: This is a component of quantitative risk assessment, representing the percentage of asset value lost from a threat event. It contributes to overall risk understanding but isn't the primary system for prioritizing diverse technical vulnerabilities.\n· C. CVE: Common Vulnerabilities and Exposures (CVE) is a system for uniquely identifying publicly known cybersecurity vulnerabilities. It provides a reference point but doesn't intrinsically score or prioritize them.\n· D. Industry impact: While important for contextualizing risk, 'industry impact' is a broad consideration that lacks the specific, standardized scoring mechanism for individual vulnerabilities that CVSS provides for initial prioritization.",
    isMultipleChoice: false
  },
  {
    id: 306,
    question: "Company A jointly develops a product with Company B, which is located in a different country. Company A finds out that their intellectual property is being shared with unauthorized companies. Which of the following has been breached?",
    options: [
      { label: 'A', text: 'SLA' },
      { label: 'B', text: 'AUP' },
      { label: 'C', text: 'SOW' },
      { label: 'D', text: 'MOA' }
    ],
    answer: ['D'],
    explanation: "A Memorandum of Agreement (MOA) is a formal document outlining the terms and details of a cooperative relationship between two or more parties. In a joint development project, especially one involving intellectual property (IP), an MOA (or a similar agreement like a Joint Development Agreement) would typically define each party's rights, responsibilities, and restrictions concerning the IP, including how it can be used, shared, and protected. Unauthorized sharing of IP with third parties by one company would constitute a breach of these agreed-upon terms within the MOA.",
    incorrectOptionsExplanation: "· A. SLA (Service Level Agreement): An SLA defines the expected level of service, performance metrics, and remedies between a service provider and a client. It does not primarily govern intellectual property rights in a joint development context.\n· B. AUP (Acceptable Use Policy): An AUP dictates how users may use an organization's information systems and networks. It's internally focused or user-facing, not primarily for inter-company IP agreements in a partnership.\n· C. SOW (Statement of Work): An SOW details specific project tasks, deliverables, timelines, and pricing. While it might reference IP if deliverables involve new IP, the overarching rules for IP ownership, sharing, and protection between collaborating entities are typically in a broader agreement like an MOA.",
    isMultipleChoice: false
  },
  {
    id: 307,
    question: "Which of the following most accurately describes the order in which a security engineer should implement secure baselines?",
    options: [
      { label: 'A', text: 'Deploy, maintain, establish' },
      { label: 'B', text: 'Establish, maintain, deploy' },
      { label: 'C', text: 'Establish, deploy, maintain' },
      { label: 'D', text: 'Deploy, establish, maintain' }
    ],
    answer: ['C'],
    explanation: "The implementation of secure baselines follows a logical lifecycle. First, baselines must be established by defining the required security configurations based on risk assessments, industry standards, and organizational policies. This phase involves identifying and documenting the specific settings and controls. Next, these established baselines are deployed across the relevant IT systems and applications. Finally, the deployed baselines must be continuously maintained through ongoing monitoring for compliance, periodic review, updates to address new threats or vulnerabilities, and audits to ensure their continued effectiveness and relevance. This sequence ensures a systematic and secure approach to configuration management.",
    incorrectOptionsExplanation: "· A. Deploy, maintain, establish: This order is incorrect because establishing (defining) a baseline after it has already been deployed and maintained is illogical. A defined standard is needed before deployment and subsequent maintenance.\n· B. Establish, maintain, deploy: While the definition of a baseline (established content) might be updated or refined (a form of maintenance on the definition itself) before widespread deployment, the primary 'maintain' phase in operational security refers to the upkeep of the deployed baseline on live systems.\n· D. Deploy, establish, maintain: Deploying systems or configurations without first establishing a defined secure baseline introduces significant risks. The security baseline must be defined before it can be effectively implemented or deployed.",
    isMultipleChoice: false
  },
  {
    id: 308,
    question: "Which of the following are the best security controls for controlling on-premises access? (Select two.)",
    options: [
      { label: 'A', text: 'Swipe card' },
      { label: 'B', text: 'Picture ID' },
      { label: 'C', text: 'Phone authentication application' },
      { label: 'D', text: 'Biometric scanner' },
      { label: 'E', text: 'Camera' },
      { label: 'F', text: 'Memorable questions' }
    ],
    answer: ['A', 'D'],
    explanation: "The best security controls for controlling on-premises (physical) access from the given options are swipe cards and biometric scanners. Swipe cards represent a token-based ('something you have') authentication factor, commonly used in Physical Access Control Systems (PACS) to grant or deny entry. Biometric scanners utilize unique physiological characteristics ('something you are') for authentication, providing a strong and reliable method for controlling access to physical locations. These methods are often electronic and can be automated, offering robust control over ingress and egress.",
    incorrectOptionsExplanation: "· B. Picture ID: While picture IDs are used for visual verification by personnel, they are primarily an identification method supporting a human-enforced control, rather than an automated control mechanism themselves. They are more prone to human error or forgery compared to automated systems.\n· C. Phone authentication application: These applications are predominantly used for logical access control (e.g., multi-factor authentication for systems and applications), not as a primary mechanism for controlling physical entry to premises.\n· E. Camera: Cameras are a detective and deterrent control, used for monitoring and recording access. They do not actively control (i.e., grant or deny) physical access themselves.\n· F. Memorable questions: This is a knowledge-based authentication factor ('something you know') typically used for logical access, such as password recovery, and is not suitable for controlling physical on-premises access.",
    isMultipleChoice: true
  },
  {
    id: 309,
    question: "Which of the following is the best way to validate the integrity and availability of a disaster recovery site?",
    options: [
      { label: 'A', text: 'Lead a simulated failover.' },
      { label: 'B', text: 'Conduct a tabletop exercise.' },
      { label: 'C', text: 'Periodically test the generators.' },
      { label: 'D', text: 'Develop requirements for database encryption.' }
    ],
    answer: ['A'],
    explanation: "A simulated failover, often referred to as a functional or parallel test, is the most effective way to validate the integrity and availability of a disaster recovery (DR) site. This type of test involves activating the DR site and its systems to ensure they can take over operations, data is consistent (integrity), and services are accessible (availability). It provides a realistic assessment of the DR capabilities without necessarily impacting the production environment if done in a simulated or parallel mode. Other methods are less comprehensive for this specific validation goal.",
    incorrectOptionsExplanation: "· B. Conduct a tabletop exercise: This is a discussion-based review of DR plans and procedures. While valuable for identifying gaps in the plan, it does not actively test the technical integrity or actual availability of the DR site's systems.\n· C. Periodically test the generators: Testing generators ensures power availability, a crucial component for a DR site. However, it only validates one aspect of infrastructure and does not confirm the integrity of data, applications, or overall system availability.\n· D. Develop requirements for database encryption: This is a security planning and implementation activity focused on data confidentiality and integrity at rest/transit. It is not a method for validating the operational readiness and availability of a DR site following a disaster.",
    isMultipleChoice: false
  },
  {
    id: 310,
    question: "While conducting a business continuity tabletop exercise, the security team becomes concerned by potential impacts if a generator fails during failover. Which of the following is the team most likely to consider in regard to risk management activities?",
    options: [
      { label: 'A', text: 'RPO' },
      { label: 'B', text: 'ARO' },
      { label: 'C', text: 'BIA' },
      { label: 'D', text: 'MTTR' }
    ],
    answer: ['D'],
    explanation: "When a critical component like a generator fails during a business continuity tabletop exercise, the security team's concern about 'potential impacts' directly relates to the duration of the outage caused by this failure. Mean Time To Repair (MTTR) is the specific metric that quantifies how long it will take to repair or restore the failed generator. Considering the MTTR is a crucial risk management activity because it helps the team estimate the length of the disruption, determine if Recovery Time Objectives (RTOs) for dependent systems can still be met, and thereby assess the severity of the business impact. Understanding the MTTR is essential for making informed decisions about immediate response and recovery actions.",
    incorrectOptionsExplanation: "· A. RPO (Recovery Point Objective): RPO defines the maximum acceptable amount of data loss measured in time. While a prolonged outage due to generator failure could indirectly affect data, RPO is not the primary consideration for the impact of the generator's downtime itself.\n· B. ARO (Annualized Rate of Occurrence): ARO estimates how often a particular event (like a generator failure) is expected to occur within a year. This is relevant for long-term risk assessment but not the immediate consideration when dealing with the impacts of an active failure in an exercise.\n· C. BIA (Business Impact Analysis): A BIA is a broader analysis to identify and quantify the potential impacts of disruptions on business functions and is used to determine RTOs. While the team is concerned about impacts (which the BIA helps define), the MTTR of the generator is a critical, specific input needed during the event to understand the duration that leads to those impacts. The BIA provides the context for impact, but MTTR is the immediate factor related to the generator's failure.",
    isMultipleChoice: false
  }
];
