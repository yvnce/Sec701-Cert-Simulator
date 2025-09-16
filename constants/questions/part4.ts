import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 171,
    question: "In order to strengthen a password and prevent a hacker from cracking it, a random string of 36 characters was added to the password. Which of the following best describes this technique?",
    options: [
      { label: 'A', text: 'Key stretching' },
      { label: 'B', text: 'Tokenization' },
      { label: 'C', text: 'Data masking' },
      { label: 'D', text: 'Salting' }
    ],
    answer: ['D'],
    explanation: "Salting is a cryptographic technique that involves adding a unique, random string of characters (the \"salt\") to a password before it is hashed and stored. This process ensures that even if two users have the same password, their stored hash values will be different due to the unique salt. The primary purpose of salting is to defend against pre-computed hash table attacks (e.g., rainbow tables) and dictionary attacks, thereby strengthening the password against cracking attempts. The addition of a \"random string of 36 characters\" directly describes the creation and use of a salt.",
    incorrectOptionsExplanation: "A. Key stretching: While often used in conjunction with salting, key stretching refers to processes that intentionally make the key derivation function slow, increasing the computational effort required to crack a password (e.g., by repeated hashing). The question focuses on adding a random string, not the computational cost of hashing.\nB. Tokenization: This is a security process that replaces sensitive data elements with non-sensitive equivalents called \"tokens.\" It's used to protect data like credit card numbers, not directly to strengthen passwords by adding a random string.\nC. Data masking: This technique involves creating a structurally similar but inauthentic version of data by obscuring original sensitive information. It's typically used for testing or development, not for strengthening individual passwords against cracking.",
    isMultipleChoice: false
  },
  {
    id: 172,
    question: "A security administrator recently reset local passwords and the following values were recorded in the system:\n```\nHost         Account   MD5 password values\nACCT-PC-1    admin     e1bdf5ed1d7ad7ede4e3809bd35644b0\nHR-PC-1      admin     d706ab8258f67c131ebc57a628184\nIT-PC-2      admin     faddb9cbb321474fbf6cb059736f0b3d\nFILE-SRV-1   admin     f054bbd2f5ebab9cb5571000b2c60c02\nDB-SRV-1     admin     86382732ba7cf2d55b169792725da78\n```\nWhich of the following is the security administrator most likely protecting against?",
    options: [
      { label: 'A', text: 'Account sharing' },
      { label: 'B', text: 'Weak password complexity' },
      { label: 'C', text: 'Pass-the-hash attacks' },
      { label: 'D', text: 'Password compromise' }
    ],
    answer: ['C'],
    explanation: "Resetting local passwords is a fundamental security measure taken when existing passwords are, or are suspected to be, compromised. This action aims to invalidate the compromised credentials and prevent unauthorized access. While resetting passwords also changes their corresponding hashes (which would indeed thwart ongoing pass-the-hash attacks using old hashes), the broader and more encompassing reason is to address general password compromise, which could occur through various means (phishing, malware, weak passwords, etc.), not just hash theft for PtH. Recording the new MD5 hash values, though MD5 is a weak hashing algorithm by modern standards, is likely for auditing purposes or to establish a new baseline after the reset, confirming the credentials have been changed.",
    incorrectOptionsExplanation: "A. Account sharing: While resetting passwords might temporarily disrupt unauthorized account sharing, it's primarily a policy and user behavior issue. Recording hashes does not directly prevent users from sharing the new credentials.\nB. Weak password complexity: Resetting passwords is an opportunity to enforce complexity, but the act of resetting and recording hashes themselves doesn't inherently protect against weak complexity. This is addressed by password policies.\nC. Pass-the-hash attacks: Resetting passwords does help protect against pass-the- hash (PtH) attacks by invalidating old hashes. However, PtH is a specific type of password compromise. The act of resetting passwords is a general protection against any form of password compromise, making option D more encompassing and fundamental. If the primary concern was solely PtH, the actions might be more targeted at how hashes are handled and transmitted, not just a reset. The reset addresses the compromised credential regardless of how it's exploited.",
    isMultipleChoice: false
  },
  {
    id: 173,
    question: "The security operations center is researching an event concerning a suspicious IP address. A security analyst looks at the following event logs and discovers that a significant portion of the user accounts have experienced failed log-in attempts when authenticating from the same IP address:\n```\n184.168.131.241 - userA - failed authentication\n184.168.131.241 - userB - failed authentication\n184.168.131.241 - userC - failed authentication\n```\nWhich of the following most likely describes the attack that took place?",
    options: [
      { label: 'A', text: 'Spraying' },
      { label: 'B', text: 'Brute-force' },
      { label: 'C', text: 'Dictionary' },
      { label: 'D', text: 'Rainbow table' }
    ],
    answer: ['A'],
    explanation: "The log shows multiple failed login attempts from a single IP address (184.168.131.241) across several distinct user accounts (userA, userB, userC). This pattern is characteristic of a password spraying attack. In such an attack, the malicious actor attempts to access a large number of accounts using a few commonly used passwords. This method is chosen to avoid account lockouts that might occur if many passwords were tried against a single account (as in a traditional brute-force attack) and to maximize the chances of finding an account with a weak password.",
    incorrectOptionsExplanation: "B. Brute-force: While password spraying is a type of brute-force attack, 'brute-force' is a broader term. The specific pattern of targeting multiple accounts with a limited number of password attempts per account from a single source is more precisely described as spraying.\nC. Dictionary: A dictionary attack is a technique where the attacker uses a list of common words or passwords. While a spraying attack might use passwords from a dictionary, 'dictionary attack' describes the source of the passwords rather than the specific methodology of targeting multiple accounts as shown in the logs.\nD. Rainbow table: A rainbow table attack is used for reversing cryptographic hash functions, typically to crack password hashes that have been obtained offline from a compromised system. It's not used for live authentication attempts against a system as depicted in the logs.",
    isMultipleChoice: false
  },
  {
    id: 174,
    question: "A security analyst finds a rogue device during a monthly audit of current endpoint assets that are connected to the network. The corporate network utilizes 802.1X for access control. To be allowed on the network, a device must have a Known hardware address, and a valid user name and password must be entered in a captive portal. The following is the audit report:\n```\nIP address       MAC                   Host    Account\n10.18.04.38      EB-AC-11-B2-Q2-F3     PC-CA   user3\n10.18.04.22      EB-AC-11-B2-Q2-F3     WIN10   user3\n```\nWhich of the following is the most likely way a rogue device was allowed to connect?",
    options: [
      { label: 'A', text: 'A user performed a MAC cloning attack with a personal device.' },
      { label: 'B', text: 'A DHCP failure caused an incorrect IP address to be distributed' },
      { label: 'C', text: 'An administrator bypassed the security controls for testing.' },
      { label: 'D', text: 'DNS hijacking let an attacker intercept the captive portal traffic.' }
    ],
    answer: ['A'],
    explanation: "The audit report reveals a critical piece of information: the MAC address EB-AC-11-B2-Q2-F3 is associated with two different IP addresses and hostnames (PC-CA and WIN10), both linked to user3. This duplication strongly indicates a MAC cloning (or spoofing) attack. In such an attack, a user modifies the MAC address of their unauthorized (personal) device to match that of an authorized device. This action allows the rogue device to bypass the network's requirement for a 'Known hardware address.' Subsequently, the user would authenticate through the captive portal using their valid credentials, granting the rogue device network access.",
    incorrectOptionsExplanation: "B. A DHCP failure caused an incorrect IP address to be distributed: While DHCP issues can cause IP address problems, they don't directly explain how a device with an initially unknown MAC address would bypass MAC-based filtering. The core issue is unauthorized access, not IP assignment.\nC. An administrator bypassed the security controls for testing: This is a general possibility but is not directly supported by the specific evidence in the audit log. The duplicate MAC address points more directly to MAC cloning than an undocumented administrative action.\nD. DNS hijacking let an attacker intercept the captive portal traffic: DNS hijacking could compromise user credentials but wouldn't by itself allow a rogue device to pass the initial network access control based on a 'Known hardware address.' The MAC address bypass must occur first.",
    isMultipleChoice: false
  },
  {
    id: 175,
    question: "Which of the following best describe a penetration test that resembles an actual external attack?",
    options: [
      { label: 'A', text: 'Known environment' },
      { label: 'B', text: 'Partially known environment' },
      { label: 'C', text: 'Bug bounty' },
      { label: 'D', text: 'Unknown environment' }
    ],
    answer: ['D'],
    explanation: "An unknown environment penetration test, often referred to as a black-box test, best simulates an actual external attack. In this scenario, the penetration tester has little to no prior knowledge of the target system's internal architecture, source code, or defenses, much like a real external attacker would. The tester attempts to discover vulnerabilities from an external perspective using publicly available information and reconnaissance techniques. This approach aims to identify what an unprivileged outsider could uncover and exploit.",
    incorrectOptionsExplanation: "A. Known environment: This describes a white-box test where testers have full knowledge of the system. This is unlike a typical external attacker who lacks such internal insights.\nB. Partially known environment: This refers to a gray-box test where testers have some, but not complete, information. While some external attackers might acquire partial knowledge, an unknown environment is more representative of an initial external attack.\nC. Bug bounty: A bug bounty is a program that rewards individuals for finding and reporting vulnerabilities. While it involves external testing, it's a model for security testing, not a description of the knowledge level given to the tester like the other options.",
    isMultipleChoice: false
  },
  {
    id: 176,
    question: "A company is implementing a vendor's security tool in the cloud. The security director does not want to manage users and passwords specific to this tool but would rather utilize the company's standard user directory. Which of the following should the company implement?",
    options: [
      { label: 'A', text: '802.1X' },
      { label: 'B', text: 'SAML' },
      { label: 'C', text: 'RADIUS' },
      { label: 'D', text: 'CHAP' }
    ],
    answer: ['B'],
    explanation: "Security Assertion Markup Language (SAML) is the most appropriate solution. SAML is an XML-based open standard for exchanging authentication and authorization data between an identity provider (IdP) – in this case, the company's standard user directory – and a service provider (SP) – the vendor's cloud security tool. This allows users to log in once using their company credentials and gain access to multiple applications, including the new cloud tool, without needing separate passwords for each service. This directly addresses the security director's requirement to utilize the company's standard user directory and avoid managing tool-specific credentials.",
    incorrectOptionsExplanation: "A. 802.1X: This is a network access control (NAC) standard primarily used for port-based authentication on wired and wireless networks to grant devices access to the network itself, not typically for authenticating users to cloud applications.\nC. RADIUS: While RADIUS (Remote Authentication Dial-In User Service) provides centralized authentication, authorization, and accounting (AAA), it is more commonly used for network access scenarios (e.g., VPNs, wireless access points) rather than web-based single sign-on for cloud applications.\nD. CHAP: (Challenge-Handshake Authentication Protocol) is an authentication scheme used by Point-to-Point Protocol (PPP) servers to validate the identity of remote clients. It's not designed for integrating cloud application authentication with a central user directory.",
    isMultipleChoice: false
  },
  {
    id: 177,
    question: "An employee fell for a phishing scam, which allowed an attacker to gain access to a company PC. The attacker scraped the PC's memory to find other credentials. Without cracking these credentials, the attacker used them to move laterally through the corporate network. Which of the following describes this type of attack?",
    options: [
      { label: 'A', text: 'Privilege escalation' },
      { label: 'B', text: 'Buffer overflow' },
      { label: 'C', text: 'SQL injection' },
      { label: 'D', text: 'Pass-the-hash' }
    ],
    answer: ['D'],
    explanation: "A Pass-the-Hash (PtH) attack is a technique where an attacker captures a password hash (as opposed to the plaintext password) from a system, often by scraping it from memory, and then uses this hash to authenticate to other systems or services on the network. The key aspect highlighted in the question, \"Without cracking these credentials, the attacker used them to move laterally,\" directly aligns with the modus operandi of a PtH attack. The attacker bypasses the need for the actual password, leveraging the stolen hash for authentication.",
    incorrectOptionsExplanation: "A. Privilege escalation: This refers to an attacker gaining higher levels of permissions than initially granted. While using stolen credentials via PtH could lead to privilege escalation (if the hash belongs to a more privileged account), PtH itself is the method of using the credentials, not inherently the act of escalating privileges. The question focuses on how the credentials were used.\nB. Buffer overflow: This is a vulnerability where a program, while writing data to a buffer, overruns the buffer's boundary and overwrites adjacent memory locations.\nC. SQL injection: This is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g., to dump database contents). This is unrelated to the described memory scraping and lateral movement using Windows credentials.",
    isMultipleChoice: false
  },
  {
    id: 178,
    question: "A company wants to reduce the time and expense associated with code deployment. Which of the following technologies should the company utilize?",
    options: [
      { label: 'A', text: 'Serverless architecture' },
      { label: 'B', text: 'Thin clients' },
      { label: 'C', text: 'Private cloud' },
      { label: 'D', text: 'Virtual machines' }
    ],
    answer: ['A'],
    explanation: "Serverless architecture allows developers to build and run applications without managing the underlying infrastructure. This model significantly reduces the operational overhead associated with provisioning, scaling, patching, and managing servers. Consequently, code can be deployed more rapidly, and costs are often optimized as payment is typically based on actual usage rather than pre-provisioned capacity. This directly addresses the company's goal of reducing deployment time and expense.",
    incorrectOptionsExplanation: "B. Thin clients: Thin clients are endpoint devices that depend on a central server for computation. They primarily impact user desktop management and cost, not the backend code deployment process itself.\nC. Private cloud: While a private cloud offers more control and potentially some deployment efficiencies over traditional on-premises, it still requires the company to manage the cloud infrastructure, which involves time and expense that serverless aims to abstract away.\nD. Virtual machines: Deploying code to virtual machines necessitates managing the operating system, software dependencies, and scaling, which can be time-consuming and add to operational costs, unlike serverless where the provider handles these aspects.",
    isMultipleChoice: false
  },
  {
    id: 179,
    question: "A security team created a document that details the order in which critical systems should be brought back online after a major outage. Which of the following documents did the team create?",
    options: [
      { label: 'A', text: 'Communication plan' },
      { label: 'B', text: 'Incident response plan' },
      { label: 'C', text: 'Data retention policy' },
      { label: 'D', text: 'Disaster recovery plan' }
    ],
    answer: ['D'],
    explanation: "A Disaster Recovery Plan (DRP) outlines the procedures for restoring an organization's IT infrastructure and operations in the event of a significant disruption. A critical component of a DRP is the order of restoration for critical systems, ensuring that the most essential services are brought back online first to minimize business impact. This aligns precisely with the document described in the question.",
    incorrectOptionsExplanation: "A. Communication plan: This plan focuses on how, what, and with whom to communicate during and after an incident, not the technical sequence of system recovery. According to NIST SP 800-34 Rev. 1, communication is a part of the overall contingency planning, but the specific document for system restoration order is the DRP.\nB. Incident response plan: An Incident Response Plan (IRP) provides procedures for responding to and managing security incidents like cyberattacks or data breaches. While recovery is a phase in incident response, the detailed sequence of bringing all critical systems back online after a major outage (disaster) is the core of a DRP, as per NIST SP 800-61 Rev. 2.\nC. Data retention policy: This policy dictates how long data must be kept and how it should be disposed of. It does not address the restoration sequence of IT systems after an outage.",
    isMultipleChoice: false
  },
  {
    id: 180,
    question: "Which of the following best represents an application that does not have an on-premises requirement and is accessible from anywhere?",
    options: [
      { label: 'A', text: 'PaaS' },
      { label: 'B', text: 'Hybrid cloud' },
      { label: 'C', text: 'Private cloud' },
      { label: 'D', text: 'IaaS' },
      { label: 'E', text: 'SaaS' }
    ],
    answer: ['E'],
    explanation: "Software as a Service (SaaS) best represents an application that does not have an on-premises requirement for the user and is accessible from anywhere. In the SaaS model, applications are hosted by a third-party provider and made available to customers over the Internet. Users typically access these applications through a web browser or a dedicated client application, without needing to install or manage the software on their own local servers or devices. This model inherently supports accessibility from any location with an internet connection and removes the burden of on-premises infrastructure for the application itself.",
    incorrectOptionsExplanation: "A. PaaS (Platform as a Service): PaaS provides a platform for developing, deploying, and managing applications. It's not the end-user application itself but the environment to build and run it.\nB. Hybrid cloud: A hybrid cloud is a composition of public and private clouds, and often includes on-premises infrastructure, which contradicts the 'does not have an on-premises requirement' condition.\nC. Private cloud: A private cloud is operated exclusively for a single organization. While it can be hosted off-premises, it may also be on-premises, and its defining characteristic is single-tenancy, not necessarily the lack of any on-premises requirement for all applications or universal accessibility in the public sense.\nD. IaaS (Infrastructure as a Service): IaaS offers fundamental computing resources like virtual machines and storage. The user still needs to deploy and manage the operating systems and applications on this infrastructure. It is not the ready-to-use application itself.",
    isMultipleChoice: false
  },
  {
    id: 181,
    question: "A company is utilizing an offshore team to help support the finance department. The company wants to keep the data secure by keeping it on a company device but does not want to provide equipment to the offshore team. Which of the following should the company implement to meet this requirement?",
    options: [
      { label: 'A', text: 'VDI' },
      { label: 'B', text: 'MDM' },
      { label: 'C', text: 'VPN' },
      { label: 'D', text: 'VPC' }
    ],
    answer: ['A'],
    explanation: "Virtual Desktop Infrastructure (VDI) is the most appropriate solution. VDI hosts desktop environments on a central server, and users access them remotely. This ensures that all data and applications remain on the company's servers (the 'company device' in a logical sense), not on the offshore team's personal equipment. The offshore team can use their own devices to connect to these virtual desktops, satisfying the requirement of not providing them with company hardware while maintaining data security and centralization.",
    incorrectOptionsExplanation: "B. MDM (Mobile Device Management): MDM is used to manage and secure mobile devices. While it can enforce security policies on devices, it doesn't inherently provide a remote desktop environment or ensure that company data for finance applications remains solely on company-controlled servers when accessed from a desktop/laptop.\nC. VPN (Virtual Private Network): A VPN provides a secure encrypted tunnel to the company network. However, it allows the offshore team's devices to directly access network resources, and data could still be downloaded or stored on their local devices unless other controls are stringently applied.\nD. VPC (Virtual Private Cloud): A VPC is a private network segment within a public cloud. While a VDI solution might be deployed within a VPC, the VPC itself is an infrastructure component and not the end-user technology that directly addresses the secure remote access and data centralization requirement for the finance team.",
    isMultipleChoice: false
  },
  {
    id: 182,
    question: "An administrator is investigating an incident and discovers several users' computers were infected with malware after viewing files that were shared with them. The administrator discovers no degraded performance in the infected machines and an examination of the log files does not show excessive failed logins. Which of the following attacks is most likely the cause of the malware?",
    options: [
      { label: 'A', text: 'Malicious flash drive' },
      { label: 'B', text: 'Remote access Trojan' },
      { label: 'C', text: 'Brute-forced password' },
      { label: 'D', text: 'Cryptojacking' }
    ],
    answer: ['B'],
    explanation: "A Remote Access Trojan (RAT) is a type of malware that allows an attacker to gain unauthorized, covert control over an infected computer. The scenario indicates malware infection occurred via shared files, and importantly, there was no degraded performance on the infected machines. RATs are often designed for stealth to maintain persistent access without alerting the user, which aligns with the lack of observable performance issues. The shared files likely served as the delivery mechanism for the RAT, which then facilitates the ongoing attack.",
    incorrectOptionsExplanation: "A. Malicious flash drive: This describes a delivery vector for malware, not the type of attack or malware behavior itself. While shared files could be on a flash drive, this option doesn't explain the lack of performance degradation, a key detail that points to the nature of the malware.\nC. Brute-forced password: This attack method is characterized by numerous login attempts. The scenario explicitly states that 'an examination of the log files does not show excessive failed logins,' directly contradicting this option.\nD. Cryptojacking: This type of attack involves illicitly using a victim's computing resources to mine cryptocurrency. Cryptojacking typically leads to significant performance degradation due to high CPU/GPU usage, which contradicts the 'no degraded performance' observation.",
    isMultipleChoice: false
  },
  {
    id: 183,
    question: "Which of the following is an algorithm performed to verify that data has not been modified?",
    options: [
      { label: 'A', text: 'Hash' },
      { label: 'B', text: 'Code check' },
      { label: 'C', text: 'Encryption' },
      { label: 'D', text: 'Checksum' }
    ],
    answer: ['A'],
    explanation: "A hash algorithm is performed to verify that data has not been modified by producing a fixed-size string of bits (known as a hash value or message digest) from an input. If the original data is changed in any way, the resulting hash value will also change (with very high probability). By comparing a newly computed hash of the data with a previously stored hash of the original data, one can verify its integrity. Cryptographic hash functions are specifically designed to be sensitive to any change in the input, making them suitable for detecting both accidental and intentional modifications.",
    incorrectOptionsExplanation: "B. Code check: This term typically refers to the review or analysis of software source code for errors or vulnerabilities, not a general algorithm for verifying the integrity of arbitrary data.\nC. Encryption: Encryption is primarily a process for ensuring confidentiality by converting data into an unreadable format. While some encryption modes (authenticated encryption) also provide integrity, encryption itself is not the algorithm performed to verify modification; that verification is typically done using an associated integrity mechanism like a MAC, which often involves a hash.\nD. Checksum: While checksums are also used to detect data modifications, the term often refers to simpler algorithms (e.g., CRC) primarily designed to detect accidental errors in data transmission or storage. Cryptographic hash functions, implied by 'Hash' in security contexts, offer stronger guarantees against intentional modifications.",
    isMultipleChoice: false
  },
  {
    id: 184,
    question: "An employee recently resigned from a company. The employee was responsible for managing and supporting weekly batch jobs over the past five years. A few weeks after the employee resigned, one of the batch jobs failed and caused a major disruption. Which of the following would work best to prevent this type of incident from reoccurring?",
    options: [
      { label: 'A', text: 'Job rotation' },
      { label: 'B', text: 'Retention' },
      { label: 'C', text: 'Outsourcing' },
      { label: 'D', text: 'Separation of duties' }
    ],
    answer: ['A'],
    explanation: "Job rotation involves periodically moving employees between different jobs or tasks within an organization. This practice is highly effective in preventing disruptions caused by the departure of an employee with specialized knowledge, as it ensures that multiple individuals are cross-trained and familiar with critical processes. By distributing knowledge and skills, job rotation mitigates the risk of a single point of failure when an employee resigns, as others can seamlessly take over their responsibilities, such as managing weekly batch jobs. This directly addresses the scenario where a job failed due to the departure of the sole knowledgeable employee.",
    incorrectOptionsExplanation: "B. Retention: While employee retention is valuable, it does not guarantee knowledge transfer. If a retained employee still holds exclusive knowledge, their eventual departure or unavailability would still pose the same risk. The question concerns prevention after resignation has occurred.\nC. Outsourcing: Outsourcing transfers responsibility to a third party. While it might address the specific batch job issue, it's a broader strategic decision and not the most direct internal mechanism to prevent knowledge loss impact from any employee departure across various roles.\nD. Separation of duties: This is a security principle primarily aimed at preventing fraud, errors, or malicious acts by ensuring no single individual has excessive control over a critical process. Its core purpose is not knowledge transfer for operational continuity following an employee's departure.",
    isMultipleChoice: false
  },
  {
    id: 185,
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
    explanation: "Multi-Factor Authentication (MFA) and patch management are security measures that primarily serve as Technical controls because they are implemented using hardware and software systems. Their main function is to stop security incidents before they happen, making them Preventative in nature. MFA prevents unauthorized access by requiring multiple forms of verification, while patch management remediates known vulnerabilities to prevent their exploitation.",
    incorrectOptionsExplanation: "A. Physical: These controls pertain to physical access (e.g., locks, guards). MFA and patch management are logical/software-based, not primarily physical.\nB. Managerial: These controls focus on security governance (e.g., policies, risk assessment). While patch management has managerial aspects (e.g., policy), the implementation of both MFA and patching is primarily technical, and 'Technical' better describes both overall.\nC. Detective: These controls identify incidents after they have occurred or are in progress (e.g., IDS, log review). MFA and patching are primarily aimed at preventing incidents, not just detecting them.\nD. Administrator: This refers to a user role or a level of privilege, not a type or category of security control.",
    isMultipleChoice: true
  },
  {
    id: 186,
    question: "An organization implemented cloud-managed IP cameras to monitor building entry points and sensitive areas. The service provider enables direct TCP/IP connection to stream live video footage from each camera. The organization wants to ensure this stream is encrypted and authenticated. Which of the following protocols should be implemented to best meet this objective?",
    options: [
      { label: 'A', text: 'SSH' },
      { label: 'B', text: 'SRTP' },
      { label: 'C', text: 'S/MIME' },
      { label: 'D', text: 'PPTP' }
    ],
    answer: ['B'],
    explanation: "The primary objective is to encrypt and authenticate a live video stream from IP cameras over a TCP/IP connection. SRTP (Secure Real-time Transport Protocol) is specifically designed to provide encryption, message authentication, integrity, and replay protection for Real-time Transport Protocol (RTP) traffic, which is commonly used for video and audio streaming. RTP, and therefore SRTP, can be transported over TCP (as per RFC 4571), fitting the 'direct TCP/IP connection' requirement. SRTP is tailored for real-time media, offering security with considerations for performance and low latency, making it the most precise and appropriate protocol among the options for securing the video footage itself.",
    incorrectOptionsExplanation: "A. SSH (Secure Shell): While SSH can create secure tunnels for TCP connections and encrypt data, it's a general-purpose protocol. It's not specifically designed or optimized for securing real-time media streams like SRTP is. SRTP provides security services directly at the RTP layer.\nC. S/MIME (Secure/Multipurpose Internet Mail Extensions): This protocol is used for securing email messages through encryption and digital signatures. It is not relevant for encrypting live video streams.\nD. PPTP (Point-to-Point Tunneling Protocol): PPTP is an older VPN protocol with known significant security vulnerabilities. It is generally not recommended for securing network traffic, especially for new implementations.",
    isMultipleChoice: false
  },
  {
    id: 187,
    question: "A security analyst discovers that a large number of employee credentials had been stolen and were being sold on the dark web. The analyst investigates and discovers that some hourly employee credentials were compromised, but salaried employee credentials were not affected. Most employees clocked in and out while they were inside the building using one of the kiosks connected to the network. However, some clocked out after leaving to go home. Only those who clocked in and out while inside the building had credentials stolen. Hourly employees are required to use a website called acmetimekeeping.com. Which of the following is the most likely reason for this compromise?",
    options: [
      { label: 'A', text: 'A brute-force attack was used against the time-keeping website to scan for common passwords.' },
      { label: 'B', text: 'A malicious actor compromised the time-keeping website with malicious code using an unpatched vulnerability on the site, stealing the credentials.' },
      { label: 'C', text: 'The internal DNS servers were poisoned and were redirecting acmetimekeeping.com to a malicious domain that intercepted the credentials.' },
      { label: 'D', text: 'ARP poisoning affected the machines in the building and caused the kiosks to send a copy of all the submitted credentials to a machine.' }
    ],
    answer: ['C'],
    explanation: "Internal DNS poisoning is the most likely reason because it would affect only devices configured to use the compromised internal DNS servers – in this case, the kiosks within the building. When these kiosks attempted to reach acmetimekeeping.com, the poisoned internal DNS server would redirect them to a malicious site designed to capture credentials. Employees accessing the site from home would use different (external) DNS servers and thus would not be redirected, explaining why they were unaffected. This aligns with the principle of targeting specific network infrastructure components.",
    incorrectOptionsExplanation: "A. A brute-force attack was used against the time-keeping website to scan for common passwords. This would impact all users of acmetimekeeping.com, including those accessing it from home, not just those using internal kiosks. This contradicts the scenario's details.\nB. A malicious actor compromised the time-keeping website with malicious code. Similar to a brute-force attack, if the website itself were compromised, it would affect all users accessing it, regardless of their location.\nD. ARP poisoning affected the machines in the building and caused the kiosks to send a copy of all the submitted credentials to a machine. ARP poisoning is a Layer 2 attack typically limited to a single local area network (LAN) segment. The scenario implies different network segments, making a widespread, targeted ARP poisoning attack less probable than a centralized internal DNS compromise.",
    isMultipleChoice: false
  },
  {
    id: 188,
    question: "A business uses Wi-Fi with content filtering enabled. An employee noticed a coworker accessed a blocked site from a work computer and reported the issue. While investigating the issue, a security administrator found another device providing internet access to certain employees. Which of the following best describes the security risk?",
    options: [
      { label: 'A', text: 'The host-based security agent is not running on all computers.' },
      { label: 'B', text: 'A rogue access point is allowing users to bypass controls.' },
      { label: 'C', text: 'Employees who have certain credentials are using a hidden SSID.' },
      { label: 'D', text: 'A valid access point is being jammed to limit availability.' }
    ],
    answer: ['B'],
    explanation: "A rogue access point (AP) is a wireless access point that has been installed on a secured network without explicit authorization from a local network administrator. In this scenario, 'another device providing internet access' precisely describes an unauthorized AP that allows employees to bypass the company's Wi-Fi with content filtering. This bypass of security controls is a primary risk associated with rogue APs.",
    incorrectOptionsExplanation: "A. The host-based security agent is not running on all computers: While a missing security agent is a vulnerability, the core issue described is the bypass of network-level content filtering via an unauthorized network device, not necessarily an endpoint agent failure.\nC. Employees who have certain credentials are using a hidden SSID: A hidden SSID only means the network name isn't broadcasted; it doesn't inherently imply a rogue AP or the bypassing of security controls if the AP itself is authorized.\nD. A valid access point is being jammed to limit availability: Jamming is a denial-of-service attack that disrupts wireless communication. The scenario describes employees successfully accessing blocked sites, indicating an alternative access method.",
    isMultipleChoice: false
  },
  {
    id: 189,
    question: "Which of the following is most likely associated with introducing vulnerabilities on a corporate network by the deployment of unapproved software?",
    options: [
      { label: 'A', text: 'Hacktivists' },
      { label: 'B', text: 'Script kiddies' },
      { label: 'C', text: 'Competitors' },
      { label: 'D', text: 'Shadow IT' }
    ],
    answer: ['D'],
    explanation: "Shadow IT refers to information technology (IT) projects, hardware, software, or services that are managed and utilized outside of, and without the knowledge of, an organization's formal IT department. The deployment of such unapproved software can introduce significant security vulnerabilities because it hasn't undergone the organization's standard security vetting, patching, and compliance processes. This directly aligns with the scenario of introducing vulnerabilities through unapproved software.",
    incorrectOptionsExplanation: "A. Hacktivists: These individuals or groups use hacking to promote a political or social agenda. While they might exploit vulnerabilities, they are not primarily associated with the internal deployment of unapproved software that creates those vulnerabilities.\nB. Script kiddies: These are less skilled individuals who use existing scripts or tools to launch attacks. Like hacktivists, they exploit vulnerabilities rather than being the source of unapproved software within an organization.\nC. Competitors: While competitors might engage in corporate espionage, the act of internal employees deploying unapproved software is characteristic of Shadow IT, not typically a direct action by a competitor to introduce vulnerabilities in this manner.",
    isMultipleChoice: false
  },
  {
    id: 190,
    question: "Two companies are in the process of merging. The companies need to decide how to standardize their information security programs. Which of the following would best align the security programs?",
    options: [
      { label: 'A', text: 'Shared deployment of CIS baselines' },
      { label: 'B', text: 'Joint cybersecurity best practices' },
      { label: 'C', text: 'Both companies following the same CSF' },
      { label: 'D', text: 'Assessment of controls in a vulnerability report' }
    ],
    answer: ['C'],
    explanation: "Adopting the same Cybersecurity Framework (CSF) provides a common language, standards, guidelines, and best practices to manage cybersecurity risk. This allows two merging companies to establish a unified approach to their information security programs, facilitating standardization and alignment from a strategic level down to operational activities. A framework like the NIST Cybersecurity Framework is designed to be adaptable and can help organizations communicate and manage cybersecurity risk across different departments and, in this case, between two merging entities. This comprehensive approach is most suitable for aligning entire security programs.",
    incorrectOptionsExplanation: "A. Shared deployment of CIS baselines: CIS Baselines are specific, secure configuration guidelines for various technologies. While important for hardening systems (a component of a security program), they do not provide the overarching structure needed to align entire security programs.\nB. Joint cybersecurity best practices: While adopting best practices is beneficial, this option is too general. A CSF often incorporates best practices but provides a structured, comprehensive approach for program alignment, which 'joint best practices' alone lacks.\nD. Assessment of controls in a vulnerability report: A vulnerability report identifies specific weaknesses and assesses the effectiveness of existing controls. It's an output of an assessment process, not a strategic tool for standardizing and aligning two distinct information security programs.",
    isMultipleChoice: false
  },
  {
    id: 191,
    question: "Which of the following is best used to detect fraud by assigning employees to different roles?",
    options: [
      { label: 'A', text: 'Least privilege' },
      { label: 'B', text: 'Mandatory vacation' },
      { label: 'C', text: 'Separation of duties' },
      { label: 'D', text: 'Job rotation' }
    ],
    answer: ['D'],
    explanation: "Job rotation is best used to detect fraud by assigning employees to different roles. When an employee is moved from one role to another, the individual subsequently assigned to the former role, or the rotated employee in their new capacity, may uncover irregularities or fraudulent activities. This practice is a detective control, as the change in personnel and responsibilities provides an opportunity for fresh review and discovery of concealed actions. Approved sources, such as university audit guidelines and NIST publications, identify job rotation (or \"rotation of duties\") as a detective control that can help uncover fraud.",
    incorrectOptionsExplanation: "A. Least privilege: This is a preventive control that limits users' access to only the information and resources necessary for their jobs. It aims to prevent unauthorized actions, not primarily detect existing fraud through role changes.\nB. Mandatory vacation: This detective control requires employees to take time off, during which others perform their duties, potentially uncovering fraud. However, 'assigning employees to different roles' more precisely describes job rotation.\nC. Separation of duties: This is primarily a preventive control that divides critical tasks among different individuals to reduce the risk of any single person perpetrating and concealing fraud. While it can aid detection, its core purpose is prevention by design.",
    isMultipleChoice: false
  },
  {
    id: 192,
    question: "A systems administrator wants to implement a backup solution. The solution needs to allow recovery of the entire system, including the operating system, in case of a disaster. Which of the following backup types should the administrator consider?",
    options: [
      { label: 'A', text: 'Incremental' },
      { label: 'B', text: 'Storage area network' },
      { label: 'C', text: 'Differential' },
      { label: 'D', text: 'Image' }
    ],
    answer: ['D'],
    explanation: "An image backup (often referred to as a full image backup or bare-metal backup) creates a complete copy of the entire system, which includes the operating system, applications, system settings, and all data. This type of backup is specifically designed to allow for a full system restoration, even to different hardware, making it ideal for disaster recovery scenarios where the entire server needs to be rebuilt from scratch.",
    incorrectOptionsExplanation: "A. Incremental: An incremental backup only captures data that has changed since the last backup (either full or incremental). While efficient for storage, restoring an entire system would require the last full backup and all subsequent incremental backups, and the initial full backup would need to be an image for OS recovery. It's not the standalone type for OS recovery.\nB. Storage area network: A Storage Area Network (SAN) is a dedicated network that provides access to consolidated, block-level data storage. It is a storage infrastructure where backups can be stored, but it is not a type of backup methodology itself.\nC. Differential: A differential backup captures data that has changed since the last full backup. Similar to incremental backups, it requires the last full backup for a complete restoration and is not the specific type that inherently includes the OS for a standalone full system recovery.",
    isMultipleChoice: false
  },
  {
    id: 193,
    question: "A spoofed identity was detected for a digital certificate. Which of the following are the type of unidentified key and the certificate that could be in use on the company domain?",
    options: [
      { label: 'A', text: 'Private key and root certificate' },
      { label: 'B', text: 'Public key and expired certificate' },
      { label: 'C', text: 'Private key and self-signed certificate' },
      { label: 'D', text: 'Public key and wildcard certificate' }
    ],
    answer: ['C'],
    explanation: "A spoofed identity for a digital certificate means the certificate falsely claims to represent an entity. This often occurs when a self-signed certificate is used by an attacker to impersonate a legitimate service. The attacker creates this certificate and signs it with their own private key. This private key is 'unidentified' from the perspective of the legitimate domain owner or trusted Certificate Authorities (CAs). When the attacker's server presents this self-signed certificate, it asserts a fake identity. To operate the service and perform cryptographic operations (like the TLS handshake), the server uses this unidentified private key.",
    incorrectOptionsExplanation: "A. Private key and root certificate: While a rogue root certificate (which is inherently self-signed and uses an attacker's private key) can enable spoofing by issuing fraudulent certificates, Option C is more direct if 'the certificate' refers to the end-entity certificate directly presenting the spoofed identity. If the focus is on such an end-entity certificate, it being self-signed is the key characteristic.\nB. Public key and expired certificate: An expired certificate primarily indicates a validity period issue, not necessarily a deliberately spoofed identity in terms of impersonation. Furthermore, the server engaging in spoofing uses its private key for cryptographic operations, not just its public key.\nD. Public key and wildcard certificate: A wildcard certificate covers multiple subdomains. If its private key is compromised or if a fraudulent wildcard is obtained, it can be used for spoofing. However, the active key used by the spoofer is the private key. Also, 'wildcard' describes its scope, while 'self-signed' describes its lack of trusted validation, which is more central to the spoofing mechanism described.",
    isMultipleChoice: false
  },
  {
    id: 194,
    question: "The Chief Information Security Officer wants to put security measures in place to protect PII. The organization needs to use its existing labeling and classification system to accomplish this goal. Which of the following would most likely be configured to meet the requirements?",
    options: [
      { label: 'A', text: 'Tokenization' },
      { label: 'B', text: 'S/MIME' },
      { label: 'C', text: 'DLP' },
      { label: 'D', text: 'MFA' }
    ],
    answer: ['C'],
    explanation: "Data Loss Prevention (DLP) solutions are specifically designed to enforce policies based on data classification and labeling. To protect Personally Identifiable Information (PII), an organization would leverage its existing labeling system to identify PII. DLP systems would then be configured with rules that dictate how data labeled as PII can be handled, stored, or transmitted, thereby putting security measures in place to protect it. For instance, a DLP system could block emails containing PII from being sent outside the organization or prevent PII from being copied to removable media if it violates a policy defined based on its classification.",
    incorrectOptionsExplanation: "A. Tokenization: This is a process of substituting sensitive data (like PII) with a non-sensitive equivalent (token). While it protects PII, it's a data de-identification technique itself, not a system configured based on existing labels to broadly enforce various protection measures.\nB. S/MIME: Secure/Multipurpose Internet Mail Extensions are used for encrypting and signing email messages. While it can protect PII in emails, it's specific to email communication and doesn't leverage an organization's overall data classification system for broader PII protection measures.\nD. MFA (Multi-Factor Authentication): This is an access control measure that verifies user identity. While crucial for protecting systems that store PII, MFA itself doesn't directly use data labels or classifications to protect the PII content.",
    isMultipleChoice: false
  },
  {
    id: 195,
    question: "An analyst is reviewing an incident in which a user clicked on a link in a phishing email. Which of the following log sources would the analyst utilize to determine whether the connection was successful?",
    options: [
      { label: 'A', text: 'Network' },
      { label: 'B', text: 'System' },
      { label: 'C', text: 'Application' },
      { label: 'D', text: 'Authentication' }
    ],
    answer: ['A'],
    explanation: "To determine if a connection initiated by clicking a link in a phishing email was successful, Network logs are the most direct and comprehensive source. These logs, including firewall logs, proxy logs, and NetFlow data, record outbound connection attempts, whether they were permitted or denied by network security controls, and the status of these communications (e.g., TCP handshake completion, HTTP response codes). For instance, a proxy log showing an HTTP GET request to the suspicious URL followed by a '200 OK' response would indicate a successful connection.",
    incorrectOptionsExplanation: "B. System logs: While system logs (e.g., OS event logs, EDR logs) can show a process initiating a connection from the endpoint's perspective, they might not confirm successful transit through network perimeter defenses or actual communication with the destination server. The connection could be logged as attempted by the OS but blocked by a network firewall.\nC. Application logs: Application logs, such as browser history, would indicate that the URL was visited or that an attempt was made to open the link. However, they don't typically provide details on the network-level success of the connection if, for example, a network filter blocked access.\nD. Authentication logs: These logs are used to track user login and authentication attempts to various systems and applications. They are not the primary source for determining the success of a network connection established by clicking a link, although a successful phishing attack might subsequently lead to malicious authentication events.",
    isMultipleChoice: false
  },
  {
    id: 196,
    question: "The Chief Information Security Officer (CISO) asks a security analyst to install an OS update to a production VM that has a 99% uptime SLA. The CISO tells the analyst the installation must be done as quickly as possible. Which of the following courses of action should the security analyst take first?",
    options: [
      { label: 'A', text: 'Log in to the server and perform a health check on the VM.' },
      { label: 'B', text: 'Install the patch immediately.' },
      { label: 'C', text: 'Confirm that the backup service is running.' },
      { label: 'D', text: 'Take a snapshot of the VM.' }
    ],
    answer: ['D'],
    explanation: "Taking a snapshot of the Virtual Machine (VM) is the most appropriate first step. Snapshots capture the state, data, and hardware configuration of a running VM at a specific moment. Before applying an OS update to a production VM with a high uptime Service Level Agreement (SLA), creating a snapshot provides a quick and effective rollback mechanism if the update causes unforeseen issues. This minimizes potential downtime and helps maintain the SLA. While other actions are important, snapshotting directly addresses the immediate need for a safety net before altering a critical production system, especially when speed is a factor.",
    incorrectOptionsExplanation: "A. Log in to the server and perform a health check on the VM: While a health check is a good practice, it doesn't provide a rollback mechanism. If the update fails, a prior health check won't revert the system. The first priority before a potentially disruptive change is ensuring recoverability.\nB. Install the patch immediately: This is reckless. Applying patches to a production system with a high uptime SLA without any preparatory safety measures like a snapshot or confirmed backup significantly increases risk.\nC. Confirm that the backup service is running: While ensuring backups are operational is crucial for disaster recovery, restoring from a full backup is typically slower than reverting from a snapshot. For immediate rollback after a problematic patch, a snapshot is more efficient.",
    isMultipleChoice: false
  },
  {
    id: 197,
    question: "Since a recent upgrade to a WLAN infrastructure, several mobile users have been unable to access the internet from the lobby. The networking team performs a heat map survey of the building and finds several WAPs in the area. The WAPs are using similar frequencies with high power settings. Which of the following installation considerations should the security team evaluate next?",
    options: [
      { label: 'A', text: 'Channel overlap' },
      { label: 'B', text: 'Encryption type' },
      { label: 'C', text: 'New WLAN deployment' },
      { label: 'D', text: 'WAP placement' }
    ],
    answer: ['A'],
    explanation: "The inability of mobile users to access the internet in the lobby, coupled with the finding of multiple Wireless Access Points (WAPs) operating on similar frequencies with high power settings, strongly indicates an issue with channel overlap. Channel overlap, also known as Co-Channel Interference (CCI) or Adjacent Channel Interference (ACI), occurs when WAPs in close proximity use the same or nearby radio frequencies. This interference degrades signal quality and can lead to connectivity problems, exactly as described. Proper channel planning is essential to mitigate this.",
    incorrectOptionsExplanation: "B. Encryption type: While incorrect encryption settings can prevent network access, the problem statement's details about 'similar frequencies' and 'high power' point directly to a radio frequency interference issue rather than a security misconfiguration.\nC. New WLAN deployment: The scenario describes troubleshooting an existing, upgraded WLAN, not the process of a brand new deployment. Evaluating channel overlap is a step within managing an existing deployment.\nD. WAP placement: While WAP placement is a crucial factor in WLAN design and can contribute to channel overlap if done poorly, 'channel overlap' is the specific radio frequency phenomenon that directly arises from the described conditions and causes the access problem. Addressing channel overlap might involve adjusting WAP placement or, more directly, channel assignments and power levels.",
    isMultipleChoice: false
  },
  {
    id: 198,
    question: "An employee in the accounting department receives an email containing a demand for payment for services performed by a vendor. However, the vendor is not in the vendor management database. Which of the following in this scenario is an example of?",
    options: [
      { label: 'A', text: 'Pretexting' },
      { label: 'B', text: 'Impersonation' },
      { label: 'C', text: 'Ransomware' },
      { label: 'D', text: 'Invoice scam' }
    ],
    answer: ['D'],
    explanation: "The scenario describes an 'invoice scam,' also known as a false invoice scheme. This is a form of financial fraud where an attacker sends a fraudulent invoice for goods or services not actually rendered, or from a non-existent or unapproved vendor, with the aim of tricking the recipient into making a payment to an account controlled by the attacker. The fact that the vendor is not in the vendor management database is a key indicator of this type of scam.",
    incorrectOptionsExplanation: "A. Pretexting: Pretexting is the creation of a fabricated scenario to obtain information or illicit an action. While an invoice scam uses a pretext (e.g., a legitimate-looking invoice), 'invoice scam' is the more specific description of the overall fraudulent activity itself.\nB. Impersonation: Impersonation involves an attacker pretending to be a legitimate entity. While the sender of the fraudulent invoice is impersonating a vendor (even if fictitious), 'invoice scam' more comprehensively describes the entire fraudulent event, not just the act of impersonation.\nC. Ransomware: Ransomware is a type of malicious software that encrypts a victim's files and demands payment for their decryption. This scenario involves a fraudulent payment request, not file encryption, making ransomware an incorrect choice.",
    isMultipleChoice: false
  },
  {
    id: 199,
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
    explanation: "Software as a Service (SaaS) is the cloud service model that most comprehensively outsources patching responsibilities to the cloud vendor. In a SaaS model, the provider manages the underlying infrastructure (including firmware), the operating systems, and the application software itself. The customer uses the application, but the provider is responsible for all maintenance, including patching of all these layers. This directly meets the CISO's goal.",
    incorrectOptionsExplanation: "A. Community cloud: This is a deployment model, not a service model. Patching responsibilities within a community cloud depend on whether IaaS, PaaS, or SaaS is being utilized.\nB. PaaS (Platform as a Service): While the vendor manages the operating system and underlying infrastructure (including firmware), the customer is typically responsible for patching the applications they deploy onto the platform.\nC. Containerization: This is a virtualization method. The responsibility for patching the host OS and underlying firmware still depends on the service model (e.g., IaaS, PaaS) where the containers are running.\nD. Private cloud: This is a deployment model. The extent of outsourced patching depends on whether it's managed by the organization or a third party, and which service model is implemented.\nF. IaaS (Infrastructure as a Service): The vendor is responsible for patching the physical infrastructure and its firmware, but the customer is responsible for patching the guest operating systems and any applications they install.",
    isMultipleChoice: false
  }
];
