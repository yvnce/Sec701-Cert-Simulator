import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 62,
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
    id: 63,
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
    id: 64,
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
    id: 65,
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
    id: 66,
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
    id: 67,
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
    id: 68,
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
    id: 69,
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
    id: 70,
    question: "An administrator is reviewing a single server's security logs and discovers the following:\nKeywords      Date and Time     Source                Event ID   Task Category\nAudit Failure 09/16/2022 11:13:05 AM Microsoft Windows security 4625       Logon\nAudit Failure 09/16/2022 11:13:07 AM Microsoft Windows security 4625       Logon\nAudit Failure 09/16/2022 11:13:09 AM Microsoft Windows security 4625       Logon\n... (and so on)\nWhich of the following best describes the action captured in this log file?",
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
    id: 71,
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
    id: 72,
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
  },
  {
    id: 73,
    question: "A user is attempting to patch a critical system, but the patch fails to transfer. Which of the following access controls is most likely inhibiting the transfer?",
    options: [
      { label: 'A', text: 'Attribute-based' },
      { label: 'B', text: 'Time of day' },
      { label: 'C', text: 'Role-based' },
      { label: 'D', text: 'Least privilege' }
    ],
    answer: ['B'],
    explanation: "For critical systems, patch deployment is typically restricted to specific maintenance windows to minimize operational disruption. A 'Time of day' access control enforces these windows by preventing actions, such as file transfers for patching, outside the approved hours. If a user attempts to transfer a patch outside this designated period, the access control system would inhibit the transfer.",
    incorrectOptionsExplanation: "A. Attribute-based: While Attribute-Based Access Control (ABAC) could use time as an attribute, 'Time of day' is a more specific and direct control mechanism.\nC. Role-based: While a lack of proper role could prevent the transfer, the context of a 'critical system' strongly suggests scheduled maintenance, making a time-based restriction a highly probable cause.\nD. Least privilege: This is a fundamental security principle. While access controls like 'Time of day' implement this principle, it is not the direct inhibiting control mechanism itself.",
    isMultipleChoice: false
  },
  {
    id: 74,
    question: "Which of the following is used to protect a computer from viruses, malware, and Trojans being installed and moving laterally across the network?",
    options: [
      { label: 'A', text: 'IDS' },
      { label: 'B', text: 'ACL' },
      { label: 'C', text: 'EDR' },
      { label: 'D', text: 'NAC' }
    ],
    answer: ['C'],
    explanation: "Endpoint Detection and Response (EDR) solutions are designed to protect computers by continuously monitoring endpoint and network events. EDR tools actively look for malicious activities such as virus, malware, and Trojan installation. They provide capabilities to respond to these threats, for instance, by isolating the compromised endpoint to prevent lateral movement across the network.",
    incorrectOptionsExplanation: "A. IDS (Intrusion Detection System): An IDS primarily monitors network or system activities and alerts administrators. It doesn't inherently prevent installation or actively stop lateral movement.\nB. ACL (Access Control List): An ACL is a set of rules that specifies access rights. It does not dynamically detect or respond to active malware installation or lateral movement.\nD. NAC (Network Access Control): NAC solutions enforce security policies on devices before they are allowed to access network resources. It does not primarily focus on protecting an already connected computer from malware installation.",
    isMultipleChoice: false
  },
  {
    id: 75,
    question: "A systems administrator set up a perimeter firewall but continues to notice suspicious connections between internal endpoints. Which of the following should be set up in order to mitigate the threat posed by the suspicious activity?",
    options: [
      { label: 'A', text: 'Host-based firewall' },
      { label: 'B', text: 'Web application firewall' },
      { label: 'C', text: 'Access control list' },
      { label: 'D', text: 'Application allow list' }
    ],
    answer: ['A'],
    explanation: "When suspicious connections are observed between internal endpoints, it indicates a need for security measures within the internal network, at the host level. A host-based firewall is installed on individual computers (endpoints) and can monitor and control network traffic to and from that specific machine, mitigating threats that might have bypassed the perimeter firewall or originated internally.",
    incorrectOptionsExplanation: "B. Web application firewall (WAF): A WAF is designed to protect web applications from web-based attacks. It does not primarily address general suspicious network connections between internal non-web-application endpoints.\nC. Access control list (ACL): While ACLs can be used for internal network segmentation, a 'host-based firewall' is a more specific and direct solution for controlling traffic at the individual endpoint level.\nD. Application allow list: This controls which applications are permitted to run on a host. It doesn't directly control or filter suspicious network connections between already running applications.",
    isMultipleChoice: false
  },
  {
    id: 76,
    question: "A business received a small grant to migrate its infrastructure to an off-premises solution. Which of the following should be considered first?",
    options: [
      { label: 'A', text: 'Security of cloud providers' },
      { label: 'B', text: 'Cost of implementation' },
      { label: 'C', text: 'Ability of engineers' },
      { label: 'D', text: 'Security of architecture' }
    ],
    answer: ['D'],
    explanation: "When migrating infrastructure to an off-premises solution, security of the architecture should be considered first. This involves defining the security requirements, controls, and design for the new environment. This foundational step ensures that security is a primary consideration from the outset, rather than an afterthought. Establishing a secure architecture will then inform other crucial decisions.",
    incorrectOptionsExplanation: "A. Security of cloud providers: Evaluating the security of cloud providers is a critical due diligence step. However, this assessment is most effectively performed once the business has defined its own security architecture and requirements.\nB. Cost of implementation: A clear understanding of the required security architecture is necessary to accurately estimate implementation costs.\nC. Ability of engineers: Assessing the skills of engineers typically follows decisions about the specific architecture, technologies, and platforms that will be used.",
    isMultipleChoice: false
  },
  {
    id: 77,
    question: "A company is planning a disaster recovery site and needs to ensure that a single natural disaster would not result in the complete loss of regulated backup data. Which of the following should the company consider?",
    options: [
      { label: 'A', text: 'Geographic dispersion' },
      { label: 'B', text: 'Platform diversity' },
      { label: 'C', text: 'Hot site' },
      { label: 'D', text: 'Load balancing' }
    ],
    answer: ['A'],
    explanation: "Geographic dispersion is the strategy of locating critical infrastructure, systems, or data in separate and distinct geographical areas. This is a fundamental principle in disaster recovery planning to ensure that a single natural disaster (e.g., hurricane, earthquake, flood) affecting one region does not lead to the complete loss of regulated backup data.",
    incorrectOptionsExplanation: "B. Platform diversity: This involves using different technologies. It does not inherently protect data from a natural disaster that impacts the physical location where all platforms reside.\nC. Hot site: A hot site is a fully equipped disaster recovery facility. Its effectiveness against a regional natural disaster depends on its location. If not geographically dispersed, it could be affected by the same disaster.\nD. Load balancing: This technique distributes network traffic. It is not a primary strategy for protecting backup data from destruction by a natural disaster.",
    isMultipleChoice: false
  },
  {
    id: 78,
    question: "A security analyst receives alerts about an internal system sending a large amount of unusual DNS queries to systems on the internet over short periods of time during non-business hours. Which of the following is most likely occurring?",
    options: [
      { label: 'A', text: 'A worm is propagating across the network.' },
      { label: 'B', text: 'Data is being exfiltrated.' },
      { label: 'C', text: 'A logic bomb is deleting data.' },
      { label: 'D', text: 'Ransomware is encrypting files.' }
    ],
    answer: ['B'],
    explanation: "The scenario describes a pattern highly indicative of DNS tunneling, a technique used for data exfiltration. Attackers encode data into a series of DNS queries to a server they control. The 'unusual' nature of the queries, the high volume, the burst activity, and occurrence during off-hours are all classic signs of this type of exfiltration.",
    incorrectOptionsExplanation: "A. A worm is propagating across the network: Worms typically generate scanning traffic or traffic related to specific protocols like SMB, not large volumes of unusual DNS queries.\nC. A logic bomb is deleting data: Its activity is typically localized to the system it's on and doesn't inherently involve sending large volumes of unusual DNS queries to external systems.\nD. Ransomware is encrypting files: While it might communicate with a C2 server, its defining characteristic isn't typically large-scale, unusual DNS query bursts for data exfiltration.",
    isMultipleChoice: false
  },
  {
    id: 79,
    question: "An employee receives a text message from an unknown number claiming to be the company's Chief Executive Officer and asking the employee to purchase several gift cards. Which of the following types of attacks does this describe?",
    options: [
      { label: 'A', text: 'Vishing' },
      { label: 'B', text: 'Smishing' },
      { label: 'C', text: 'Pretexting' },
      { label: 'D', text: 'Phishing' }
    ],
    answer: ['B'],
    explanation: "Smishing is a type of phishing attack conducted via SMS (Short Message Service) text messages. The scenario describes an attacker using a text message to impersonate the CEO and instruct the employee to purchase gift cards. This method directly aligns with the definition of smishing.",
    incorrectOptionsExplanation: "A. Vishing: Vishing attacks are conducted over voice calls, not text messages.\nC. Pretexting: Pretexting is the technique of creating a fabricated scenario. While pretexting is employed in this attack, Smishing more specifically describes the attack type based on its SMS delivery method.\nD. Phishing: Phishing is a broad term. Smishing is a specific subtype of phishing that occurs via SMS, making it the most precise answer.",
    isMultipleChoice: false
  },
  {
    id: 80,
    question: "Which of the following would help ensure a security analyst is able to accurately measure the overall risk to an organization when a new vulnerability is disclosed?",
    options: [
      { label: 'A', text: 'A full inventory of all hardware and software' },
      { label: 'B', text: 'Documentation of system classifications' },
      { label: 'C', text: 'A list of system owners and their departments' },
      { label: 'D', text: 'Third-party risk assessment documentation' }
    ],
    answer: ['A'],
    explanation: "To accurately measure the overall risk an organization faces when a new vulnerability is disclosed, a security analyst must first determine which of the organization's assets are affected. A full inventory of all hardware and software provides this foundational information. Without knowing what systems and software are present, it's impossible to identify whether the new vulnerability exists within the organization's environment.",
    incorrectOptionsExplanation: "B. Documentation of system classifications: While essential for determining the business impact, classifications are used after identifying which systems are vulnerable. Without an inventory, the analyst cannot know to which systems to apply them.\nC. A list of system owners and their departments: This information is vital for communication and coordinating remediation after risk has been assessed. It does not directly contribute to the technical measurement of the risk itself.\nD. Third-party risk assessment documentation: This pertains to risks associated with external vendors, not the risk posed by a new vulnerability to the organization's internal assets.",
    isMultipleChoice: false
  },
  {
    id: 81,
    question: "A systems administrator is changing the password policy within an enterprise environment and wants this update implemented on all systems as quickly as possible. Which of the following operating system security measures will the administrator most likely use?",
    options: [
      { label: 'A', text: 'Deploying PowerShell scripts' },
      { label: 'B', text: 'Pushing GPO update' },
      { label: 'C', text: 'Enabling PAP' },
      { label: 'D', text: 'Updating EDR profiles' }
    ],
    answer: ['B'],
    explanation: "In an enterprise environment utilizing Microsoft Active Directory, Group Policy Objects (GPOs) are the standard and most efficient mechanism for defining and deploying configuration settings, including password policies, across all domain-joined computers. Pushing a GPO update ensures that the new policy is applied centrally and consistently.",
    incorrectOptionsExplanation: "A. Deploying PowerShell scripts: While PowerShell can manage system configurations, GPO is the more direct and established framework for enterprise-wide policy enforcement.\nC. Enabling PAP: The Password Authentication Protocol (PAP) is an insecure authentication method and not a mechanism for implementing or updating password policies.\nD. Updating EDR profiles: Endpoint Detection and Response (EDR) solutions are focused on detecting and responding to security threats, not operating system-level password policies.",
    isMultipleChoice: false
  },
  {
    id: 82,
    question: "Visitors to a secured facility are required to check in with a photo ID and enter the facility through an access control vestibule. Which of the following best describes this form of security control?",
    options: [
      { label: 'A', text: 'Physical' },
      { label: 'B', text: 'Managerial' },
      { label: 'C', text: 'Technical' },
      { label: 'D', text: 'Operational' }
    ],
    answer: ['D'],
    explanation: "The described security measures are best described as operational controls. According to NIST, operational controls are security controls that are primarily implemented and executed by people. The 'Physical and Environmental Protection' and 'Personnel Security' control families, which cover vestibules and ID checks, are classified under the Operational class.",
    incorrectOptionsExplanation: "A. Physical: While the vestibule is a physical barrier, NIST frameworks categorize the implementation and human-executed procedures governing such measures under operational controls.\nB. Managerial: Managerial controls focus on establishing policies and governance. The question describes the execution of these controls, not their strategic planning.\nC. Technical: Technical controls are automated safeguards implemented through technology (e.g., firewalls). The scenario describes human-enforced procedures.",
    isMultipleChoice: false
  },
  {
    id: 83,
    question: "A company must ensure sensitive data at rest is rendered unreadable. Which of the following will the company most likely use?",
    options: [
      { label: 'A', text: 'Hashing' },
      { label: 'B', text: 'Tokenization' },
      { label: 'C', text: 'Encryption' },
      { label: 'D', text: 'Segmentation' }
    ],
    answer: ['C'],
    explanation: "Encryption is the most appropriate method for rendering sensitive data at rest unreadable. It transforms plaintext (readable data) into ciphertext (unreadable data) using an algorithm and a cryptographic key. Only entities possessing the correct decryption key can convert the ciphertext back into readable plaintext.",
    incorrectOptionsExplanation: "A. Hashing: Hashing creates a fixed-size, non-reversible string from data, primarily used for integrity verification and password storage. It doesn't allow for the retrieval of the original sensitive data.\nB. Tokenization: Tokenization replaces sensitive data with a non-sensitive unique identifier (token). The original data is stored elsewhere and still requires protection. The question focuses on rendering the data itself unreadable.\nD. Segmentation: Segmentation is a security approach that divides a network or system into smaller, isolated zones. It controls access to data but doesn't inherently render the data itself unreadable.",
    isMultipleChoice: false
  },
  {
    id: 84,
    question: "Which of the following describes the maximum allowance of accepted risk?",
    options: [
      { label: 'A', text: 'Risk indicator' },
      { label: 'B', text: 'Risk level' },
      { label: 'C', text: 'Risk score' },
      { label: 'D', text: 'Risk threshold' }
    ],
    answer: ['D'],
    explanation: "A risk threshold defines the level of risk at which that risk becomes unacceptable to an organization, thereby representing the maximum allowance of accepted risk. If a measured risk level surpasses this predefined threshold, it typically triggers a specific response, such as implementing additional controls or initiating a risk treatment plan.",
    incorrectOptionsExplanation: "A. Risk indicator: This is a metric used to provide information about the level of exposure to a given risk at a specific time. It monitors risk but doesn't define the maximum acceptable level.\nB. Risk level: This refers to the magnitude of a risk, typically expressed as a combination of the likelihood of an event and its potential consequences.\nC. Risk score: This is a numerical value assigned to a risk as a result of risk analysis, often used for prioritization. It quantifies risk, but it's not the maximum allowance itself.",
    isMultipleChoice: false
  },
  {
    id: 85,
    question: "Which of the following incident response activities ensures evidence is properly handled?",
    options: [
      { label: 'A', text: 'E-discovery' },
      { label: 'B', text: 'Chain of custody' },
      { label: 'C', text: 'Legal hold' },
      { label: 'D', text: 'Preservation' }
    ],
    answer: ['B'],
    explanation: "Chain of custody is the chronological documentation or paper trail, showing the seizure, custody, control, transfer, analysis, and disposition of physical or electronic evidence. Maintaining a complete and accurate chain of custody is essential to ensuring that evidence has been properly handled and is admissible in legal proceedings.",
    incorrectOptionsExplanation: "A. E-discovery: Electronic discovery is the process of identifying, collecting, and producing electronically stored information (ESI) in response to a legal request. It uses evidence, but it is not the activity that ensures proper handling.\nC. Legal hold: A legal hold is a directive to preserve data. It initiates the preservation process but does not encompass the ongoing procedures for ensuring evidence is properly handled.\nD. Preservation: Preservation is the act of maintaining evidence in its original state. While proper handling is a component of preservation, chain of custody is the specific activity that documents and validates this proper handling.",
    isMultipleChoice: false
  },
  {
    id: 86,
    question: "Which of the following risk management strategies should an enterprise adopt first if a legacy application is critical to business operations and there are preventative controls that are not yet implemented?",
    options: [
      { label: 'A', text: 'Mitigate' },
      { label: 'B', text: 'Accept' },
      { label: 'C', text: 'Transfer' },
      { label: 'D', text: 'Avoid' }
    ],
    answer: ['A'],
    explanation: "For a legacy application critical to business operations where preventative controls are identified but not yet implemented, the most appropriate first risk management strategy is mitigation. Risk mitigation involves applying controls to reduce the likelihood or impact of a risk. Since preventative controls are available, the primary action should be their implementation.",
    incorrectOptionsExplanation: "B. Accept: Risk acceptance is typically considered when the cost of mitigation outweighs the benefit. For a critical system with unimplemented controls, acceptance should not be the first strategy.\nC. Transfer: Risk transfer (e.g., through insurance) shifts the financial impact of a risk but does not address the underlying vulnerabilities.\nD. Avoid: Risk avoidance means ceasing the activity or system causing the risk. Since the legacy application is 'critical to business operations,' avoiding its use is a last resort.",
    isMultipleChoice: false
  },
  {
    id: 87,
    question: "Which of the following teams combines both offensive and defensive testing techniques to protect an organization's critical systems?",
    options: [
      { label: 'A', text: 'Red' },
      { label: 'B', text: 'Blue' },
      { label: 'C', text: 'Purple' },
      { label: 'D', text: 'Yellow' }
    ],
    answer: ['C'],
    explanation: "A Purple Team functions to integrate and enhance the capabilities of both Red (offensive) and Blue (defensive) teams. This team ensures that offensive findings from Red Team exercises are used to directly improve defensive measures. This collaborative effort effectively 'combines both offensive and defensive testing techniques' by fostering continuous feedback.",
    incorrectOptionsExplanation: "A. Red: Red Teams focus solely on offensive security tactics, simulating attacks to test an organization's defenses.\nB. Blue: Blue Teams are responsible for defensive security, focusing on protecting, detecting, and responding to cyber threats.\nD. Yellow: Yellow Teams are generally associated with builders and developers (often in a DevSecOps context), focusing on ensuring security is integrated into the software development lifecycle.",
    isMultipleChoice: false
  },
  {
    id: 88,
    question: "A company is working with a vendor to perform a penetration test. Which of the following includes an estimate about the number of hours required to complete the engagement?",
    options: [
      { label: 'A', text: 'SOW' },
      { label: 'B', text: 'BPA' },
      { label: 'C', text: 'SLA' },
      { label: 'D', text: 'NDA' }
    ],
    answer: ['A'],
    explanation: "A Statement of Work (SOW) is a contractual document that details the specific work to be performed for a project, such as a penetration test. It typically includes the scope of work, specific tasks, deliverables, and a schedule. The schedule and task definitions inherently require an estimation of the effort involved, which is often expressed in hours.",
    incorrectOptionsExplanation: "B. BPA (Business Partner Agreement): A BPA is a general agreement establishing a relationship, not typically detailing specific project hours.\nC. SLA (Service Level Agreement): An SLA defines the expected levels of performance for an ongoing service, not the initial estimation of hours for a discrete project.\nD. NDA (Non-Disclosure Agreement): An NDA is a legal contract that outlines confidential material. It does not include project timelines or effort estimates.",
    isMultipleChoice: false
  },
  {
    id: 89,
    question: "The local administrator account for a company's VPN appliance was unexpectedly used to log in to the remote management interface. Which of the following would have most likely prevented this from happening?",
    options: [
      { label: 'A', text: 'Using least privilege' },
      { label: 'B', text: 'Changing the default password' },
      { label: 'C', text: 'Assigning individual user IDs' },
      { label: 'D', text: 'Reviewing logs more frequently' }
    ],
    answer: ['B'],
    explanation: "Network appliances frequently ship with default usernames and passwords that are publicly known or easily guessed. Failing to change these default credentials is a common and critical vulnerability. Therefore, changing the default password to a strong, unique one is the most direct and highly effective preventative measure against unauthorized logins exploiting this oversight.",
    incorrectOptionsExplanation: "A. Using least privilege: This principle aims to limit the actions an account can perform after logging in. It doesn't directly prevent an initial login if the credentials are compromised.\nC. Assigning individual user IDs: This is vital for accountability, but if the generic 'local administrator' account still exists with its default password, it can still be used.\nD. Reviewing logs more frequently: This is a detective control, not a preventative one. It helps in identifying an unauthorized login after it has occurred, but it does not stop it.",
    isMultipleChoice: false
  },
  {
    id: 90,
    question: "Which of the following would be most useful in determining whether the long-term cost to transfer a risk is less than the impact of the risk?",
    options: [
      { label: 'A', text: 'ARO' },
      { label: 'B', text: 'RTO' },
      { label: 'C', text: 'RPO' },
      { label: 'D', text: 'ALE' },
      { label: 'E', text: 'SLE' }
    ],
    answer: ['D'],
    explanation: "The Annualized Loss Expectancy (ALE) is the most useful metric for this purpose. ALE quantifies the expected monetary loss from a specific risk over a one-year period. By comparing the annual cost of the risk transfer mechanism (e.g., an insurance premium) to the ALE, an organization can make an informed financial decision about whether transferring the risk is cost-effective.",
    incorrectOptionsExplanation: "A. ARO (Annualized Rate of Occurrence): This indicates how frequently a risk is expected to occur. It doesn't quantify the financial impact.\nB. RTO (Recovery Time Objective): This is a business continuity metric, not a direct financial measure for comparing risk transfer costs.\nC. RPO (Recovery Point Objective): Like RTO, this is a business continuity metric concerned with data recovery targets, not financial impact assessment.\nE. SLE (Single Loss Expectancy): This is the expected monetary loss from a single occurrence of a risk. It doesn't provide the annualized perspective needed to compare with ongoing, long-term risk transfer costs.",
    isMultipleChoice: false
  },
  {
    id: 91,
    question: "A security analyst is investigating an application server and discovers that software on the server is behaving abnormally. The software normally runs batch jobs locally and does not generate traffic, but the process is now generating outbound traffic over random high ports. Which of the following vulnerabilities has likely been exploited in this software?",
    options: [
      { label: 'A', text: 'Memory injection' },
      { label: 'B', text: 'Race condition' },
      { label: 'C', text: 'Side loading' },
      { label: 'D', text: 'SQL injection' }
    ],
    answer: ['A'],
    explanation: "Memory injection allows an attacker to execute arbitrary code within the address space of a running process. This injected code can fundamentally alter the program's behavior, such as initiating outbound network connections. This aligns perfectly with the scenario where a normally local batch job begins sending outbound traffic over random high ports. The abnormal network activity is a direct consequence of the unauthorized code execution.",
    incorrectOptionsExplanation: "B. Race condition: A race condition occurs due to flaws in the sequencing or timing of operations. While it could be exploited to enable code execution, it is not the direct description of the cause of the observed symptoms.\nC. Side loading: This refers to installing applications from unofficial sources, typically onto mobile devices. It doesn't fit the scenario of an existing software on a server suddenly behaving abnormally.\nD. SQL injection: This is an attack targeting databases. While it can sometimes lead to remote code execution, 'memory injection' is a more direct and general explanation for arbitrary code running within the described process.",
    isMultipleChoice: false
  },
  {
    id: 92,
    question: "A company wants to verify that the software the company is deploying came from the vendor the company purchased the software from. Which of the following is the best way for the company to confirm this information?",
    options: [
      { label: 'A', text: 'Validate the code signature.' },
      { label: 'B', text: 'Execute the code in a sandbox.' },
      { label: 'C', text: 'Search the executable for ASCII strings.' },
      { label: 'D', text: 'Generate a hash of the files.' }
    ],
    answer: ['A'],
    explanation: "Validating the code signature is the most effective method to confirm that software originated from a specific vendor and has not been tampered with. Code signing uses a digital signature, which cryptographically binds the identity of the software publisher (the vendor) to the software. A match confirms both the integrity of the software and the authenticity of the vendor.",
    incorrectOptionsExplanation: "B. Execute the code in a sandbox: Sandboxing isolates software to observe its behavior. It helps assess safety but doesn't verify the software's origin.\nC. Search the executable for ASCII strings: While ASCII strings might contain vendor names, this information can be easily forged or altered.\nD. Generate a hash of the files: Generating a hash verifies the integrity of the files, but it doesn't confirm its origin unless compared against a known, trusted hash obtained directly and securely from the vendor. Code signing incorporates hashing with identity verification.",
    isMultipleChoice: false
  },
  {
    id: 93,
    question: "In order to strengthen a password and prevent a hacker from cracking it, a random string of 36 characters was added to the password. Which of the following best describes this technique?",
    options: [
      { label: 'A', text: 'Key stretching' },
      { label: 'B', text: 'Tokenization' },
      { label: 'C', text: 'Data masking' },
      { label: 'D', text: 'Salting' }
    ],
    answer: ['D'],
    explanation: "Salting is a cryptographic technique that involves adding a unique, random string of characters (the 'salt') to a password before it is hashed and stored. This process ensures that even if two users have the same password, their stored hash values will be different. The primary purpose of salting is to defend against pre-computed hash table attacks (e.g., rainbow tables).",
    incorrectOptionsExplanation: "A. Key stretching: This technique intentionally makes the key derivation function slow, increasing the computational effort required to crack a password. The question focuses on adding a random string, not the computational cost of hashing.\nB. Tokenization: This is a security process that replaces sensitive data elements with non-sensitive equivalents called 'tokens'. It's not directly related to strengthening passwords.\nC. Data masking: This technique involves creating a structurally similar but inauthentic version of data by obscuring original sensitive information. It's not for strengthening passwords.",
    isMultipleChoice: false
  },
  {
    id: 94,
    question: "A security administrator recently reset local passwords and the following values were recorded in the system:\nUser         MD5 Hash\nroot         1a31792394c852d7... \nj.doe        e5d4c8b212f76fe3... \nadmin        21232f297a57a5a7... \ns.sales      b1b3773a05c0ed01... \nWhich of the following in the security administrator most likely protecting against?",
    options: [
      { label: 'A', text: 'Account sharing' },
      { label: 'B', text: 'Weak password complexity' },
      { label: 'C', text: 'Pass-the-hash attacks' },
      { label: 'D', text: 'Password compromise' }
    ],
    answer: ['D'],
    explanation: "Resetting local passwords is a fundamental security measure taken when existing passwords are, or are suspected to be, compromised. This action aims to invalidate the compromised credentials and prevent unauthorized access. While resetting passwords also thwarts ongoing pass-the-hash attacks using old hashes, the broader reason is to address general password compromise, which could occur through various means (phishing, malware, etc.).",
    incorrectOptionsExplanation: "A. Account sharing: Resetting passwords might temporarily disrupt account sharing, but it's primarily a policy and user behavior issue.\nB. Weak password complexity: Resetting passwords is an opportunity to enforce complexity, but the act of resetting itself doesn't inherently protect against weak complexity.\nC. Pass-the-hash attacks: While resetting passwords helps protect against pass-the-hash attacks by invalidating old hashes, this is a specific type of password compromise. The act of resetting passwords is a general protection against any form of password compromise, making option D more encompassing.",
    isMultipleChoice: false
  },
  {
    id: 95,
    question: "The security operations center is researching an event concerning a suspicious IP address. A security analyst looks at the following event logs and discovers that a significant portion of the user accounts have experienced failed login attempts when authenticating from the same IP address:\n184.168.131.241 - userA - failed authentication\n184.168.131.241 - userB - failed authentication\n184.168.131.241 - userC - failed authentication\n...and so on\nWhich of the following most likely describes attack that took place?",
    options: [
      { label: 'A', text: 'Spraying' },
      { label: 'B', text: 'Brute-force' },
      { label: 'C', text: 'Dictionary' },
      { label: 'D', text: 'Rainbow table' }
    ],
    answer: ['A'],
    explanation: "The log shows multiple failed login attempts from a single IP address across several distinct user accounts. This pattern is characteristic of a password spraying attack. In such an attack, the malicious actor attempts to access a large number of accounts using a few commonly used passwords. This method is chosen to avoid account lockouts.",
    incorrectOptionsExplanation: "B. Brute-force: While password spraying is a type of brute-force attack, 'brute-force' is a broader term. The specific pattern of targeting multiple accounts is more precisely described as spraying.\nC. Dictionary: A dictionary attack uses a list of common words or passwords. While a spraying attack might use passwords from a dictionary, 'dictionary attack' describes the source of the passwords rather than the methodology.\nD. Rainbow table: A rainbow table attack is used for reversing cryptographic hash functions offline, not for live authentication attempts.",
    isMultipleChoice: false
  },
  {
    id: 96,
    question: "A security analyst finds a rogue device during a monthly audit of current endpoint assets that are connected to the network. The corporate network utilizes 802.1X for access control. To be allowed on the network, a device must have a Known hardware address, and a valid user name and password must be entered in a captive portal. The audit report shows the MAC address EB-AC-11-B2-Q2-F3 is associated with two different IPs and hostnames. Which of the following is the most likely way a rogue device was allowed to connect?",
    options: [
      { label: 'A', text: 'A user performed a MAC cloning attack with a personal device.' },
      { label: 'B', text: 'A DHCP failure caused an incorrect IP address to be distributed' },
      { label: 'C', text: 'An administrator bypassed the security controls for testing.' },
      { label: 'D', text: 'DNS hijacking let an attacker intercept the captive portal traffic.' }
    ],
    answer: ['A'],
    explanation: "The audit report reveals that the same MAC address is associated with two different IP addresses and hostnames. This duplication strongly indicates a MAC cloning (or spoofing) attack. In such an attack, a user modifies the MAC address of their unauthorized device to match that of an authorized device. This allows the rogue device to bypass the network's requirement for a 'Known hardware address.'",
    incorrectOptionsExplanation: "B. A DHCP failure caused an incorrect IP address to be distributed: DHCP issues don't directly explain how a device with an unknown MAC address would bypass MAC-based filtering.\nC. An administrator bypassed the security controls for testing: This is a general possibility but is not directly supported by the specific evidence. The duplicate MAC address points more directly to MAC cloning.\nD. DNS hijacking let an attacker intercept the captive portal traffic: DNS hijacking could compromise user credentials but wouldn't by itself allow a rogue device to pass the initial network access control based on a known hardware address.",
    isMultipleChoice: false
  },
  {
    id: 97,
    question: "Which of the following best describe a penetration test that resembles an actual external attack?",
    options: [
      { label: 'A', text: 'Known environment' },
      { label: 'B', text: 'Partially known environment' },
      { label: 'C', text: 'Bug bounty' },
      { label: 'D', text: 'Unknown environment' }
    ],
    answer: ['D'],
    explanation: "An unknown environment penetration test, often referred to as a black-box test, best simulates an actual external attack. In this scenario, the penetration tester has little to no prior knowledge of the target system's internal architecture, source code, or defenses, much like a real external attacker would. The tester attempts to discover vulnerabilities from an external perspective.",
    incorrectOptionsExplanation: "A. Known environment: This describes a white-box test where testers have full knowledge of the system. This is unlike a typical external attacker.\nB. Partially known environment: This refers to a gray-box test where testers have some, but not complete, information. An unknown environment is more representative of an initial external attack.\nC. Bug bounty: A bug bounty is a program that rewards individuals for finding vulnerabilities. It involves external testing, but it's a model for security testing, not a description of the knowledge level given to the tester.",
    isMultipleChoice: false
  },
  {
    id: 98,
    question: "A company is implementing a vendor's security tool in the cloud. The security director does not want to manage users and passwords specific to this tool but would rather utilize the company's standard user directory. Which of the following should the company implement?",
    options: [
      { label: 'A', text: '802.1X' },
      { label: 'B', text: 'SAML' },
      { label: 'C', text: 'RADIUS' },
      { label: 'D', text: 'CHAP' }
    ],
    answer: ['B'],
    explanation: "Security Assertion Markup Language (SAML) is the most appropriate solution. SAML is an XML-based open standard for exchanging authentication and authorization data between an identity provider (IdP) – the company's standard user directory – and a service provider (SP) – the vendor's cloud security tool. This allows users to log in once using their company credentials to access multiple applications.",
    incorrectOptionsExplanation: "A. 802.1X: This is a network access control (NAC) standard primarily used for port-based authentication on wired and wireless networks, not for authenticating users to cloud applications.\nC. RADIUS: While RADIUS provides centralized authentication, it is more commonly used for network access scenarios (e.g., VPNs) rather than web-based single sign-on.\nD. CHAP: Challenge-Handshake Authentication Protocol is an authentication scheme used by Point-to-Point Protocol (PPP) servers and is not designed for integrating cloud application authentication.",
    isMultipleChoice: false
  },
  {
    id: 99,
    question: "An employee fell for a phishing scam, which allowed an attacker to gain access to a company PC. The attacker scraped the PC’s memory to find other credentials. Without cracking these credentials, the attacker used them to move laterally through the corporate network. Which of the following describes this type of attack?",
    options: [
      { label: 'A', text: 'Privilege escalation' },
      { label: 'B', text: 'Buffer overflow' },
      { label: 'C', text: 'SQL injection' },
      { label: 'D', text: 'Pass-the-hash' }
    ],
    answer: ['D'],
    explanation: "A Pass-the-Hash (PtH) attack is a technique where an attacker captures a password hash from a system and then uses this hash to authenticate to other systems on the network. The key aspect highlighted is 'Without cracking these credentials, the attacker used them to move laterally,' which directly aligns with the modus operandi of a PtH attack.",
    incorrectOptionsExplanation: "A. Privilege escalation: This refers to an attacker gaining higher levels of permissions. While PtH could lead to privilege escalation, PtH itself is the method of using the credentials, not the act of escalating privileges.\nB. Buffer overflow: This is a vulnerability where a program overruns a buffer's boundary. It is a method of exploitation, not a description of using stolen credentials.\nC. SQL injection: This is a code injection technique used to attack data-driven applications. It is unrelated to the described memory scraping and lateral movement using Windows credentials.",
    isMultipleChoice: false
  },
  {
    id: 100,
    question: "A company wants to reduce the time and expense associated with code deployment. Which of the following technologies should the company utilize?",
    options: [
      { label: 'A', text: 'Serverless architecture' },
      { label: 'B', text: 'Thin clients' },
      { label: 'C', text: 'Private cloud' },
      { label: 'D', text: 'Virtual machines' }
    ],
    answer: ['A'],
    explanation: "Serverless architecture allows developers to build and run applications without managing the underlying infrastructure. This model significantly reduces the operational overhead associated with provisioning, scaling, patching, and managing servers. Consequently, code can be deployed more rapidly, and costs are often optimized as payment is typically based on actual usage.",
    incorrectOptionsExplanation: "B. Thin clients: Thin clients are endpoint devices that depend on a central server for computation. They primarily impact user desktop management, not the backend code deployment process.\nC. Private cloud: While a private cloud offers more control, it still requires the company to manage the cloud infrastructure, which involves time and expense that serverless aims to abstract away.\nD. Virtual machines: Deploying code to virtual machines necessitates managing the operating system, software dependencies, and scaling, which can be time-consuming and add to operational costs.",
    isMultipleChoice: false
  },
  {
    id: 101,
    question: "A security team created a document that details the order in which critical systems should be brought back online after a major outage. Which of the following documents did the team create?",
    options: [
      { label: 'A', text: 'Communication plan' },
      { label: 'B', text: 'Incident response plan' },
      { label: 'C', text: 'Data retention policy' },
      { label: 'D', text: 'Disaster recovery plan' }
    ],
    answer: ['D'],
    explanation: "A Disaster Recovery Plan (DRP) outlines the procedures for restoring an organization's IT infrastructure and operations in the event of a significant disruption. A critical component of a DRP is the order of restoration for critical systems, ensuring that the most essential services are brought back online first to minimize business impact.",
    incorrectOptionsExplanation: "A. Communication plan: This plan focuses on how, what, and with whom to communicate during and after an incident, not the technical sequence of system recovery.\nB. Incident response plan: An IRP provides procedures for responding to security incidents like cyberattacks. While recovery is a phase, the detailed sequence of bringing all critical systems back online after a major outage is the core of a DRP.\nC. Data retention policy: This policy dictates how long data must be kept and how it should be disposed of. It does not address the restoration sequence of IT systems.",
    isMultipleChoice: false
  },
  {
    id: 102,
    question: "Which of the following best represents an application that does not have an on-premises requirement and is accessible from anywhere?",
    options: [
      { label: 'A', text: 'PaaS' },
      { label: 'B', text: 'Hybrid cloud' },
      { label: 'C', text: 'Private cloud' },
      { label: 'D', text: 'IaaS' },
      { label: 'E', text: 'SaaS' }
    ],
    answer: ['E'],
    explanation: "Software as a Service (SaaS) best represents an application that does not have an on-premises requirement for the user and is accessible from anywhere. In the SaaS model, applications are hosted by a third-party provider and made available to customers over the Internet, typically through a web browser.",
    incorrectOptionsExplanation: "A. PaaS (Platform as a Service): PaaS provides a platform for developing and managing applications, not the end-user application itself.\nB. Hybrid cloud: A hybrid cloud is a composition of public and private clouds, and often includes on-premises infrastructure.\nC. Private cloud: A private cloud is operated exclusively for a single organization. It may be on-premises and does not guarantee universal accessibility.\nD. IaaS (Infrastructure as a Service): IaaS offers fundamental computing resources. The user still needs to deploy and manage the applications on this infrastructure.",
    isMultipleChoice: false
  },
  {
    id: 103,
    question: "A company is utilizing an offshore team to help support the finance department. The company wants to keep the data secure by keeping it on a company device but does not want to provide equipment to the offshore team. Which of the following should the company implement to meet this requirement?",
    options: [
      { label: 'A', text: 'VDI' },
      { label: 'B', text: 'MDM' },
      { label: 'C', text: 'VPN' },
      { label: 'D', text: 'VPC' }
    ],
    answer: ['A'],
    explanation: "Virtual Desktop Infrastructure (VDI) is the most appropriate solution. VDI hosts desktop environments on a central server, and users access them remotely. This ensures that all data and applications remain on the company's servers (the 'company device' in a logical sense), not on the offshore team's personal equipment. The offshore team can use their own devices to connect to these virtual desktops.",
    incorrectOptionsExplanation: "B. MDM (Mobile Device Management): MDM is used to manage and secure mobile devices. It doesn't inherently ensure that company data remains solely on company-controlled servers.\nC. VPN (Virtual Private Network): A VPN provides a secure tunnel to the company network, but it allows the offshore team's devices to directly access network resources, and data could still be stored on their local devices.\nD. VPC (Virtual Private Cloud): A VPC is a private network segment within a public cloud. It is an infrastructure component, not the end-user technology that addresses the requirement.",
    isMultipleChoice: false
  },
  {
    id: 104,
    question: "An administrator is investigating an incident and discovers several users’ computers were infected with malware after viewing files that were shared with them. The administrator discovers no degraded performance in the infected machines and an examination of the log files does not show excessive failed logins. Which of the following attacks is most likely the cause of the malware?",
    options: [
      { label: 'A', text: 'Malicious flash drive' },
      { label: 'B', text: 'Remote access Trojan' },
      { label: 'C', text: 'Brute-forced password' },
      { label: 'D', text: 'Cryptojacking' }
    ],
    answer: ['B'],
    explanation: "A Remote Access Trojan (RAT) is a type of malware that allows an attacker to gain unauthorized, covert control over an infected computer. The scenario indicates malware infection occurred via shared files, and importantly, there was no degraded performance. RATs are often designed for stealth to maintain persistent access without alerting the user, which aligns with the lack of observable performance issues.",
    incorrectOptionsExplanation: "A. Malicious flash drive: This describes a delivery vector for malware, not the type of malware behavior itself.\nC. Brute-forced password: This attack is characterized by numerous login attempts, which the scenario explicitly states were not found.\nD. Cryptojacking: This type of attack involves illicitly using a victim's computing resources to mine cryptocurrency, which typically leads to significant performance degradation.",
    isMultipleChoice: false
  },
  {
    id: 105,
    question: "Which of the following is an algorithm performed to verify that data has not been modified?",
    options: [
      { label: 'A', text: 'Hash' },
      { label: 'B', text: 'Code check' },
      { label: 'C', text: 'Encryption' },
      { label: 'D', text: 'Checksum' }
    ],
    answer: ['A'],
    explanation: "A hash algorithm is performed to verify that data has not been modified by producing a fixed-size string of bits (a hash value) from an input. If the original data is changed in any way, the resulting hash value will also change. By comparing a newly computed hash with a previously stored hash, one can verify its integrity.",
    incorrectOptionsExplanation: "B. Code check: This term typically refers to the review or analysis of software source code, not a general algorithm for verifying data integrity.\nC. Encryption: Encryption is primarily a process for ensuring confidentiality. While some encryption modes also provide integrity, encryption itself is not the algorithm performed to verify modification.\nD. Checksum: While checksums are also used to detect data modifications, the term often refers to simpler algorithms designed to detect accidental errors. Cryptographic hash functions offer stronger guarantees against intentional modifications.",
    isMultipleChoice: false
  },
  {
    id: 106,
    question: "An employee recently resigned from a company. The employee was responsible for managing and supporting weekly batch jobs over the past five years. A few weeks after the employee resigned, one of the batch jobs failed and caused a major disruption. Which of the following would work best to prevent this type of incident from reoccurring?",
    options: [
      { label: 'A', text: 'Job rotation' },
      { label: 'B', text: 'Retention' },
      { label: 'C', text: 'Outsourcing' },
      { label: 'D', text: 'Separation of duties' }
    ],
    answer: ['A'],
    explanation: "Job rotation involves periodically moving employees between different jobs. This practice is highly effective in preventing disruptions caused by the departure of an employee with specialized knowledge, as it ensures that multiple individuals are cross-trained and familiar with critical processes. By distributing knowledge and skills, job rotation mitigates the risk of a single point of failure.",
    incorrectOptionsExplanation: "B. Retention: While employee retention is valuable, it does not guarantee knowledge transfer. If a retained employee still holds exclusive knowledge, their eventual departure would still pose the same risk.\nC. Outsourcing: Outsourcing transfers responsibility to a third party. It's a broader strategic decision and not the most direct internal mechanism to prevent knowledge loss impact.\nD. Separation of duties: This is a security principle primarily aimed at preventing fraud or malicious acts by ensuring no single individual has excessive control over a critical process. Its core purpose is not knowledge transfer for operational continuity.",
    isMultipleChoice: false
  },
  {
    id: 107,
    question: "A security manager is implementing MFA and patch management. Which of the following would best describe the control type and category? (Select two).",
    options: [
      { label: 'A', text: 'Physical' },
      { label: 'B', text: 'Managerial' },
      { label: 'C', text: 'Detective' },
      { label: 'D', text: 'Administrator' },
      { label: 'E', text: 'Preventative' },
      { label: 'F', text: 'Technical' }
    ],
    answer: ['E', 'F'],
    explanation: "Multi-Factor Authentication (MFA) and patch management are security measures that primarily serve as Technical controls because they are implemented using hardware and software systems. Their main function is to stop security incidents before they happen, making them Preventative in nature. MFA prevents unauthorized access, while patch management remediates known vulnerabilities.",
    incorrectOptionsExplanation: "A. Physical: These controls pertain to physical access (e.g., locks, guards). MFA and patch management are logical/software-based.\nB. Managerial: These controls focus on security governance (e.g., policies). While patch management has managerial aspects, the implementation of both is primarily technical.\nC. Detective: These controls identify incidents after they have occurred (e.g., IDS, log review). MFA and patching are primarily aimed at preventing incidents.\nD. Administrator: This refers to a user role, not a type or category of security control.",
    isMultipleChoice: true
  },
  {
    id: 108,
    question: "An organization implemented cloud-managed IP cameras to monitor building entry points and sensitive areas. The service provider enables direct TCP/IP connection to stream live video footage from each camera. The organization wants to ensure this stream is encrypted and authenticated. Which of the following protocols should be implemented to best meet this objective?",
    options: [
      { label: 'A', text: 'SSH' },
      { label: 'B', text: 'SRTP' },
      { label: 'C', text: 'S/MIME' },
      { label: 'D', text: 'PPTP' }
    ],
    answer: ['B'],
    explanation: "SRTP (Secure Real-time Transport Protocol) is specifically designed to provide encryption, message authentication, integrity, and replay protection for Real-time Transport Protocol (RTP) traffic, which is commonly used for video and audio streaming. SRTP is tailored for real-time media, making it the most precise and appropriate protocol for securing the video footage.",
    incorrectOptionsExplanation: "A. SSH (Secure Shell): While SSH can create secure tunnels for TCP connections, it's a general-purpose protocol and not specifically designed or optimized for securing real-time media streams like SRTP is.\nC. S/MIME (Secure/Multipurpose Internet Mail Extensions): This protocol is used for securing email messages, not for encrypting live video streams.\nD. PPTP (Point-to-Point Tunneling Protocol): PPTP is an older VPN protocol with known significant security vulnerabilities and is generally not recommended.",
    isMultipleChoice: false
  },
  {
    id: 109,
    question: "A security analyst discovers that a large number of employee credentials had been stolen. The analyst finds that only hourly employees who clocked in and out using kiosks inside the building were affected. Hourly employees who used the time-keeping website from home were not affected. The kiosks use internal DNS servers. Which of the following is the most likely reason for this compromise?",
    options: [
      { label: 'A', text: 'A brute-force attack was used against the time-keeping website to scan for common passwords.' },
      { label: 'B', text: 'A malicious actor compromised the time-keeping website with malicious code using an unpatched vulnerability on the site, stealing the credentials.' },
      { label: 'C', text: 'The internal DNS servers were poisoned and were redirecting acmetimekeeping.com to a malicious domain that intercepted the credentials.' },
      { label: 'D', text: 'ARP poisoning affected the machines in the building and caused the kiosks to send a copy of all the submitted credentials to a machine.' }
    ],
    answer: ['C'],
    explanation: "Internal DNS poisoning is the most likely reason because it would affect only devices configured to use the compromised internal DNS servers – in this case, the kiosks within the building. When these kiosks attempted to reach the time-keeping website, the poisoned internal DNS server would redirect them to a malicious site designed to capture credentials. Employees accessing the site from home would use different (external) DNS servers and thus would not be redirected.",
    incorrectOptionsExplanation: "A. A brute-force attack would impact all users of the website, including those accessing it from home.\nB. A compromise of the website itself would affect all users accessing it, regardless of their location.\nD. ARP poisoning is a Layer 2 attack typically limited to a single local area network (LAN) segment. The scenario describes kiosks on different floors with multiple routers, making a widespread ARP attack less probable than a centralized internal DNS compromise.",
    isMultipleChoice: false
  },
  {
    id: 110,
    question: "A business uses Wi-Fi with content filtering enabled. An employee noticed a coworker accessed a blocked site from a work computer and reported the issue. While investigating, a security administrator found another device providing internet access to certain employees. Which of the following best describes the security risk?",
    options: [
      { label: 'A', text: 'The host-based security agent is not running on all computers.' },
      { label: 'B', text: 'A rogue access point is allowing users to bypass controls.' },
      { label: 'C', text: 'Employees who have certain credentials are using a hidden SSID.' },
      { label: 'D', text: 'A valid access point is being jammed to limit availability.' }
    ],
    answer: ['B'],
    explanation: "A rogue access point (AP) is a wireless access point that has been installed on a secured network without explicit authorization. In this scenario, 'another device providing internet access' precisely describes an unauthorized AP that allows employees to bypass the company's Wi-Fi with content filtering. This bypass of security controls is a primary risk associated with rogue APs.",
    incorrectOptionsExplanation: "A. The host-based security agent is not running on all computers: While a missing security agent is a vulnerability, the core issue described is the bypass of network-level content filtering via an unauthorized network device.\nC. Employees who have certain credentials are using a hidden SSID: A hidden SSID only means the network name isn't broadcasted; it doesn't inherently imply a rogue AP or the bypassing of security controls.\nD. A valid access point is being jammed to limit availability: Jamming is a denial-of-service attack. The scenario describes employees successfully accessing blocked sites, indicating an alternative access method, not a denial of the primary one.",
    isMultipleChoice: false
  },
  {
    id: 111,
    question: "Which of the following is most likely associated with introducing vulnerabilities on a corporate network by the deployment of unapproved software?",
    options: [
      { label: 'A', text: 'Hacktivists' },
      { label: 'B', text: 'Script kiddies' },
      { label: 'C', text: 'Competitors' },
      { label: 'D', text: 'Shadow IT' }
    ],
    answer: ['D'],
    explanation: "Shadow IT refers to information technology projects, hardware, software, or services that are managed and utilized outside of, and without the knowledge of, an organization's formal IT department. The deployment of such unapproved software can introduce significant security vulnerabilities because it hasn't undergone the organization's standard security vetting, patching, and compliance processes.",
    incorrectOptionsExplanation: "A. Hacktivists: These individuals use hacking to promote a political or social agenda. They exploit vulnerabilities rather than being associated with the internal deployment of unapproved software.\nB. Script kiddies: These are less skilled individuals who use existing scripts to launch attacks. They exploit vulnerabilities rather than being the source of unapproved software.\nC. Competitors: While competitors might engage in corporate espionage, the act of internal employees deploying unapproved software is characteristic of Shadow IT, not a direct action by a competitor.",
    isMultipleChoice: false
  },
  {
    id: 112,
    question: "Two companies are in the process of merging. The companies need to decide how to standardize their information security programs. Which of the following would best align the security programs?",
    options: [
      { label: 'A', text: 'Shared deployment of CIS baselines' },
      { label: 'B', text: 'Joint cybersecurity best practices' },
      { label: 'C', text: 'Both companies following the same CSF' },
      { label: 'D', text: 'Assessment of controls in a vulnerability report' }
    ],
    answer: ['C'],
    explanation: "Adopting the same Cybersecurity Framework (CSF) provides a common language, standards, guidelines, and best practices to manage cybersecurity risk. This allows two merging companies to establish a unified approach to their information security programs, facilitating standardization and alignment from a strategic level down to operational activities. A framework like the NIST Cybersecurity Framework is designed to be adaptable and can help organizations communicate and manage risk.",
    incorrectOptionsExplanation: "A. Shared deployment of CIS baselines: CIS Baselines are specific, secure configuration guidelines. While important, they do not provide the overarching structure needed to align entire security programs.\nB. Joint cybersecurity best practices: While adopting best practices is beneficial, this option is too general. A CSF often incorporates best practices but provides a structured, comprehensive approach.\nD. Assessment of controls in a vulnerability report: A vulnerability report identifies specific weaknesses. It's an output of an assessment process, not a strategic tool for standardizing and aligning security programs.",
    isMultipleChoice: false
  },
  {
    id: 113,
    question: "Which of the following is best used to detect fraud by assigning employees to different roles?",
    options: [
      { label: 'A', text: 'Least privilege' },
      { label: 'B', text: 'Mandatory vacation' },
      { label: 'C', text: 'Separation of duties' },
      { label: 'D', text: 'Job rotation' }
    ],
    answer: ['D'],
    explanation: "Job rotation is best used to detect fraud by assigning employees to different roles. When an employee is moved from one role to another, the individual subsequently assigned to the former role, or the rotated employee in their new capacity, may uncover irregularities or fraudulent activities. This practice is a detective control, as the change in personnel provides an opportunity for fresh review and discovery.",
    incorrectOptionsExplanation: "A. Least privilege: This is a preventive control that limits users' access to only the information and resources necessary for their jobs.\nB. Mandatory vacation: This detective control requires employees to take time off, during which others perform their duties. However, 'assigning employees to different roles' more precisely describes job rotation.\nC. Separation of duties: This is primarily a preventive control that divides critical tasks among different individuals to reduce the risk of any single person perpetrating and concealing fraud.",
    isMultipleChoice: false
  },
  {
    id: 114,
    question: "A systems administrator wants to implement a backup solution. The solution needs to allow recovery of the entire system, including the operating system, in case of a disaster. Which of the following backup types should the administrator consider?",
    options: [
      { label: 'A', text: 'Incremental' },
      { label: 'B', text: 'Storage area network' },
      { label: 'C', text: 'Differential' },
      { label: 'D', text: 'Image' }
    ],
    answer: ['D'],
    explanation: "An image backup (often referred to as a full image backup or bare-metal backup) creates a complete copy of the entire system, which includes the operating system, applications, system settings, and all data. This type of backup is specifically designed to allow for a full system restoration, even to different hardware, making it ideal for disaster recovery scenarios.",
    incorrectOptionsExplanation: "A. Incremental: An incremental backup only captures data that has changed since the last backup. Restoring an entire system would require the last full backup and all subsequent incremental backups.\nB. Storage area network: A Storage Area Network (SAN) is a dedicated network for storage. It is an infrastructure where backups can be stored, but it is not a type of backup methodology itself.\nC. Differential: A differential backup captures data that has changed since the last full backup. It requires the last full backup for a complete restoration and does not inherently include the OS for a standalone full system recovery.",
    isMultipleChoice: false
  },
  {
    id: 115,
    question: "A spoofed identity was detected for a digital certificate. Which of the following are the type of unidentified key and the certificate that could be in use on the company domain?",
    options: [
      { label: 'A', text: 'Private key and root certificate' },
      { label: 'B', text: 'Public key and expired certificate' },
      { label: 'C', text: 'Private key and self-signed certificate' },
      { label: 'D', text: 'Public key and wildcard certificate' }
    ],
    answer: ['C'],
    explanation: "A spoofed identity for a digital certificate means the certificate falsely claims to represent an entity. This often occurs when a self-signed certificate is used by an attacker to impersonate a legitimate service. The attacker creates this certificate and signs it with their own private key. This private key is 'unidentified' from the perspective of the legitimate domain owner or trusted Certificate Authorities (CAs).",
    incorrectOptionsExplanation: "A. Private key and root certificate: While a rogue root certificate can enable spoofing, Option C is more direct if 'the certificate' refers to the end-entity certificate presenting the spoofed identity.\nB. Public key and expired certificate: An expired certificate primarily indicates a validity period issue, not necessarily a deliberately spoofed identity.\nD. Public key and wildcard certificate: A wildcard certificate covers multiple subdomains. The active key used by the spoofer is the private key, and 'self-signed' better describes the lack of trusted validation.",
    isMultipleChoice: false
  },
  {
    id: 116,
    question: "The Chief Information Security Officer wants to put security measures in place to protect PII. The organization needs to use its existing labeling and classification system to accomplish this goal. Which of the following would most likely be configured to meet the requirements?",
    options: [
      { label: 'A', text: 'Tokenization' },
      { label: 'B', text: 'S/MIME' },
      { label: 'C', text: 'DLP' },
      { label: 'D', text: 'MFA' }
    ],
    answer: ['C'],
    explanation: "Data Loss Prevention (DLP) solutions are specifically designed to enforce policies based on data classification and labeling. To protect Personally Identifiable Information (PII), an organization would leverage its existing labeling system to identify PII. DLP systems would then be configured with rules that dictate how data labeled as PII can be handled, stored, or transmitted.",
    incorrectOptionsExplanation: "A. Tokenization: This is a process of substituting sensitive data with a non-sensitive equivalent. It's a data de-identification technique, not a system configured based on existing labels to enforce protection measures.\nB. S/MIME: Secure/Multipurpose Internet Mail Extensions are used for encrypting and signing email messages. It's specific to email and doesn't leverage an organization's overall data classification system.\nD. MFA (Multi-Factor Authentication): This is an access control measure that verifies user identity. It doesn't directly use data labels or classifications to protect the PII content.",
    isMultipleChoice: false
  },
  {
    id: 117,
    question: "An analyst is reviewing an incident in which a user clicked on a link in a phishing email. Which of the following log sources would the analyst utilize to determine whether the connection was successful?",
    options: [
      { label: 'A', text: 'Network' },
      { label: 'B', text: 'System' },
      { label: 'C', text: 'Application' },
      { label: 'D', text: 'Authentication' }
    ],
    answer: ['A'],
    explanation: "To determine if a connection initiated by clicking a link in a phishing email was successful, Network logs are the most direct source. These logs, including firewall logs, proxy logs, and NetFlow data, record outbound connection attempts, whether they were permitted or denied by network security controls, and the status of these communications.",
    incorrectOptionsExplanation: "B. System logs: While system logs can show a process initiating a connection from the endpoint's perspective, they might not confirm successful transit through network perimeter defenses.\nC. Application logs: Application logs, such as browser history, would indicate that the URL was visited, but they don't typically provide details on the network-level success of the connection.\nD. Authentication logs: These logs are used to track user login and authentication attempts. They are not the primary source for determining the success of a network connection established by clicking a link.",
    isMultipleChoice: false
  },
  {
    id: 118,
    question: "The Chief Information Security Officer (CISO) asks a security analyst to install an OS update to a production VM that has a 99% uptime SLA. The CISO tells the analyst the installation must be done as quickly as possible. Which of the following courses of action should the security analyst take first?",
    options: [
      { label: 'A', text: 'Log in to the server and perform a health check on the VM.' },
      { label: 'B', text: 'Install the patch Immediately.' },
      { label: 'C', text: 'Confirm that the backup service is running.' },
      { label: 'D', text: 'Take a snapshot of the VM.' }
    ],
    answer: ['D'],
    explanation: "Taking a snapshot of the Virtual Machine (VM) is the most appropriate first step. Snapshots capture the state, data, and hardware configuration of a running VM at a specific moment. Before applying an OS update to a production VM with a high uptime SLA, creating a snapshot provides a quick and effective rollback mechanism if the update causes unforeseen issues. This minimizes potential downtime.",
    incorrectOptionsExplanation: "A. Log in to the server and perform a health check on the VM: While a health check is a good practice, it doesn't provide a rollback mechanism. If the update fails, a prior health check won't revert the system.\nB. Install the patch Immediately: This is reckless. Applying patches to a production system with a high uptime SLA without any preparatory safety measures significantly increases risk.\nC. Confirm that the backup service is running: While ensuring backups are operational is crucial, restoring from a full backup is typically slower than reverting from a snapshot. For immediate rollback, a snapshot is more efficient.",
    isMultipleChoice: false
  },
  {
    id: 119,
    question: "Since a recent upgrade to a WLAN infrastructure, several mobile users have been unable to access the internet from the lobby. The networking team performs a heat map survey of the building and finds several WAPs in the area. The WAPs are using similar frequencies with high power settings. Which of the following installation considerations should the security team evaluate next?",
    options: [
      { label: 'A', text: 'Channel overlap' },
      { label: 'B', text: 'Encryption type' },
      { label: 'C', text: 'New WLAN deployment' },
      { label: 'D', text: 'WAP placement' }
    ],
    answer: ['A'],
    explanation: "The inability of mobile users to access the internet, coupled with the finding of multiple Wireless Access Points (WAPs) operating on similar frequencies with high power settings, strongly indicates an issue with channel overlap. Channel overlap, also known as Co-Channel Interference (CCI) or Adjacent Channel Interference (ACI), occurs when WAPs in close proximity use the same or nearby radio frequencies, degrading signal quality.",
    incorrectOptionsExplanation: "B. Encryption type: While incorrect encryption settings can prevent network access, the problem statement's details about 'similar frequencies' and 'high power' point directly to a radio frequency interference issue.\nC. New WLAN deployment: The scenario describes troubleshooting an existing, upgraded WLAN, not the process of a brand new deployment.\nD. WAP placement: While WAP placement is a crucial factor, 'channel overlap' is the specific radio frequency phenomenon that directly arises from the described conditions and causes the access problem.",
    isMultipleChoice: false
  },
  {
    id: 120,
    question: "An employee in the accounting department receives an email containing a demand for payment for services performed by a vendor. However, the vendor is not in the vendor management database. Which of the following in this scenario an example of?",
    options: [
      { label: 'A', text: 'Pretexting' },
      { label: 'B', text: 'Impersonation' },
      { label: 'C', text: 'Ransomware' },
      { label: 'D', text: 'Invoice scam' }
    ],
    answer: ['D'],
    explanation: "The scenario describes an 'invoice scam,' also known as a false invoice scheme. This is a form of financial fraud where an attacker sends a fraudulent invoice for goods or services not actually rendered, or from a non-existent or unapproved vendor, with the aim of tricking the recipient into making a payment. The fact that the vendor is not in the vendor management database is a key indicator of this type of scam.",
    incorrectOptionsExplanation: "A. Pretexting: Pretexting is the creation of a fabricated scenario. While an invoice scam uses a pretext, 'invoice scam' is the more specific description of the overall fraudulent activity.\nB. Impersonation: Impersonation involves an attacker pretending to be a legitimate entity. While the sender is impersonating a vendor, 'invoice scam' more comprehensively describes the entire fraudulent event.\nC. Ransomware: Ransomware is a type of malicious software that encrypts a victim's files and demands payment for their decryption. This scenario involves a fraudulent payment request, not file encryption.",
    isMultipleChoice: false
  },
  {
    id: 121,
    question: "While considering the organization's cloud-adoption strategy, the Chief Information Security Officer sets a goal to outsource patching of firmware, operating systems, and applications to the chosen cloud vendor. Which of the following best meets this goal?",
    options: [
      { label: 'A', text: 'Community cloud' },
      { label: 'B', text: 'PaaS' },
      { label: 'C', text: 'Containerization' },
      { label: 'D', text: 'Private cloud' },
      { label: 'E', text: 'SaaS' },
      { label: 'F', text: 'IaaS' }
    ],
    answer: ['E'],
    explanation: "Software as a Service (SaaS) is the cloud service model that most comprehensively outsources patching responsibilities to the cloud vendor. In a SaaS model, the provider manages the underlying infrastructure (including firmware), the operating systems, and the application software itself. The customer uses the application, but the provider is responsible for all maintenance, including patching.",
    incorrectOptionsExplanation: "A. Community cloud: This is a deployment model, not a service model. Patching responsibilities depend on whether IaaS, PaaS, or SaaS is being utilized.\nB. PaaS (Platform as a Service): The vendor manages the OS and infrastructure, but the customer is typically responsible for patching the applications they deploy onto the platform.\nC. Containerization: Responsibility for patching the host OS and underlying firmware still depends on the service model (e.g., IaaS, PaaS) hosting the containers.\nD. Private cloud: This is a deployment model. The extent of outsourced patching depends on the service model implemented.\nF. IaaS (Infrastructure as a Service): The vendor manages the physical infrastructure and its firmware, but the customer is responsible for patching the guest operating systems and any applications they install.",
    isMultipleChoice: false
  },
  {
    id: 122,
    question: "A security analyst is assessing several company firewalls. Which of the following tools would the analyst most likely use to generate custom packets to use during the assessment?",
    options: [
      { label: 'A', text: 'hping' },
      { label: 'B', text: 'Wireshark' },
      { label: 'C', text: 'PowerShell' },
      { label: 'D', text: 'netstat' }
    ],
    answer: ['A'],
    explanation: "hping (often hping2 or hping3) is a command-line oriented TCP/IP packet assembler/analyzer. It's widely used for security auditing and firewall testing because it can send custom ICMP, UDP, TCP, and raw IP packets, allowing an analyst to observe how a firewall or host responds. This capability to craft and send specific packets is crucial for testing firewall rulesets.",
    incorrectOptionsExplanation: "B. Wireshark: Wireshark is primarily a network protocol analyzer used to capture and inspect packets, not to generate them.\nC. PowerShell: While PowerShell can be used to construct and send packets, it's a general-purpose tool. For dedicated custom packet generation and firewall probing, hping is a more specialized tool.\nD. netstat: The netstat command is a utility that displays network connections and statistics. It does not generate packets.",
    isMultipleChoice: false
  }
];
