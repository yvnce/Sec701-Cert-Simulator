import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following threat actors is the most likely to be hired by a foreign government to attack critical systems located in other countries?",
    options: [
      { label: 'A', text: 'Hacktivist' },
      { label: 'B', text: 'Whistleblower' },
      { label: 'C', text: 'Organized crime' },
      { label: 'D', text: 'Unskilled attacker' }
    ],
    answer: ['C'],
    explanation: "Foreign governments may employ various actors to conduct cyberattacks. Among the options provided, organized crime groups are the most likely to be hired by a foreign government to attack critical systems. Nation-states often use criminal organizations as proxies to conduct attacks, providing plausible deniability and leveraging their specialized skills. These groups are typically motivated by financial gain and possess the technical capabilities required for sophisticated attacks on critical infrastructure. While nation-states also conduct such attacks directly, the question specifies an actor being \"hired.\"",
    incorrectOptionsExplanation: "A. Hacktivist: Hacktivists are primarily motivated by ideology or political/social causes, not typically by direct hire from foreign governments.\nB. Whistleblower: A whistleblower is an insider who exposes illicit activity or wrongdoing within an organization. They are not external attackers hired by foreign governments.\nD. Unskilled attacker: An unskilled attacker, by definition, lacks the sophisticated capabilities necessary to successfully target and compromise critical systems.",
    isMultipleChoice: false
  },
  {
    id: 2,
    question: "Which of the following is used to add extra complexity before using a one-way data transformation algorithm?",
    options: [
        { label: 'A', text: 'Key stretching' },
        { label: 'B', text: 'Data masking' },
        { label: 'C', text: 'Steganography' },
        { label: 'D', text: 'Salting' }
    ],
    answer: ['D'],
    explanation: "Salting involves adding a unique, random value (the salt) to an input, such as a password, before it is processed by a one-way data transformation algorithm (e.g., a hash function). This addition of unique data for each input increases the complexity of the input itself. The primary benefit is that it ensures that even identical inputs will produce different hash outputs, effectively mitigating threats like rainbow table attacks and pre-computed hash collisions.",
    incorrectOptionsExplanation: "A. Key stretching: This technique increases the computational effort required to derive a key or hash, typically by repeatedly applying a hash function. It's a modification of the transformation process itself, not adding something to the input.\nB. Data masking: This is a process of obscuring specific data elements within a dataset, often by replacing them with fictitious but realistic-looking data.\nC. Steganography: This is the practice of concealing data within other non-secret data. Its purpose is to hide the existence of the information, not to add cryptographic complexity.",
    isMultipleChoice: false
  },
  {
    id: 3,
    question: "An employee clicked a link in an email from a payment website that asked the employee to update contact information. The employee entered the log-in information but received a “page not found” error message. Which of the following types of social engineering attacks occurred?",
    options: [
        { label: 'A', text: 'Brand impersonation' },
        { label: 'B', text: 'Pretexting' },
        { label: 'C', text: 'Typosquatting' },
        { label: 'D', text: 'Phishing' }
    ],
    answer: ['D'],
    explanation: "The scenario describes a phishing attack. Phishing is a social engineering technique where attackers attempt to deceive individuals into divulging sensitive information (like login credentials) by impersonating a trustworthy entity. The employee received an email, purportedly from a legitimate payment website, with a link leading to a fraudulent page designed to steal credentials. The \"page not found\" error is a common tactic to make the user believe there was a temporary issue after their information has been captured.",
    incorrectOptionsExplanation: "A. Brand impersonation: While brand impersonation is a component of this phishing attack, phishing is the overarching type of social engineering attack that occurred.\nB. Pretexting: Pretexting involves creating a fabricated scenario to obtain information. While phishing uses a pretext, phishing is a more specific type of attack.\nC. Typosquatting: Typosquatting relies on users mistyping a legitimate website's URL. The scenario clearly states the employee clicked a link in an email.",
    isMultipleChoice: false
  },
  {
    id: 4,
    question: "A data administrator is configuring authentication for a SaaS application and would like to reduce the number of credentials employees need to maintain. The company prefers to use domain credentials to access new SaaS applications. Which of the following methods would allow this functionality?",
    options: [
        { label: 'A', text: 'SSO' },
        { label: 'B', text: 'LEAP' },
        { label: 'C', text: 'MFA' },
        { label: 'D', text: 'PEAP' }
    ],
    answer: ['A'],
    explanation: "Single Sign-On (SSO) is an authentication method that allows users to access multiple applications (including SaaS applications) using a single set of credentials, often their existing domain credentials. This directly addresses the goal of reducing the number of credentials employees need to maintain.",
    incorrectOptionsExplanation: "B. LEAP (Lightweight Extensible Authentication Protocol): This is a Cisco-proprietary wireless LAN authentication protocol, not for accessing SaaS applications.\nC. MFA (Multi-Factor Authentication): MFA enhances security by requiring multiple verification factors. While often used with SSO, its primary purpose is to strengthen authentication, not reduce the number of credentials.\nD. PEAP (Protected Extensible Authentication Protocol): This is an IETF standard for securely transporting authentication data, typically over 802.1X wireless networks.",
    isMultipleChoice: false
  },
  {
    id: 5,
    question: "Which of the following scenarios describes a possible business email compromise attack?",
    options: [
        { label: 'A', text: "An employee receives a gift card request in an email that has an executive's name in the display field of the email." },
        { label: 'B', text: "Employees who open an email attachment receive messages demanding payment in order to access files." },
        { label: 'C', text: "A service desk employee receives an email from the HR director asking for log-in credentials to a cloud administrator account." },
        { label: 'D', text: "An employee receives an email with a link to a phishing site that is designed to look like the company's email portal." }
    ],
    answer: ['A'],
    explanation: "A Business Email Compromise (BEC) attack is a sophisticated scam targeting businesses where attackers impersonate executives or trusted partners to trick employees. Scenario A, where an email with an executive's display name requests gift cards, is a classic example of a BEC gift card scam (CEO fraud).",
    incorrectOptionsExplanation: "B. This describes a ransomware attack, where files are encrypted and payment is demanded.\nC. While this could be a BEC attack for data theft, option A is a more direct and commonly cited example of CEO fraud focusing on immediate financial deception.\nD. This describes a general phishing attack aimed at credential harvesting, which can be a precursor to BEC but is not the targeted social engineering of BEC itself.",
    isMultipleChoice: false
  },
  {
    id: 6,
    question: "A company prevented direct access from the database administrators’ workstations to the network segment that contains database servers. Which of the following should a database administrator use to access the database servers?",
    options: [
        { label: 'A', text: 'Jump server' },
        { label: 'B', text: 'RADIUS' },
        { label: 'C', text: 'HSM' },
        { label: 'D', text: 'Load balancer' }
    ],
    answer: ['A'],
    explanation: "A jump server (also known as a bastion host) is a hardened and monitored device on a network that serves as an intermediary access point to other devices in a separate security zone. It provides a controlled and audited path for administrators to connect to restricted servers.",
    incorrectOptionsExplanation: "B. RADIUS: This is a networking protocol for centralized Authentication, Authorization, and Accounting (AAA), not an access system itself.\nC. HSM: A Hardware Security Module is a physical device used to safeguard and manage digital keys, it does not provide network access.\nD. Load balancer: This distributes network traffic across multiple servers to optimize resource use, not for controlled administrative access.",
    isMultipleChoice: false
  },
  {
    id: 7,
    question: "An organization’s internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    options: [
      { label: 'A', text: 'NGFW' },
      { label: 'B', text: 'WAF' },
      { label: 'C', text: 'TLS' },
      { label: 'D', text: 'SD-WAN' }
    ],
    answer: ['B'],
    explanation: "A Web Application Firewall (WAF) is specifically designed to protect internet-facing web applications from various attacks, including buffer overflows. It operates at the application layer (Layer 7), inspecting HTTP/S traffic for malicious patterns, oversized payloads, or other anomalies indicative of attempts to exploit vulnerabilities like buffer overflows.",
    incorrectOptionsExplanation: "A. NGFW (Next-Generation Firewall): While NGFWs offer advanced firewall capabilities, they are generally less specialized than WAFs for nuanced web application attacks.\nC. TLS (Transport Layer Security): TLS encrypts data in transit, ensuring confidentiality and integrity, but does not inspect the content of the encrypted traffic.\nD. SD-WAN (Software-Defined Wide Area Network): SD-WAN is a network architecture for optimizing network traffic routing and does not inherently provide security mechanisms to protect web applications.",
    isMultipleChoice: false
  },
  {
    id: 8,
    question: "An administrator notices that several users are logging in from suspicious IP addresses. After speaking with the users, the administrator determines that the employees were not logging in from those IP addresses and resets the affected users’ passwords. Which of the following should the administrator implement to prevent this type of attack from succeeding in the future?",
    options: [
      { label: 'A', text: 'Multifactor authentication' },
      { label: 'B', text: 'Permissions assignment' },
      { label: 'C', text: 'Access management' },
      { label: 'D', text: 'Password complexity' }
    ],
    answer: ['A'],
    explanation: "The scenario describes unauthorized logins despite password resets, indicating that user credentials (passwords) were compromised. Multifactor Authentication (MFA) is the most effective control to prevent attackers from successfully using stolen credentials. MFA requires users to provide two or more verification factors to gain access, meaning a compromised password alone would not be sufficient for an attacker to log in.",
    incorrectOptionsExplanation: "B. Permissions assignment: This controls what resources a user can access after successful authentication. It does not prevent the initial unauthorized login.\nC. Access management: This is a broad category of security processes. While MFA is a component of access management, 'Multifactor authentication' is the specific control needed.\nD. Password complexity: While strong passwords make them harder to guess, they do not prevent credentials from being compromised through other methods like phishing or malware.",
    isMultipleChoice: false
  },
  {
    id: 9,
    question: "An employee receives a text message that appears to have been sent by the payroll department and is asking for credential verification. Which of the following social engineering techniques are being attempted? (Choose two.)",
    options: [
        { label: 'A', text: 'Typosquatting' },
        { label: 'B', text: 'Phishing' },
        { label: 'C', text: 'Impersonation' },
        { label: 'D', text: 'Vishing' },
        { label: 'E', text: 'Smishing' },
        { label: 'F', text: 'Misinformation' }
    ],
    answer: ['C', 'E'],
    explanation: "The attacker is using Smishing, which is a form of phishing conducted via SMS (text message), to deliver the fraudulent request. Concurrently, the attacker is employing Impersonation by falsely representing themselves as the payroll department to gain the victim's trust and solicit their credentials.",
    incorrectOptionsExplanation: "A. Typosquatting involves registering misspelled domain names.\nB. While Smishing is a type of phishing, 'Smishing' is more specific to the delivery method (SMS).\nD. Vishing refers to voice phishing over telephone calls.\nF. Misinformation is a broad category; Impersonation is the more precise technique used.",
    isMultipleChoice: true
  },
  {
    id: 10,
    question: "Several employees received a fraudulent text message from someone claiming to be the Chief Executive Officer (CEO). The message stated: “I’m in an airport right now with no access to email. I need you to buy gift cards for employee recognition awards. Please send the gift cards to following email address.” Which of the following are the best responses to this situation? (Choose two).",
    options: [
      { label: 'A', text: 'Cancel current employee recognition gift cards.' },
      { label: 'B', text: 'Add a smishing exercise to the annual company training.' },
      { label: 'C', text: 'Issue a general email warning to the company.' },
      { label: 'D', text: 'Have the CEO change phone numbers.' },
      { label: 'E', text: "Conduct a forensic investigation on the CEO's phone." },
      { label: 'F', text: 'Implement mobile device management.' }
    ],
    answer: ['B', 'C'],
    explanation: "The most effective responses to this smishing incident involve immediate risk mitigation and long-term prevention. Issuing a general email warning (C) immediately alerts all employees to the ongoing attack, helping to contain its impact. Adding a smishing exercise to annual training (B) addresses the human element, which is the primary target of social engineering attacks like this.",
    incorrectOptionsExplanation: "A. This is a misdirected reaction; the attack involved a fraudulent request for new cards, not a compromise of existing ones.\nD. The attacker is impersonating the CEO, likely using a spoofed number. Changing the CEO's number doesn't prevent this.\nE. There's no indication the CEO's actual phone was compromised.\nF. MDM doesn't directly prevent social engineering via text messages, which exploit human behavior.",
    isMultipleChoice: true
  },
  {
    id: 11,
    question: "A company is required to use certified hardware when building networks. Which of the following best addresses the risks associated with procuring counterfeit hardware?",
    options: [
      { label: 'A', text: 'A thorough analysis of the supply chain' },
      { label: 'B', text: 'A legally enforceable corporate acquisition policy' },
      { label: 'C', text: 'A right to audit clause in vendor contracts and SOWs' },
      { label: 'D', text: 'An in-depth penetration test of all suppliers and vendors' }
    ],
    answer: ['A'],
    explanation: "A thorough analysis of the supply chain is the most comprehensive and proactive approach to address the risks associated with procuring counterfeit hardware. This analysis involves identifying all entities in the supply chain, understanding their processes, assessing vulnerabilities, and verifying the provenance of components.",
    incorrectOptionsExplanation: "B. A policy alone does not actively mitigate the risk without robust verification processes.\nC. A right to audit clause is a valuable tool but is a component of a broader supply chain analysis, not the overarching strategy itself.\nD. Penetration testing primarily assesses the cybersecurity posture of IT systems, not the risk of physically counterfeit hardware components.",
    isMultipleChoice: false
  },
  {
    id: 12,
    question: "Which of the following provides the details about the terms of a test with a third- party penetration tester?",
    options: [
      { label: 'A', text: 'Rules of engagement' },
      { label: 'B', text: 'Supply chain analysis' },
      { label: 'C', text: 'Right to audit clause' },
      { label: 'D', text: 'Due diligence' }
    ],
    answer: ['A'],
    explanation: "The Rules of Engagement (RoE) document explicitly outlines the specific terms, scope, objectives, limitations, and procedures for a penetration test. It formalizes what will be tested, when, and how, including communication protocols and escalation paths.",
    incorrectOptionsExplanation: "B. This is a broader assessment of risks associated with all external vendors, not specifically the terms of a single penetration test.\nC. This is a contractual provision allowing one party to examine another's processes. It doesn't define the detailed operational terms of the test itself.\nD. This refers to the investigative process and care taken before entering into an agreement, such as selecting a qualified tester.",
    isMultipleChoice: false
  },
  {
    id: 13,
    question: "A penetration tester begins an engagement by performing port and service scans against the client environment according to the rules of engagement. Which of the following reconnaissance types is the tester performing?",
    options: [
      { label: 'A', text: 'Active' },
      { label: 'B', text: 'Passive' },
      { label: 'C', text: 'Defensive' },
      { label: 'D', text: 'Offensive' }
    ],
    answer: ['A'],
    explanation: "Active reconnaissance involves directly interacting with and probing the target systems to gather information. Performing port and service scans sends packets to the client's environment to elicit responses, which is a defining characteristic of active reconnaissance.",
    incorrectOptionsExplanation: "B. Passive reconnaissance gathers information without direct system interaction (e.g., searching public records).\nC. 'Defensive' describes security measures, not a method of information gathering.\nD. 'Offensive' is not a standard classification for a type of reconnaissance; techniques are primarily categorized as active or passive.",
    isMultipleChoice: false
  },
  {
    id: 14,
    question: "Which of the following is required for an organization to properly manage its restore process in the event of system failure?",
    options: [
      { label: 'A', text: 'IRP' },
      { label: 'B', text: 'DRP' },
      { label: 'C', text: 'RPO' },
      { label: 'D', text: 'SDLC' }
    ],
    answer: ['B'],
    explanation: "A Disaster Recovery Plan (DRP) is a documented, structured approach with instructions for responding to unplanned incidents that threaten an IT infrastructure. A DRP specifically outlines the procedures an organization will follow to recover and restore its critical technological assets and business operations.",
    incorrectOptionsExplanation: "A. An IRP (Incident Response Plan) focuses on addressing and managing the aftermath of security breaches, while a DRP is more specific to restoring systems from general disasters.\nC. An RPO (Recovery Point Objective) is a metric that defines the maximum acceptable amount of data loss, used within a DRP, not the plan itself.\nD. The SDLC (System Development Life Cycle) is a framework for planning, designing, and building systems, not their restoration after a failure.",
    isMultipleChoice: false
  },
  {
    id: 15,
    question: "Which of the following vulnerabilities is associated with installing software outside of a manufacturer’s approved software repository?",
    options: [
      { label: 'A', text: 'Jailbreaking' },
      { label: 'B', text: 'Memory injection' },
      { label: 'C', text: 'Resource reuse' },
      { label: 'D', text: 'Side loading' }
    ],
    answer: ['D'],
    explanation: "Sideloading is the process of installing software onto a device from a source other than the manufacturer's or operating system's official app store. This practice bypasses the security vetting and approval processes, increasing the risk of installing malware or other security vulnerabilities.",
    incorrectOptionsExplanation: "A. Jailbreaking refers to removing software restrictions imposed by the device manufacturer. While it enables sideloading, it is the act of removing controls, not the installation process itself.\nB. Memory injection is a specific type of cyberattack, not the method of installing unapproved software.\nC. Resource reuse is a vulnerability where a system allocates a resource (e.g., memory block) without clearing its prior contents.",
    isMultipleChoice: false
  },
  {
    id: 16,
    question: "A security analyst is reviewing logs that show a series of rejected login attempts where the same password ('Spring2023') is used against multiple different usernames ('administrator', 'jsmith', 'guest', etc.) in a very short time. Which of the following attacks is most likely occurring?",
    options: [
      { label: 'A', text: 'Password spraying' },
      { label: 'B', text: 'Account forgery' },
      { label: 'C', text: 'Pass-the-hash' },
      { label: 'D', text: 'Brute-force' }
    ],
    answer: ['A'],
    explanation: "The logs show the same password being used against multiple different usernames. This pattern is characteristic of a password spraying attack. In such an attack, an adversary uses a small list of common passwords against many different accounts, hoping to find a match while avoiding account lockouts.",
    incorrectOptionsExplanation: "B. Account forgery typically involves creating new, illegitimate user accounts.\nC. Pass-the-hash involves using a stolen password hash to authenticate, not a plaintext password.\nD. While password spraying is a type of brute-force attack, it is a more precise description of the specific activity observed (one password against many accounts).",
    isMultipleChoice: false
  },
  {
    id: 17,
    question: "An analyst is evaluating the implementation of Zero Trust principles within the data plane. Which of the following would be the most relevant for the analyst to evaluate?",
    options: [
      { label: 'A', text: 'Secured zones' },
      { label: 'B', text: 'Subject role' },
      { label: 'C', text: 'Adaptive identity' },
      { label: 'D', text: 'Threat scope reduction' }
    ],
    answer: ['D'],
    explanation: "The data plane in a Zero Trust Architecture (ZTA) is where access policies are enforced. A fundamental goal of applying Zero Trust principles is to minimize the potential impact of a security breach. Evaluating threat scope reduction directly assesses how effectively these principles limit an attacker's lateral movement and the overall 'blast radius' of an incident.",
    incorrectOptionsExplanation: "A. 'Secured zones' are a mechanism; 'threat scope reduction' is the assessment of their effectiveness.\nB. 'Subject role' is predominantly a control plane concept that informs policy decisions.\nC. 'Adaptive identity' is an advanced control plane function that informs policy decisions.",
    isMultipleChoice: false
  },
  {
    id: 18,
    question: "An engineer needs to find a solution that creates an added layer of security by preventing unauthorized access to internal company resources. Which of the following would be the best solution?",
    options: [
      { label: 'A', text: 'RDP server' },
      { label: 'B', text: 'Jump server' },
      { label: 'C', text: 'Proxy server' },
      { label: 'D', text: 'Hypervisor' }
    ],
    answer: ['B'],
    explanation: "A jump server, also known as a bastion host, is a hardened and monitored device designed to be the single, controlled access point to other systems within a separate security zone. It acts as an intermediary, requiring users to first authenticate to it before accessing other internal resources.",
    incorrectOptionsExplanation: "A. An RDP server allows remote connections to that specific server; it doesn't provide a secure layer for accessing other resources.\nC. A proxy server's primary role is typically to act as an intermediary for network requests, often for outbound connections, not specialized for secure administrative access.\nD. A hypervisor is software that creates and runs virtual machines; it is not a solution for providing a controlled access layer.",
    isMultipleChoice: false
  },
  {
    id: 19,
    question: "A company’s web filter is configured to scan the URL for strings and deny access when matches are found. Which of the following search strings should an analyst employ to prohibit access to non-encrypted websites?",
    options: [
      { label: 'A', text: 'encryption=off' },
      { label: 'B', text: 'http://' },
      { label: 'C', text: 'www.*.com' },
      { label: 'D', text: ':443' }
    ],
    answer: ['B'],
    explanation: "To prohibit access to non-encrypted websites, the analyst should look for 'http://'. The 'http' scheme in a URL indicates that the Hypertext Transfer Protocol is being used without encryption. In contrast, 'https://' signifies an encrypted connection.",
    incorrectOptionsExplanation: "A. 'encryption=off' is not a standard URL string component.\nC. 'www.*.com' matches domain names but does not differentiate encryption status.\nD. ':443' indicates port 443, which is the standard port for HTTPS (encrypted traffic), so blocking this would block encrypted websites.",
    isMultipleChoice: false
  },
  {
    id: 20,
    question: "During a security incident, the security operations team identified sustained network traffic from a malicious IP address: 10.1.4.9. A security analyst is creating an inbound firewall rule to block the IP address from accessing the organization’s network. Which of the following fulfills this request?",
    options: [
      { label: 'A', text: 'access-list inbound deny ig source 0.0.0.0/0 destination 10.1.4.9/32' },
      { label: 'B', text: 'access-list inbound deny ig source 10.1.4.9/32 destination 0.0.0.0/0' },
      { label: 'C', text: 'access-list inbound permit ig source 10.1.4.9/32 destination 0.0.0.0/0' },
      { label: 'D', text: 'access-list inbound permit ig source 0.0.0.0/0 destination 10.1.4.9/32' }
    ],
    answer: ['B'],
    explanation: "To block inbound traffic from a malicious IP, the rule must deny traffic where the source is the malicious IP (10.1.4.9/32) and the destination is any IP within the organization's network (0.0.0.0/0). Option B correctly implements this logic.",
    incorrectOptionsExplanation: "A. This rule denies traffic from any source to the malicious IP, blocking traffic to it, not from it.\nC. This rule uses the 'permit' action, which would allow traffic from the malicious IP.\nD. This rule uses 'permit' and incorrectly sets the malicious IP as the destination.",
    isMultipleChoice: false
  },
  {
    id: 21,
    question: "A company needs to provide administrative access to internal resources while minimizing the traffic allowed through the security boundary. Which of the following methods is most secure?",
    options: [
      { label: 'A', text: 'Implementing a bastion host' },
      { label: 'B', text: 'Deploying a perimeter network' },
      { label: 'C', text: 'Installing a WAF' },
      { label: 'D', text: 'Utilizing single sign-on' }
    ],
    answer: ['A'],
    explanation: "Implementing a bastion host (also known as a jump server) is the most secure method listed. A bastion host is a specialized, hardened server designed to be the sole, controlled point of access to internal resources from an external or less trusted network. It minimizes the attack surface by centralizing administrative access and allowing for strict monitoring and auditing. All other direct access to the internal network is blocked, thus minimizing the traffic allowed through the security boundary to just the traffic to and from the bastion host.",
    incorrectOptionsExplanation: "B. Deploying a perimeter network (DMZ): A DMZ is a network segment that isolates internal resources from external networks. While a bastion host is often placed in a DMZ, the DMZ itself is a network design, not the specific access method.\nC. Installing a WAF: A Web Application Firewall is designed to protect web applications from attacks like SQL injection and cross-site scripting. It is not intended for providing general administrative access to servers or other internal resources.\nD. Utilizing single sign-on (SSO): SSO simplifies authentication by allowing users to log in with a single set of credentials to multiple systems. While it enhances user experience and can be part of a secure architecture, it does not provide the network-level traffic isolation and control that a bastion host does.",
    isMultipleChoice: false
  },
  {
    id: 22,
    question: "Which of the following are cases in which an engineer should recommend the decommissioning of a network device? (Select two).",
    options: [
      { label: 'A', text: "The device has been moved from a production environment to a test environment." },
      { label: 'B', text: "The device is configured to use cleartext passwords." },
      { label: 'C', text: "The device is moved to an isolated segment on the enterprise network." },
      { label: 'D', text: "The device is moved to a different location in the enterprise." },
      { label: 'E', text: "The device's encryption level cannot meet organizational standards." },
      { label: 'F', text: "The device is unable to receive authorized updates." }
    ],
    answer: ['E', 'F'],
    explanation: "Decommissioning a network device is recommended when it poses an unacceptable security risk that cannot be reasonably mitigated.\n\nOption E is correct because if a device's encryption capabilities are outdated or insufficient to meet current organizational security policies (e.g., requiring TLS 1.2+ or specific cipher suites), it can expose sensitive data. If the device cannot be upgraded to meet these standards, decommissioning is necessary to protect information assets.\n\nOption F is correct because a device that can no longer receive authorized updates, especially security patches (e.g., an End-of-Life or End-of-Support device), will accumulate unpatched vulnerabilities. This makes it an ongoing and increasing target for exploits, necessitating its removal from the network.",
    incorrectOptionsExplanation: "A. The device has been moved from a production environment to a test environment. Moving a device to a test environment is repurposing, not a reason for decommissioning. The device might still have a useful, albeit different, role.\nB. The device is configured to use cleartext passwords. This is a critical security misconfiguration that requires immediate remediation (e.g., reconfiguring for secure authentication methods). Decommissioning is only considered if the device cannot be configured to avoid cleartext passwords, making it unable to meet security standards (similar to E).\nC. The device is moved to an isolated segment on the enterprise network. Isolating a device is often a risk mitigation strategy, particularly for legacy systems that cannot be immediately decommissioned but still need to operate. It does not inherently mean the device should be decommissioned.\nD. The device is moved to a different location in the enterprise. The physical relocation of a device within the enterprise does not, by itself, warrant decommissioning. Functional and security capabilities are the primary concerns.",
    isMultipleChoice: true
  },
  {
    id: 23,
    question: "An administrator assists the legal and compliance team with ensuring information about customer transactions is archived for the proper time period. Which of the following data policies is the administrator carrying out?",
    options: [
      { label: 'A', text: 'Compromise' },
      { label: 'B', text: 'Retention' },
      { label: 'C', text: 'Analysis' },
      { label: 'D', text: 'Transfer' },
      { label: 'E', text: 'Inventory' }
    ],
    answer: ['B'],
    explanation: "A data retention policy dictates how long information must be kept and when it should be disposed of to meet legal, regulatory, and business requirements. The administrator is ensuring customer transaction information is archived for the 'proper time period,' which directly aligns with the function of a retention policy. This involves secure storage and timely destruction of information no longer needed.",
    incorrectOptionsExplanation: "A. Compromise: Refers to a security incident where data is exposed or breached, not a planned data lifecycle management activity for archiving. (Source: NIST Glossary)\nC. Analysis: Is the process of inspecting and interpreting data to derive insights, distinct from the policy dictating the duration for which data is stored.\nD. Transfer: Concerns the movement of data between locations or systems, not the policy that determines its required storage duration.\nE. Inventory: Is the process of identifying and cataloging an organization's data assets, not the policy governing how long these assets are to be kept. (Source: NIST SP 800-122)",
    isMultipleChoice: false
  },
  {
    id: 24,
    question: "A systems administrator is working on a solution with the following requirements:\n• Provide a secure zone.\n• Enforce a company-wide access control policy.\n• Reduce the scope of threats.\nWhich of the following is the systems administrator setting up?",
    options: [
      { label: 'A', text: 'Zero Trust' },
      { label: 'B', text: 'AAA' },
      { label: 'C', text: 'Non-repudiation' },
      { label: 'D', text: 'CIA' }
    ],
    answer: ['A'],
    explanation: "Zero Trust is a security model based on the principle of 'never trust, always verify.' It requires strict identity verification for every person and device trying to access resources on a private network, regardless of whether they are sitting within or outside of the network perimeter. A Zero Trust Architecture (ZTA), as defined by NIST SP 800-207, is designed to prevent data breaches and limit internal lateral movement. This inherently involves creating secure zones (often through microsegmentation), enforcing granular access control policies company-wide, and thereby reducing the overall scope and impact of threats.",
    incorrectOptionsExplanation: "B. AAA: Authentication, Authorization, and Accounting is a framework for controlling access to resources. While crucial for enforcing access control policies (a component of Zero Trust), AAA by itself doesn't holistically address the creation of secure zones in an architectural sense or the broader strategy of reducing threat scope as comprehensively as Zero Trust.\nC. Non-repudiation: This is a security service that provides proof of the integrity and origin of data, and the actions of an entity, making it difficult to deny later. It doesn't directly relate to setting up secure zones or enforcing company-wide access control for all resources.\nD. CIA: Confidentiality, Integrity, and Availability (CIA Triad) represent the fundamental objectives of a security program. They are goals to be achieved, not a system or architecture that a systems administrator 'sets up' to meet the listed requirements. A Zero Trust architecture helps achieve these objectives.",
    isMultipleChoice: false
  },
  {
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
    question: "A company's marketing department collects, modifies, and stores sensitive customer data. The infrastructure team is responsible for securing the data while in transit and at rest. Which of the following data roles describes the customer?",
    options: [
      { label: 'A', text: 'Processor' },
      { label: 'B', text: 'Custodian' },
      { label: 'C', text: 'Subject' },
      { label: 'D', text: 'Owner' }
    ],
    answer: ['C'],
    explanation: "The customer, whose sensitive data is being collected, modified, and stored, is the individual to whom the personal data pertains. In data privacy and governance contexts, this role is precisely termed the Data Subject. The marketing department acts on this data (as part of a Data Controller or Processor), and the infrastructure team secures it (acting as a Data Custodian), but the customer is the subject of the data itself.",
    incorrectOptionsExplanation: "A. Processor: A Data Processor is an entity that processes data on behalf of a Data Controller. The customer is the individual whose data is processed, not the entity performing the processing.\nB. Custodian: A Data Custodian is responsible for the safekeeping, transport, and storage of data, typically an IT or infrastructure role. This describes the infrastructure team, not the customer.\nD. Owner: A Data Owner is typically an organizational role with authority and responsibility for specific data assets, including establishing controls. This is an internal company role, not the customer.",
    isMultipleChoice: false
  },
  {
    id: 30,
    question: "Malware spread across a company's network after an employee visited a compromised industry blog. Which of the following best describes this type of attack?",
    options: [
      { label: 'A', text: 'Impersonation' },
      { label: 'B', text: 'Disinformation' },
      { label: 'C', text: 'Watering-hole' },
      { label: 'D', text: 'Smishing' }
    ],
    answer: ['C'],
    explanation: "A watering-hole attack is a targeted cyberattack strategy where attackers compromise websites that are frequently visited by a specific group of users or an organization. When the targeted individuals visit these compromised legitimate sites (the 'watering hole'), their computers are infected with malware. In this scenario, the 'compromised industry blog' serves as the watering hole, and the employee's visit led to a malware infection on the company's network.",
    incorrectOptionsExplanation: "A. Impersonation: Impersonation involves an attacker pretending to be a known or trusted entity to gain unauthorized access or information. While a compromised site might mislead, the core attack mechanism described is leveraging a trusted site, not faking an identity directly.\nB. Disinformation: Disinformation refers to the deliberate spread of false information to deceive. While the compromised blog could also spread disinformation, the question's primary focus is on the method of malware delivery, not the content's truthfulness.\nD. Smishing: Smishing is a form of phishing conducted via SMS (Short Message Service) text messages. The scenario clearly states the infection occurred after visiting a website, not through an SMS.",
    isMultipleChoice: false
  },
  {
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
    question: "A client demands at least 99.99% uptime from a service provider's hosted security services. Which of the following documents includes the information the service provider should return to the client?",
    options: [
      { label: 'A', text: 'MOA' },
      { label: 'B', text: 'SOW' },
      { label: 'C', text: 'MOU' },
      { label: 'D', text: 'SLA' }
    ],
    answer: ['D'],
    explanation: "A Service Level Agreement (SLA) is a contract between a service provider and a customer that defines the level of service expected from the provider. SLAs are output-based in that their purpose is specifically to define what the customer will receive. They typically include metrics for service availability (uptime), performance, and responsibilities, along with remedies or penalties if the agreed-upon levels are not met. The client's demand for 'at least 99.99% uptime' is a classic example of a service level objective that would be documented in an SLA.",
    incorrectOptionsExplanation: "A. MOA (Memorandum of Agreement): An MOA typically outlines a cooperative agreement or partnership where parties agree to a common line of action, not specific, measurable service guarantees like uptime. It's less formal than an SLA.\nB. SOW (Statement of Work): A SOW details the specific tasks, deliverables, timelines, and costs for a project. While it might reference an SLA, it doesn't primarily define ongoing service levels like uptime guarantees.\nC. MOU (Memorandum of Understanding): An MOU is a document that describes a bilateral or multilateral agreement between parties. It expresses a convergence of will between the parties, indicating an intended common line of action, but is often less formal and less binding than an SLA regarding service metrics.",
    isMultipleChoice: false
  },
  {
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
    question: "After an audit, an administrator discovers all users have access to confidential data on a file server. Which of the following should the administrator use to restrict access to the data quickly?",
    options: [
      { label: 'A', text: 'Group Policy' },
      { label: 'B', text: 'Content filtering' },
      { label: 'C', text: 'Data loss prevention' },
      { label: 'D', text: 'Access control lists' }
    ],
    answer: ['D'],
    explanation: "Access Control Lists (ACLs) are the fundamental security mechanism used by operating systems to determine which users or groups can access specific files and folders and what operations (read, write, execute) they are permitted to perform. When an administrator needs to quickly restrict access to data on a file server, directly modifying the ACLs for the confidential data is the most direct and immediate method. This allows for granular control over permissions.",
    incorrectOptionsExplanation: "A. Group Policy: While Group Policy can manage and deploy security settings, including file permissions (which ultimately modify ACLs), it's a management framework. Changes might not be immediate due to propagation times, making it less 'quick' than direct ACL modification for an urgent fix.\nB. Content filtering: This technology is primarily used to restrict access to content based on its nature, typically for web or email traffic (e.g., blocking malicious websites or spam), not for controlling access to files on a server.\nC. Data loss prevention (DLP): DLP solutions are designed to detect and prevent the unauthorized exfiltration or leakage of sensitive data. While they protect data, they are not the primary tools for establishing or modifying basic access permissions on a file server.",
    isMultipleChoice: false
  },
  {
    id: 39,
    question: "A Chief Information Security Officer wants to explicitly raise awareness about the increase of ransomware-as-a-service in a report to the management team. Which of the following best describes the threat actor in the CISO's report?",
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
    id: 40,
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
    id: 41,
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
    id: 42,
    question: "After reviewing the following vulnerability scanning report: Server:192.168.14.6 Service: Telnet Port: 23 Protocol: TCP Status: Open Severity: High Vulnerability: Use of an insecure network protocol A security analyst performs the following test:\nnmap -p 23 192.168.14.6 script telnet-encryption PORT STATE SERVICE REASON 23/tcp open telnet syn-ack I telnet encryption:\n| _ Telnet server supports encryption\nWhich of the following would the security analyst conclude for this reported vulnerability?",
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
    id: 43,
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
    id: 44,
    question: "Which of the following best practices gives administrators a set period to perform changes to an operational system to ensure availability and minimize business impacts?",
    options: [
      { label: 'A', text: 'Impact analysis' },
      { label: 'B', text: 'Scheduled downtime' },
      { label: 'C', text: 'Backout plan' },
      { label: 'D', text: 'Change management boards' }
    ],
    answer: ['B'],
    explanation: "Scheduled downtime refers to a pre-planned interval during which an operational system is intentionally taken offline or its services are limited to allow administrators to perform essential maintenance, upgrades, or other modifications. This practice is a key component of change management, designed to implement changes in a controlled manner. By typically scheduling these activities during periods of low system usage (e.g., nights or weekends), organizations can minimize the impact on business operations and users.",
    incorrectOptionsExplanation: "A. Impact analysis: This is a process to evaluate the potential consequences and risks of a proposed change before it is scheduled. It informs the decision-making process but is not the set period for performing the change itself.\nC. Backout plan: This is a documented procedure to restore a system to its last known good state if a change implementation fails or causes unintended negative consequences. It's a contingency measure, not the allocated time for the change.\nD. Change management boards: Often called Change Advisory Boards (CABs), these are groups of stakeholders responsible for reviewing, approving, or rejecting proposed changes. They govern the change process but are not the scheduled period for implementation.",
    isMultipleChoice: false
  },
  {
    id: 45,
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
    id: 46,
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
    id: 47,
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
    id: 48,
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
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
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
    id: 55,
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
    id: 56,
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
    id: 57,
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
    id: 58,
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
    id: 59,
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
    id: 60,
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
    id: 61,
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
  }
];
