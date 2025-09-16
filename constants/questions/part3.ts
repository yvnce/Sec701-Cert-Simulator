import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 123,
    question: "A security administrator needs a method to secure data in an environment that includes some form of checks so that the administrator can track any changes. Which of the following should the administrator set up to achieve this goal?",
    options: [
      { label: 'A', text: 'SPF' },
      { label: 'B', text: 'GPO' },
      { label: 'C', text: 'NAC' },
      { label: 'D', text: 'FIM' }
    ],
    answer: ['D'],
    explanation: "File Integrity Monitoring (FIM) is a security process that validates the integrity of operating system and application software files using a verification method between the current file state and a known, good baseline. FIM involves creating a baseline of file attributes and then regularly scanning or monitoring files to detect any changes, such as modifications, deletions, or permission alterations. This directly addresses the administrator's need to secure data and track changes to it.",
    incorrectOptionsExplanation: "A. SPF (Sender Policy Framework): SPF is an email authentication method used to detect forging sender addresses during the delivery of the email. It's not designed for general data security or tracking changes to files on a system.\nB. GPO (Group Policy Object): GPOs are used in Microsoft Windows environments to configure and manage operating system, application, and user settings. While GPOs can enforce security policies that contribute to data security, they do not inherently track changes to data files in the way FIM does.\nC. NAC (Network Access Control): NAC solutions control access to a network by enforcing security policies on devices attempting to connect. Its focus is on network admission and endpoint compliance, not on monitoring and tracking changes to data stored on systems.",
    isMultipleChoice: false
  },
  {
    id: 124,
    question: "Which of the following is the phase in the incident response process when a security analyst reviews roles and responsibilities?",
    options: [
      { label: 'A', text: 'Preparation' },
      { label: 'B', text: 'Recovery' },
      { label: 'C', text: 'Lessons learned' },
      { label: 'D', text: 'Analysis' }
    ],
    answer: ['A'],
    explanation: "The Preparation phase of the incident response process involves establishing the necessary tools, resources, and procedures before an incident occurs. A key component of this phase is defining and reviewing the roles, responsibilities, and communication plans for the incident response team. This ensures that everyone understands their duties during an actual incident, facilitating a more efficient and effective response.",
    incorrectOptionsExplanation: "B. Recovery: This phase focuses on restoring systems to normal operation after an incident has been contained and eradicated. While roles are active here, their initial review and definition occur in Preparation.\nC. Lessons learned: This post-incident phase involves analyzing the incident and the response to identify improvements for the future. While roles might be discussed in terms of performance, their fundamental definition happens in Preparation.\nD. Analysis (Identification & Analysis): This phase involves determining whether an incident has occurred, its nature, extent, and cause. It relies on the roles defined in Preparation to be executed.",
    isMultipleChoice: false
  },
  {
    id: 125,
    question: "A company is discarding a classified storage array and hires an outside vendor to complete the disposal. Which of the following should the company request from the vendor?",
    options: [
      { label: 'A', text: 'Certification' },
      { label: 'B', text: 'Inventory list' },
      { label: 'C', text: 'Classification' },
      { label: 'D', text: 'Proof of ownership' }
    ],
    answer: ['A'],
    explanation: "When a company discards a storage array containing classified information and uses an outside vendor for disposal, it's crucial to obtain documented proof that the data has been appropriately handled and destroyed. A Certification (often a Certificate of Sanitization or Certificate of Destruction) from the vendor provides this formal attestation. This document confirms that the vendor has followed agreed-upon procedures, compliant with relevant standards, to securely sanitize or destroy the media, thereby mitigating the risk of data breaches from improperly discarded assets.",
    incorrectOptionsExplanation: "B. Inventory list: While important for asset tracking, an inventory list itself doesn't confirm secure disposal. The company would typically provide this to the vendor or reconcile it, but the critical item from the vendor is the proof of destruction.\nC. Classification: Data classification is the company's responsibility before initiating the disposal process. The vendor acts based on the classification provided by the company, not the other way around.\nD. Proof of ownership: The company is the owner of the storage array. Requesting proof of ownership from the disposal vendor is not relevant to the secure disposal process.",
    isMultipleChoice: false
  },
  {
    id: 126,
    question: "Which of the following would be the best ways to ensure only authorized personnel can access a secure facility? (Select two).",
    options: [
      { label: 'A', text: 'Fencing' },
      { label: 'B', text: 'Video surveillance' },
      { label: 'C', text: 'Badge access' },
      { label: 'D', text: 'Access control vestibule' },
      { label: 'E', text: 'Sign-in sheet' },
      { label: 'F', text: 'Sensor' }
    ],
    answer: ['C', 'D'],
    explanation: "Badge access systems (C) are a fundamental component of physical access control, providing a mechanism to electronically authenticate and authorize individuals before granting entry. These systems ensure that only individuals possessing valid credentials, which signify their authorization, can unlock doors or turnstiles.\nAn Access control vestibule (D), often called a mantrap, is a physical control that complements authentication systems. It consists of two sets of interlocking doors where only one set can be open at a time. This design ensures that only one individual passes through at a time after successful authorization, effectively preventing common unauthorized access methods like tailgating or piggybacking. Together, badge access and access control vestibules provide a robust solution to ensure authorized entry.",
    incorrectOptionsExplanation: "A. Fencing: This is a perimeter security measure. While it defines boundaries and deters unauthorized entry to the grounds, it doesn't specifically ensure only authorized personnel can access the facility itself with the precision of direct access controls.\nB. Video surveillance: This is primarily a detective and deterrent control. It records events and can discourage illicit actions but doesn't actively prevent unauthorized individuals from attempting or gaining access if other controls fail.\nE. Sign-in sheet: This is a manual process that is less reliable for ensuring authorization. It can be easily bypassed, falsified, or lack rigorous identity verification, making it weaker than automated systems.\nF. Sensor: This term is too general. While sensors (e.g., motion detectors, door contacts) are components of security systems, they typically alert to potential breaches rather than directly ensuring that only authorized personnel are granted initial access.",
    isMultipleChoice: true
  },
  {
    id: 127,
    question: "A company's marketing department collects, modifies, and stores sensitive customer data. The infrastructure team is responsible for securing the data while in transit and at rest. Which of the following data roles describes the customer?",
    options: [
      { label: 'A', text: 'Processor' },
      { label: 'B', text: 'Custodian' },
      { label: 'C', text: 'Subject' },
      { label: 'D', text: 'Owner' }
    ],
    answer: ['C'],
    explanation: "The customer, whose sensitive data is being collected, modified, and stored, is the individual to whom the personal data pertains. In data privacy and governance contexts, this role is precisely termed the Data Subject. The marketing department acts on this data (as part of a Data Controller or Processor), and the infrastructure team secures it (acting as a Data Custodian), but the customer is the subject of the data itself. Approved sources like the National Institute of Standards and Technology (NIST) use \"Data Subject\" or \"individual\" to refer to the person whose information is being processed.",
    incorrectOptionsExplanation: "A. Processor: A Data Processor is an entity that processes data on behalf of a Data Controller. The customer is the individual whose data is processed, not the entity performing the processing.\nB. Custodian: A Data Custodian is responsible for the safekeeping, transport, and storage of data, typically an IT or infrastructure role. This describes the infrastructure team, not the customer.\nD. Owner: A Data Owner is typically an organizational role with authority and responsibility for specific data assets, including establishing controls. This is an internal company role, not the customer.",
    isMultipleChoice: false
  },
  {
    id: 128,
    question: "Malware spread across a company's network after an employee visited a compromised industry blog. Which of the following best describes this type of attack?",
    options: [
      { label: 'A', text: 'Impersonation' },
      { label: 'B', text: 'Disinformation' },
      { label: 'C', text: 'Watering-hole' },
      { label: 'D', text: 'Smishing' }
    ],
    answer: ['C'],
    explanation: "A watering-hole attack is a targeted cyberattack strategy where attackers compromise websites that are frequently visited by a specific group of users or an organization. When the targeted individuals visit these compromised legitimate sites (the \"watering hole\"), their computers are infected with malware. In this scenario, the \"compromised industry blog\" serves as the watering hole, and the employee's visit led to a malware infection on the company's network.",
    incorrectOptionsExplanation: "A. Impersonation: Impersonation involves an attacker pretending to be a known or trusted entity to gain unauthorized access or information. While a compromised site might mislead, the core attack mechanism described is leveraging a trusted site, not faking an identity directly.\nB. Disinformation: Disinformation refers to the deliberate spread of false information to deceive. While the compromised blog could also spread disinformation, the question's primary focus is on the method of malware delivery, not the content's truthfulness.\nD. Smishing: Smishing is a form of phishing conducted via SMS (Short Message Service) text messages. The scenario clearly states the infection occurred after visiting a website, not through an SMS.",
    isMultipleChoice: false
  },
  {
    id: 129,
    question: "After a recent ransomware attack on a company's system, an administrator reviewed the log files. Which of the following control types did the administrator use?",
    options: [
      { label: 'A', text: 'Compensating' },
      { label: 'B', text: 'Detective' },
      { label: 'C', text: 'Preventive' },
      { label: 'D', text: 'Corrective' }
    ],
    answer: ['B'],
    explanation: "Reviewing log files after an incident, such as a ransomware attack, is a detective control. Detective controls are designed to discover and identify security events or incidents that have already occurred. The administrator's action of examining logs aims to understand the attack's scope, origin, and methods, which is fundamentally a detection and investigation activity.",
    incorrectOptionsExplanation: "A. Compensating: Compensating controls are alternative measures used when a primary control is not feasible. Log review in this context is a direct investigative action, not a substitute for another unimplemented control.\nC. Preventive: Preventive controls aim to stop an incident from occurring in the first place (e.g., firewalls). Log review is reactive; it happens after the incident.\nD. Corrective: Corrective controls aim to fix issues after an incident and restore systems (e.g., restoring from backups). While log review informs corrective actions, the review itself is about detection.",
    isMultipleChoice: false
  },
  {
    id: 130,
    question: "Which of the following agreement types defines the time frame in which a vendor needs to respond?",
    options: [
      { label: 'A', text: 'SOW' },
      { label: 'B', text: 'SLA' },
      { label: 'C', text: 'MOA' },
      { label: 'D', text: 'MOU' }
    ],
    answer: ['B'],
    explanation: "A Service Level Agreement (SLA) is a contract between a service provider and a customer that specifies, in measurable terms, the services the provider will furnish. Key components of an SLA include metrics for service performance, such as response times and resolution times. For instance, an SLA might stipulate that a vendor must respond to a high-priority incident within a specified number of hours. This directly addresses the question's core concern about defining the time frame for a vendor's response.",
    incorrectOptionsExplanation: "A. SOW (Statement of Work): An SOW details the specific tasks, deliverables, scope, and schedule of a project. While it outlines what will be done, it doesn't primarily focus on ongoing service performance metrics like response times in the same way an SLA does.\nC. MOA (Memorandum of Agreement): An MOA is a document that describes a cooperative relationship between two or more parties. It typically outlines responsibilities and expectations but is generally less specific about measurable service metrics like response times compared to an SLA.\nD. MOU (Memorandum of Understanding): An MOU is a formal agreement that expresses a convergence of will between parties, indicating an intended common line of action. It is often less formal than a contract and usually doesn't define specific, measurable service levels such as response times.",
    isMultipleChoice: false
  },
  {
    id: 131,
    question: "A Chief Information Security Officer wants to monitor the company's servers for SQLi attacks and allow for comprehensive investigations if an attack occurs. The company uses SSL decryption to allow traffic monitoring. Which of the following strategies would best accomplish this goal?",
    options: [
      { label: 'A', text: 'Logging all NetFlow traffic into a SIEM' },
      { label: 'B', text: 'Deploying network traffic sensors on the same subnet as the servers' },
      { label: 'C', text: 'Logging endpoint and OS-specific security logs' },
      { label: 'D', text: 'Enabling full packet capture for traffic entering and exiting the servers' }
    ],
    answer: ['D'],
    explanation: "Enabling full packet capture (D) for traffic entering and exiting the servers is the best strategy. Since SSL decryption is in place, full packet capture will record the actual content of the network communications. This is crucial for identifying the specific malicious SQL strings used in SQLi attacks and for conducting comprehensive investigations by providing a complete record of the attack transaction. The detailed payload information captured is essential for forensic analysis and understanding the attack's scope and methods.",
    incorrectOptionsExplanation: "A. Logging all NetFlow traffic into a SIEM: NetFlow provides metadata about traffic (e.g., IPs, ports, volume) but lacks the packet payloads necessary to detect or investigate the specifics of an SQLi attack, which are embedded in the request content.\nB. Deploying network traffic sensors on the same subnet as the servers: This describes a sensor location but not the type or depth of data collection. It's a prerequisite for packet capture but doesn't inherently guarantee the necessary detail for SQLi analysis.\nC. Logging endpoint and OS-specific security logs: While valuable for host-level analysis, these logs may not capture the full incoming SQLi string (especially in POST requests) or the complete network context needed for a comprehensive investigation of the network-borne attack itself.",
    isMultipleChoice: false
  },
  {
    id: 132,
    question: "A client demands at least 99.99% uptime from a service provider's hosted security services. Which of the following documents includes the information the service provider should return to the client?",
    options: [
      { label: 'A', text: 'MOA' },
      { label: 'B', text: 'SOW' },
      { label: 'C', text: 'MOU' },
      { label: 'D', text: 'SLA' }
    ],
    answer: ['D'],
    explanation: "A Service Level Agreement (SLA) is a contract between a service provider and a customer that defines the level of service expected from the provider. SLAs are output-based in that their purpose is specifically to define what the customer will receive. They typically include metrics for service availability (uptime), performance, and responsibilities, along with remedies or penalties if the agreed-upon levels are not met. The client's demand for \"at least 99.99% uptime\" is a classic example of a service level objective that would be documented in an SLA.",
    incorrectOptionsExplanation: "A. MOA (Memorandum of Agreement): An MOA typically outlines a cooperative agreement or partnership where parties agree to a common line of action, not specific, measurable service guarantees like uptime. It's less formal than an SLA.\nB. SOW (Statement of Work): A SOW details the specific tasks, deliverables, timelines, and costs for a project. While it might reference an SLA, it doesn't primarily define ongoing service levels like uptime guarantees.\nC. MOU (Memorandum of Understanding): An MOU is a document that describes a bilateral or multilateral agreement between parties. It expresses a convergence of will between the parties, indicating an intended common line of action, but is often less formal and less binding than an SLA regarding service metrics.",
    isMultipleChoice: false
  },
  {
    id: 133,
    question: "A company is adding a clause to its AUP that states employees are not allowed to modify the operating system on mobile devices. Which of the following vulnerabilities is the organization addressing?",
    options: [
      { label: 'A', text: 'Cross-site scripting' },
      { label: 'B', text: 'Buffer overflow' },
      { label: 'C', text: 'Jailbreaking' },
      { label: 'D', text: 'Side loading' }
    ],
    answer: ['C'],
    explanation: "The company's policy prohibiting the modification of mobile device operating systems directly addresses the vulnerabilities associated with Jailbreaking (on Apple iOS devices) or rooting (on Google Android devices). These actions involve removing manufacturer or carrier-imposed software restrictions to gain privileged control (root access) over the device's operating system. This process inherently bypasses built-in security mechanisms, such as sandboxing and integrity protections, making the device significantly more susceptible to malware, unauthorized access, and data compromise.",
    incorrectOptionsExplanation: "A. Cross-site scripting (XSS): This is a web application vulnerability where malicious scripts are injected into websites. It's not directly addressed by prohibiting OS modification, although a compromised OS might be less effective at mitigating browser-based threats.\nB. Buffer overflow: This is a software vulnerability occurring when a program writes data beyond a buffer's boundary, potentially overwriting adjacent memory. While OS modifications could introduce or expose such flaws, the policy broadly targets the act of OS compromise, not this specific flaw type.\nD. Sideloading: This refers to installing applications from sources other than official app stores. While jailbreaking can facilitate unapproved sideloading, sideloading itself doesn't necessarily equate to OS modification; for example, Android devices can sideload apps without being rooted if the user permits it.",
    isMultipleChoice: false
  },
  {
    id: 134,
    question: "Which of the following practices would be best to prevent an insider from introducing malicious code into a company's development process?",
    options: [
      { label: 'A', text: 'Code scanning for vulnerabilities' },
      { label: 'B', text: 'Open-source component usage' },
      { label: 'C', text: 'Quality assurance testing' },
      { label: 'D', text: 'Peer review and approval' }
    ],
    answer: ['D'],
    explanation: "Peer review and approval is the best practice among the options to prevent an insider from intentionally introducing malicious code. This process involves other trusted developers examining the code for correctness, adherence to standards, and potential security flaws, including intentionally malicious insertions, before it is integrated into the codebase. This human oversight is crucial for detecting actions an automated tool might miss, especially from an insider who understands the system and potential ways to circumvent automated checks.",
    incorrectOptionsExplanation: "A. Code scanning for vulnerabilities: While valuable, automated code scanning primarily identifies known vulnerability patterns and may be bypassed by a knowledgeable insider crafting sophisticated malicious code. It's a complementary tool, not the primary prevention for this specific threat.\nB. Open-source component usage: This practice relates to the source of software components, not the prevention of malicious code introduction by internal developers. Improper use of open-source can even introduce new vulnerabilities.\nC. Quality assurance testing: QA testing primarily focuses on functionality and performance, ensuring the software meets specified requirements. While it might incidentally uncover some malicious code, its main purpose is not to detect intentionally hidden malicious logic from an insider.",
    isMultipleChoice: false
  },
  {
    id: 135,
    question: "A systems administrator is creating a script that would save time and prevent human error when performing account creation for a large number of end users. Which of the following would be a good use case for this task?",
    options: [
      { label: 'A', text: 'Off-the-shelf software' },
      { label: 'B', text: 'Orchestration' },
      { label: 'C', text: 'Baseline' },
      { label: 'D', text: 'Policy enforcement' }
    ],
    answer: ['B'],
    explanation: "The systems administrator is creating a script to automate the process of user account creation for many users, aiming to save time and reduce errors. This scenario is a strong use case for orchestration. Orchestration involves automating and coordinating a sequence of tasks or a workflow. User account provisioning often requires multiple steps (e.g., creating an account in a directory service, setting up an email, assigning permissions, configuring user-specific settings) that must be performed consistently for each user. A script designed to handle this entire workflow for numerous users effectively orchestrates these individual tasks into a cohesive, automated process.",
    incorrectOptionsExplanation: "A. Off-the-shelf software: This refers to pre-existing commercial software. The administrator is creating a script, not purchasing or using existing software as the primary solution described.\nC. Baseline: A baseline is a standardized configuration or level of performance. While the created accounts should adhere to a security baseline, the act of scripting their creation is not itself a baseline.\nD. Policy enforcement: While the script can (and should) enforce policies (e.g., naming conventions, password complexity), the core use case described automating a complex, repetitive task like bulk account creation is better defined as orchestration, of which policy enforcement would be an integral part or benefit.",
    isMultipleChoice: false
  },
  {
    id: 136,
    question: "After an audit, an administrator discovers all users have access to confidential data on a file server. Which of the following should the administrator use to restrict access to the data quickly?",
    options: [
      { label: 'A', text: 'Group Policy' },
      { label: 'B', text: 'Content filtering' },
      { label: 'C', text: 'Data loss prevention' },
      { label: 'D', text: 'Access control lists' }
    ],
    answer: ['D'],
    explanation: "Access Control Lists (ACLs) are the fundamental security mechanism used by operating systems to determine which users or groups can access specific files and folders and what operations (read, write, execute) they are permitted to perform. When an administrator needs to quickly restrict access to data on a file server, directly modifying the ACLs for the confidential data is the most direct and immediate method. This allows for granular control over permissions.",
    incorrectOptionsExplanation: "A. Group Policy: While Group Policy can manage and deploy security settings, including file permissions (which ultimately modify ACLs), it's a management framework. Changes might not be immediate due to propagation times, making it less \"quick\" than direct ACL modification for an urgent fix.\nB. Content filtering: This technology is primarily used to restrict access to content based on its nature, typically for web or email traffic (e.g., blocking malicious websites or spam), not for controlling access to files on a server.\nC. Data loss prevention (DLP): DLP solutions are designed to detect and prevent the unauthorized exfiltration or leakage of sensitive data. While they protect data, they are not the primary tools for establishing or modifying basic access permissions on a file server.",
    isMultipleChoice: false
  },
  {
    id: 137,
    question: "A Chief Information Security Officer (CISO) wants to explicitly raise awareness about the increase of ransomware-as-a-service in a report to the management team. Which of the following best describes the threat actor in the CISO's report?",
    options: [
      { label: 'A', text: 'Insider threat' },
      { label: 'B', text: 'Hacktivist' },
      { label: 'C', text: 'Nation-state' },
      { label: 'D', text: 'Organized crime' }
    ],
    answer: ['D'],
    explanation: "Ransomware-as-a-Service (RaaS) is a business model operated by financially motivated cybercriminals. These groups develop ransomware and sell or lease it to affiliates who then carry out the attacks. This structure, focused on profit generation through illicit activities and often involving a clear hierarchy and division of labor, aligns directly with the characteristics of organized crime.",
    incorrectOptionsExplanation: "A. Insider threat: Insider threats originate from within an organization. While an insider could deploy ransomware, the RaaS model itself describes an external criminal enterprise, not an internal actor.\nB. Hacktivist: Hacktivists are typically motivated by political or social causes, aiming to disrupt or raise awareness. RaaS is fundamentally a profit-driven criminal activity, not ideological.\nC. Nation-state: Nation-state actors engage in espionage, sabotage, or geopolitical destabilization. While they possess advanced capabilities and might employ ransomware, the RaaS model of selling/leasing malware for widespread financial gain is more characteristic of organized crime.",
    isMultipleChoice: false
  },
  {
    id: 138,
    question: "A small business uses kiosks on the sales floor to display product information for customers. A security team discovers the kiosks use end-of-life operating systems. Which of the following is the security team most likely to document as a security implication of the current architecture?",
    options: [
      { label: 'A', text: 'Patch availability' },
      { label: 'B', text: 'Product software compatibility' },
      { label: 'C', text: 'Ease of recovery' },
      { label: 'D', text: 'Cost of replacement' }
    ],
    answer: ['A'],
    explanation: "End-of-life (EOL) operating systems no longer receive security updates, including patches for newly discovered vulnerabilities, from the vendor. This lack of patch availability is a primary security implication because it leaves the systems exposed to exploitation. Attackers can leverage these unpatched vulnerabilities to compromise the kiosks.",
    incorrectOptionsExplanation: "B. Product software compatibility: While EOL systems might face issues with newer software, this is primarily an operational or functional concern, not the most direct security implication stemming from the EOL status itself. The core security risk is unpatched vulnerabilities.\nC. Ease of recovery: Difficulty in recovering an EOL system after an incident can be a consequence of its unsupported nature, but the fundamental security implication of an EOL OS is the increased likelihood of a security breach due to missing patches, not the recovery process itself.\nD. Cost of replacement: The cost associated with replacing EOL systems is a financial or budgetary consideration that arises due to the security risks, not a direct security implication of the existing vulnerable architecture.",
    isMultipleChoice: false
  },
  {
    id: 139,
    question: "A company is developing a critical system for the government and storing project information on a fileshare. Which of the following describes how this data will most likely be classified? (Select two).",
    options: [
      { label: 'A', text: 'Private' },
      { label: 'B', text: 'Confidential' },
      { label: 'C', text: 'Public' },
      { label: 'D', text: 'Operational' },
      { label: 'E', text: 'Urgent' },
      { label: 'F', text: 'Restricted' }
    ],
    answer: ['B', 'F'],
    explanation: "The project information for a critical government system will most likely be classified as Confidential and Restricted. This is because such information, if disclosed without authorization, could cause significant damage to government operations, security, or public trust. Therefore, stringent access controls and protections are necessary.\nB. Confidential: This classification is used for sensitive information that, if compromised, could lead to serious adverse effects on organizational operations, assets, or individuals. Data related to a critical government system fits this description.\nF. Restricted: This classification indicates that access to the information is limited to authorized individuals or groups with a legitimate need-to-know. Project information for a critical government system would undoubtedly have such access limitations.",
    incorrectOptionsExplanation: "A. Private: This term typically refers to Personally Identifiable Information (PII) concerning individuals. The 'project information' is primarily classified based on its sensitivity to government operations rather than individual privacy.\nC. Public: This classification is for information that can be freely disclosed without any damage.\nD. Operational: This describes the nature or use of the data rather than its sensitivity level.\nE. Urgent: This term refers to the timeliness or priority of handling the data, not its security classification based on sensitivity.",
    isMultipleChoice: true
  },
  {
    id: 140,
    question: "After reviewing the following vulnerability scanning report:\nServer:192.168.14.6\nService: Telnet\nPort: 23 Protocol: TCP Status: Open\nSeverity: High\nVulnerability: Use of an insecure network protocol\nA security analyst performs the following test:\nnmap -p 23 192.168.14.6 script telnet-encryption\nPORT STATE SERVICE REASON\n23/tcp open telnet syn-ack I telnet encryption:\n| _ Telnet server supports encryption\nWhich of the following would the security analyst conclude for this reported vulnerability?",
    options: [
      { label: 'A', text: 'It is a false positive.' },
      { label: 'B', text: 'A rescan is required.' },
      { label: 'C', text: 'It is considered noise.' },
      { label: 'D', text: 'Compensating controls exist.' }
    ],
    answer: ['D'],
    explanation: "The initial vulnerability report correctly identifies 'Use of an insecure network protocol' because Telnet is active on port 23. Telnet, by default, transmits data in plaintext and is inherently insecure. The subsequent Nmap scan reveals that the 'Telnet server supports encryption.' This indicates the presence of a technical mechanism that can mitigate the risks associated with Telnet's inherent insecurity. This support for an encryption option acts as a compensating control—a safeguard implemented to reduce the risk posed by the insecure protocol, even if the protocol itself remains fundamentally insecure.",
    incorrectOptionsExplanation: "A. It is a false positive: This is incorrect because Telnet is an insecure protocol, and it is active. The support for encryption doesn't change Telnet's fundamental nature or mean the vulnerability is entirely absent, especially if unencrypted connections are still permitted.\nB. A rescan is required: The Nmap test is a specific investigative step. The Nmap output itself provides new information to draw a conclusion, rather than solely indicating a need for a generic rescan.\nC. It is considered noise: An open Telnet port, even one supporting an encryption option, is a significant security finding and not dismissed as 'noise' due to the potential for unencrypted fallback or misconfiguration.",
    isMultipleChoice: false
  },
  {
    id: 141,
    question: "A security consultant needs secure, remote access to a client environment. Which of the following should the security consultant most likely use to gain access?",
    options: [
      { label: 'A', text: 'EAP' },
      { label: 'B', text: 'DHCP' },
      { label: 'C', text: 'IPSec' },
      { label: 'D', text: 'NAT' }
    ],
    answer: ['C'],
    explanation: "IPSec (Internet Protocol Security) is a suite of protocols used to ensure private, secure communications over Internet Protocol (IP) networks, often by creating Virtual Private Networks (VPNs). It provides mechanisms for authentication, confidentiality, and data integrity, which are essential for secure remote access to a client environment. A security consultant would likely use an IPSec VPN to establish a secure tunnel to the client's network.",
    incorrectOptionsExplanation: "A. EAP (Extensible Authentication Protocol): EAP is an authentication framework, not a method for gaining remote access itself. While EAP might be used within a secure access solution (like an IPSec VPN) to authenticate the user, it doesn't provide the secure communication channel.\nB. DHCP (Dynamic Host Configuration Protocol): DHCP is used to automatically assign IP addresses and other network configuration parameters to devices on a network. It does not provide secure remote access.\nD. NAT (Network Address Translation): NAT is a method used to modify network address information in IP datagram packet headers, primarily for IP address conservation and network segmentation. It does not inherently provide secure remote access.",
    isMultipleChoice: false
  },
  {
    id: 142,
    question: "Which of the following best practices gives administrators a set period to perform changes to an operational system to ensure availability and minimize business impacts?",
    options: [
      { label: 'A', text: 'Impact analysis' },
      { label: 'B', text: 'Scheduled downtime' },
      { label: 'C', text: 'Backout plan' },
      { label: 'D', text: 'Change management boards' }
    ],
    answer: ['B'],
    explanation: "Scheduled downtime refers to a pre-planned interval during which an operational system is intentionally taken offline or its services are limited to allow administrators to perform essential maintenance, upgrades, or other modifications. This practice is a key component of change management, designed to implement changes in a controlled manner. By typically scheduling these activities during periods of low system usage (e.g., nights or weekends), organizations can minimize the impact on business operations and users.",
    incorrectOptionsExplanation: "A. Impact analysis: This is a process to evaluate the potential consequences and risks of a proposed change before it is scheduled. It informs the decision-making process but is not the set period for performing the change itself.\nC. Backout plan: This is a documented procedure to restore a system to its last known good state if a change implementation fails or causes unintended negative consequences. It's a contingency measure, not the allocated time for the change.\nD. Change management boards: These are groups of stakeholders responsible for reviewing, approving, or rejecting proposed changes. They govern the change process but are not the scheduled period for implementation.",
    isMultipleChoice: false
  },
  {
    id: 143,
    question: "Which of the following actions could a security engineer take to ensure workstations and servers are properly monitored for unauthorized changes and software?",
    options: [
      { label: 'A', text: 'Configure all systems to log scheduled tasks.' },
      { label: 'B', text: 'Collect and monitor all traffic exiting the network.' },
      { label: 'C', text: 'Block traffic based on known malicious signatures.' },
      { label: 'D', text: 'Install endpoint management software on all systems.' }
    ],
    answer: ['D'],
    explanation: "Endpoint management software, particularly solutions incorporating Endpoint Detection and Response (EDR) capabilities, is designed to continuously monitor endpoint activities. This includes tracking process execution, software installations, file modifications, and configuration changes. By deploying such software, security engineers can gain the necessary visibility to detect unauthorized changes and software installations on workstations and servers.",
    incorrectOptionsExplanation: "A. Configure all systems to log scheduled tasks: This is insufficient as it only covers a specific vector (scheduled tasks) and would miss many other unauthorized software installations or system modifications.\nB. Collect and monitor all traffic exiting the network: This focuses on network activity and may not detect internal changes or software installed on an endpoint that doesn't immediately communicate externally.\nC. Block traffic based on known malicious signatures: This is a preventative control, focused on stopping known threats rather than comprehensively monitoring for all unauthorized software and changes occurring on the endpoints themselves.",
    isMultipleChoice: false
  },
  {
    id: 144,
    question: "After a security awareness training session, a user called the IT help desk and reported a suspicious call. The suspicious caller stated that the Chief Financial Officer wanted credit card information in order to close an invoice. Which of the following topics did the user recognize from the training?",
    options: [
      { label: 'A', text: 'Insider threat' },
      { label: 'B', text: 'Email phishing' },
      { label: 'C', text: 'Social engineering' },
      { label: 'D', text: 'Executive whaling' }
    ],
    answer: ['C'],
    explanation: "The scenario describes an attacker attempting to deceive an employee into divulging sensitive credit card information by impersonating the Chief Financial Officer (CFO) over a phone call. This is a classic example of social engineering, which involves psychological manipulation to trick individuals into revealing confidential information or performing actions. The user, after security awareness training, recognized this deceptive tactic.",
    incorrectOptionsExplanation: "A. Insider threat: An insider threat originates from within the organization (e.g., a malicious employee). The scenario implies an external caller.\nB. Email phishing: Phishing attacks are typically conducted via email. This incident occurred over a phone call (which would be vishing, a type of social engineering).\nD. Executive whaling: Whaling is a type of phishing attack that specifically targets high-profile executives. In this case, the executive (CFO) is being impersonated, and the user is the target.",
    isMultipleChoice: false
  },
  {
    id: 145,
    question: "Which of the following exercises should an organization use to improve its incident response process?",
    options: [
      { label: 'A', text: 'Tabletop' },
      { label: 'B', text: 'Replication' },
      { label: 'C', text: 'Failover' },
      { label: 'D', text: 'Recovery' }
    ],
    answer: ['A'],
    explanation: "A tabletop exercise is a discussion-based activity where team members walk through their roles and responses to a simulated incident scenario, typically in an informal setting. This exercise type is highly effective for reviewing and improving incident response plans, procedures, and communication strategies by identifying gaps and areas for refinement without the pressure of a live event.",
    incorrectOptionsExplanation: "B. Replication: This refers to the process of copying data or systems, a technical component of resilience or disaster recovery, not an exercise to improve the incident response process itself.\nC. Failover: This is a technical capability to switch to a redundant system. While failover procedures can be tested, 'failover' itself is not an exercise type for improving the overall incident response process.\nD. Recovery: This is a phase in the incident response lifecycle concerned with restoring systems. 'Recovery' as an option is less precise than 'Tabletop' for an exercise designed to improve the broader incident response process.",
    isMultipleChoice: false
  },
  {
    id: 146,
    question: "Which of the following is used to validate a certificate when it is presented to a user?",
    options: [
      { label: 'A', text: 'OCSP' },
      { label: 'B', text: 'CSR' },
      { label: 'C', text: 'CA' },
      { label: 'D', text: 'CRC' }
    ],
    answer: ['A'],
    explanation: "The Online Certificate Status Protocol (OCSP) is a protocol used by clients to query a known OCSP responder (typically run by the Certificate Authority) to determine the revocation status of an X.509 digital certificate. When a user is presented with a certificate, their system can use OCSP to check if the certificate is still valid and has not been revoked.",
    incorrectOptionsExplanation: "B. CSR (Certificate Signing Request): A CSR is a message sent from an applicant to a Certificate Authority to apply for a digital certificate. It is part of the certificate issuance process, not its subsequent validation.\nC. CA (Certificate Authority): A CA is an entity that issues digital certificates. While the CA is responsible for maintaining revocation information, the CA itself is not the protocol a user employs for real-time validation.\nD. CRC (Cyclic Redundancy Check): A CRC is an error-detecting code used to detect accidental changes to raw data. It is not related to the cryptographic validation of digital certificates.",
    isMultipleChoice: false
  },
  {
    id: 147,
    question: "A newly identified network access vulnerability has been found in the OS of legacy IoT devices. Which of the following would best mitigate this vulnerability quickly?",
    options: [
      { label: 'A', text: 'Insurance' },
      { label: 'B', text: 'Patching' },
      { label: 'C', text: 'Segmentation' },
      { label: 'D', text: 'Replacement' }
    ],
    answer: ['C'],
    explanation: "For legacy IoT devices with newly identified network access vulnerabilities, network segmentation is often the best quick mitigation. Legacy systems may lack available patches or the ability to be patched easily. Segmentation involves isolating these vulnerable devices onto a separate network segment, restricting their communication pathways and thereby limiting their exposure to threats. This can often be implemented rapidly at the network infrastructure level without modifying the legacy devices themselves.",
    incorrectOptionsExplanation: "A. Insurance: Insurance is a risk transference strategy that addresses the financial impact of a security incident but does not technically mitigate the vulnerability itself.\nB. Patching: While patching directly addresses vulnerabilities, it is often not a 'quick' solution for legacy IoT devices. Patches may not be available, or the process of testing and deploying them can be slow and risky.\nD. Replacement: Replacing legacy IoT devices is a long-term, often costly and time-consuming solution. It is not a method for quick mitigation.",
    isMultipleChoice: false
  },
  {
    id: 148,
    question: "A bank insists all of its vendors must prevent data loss on stolen laptops. Which of the following strategies is the bank requiring?",
    options: [
      { label: 'A', text: 'Encryption at rest' },
      { label: 'B', text: 'Masking' },
      { label: 'C', text: 'Data classification' },
      { label: 'D', text: 'Permission restrictions' }
    ],
    answer: ['A'],
    explanation: "Encryption at rest is a security control that protects data residing on storage media, such as a laptop's hard drive. If a laptop is stolen, and its storage is encrypted, the data will remain confidential and inaccessible to an unauthorized party without the decryption key, thereby preventing data loss. This directly addresses the bank's requirement.",
    incorrectOptionsExplanation: "B. Masking: Data masking obscures specific data elements. It doesn't prevent access to the underlying raw data if the storage device itself is compromised.\nC. Data classification: This is the process of categorizing data based on its sensitivity. While it informs which data needs protection, it's not the protective measure itself.\nD. Permission restrictions: These control access for authenticated users on a running system. They do not protect data if an attacker bypasses the operating system to access the physical storage directly on a stolen laptop.",
    isMultipleChoice: false
  },
  {
    id: 149,
    question: "Which of the following would be best suited for constantly changing environments?",
    options: [
      { label: 'A', text: 'RTOS' },
      { label: 'B', text: 'Containers' },
      { label: 'C', text: 'Embedded systems' },
      { label: 'D', text: 'SCADA' }
    ],
    answer: ['B'],
    explanation: "Containers, such as Docker, are designed to package an application with its dependencies, ensuring consistency and portability across various computing environments. This makes them exceptionally well-suited for constantly changing environments where applications need to be deployed, updated, or scaled rapidly and reliably.",
    incorrectOptionsExplanation: "A. RTOS (Real-Time Operating System): RTOS are optimized for deterministic scheduling and predictable response times, crucial for time-critical applications. Their primary design goal is not rapid adaptation.\nC. Embedded systems: These are designed for specific, dedicated functions within larger systems and are not architected for fluid, constant environmental changes.\nD. SCADA (Supervisory Control and Data Acquisition): SCADA systems are used for monitoring and controlling industrial processes. They are built for reliability and long operational lifecycles, not rapid change.",
    isMultipleChoice: false
  },
  {
    id: 150,
    question: "A security analyst scans a company's public network and discovers a host is running a remote desktop that can be used to access the production network. Which of the following changes should the security analyst recommend?",
    options: [
      { label: 'A', text: 'Changing the remote desktop port to a non-standard number' },
      { label: 'B', text: 'Setting up a VPN and placing the jump server inside the firewall' },
      { label: 'C', text: 'Using a proxy for web connections from the remote desktop server' },
      { label: 'D', text: 'Connecting the remote server to the domain and increasing the password length' }
    ],
    answer: ['B'],
    explanation: "The primary concern is a host on the public network offering remote desktop access to the production network. Option B, 'Setting up a VPN and placing the jump server inside the firewall,' addresses this comprehensively. A VPN creates an encrypted tunnel for remote access. A jump server (bastion host) acts as a controlled intermediary. Placing it 'inside the firewall' means it's no longer directly exposed. This layered approach significantly enhances security.",
    incorrectOptionsExplanation: "A. Changing the remote desktop port to a non-standard number: This is security by obscurity. Attackers can easily use port scanners to find services on non-standard ports.\nC. Using a proxy for web connections from the remote desktop server: This controls outbound traffic, while the primary concern is securing inbound access.\nD. Connecting the remote server to the domain and increasing the password length: These are good hygiene practices but don't address the fundamental architectural flaw of direct public access.",
    isMultipleChoice: false
  },
  {
    id: 151,
    question: "Which of the following involves an attempt to take advantage of database misconfigurations?",
    options: [
      { label: 'A', text: 'Buffer overflow' },
      { label: 'B', text: 'SQL injection' },
      { label: 'C', text: 'VM escape' },
      { label: 'D', text: 'Memory injection' }
    ],
    answer: ['B'],
    explanation: "SQL injection involves an attacker inserting malicious SQL code into an application's input, which is then executed by the backend database. This technique can directly take advantage of database misconfigurations, such as excessive privileges, dangerous features being enabled, default credentials, or verbose error messages.",
    incorrectOptionsExplanation: "A. Buffer overflow: This attack primarily targets coding flaws in software, not database configuration settings.\nC. VM escape: This refers to an exploit where an attacker breaks out of a virtual machine's isolated environment. This targets vulnerabilities in the hypervisor, not the database.\nD. Memory injection: This is a general term for techniques that inject malicious code into a process's memory. SQL injection is a more direct and common method specific to databases that can leverage their configuration weaknesses.",
    isMultipleChoice: false
  },
  {
    id: 152,
    question: "An organization would like to store customer data on a separate part of the network that is not accessible to users on the main corporate network. Which of the following should the administrator use to accomplish this goal?",
    options: [
      { label: 'A', text: 'Segmentation' },
      { label: 'B', text: 'Isolation' },
      { label: 'C', text: 'Patching' },
      { label: 'D', text: 'Encryption' }
    ],
    answer: ['A'],
    explanation: "Network segmentation is the practice of dividing a computer network into smaller, isolated subnetworks or segments. By creating a separate network segment for customer data, an administrator can implement specific security policies to restrict access from the main corporate network, thereby achieving the desired level of separation and protection.",
    incorrectOptionsExplanation: "B. Isolation: While network segmentation results in isolation, 'isolation' is a state or a broader concept. Segmentation is the method to achieve network isolation.\nC. Patching: Patching involves applying updates to remediate vulnerabilities but does not address the architectural requirement of separating network areas.\nD. Encryption: Encryption protects the confidentiality of data but does not prevent network access to the systems where the data is stored.",
    isMultipleChoice: false
  },
  {
    id: 153,
    question: "Which of the following is used to quantitatively measure the criticality of a vulnerability?",
    options: [
      { label: 'A', text: 'CVE' },
      { label: 'B', text: 'CVSS' },
      { label: 'C', text: 'CIA' },
      { label: 'D', text: 'CERT' }
    ],
    answer: ['B'],
    explanation: "The Common Vulnerability Scoring System (CVSS) is an open framework for communicating the characteristics and severity of software vulnerabilities. CVSS provides a numerical score (0-10) representing the severity, allowing for a quantitative measure of a vulnerability's criticality.",
    incorrectOptionsExplanation: "A. CVE (Common Vulnerabilities and Exposures): CVE is a list of unique identifiers for publicly known cybersecurity vulnerabilities. It is a dictionary, not a scoring system.\nC. CIA (Confidentiality, Integrity, Availability): The CIA triad is a model designed to guide policies for information security. It represents security objectives, not a quantitative measure of vulnerability criticality.\nD. CERT (Computer Emergency Response Team): CERT is a generic name for expert groups that handle computer security incidents. CERT itself is an organizational term, not a scoring system.",
    isMultipleChoice: false
  },
  {
    id: 154,
    question: "A technician is opening ports on a firewall for a new system being deployed and supported by a SaaS provider. Which of the following is a risk in the new system?",
    options: [
      { label: 'A', text: 'Default credentials' },
      { label: 'B', text: 'Non-segmented network' },
      { label: 'C', text: 'Supply chain vendor' },
      { label: 'D', text: 'Vulnerable software' }
    ],
    answer: ['C'],
    explanation: "A Software as a Service (SaaS) provider is an external vendor that provides software and potentially supporting infrastructure, making them part of an organization's supply chain. When deploying a new system supported by a SaaS provider, the organization inherently takes on risks associated with that vendor. These supply chain risks include potential vulnerabilities in the SaaS provider's services or data breaches on the provider's side.",
    incorrectOptionsExplanation: "A. Default credentials: While a risk for any new system, it's a general configuration weakness, not uniquely stemming from the SaaS provider relationship itself.\nB. Non-segmented network: This is an internal architectural decision that can amplify the impact of a breach but is not a direct risk introduced by the SaaS provider.\nD. Vulnerable software: This is a specific type of risk. If the vulnerable software is part of the SaaS offering, it falls under the broader category of a supply chain risk. Option C is more encompassing.",
    isMultipleChoice: false
  },
  {
    id: 155,
    question: "Which of the following security concepts is the best reason for permissions on a human resources fileshare to follow the principle of least privilege?",
    options: [
      { label: 'A', text: 'Integrity' },
      { label: 'B', text: 'Availability' },
      { label: 'C', text: 'Confidentiality' },
      { label: 'D', text: 'Non-repudiation' }
    ],
    answer: ['C'],
    explanation: "The principle of least privilege dictates that users are granted only the permissions essential to perform their assigned tasks. Human resources (HR) fileshares typically store highly sensitive and private employee data. The primary security concept upheld by applying least privilege in this context is Confidentiality. This ensures that sensitive information is not accessed by or disclosed to unauthorized individuals.",
    incorrectOptionsExplanation: "A. Integrity: While least privilege contributes to data integrity by restricting modification rights, its foremost role for sensitive HR data is preventing unauthorized disclosure.\nB. Availability: Least privilege focuses on restricting access to protect data, not primarily on ensuring data is always accessible.\nC. Non-repudiation: This ensures that an action or event cannot be denied by the originating party. Least privilege is about proactive access control, not attribution.",
    isMultipleChoice: false
  },
  {
    id: 156,
    question: "Security controls in a data center are being reviewed to ensure data is properly protected and that human life considerations are included. Which of the following best describes how the controls should be set up?",
    options: [
      { label: 'A', text: 'Remote access points should fail closed.' },
      { label: 'B', text: 'Logging controls should fail open.' },
      { label: 'C', text: 'Safety controls should fail open.' },
      { label: 'D', text: 'Logical security controls should fail closed.' }
    ],
    answer: ['C'],
    explanation: "When 'human life considerations' are paramount, safety controls are designed to fail in a manner that prioritizes human safety. For many safety systems, such as emergency exit doors in a data center, 'failing open' means the door becomes unlocked or unlatched in the event of a power or system failure, ensuring personnel can evacuate. While security controls typically 'fail closed' to protect data, safety takes precedence.",
    incorrectOptionsExplanation: "A. Remote access points should fail closed: This is a standard security practice to prevent unauthorized access if the control fails, focusing on data/system security, not human life safety.\nB. Logging controls should fail open: 'Failing open' for logging (i.e., the system continues to operate without logging) is generally a security risk, as actions would not be audited.\nD. Logical security controls should fail closed: Similar to remote access, logical controls (e.g., firewalls) should fail closed to protect data and system integrity.",
    isMultipleChoice: false
  },
  {
    id: 157,
    question: "Which of the following is the most common data loss path for an air-gapped network?",
    options: [
      { label: 'A', text: 'Bastion host' },
      { label: 'B', text: 'Unsecured Bluetooth' },
      { label: 'C', text: 'Unpatched OS' },
      { label: 'D', text: 'Removable devices' }
    ],
    answer: ['D'],
    explanation: "Air-gapped networks are, by definition, physically isolated from unsecured external networks. This physical separation means that data transfer typically requires a physical medium. Removable devices, such as USB drives, external hard drives, or CDs/DVDs, represent the most common path for data loss, used by insiders to intentionally exfiltrate data or inadvertently introduce malware.",
    incorrectOptionsExplanation: "A. Bastion host: A bastion host provides access from an untrusted network to a trusted one. If it allows data loss from a true air-gapped network, the air gap is fundamentally compromised, rather than this being a common path.\nB. Unsecured Bluetooth: This is generally considered less common than removable media due to proximity requirements and controls in air-gapped environments.\nC. Unpatched OS: An unpatched OS is a vulnerability that can be exploited, but it is not the path of data loss itself. An attacker would still need a mechanism like removable media to get data out.",
    isMultipleChoice: false
  },
  {
    id: 158,
    question: "Which of the following can best protect against an employee inadvertently installing malware on a company system?",
    options: [
      { label: 'A', text: 'Host-based firewall' },
      { label: 'B', text: 'System isolation' },
      { label: 'C', text: 'Least privilege' },
      { label: 'D', text: 'Application allow list' }
    ],
    answer: ['D'],
    explanation: "An application allow list (also known as application whitelisting) is a security measure that specifies which applications are permitted to execute on a system. Any application not explicitly on this list is blocked from running. This directly prevents an employee from inadvertently installing or running malware, as the malicious software would not be on the approved list.",
    incorrectOptionsExplanation: "A. Host-based firewall: This controls network traffic. It does not directly prevent the execution of malware already on the system or introduced via other means (e.g., USB drive).\nB. System isolation: This involves separating a system from other networks. It doesn't prevent an employee with access to the isolated system from inadvertently installing malware on it.\nC. Least privilege: This principle limits user permissions. While it can limit the damage malware can do, it doesn't inherently stop malware that can execute in user space from running.",
    isMultipleChoice: false
  },
  {
    id: 159,
    question: "An organization is struggling with scaling issues on its VPN concentrator and internet circuit due to remote work. The organization is looking for a software solution that will allow it to reduce traffic on the VPN and internet circuit, while still providing encrypted tunnel access to the data center and monitoring of remote employee internet traffic. Which of the following will help achieve these objectives?",
    options: [
      { label: 'A', text: 'Deploying a SASE solution to remote employees' },
      { label: 'B', text: 'Building a load-balanced VPN solution with redundant internet' },
      { label: 'C', text: 'Purchasing a low-cost SD-WAN solution for VPN traffic' },
      { label: 'D', text: 'Using a cloud provider to create additional VPN concentrators' }
    ],
    answer: ['A'],
    explanation: "SASE (Secure Access Service Edge) is a cloud-native framework that converges networking and security functions. It addresses the objectives by: reducing traffic on the VPN by allowing direct internet access for trusted apps; providing encrypted tunnel access to the data center (often via ZTNA); and monitoring remote employee internet traffic through integrated cloud security services (SWG, CASB, FWaaS).",
    incorrectOptionsExplanation: "B. Building a load-balanced VPN solution with redundant internet: This increases capacity but doesn't fundamentally reduce the volume of backhauled traffic.\nC. Purchasing a low-cost SD-WAN solution for VPN traffic: A low-cost solution may lack the comprehensive, integrated cloud-delivered security stack necessary for deep monitoring.\nD. Using a cloud provider to create additional VPN concentrators: This scales VPN capacity but doesn't necessarily reduce traffic on the primary internet circuit if all traffic is still backhauled for monitoring.",
    isMultipleChoice: false
  },
  {
    id: 160,
    question: "A company's end users are reporting that they are unable to reach external websites. After reviewing the performance data for the DNS severs, the analyst discovers that the CPU, disk, and memory usage are minimal, but the network interface is flooded with inbound traffic. Network logs show only a small number of DNS queries sent to this server. Which of the following best describes what the security analyst is seeing?",
    options: [
      { label: 'A', text: 'Concurrent session usage' },
      { label: 'B', text: 'Secure DNS cryptographic downgrade' },
      { label: 'C', text: 'On-path resource consumption' },
      { label: 'D', text: 'Reflected denial of service' }
    ],
    answer: ['D'],
    explanation: "A reflected denial of service (RDDoS) attack matches the described symptoms. In such an attack, an attacker sends requests with a spoofed source IP address (the victim's IP) to third-party servers (reflectors). These reflectors then send their responses to the victim, leading to a flood of inbound traffic. The scenario notes that the network interface is flooded, but CPU and memory usage are minimal. This is characteristic of a bandwidth-exhaustion attack.",
    incorrectOptionsExplanation: "A. Concurrent session usage: Excessive concurrent sessions would typically lead to high CPU and memory usage, which contradicts the 'minimal' resource usage described.\nB. Secure DNS cryptographic downgrade: This type of attack targets the security mechanisms of DNS (like DNSSEC) and does not directly explain a massive flood of inbound network traffic.\nC. On-path resource consumption: While an on-path attacker could inject traffic to cause a DoS, 'Reflected denial of service' is a more specific mechanism describing a flood originating from multiple external reflectors, which aligns better with the symptoms.",
    isMultipleChoice: false
  },
  {
    id: 161,
    question: "A systems administrator wants to prevent users from being able to access data based on their responsibilities. The administrator also wants to apply the required access structure via a simplified format. Which of the following should the administrator apply to the site recovery resource group?",
    options: [
      { label: 'A', text: 'RBAC' },
      { label: 'B', text: 'ACL' },
      { label: 'C', text: 'SAML' },
      { label: 'D', text: 'GPO' }
    ],
    answer: ['A'],
    explanation: "Role-Based Access Control (RBAC) is the most appropriate mechanism for an administrator to prevent users from accessing data based on their responsibilities and to apply this access structure in a simplified format. RBAC allows administrators to define roles (e.g., 'Backup Operator') with specific permissions aligned with job duties. Users are then assigned to these roles, inheriting the necessary access rights. This approach simplifies management by abstracting permissions away from individual user accounts.",
    incorrectOptionsExplanation: "B. ACL (Access Control List): ACLs provide granular control but managing access based on broad responsibilities across many resources solely with ACLs can become complex and is generally less 'simplified' than RBAC.\nC. SAML (Security Assertion Markup Language): SAML is an open standard for exchanging authentication and authorization data between parties. It facilitates single sign-on but is not the mechanism for defining and applying access permissions within a resource group.\nD. GPO (Group Policy Object): GPOs are used in Microsoft Windows Active Directory environments and are not the primary method for controlling access to cloud resources like a 'site recovery resource group'.",
    isMultipleChoice: false
  },
  {
    id: 162,
    question: "One of a company's vendors sent an analyst a security bulletin that recommends a BIOS update. Which of the following vulnerability types is being addressed by the patch?",
    options: [
      { label: 'A', text: 'Virtualization' },
      { label: 'B', text: 'Firmware' },
      { label: 'C', text: 'Application' },
      { label: 'D', text: 'Operating system' }
    ],
    answer: ['B'],
    explanation: "The Basic Input/Output System (BIOS) is a type of firmware used to perform hardware initialization during the booting process. A security bulletin recommending a BIOS update is directly addressing vulnerabilities discovered within this firmware. Updating the BIOS (or its modern successor, UEFI) patches these low-level software instructions embedded in the hardware.",
    incorrectOptionsExplanation: "A. Virtualization: While firmware can play a role in hardware-assisted virtualization, a BIOS update specifically targets the firmware itself, not a vulnerability within the virtualization software layer.\nC. Application: Application vulnerabilities pertain to software programs that users interact with (e.g., web browsers, office suites), which operate at a higher level.\nD. Operating system: Operating system vulnerabilities relate to the core OS software (e.g., Windows, Linux). A BIOS update addresses issues in the firmware, not the OS directly.",
    isMultipleChoice: false
  },
  {
    id: 163,
    question: "A security analyst locates a potentially malicious video file on a server and needs to identify both the creation date and the file's creator. Which of the following actions would most likely give the security analyst the information required?",
    options: [
      { label: 'A', text: "Obtain the file's SHA-256 hash." },
      { label: 'B', text: "Use hexdump on the file's contents." },
      { label: 'C', text: 'Check endpoint logs.' },
      { label: 'D', text: "Query the file's metadata." }
    ],
    answer: ['D'],
    explanation: "Querying a file's metadata is the most direct and likely method to identify its creation date and creator. File systems store metadata such as creation, modification, and access timestamps (MAC times). Additionally, many file formats, including video files, can embed application-level metadata which may include author/creator information.",
    incorrectOptionsExplanation: "A. Obtain the file's SHA-256 hash: A SHA-256 hash is a cryptographic checksum used to verify file integrity. It does not provide information about the file's origin, creator, or creation timestamp.\nB. Use hexdump on the file's contents: A hexdump displays the raw binary content of a file. It doesn't interpret or directly present the creation date or creator in a usable way.\nC. Check endpoint logs: Endpoint logs may record when a file was written to a specific endpoint and by which user, but this reflects the event on that particular system and may not represent the original creation date or the actual creator.",
    isMultipleChoice: false
  },
  {
    id: 164,
    question: "After a recent vulnerability scan, a security engineer needs to harden the routers within the corporate network. Which of the following is the most appropriate to disable?",
    options: [
      { label: 'A', text: 'Console access' },
      { label: 'B', text: 'Routing protocols' },
      { label: 'C', text: 'VLANs' },
      { label: 'D', text: 'Web-based administration' }
    ],
    answer: ['D'],
    explanation: "Disabling web-based (HTTP/HTTPS) administration interfaces is a common and highly recommended practice for hardening routers. These interfaces often present a larger attack surface due to complexities in web server software. Securing a router typically involves using more secure management methods like SSH via the command-line interface (CLI).",
    incorrectOptionsExplanation: "A. Console access: Disabling console access is generally not recommended as it's a vital out-of-band management method, crucial for recovery if network connectivity is lost.\nB. Routing protocols: These are fundamental to a router's operation. Disabling them would render the router non-functional.\nC. VLANs (Virtual Local Area Networks): VLANs are a network segmentation technology used to improve security. Disabling VLANs would likely reduce, not enhance, the security posture.",
    isMultipleChoice: false
  },
  {
    id: 165,
    question: "Which of the following should a systems administrator use to ensure an easy deployment of resources within the cloud provider?",
    options: [
      { label: 'A', text: 'Software as a service' },
      { label: 'B', text: 'Infrastructure as code' },
      { label: 'C', text: 'Internet of Things' },
      { label: 'D', text: 'Software-defined networking' }
    ],
    answer: ['B'],
    explanation: "Infrastructure as Code (IaC) is the most appropriate choice for ensuring an easy deployment of resources within a cloud provider. IaC involves managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. This approach allows for automated, repeatable, and consistent deployments.",
    incorrectOptionsExplanation: "A. Software as a Service (SaaS): SaaS is a cloud service model where consumers use applications provided by the vendor. It's about consuming a service, not a method for deploying underlying cloud resources.\nC. Internet of Things (IoT): IoT refers to a network of interconnected physical devices and is not a methodology for deploying cloud resources.\nD. Software-defined Networking (SDN): SDN is an architecture that decouples network control. While it can be part of an IaC approach, IaC is a broader concept covering all infrastructure resources.",
    isMultipleChoice: false
  },
  {
    id: 166,
    question: "An enterprise has been experiencing attacks focused on exploiting vulnerabilities in older browser versions with well-known exploits. Which of the following security solutions should be configured to best provide the ability to monitor and block these known signature-based attacks?",
    options: [
      { label: 'A', text: 'ACL' },
      { label: 'B', text: 'DLP' },
      { label: 'C', text: 'IDS' },
      { label: 'D', text: 'IPS' }
    ],
    answer: ['D'],
    explanation: "An Intrusion Prevention System (IPS) is the most appropriate solution as it is designed to monitor network traffic for known malicious signatures and can actively block these detected threats. This directly addresses the need to prevent attacks exploiting known vulnerabilities using signature-based detection.",
    incorrectOptionsExplanation: "A. ACL (Access Control List): ACLs filter traffic based on predefined rules like IP addresses and ports but typically do not perform signature-based inspection to identify or block exploits.\nB. DLP (Data Loss Prevention): DLP solutions are focused on preventing sensitive data from leaving the organization's control, not blocking incoming network attacks.\nC. IDS (Intrusion Detection System): An IDS monitors and analyzes traffic for suspicious activity and can detect signature-based attacks, but it primarily generates alerts rather than actively blocking the traffic. The question requires the ability to block.",
    isMultipleChoice: false
  },
  {
    id: 167,
    question: "During the onboarding process, an employee needs to create a password for an intranet account. The password must include ten characters, numbers, and letters, and two special characters. Once the password is created, the company will grant the employee access to other company-owned websites based on the intranet profile. Which of the following access management concepts is the company most likely using to safeguard intranet accounts and grant access to multiple sites based on a user's intranet account? (Select two).",
    options: [
      { label: 'A', text: 'Federation' },
      { label: 'B', text: 'Identity proofing' },
      { label: 'C', text: 'Password complexity' },
      { label: 'D', text: 'Default password changes' },
      { label: 'E', text: 'Password manager' },
      { label: 'F', text: 'Open authentication' }
    ],
    answer: ['A', 'C'],
    explanation: "The requirement for the password to 'include ten characters, numbers, and letters, and two special characters' directly describes Password complexity rules. The process where 'the company will grant the employee access to other company-owned websites based on the intranet profile' is an example of Federation. In a federated identity system, an identity established in one domain (the intranet) is trusted and used to grant access to resources in other related domains.",
    incorrectOptionsExplanation: "B. Identity proofing: This is the process of verifying an individual's identity, which typically occurs before account creation.\nD. Default password changes: This refers to the mandatory alteration of pre-assigned passwords. The scenario describes the creation of a new, user-defined password.\nE. Password manager: This is a software application used to store passwords, not a concept for defining password rules or inter-site access.\nF. Open authentication (OAuth): While OAuth is a standard used in federated systems, 'Federation' is the broader access management concept described.",
    isMultipleChoice: true
  },
  {
    id: 168,
    question: "An administrator is reviewing a single server's security logs and discovers the following:\n```\nKeywords      Date and Time          Source                    Event ID\nAudit Failure 09/16/2022 11:13:05 AM   Microsoft Windows security  4625\nAudit Failure 09/16/2022 11:13:07 AM   Microsoft Windows security  4625\nAudit Failure 09/16/2022 11:13:09 AM   Microsoft Windows security  4625\n... (repeating every 2 seconds)\n```\nWhich of the following best describes the action captured in this log file?",
    options: [
      { label: 'A', text: 'Brute-force attack' },
      { label: 'B', text: 'Privilege escalation' },
      { label: 'C', text: 'Failed password audit' },
      { label: 'D', text: 'Forgotten password by the user' }
    ],
    answer: ['A'],
    explanation: "The provided log snippet shows multiple 'Audit Failure' entries for 'Logon' events (Event ID 4625) from 'Microsoft Windows security' occurring in rapid succession approximately every two seconds. This pattern is characteristic of a brute-force attack, where an attacker attempts to gain unauthorized access by systematically trying a large number of username and password combinations.",
    incorrectOptionsExplanation: "B. Privilege escalation: This involves an attacker gaining higher-level permissions after initially compromising an account. The logs show failed logon attempts, not actions taken by an already authenticated user.\nC. Failed password audit: A password audit is a systematic check of password strength. These logs represent unauthorized, repeated, failed attempts to gain access, not a structured audit.\nD. Forgotten password by the user: While a user might make a few incorrect attempts, the rapid, numerous, and systematic nature of the failures is highly indicative of an automated attack.",
    isMultipleChoice: false
  },
  {
    id: 169,
    question: "A security engineer is implementing FDE for all laptops in an organization. Which of the following are the most important for the engineer to consider as part of the planning process? (Select two).",
    options: [
      { label: 'A', text: 'Key escrow' },
      { label: 'B', text: 'TPM presence' },
      { label: 'C', text: 'Digital signatures' },
      { label: 'D', text: 'Data tokenization' },
      { label: 'E', text: 'Public key management' },
      { label: 'F', text: 'Certificate authority linking' }
    ],
    answer: ['A', 'B'],
    explanation: "Key Escrow is crucial for FDE in an organization. It ensures that the organization can recover encrypted data if a user forgets their password, is unavailable, or leaves the organization.\nTPM Presence (Trusted Platform Module) is also highly important. A TPM is a hardware chip that can securely store encryption keys and perform cryptographic operations. Integrating FDE with a TPM enhances security by protecting keys from software-based attacks.",
    incorrectOptionsExplanation: "C. Digital Signatures: These are not a primary planning consideration specifically for the FDE mechanism itself.\nD. Data Tokenization: This is a different approach from FDE, which encrypts the entire storage volume.\nE. Public Key Management: FDE primarily uses symmetric encryption keys. A full public key infrastructure (PKI) is not a direct, primary requirement.\nF. Certificate Authority Linking: This relates to PKI and digital certificates and is not a core planning component for the FDE process itself on individual laptops.",
    isMultipleChoice: true
  },
  {
    id: 170,
    question: "A hacker gained access to a system via a phishing attempt that was a direct result of a user clicking a suspicious link. The link laterally deployed ransomware, which laid dormant for multiple weeks, across the network. Which of the following would have mitigated the spread?",
    options: [
      { label: 'A', text: 'IPS' },
      { label: 'B', text: 'IDS' },
      { label: 'C', text: 'WAF' },
      { label: 'D', text: 'UAT' }
    ],
    answer: ['A'],
    explanation: "An Intrusion Prevention System (IPS) is designed to monitor network or system activities for malicious actions and can actively block or prevent detected threats. In the scenario described, after the initial compromise, the ransomware 'laterally deployed... across the network.' An IPS would be capable of detecting and stopping these lateral movement attempts before the ransomware could spread widely.",
    incorrectOptionsExplanation: "B. IDS (Intrusion Detection System): An IDS primarily monitors and alerts on suspicious activity. It does not inherently block or prevent it, thus not directly mitigating the spread.\nC. WAF (Web Application Firewall): A WAF is specifically designed to protect web applications. It would not typically be effective in mitigating the lateral spread of ransomware across an internal network.\nD. UAT (User Acceptance Testing): UAT is a phase in the software development lifecycle, not a security control for mitigating active malware threats.",
    isMultipleChoice: false
  }
];