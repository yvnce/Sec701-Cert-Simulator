import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 251,
    question: "A recent penetration test identified that an attacker could flood the MAC address table of network switches. Which of the following would best mitigate this type of attack?",
    options: [
      { label: 'A', text: 'Load balancer' },
      { label: 'B', text: 'Port security' },
      { label: 'C', text: 'IPS' },
      { label: 'D', text: 'NGFW' }
    ],
    answer: ['B'],
    explanation: "Port security is a feature on network switches that restricts input to an interface by limiting the MAC addresses that are allowed to send traffic on that port. By configuring port security to allow only a specific number or set of MAC addresses on a port, it directly prevents an attacker from flooding the switch's MAC address table (also known as the CAM table) with numerous fake MAC addresses. This ensures that the switch does not exhaust its MAC table memory, which would otherwise cause it to act like a hub, flooding traffic to all ports.",
    incorrectOptionsExplanation: "· A. Load balancer: A load balancer's primary role is to distribute network traffic across multiple servers to optimize resource utilization, maximize throughput, and ensure high availability. It does not directly mitigate MAC address table flooding on a switch.\n· C. IPS (Intrusion Prevention System): While an IPS can detect and potentially block various network attacks, including patterns associated with MAC flooding, port security is a more direct and preventative Layer 2 control specifically designed to secure switch ports against this type of attack.\n· D. NGFW (Next-Generation Firewall): An NGFW provides advanced firewall functionalities, often at the network perimeter or between segments. Like an IPS, it's not the primary or most direct mechanism for preventing MAC address table exhaustion on an individual switch port.",
    isMultipleChoice: false
  },
  {
    id: 252,
    question: "An administrator at a small business notices an increase in support calls from employees who receive a blocked page message after trying to navigate to a spoofed website. Which of the following should the administrator do?",
    options: [
      { label: 'A', text: 'Deploy multifactor authentication.' },
      { label: 'B', text: 'Decrease the level of the web filter settings' },
      { label: 'C', text: 'Implement security awareness training.' },
      { label: 'D', text: 'Update the acceptable use policy' }
    ],
    answer: ['C'],
    explanation: "The core issue is that employees are attempting to navigate to spoofed websites, even though a web filter is blocking access. This indicates a need to address user behavior and their ability to recognize and avoid such threats. Security awareness training (C) directly addresses the problem of employees attempting to access spoofed websites. Such training aims to educate users on identifying phishing attempts, malicious links, and other social engineering tactics. By improving their awareness, employees are less likely to try navigating to these dangerous sites in the first place, reducing the number of blocked page incidents and support calls.",
    incorrectOptionsExplanation: "· A. Deploy multifactor authentication: MFA is crucial for preventing unauthorized account access if credentials are compromised but does not directly stop users from attempting to visit spoofed websites.\n· B. Decrease the level of the web filter settings: This would be counterproductive, as it would likely allow more malicious sites to be accessed, increasing risk. The current filter is working by blocking the sites.\n· D. Update the acceptable use policy: While an AUP outlines rules for system use, simply updating it does not provide the active education and behavioral change needed to prevent users from clicking on malicious links.",
    isMultipleChoice: false
  },
  {
    id: 253,
    question: "Which of the following control types is AUP an example of?",
    options: [
      { label: 'A', text: 'Physical' },
      { label: 'B', text: 'Managerial' },
      { label: 'C', text: 'Technical' },
      { label: 'D', text: 'Operational' }
    ],
    answer: ['B'],
    explanation: "An Acceptable Use Policy (AUP) is a document that outlines the rules and restrictions for using an organization's IT resources. This type of control falls under the managerial category because it is established by management to guide user behavior and manage information security risk. Managerial controls focus on policies, procedures, standards, and guidelines. An AUP is fundamentally a policy that dictates how assets should be used, which is a core component of managing security.",
    incorrectOptionsExplanation: "· A. Physical: Physical controls are tangible mechanisms like locks, fences, or guards used to protect assets. An AUP is a policy document, not a physical barrier.\n· C. Technical: Technical controls are hardware or software mechanisms like firewalls, intrusion detection systems, or encryption. An AUP is a set of rules for people, not a technological system.\n· D. Operational: Operational controls are day-to-day procedures and actions performed by people to implement policies. While adherence to an AUP is an operational concern, the AUP itself, as a policy document, is a managerial control that directs those operations.",
    isMultipleChoice: false
  },
  {
    id: 254,
    question: "Which of the following examples would be best mitigated by input sanitization?",
    options: [
      { label: 'A', text: '<script>alert ("Warning!");</script>' },
      { label: 'B', text: 'nmap - 10.11.1.130' },
      { label: 'C', text: 'Email message: \"Click this link to get your free gift card.\"' },
      { label: 'D', text: 'Browser message: \"Your connection is not private.\"' }
    ],
    answer: ['A'],
    explanation: "Input sanitization is a security measure that involves inspecting and cleaning data inputs to prevent malicious content from being processed or executed. Option A, <script>alert (\"Warning!\");</script>, is a typical example of a Cross-Site Scripting (XSS) payload. Input sanitization would neutralize this script, for instance, by converting special characters like < and > into HTML entities (e.g., &lt; and &gt;), thus preventing the browser from executing the script. This directly mitigates the threat posed by the malicious script.",
    incorrectOptionsExplanation: "· B. nmap -sV 10.11.1.130: This is a command string. While input sanitization is crucial for preventing command injection if this input were used to construct an OS command, the example itself isn't directly \"defused\" by sanitization in the same way an XSS script is. XSS is a more direct and primary target for the general concept of input sanitization.\n· C. Email message: \"Click this link to get your free gift card.\": This represents a phishing attempt, which is a form of social engineering. Input sanitization on the recipient's end is not the primary mitigation; user awareness and email filtering are more relevant.\n· D. Browser message: \"Your connection is not private.\": This browser warning typically indicates issues with SSL/TLS certificates (e.g., expired, untrusted). This is a transport layer security concern, not addressed by sanitizing application-level data inputs.",
    isMultipleChoice: false
  },
  {
    id: 255,
    question: "A security engineer is installing an IPS to block signature-based attacks in the environment. Which of the following modes will best accomplish this task?",
    options: [
      { label: 'A', text: 'Monitor' },
      { label: 'B', text: 'Sensor' },
      { label: 'C', text: 'Audit' },
      { label: 'D', text: 'Active' }
    ],
    answer: ['D'],
    explanation: "An Intrusion Prevention System (IPS) operating in Active mode is configured to automatically take action to stop detected threats. This includes blocking signature-based attacks by, for example, terminating the network connection or dropping malicious packets. This mode is essential for an IPS to perform its primary function of preventing intrusions from succeeding. The term \"active response\" is used to describe this capability where the IPS actively intervenes.",
    incorrectOptionsExplanation: "· A. Monitor: In monitor (or passive) mode, an IPS observes traffic and generates alerts for detected threats but does not take preventative actions like blocking. It functions similarly to an Intrusion Detection System (IDS).\n· B. Sensor: A sensor is a component of an IDS/IPS responsible for collecting and forwarding data for analysis. It is not an operational mode that defines the system's response behavior (e.g., blocking).\n· C. Audit: Audit mode generally implies that the IPS logs detected events for review but does not actively block traffic. It's a passive approach focused on information gathering rather than real-time prevention.",
    isMultipleChoice: false
  },
  {
    id: 256,
    question: "An organization wants to limit potential impact to its log-in database in the event of a breach. Which of the following options is the security team most likely to recommend?",
    options: [
      { label: 'A', text: 'Tokenization' },
      { label: 'B', text: 'Hashing' },
      { label: 'C', text: 'Obfuscation' },
      { label: 'D', text: 'Segmentation' }
    ],
    answer: ['B'],
    explanation: "The core of the question is about minimizing the impact of a breach on a log-in database, which primarily contains user credentials, most critically, passwords. Hashing is the most appropriate security measure among the options for this specific purpose. Hashing converts passwords into a fixed-size string of characters, which is then stored instead of the plaintext password. If the database is breached, the attackers gain access to these hashed values, not the actual passwords. Recovering the original password from a properly salted and hashed value is computationally infeasible, thus significantly limiting the impact of the breach by protecting the confidentiality of the passwords.",
    incorrectOptionsExplanation: "· A. Tokenization: Tokenization replaces sensitive data with a non-sensitive equivalent called a \"token.\" While it protects data, it's generally used when the original data might need to be retrieved (detokenized). For passwords, one-way hashing is preferred for its irreversibility.\n· C. Obfuscation: Obfuscation is a broad term for making data difficult to understand. While hashing is a form of obfuscation, \"hashing\" is the more precise and standard cryptographic technique specifically recommended for password protection. Other obfuscation methods might not offer the same level of security.\n· D. Segmentation: Segmentation involves dividing a network or system into smaller, isolated sections. While it can limit the scope of a breach (e.g., preventing an attacker from accessing other systems), it does not directly protect the data within the login database if that segment itself is compromised.",
    isMultipleChoice: false
  },
  {
    id: 257,
    question: "A visitor plugs a laptop into a network jack in the lobby and is able to connect to the company's network. Which of the following should be configured on the existing network infrastructure to best prevent this activity?",
    options: [
      { label: 'A', text: 'Port security' },
      { label: 'B', text: 'Web application firewall' },
      { label: 'C', text: 'Transport layer security' },
      { label: 'D', text: 'Virtual private network' }
    ],
    answer: ['A'],
    explanation: "Port security is a feature on network switches that allows an administrator to restrict the Media Access Control (MAC) addresses that can connect to a specific port. When an unknown device, like the visitor's laptop, attempts to connect, port security can prevent access or take a defined action, such as shutting down the port or sending an alert. This directly addresses the scenario of an unauthorized physical connection.",
    incorrectOptionsExplanation: "· B. Web application firewall (WAF): A WAF operates at the application layer (Layer 7) to protect web applications from attacks like SQL injection or cross-site scripting. It does not prevent initial network layer access at a physical port.\n· C. Transport Layer Security (TLS): TLS is a cryptographic protocol that provides end-to-end security for data in transit over a network. It secures communication once a network connection is established but doesn't prevent the connection itself.\n· D. Virtual Private Network (VPN): A VPN is used to create a secure, encrypted connection over a less secure network, typically for remote access or connecting distinct private networks. It doesn't prevent unauthorized physical connections to a local network port.",
    isMultipleChoice: false
  },
  {
    id: 258,
    question: "During a penetration test, a vendor attempts to enter an unauthorized area using an access badge Which of the following types of tests does this represent?",
    options: [
      { label: 'A', text: 'Defensive' },
      { label: 'B', text: 'Passive' },
      { label: 'C', text: 'Offensive' },
      { label: 'D', text: 'Physical' }
    ],
    answer: ['D'],
    explanation: "The scenario describes a vendor attempting to gain unauthorized entry into an area using an access badge. This action is a direct test of physical security controls. Penetration testing methodologies often categorize tests by the domain they target, and \"physical\" refers to testing controls like locks, barriers, and access card systems. While penetration testing is inherently offensive in nature, \"Physical\" is the most precise and specific classification for the described activity.",
    incorrectOptionsExplanation: "· A. Defensive: Defensive tests evaluate an organization's ability to detect and respond to attacks (e.g., blue teaming), not simulate an attack to bypass controls. The described action is an attempt to breach defenses.\n· B. Passive: Passive tests involve information gathering without direct interaction or impact on the target (e.g., open-source intelligence gathering). Attempting to use an access badge is an active, direct engagement with the target's security controls.\n· C. Offensive: While this test is offensive (simulating an attacker's actions), \"Physical\" is a more specific and descriptive type of test that pinpoints the actual domain being assessed. According to the principle of precision, the more specific applicable term is preferred.",
    isMultipleChoice: false
  },
  {
    id: 259,
    question: "An organization experiences a cybersecurity incident involving a command-and-control server. Which of the following logs should be analyzed to identify the impacted host? (Select two).",
    options: [
      { label: 'A', text: 'Application' },
      { label: 'B', text: 'Authentication' },
      { label: 'C', text: 'DHCP' },
      { label: 'D', text: 'Network' },
      { label: 'E', text: 'Firewall' },
      { label: 'F', text: 'Database' }
    ],
    answer: ['C', 'E'],
    explanation: "To identify an impacted host communicating with a command-and-control (C2) server, analysts primarily rely on logs that show network connections and help map those connections to specific devices. Firewall logs (E) are crucial as they record inbound and outbound network traffic, including communications with external IP addresses, such as those of C2 servers. These logs would show which internal IP address initiated or received communication with the C2 server. DHCP logs (C) are then used to correlate the internal IP address (identified from the firewall logs) to a specific MAC address and, often, a hostname at the time of the incident. This correlation definitively identifies the physical or virtual host involved.",
    incorrectOptionsExplanation: "· A. Application logs: While potentially useful for understanding post-compromise activity on an already identified host, they are less direct for initially identifying the host based on C2 network traffic.\n· B. Authentication logs: These logs track user login activity and access attempts. They are generally less direct for identifying a host communicating with a C2 server unless the C2 mechanism specifically leverages or generates distinct authentication events.\n· D. Network logs (general): This option is too broad. Firewall logs are a specific and highly relevant type of network log for this scenario. While other network logs (e.g., NetFlow, IDS/IPS) are also valuable, \"Firewall\" is more precise for external C2 communication identification.\n· F. Database logs: These logs pertain to database activity (queries, errors, access). They are unlikely to directly reveal communications with a C2 server unless the C2 traffic itself is interacting directly with the database in a logged manner, which is not the primary C2 communication channel.",
    isMultipleChoice: true
  },
  {
    id: 260,
    question: "Which of the following should a security operations center use to improve its incident response procedure?",
    options: [
      { label: 'A', text: 'Playbooks' },
      { label: 'B', text: 'Frameworks' },
      { label: 'C', text: 'Baselines' },
      { label: 'D', text: 'Benchmarks' }
    ],
    answer: ['A'],
    explanation: "Playbooks are specific, pre-defined, and repeatable sets of actions and steps designed to guide the response to particular types of cybersecurity incidents. By developing, testing, and iteratively refining these playbooks based on exercises, past incidents, and evolving threat intelligence, a Security Operations Center (SOC) directly improves its incident response procedures. This ensures that responses are consistent, efficient, and effective. NIST SP 800-61 Rev. 2 emphasizes that developing procedures (often called playbooks) provides a structured and repeatable process for incident response.",
    incorrectOptionsExplanation: "· B. Frameworks: Frameworks (e.g., NIST Cybersecurity Framework, NIST SP 800-61) provide high-level structure, guidelines, and best practices for an entire incident response capability or cybersecurity program. They guide the development and maturation of procedures rather than being the detailed, operational procedures themselves that are iteratively improved.\n· C. Baselines: Baselines define a known-good, documented state for systems, networks, or configurations. They are crucial for detecting anomalies that might signify an incident but they are not the step-by-step procedures for responding.\n· D. Benchmarks: Benchmarks are standards or reference points used to compare performance, configurations, or practices, often against industry standards or organizational targets. They help measure effectiveness and identify areas needing improvement but are not the response procedures themselves.",
    isMultipleChoice: false
  },
  {
    id: 261,
    question: "An administrator has identified and fingerprinted specific files that will generate an alert if an attempt is made to email these files outside of the organization. Which of the following best describes the tool the administrator is using?",
    options: [
      { label: 'A', text: 'DLP' },
      { label: 'B', text: 'SNMP traps' },
      { label: 'C', text: 'SCAP' },
      { label: 'D', text: 'IPS' }
    ],
    answer: ['A'],
    explanation: "A Data Loss Prevention (DLP) system is designed to detect potential data breaches or data exfiltration transmissions and prevent them by monitoring, detecting, and blocking sensitive data while in use (endpoint actions), in motion (network traffic), and at rest (data storage). The scenario describes fingerprinting specific files (a common DLP technique for identifying sensitive content) and generating an alert when an attempt is made to email these files outside the organization, which directly aligns with the core functionalities of a DLP solution.",
    incorrectOptionsExplanation: "· B. SNMP traps: SNMP (Simple Network Management Protocol) traps are alert messages sent from a remote SNMP-enabled device to a central collector. While a DLP system might use SNMP traps to send alerts, SNMP itself is a protocol for network management and monitoring, not the tool that performs file fingerprinting.\n· C. SCAP: The Security Content Automation Protocol (SCAP) is a suite of specifications that standardize the format and nomenclature by which security software communicates information about software flaws and security configurations.\n· D. IPS: An Intrusion Prevention System (IPS) monitors network and/or system activities for malicious or unwanted behavior. While an IPS might block certain types of data exfiltration, it typically operates based on signatures of known attacks or anomalous network behavior rather than specific file fingerprinting. DLP is more specialized for this described task.",
    isMultipleChoice: false
  },
  {
    id: 262,
    question: "A security analyst is investigating a workstation that is suspected of outbound communication to a command-and-control server. During the investigation, the analyst discovered that logs on the endpoint were deleted. Which of the following logs would the analyst most likely look at next?",
    options: [
      { label: 'A', text: 'IPS' },
      { label: 'B', text: 'Firewall' },
      { label: 'C', text: 'ACL' },
      { label: 'D', text: 'Windows security' }
    ],
    answer: ['B'],
    explanation: "When endpoint logs are deleted, security analysts must rely on network-based logs to investigate suspected command-and-control (C2) communications. Firewall logs are the most likely next source because they provide a comprehensive record of all inbound and outbound network connections, including source and destination IP addresses, ports, and protocols. This allows the analyst to identify any traffic from the compromised workstation to external entities, which is essential for tracing potential C2 channels.",
    incorrectOptionsExplanation: "· A. IPS: Intrusion Prevention System (IPS) logs focus on detected malicious activity or policy violations. If the C2 traffic was not recognized by the IPS signatures or evaded detection, it might not be present or as comprehensively logged as in firewall logs.\n· C. ACL: An Access Control List (ACL) is a set of rules that dictates network traffic permissions; it is not a log. The analyst examines the firewall logs themselves for evidence.\n· D. Windows security: The question states that 'logs on the endpoint were deleted.' Windows security logs are endpoint-based. Therefore, they are presumed unavailable or tampered with.",
    isMultipleChoice: false
  },
  {
    id: 263,
    question: "A security team is setting up a new environment for hosting the organization's on-premises software application as a cloud-based service. Which of the following should the team ensure is in place in order for the organization to follow security best practices?",
    options: [
      { label: 'A', text: 'Visualization and isolation of resources' },
      { label: 'B', text: 'Network segmentation' },
      { label: 'C', text: 'Data encryption' },
      { label: 'D', text: 'Strong authentication policies' }
    ],
    answer: ['A'],
    explanation: "When establishing a new cloud-based service environment, ensuring visualization and isolation of resources is a foundational security best practice. Isolation of resources (e.g., compute, storage, networking) is paramount in cloud environments, often built on shared physical infrastructure, to prevent unauthorized access and interference between different tenants or workloads. This is typically achieved through virtualization technologies. Visualization refers to the ability to effectively see, manage, monitor, and audit these isolated resources and their security configurations through cloud provider consoles, APIs, and security dashboards.",
    incorrectOptionsExplanation: "· B. Network segmentation: While crucial, network segmentation is a specific method of achieving isolation at the network layer. 'Isolation of resources' is a broader concept encompassing compute and storage isolation as well, which is more foundational.\n· C. Data encryption: This is an essential security control to protect data at rest and in transit. However, it's a measure applied to resources once the environment's isolated structure is established, rather than defining the initial environmental setup.\n· D. Strong authentication policies: These are vital for controlling access to resources and the cloud management plane. Like encryption, they are applied to manage access to the structured and isolated environment, rather than being the primary step in structuring the environment itself.",
    isMultipleChoice: false
  },
  {
    id: 264,
    question: "Which of the following phases of an incident response involves generating reports?",
    options: [
      { label: 'A', text: 'Recovery' },
      { label: 'B', text: 'Preparation' },
      { label: 'C', text: 'Lessons learned' },
      { label: 'D', text: 'Containment' }
    ],
    answer: ['C'],
    explanation: "The Lessons Learned phase, also referred to as Post-Incident Activity, is where a comprehensive review of the incident and the response efforts occurs. A key output of this phase is the generation of detailed incident reports. These reports document the incident, the actions taken, the effectiveness of the response, and areas for improvement. The primary goal is to learn from the incident to enhance security measures and the incident handling process itself.",
    incorrectOptionsExplanation: "· A. Recovery: This phase focuses on restoring systems and services to normal operation after an incident has been contained and eradicated. While communication occurs, its primary focus isn't generating the final incident report.\n· B. Preparation: This phase involves establishing the necessary policies, procedures, tools, and resources before an incident occurs. Reporting in this phase relates to readiness, not post-incident analysis.\n· C. Containment: This phase focuses on limiting the scope and impact of an ongoing incident. Reporting here is typically about the current status and immediate actions, not the comprehensive after-action report.",
    isMultipleChoice: false
  },
  {
    id: 265,
    question: "A business needs a recovery site but does not require immediate failover. The business also wants to reduce the workload required to recover from an outage. Which of the following recovery sites is the best option?",
    options: [
      { label: 'A', text: 'Hot' },
      { label: 'B', text: 'Cold' },
      { label: 'C', text: 'Warm' },
      { label: 'D', text: 'Geographically dispersed' }
    ],
    answer: ['C'],
    explanation: "A warm site is a compromise between a hot site and a cold site. It has network connectivity and the necessary hardware already in place, but software and data may need to be restored. This aligns with the business's needs because it doesn't require immediate failover (like a hot site) and reduces the recovery workload compared to a cold site (which requires setting up everything from scratch).",
    incorrectOptionsExplanation: "· A. Hot: A hot site provides immediate failover capabilities with fully replicated systems and data. This option is incorrect because the business 'does not require immediate failover,' making a hot site overly provisioned.\n· B. Cold: A cold site has basic infrastructure but no pre-installed hardware or data. Recovery involves procuring, installing, and configuring all systems, resulting in a significant workload.\n· D. Geographically dispersed: This describes a characteristic for locating a recovery site to mitigate risks from regional disasters. It is not a type of recovery site based on its operational readiness.",
    isMultipleChoice: false
  },
  {
    id: 266,
    question: "Which of the following best describes the practice of researching laws and regulations related to information security operations within a specific industry?",
    options: [
      { label: 'A', text: 'Compliance reporting' },
      { label: 'B', text: 'GDPR' },
      { label: 'C', text: 'Due diligence' },
      { label: 'D', text: 'Attestation' }
    ],
    answer: ['C'],
    explanation: "Due diligence, in the context of information security, refers to the comprehensive and proactive effort an organization undertakes to identify and manage risks, which includes understanding its legal, regulatory, and contractual obligations. Researching laws and regulations specific to an industry's information security operations is a fundamental component of this investigative process. This proactive research ensures the organization is aware of and can take steps to comply with relevant requirements, thereby exercising the necessary care.",
    incorrectOptionsExplanation: "· A. Compliance reporting: This is the formal process of documenting and demonstrating adherence to identified legal and regulatory requirements, rather than the initial research to discover them.\n· B. GDPR: The General Data Protection Regulation is a specific data privacy law applicable to EU residents. It is an example of a regulation one might research, not the practice of researching all relevant laws.\n· D. Attestation: This is a formal declaration or affirmation, often by an independent third party, that specific security controls or compliance requirements have been met. It serves as evidence of compliance, not the research process.",
    isMultipleChoice: false
  },
  {
    id: 267,
    question: "A security analyst developed a script to automate a trivial and repeatable task. Which of the following best describes the benefits of ensuring other team members understand how the script works?",
    options: [
      { label: 'A', text: 'To reduce implementation cost' },
      { label: 'B', text: 'To identify complexity' },
      { label: 'C', text: 'To remediate technical debt' },
      { label: 'D', text: 'To prevent a single point of failure' }
    ],
    answer: ['D'],
    explanation: "Ensuring other team members understand how a script works is crucial for preventing a single point of failure (SPOF). If only the developer understands the script, their absence (due to leave, departure, or other unavailability) would mean no one else could effectively troubleshoot, modify, or manage the script. This would render the automated task inoperable or unmaintainable, making the original developer a SPOF. Shared understanding distributes this knowledge, enhancing team resilience.",
    incorrectOptionsExplanation: "· A. To reduce implementation cost: The script is already 'developed.' While shared understanding can aid in future modifications which might save costs, it's not the primary benefit for an existing script compared to preventing operational failure.\n· B. To identify complexity: Understanding the script will help in assessing its complexity, but this is an analytical outcome, not the most critical operational benefit for the team's ability to continuously use and maintain the automation.\n· C. To remediate technical debt: This benefit is conditional on the script actually constituting technical debt and the intent to remediate it. Preventing a SPOF is a more general and immediate benefit.",
    isMultipleChoice: false
  },
  {
    id: 268,
    question: "A bank set up a new server that contains customers' PII. Which of the following should the bank use to make sure the sensitive data is not modified?",
    options: [
      { label: 'A', text: 'Full disk encryption' },
      { label: 'B', text: 'Network access control' },
      { label: 'C', text: 'File integrity monitoring' },
      { label: 'D', text: 'User behavior analytics' }
    ],
    answer: ['C'],
    explanation: "File Integrity Monitoring (FIM) systems are designed to check and alert on the modification of operating system, application, and data files. The primary purpose of FIM is to ensure that sensitive data and critical system files have not been tampered with or altered, which directly addresses the bank's need to make sure PII is not modified. By creating a baseline of file attributes and regularly comparing current file states to this baseline, FIM can detect unauthorized changes.",
    incorrectOptionsExplanation: "· A. Full disk encryption (FDE): FDE protects data confidentiality at rest by encrypting the entire storage drive. It does not inherently prevent or detect modification of files by an authorized user on a running system.\n· B. Network access control (NAC): NAC solutions manage which devices and users can connect to a corporate network. It does not directly monitor or ensure the integrity of specific files on the server once access is granted.\n· D. User behavior analytics (UBA): UBA systems focus on detecting malicious or anomalous activity by monitoring user behavior. While UBA might infer that a user is making unauthorized modifications, it's not a direct control for checking the integrity state of the data files themselves.",
    isMultipleChoice: false
  },
  {
    id: 269,
    question: "A legacy device is being decommissioned and is no longer receiving updates or patches. Which of the following describes this scenario?",
    options: [
      { label: 'A', text: 'End of business' },
      { label: 'B', text: 'End of testing' },
      { label: 'C', text: 'End of support' },
      { label: 'D', text: 'End of life' }
    ],
    answer: ['D'],
    explanation: "End of Life (EOL) describes a product that has reached the end of its useful lifespan and is no longer marketed, sold, or, crucially, supported by the vendor. This lack of support includes the cessation of updates and patches. The act of 'decommissioning' a device is a direct consequence of it reaching its EOL status. While 'End of Support' is a component of EOL, EOL is the more comprehensive term that accurately describes the overall scenario.",
    incorrectOptionsExplanation: "· A. End of business: This term refers to the cessation of operations of an entire company or business unit, not the lifecycle stage of a specific product.\n· B. End of testing: This is a phase within the software or hardware development lifecycle that occurs before a product is released.\n· C. End of support (EOS): While a device that is EOL is also EOS, EOL is a broader term. EOS specifically refers to the termination of support services, but a device might be EOS and still in use. The 'decommissioned' aspect points to the more comprehensive EOL status.",
    isMultipleChoice: false
  },
  {
    id: 270,
    question: "Employees located off-site must have access to company resources in order to complete their assigned tasks. These employees utilize a solution that allows remote access without interception concerns. Which of the following best describes this solution?",
    options: [
      { label: 'A', text: 'Proxy server' },
      { label: 'B', text: 'NGFW' },
      { label: 'C', text: 'VPN' },
      { label: 'D', text: 'Security zone' }
    ],
    answer: ['C'],
    explanation: "A VPN (Virtual Private Network) extends a private network across a public network, enabling users to send and receive data as if their computing devices were directly connected to the private network. It achieves this by establishing a virtual point-to-point connection through the use of dedicated connections, encryption, or a combination of both. This encryption is key to preventing interception of data.",
    incorrectOptionsExplanation: "· A. Proxy server: While a proxy server can act as an intermediary, its primary role isn't focused on creating a secure, encrypted tunnel for all network traffic from a remote device.\n· B. NGFW (Next-Generation Firewall): An NGFW is a comprehensive security device that may include VPN capabilities. However, the question asks for the solution being utilized, and VPN is the specific technology providing that secure tunnel.\n· D. Security zone: A security zone refers to a segment of a network with specific security policies. The zone itself is not the method or solution providing secure remote access.",
    isMultipleChoice: false
  },
  {
    id: 271,
    question: "Which of the following alert types is the most likely to be ignored over time?",
    options: [
      { label: 'A', text: 'True positive' },
      { label: 'B', text: 'True negative' },
      { label: 'C', text: 'False positive' },
      { label: 'D', text: 'False negative' }
    ],
    answer: ['C'],
    explanation: "A false positive is an alert that incorrectly indicates malicious activity or a policy violation when the event is actually benign. When a security system generates a high volume of false positives, security personnel can experience 'alert fatigue.' This desensitization leads to a tendency to dismiss or ignore incoming alerts, including potentially legitimate ones, because they are often perceived as noise. Over time, this significantly undermines the effectiveness of the security monitoring process.",
    incorrectOptionsExplanation: "· A. True positive: This is an alert that correctly identifies actual malicious activity. These are critical and are the primary reason for having detection systems; they should be investigated.\n· B. True negative: This describes a situation where a non-malicious event is correctly identified as such, and therefore, typically no alert is generated. It does not lead to problematic ignoring.\n· D. False negative: This refers to a failure of the system to detect actual malicious activity; no alert is generated. Since there is no alert, it cannot be 'ignored.'",
    isMultipleChoice: false
  },
  {
    id: 272,
    question: "The Chief Information Security Officer (CISO) at a large company would like to gain an understanding of how the company's security policies compare to the requirements imposed by external regulators. Which of the following should the CISO use?",
    options: [
      { label: 'A', text: 'Penetration test' },
      { label: 'B', text: 'Internal audit' },
      { label: 'C', text: 'Attestation' },
      { label: 'D', text: 'External examination' }
    ],
    answer: ['D'],
    explanation: "The CISO aims to understand how the company's security policies compare to requirements from external regulators. An 'external examination' is the most appropriate method. This process typically involves an independent third party (or a regulatory body itself) assessing the organization's adherence to specified external standards or regulations. It provides an objective viewpoint and specialized expertise concerning these external mandates, crucial for accurately understanding and addressing regulatory requirements.",
    incorrectOptionsExplanation: "· A. Penetration test: This technical assessment identifies and exploits vulnerabilities in systems. It does not primarily focus on comparing written policies against regulatory requirements.\n· B. Internal audit: While internal audits can assess compliance with external regulations, they are an internal function. An external examination offers greater independence and an external perspective.\n· C. Attestation: Attestation is the outcome or formal report from an engagement (like an examination). The CISO needs the process of assessment (the examination) to gain understanding, not just the final attestation report.",
    isMultipleChoice: false
  },
  {
    id: 273,
    question: "A systems administrator notices that one of the systems critical for processing customer transactions is running an end-of-life operating system. Which of the following techniques would increase enterprise security?",
    options: [
      { label: 'A', text: 'Installing HIDS on the system' },
      { label: 'B', text: 'Placing the system in an isolated VLAN' },
      { label: 'C', text: 'Decommissioning the system' },
      { label: 'D', text: 'Encrypting the system\'s hard drive' }
    ],
    answer: ['B'],
    explanation: "When a critical system runs an end-of-life (EOL) operating system, it means it no longer receives security updates and is highly vulnerable. Placing the system in an isolated Virtual Local Area Network (VLAN) is a crucial security technique. This network segmentation limits the system's exposure to the rest of the enterprise network and restricts its ability to affect other systems if compromised. This containment strategy reduces the attack surface and mitigates the risk associated with unpatchable vulnerabilities.",
    incorrectOptionsExplanation: "· A. Installing HIDS on the system: While a Host-based Intrusion Detection System (HIDS) can detect attacks, it doesn't prevent exploitation of the EOL OS's inherent vulnerabilities. It's a detection control, not a primary preventative measure.\n· C. Decommissioning the system: This is the most secure long-term solution as it eliminates the risk. However, the question asks for a 'technique to increase enterprise security' for a critical, operational system, implying it cannot be immediately decommissioned.\n· D. Encrypting the system's hard drive: Full-disk encryption protects data at rest. It does not protect against network-based attacks or active exploitation of vulnerabilities while the EOL operating system is running.",
    isMultipleChoice: false
  },
  {
    id: 274,
    question: "An organization is adopting cloud services at a rapid pace and now has multiple SaaS applications in use. Each application has a separate log-in. so the security team wants to reduce the number of credentials each employee must maintain. Which of the following is the first step the security team should take?",
    options: [
      { label: 'A', text: 'Enable SAML' },
      { label: 'B', text: 'Create OAuth tokens.' },
      { label: 'C', text: 'Use password vaulting.' },
      { label: 'D', text: 'Select an IdP' }
    ],
    answer: ['D'],
    explanation: "To reduce the number of credentials employees must maintain across multiple SaaS applications, the organization aims to implement a Single Sign-On (SSO) solution. The foundational and first practical step in establishing such a system is to select an Identity Provider (IdP). The IdP is the central authority responsible for creating, maintaining, and managing user identities and authenticating users before they can access various service providers (the SaaS applications). Without an IdP in place, protocols like SAML or OpenID Connect (OIDC), which enable SSO, cannot be effectively implemented.",
    incorrectOptionsExplanation: "· A. Enable SAML: Enabling SAML is a subsequent configuration step. SAML is a protocol used for exchanging authentication and authorization data between an IdP and Service Providers. This step can only occur after an IdP has been selected.\n· B. Create OAuth tokens: OAuth is an open standard for access delegation. While OpenID Connect (built on OAuth 2.0) can be used for authentication, 'Create OAuth tokens' is a granular operational detail, not the initial strategic step.\n· C. Use password vaulting: Password vaulting or password managers help users securely store multiple unique passwords. However, this approach does not reduce the actual number of separate credentials or enable SSO.",
    isMultipleChoice: false
  },
  {
    id: 275,
    question: "Which of the following would best explain why a security analyst is running daily vulnerability scans on all corporate endpoints?",
    options: [
      { label: 'A', text: 'To track the status of patching installations' },
      { label: 'B', text: 'To find shadow IT cloud deployments' },
      { label: 'C', text: 'To continuously monitor hardware inventory' },
      { label: 'D', text: 'To hunt for active attackers in the network' }
    ],
    answer: ['A'],
    explanation: "Daily vulnerability scans on corporate endpoints are best explained as a method to track the status of patching installations. Vulnerability scanners identify known weaknesses, many of which are addressed by patches. Regular scanning, especially daily, allows security teams to verify that deployed patches have successfully remediated the targeted vulnerabilities and to identify any systems that remain unpatched or where patching failed. This creates a continuous feedback loop for the patch management process.",
    incorrectOptionsExplanation: "· B. To find shadow IT cloud deployments: Endpoint vulnerability scanners are primarily designed to assess the software and configuration flaws on the endpoint itself, not to discover unauthorized cloud services.\n· C. To continuously monitor hardware inventory: Endpoint vulnerability scanners focus on software vulnerabilities, configurations, and patch levels. Their primary purpose is not hardware inventory tracking.\n· D. To hunt for active attackers in the network: Vulnerability scanning is a proactive measure to identify weaknesses before they are exploited. Threat hunting involves actively searching for signs of compromise already present in the network.",
    isMultipleChoice: false
  },
  {
    id: 276,
    question: "Which of the following threat vectors is most commonly utilized by insider threat actors attempting data exfiltration?",
    options: [
      { label: 'A', text: 'Unidentified removable devices' },
      { label: 'B', text: 'Default network device credentials' },
      { label: 'C', text: 'Spear phishing emails' },
      { label: 'D', text: 'Impersonation of business units through typosquatting' }
    ],
    answer: ['A'],
    explanation: "Insider threats attempting data exfiltration often utilize easily accessible methods. Unidentified or unauthorized removable devices (like USB drives, external hard drives) represent a common and straightforward vector for insiders to copy and physically remove sensitive data from an organization's premises. This method bypasses network monitoring to some extent and is often a simple way for an individual with physical access to exfiltrate large volumes of data.",
    incorrectOptionsExplanation: "· B. Default network device credentials: While a security risk that an insider could exploit for broader access, it's not a direct data exfiltration vector itself. Exfiltration would typically occur after leveraging such credentials.\n· C. Spear phishing emails: Spear phishing is primarily an attack technique used by external actors to gain initial access. An insider already has some level of authorized access.\n· D. Impersonation of business units through typosquatting: Typosquatting is a technique generally used by external attackers to deceive users into visiting malicious websites. It is not a common method for an insider.",
    isMultipleChoice: false
  },
  {
    id: 277,
    question: "A new employee logs in to the email system for the first time and notices a message from human resources about onboarding. The employee hovers over a few of the links within the email and discovers that the links do not correspond to links associated with the company. Which of the following attack vectors is most likely being used?",
    options: [
      { label: 'A', text: 'Business email' },
      { label: 'B', text: 'Social engineering' },
      { label: 'C', text: 'Unsecured network' },
      { label: 'D', text: 'Default credentials' }
    ],
    answer: ['B'],
    explanation: "The scenario describes an employee receiving an email purportedly from human resources with links that, upon inspection, do not lead to legitimate company sites. This is a classic example of phishing, which is a form of social engineering. Social engineering attacks manipulate individuals into performing actions or divulging confidential information. In this case, the attacker is attempting to deceive the new employee into clicking malicious links by impersonating a trusted internal source (HR).",
    incorrectOptionsExplanation: "· A. Business email: If it refers to 'Business Email Compromise' (BEC), BEC is a specific type of social engineering attack. If it merely refers to the email system, it describes the channel, not the attack method. Social engineering is the technique.\n· C. Unsecured network: This refers to vulnerabilities in the network infrastructure. The problem identified is with the email's trustworthiness, not the network's security.\n· D. Default credentials: This is a system vulnerability, not the attack vector described by a deceptive email. The attack is not exploiting default credentials but attempting to trick the user.",
    isMultipleChoice: false
  },
  {
    id: 278,
    question: "An IT manager is increasing the security capabilities of an organization after a data classification initiative determined that sensitive data could be exfiltrated from the environment. Which of the following solutions would mitigate the risk?",
    options: [
      { label: 'A', text: 'XDR' },
      { label: 'B', text: 'SPF' },
      { label: 'C', text: 'DLP' },
      { label: 'D', text: 'DMARC' }
    ],
    answer: ['C'],
    explanation: "Data Loss Prevention (DLP) solutions are specifically designed to mitigate the risk of sensitive data exfiltration. Following a data classification initiative, which identifies and labels sensitive data, DLP systems use these classifications to enforce policies that monitor and control the flow of information. This prevents unauthorized data from leaving the organization’s-controlled environment.",
    incorrectOptionsExplanation: "A. XDR (Extended Detection and Response): While XDR can detect data exfiltration attempts, its primary role is not preventative control based on data classification, but rather a broader detection and response to security incidents.\nB. SPF (Sender Policy Framework): SPF is an email authentication method that helps prevent email spoofing by verifying the IP addresses of sending servers.\nD. DMARC (Domain-based Message Authentication, Reporting, and Conformance): DMARC is an email authentication protocol that uses SPF and DKIM to validate the authenticity of emails. Its purpose is to combat email spoofing, not to prevent the exfiltration of classified data.",
    isMultipleChoice: false
  },
  {
    id: 279,
    question: "An important patch for a critical application has just been released, and a systems administrator is identifying all of the systems requiring the patch. Which of the following must be maintained in order to ensure that all systems requiring the patch are updated?",
    options: [
      { label: 'A', text: 'Asset inventory' },
      { label: 'B', text: 'Network enumeration' },
      { label: 'C', text: 'Data certification' },
      { label: 'D', text: 'Procurement process' }
    ],
    answer: ['A'],
    explanation: "An asset inventory provides a comprehensive and up-to-date list of all hardware and software assets within an organization. This detailed record is essential for effective patch management because it allows administrators to accurately identify every system running the specific critical application and, consequently, determine which systems require the patch. Without a meticulously maintained asset inventory, systems could be overlooked, leaving them vulnerable to exploits.",
    incorrectOptionsExplanation: "· B. Network enumeration: This is a process of discovering active devices on a network at a specific point in time. It is not the maintained record itself and may miss offline systems.\n· C. Data certification: This process verifies the accuracy and integrity of specific data sets. It is not directly concerned with identifying systems that require software patches.\n· D. Procurement process: This refers to the procedures for acquiring new assets. It should feed information into an asset inventory, but the process itself is not what is maintained to track existing systems for patching.",
    isMultipleChoice: false
  },
  {
    id: 280,
    question: "A company is concerned about the theft of client data from decommissioned laptops. Which of the following is the most cost-effective method to decrease this risk?",
    options: [
      { label: 'A', text: 'Wiping' },
      { label: 'B', text: 'Recycling' },
      { label: 'C', text: 'Shredding' },
      { label: 'D', text: 'Deletion' }
    ],
    answer: ['A'],
    explanation: "Wiping (also known as clearing or overwriting) is generally the most cost-effective method to decrease the risk of data theft from decommissioned laptops. According to NIST SP 800-88 Rev. 1, 'Clear' (wiping) techniques 'sanitize data in all user-addressable storage locations for protection against simple non-invasive data recovery techniques.' This method can often be performed using free or low-cost software and allows for the potential reuse or resale of the hardware.",
    incorrectOptionsExplanation: "· B. Recycling: Recycling is a disposition pathway, not a data sanitization method itself. Secure recycling requires prior sanitization.\n· C. Shredding: While highly effective, shredding (a form of physical destruction) is generally more expensive than wiping, involving specialized equipment and preventing any asset recovery or reuse.\n· D. Deletion: Standard file deletion merely removes pointers to data, leaving the actual data easily recoverable. It is not a secure method for data sanitization.",
    isMultipleChoice: false
  },
  {
    id: 281,
    question: "A company relies on open-source software libraries to build the software used by its customers. Which of the following vulnerability types would be the most difficult to remediate due to the company's reliance on open-source libraries?",
    options: [
      { label: 'A', text: 'Buffer overflow' },
      { label: 'B', text: 'SQL injection' },
      { label: 'C', text: 'Cross-site scripting' },
      { label: 'D', text: 'Zero day' }
    ],
    answer: ['D'],
    explanation: "A zero-day vulnerability is one that is not publicly known or for which no official patch or remediation is available from the software maintainers. When a company relies on open-source libraries, remediation for any vulnerability typically depends on the open-source project's maintainers to issue a patch. In the case of a zero-day vulnerability, the maintainers are, by definition, unaware of the issue or have not yet developed a fix. This lack of an available patch makes zero-day vulnerabilities the most difficult to remediate.",
    incorrectOptionsExplanation: "· A. Buffer overflow: Once a buffer overflow is identified in an open-source library, the maintainers can develop and release a patch. Remediation involves applying this patch.\n· B. SQL injection: If an SQL injection vulnerability is found in an open-source library, it becomes a known issue. The library maintainers can address it, and the company can remediate by updating.\n· C. Cross-site scripting: Once a cross-site scripting (XSS) vulnerability is discovered in an open-source library, a patch can be developed by the maintainers.",
    isMultipleChoice: false
  },
  {
    id: 282,
    question: "While investigating a possible incident, a security analyst discovers the following log entries: 67.118.34.157 - 'GET /query.php?q=wireless%20headphones' and 132.18.222.103 - 'GET /query.php?q=123 INSERT INTO users VALUES(\'temp\', \'pass123\')#'. Which of the following should the analyst do first?",
    options: [
      { label: 'A', text: 'Implement a WAF' },
      { label: 'B', text: 'Disable the query .php script' },
      { label: 'C', text: 'Block brute-force attempts on temporary users' },
      { label: 'D', text: 'Check the users table for new accounts' }
    ],
    answer: ['D'],
    explanation: "The log entry 'GET /query.php?q=123 INSERT INTO users VALUES(\'temp\', \'pass123\')#' indicates a SQL injection attempt to create a new user named 'temp'. The HTTP status code 200 (implied from other entries) suggests the server successfully processed the request. The immediate first step for the analyst is to verify the impact of this suspected attack by checking the users table for any new or unauthorized accounts like 'temp'. This aligns with the incident response process of analyzing and validating indicators of compromise.",
    incorrectOptionsExplanation: "· A. Implement a WAF: This is a preventative measure for future attacks. The priority is to assess current damage.\n· B. Disable the query.php script: This is a containment step. While crucial, verifying the success of the INSERT should ideally occur first to understand if a breach has already occurred.\n· C. Block brute-force attempts on temporary users: The log indicates the creation of a user, not necessarily an immediate brute-force attack against it. Verifying the account's existence is a prerequisite.",
    isMultipleChoice: false
  },
  {
    id: 283,
    question: "Which of the following should be used to ensure an attacker is unable to read the contents of a mobile device's drive if the device is lost?",
    options: [
      { label: 'A', text: 'TPM' },
      { label: 'B', text: 'ECC' },
      { label: 'C', text: 'FDE' },
      { label: 'D', text: 'HSM' }
    ],
    answer: ['C'],
    explanation: "Full Disk Encryption (FDE) is the most appropriate solution to ensure an attacker cannot read the contents of a lost mobile device's drive. FDE encrypts the entire volume of a storage device, rendering the data unreadable without the correct decryption key. This directly addresses the threat of data exposure if the physical device is compromised.",
    incorrectOptionsExplanation: "· A. TPM (Trusted Platform Module): A TPM is a hardware chip that can securely store encryption keys used by FDE, but it is a component that supports encryption, not the encryption method itself.\n· B. ECC (Error Correcting Code) memory: ECC memory is designed to detect and correct data corruption in RAM. It addresses data integrity, not confidentiality of data at rest.\n· D. HSM (Hardware Security Module): An HSM is a dedicated cryptographic processor for managing digital keys. While it offers robust key protection, FDE is the specific technology applied to encrypt the entire drive.",
    isMultipleChoice: false
  },
  {
    id: 284,
    question: "An organization plans to expand its operations internationally and needs to keep data at the new location secure. The organization wants to use the most secure architecture model possible. Which of the following models offers the highest level of security?",
    options: [
      { label: 'A', text: 'Cloud-based' },
      { label: 'B', text: 'Peer-to-peer' },
      { label: 'C', text: 'On-premises' },
      { label: 'D', text: 'Hybrid' }
    ],
    answer: ['C'],
    explanation: "An on-premises architecture model generally offers the highest level of security because the organization maintains direct and complete control over its infrastructure, data, and security policies. This includes physical security of the servers, network configuration, and access controls. While cloud providers offer robust security measures, the ultimate responsibility and control in an on-premises model reside solely with the organization.",
    incorrectOptionsExplanation: "· A. Cloud-based: While cloud providers invest heavily in security, the inherent nature of a shared responsibility model means the organization doesn't have the same absolute control as with an on-premises solution.\n· B. Peer-to-peer: Peer-to-peer networks are generally considered less secure for organizational data. Security is decentralized and relies on the security of individual nodes.\n· D. Hybrid: A hybrid model combines on-premises with cloud services. Its overall security level is a composite and can be complex to manage, often influenced by the security of the integrated cloud components.",
    isMultipleChoice: false
  },
  {
    id: 285,
    question: "The security team at a large global company needs to reduce the cost of storing data used for performing investigations. Which of the following types of data should have its retention length reduced?",
    options: [
      { label: 'A', text: 'Packet capture' },
      { label: 'B', text: 'Endpoint logs' },
      { label: 'C', text: 'OS security logs' },
      { label: 'D', text: 'Vulnerability scan' }
    ],
    answer: ['A'],
    explanation: "Packet captures (PCAP) generate the largest volume of data among the options listed. While extremely valuable for detailed forensic analysis, their extensive storage requirements mean that reducing their retention period often yields the most significant cost savings. Security teams frequently implement a tiered storage approach, retaining full packet captures for a shorter duration and network flow logs (which are much smaller) for longer periods.",
    incorrectOptionsExplanation: "· B. Endpoint logs: While endpoint logs can be voluminous, especially from Endpoint Detection and Response (EDR) systems, they are often less storage-intensive than continuous full packet captures.\n· C. OS security logs: Standard operating system security logs are generally smaller in volume compared to full packet captures or comprehensive endpoint logs.\n· D. Vulnerability scan: Vulnerability scan data, typically reports or summarized findings, are significantly smaller in size than continuous data streams like packet captures or logs.",
    isMultipleChoice: false
  },
  {
    id: 286,
    question: "Which of the following is the primary purpose of a service that tracks log-ins and time spent using the service?",
    options: [
      { label: 'A', text: 'Availability' },
      { label: 'B', text: 'Accounting' },
      { label: 'C', text: 'Authentication' },
      { label: 'D', text: 'Authorization' }
    ],
    answer: ['B'],
    explanation: "Accounting is the process of tracking user activity and resource consumption. A service that tracks log-ins (when users access the service) and the time spent using the service is primarily performing an accounting function. This information is crucial for auditing, billing, and resource management.",
    incorrectOptionsExplanation: "· A. Availability: Availability ensures that a service is operational and accessible when needed. Its primary purpose is not ensuring uptime.\n· C. Authentication: Authentication is the process of verifying a user's identity. Tracking log-ins occurs after successful authentication.\n· D. Authorization: Authorization determines what resources an authenticated user is permitted to access. Tracking time spent is about monitoring what was used, not what a user is allowed to use.",
    isMultipleChoice: false
  },
  {
    id: 287,
    question: "Which of the following should be used to aggregate log data in order to create alerts and detect anomalous activity?",
    options: [
      { label: 'A', text: 'SIEM' },
      { label: 'B', text: 'WAF' },
      { label: 'C', text: 'Network taps' },
      { label: 'D', text: 'IDS' }
    ],
    answer: ['A'],
    explanation: "A Security Information and Event Management (SIEM) system is designed to collect, store, analyze, and correlate log data from a wide variety of sources across an organization's IT infrastructure. Its core functions include identifying significant events, detecting anomalous activities through this aggregated data, and generating alerts to notify security personnel.",
    incorrectOptionsExplanation: "· B. WAF (Web Application Firewall): A WAF is specifically designed to protect web applications. Its primary role isn't general log aggregation from diverse sources.\n· C. Network taps: These are hardware devices that provide access to network traffic. They are a source of data for monitoring tools but do not themselves aggregate logs.\n· D. IDS (Intrusion Detection System): An IDS monitors network or system activities and can generate alerts. However, a SIEM is the system that typically aggregates logs from IDSs and many other sources for broader correlation.",
    isMultipleChoice: false
  },
  {
    id: 288,
    question: "Which of the following is a type of vulnerability that refers to the unauthorized installation of applications on a device through means other than the official application store?",
    options: [
      { label: 'A', text: 'Cross-site scripting' },
      { label: 'B', text: 'Buffer overflow' },
      { label: 'C', text: 'Jailbreaking' },
      { label: 'D', text: 'Side loading' }
    ],
    answer: ['D'],
    explanation: "Sideloading is the process of installing an application package onto a mobile device from a source other than an official application store. This method bypasses the security checks and distribution controls imposed by official stores, potentially exposing the device to malware or unverified applications. The question specifically describes the unauthorized installation of applications outside these official channels.",
    incorrectOptionsExplanation: "· A. Cross-site scripting (XSS): XSS is a web application vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.\n· B. Buffer overflow: This is a software vulnerability that occurs when more data is written to a buffer than it can hold.\n· C. Jailbreaking: This refers to the process of removing software restrictions imposed by the device manufacturer. While jailbreaking can enable sideloading, it is the act of modifying the OS, not the installation method itself.",
    isMultipleChoice: false
  },
  {
    id: 289,
    question: "Which of the following types of identification methods can be performed on a deployed application during runtime?",
    options: [
      { label: 'A', text: 'Dynamic analysis' },
      { label: 'B', text: 'Code review' },
      { label: 'C', text: 'Package monitoring' },
      { label: 'D', text: 'Bug bounty' }
    ],
    answer: ['A'],
    explanation: "Dynamic analysis, often referred to as Dynamic Application Security Testing (DAST), is a method used to identify vulnerabilities and weaknesses in an application while it is executing (i.e., during runtime). This approach involves interacting with the running application, sending various inputs, and observing its behavior and responses to detect security flaws.",
    incorrectOptionsExplanation: "· B. Code review: This is a static analysis technique where the application's source code is examined for vulnerabilities without executing the program.\n· C. Package monitoring: While this can occur during runtime, it's a broader activity than 'dynamic analysis' of the application itself. Dynamic analysis directly tests the application's behavior for vulnerabilities.\n· D. Bug bounty: This is a program that rewards individuals for discovering vulnerabilities. While participants might use dynamic analysis, the bug bounty itself is not an identification method.",
    isMultipleChoice: false
  },
  {
    id: 290,
    question: "Which of the following is the best way to provide secure remote access for employees while minimizing the exposure of a company's internal network?",
    options: [
      { label: 'A', text: 'VPN' },
      { label: 'B', text: 'LDAP' },
      { label: 'C', text: 'FTP' },
      { label: 'D', text: 'RADIUS' }
    ],
    answer: ['A'],
    explanation: "A Virtual Private Network (VPN) is the most suitable technology for providing secure remote access to a company's internal network while minimizing exposure. VPNs create an encrypted tunnel between the remote employee's device and the company's network, ensuring data confidentiality and integrity. By implementing appropriate access controls, organizations can limit what resources remote users can access, thereby minimizing the exposure of the internal network.",
    incorrectOptionsExplanation: "· B. LDAP (Lightweight Directory Access Protocol): LDAP is primarily an authentication and directory services protocol. It does not provide the secure communication channel for remote access.\n· C. FTP (File Transfer Protocol): FTP is a protocol for transferring files and is inherently insecure as it transmits credentials and data in plaintext.\n· D. RADIUS (Remote Authentication Dial-In User Service): RADIUS is a networking protocol for centralized AAA. It's often used to authenticate users for network access (including VPNs) but doesn't establish the secure remote connection itself.",
    isMultipleChoice: false
  },
  {
    id: 291,
    question: "An administrator must replace an expired SSL certificate. Which of the following does the administrator need to create the new SSL certificate?",
    options: [
      { label: 'A', text: 'CSR' },
      { label: 'B', text: 'OCSP' },
      { label: 'C', text: 'Key' },
      { label: 'D', text: 'CRL' }
    ],
    answer: ['A'],
    explanation: "A Certificate Signing Request (CSR) is a block of encoded text containing the information that a Certificate Authority (CA) will use to create an SSL/TLS certificate. This information includes the public key of the applicant and identifying information. The CSR is the formal request made to the CA to generate the certificate.",
    incorrectOptionsExplanation: "· B. OCSP (Online Certificate Status Protocol): This protocol is used to check the revocation status of an existing certificate in real-time. It's not involved in the creation of a new certificate.\n· C. Key: While a cryptographic key pair is fundamental, 'Key' by itself is less precise than CSR. The CSR is the complete, structured request document submitted to the CA.\n· D. CRL (Certificate Revocation List): This is a list of certificates that have been revoked. It's used to check if a certificate is still valid, not to create a new one.",
    isMultipleChoice: false
  },
  {
    id: 292,
    question: "Which of the following strategies should an organization use to efficiently manage and analyze multiple types of logs?",
    options: [
      { label: 'A', text: 'Deploy a SIEM solution' },
      { label: 'B', text: 'Create custom scripts to aggregate and analyze logs' },
      { label: 'C', text: 'Implement EDR technology' },
      { label: 'D', text: 'Install a unified threat management appliance' }
    ],
    answer: ['A'],
    explanation: "A Security Information and Event Management (SIEM) solution is designed to provide a holistic view of an organization's security posture by collecting, aggregating, normalizing, and analyzing log data from a wide variety of sources. SIEMs offer capabilities such as event correlation, anomaly detection, and security alerting, which are essential for efficiently managing and analyzing diverse log types.",
    incorrectOptionsExplanation: "· B. Create custom scripts: This is generally not an efficient or scalable solution for managing multiple types of logs from diverse sources.\n· C. Implement EDR technology: Endpoint Detection and Response (EDR) solutions focus on monitoring and responding to threats at the endpoint level, not the centralized management of logs from a wide array of system types.\n· D. Install a unified threat management appliance: A UTM appliance is primarily a source of logs rather than a comprehensive platform for collecting and analyzing logs from other diverse systems.",
    isMultipleChoice: false
  },
  {
    id: 293,
    question: "A customer has a contract with a CSP and wants to identify which controls should be implemented in the IaaS enclave. Which of the following is most likely to contain this information?",
    options: [
      { label: 'A', text: 'Statement of work' },
      { label: 'B', text: 'Responsibility matrix' },
      { label: 'C', text: 'Service-level agreement' },
      { label: 'D', text: 'Master service agreement' }
    ],
    answer: ['B'],
    explanation: "A responsibility matrix, often part of a larger cloud governance framework or agreement, explicitly defines which party (customer or Cloud Service Provider - CSP) is responsible for implementing specific security controls within a cloud environment. In an Infrastructure as a Service (IaaS) model, the customer has significant responsibility for securing the operating systems, applications, and data, making this matrix crucial for clarity.",
    incorrectOptionsExplanation: "· A. Statement of Work (SOW): An SOW typically defines the specific services to be delivered but not usually the detailed breakdown of security control responsibilities.\n· C. Service-Level Agreement (SLA): An SLA defines the expected level of service, availability, and performance metrics. It doesn't detail the implementation responsibility for specific controls.\n· D. Master Service Agreement (MSA): An MSA is a foundational contract outlining general terms. Specific control responsibilities are usually detailed in supplementary documents like a responsibility matrix.",
    isMultipleChoice: false
  },
  {
    id: 294,
    question: "Which of the following is a type of vulnerability that involves inserting scripts into web-based applications in order to take control of the client's web browser?",
    options: [
      { label: 'A', text: 'SQL injection' },
      { label: 'B', text: 'Cross-site scripting' },
      { label: 'C', text: 'Zero-day exploit' },
      { label: 'D', text: 'On-path attack' }
    ],
    answer: ['B'],
    explanation: "This type of vulnerability allows attackers to inject malicious scripts (commonly JavaScript) into web pages viewed by other users. These scripts then execute in the victim's browser, potentially allowing the attacker to hijack user sessions, deface websites, or redirect the user to malicious sites, effectively taking control of the client's interaction with the web application.",
    incorrectOptionsExplanation: "· A. SQL injection: This vulnerability involves an attacker inserting or 'injecting' a SQL query via the input data from the client to the application. This typically targets the database, not directly the client's browser.\n· C. Zero-day exploit: This term refers to an exploit for a vulnerability that is unknown to the software vendor or for which no patch is yet available. 'Zero-day' describes the exploit's novelty, not the specific technical mechanism of script insertion.\n· D. On-path attack: (Formerly Man-in-the-Middle attack) This involves an attacker intercepting and potentially altering communications between two parties. While an on-path attacker might inject scripts, XSS is a vulnerability within the web application that allows script injection.",
    isMultipleChoice: false
  },
  {
    id: 295,
    question: "A company's online shopping website became unusable shortly after midnight on January 30, 2023. When a security analyst reviewed the database server, the analyst noticed the following code used for backing up data: IF DATE() = '01/30/2023' THEN BEGIN DROP DATABASE WebShopOnline; END. Which of the following should the analyst do next?",
    options: [
      { label: 'A', text: 'Check for recently terminated DBAs.' },
      { label: 'B', text: 'Review WAF logs for evidence of command injection.' },
      { label: 'C', text: 'Scan the database server for malware.' },
      { label: 'D', text: 'Search the web server for ransomware notes.' }
    ],
    answer: ['B'],
    explanation: "The 'online shopping website' becoming unusable, coupled with the analyst observing 'code used for backing up data' on the database server around midnight, suggests the backup process might have been exploited or triggered maliciously. For a web-facing application, command injection is a significant threat where an attacker could inject malicious commands through web inputs. These commands might then be passed to and executed by backend systems, potentially causing the observed outage. A Web Application Firewall (WAF) is designed to detect and log such attack attempts. Therefore, reviewing WAF logs is a crucial next step.",
    incorrectOptionsExplanation: "· A. Check for recently terminated DBAs: While investigating insider threats is important, examining direct technical evidence of an external attack vector like command injection is often a more immediate diagnostic step.\n· C. Scan the database server for malware: This is a valid security measure. However, if the attack vector was command injection, WAF logs would provide more specific evidence.\n· D. Search the web server for ransomware notes: While ransomware could make a website unusable, the analyst's focus on 'code used for backing up data' points towards a more specific manipulation of that process.",
    isMultipleChoice: false
  },
  {
    id: 296,
    question: "Which of the following would be the best way to test resiliency in the event of a primary power failure?",
    options: [
      { label: 'A', text: 'Parallel processing' },
      { label: 'B', text: 'Tabletop exercise' },
      { label: 'C', text: 'Simulation testing' },
      { label: 'D', text: 'Production failover' }
    ],
    answer: ['D'],
    explanation: "A production failover is the most comprehensive and effective method to test resiliency in the event of a primary power failure. This type of test involves actually switching the live production environment to its redundant systems or backup power sources. It directly validates the entire recovery process, including automated mechanisms, manual procedures, and the ability of backup systems to handle the production load.",
    incorrectOptionsExplanation: "· A. Parallel processing: This is a computing architecture designed for simultaneous execution of tasks to improve performance, not a method for testing resiliency.\n· B. Tabletop exercise: This is a discussion-based activity where personnel review emergency plans. It doesn't test the actual technical failover capabilities.\n· C. Simulation testing: This involves creating a model of a potential disruption. It typically occurs in a test environment and may not uncover all issues present in the live production environment.",
    isMultipleChoice: false
  },
  {
    id: 297,
    question: "Which of the following would be the most appropriate way to protect data in transit?",
    options: [
      { label: 'A', text: 'SHA-256' },
      { label: 'B', text: 'SSL 3.0' },
      { label: 'C', text: 'TLS 1.3' },
      { label: 'D', text: 'AES-256' }
    ],
    answer: ['C'],
    explanation: "Transport Layer Security (TLS) 1.3 is the most appropriate way to protect data in transit among the given options. It is a cryptographic protocol designed to provide secure communication over a computer network. TLS 1.3 is the latest version, offering significant security and performance improvements over its predecessors, including SSL 3.0. It ensures confidentiality and integrity of data exchanged between two applications.",
    incorrectOptionsExplanation: "· A. SHA-256: This is a cryptographic hash function used primarily for ensuring data integrity, not for encrypting data in transit to ensure confidentiality.\n· B. SSL 3.0: Secure Sockets Layer (SSL) 3.0 is an outdated and insecure protocol. It has known vulnerabilities (e.g., POODLE) and has been deprecated.\n· D. AES-256: Advanced Encryption Standard (AES) with a 256-bit key is a strong symmetric encryption algorithm. While AES-256 is often used within protocols like TLS 1.3, it is an algorithm, not a complete protocol for protecting data in transit by itself.",
    isMultipleChoice: false
  },
  {
    id: 298,
    question: "Which of the following is a common, passive reconnaissance technique employed by penetration testers in the early phases of an engagement?",
    options: [
      { label: 'A', text: 'Open-source intelligence' },
      { label: 'B', text: 'Port scanning' },
      { label: 'C', text: 'Pivoting' },
      { label: 'D', text: 'Exploit validation' }
    ],
    answer: ['A'],
    explanation: "Open-source intelligence (OSINT) is a fundamental passive reconnaissance technique. It involves gathering information from publicly available sources such as websites, social media, public records, and publications without directly interacting with the target's systems. This makes it passive, as it avoids detection and is a common first step in the information-gathering phase of a penetration test.",
    incorrectOptionsExplanation: "· B. Port scanning: This is an active reconnaissance technique because it involves sending probes to the target's systems to identify open ports and services.\n· C. Pivoting: This technique is used after an initial system compromise to gain access to other internal systems. It's a lateral movement technique, not an initial reconnaissance method.\n· D. Exploit validation: This occurs later in a penetration test, after vulnerabilities have been identified. It involves attempting to exploit a vulnerability to confirm its existence and impact.",
    isMultipleChoice: false
  },
  {
    id: 299,
    question: "A security analyst receives an alert from a corporate endpoint used by employees to issue visitor badges. The alert details a high rate of failed login attempts from an unrecognized IP address, followed by a successful login. Which of the following best describes the indicator that triggered the alert?",
    options: [
      { label: 'A', text: 'Blocked content' },
      { label: 'B', text: 'Brute-force attack' },
      { label: 'C', text: 'Concurrent session usage' },
      { label: 'D', text: 'Account lockout' }
    ],
    answer: ['B'],
    explanation: "A brute-force attack is characterized by an attacker trying many passwords or passphrases with the hope of eventually guessing correctly. Systems can detect brute-force attacks by observing a high rate of failed login attempts, often followed by a successful login if the attack compromises an account. The detail about an 'unrecognized IP address' further strengthens this, as attackers often launch such attempts from new or rotating IP addresses. The core indicator here is the pattern of login attempts.",
    incorrectOptionsExplanation: "· A. Blocked content: This refers to a security control preventing access to or transfer of specific data or resources. It doesn't align with login attempt patterns.\n· C. Concurrent session usage: This describes a single user account being actively used from multiple locations or devices simultaneously. The primary trigger described is the series of failed attempts preceding the success.\n· D. Account lockout: This is a protective measure that disables an account after a certain number of incorrect login attempts. The scenario describes a successful login after failed attempts, meaning a lockout either didn't occur or was bypassed.",
    isMultipleChoice: false
  },
  {
    id: 300,
    question: "A penetration test has demonstrated that domain administrator accounts were vulnerable to pass-the-hash attacks. Which of the following would have been the best strategy to prevent the threat actor from using domain administrator accounts?",
    options: [
      { label: 'A', text: 'Audit each domain administrator account weekly for password compliance.' },
      { label: 'B', text: 'Implement a privileged access management solution.' },
      { label: 'C', text: 'Create IDS policies to monitor domain controller access.' },
      { label: 'D', text: 'Use Group Policy to enforce password expiration.' }
    ],
    answer: ['B'],
    explanation: "A Privileged Access Management (PAM) solution is the best strategy to prevent a threat actor from using domain administrator accounts in pass-the-hash (PtH) attacks. PAM systems secure, control, and monitor privileged accounts by vaulting credentials, enforcing regular credential rotation (invalidating stolen hashes quickly), implementing Just-In-Time (JIT) access and least privilege, and restricting how and where these accounts can be used. These measures directly hinder an attacker's ability to successfully utilize a captured hash.",
    incorrectOptionsExplanation: "· A. Audit each domain administrator account weekly for password compliance: Auditing password compliance does not prevent PtH attacks, as these attacks use the password hash, not the plaintext password.\n· C. Create IDS policies to monitor domain controller access: Intrusion Detection System (IDS) policies are primarily detective controls. They don't prevent the threat actor from initially attempting to use the stolen hash.\n· D. Use Group Policy to enforce password expiration: While password expiration forces hash changes, it's a less effective prevention strategy against PtH. If the vulnerabilities allowing hash extraction persist, new hashes can be obtained. PAM offers more comprehensive control.",
    isMultipleChoice: false
  }
];
