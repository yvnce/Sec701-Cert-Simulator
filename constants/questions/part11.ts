import type { Question } from '../../types';

export const questions: Question[] = [
    {
      id: 501,
      question: "Which of the following best describe the benefits of a microservices architecture when compared to a monolithic architecture? (Select two).",
      options: [
        { label: 'A', text: 'Easier debugging of the system' },
        { label: 'B', text: 'Reduced cost of ownership of the system' },
        { label: 'C', text: 'Improved scalability of the system' },
        { label: 'D', text: 'Increased compartmentalization of the system' },
        { label: 'E', text: 'Stronger authentication of the system' },
        { label: 'F', text: 'Reduced complexity of the system' }
      ],
      answer: ['C', 'D'],
      explanation: "Microservices architectures offer improved scalability because individual services can be scaled independently based on their specific demands, unlike monolithic applications where the entire application must be scaled. They also provide increased compartmentalization (also referred to as modularity or fault isolation), as each service is a self-contained unit. This means a failure in one service is less likely to impact other services, and teams can develop, deploy, and manage services independently.",
      incorrectOptionsExplanation: "· A. Easier debugging of the system: Debugging can be more complex in microservices due to the distributed nature, involving multiple services and network calls.\n· B. Reduced cost of ownership of the system: While there can be cost benefits in targeted scaling, the overall operational overhead and infrastructure for managing many services can potentially increase costs. It's not a guaranteed primary benefit.\n· E. Stronger authentication of the system: Authentication mechanisms are independent of the architectural style. Microservices can introduce challenges in managing authentication and authorization across distributed services.\n· F. Reduced complexity of the system: While individual microservices are simpler, the overall system complexity, including inter-service communication, distributed transactions, and operational management, often increases.",
      isMultipleChoice: true
    },
    {
      id: 502,
      question: "A company is using a legacy FTP server to transfer financial data to a third party. The legacy system does not support SFTP, so a compensating control is needed to protect the sensitive, financial data in transit. Which of the following would be the most appropriate for the company to use?",
      options: [
        { label: 'A', text: 'Telnet connection' },
        { label: 'B', text: 'SSH tunneling' },
        { label: 'C', text: 'Patch installation' },
        { label: 'D', text: 'Full disk encryption' }
      ],
      answer: ['B'],
      explanation: "The core issue is protecting sensitive financial data in transit when using a legacy FTP server that doesn't support SFTP. SSH tunneling (also known as SSH port forwarding) encapsulates the insecure FTP traffic within an encrypted SSH connection. This effectively creates a secure channel for the FTP data to travel through, protecting its confidentiality and integrity from eavesdropping or modification during transmission. This serves as an appropriate compensating control when a natively secure protocol like SFTP is unavailable.",
      incorrectOptionsExplanation: "· A. Telnet connection: Telnet is an inherently insecure protocol that transmits data, including credentials, in cleartext. Using Telnet would exacerbate the security risk, not mitigate it.\n· C. Patch installation: While crucial for overall system security, installing patches on the FTP server addresses software vulnerabilities. It does not inherently add encryption to the FTP protocol itself if the legacy system's FTP service doesn't support it.\n· D. Full disk encryption: This protects data at rest on the server's storage media. It does not provide any protection for data while it is being transmitted over the network.",
      isMultipleChoice: false
    },
    {
      id: 503,
      question: "Which of the following are the best for hardening end-user devices? (Select two)",
      options: [
        { label: 'A', text: 'Full disk encryption' },
        { label: 'B', text: 'Group-level permissions' },
        { label: 'C', text: 'Account lockout' },
        { label: 'D', text: 'Endpoint protection' },
        { label: 'E', text: 'Proxy server' },
        { label: 'F', text: 'Segmentation' }
      ],
      answer: ['A', 'D'],
      explanation: "Hardening end-user devices involves implementing multiple layers of security to protect against various threats. Full disk encryption (FDE) is crucial for protecting data at rest. If a device is lost or stolen, FDE ensures that the data stored on the hard drive remains encrypted and inaccessible to unauthorized individuals. This directly addresses the confidentiality of data on the endpoint. Endpoint protection (EPP) solutions provide a comprehensive suite of security capabilities, including anti-malware, host-based firewalls, intrusion detection/prevention systems, and potentially other security features. EPP aims to prevent malicious software from executing, detect and block attacks, and provide visibility into endpoint security status. This is fundamental for protecting the device from active threats and compromises. These two measures offer broad and foundational security enhancements for end-user devices, addressing both data protection in case of physical loss and active defense against a wide range of cyber threats.",
      incorrectOptionsExplanation: "· B. Group-level permissions: While important for overall network security and access control to resources, group-level permissions primarily manage user access to network shares or applications rather than directly hardening the individual end-user device's resilience against compromise or data theft from the device itself.\n· C. Account lockout: This is a valuable security measure that helps prevent brute-force login attempts. However, it's a more specific control compared to the broad protection offered by FDE (for data at rest) and EPP (for active threats). While part of hardening, it's not as comprehensive as A or D.\n· E. Proxy server: A proxy server is a network device or service that acts as an intermediary for requests. While it can offer security benefits like content filtering at the network level, it's not a hardening measure applied directly on the end-user device itself.\n· F. Segmentation: Network segmentation is a network security strategy that divides a network into smaller, isolated segments to limit the spread of attacks. It's a network architecture control, not a direct hardening technique for an individual end-user device.",
      isMultipleChoice: true
    },
    {
      id: 504,
      question: "Which of the following architecture models ensures that critical systems are physically isolated from the network to prevent access from users with remote access privileges?",
      options: [
        { label: 'A', text: 'Segmentation' },
        { label: 'B', text: 'Virtualized' },
        { label: 'C', text: 'Air-gapped' },
        { label: 'D', text: 'Serverless' }
      ],
      answer: ['C'],
      explanation: "An air gap is a security measure where a secure computer network is physically isolated from unsecured networks, such as the public internet or an unsecured local area network. This means the computer or network has no network interface controllers connected to other networks, creating a physical separation. This directly addresses the requirement of physical isolation to prevent remote access.",
      incorrectOptionsExplanation: "· A. Segmentation: Network segmentation involves dividing a network into smaller, isolated subnetworks or zones, often using firewalls or VLANs. While it enhances security by limiting the spread of attacks, it is typically a logical separation, not necessarily complete physical isolation from all external connectivity.\n· B. Virtualized: Virtualization abstracts computing resources from physical constraints, allowing multiple virtual machines to run on single physical hardware. While virtual machines can be isolated from each other, virtualization itself doesn't ensure physical isolation of the entire system from external networks.\n· D. Serverless: Serverless architecture is a cloud computing execution model where the cloud provider manages the server infrastructure, and application code is run in stateless compute containers. This model is about how applications are deployed and run, not about the physical network isolation of critical systems from remote access.",
      isMultipleChoice: false
    },
    {
      id: 505,
      question: "A vendor salesperson is a personal friend of a company’s Chief Financial Officer (CFO). The company recently made a large purchase from the vendor, which was directly approved by the CFO. Which of the following best describes this situation?",
      options: [
        { label: 'A', text: 'Rules of engagement' },
        { label: 'B', text: 'Conflict of interest' },
        { label: 'C', text: 'Due diligence' },
        { label: 'D', text: 'Contractual impact' },
        { label: 'E', text: 'Reputational damage' }
      ],
      answer: ['B'],
      explanation: "A conflict of interest occurs when an individual's personal interests such as a friendship could compromise, or appear to compromise, their objective professional judgment or actions. In this scenario, the CFO's personal friendship with the vendor's salesperson creates a situation where their decision to approve a large purchase might be influenced by this relationship rather than solely by the company's best interests. An independent observer might reasonably question the impartiality of the CFO's decision due to this personal connection. This aligns with definitions from academic institutions regarding situations where private interests could diverge from professional obligations.",
      incorrectOptionsExplanation: "· A. Rules of engagement: This term typically defines the protocols and permissions for conducting an activity, such as a penetration test or military operation, not an ethical dilemma in procurement.\n· C. Due diligence: This refers to the process of reasonable investigation or care taken before entering into an agreement. While a conflict of interest might impair due diligence, the term itself describes the investigatory process, not the ethical conflict.\n· D. Contractual impact: This refers to the consequences or effects on a contract. While a conflict of interest could lead to negative contractual impacts, it is a potential outcome, not a description of the situation itself.\n· E. Reputational damage: This is a potential negative consequence that could arise from a conflict of interest, especially if mishandled or perceived negatively, but it doesn't describe the underlying ethical situation.",
      isMultipleChoice: false
    },
    {
      id: 506,
      question: "A security analyst wants to automate a task that shares data between systems. Which of the following is the best option for the analyst to use?",
      options: [
        { label: 'A', text: 'SOAR' },
        { label: 'B', text: 'API' },
        { label: 'C', text: 'SFTP' },
        { label: 'D', text: 'RDP' }
      ],
      answer: ['B'],
      explanation: "An API (Application Programming Interface) is the most suitable option for automating data sharing between systems. APIs define how different software components should interact, enabling seamless and automated data exchange. They provide a structured and standardized way for applications to request and share information programmatically, which is essential for automation. For instance, a security information and event management (SIEM) system might use APIs to pull threat intelligence data from external feeds or to send alert data to a ticketing system automatically.",
      incorrectOptionsExplanation: "· A. SOAR (Security Orchestration, Automation and Response): SOAR platforms utilize APIs to connect different security tools and automate workflows, but SOAR itself is a broader system, not the fundamental enabling technology for data sharing.\n· C. SFTP (SSH File Transfer Protocol): SFTP is a protocol for secure file transfers. While it can be automated for batch data sharing, it's less flexible than APIs for real-time, granular data exchange between applications.\n· D. RDP (Remote Desktop Protocol): RDP is used for accessing and controlling a remote computer's desktop. It is not designed for automated data sharing between systems at a programmatic level.",
      isMultipleChoice: false
    },
    {
      id: 507,
      question: "The help desk receives multiple calls that machines with an outdated OS version are running slowly. Several users are seeing virus detection alerts. Which of the following mitigation techniques should be reviewed first?",
      options: [
        { label: 'A', text: 'Patching' },
        { label: 'B', text: 'Segmentation' },
        { label: 'C', text: 'Monitoring' },
        { label: 'D', text: 'Isolation' }
      ],
      answer: ['A'],
      explanation: "The core issue is 'outdated OS version' leading to 'virus detection alerts' and slow performance. Patching directly addresses vulnerabilities in outdated operating systems, which are common entry points for malware (viruses). Applying patches is a fundamental mitigation technique to correct these known weaknesses. Reviewing the patching status and ensuring systems are up-to-date is the most direct and immediate step to address the root cause described.",
      incorrectOptionsExplanation: "· B. Segmentation: This is a preventative measure to limit the spread of an attack. While valuable, it doesn't fix the underlying vulnerability of an outdated OS. It's a containment strategy, not a primary fix for the cause.\n· C. Monitoring: This helps in detecting issues. Since virus alerts are already occurring, monitoring has (to some extent) served its purpose in detection. The immediate need is to remediate the cause, not primarily review monitoring as a mitigation.\n· D. Isolation: This is a reactive step to contain a compromised system. While potentially necessary for infected machines, reviewing patching addresses the widespread vulnerability (outdated OS) mentioned, which is a proactive and remedial action for all affected systems.",
      isMultipleChoice: false
    },
    {
      id: 508,
      question: "Which of the following agreements defines response time, escalation, and performance metrics?",
      options: [
        { label: 'A', text: 'BPA' },
        { label: 'B', text: 'MOA' },
        { label: 'C', text: 'NDA' },
        { label: 'D', text: 'SLA' }
      ],
      answer: ['D'],
      explanation: "A Service Level Agreement (SLA) is a contract between a service provider and a customer that defines the level of service expected. Key components of an SLA include specifics on service availability, performance metrics (like uptime and throughput), response times for issues, and escalation procedures for unresolved problems. These elements ensure that both parties have a clear understanding of the service commitments.",
      incorrectOptionsExplanation: "· A. BPA (Business Partners Agreement): A BPA outlines the terms and conditions of a business partnership, focusing on roles, responsibilities, and profit/loss sharing, not typically service performance metrics.\n· B. MOA (Memorandum of Agreement): An MOA is a document that describes a cooperative relationship between two or more parties, outlining common goals and a plan of action, but usually lacks the detailed service metrics of an SLA.\n· C. NDA (Non-Disclosure Agreement): An NDA is a legal contract that outlines confidential material, knowledge, or information that the parties wish to share with one another for certain purposes but wish to restrict access to. It doesn't cover service performance.",
      isMultipleChoice: false
    },
    {
      id: 509,
      question: "A program manager wants to ensure contract employees can only use the company’s computers Monday through Friday from 9 a.m. to 5 p.m. Which of the following would best enforce this access control?",
      options: [
        { label: 'A', text: 'Creating a GPO for all contract employees and setting time-of-day log-in restrictions' },
        { label: 'B', text: 'Creating a discretionary access policy and setting rule-based access for contract employees' },
        { label: 'C', text: 'Implementing an OAuth server and then setting least privilege for contract employees' },
        { label: 'D', text: 'Implementing SAML with federation to the contract employees\' authentication server' }
      ],
      answer: ['A'],
      explanation: "Creating a Group Policy Object (GPO) and applying it to an Organizational Unit (OU) or security group containing contract employees is the most effective method to enforce time-of-day log-in restrictions in a Windows Active Directory environment. User accounts in Active Directory have a 'Logon Hours' property that specifies permissible login times. GPOs can enforce related settings, such as 'Network security: Force logoff when logon hours expire,' ensuring that these restrictions are consistently applied and managed for the specified group. This directly addresses the program manager's requirement to limit computer access to specific hours and days.",
      incorrectOptionsExplanation: "· B. Creating a discretionary access policy and setting rule-based access for contract employees: Discretionary Access Control (DAC) primarily allows resource owners to control who can access specific objects (e.g., files, folders). It's not designed for centrally enforcing logon time restrictions across a category of users. While GPOs are a form of rule-based access, 'discretionary access policy' refers to a different, less suitable model here.\n· C. Implementing an OAuth server and then setting least privilege for contract employees: OAuth 2.0 is an authorization framework for delegated access, typically used for third-party applications to access web APIs. It is not intended for controlling operating system logon times on company computers. Least privilege is a security principle, not a specific mechanism for time-based logon.\n· D. Implementing SAML with federation to the contract employees' authentication server: Security Assertion Markup Language (SAML) is primarily used for web browser single sign-on (SSO) and federated identity across different security domains. It does not directly enforce operating system logon time restrictions on local company computers.",
      isMultipleChoice: false
    },
    {
      id: 510,
      question: "Which of the following makes Infrastructure as Code (IaC) a preferred security architecture over traditional infrastructure models?",
      options: [
        { label: 'A', text: 'Common attacks are less likely to be effective.' },
        { label: 'B', text: 'Configuration can be better managed and replicated.' },
        { label: 'C', text: 'Outsourcing to a third party with more expertise in network defense is possible.' },
        { label: 'D', text: 'Optimization can occur across a number of computing instances.' }
      ],
      answer: ['B'],
      explanation: "Infrastructure as Code (IaC) allows infrastructure to be defined and managed through machine-readable definition files (code) rather than manual hardware configuration or interactive configuration tools. This codification is a primary reason for its preference as a security architecture. It ensures that configurations are better managed through version control, automated testing, and consistent deployment processes, significantly reducing human error and configuration drift, which are common security vulnerabilities. Furthermore, these defined configurations can be reliably replicated across multiple environments (development, testing, production) or for disaster recovery, ensuring consistent security posture.",
      incorrectOptionsExplanation: "· A. Common attacks are less likely to be effective. While well-managed IaC can lead to fewer vulnerabilities, thus potentially making some attacks less effective, this is an outcome of better configuration management (Option B), not a direct architectural feature itself. IaC does not inherently render attacks ineffective; it helps build more secure and consistent systems.\n· C. Outsourcing to a third party with more expertise in network defense is possible. The ability to outsource is not unique to IaC; traditional infrastructure management can also be outsourced.\n· D. Optimization can occur across a number of computing instances. While IaC facilitates efficient management and scaling across multiple instances, 'optimization' is broad. The core security advantage lies in the consistent and auditable application of configurations, which is better captured by managed and replicated configurations.",
      isMultipleChoice: false
    },
    {
      id: 511,
      question: "An attorney prints confidential documents to a copier in an office space near multiple workstations and a reception desk. When the attorney goes to the copier to retrieve the documents, the documents are missing. Which of the following would best prevent this from reoccurring?",
      options: [
        { label: 'A', text: 'Place the copier in the legal department.' },
        { label: 'B', text: "Configure DLP on the attorney's workstation." },
        { label: 'C', text: 'Set up LDAP authentication on the printer.' },
        { label: 'D', text: 'Conduct a physical penetration test.' }
      ],
      answer: ['C'],
      explanation: "Setting up LDAP (Lightweight Directory Access Protocol) authentication on the printer implements a 'secure print' or 'pull printing' solution. This requires users to authenticate themselves at the printer (e.g., with network credentials, a PIN, or a smart card) before their documents are released. This mechanism ensures that sensitive documents are not left unattended in the output tray and can only be retrieved by the authorized individual who initiated the print job, directly preventing the scenario where documents go missing after being printed.",
      incorrectOptionsExplanation: "· A. Place the copier in the legal department. While this measure improves physical security by limiting general access, it does not prevent an authorized individual within the legal department from inadvertently or intentionally taking documents not belonging to them if print jobs are released without individual authentication.\n· B. Configure DLP on the attorney's workstation. Data Loss Prevention (DLP) on a workstation primarily aims to prevent sensitive data from leaving the endpoint through unauthorized channels (e.g., USB, email). It does not directly address the unauthorized physical retrieval of an already printed document from a shared copier.\n· D. Conduct a physical penetration test. A physical penetration test is an assessment designed to identify security vulnerabilities. While it could identify the risk described, it is not, in itself, a preventative control that would stop the documents from going missing again. It would likely recommend controls such as secure printing.",
      isMultipleChoice: false
    },
    {
      id: 512,
      question: "A software developer wishes to implement an application security technique that will provide assurance of the application's integrity. Which of the following techniques will achieve this?",
      options: [
        { label: 'A', text: 'Secure cookies' },
        { label: 'B', text: 'Input validation' },
        { label: 'C', text: 'Static analysis' },
        { label: 'D', text: 'Code signing' }
      ],
      answer: ['D'],
      explanation: "Code signing is a security technique that uses digital signatures to verify the authenticity and integrity of software. When software is code-signed, a cryptographic hash of the application is created and then encrypted with the developer's private key. Users can then verify this signature using the developer's public key. This process ensures that the application code has not been tampered with or altered since it was signed, thereby providing assurance of its integrity.",
      incorrectOptionsExplanation: "· A. Secure cookies: Secure cookies (using Secure and HttpOnly flags) protect session data during transmission and from client-side script access. They relate to session security, not the integrity of the application's codebase itself.\n· B. Input validation: This technique prevents attacks by sanitizing and validating user-supplied data (e.g., to stop SQL injection). It protects the application at runtime but doesn't ensure the integrity of the application's underlying code.\n· C. Static analysis: Static Application Security Testing (SAST) examines source code or binaries for vulnerabilities without executing the program. While it helps improve code quality, it doesn't provide runtime or deployment assurance that the code remains unchanged.",
      isMultipleChoice: false
    },
    {
      id: 513,
      question: "Which of the following control types involves restricting IP connectivity to a router's web management interface to protect it from being exploited by a vulnerability?",
      options: [
        { label: 'A', text: 'Corrective' },
        { label: 'B', text: 'Physical' },
        { label: 'C', text: 'Preventive' },
        { label: 'D', text: 'Managerial' }
      ],
      answer: ['C'],
      explanation: "Restricting IP connectivity to a router's web management interface is a preventive control. Preventive controls are designed to stop a security incident from occurring. In this scenario, by limiting which IP addresses can access the management interface, the organization aims to prevent unauthorized users or attackers from reaching and potentially exploiting vulnerabilities in that interface. This action is proactive, seeking to block an undesirable event before it happens.",
      incorrectOptionsExplanation: "· A. Corrective: Corrective controls are implemented after an incident has occurred to remediate its effects (e.g., restoring a system from backup after a compromise). Restricting IP access is done before any incident.\n· B. Physical: Physical controls involve tangible measures to protect assets (e.g., locks, fences, security guards). Restricting IP connectivity is a logical or technical control, not a physical barrier.\n· D. Managerial: Managerial controls are administrative actions and policies (e.g., security policies, risk assessments, training). While a policy might mandate restricting access, the act of configuring IP restrictions is a technical implementation, not a managerial control itself.",
      isMultipleChoice: false
    },
    {
      id: 514,
      question: "A forensic engineer determines that the root cause of a compromise is a SQL injection attack. Which of the following should the engineer review to identify the command used by the threat actor?",
      options: [
        { label: 'A', text: 'Metadata' },
        { label: 'B', text: 'Application log' },
        { label: 'C', text: 'System log' },
        { label: 'D', text: 'Netflow log' }
      ],
      answer: ['B'],
      explanation: "SQL injection attacks involve sending malicious SQL commands to an application, typically a web application. These commands are then processed by the application and potentially passed to a database. Application logs, such as those from web servers (e.g., Apache, Nginx, IIS) or database servers (e.g., SQL Server, MySQL, PostgreSQL), are designed to record events related to application operations, including incoming requests and queries processed. Therefore, the actual SQL command used by the threat actor is most likely to be found within these logs, either as part of the logged HTTP request (in web server logs) or as a logged query (in database logs if query logging or error logging captures it).",
      incorrectOptionsExplanation: "· A. Metadata: Metadata provides data about other data (e.g., file timestamps, log entry source) but does not typically contain the specific content of a malicious command like a SQL injection string.\n· C. System log: System logs (e.g., OS event logs) primarily record operating system-level events, such as service startups, shutdowns, user logins, and hardware errors, not the details of application-layer attack payloads.\n· D. Netflow log: Netflow logs contain summary information about network traffic, such as source/destination IP addresses, ports, and byte counts. They do not capture the actual payload or content of network packets, which would include the SQL injection command.",
      isMultipleChoice: false
    },
    {
      id: 515,
      question: "A security analyst receives an alert that there was an attempt to download known malware. Which of the following actions would allow the best chance to analyze the malware?",
      options: [
        { label: 'A', text: 'Review the IPS logs and determine which command-and-control IPs were blocked.' },
        { label: 'B', text: 'Analyze application logs to see how the malware attempted to maintain persistence.' },
        { label: 'C', text: 'Run vulnerability scans to check for systems and applications that are vulnerable to the malware.' },
        { label: 'D', text: 'Obtain and execute the malware in a sandbox environment and perform packet captures.' }
      ],
      answer: ['D'],
      explanation: "This approach, known as dynamic analysis, allows analysts to observe the malware's actual behavior in a controlled and isolated setting. Executing the malware in a sandbox reveals its functionality, such as file system modifications, registry changes, and process creation. Simultaneously, performing packet captures records all network communications the malware attempts, such as connections to command-and-control (C&C) servers, data exfiltration, or downloading additional components. This provides direct insight into its network activity. According to NIST SP 800-83, dynamic analysis involves 'running the malware in a controlled environment (e.g., a sandbox) and observing its behavior.' This process helps in understanding 'what the malware does, including its interactions with the operating system, file system, network, and other software.'",
      incorrectOptionsExplanation: "· A. Review the IPS logs and determine which command-and-control IPs were blocked: This is a reactive measure that only shows attempted connections that the Intrusion Prevention System (IPS) detected and blocked. It won't reveal the malware's full range of network activities if they weren't blocked or didn't match IPS signatures, nor will it explain the malware's broader functionality.\n· B. Analyze application logs to see how the malware attempted to maintain persistence: While persistence is an important aspect of malware functionality, application logs offer only a partial view. This option neglects the crucial network activity and other functionalities of the malware.\n· C. Run vulnerability scans to check for systems and applications that are vulnerable to the malware: Vulnerability scans assess the security posture of systems and applications to identify weaknesses the malware might exploit. They do not analyze the behavior or network activity of the malware sample itself.",
      isMultipleChoice: false
    }
  ];
