import type { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 201,
    question: "A new vulnerability enables a type of malware that allows the unauthorized movement of data from a system. Which of the following would detect this behavior?",
    options: [
      { label: 'A', text: 'Implementing encryption' },
      { label: 'B', text: 'Monitoring outbound traffic' },
      { label: 'C', text: 'Using default settings' },
      { label: 'D', text: 'Closing all open ports' }
    ],
    answer: ['B'],
    explanation: "Monitoring outbound network traffic is a fundamental technique for detecting data exfiltration. When malware moves data unauthorizedly from a system, this data must traverse the network boundary. Security mechanisms like Data Loss Prevention (DLP) systems, Intrusion Detection/Prevention Systems (IDPS), and Security Information and Event Management (SIEM) systems analyze outbound traffic patterns, volumes, and destinations to identify anomalous activities indicative of data theft. This allows organizations to detect and respond to potential breaches.",
    incorrectOptionsExplanation: "· A. Implementing encryption: Encryption protects data confidentiality by making it unreadable without a key. While crucial for security, it does not inherently detect the movement of data; encrypted malicious data can still be exfiltrated.\n· C. Using default settings: Relying on default settings is generally a poor security practice as they are often not configured for optimal security and may include vulnerabilities. Default settings do not provide a mechanism for detecting data exfiltration.\n· D. Closing all open ports: Closing unnecessary ports is a vital security measure to reduce the attack surface. However, malware can exfiltrate data through commonly used ports (e.g., 80/443) that must remain open for legitimate traffic. This action is preventative, not primarily detective of ongoing exfiltration.",
    isMultipleChoice: false
  },
  {
    id: 202,
    question: "Which of the following can a security director use to prioritize vulnerability patching within a company's IT environment?",
    options: [
      { label: 'A', text: 'SOAR' },
      { label: 'B', text: 'CVSS' },
      { label: 'C', text: 'SIEM' },
      { label: 'D', text: 'CVE' }
    ],
    answer: ['B'],
    explanation: "The Common Vulnerability Scoring System (CVSS) is an open framework specifically designed to communicate the characteristics and severity of software vulnerabilities. It provides a numerical score (ranging from 0.0 to 10.0) that reflects the principal characteristics of a vulnerability such as access vector, complexity, privileges required, user interaction, and impacts on confidentiality, integrity, and availability. Security directors use these scores to prioritize vulnerability patching by addressing the most severe vulnerabilities first.",
    incorrectOptionsExplanation: "· A. SOAR (Security Orchestration, Automation and Response): SOAR platforms use data, including vulnerability severity scores (often derived from CVSS), to automate and orchestrate responses. However, SOAR itself is not the system that generates the prioritization score; it acts upon it.\n· C. SIEM (Security Information and Event Management): SIEM systems collect, correlate, and analyze log and event data from various sources to detect and report on security incidents. While a SIEM might identify exploited vulnerabilities, it doesn't provide the foundational scoring system for prioritizing vulnerability patching based on inherent characteristics.\n· D. CVE (Common Vulnerabilities and Exposures): CVE provides unique identifiers for publicly known cybersecurity vulnerabilities. It's a dictionary or list, not a scoring system. While CVSS scores are often associated with CVE entries, CVE itself does not offer a mechanism for prioritization.",
    isMultipleChoice: false
  },
  {
    id: 203,
    question: "Which of the following is the most effective way to protect an application server running software that is no longer supported from network threats?",
    options: [
      { label: 'A', text: 'Air gap' },
      { label: 'B', text: 'Barricade' },
      { label: 'C', text: 'Port security' },
      { label: 'D', text: 'Screened subnet' }
    ],
    answer: ['A'],
    explanation: "An air gap provides the most effective protection for an application server running unsupported software from network threats because it involves complete physical isolation of the server from any network. Unsupported software is likely to have unpatched vulnerabilities. By eliminating all network connectivity, an air gap removes the primary vector for network-based attacks, thus offering the highest level of protection against such threats. While this may impact the server's ability to provide network services, it is the most effective method of protection from network threats.",
    incorrectOptionsExplanation: "· B. Barricade: A barricade is a physical security measure designed to prevent unauthorized physical access. It does not directly protect against network threats targeting software vulnerabilities.\n· C. Port security: Port security is a Layer 2 control that restricts network access based on MAC addresses at the switch port level. It does not protect against attacks from authorized devices or network threats that exploit software vulnerabilities over an established connection.\n· D. Screened subnet (DMZ): A screened subnet (or Demilitarized Zone) is a perimeter network segment that still allows network connectivity, albeit controlled. An application server with unsupported software in a DMZ remains exposed to network threats that could exploit its unpatchable vulnerabilities.",
    isMultipleChoice: false
  },
  {
    id: 204,
    question: "Which of the following is the most important security concern when using legacy systems to provide production service?",
    options: [
      { label: 'A', text: 'Instability' },
      { label: 'B', text: 'Lack of vendor support' },
      { label: 'C', text: 'Loss of availability' },
      { label: 'D', text: 'Use of insecure protocols' }
    ],
    answer: ['B'],
    explanation: "Lack of vendor support is the most critical security concern for legacy systems in production because it signifies that no new security patches or updates will be provided. This leaves the system perpetually vulnerable to newly discovered exploits and an inability to address existing weaknesses, including the use of insecure protocols. Without vendor support, the capacity to respond to emerging threats is fundamentally undermined, leading to an ever-increasing risk profile for the production service. This overarching issue often means other security problems cannot be rectified.",
    incorrectOptionsExplanation: "· A. Instability: While legacy systems can suffer from instability, this is primarily an operational or reliability concern. It only becomes a direct security concern if the instability leads to a vulnerability or is exploited, making it secondary to more fundamental security flaws.\n· C. Loss of availability: Loss of availability is an impact or consequence of a security incident or system failure, rather than the primary security concern or vulnerability itself. The concern is what causes the potential loss of availability.\n· D. Use of insecure protocols: This is a significant security concern. However, lack of vendor support is more encompassing because it means neither these insecure protocols nor any other discovered vulnerabilities can be patched or updated, making it a more fundamental issue.",
    isMultipleChoice: false
  },
  {
    id: 205,
    question: "Cadets speaking a foreign language are using company phone numbers to make unsolicited phone calls to a partner organization. A security analyst validates through phone system logs that the calls are occurring and the numbers are not being spoofed. Which of the following is the most likely explanation?",
    options: [
      { label: 'A', text: 'The executive team is traveling internationally and trying to avoid roaming charges' },
      { label: 'B', text: "The company's SIP server security settings are weak." },
      { label: 'C', text: 'Disgruntled employees are making calls to the partner organization.' },
      { label: 'D', text: 'The service provider has assigned multiple companies the same numbers' }
    ],
    answer: ['B'],
    explanation: "The scenario describes cadets making unsolicited calls using company phone numbers, validated by logs and not spoofed. This points to an internal system misuse or vulnerability. Weak security settings on the company's Session Initiation Protocol (SIP) server (which manages VoIP calls) are the most direct and technically plausible explanation. Such weaknesses could include default or easily guessable credentials, lack of proper authorization controls restricting cadets from making certain types of calls, or other misconfigurations that allow internal users to bypass intended calling restrictions.",
    incorrectOptionsExplanation: "· A. The executive team is traveling internationally and trying to avoid roaming charges: This option contradicts the detail that 'cadets' are making the calls, not the 'executive team.'\n· C. Disgruntled employees are making calls to the partner organization: While a possible motive for misuse, this option doesn't pinpoint the technical lapse allowing it. 'Weak SIP server security settings' provides a more specific reason how these unauthorized calls can occur.\n· D. The service provider has assigned multiple companies the same numbers: This would likely cause issues with incoming calls or misattribution of outbound calls, not explain targeted unsolicited calls by cadets appearing to originate correctly from their company's system.",
    isMultipleChoice: false
  },
  {
    id: 206,
    question: "An IT security team is concerned about the confidentiality of documents left unattended in MFPs. Which of the following should the security team do to mitigate the situation?",
    options: [
      { label: 'A', text: 'Educate users about the importance of paper shredder devices.' },
      { label: 'B', text: 'Deploy an authentication factor that requires in-person action before printing.' },
      { label: 'C', text: 'Install a software client on every computer authorized to use the MFPs.' },
      { label: 'D', text: 'Update the management software to utilize encryption.' }
    ],
    answer: ['B'],
    explanation: "Deploying an authentication factor that requires in-person action before printing (commonly known as 'pull printing' or 'secure print release'), directly mitigates the risk of confidential documents being left unattended. This method ensures that documents are only printed when the authorized user is physically present at the Multi-Function Printer (MFP) to authenticate and collect them.",
    incorrectOptionsExplanation: "· A. Educate users about the importance of paper shredder devices: Paper shredders are for secure disposal of documents after they have been retrieved, not preventing them from being left unattended.\n· C. Install a software client on every computer authorized to use the MFPs: While a software client might be part of a comprehensive print management solution, installing it alone does not inherently prevent documents from being left unattended. The critical mitigation is the authentication step at the device.\n· D. Update the management software to utilize encryption: Encryption protects data in transit to the MFP or at rest on its storage. It does not protect the physical confidentiality of a document that has been printed and left unattended.",
    isMultipleChoice: false
  },
  {
    id: 207,
    question: "A systems administrator is auditing all company servers to ensure they meet the minimum-security baseline. While auditing a Linux server, the systems administrator observes the /etc/shadow file has permissions beyond the baseline recommendation. Which of the following commands should the systems administrator use to resolve this issue?",
    options: [
      { label: 'A', text: 'chmod' },
      { label: 'B', text: 'grep' },
      { label: 'C', text: 'dd' },
      { label: 'D', text: 'passwd' }
    ],
    answer: ['A'],
    explanation: "The chmod command is the standard utility on Unix-like operating systems, including Linux, used to change the access permissions of file system objects (files and directories). The /etc/shadow file, which contains sensitive hashed user password information, must have its permissions strictly controlled. If its permissions are found to be too permissive, chmod is the appropriate tool to modify these permissions to the correct, more restrictive settings.",
    incorrectOptionsExplanation: "· B. grep: The grep command is used to search for patterns within files. It does not have the capability to alter file permissions.\n· C. dd: The dd command is primarily used for low-level copying and conversion of data. It's not the tool for modifying the permissions of an existing file.\n· D. passwd: The passwd command is used to change user passwords. It does not directly manage or set the overall file system permissions of the /etc/shadow file itself.",
    isMultipleChoice: false
  },
  {
    id: 208,
    question: "During a recent company safety stand-down, the cyber-awareness team gave a presentation on the importance of cyber hygiene. One topic the team covered was best practices for printing centers. Which of the following describes an attack method that relates to printing centers?",
    options: [
      { label: 'A', text: 'Whaling' },
      { label: 'B', text: 'Credential harvesting' },
      { label: 'C', text: 'Prepending' },
      { label: 'D', text: 'Dumpster diving' }
    ],
    answer: ['D'],
    explanation: "Dumpster diving is a physical information gathering technique where an attacker sifts through an organization's trash to find discarded documents, media, or equipment that may contain sensitive information. Printing centers, by their nature, produce a significant amount of paper waste, including potentially sensitive documents that were misprinted, are no longer needed, or were part of test runs. If not disposed of securely (e.g., through shredding), these documents become a prime target for dumpster divers seeking confidential data.",
    incorrectOptionsExplanation: "· A. Whaling: This is a type of phishing attack specifically targeting high-profile individuals. The attack method itself is social engineering via (usually) electronic communication, not an attack directly on the printing center's waste.\n· B. Credential harvesting: This involves collecting login credentials through various means (e.g., phishing). While a printing center's systems could be targets, the method itself is not uniquely related to the physical output and waste stream.\n· C. Prepending: This technique involves adding data to the beginning of a message or string (e.g., adding 'SAFE:' to an email subject). It's primarily associated with digital social engineering tactics.",
    isMultipleChoice: false
  },
  {
    id: 209,
    question: "A software developer would like to ensure the source code cannot be reverse engineered or debugged. Which of the following should the developer consider?",
    options: [
      { label: 'A', text: 'Version control' },
      { label: 'B', text: 'Obfuscation toolkit' },
      { label: 'C', text: 'Code reuse' },
      { label: 'D', text: 'Continuous integration' },
      { label: 'E', text: 'Stored procedures' }
    ],
    answer: ['B'],
    explanation: "Obfuscation is a technique used to make source code or compiled code more difficult to understand, reverse engineer, or debug. An obfuscation toolkit provides the necessary tools to implement various obfuscation methods, such as renaming variables, encrypting strings, or inserting dummy code, thereby protecting intellectual property and hindering malicious analysis.",
    incorrectOptionsExplanation: "· A. Version control: Systems like Git or SVN are used for tracking changes in source code and do not provide protection against reverse engineering.\n· C. Code reuse: This is a software development practice that doesn't inherently protect against reverse engineering; reused libraries might even be easier to identify.\n· D. Continuous integration: This focuses on the development pipeline, not on protecting the final code from reverse engineering.\n· E. Stored procedures: These are precompiled SQL statements stored in a database. They can hide business logic from direct client access but don't protect the application's overall source code.",
    isMultipleChoice: false
  },
  {
    id: 210,
    question: "Which of the following is a common source of unintentional corporate credential leakage in cloud environments?",
    options: [
      { label: 'A', text: 'Code repositories' },
      { label: 'B', text: 'Dark web' },
      { label: 'C', text: 'Threat feeds' },
      { label: 'D', text: 'State actors' },
      { label: 'E', text: 'Vulnerability databases' }
    ],
    answer: ['A'],
    explanation: "Code repositories are a common source of unintentional corporate credential leakage. Developers may inadvertently commit sensitive information, such as API keys, passwords, or private certificates, directly into source code or configuration files that are then pushed to version control systems like Git. If these repositories are public, or even private but improperly secured, these embedded credentials become exposed.",
    incorrectOptionsExplanation: "· B. Dark web: The dark web is a marketplace where already compromised credentials are often sold or shared, not the initial source of an unintentional leak.\n· C. Threat feeds: Threat feeds provide intelligence about known threats and compromised data. They report on leaks rather than being the origin of the leakage.\n· D. State actors: State actors are sophisticated threat entities that may actively seek to steal credentials; this represents an intentional act, not an unintentional leakage.\n· E. Vulnerability databases: These databases (e.g., CVE) list known software vulnerabilities. A vulnerability might be exploited to cause a credential leak, but the database itself is not the source.",
    isMultipleChoice: false
  },
  {
    id: 211,
    question: "A security audit of an organization revealed that most of the IT staff members have domain administrator credentials and do not change the passwords regularly. Which of the following solutions should the security team propose to resolve the findings in the most complete way?",
    options: [
      { label: 'A', text: 'Creating group policies to enforce password rotation on domain administrator credentials' },
      { label: 'B', text: 'Reviewing the domain administrator group, removing all unnecessary administrators, and rotating all passwords' },
      { label: 'C', text: "Integrating the domain administrator's group with an IdP and requiring SSO with MFA for all access" },
      { label: 'D', text: 'Securing domain administrator credentials in a PAM vault and controlling access with role-based access control' }
    ],
    answer: ['D'],
    explanation: "The audit findings indicate two primary issues: excessive privilege and poor credential hygiene. A Privileged Access Management (PAM) solution, coupled with Role-Based Access Control (RBAC), resolves these findings most completely. PAM systems are designed to securely store, manage, and audit the use of privileged credentials, often including automated password rotation. RBAC ensures that access to these credentials is granted based on defined roles, enforcing the principle of least privilege.",
    incorrectOptionsExplanation: "· A. Creating group policies to enforce password rotation: This only addresses password hygiene and fails to address the problem of excessive administrative privileges.\n· B. Reviewing the domain administrator group...: While a crucial initial step, this represents a point-in-time fix and lacks the ongoing, systematic control provided by a dedicated PAM solution.\n· C. Integrating with an IdP and requiring SSO with MFA: While this enhances authentication security, it doesn't directly resolve the issue of too many individuals possessing privileges nor does it inherently manage the credential lifecycle (e.g., rotation, vaulting).",
    isMultipleChoice: false
  },
  {
    id: 212,
    question: "A company wants to get alerts when others are researching and doing reconnaissance on the company. One approach would be to host a part of the infrastructure online with known vulnerabilities that would appear to be company assets. Which of the following describes this approach?",
    options: [
      { label: 'A', text: 'Watering hole' },
      { label: 'B', text: 'Bug bounty' },
      { label: 'C', text: 'DNS sinkhole' },
      { label: 'D', text: 'Honeypot' }
    ],
    answer: ['D'],
    explanation: "A honeypot is a security mechanism designed to detect, deflect, or counteract attempts at unauthorized use of information systems. It acts as a decoy, appearing to be a legitimate part of the site but is actually isolated and monitored. When an attacker interacts with the honeypot, alerts are generated, allowing the company to observe their reconnaissance techniques and tools.",
    incorrectOptionsExplanation: "· A. Watering hole: This is an attack strategy where an attacker compromises a website frequently visited by a target group to infect their systems. It's an offensive technique, not a defensive decoy.\n· B. Bug bounty: This is a program that rewards individuals for discovering and reporting vulnerabilities in an organization's actual systems, not for luring attackers to a decoy.\n· C. DNS sinkhole: This is a technique used to redirect traffic intended for malicious domains to a controlled server, often for analysis or to prevent malware communication. It's not primarily a decoy for reconnaissance.",
    isMultipleChoice: false
  },
  {
    id: 213,
    question: "Which of the following best describes why the SMS OTP authentication method is more risky to implement than the TOTP method?",
    options: [
      { label: 'A', text: 'The SMS OTP method requires an end user to have an active mobile telephone service and SIM card.' },
      { label: 'B', text: 'Generally, SMS OTP codes are valid for up to 15 minutes while the TOTP time frame is 30 to 60 seconds.' },
      { label: 'C', text: 'The SMS OTP is more likely to be intercepted and lead to unauthorized disclosure of the code than the TOTP method.' },
      { label: 'D', text: 'The algorithm used to generate an SMS OTP code is weaker than the one used to generate a TOTP code.' }
    ],
    answer: ['C'],
    explanation: "The primary reason SMS OTP is riskier than TOTP is its susceptibility to interception. SMS messages traverse mobile carrier networks, making them vulnerable to various attacks like SIM swapping, SS7 exploits, or malware on the end-user device that can intercept SMS messages. TOTP codes, conversely, are typically generated on a local device (e.g., an authenticator app) and are not transmitted over a network in the same vulnerable manner.",
    incorrectOptionsExplanation: "· A. The SMS OTP method requires an end user to have an active mobile telephone service and SIM card: While true, this describes a dependency or usability factor, not the primary security risk.\n· B. Generally, SMS OTP codes are valid for up to 15 minutes while the TOTP time frame is 30 to 60 seconds: While longer validity periods can increase risk, the fundamental risk difference lies in the delivery mechanism's susceptibility to interception.\n· D. The algorithm used to generate an SMS OTP code is weaker than the one used to generate a TOTP code: This is generally false. Both methods can use cryptographically strong algorithms. The primary weakness of SMS OTP lies in its delivery channel.",
    isMultipleChoice: false
  },
  {
    id: 214,
    question: "A website user is locked out of an account after clicking an email link and visiting a different website. Web server logs show the user's password was changed, even though the user did not change the password. Which of the following is the most likely cause?",
    options: [
      { label: 'A', text: 'Cross-site request forgery' },
      { label: 'B', text: 'Directory traversal' },
      { label: 'C', text: 'ARP poisoning' },
      { label: 'D', text: 'SQL injection' }
    ],
    answer: ['A'],
    explanation: "Cross-site request forgery (CSRF) is the most likely cause. CSRF attacks trick a victim's browser into sending a forged HTTP request, including the victim's session cookie, to a vulnerable web application. In this scenario, the user, already authenticated to the original website, clicked a link that led to a different website, which then covertly instructed the user's browser to send a request to the original website to change the password. Since the request appeared to come from the legitimate, authenticated user, the website processed it.",
    incorrectOptionsExplanation: "· B. Directory traversal: This attack allows attackers to access restricted directories. It doesn't directly explain an unauthorized password change initiated via an email link.\n· C. ARP poisoning: This is a technique used for man-in-the-middle attacks on a local area network, not to directly cause a password change on a web application via an email link.\n· D. SQL injection: While SQL injection could potentially be used to change a password, the described mechanism (clicking a link, visiting a different site, then password changed on original site) is characteristic of CSRF.",
    isMultipleChoice: false
  },
  {
    id: 215,
    question: "A security engineer is working to address the growing risks that shadow IT services are introducing to the organization. The organization has taken a cloud-first approach and does not have an on-premises IT infrastructure. Which of the following would best secure the organization?",
    options: [
      { label: 'A', text: 'Upgrading to a next-generation firewall' },
      { label: 'B', text: 'Deploying an appropriate in-line CASB solution' },
      { label: 'C', text: 'Conducting user training on software policies' },
      { label: 'D', text: 'Configuring double key encryption in SaaS platforms' }
    ],
    answer: ['B'],
    explanation: "A Cloud Access Security Broker (CASB) is specifically designed to give organizations visibility and control over the cloud services being used, including those that constitute shadow IT. An in-line CASB can monitor and enforce policies on cloud-bound traffic in real-time, identifying and mitigating risks associated with unapproved services. For a cloud-first organization, a CASB provides the most direct mechanism to discover, assess, and control the use of both sanctioned and unsanctioned cloud applications.",
    incorrectOptionsExplanation: "· A. Upgrading to a next-generation firewall (NGFW): In a fully cloud environment without on-premises infrastructure, an NGFW might not effectively address all avenues of shadow IT access as effectively as a CASB.\n· C. Conducting user training on software policies: User training is a valuable administrative control but doesn't actively discover or block the use of unapproved cloud services.\n· D. Configuring double key encryption in SaaS platforms: This enhances data security within sanctioned SaaS applications but does not address the identification, monitoring, or control of unsanctioned shadow IT services.",
    isMultipleChoice: false
  },
  {
    id: 216,
    question: "A cybersecurity incident response team at a large company receives notification that malware is present on several corporate desktops. No known Indicators of compromise have been found on the network. Which of the following should the team do first to secure the environment?",
    options: [
      { label: 'A', text: 'Contain the impacted hosts' },
      { label: 'B', text: 'Add the malware to the application blocklist.' },
      { label: 'C', text: 'Segment the core database server.' },
      { label: 'D', text: 'Implement firewall rules to block outbound beaconing' }
    ],
    answer: ['A'],
    explanation: "Upon discovering active malware on corporate desktops, the immediate priority is to prevent its spread and further malicious activity. According to NIST SP 800-61 Rev. 2, the containment phase follows detection and analysis. Containing the impacted hosts (Option A) is the most critical first step. This action isolates the infected systems, preventing the malware from propagating to other systems, communicating with command-and-control servers, or exfiltrating data.",
    incorrectOptionsExplanation: "· B. Add the malware to the application blocklist: This is an important step for eradication and future prevention but does not address the active malware already running on the compromised hosts. It's not the first action.\n· C. Segment the core database server: While valuable, it's a broader, proactive measure. The immediate threat originates from the infected desktops; containment is the priority.\n· D. Implement firewall rules to block outbound beaconing: This is a form of network containment. However, 'containing the impacted hosts' is a more comprehensive initial action, and without known IoCs, creating effective rules is difficult.",
    isMultipleChoice: false
  },
  {
    id: 217,
    question: "Which of the following is a reason why a forensic specialist would create a plan to preserve data after an incident and prioritize the sequence for performing forensic analysis?",
    options: [
      { label: 'A', text: 'Order of volatility' },
      { label: 'B', text: 'Preservation of event logs' },
      { label: 'C', text: 'Chain of custody' },
      { label: 'D', text: 'Compliance with legal hold' }
    ],
    answer: ['A'],
    explanation: "The order of volatility is a critical forensic principle dictating that data should be collected from the most volatile (likely to change or be lost) to the least volatile sources. This prioritization is essential for a forensic specialist when creating a data preservation plan to ensure that transient data, like RAM contents or active network connections, is captured before it disappears or is altered.",
    incorrectOptionsExplanation: "· B. Preservation of event logs: While crucial, it is a type of data to be collected. The reason for prioritizing its collection is often guided by its volatility.\n· C. Chain of custody: This refers to the meticulous documentation of evidence handling to ensure its integrity. It doesn't primarily dictate the sequence of data acquisition.\n· D. Compliance with legal hold: A legal hold is a directive to preserve relevant information. The methodology and sequence of that preservation are still guided by forensic best practices like the order of volatility.",
    isMultipleChoice: false
  },
  {
    id: 218,
    question: "A security analyst is creating a base for the server team to follow when hardening new devices for deployment. Which of the following best describes what the analyst is creating?",
    options: [
      { label: 'A', text: 'Change management procedure' },
      { label: 'B', text: 'Information security policy' },
      { label: 'C', text: 'Cybersecurity framework' },
      { label: 'D', text: 'Secure configuration guide' }
    ],
    answer: ['D'],
    explanation: "A secure configuration guide (often part of creating configuration baselines) provides specific instructions and parameters for hardening systems. The scenario describes the creation of a 'base' for the server team to follow when 'hardening new devices,' which directly aligns with the purpose of a secure configuration guide. Such guides detail the security settings and configurations to be applied to new devices before deployment.",
    incorrectOptionsExplanation: "· A. Change management procedure: This outlines the steps for managing changes to existing IT systems, not the initial setup and hardening of new devices.\n· B. Information security policy: This is a high-level document that defines an organization's overall security posture, not detailed hardening steps.\n· C. Cybersecurity framework: This is a set of standards and best practices to manage cybersecurity risk (e.g., NIST CSF). It provides a high-level structure, not a specific device hardening guide.",
    isMultipleChoice: false
  },
  {
    id: 219,
    question: "In which of the following scenarios is tokenization the best privacy technique to use?",
    options: [
      { label: 'A', text: 'Providing pseudo-anonymization for social media user accounts' },
      { label: 'B', text: 'Serving as a second factor for authentication requests' },
      { label: 'C', text: 'Enabling established customers to safely store credit card Information' },
      { label: 'D', text: 'Masking personal information inside databases by segmenting data' }
    ],
    answer: ['C'],
    explanation: "Tokenization is a process where a sensitive data element, such as a Primary Account Number (PAN) from a credit card, is replaced with a non-sensitive equivalent called a 'token.' This method is optimally used for enabling established customers to safely store credit card information for future transactions, as it significantly reduces the risk of exposing actual card details. The Payment Card Industry Data Security Standard (PCI DSS) strongly supports tokenization for this purpose.",
    incorrectOptionsExplanation: "· A. Providing pseudo-anonymization for social media user accounts: While tokenization can be used for pseudo-anonymization, protecting highly sensitive and regulated financial data like credit card numbers is a more critical and defining 'best' use case.\n· B. Serving as a second factor for authentication requests: This describes authentication tokens (e.g., hardware tokens or one-time passcodes for MFA), which are used to verify a user's identity, not to replace sensitive data.\n· D. Masking personal information inside databases by segmenting data: Tokenization is a data masking technique that works by substitution. 'Segmenting data' refers to partitioning data stores or networks, not the mechanism by which tokenization operates.",
    isMultipleChoice: false
  },
  {
    id: 220,
    question: "A security administrator recently reset local passwords and the following values were recorded in the system: [Table with usernames and MD5 hashes]. Which of the following is the security administrator most likely protecting against?",
    options: [
      { label: 'A', text: 'Account sharing' },
      { label: 'B', text: 'Weak password complexity' },
      { label: 'C', text: 'Pass-the-hash attacks' },
      { label: 'D', text: 'Password compromise' }
    ],
    answer: ['C'],
    explanation: "The security administrator is most likely protecting against password compromise by recording the MD5 password values after a reset. Recording the correct and current hashes of passwords allows an administrator to establish a baseline for integrity verification. While pass-the-hash (PtH) attacks (Option C) do involve the use of password hashes, the act of resetting the passwords invalidates old, potentially stolen hashes that could be used in such an attack. Recording the new hashes helps in detecting future compromises but the reset itself is a direct countermeasure to PtH attacks that would leverage previously compromised credentials.",
    incorrectOptionsExplanation: "· A. Account sharing: Recording password hashes does not directly prevent or detect users sharing their plaintext passwords.\n· B. Weak password complexity: Password complexity is enforced by policies at the time of password creation or reset. The hash itself is a result of the password; recording it does not protect against weak passwords.\n· D. Password compromise: While this is a broad and correct category, Pass-the-hash is a very specific type of attack that relies on compromised hashes. The act of resetting passwords directly invalidates previously stolen hashes, making it a key mitigation for PtH.",
    isMultipleChoice: false
  },
  {
    id: 221,
    question: "A vendor needs to remotely and securely transfer files from one server to another using the command line. Which of the following protocols should be implemented to allow for this type of access? (Select two).",
    options: [
      { label: 'A', text: 'SSH' },
      { label: 'B', text: 'SNMP' },
      { label: 'C', text: 'RDP' },
      { label: 'D', text: 'S/MIME' },
      { label: 'E', text: 'SMTP' },
      { label: 'F', text: 'SFTP' }
    ],
    answer: ['A', 'F'],
    explanation: "A. SSH (Secure Shell) is a cryptographic network protocol for operating network services securely over an unsecured network. It provides a secure channel for command-line access and is the foundation upon which other secure services, like SFTP, operate.\nF. SFTP (SSH File Transfer Protocol) is a network protocol that provides file access, file transfer, and file management functionalities over any reliable data stream, but it is almost exclusively used with the SSH protocol to provide security. It is typically accessed via a command-line interface.",
    incorrectOptionsExplanation: "· B. SNMP (Simple Network Management Protocol): This protocol is used for managing devices on IP networks, not for general file transfer.\n· C. RDP (Remote Desktop Protocol): This protocol provides users with a graphical interface to connect to another computer.\n· D. S/MIME (Secure/Multipurpose Internet Mail Extensions): This standard is for public key encryption and signing of email messages.\n· E. SMTP (Simple Mail Transfer Protocol): This protocol is used for sending and receiving email messages.",
    isMultipleChoice: true
  },
  {
    id: 222,
    question: "Various stakeholders are meeting to discuss their hypothetical roles and responsibilities in a specific situation, such as a security incident or major disaster. Which of the following best describes this meeting?",
    options: [
      { label: 'A', text: 'Penetration test' },
      { label: 'B', text: 'Continuity of operations planning' },
      { label: 'C', text: 'Tabletop exercise' },
      { label: 'D', text: 'Simulation' }
    ],
    answer: ['C'],
    explanation: "A tabletop exercise is a discussion-based session where personnel meet to discuss their roles and responsibilities and the responses to a particular hypothetical emergency situation or incident. A facilitator presents a scenario, and participants discuss how they would react, validating plans and identifying areas for improvement without simulating real-time actions. This directly matches the meeting described.",
    incorrectOptionsExplanation: "· A. Penetration test: This involves actively attempting to exploit vulnerabilities in a system, not a discussion of roles.\n· B. Continuity of operations planning: This refers to the broader, comprehensive process of developing strategies. The described meeting is an activity within this planning.\n· D. Simulation: While a tabletop exercise can be considered a type of simulation, 'simulation' often implies a more operational exercise. 'Tabletop exercise' is more specific to the described discussion-based activity.",
    isMultipleChoice: false
  },
  {
    id: 223,
    question: "An external vendor recently visited a company's headquarters for a presentation. Following the visit, a member of the hosting team found a file that the external vendor left behind on a server. The file contained detailed architecture information and code snippets. Which of the following data types best describes this file?",
    options: [
      { label: 'A', text: 'Government' },
      { label: 'B', text: 'Public' },
      { label: 'C', text: 'Proprietary' },
      { label: 'D', text: 'Critical' }
    ],
    answer: ['C'],
    explanation: "The file, containing 'detailed architecture information and code snippets' left by an external vendor, best fits the description of proprietary data. Proprietary data is information that an organization owns and seeks to keep confidential because it provides a competitive advantage or is otherwise sensitive. Disclosure of such information could harm their business interests.",
    incorrectOptionsExplanation: "· A. Government: This data type refers to information classified by or originating from a governmental entity. The scenario describes data from a commercial vendor.\n· B. Public: Public data is information that is openly available and has no restrictions on disclosure. The sensitive nature of the data means it is not intended for public release.\n· D. Critical: 'Critical' describes the level of impact or importance of the data to an organization's operations. While proprietary data is often critical, 'proprietary' is the specific data type denoting ownership and inherent confidentiality.",
    isMultipleChoice: false
  },
  {
    id: 224,
    question: "The security operations center is researching an event concerning a suspicious IP address. A security analyst looks at the following event logs and discovers that a significant portion of the user accounts have experienced failed log-in attempts when authenticating from the same IP address:\n184.168.131.241 - userA - failed authentication\n184.168.131.241 - userB - failed authentication\n184.168.131.241 - userC - failed authentication\nWhich of the following most likely describes the attack that took place?",
    options: [
      { label: 'A', text: 'Spraying' },
      { label: 'B', text: 'Brute-force' },
      { label: 'C', text: 'Dictionary' },
      { label: 'D', text: 'Rainbow table' }
    ],
    answer: ['A'],
    explanation: "The scenario describes failed login attempts from a single IP address across a 'significant portion of the user accounts.' The log snippet shows attempts for userA, userB, and userC. This pattern is most characteristic of a password spraying attack. In a password spraying attack, an attacker uses a small number of common passwords (or a single password) against many different user accounts. This technique aims to identify valid credentials while avoiding account lockouts.",
    incorrectOptionsExplanation: "· B. Brute-force: While password spraying is a type of brute-force attack, 'Spraying' is a more specific and accurate description of the observed activity (many accounts targeted with few passwords).\n· C. Dictionary: A dictionary attack refers to using a pre-arranged list of words or common passwords as guesses. While the spraying attack might use a dictionary, 'Spraying' describes the broader attack methodology of targeting multiple accounts.\n· D. Rainbow table: A rainbow table attack is an offline method used to crack password hashes that have already been compromised. It does not involve generating real-time failed login attempts.",
    isMultipleChoice: false
  },
  {
    id: 225,
    question: "Which of the following explains why an attacker cannot easily decrypt passwords using a rainbow table attack?",
    options: [
      { label: 'A', text: 'Digital signatures' },
      { label: 'B', text: 'Salting' },
      { label: 'C', text: 'Hashing' },
      { label: 'D', text: 'Perfect forward secrecy' }
    ],
    answer: ['B'],
    explanation: "Salting is a cryptographic technique that adds a unique, randomly generated string of characters (the 'salt') to each user's password before it is hashed. This process ensures that even if two users have identical passwords, their stored hash values will be different. Consequently, precomputed rainbow tables, which contain hashes of common passwords, become ineffective because an attacker would need to generate a separate rainbow table for each unique salt, a computationally prohibitive task.",
    incorrectOptionsExplanation: "· A. Digital signatures: These are used to verify the authenticity and integrity of digital messages or documents, not to protect stored passwords against rainbow table attacks.\n· C. Hashing: While passwords are hashed for storage, hashing alone without salting is vulnerable to rainbow table attacks, as these tables store precomputed hashes of common passwords.\n· D. Perfect forward secrecy: This is a property of secure communication protocols that ensures past session keys are not compromised if long-term secret keys are compromised. It's not directly related to password storage protection.",
    isMultipleChoice: false
  },
  {
    id: 226,
    question: "A company is currently utilizing usernames and passwords, and it wants to integrate an MFA method that is seamless, can integrate easily into a user's workflow, and can utilize employee-owned devices. Which of the following will meet these requirements?",
    options: [
      { label: 'A', text: 'Push notifications' },
      { label: 'B', text: 'Phone call' },
      { label: 'C', text: 'Smart card' },
      { label: 'D', text: 'Offline backup codes' }
    ],
    answer: ['A'],
    explanation: "Push notifications are an MFA method that meets the company's requirements effectively. They are seamless as they typically involve a simple tap to approve or deny a login attempt on a device the user already possesses and uses. This integrates easily into a user's workflow with minimal disruption. Crucially, push notifications utilize employee-owned devices, such as smartphones, where an authenticator app is installed.",
    incorrectOptionsExplanation: "· B. Phone call: While phone calls use employee-owned devices, they are generally considered less seamless than push notifications. Requiring a user to answer a call and press a key can be more disruptive.\n· C. Smart card: Smart cards typically require dedicated hardware (card readers) and the cards themselves are usually issued by the company, not employee-owned. This makes them less suitable for a purely employee-owned device model.\n· D. Offline backup codes: These codes are intended for account recovery when the primary MFA method is unavailable. They are not designed to be the primary, seamless MFA method.",
    isMultipleChoice: false
  },
  {
    id: 227,
    question: "A financial institution would like to store its customer data in the cloud but still allow the data to be accessed and manipulated while encrypted. Doing so would prevent the cloud service provider from being able to decipher the data due to its sensitivity. The financial institution is not concerned about computational overheads and slow speeds. Which of the following cryptographic techniques would best meet the requirement?",
    options: [
      { label: 'A', text: 'Asymmetric' },
      { label: 'B', text: 'Symmetric' },
      { label: 'C', text: 'Homomorphic' },
      { label: 'D', text: 'Ephemeral' }
    ],
    answer: ['C'],
    explanation: "Homomorphic encryption is a cryptographic technique that allows specific types of computations to be performed directly on encrypted data without needing to decrypt it first. The result of these computations, when decrypted, is the same as if the operations had been performed on the original plaintext. This directly addresses the financial institution's requirement to manipulate customer data while it remains encrypted in the cloud. The institution's lack of concern for computational overhead is relevant, as fully homomorphic encryption can be computationally intensive.",
    incorrectOptionsExplanation: "· A. Asymmetric: Standard asymmetric encryption schemes do not inherently allow for arbitrary computations on the ciphertext that yield meaningful encrypted results corresponding to operations on the plaintext.\n· B. Symmetric: Standard symmetric encryption algorithms are not designed to allow computations on encrypted data.\n· D. Ephemeral: Ephemeral refers to short-lived cryptographic keys, typically used in key exchange protocols to provide forward secrecy. It describes a property of keys, not a type of encryption.",
    isMultipleChoice: false
  },
  {
    id: 228,
    question: "The Chief Information Security Officer of an organization needs to ensure recovery from ransomware would likely occur within the organization's agreed-upon RPOs and RTOs. Which of the following backup scenarios would best ensure recovery?",
    options: [
      { label: 'A', text: 'Hourly differential backups stored on a local SAN array' },
      { label: 'B', text: 'Daily full backups stored on premises in magnetic offline media' },
      { label: 'C', text: 'Daily differential backups maintained by a third-party cloud provider' },
      { label: 'D', text: 'Weekly full backups with daily incremental stored on a NAS drive' }
    ],
    answer: ['B'],
    explanation: "To best ensure recovery from ransomware while meeting agreed-upon RPOs and RTOs, daily full backups stored on premises in magnetic offline media is the most suitable option. The offline nature of the storage provides an essential air gap, protecting the backups from being encrypted or deleted by ransomware that spreads across the network. Daily full backups simplify the restoration process, which can help in meeting RTOs, by providing a single, complete dataset.",
    incorrectOptionsExplanation: "· A. Hourly differential backups stored on a local SAN array: A local SAN is network-connected and thus highly vulnerable to ransomware encryption. The backups themselves are likely to be compromised.\n· C. Daily differential backups maintained by a third-party cloud provider: While cloud backups can be secure, this option doesn't explicitly guarantee protection like offline storage does. Differential backups also rely on a full backup, whose protection is unstated.\n· D. Weekly full backups with daily incremental stored on a NAS drive: A NAS drive is also network-connected, making it a prime target for ransomware. Restoring from a weekly full plus multiple daily incrementals can also be slower.",
    isMultipleChoice: false
  },
  {
    id: 229,
    question: "Which of the following best describe why a process would require a two-person integrity security control?",
    options: [
      { label: 'A', text: 'To increase the chance that the activity will be completed in half of the time the process would take only one user to complete' },
      { label: 'B', text: 'To permit two users from another department to observe the activity that is being performed by an authorized user' },
      { label: 'C', text: 'To reduce the risk that the procedures are performed incorrectly or by an unauthorized user' },
      { label: 'D', text: 'To allow one person to perform the activity while being recorded on the CCTV camera' }
    ],
    answer: ['C'],
    explanation: "A two-person integrity control, often referred to as two-person control or dual control, is implemented to minimize the risk of error or malicious activity during a critical process. By requiring the presence or participation of two authorized individuals, the control ensures that no single person can unilaterally perform the sensitive task. This reduces the likelihood of procedures being performed incorrectly and acts as a deterrent and preventative measure against actions by an unauthorized user or an authorized user attempting to misuse their privileges.",
    incorrectOptionsExplanation: "· A. Two-person controls typically increase the time and complexity of a process for the sake of security and integrity, rather than decrease it.\n· B. While observation can be a security measure, two-person integrity implies active participation or oversight by individuals responsible for the task's correct execution, not merely passive observation.\n· D. CCTV recording is a separate detective control (monitoring). Two-person integrity is a preventative control involving human interaction to ensure the task is done correctly and legitimately.",
    isMultipleChoice: false
  },
  {
    id: 230,
    question: "A company recently decided to allow employees to work remotely. The company wants to protect its data without using a VPN. Which of the following technologies should the company implement?",
    options: [
      { label: 'A', text: 'Secure web gateway' },
      { label: 'B', text: 'Virtual private cloud end point' },
      { label: 'C', text: 'Deep packet Inspection' },
      { label: 'D', text: 'Next-generation firewall' }
    ],
    answer: ['A'],
    explanation: "A Secure Web Gateway (SWG) is the most suitable technology for this scenario. SWGs are designed to protect users from web-based threats by filtering internet traffic, enforcing security policies, and inspecting content for data loss prevention. For remote employees not using a VPN, a cloud-delivered SWG can secure their access to web resources and protect company data by routing their internet-bound traffic through its security inspection engines.",
    incorrectOptionsExplanation: "· B. Virtual private cloud endpoint: This technology enables private connections from a VPC to specific cloud services (e.g., within AWS). It's not designed for securing general internet access for remote employees.\n· C. Deep packet Inspection: DPI is a method or technique used by various security tools. It's not a standalone technology that a company would implement to solve this specific problem.\n· D. Next-generation firewall: While an NGFW provides broad network security, an SWG is more specialized for securing web access, which is a primary concern for remote users accessing the internet directly. A cloud-based SWG is more directly applicable than a traditional NGFW for users not on a VPN.",
    isMultipleChoice: false
  },
  {
    id: 231,
    question: "In a rush to meet an end-of-year business goal, the IT department was told to implement a new business application. The security engineer reviews the attributes of the application and decides the time needed to perform due diligence is insufficient from a cybersecurity perspective. Which of the following best describes the security engineer's response?",
    options: [
      { label: 'A', text: 'Risk tolerance' },
      { label: 'B', text: 'Risk acceptance' },
      { label: 'C', text: 'Risk importance' },
      { label: 'D', text: 'Risk appetite' }
    ],
    answer: ['A'],
    explanation: "The security engineer's conclusion that 'the time needed to perform due diligence is insufficient' signifies an assessment that the proposed action will likely lead to a level of risk that exceeds what the organization deems acceptable. This aligns with the definition of risk tolerance, which is 'the acceptable level of variation in outcomes related to specific performance measures linked to achieving business objectives' (NIST SP 800-30 Rev. 1). The engineer is identifying that the deviation from standard security procedures would result in an unacceptable security posture.",
    incorrectOptionsExplanation: "· B. Risk acceptance: This is an explicit decision to assume a risk, typically made by management. The engineer is identifying an unacceptable level of risk, not making the decision to accept it.\n· C. Risk importance: This is not a standard, formally defined term in cybersecurity risk management frameworks.\n· D. Risk appetite: This refers to the broad amount and type of risk an organization is willing to pursue. Risk tolerance operationalizes risk appetite; the engineer's concern is about a specific deviation, making 'risk tolerance' a more precise fit.",
    isMultipleChoice: false
  },
  {
    id: 232,
    question: "An organization has too many variations of a single operating system and needs to standardize the arrangement prior to pushing the system image to users. Which of the following should the organization implement first?",
    options: [
      { label: 'A', text: 'Standard naming convention' },
      { label: 'B', text: 'Mashing' },
      { label: 'C', text: 'Network diagrams' },
      { label: 'D', text: 'Baseline configuration' }
    ],
    answer: ['D'],
    explanation: "A baseline configuration is a standardized level of security and performance for a system, which serves as a starting point for all systems of that type. Before pushing a system image, establishing a baseline configuration ensures that all deployed instances of the operating system are consistent, secure, and meet organizational standards. This directly addresses the need to 'standardize the arrangement' of the operating system.",
    incorrectOptionsExplanation: "· A. Standard naming convention: While important for management, a naming convention does not standardize the operating system's actual configuration.\n· B. Mashing: This term is not standard terminology for operating system configuration or standardization.\n· C. Network diagrams: These visually represent the network infrastructure and do not define or standardize the internal configuration of an operating system.",
    isMultipleChoice: false
  },
  {
    id: 233,
    question: "A growing company would like to enhance the ability of its security operations center to detect threats but reduce the amount of manual work required for the security analysts. Which of the following would best enable the reduction in manual work?",
    options: [
      { label: 'A', text: 'SOAR' },
      { label: 'B', text: 'SIEM' },
      { label: 'C', text: 'MDM' },
      { label: 'D', text: 'DLP' }
    ],
    answer: ['A'],
    explanation: "Security Orchestration, Automation and Response (SOAR) platforms are specifically designed to reduce manual work for security analysts by automating repetitive tasks and orchestrating workflows. SOAR integrates various security tools, enabling automated responses to predefined triggers and streamlining incident investigation and remediation. This directly addresses the company's goal of enhancing threat detection capabilities while minimizing manual effort.",
    incorrectOptionsExplanation: "· B. SIEM (Security Information and Event Management): While SIEM systems are crucial for detecting threats, they primarily generate alerts that often require manual investigation. They do not inherently automate the response to the extent SOAR does.\n· C. MDM (Mobile Device Management): MDM solutions focus on managing and securing mobile devices and do not address the broader need to reduce manual work for SOC analysts.\n· D. DLP (Data Loss Prevention): DLP tools aim to prevent sensitive data exfiltration. Their primary function isn't the automation of SOC workflows.",
    isMultipleChoice: false
  },
  {
    id: 234,
    question: "A systems administrator is redesigning how devices will perform network authentication. The following requirements need to be met:\n• An existing Internal certificate must be used.\n• Wired and wireless networks must be supported\n• Any unapproved device should be isolated in a quarantine subnet\n• Approved devices should be updated before accessing resources\nWhich of the following would best meet the requirements?",
    options: [
      { label: 'A', text: '802.1X' },
      { label: 'B', text: 'EAP' },
      { label: 'C', text: 'RADIUS' },
      { label: 'D', text: 'WPA2' }
    ],
    answer: ['A'],
    explanation: "802.1X is an IEEE standard for port-based Network Access Control (PNAC) that provides an authentication mechanism for devices connecting to both wired and wireless networks. It leverages the Extensible Authentication Protocol (EAP) to support various authentication methods, including certificate-based authentication (e.g., EAP-TLS), thus meeting the requirement for using an existing internal certificate. 802.1X, typically in conjunction with a RADIUS server, can enforce policies such as assigning unapproved devices to a quarantine subnet (VLAN) and enabling posture assessment or updates for approved devices.",
    incorrectOptionsExplanation: "· B. EAP (Extensible Authentication Protocol): EAP is an authentication framework, not a comprehensive network access control solution. It is used within protocols like 802.1X.\n· C. RADIUS (Remote Authentication Dial-In User Service): RADIUS is a centralized AAA protocol. While 802.1X often uses a RADIUS server, RADIUS itself is not the mechanism that controls access at the network edge.\n· D. WPA2 (Wi-Fi Protected Access 2): WPA2 is a security protocol specifically for securing wireless networks. It does not meet the requirement of supporting wired networks.",
    isMultipleChoice: false
  },
  {
    id: 235,
    question: "A company implemented an MDM policy to mitigate risks after repeated instances of employees losing company-provided mobile phones. In several cases, the lost phones were used maliciously to perform social engineering attacks against other employees. Which of the following MDM features should be configured to best address this issue? (Select two).",
    options: [
      { label: 'A', text: 'Screen locks' },
      { label: 'B', text: 'Remote wipe' },
      { label: 'C', text: 'Full device encryption' },
      { label: 'D', text: 'Push notifications' },
      { label: 'E', text: 'Application management' },
      { label: 'F', text: 'Geolocation' }
    ],
    answer: ['A', 'B'],
    explanation: "To mitigate risks from lost company mobile phones being used for social engineering, the two most effective Mobile Device Management (MDM) features are screen locks and remote wipe.\n1.Screen locks (e.g., PIN, password, biometrics) serve as the primary barrier, preventing immediate unauthorized access to the device's applications and data that could be exploited for social engineering.\n2.Remote wipe allows the company to erase all data on the lost or stolen device remotely, rendering it useless to a malicious actor and preventing any further attempts at social engineering or data compromise.",
    incorrectOptionsExplanation: "· C. Full device encryption: While crucial for protecting data at rest, it doesn't prevent active use for social engineering if the screen lock is bypassed.\n· D. Push notifications: These are for sending messages to devices and are not a primary security control to prevent malicious use.\n· E. Application management: This controls app installations and usage, which is less direct in preventing misuse of a lost device's core communication features.\n· F. Geolocation: This feature helps in tracking and potentially recovering a lost device but does not directly prevent its misuse if it falls into malicious hands.",
    isMultipleChoice: true
  },
  {
    id: 236,
    question: "A security analyst needs to propose a remediation plan for each item in a risk register. The item with the highest priority requires employees to have separate logins for SaaS solutions and different password complexity requirements for each solution. Which of the following implementation plans will most likely resolve this security issue?",
    options: [
      { label: 'A', text: 'Creating a unified password complexity standard' },
      { label: 'B', text: 'Integrating each SaaS solution with the Identity provider' },
      { label: 'C', text: 'Securing access to each SaaS by using a single wildcard certificate' },
      { label: 'D', text: 'Configuring geofencing on each SaaS solution' }
    ],
    answer: ['B'],
    explanation: "The core security issue involves employees managing separate logins and different password complexity requirements for multiple SaaS solutions. Integrating each SaaS solution with an Identity Provider (IdP) directly addresses this. An IdP enables Single Sign-On (SSO), allowing employees to use a single set of credentials to access multiple SaaS applications. Furthermore, the IdP can enforce a unified and robust authentication policy, including password complexity and MFA, centrally for all integrated applications.",
    incorrectOptionsExplanation: "· A. Creating a unified password complexity standard: This only addresses one part of the problem (password complexity) but doesn't resolve the issue of separate logins for each SaaS solution.\n· C. Securing access to each SaaS by using a single wildcard certificate: Wildcard certificates are for securing web communication (HTTPS) and are unrelated to user authentication or managing multiple logins.\n· D. Configuring geofencing on each SaaS solution: Geofencing restricts access based on geographic location and does not address the core problems of separate user logins or inconsistent password complexity requirements.",
    isMultipleChoice: false
  },
  {
    id: 237,
    question: "A security analyst finds a rogue device during a monthly audit of current endpoint assets that are connected to the network. The corporate network utilizes 802.1X for access control. To be allowed on the network, a device must have a Known hardware address, and a valid user name and password must be entered in a captive portal. The audit report shows a single MAC address associated with two distinct hostnames (PC-CA and WIN10). Which of the following is the most likely way a rogue device was allowed to connect?",
    options: [
      { label: 'A', text: 'A user performed a MAC cloning attack with a personal device.' },
      { label: 'B', text: 'A DHCP failure caused an incorrect IP address to be distributed' },
      { label: 'C', text: 'An administrator bypassed the security controls for testing.' },
      { label: 'D', text: 'DNS hijacking let an attacker intercept the captive portal traffic.' }
    ],
    answer: ['A'],
    explanation: "The audit report reveals two distinct hostnames associated with the same MAC address. This strongly indicates a MAC cloning attack. The device WIN10, likely a personal device, spoofed the MAC address of an authorized corporate device (PC-CA). This action allowed the rogue device to bypass the network's requirement for a 'Known hardware address.' Subsequently, the user successfully authenticated through the captive portal to gain network access.",
    incorrectOptionsExplanation: "· B. A DHCP failure: A DHCP failure relates to IP address assignment and would not explain how a device bypassed MAC address-based filtering.\n· C. An administrator bypassed the security controls: While possible, the evidence of a cloned MAC address points more directly to a MAC cloning attack rather than a general administrative bypass.\n· D. DNS hijacking: DNS hijacking is primarily a method to steal user credentials. It doesn't explain how the rogue device initially passed the 'Known hardware address' check.",
    isMultipleChoice: false
  },
  {
    id: 238,
    question: "Which of the following is the first step to take when creating an anomaly detection process?",
    options: [
      { label: 'A', text: 'Selecting events' },
      { label: 'B', text: 'Building a baseline' },
      { label: 'C', text: 'Selecting logging options' },
      { label: 'D', text: 'Creating an event log' }
    ],
    answer: ['B'],
    explanation: "The foundational step in an anomaly detection process is establishing a model of normal behavior, which is known as a baseline. This baseline represents the expected or legitimate state and activity of a system or network. It serves as the reference point against which new observations are compared to identify significant deviations (anomalies). Without a defined baseline, it's impossible to distinguish anomalous activities from normal ones.",
    incorrectOptionsExplanation: "· A. Selecting events: This is a preliminary step related to data acquisition and involves deciding which data points will be used to build the baseline, but it precedes the actual baseline construction.\n· C. Selecting logging options: This pertains to the configuration of data collection mechanisms. It is a prerequisite to gather the data required for building a baseline, not the first step of the analytical process.\n· D. Creating an event log: An event log is the repository of recorded data. The act of creating the log is part of data collection, which feeds into the process rather than being its first analytical step.",
    isMultipleChoice: false
  },
  {
    id: 239,
    question: "Which of the following is the final step of the modern incident response process?",
    options: [
      { label: 'A', text: 'Lessons learned' },
      { label: 'B', text: 'Eradication' },
      { label: 'C', text: 'Containment' },
      { label: 'D', text: 'Recovery' }
    ],
    answer: ['A'],
    explanation: "The final step in the incident response process is Lessons Learned, often referred to as 'Post-Incident Activity.' This phase involves analyzing the incident and the response to identify areas for improvement in security measures, incident handling procedures, and overall preparedness. The goal is to learn from the experience to better handle future incidents and potentially prevent them.",
    incorrectOptionsExplanation: "· B. Eradication: This phase focuses on removing the cause of the incident from affected systems. It occurs before recovery and lessons learned.\n· C. Containment: This phase aims to limit the scope and impact of an incident. It is an earlier step, occurring before eradication and recovery.\n· D. Recovery: This phase involves restoring systems to normal operation after an incident has been eradicated. It precedes the final lessons learned phase.",
    isMultipleChoice: false
  },
  {
    id: 240,
    question: "While investigating a recent security breach an analyst finds that an attacker gained access by SQL injection through a company website. Which of the following should the analyst recommend to the website developers to prevent this from reoccurring?",
    options: [
      { label: 'A', text: 'Secure cookies' },
      { label: 'B', text: 'Input sanitization' },
      { label: 'C', text: 'Code signing' },
      { label: 'D', text: 'Blocklist' }
    ],
    answer: ['B'],
    explanation: "Input sanitization is a primary defense mechanism against SQL injection. It involves cleaning and filtering user-supplied input to ensure that any malicious characters or SQL commands are removed or rendered harmless before the input is processed by the application or used in database queries. This directly addresses the root cause of SQLi by preventing an attacker's crafted input from altering the intended SQL query structure.",
    incorrectOptionsExplanation: "· A. Secure cookies: Secure cookies protect against session hijacking and cross-site scripting (XSS) attacks. They do not directly prevent SQL injection.\n· C. Code signing: Code signing ensures the authenticity and integrity of software code. It does not address vulnerabilities arising from how the code processes user input.\n· D. Blocklist (or Denylist): While blocklisting certain malicious input patterns can offer some protection, it is generally considered a weaker defense. Attackers can often find ways to bypass blocklists. Input sanitization is a more robust, proactive approach.",
    isMultipleChoice: false
  },
  {
    id: 241,
    question: "Which of the following environments utilizes a subset of customer data and is most likely to be used to assess the impacts of major system upgrades and demonstrate system features?",
    options: [
      { label: 'A', text: 'Development' },
      { label: 'B', text: 'Test' },
      { label: 'C', text: 'Production' },
      { label: 'D', text: 'Staging' }
    ],
    answer: ['D'],
    explanation: "A staging environment is specifically designed to be a near-replica of the production environment. It's used for final testing of code, updates, and major system upgrades before they are deployed to production. This environment often utilizes a sanitized or anonymized subset of actual customer data to ensure testing is realistic and to assess the impact of changes accurately. Its production-like nature makes it suitable for demonstrating new system features.",
    incorrectOptionsExplanation: "· A. Development: This environment is used by developers to build and unit test code. It typically uses mock data or very limited, synthetic datasets.\n· B. Test: While used for quality assurance, a test environment is primarily focused on verification and validation rather than a final pre-production impact assessment in a production-like replica.\n· C. Production: This is the live environment used by actual customers. It is not used for assessing impacts of major upgrades prior to their validation due to the risk of service disruption.",
    isMultipleChoice: false
  },
  {
    id: 242,
    question: "An organization recently started hosting a new service that customers access through a web portal. A security engineer needs to add to the existing security devices a new solution to protect this new service. Which of the following is the engineer most likely to deploy?",
    options: [
      { label: 'A', text: 'Layer 4 firewall' },
      { label: 'B', text: 'NGFW' },
      { label: 'C', text: 'WAF' },
      { label: 'D', text: 'UTM' }
    ],
    answer: ['C'],
    explanation: "A Web Application Firewall (WAF) is specifically designed to protect web applications, such as a customer-facing web portal, from web-based attacks. It inspects HTTP/S traffic for malicious patterns like SQL injection, cross-site scripting (XSS), and other common web exploits that target application vulnerabilities. Given the scenario of protecting a new web portal, a WAF is the most precise and directly applicable security solution.",
    incorrectOptionsExplanation: "· A. Layer 4 firewall: This type of firewall operates at the transport layer, filtering traffic based on IP addresses and port numbers. It does not inspect the actual content of web traffic and cannot protect against application-layer attacks.\n· B. NGFW (Next-Generation Firewall): While NGFWs offer advanced capabilities, a WAF provides specialized and more in-depth protection specifically for web applications.\n· D. UTM (Unified Threat Management): A UTM device consolidates multiple security functions. While it might include WAF functionality, the term 'WAF' refers to the specific technology directly designed for web application security.",
    isMultipleChoice: false
  },
  {
    id: 243,
    question: "An IT manager is putting together a documented plan describing how the organization will keep operating in the event of a global incident. Which of the following plans is the IT manager creating?",
    options: [
      { label: 'A', text: 'Business continuity' },
      { label: 'B', text: 'Physical security' },
      { label: 'C', text: 'Change management' },
      { label: 'D', text: 'Disaster recovery' }
    ],
    answer: ['A'],
    explanation: "A Business Continuity Plan (BCP) outlines procedures for an organization to maintain its critical business functions during and after a significant disruption, such as a 'global incident.' The key objective is to ensure the organization can 'keep operating.' This aligns precisely with the IT manager's task. A BCP is comprehensive, covering business processes, personnel, assets, and technology.",
    incorrectOptionsExplanation: "· B. Physical security plan: This plan focuses on protecting an organization's physical assets, not the overarching plan for maintaining operations.\n· C. Change management plan: This details the process for managing planned changes to IT systems, not for maintaining operations during an unforeseen incident.\n· D. Disaster Recovery Plan (DRP): A DRP primarily focuses on the recovery and restoration of IT infrastructure after a disaster. The question emphasizes the broader concept of the organization 'keeping operating,' which is the domain of business continuity.",
    isMultipleChoice: false
  },
  {
    id: 244,
    question: "Which of the following topics would most likely be included within an organization's SDLC?",
    options: [
      { label: 'A', text: 'Service-level agreements' },
      { label: 'B', text: 'Information security policy' },
      { label: 'C', text: 'Penetration testing methodology' },
      { label: 'D', text: 'Branch protection requirements' }
    ],
    answer: ['B'],
    explanation: "An organization's Software Development Life Cycle (SDLC) outlines the processes for developing software. Integrating security is crucial, and this is often guided by an information security policy. This policy provides the overarching principles and requirements for security that must be embedded throughout the SDLC phases, including secure design, coding, testing, and deployment.",
    incorrectOptionsExplanation: "· A. Service-level agreements (SLAs): SLAs define the level of service between a provider and a customer. While related to the software's operational phase, they are typically distinct from the SDLC process itself.\n· C. Penetration testing methodology: While penetration testing is a vital security activity often conducted during the SDLC, the methodology itself is a detailed procedure for how to conduct these tests, not a broad topic within the SDLC framework.\n· D. Branch protection requirements: This refers to specific rules within version control systems. It's a granular technical control rather than a foundational topic typically included in the overall SDLC documentation.",
    isMultipleChoice: false
  },
  {
    id: 245,
    question: "Which of the following describes the understanding between a company and a client about what will be provided and the accepted time needed to provide the company with the resources?",
    options: [
      { label: 'A', text: 'SLA' },
      { label: 'B', text: 'MOU' },
      { label: 'C', text: 'MOA' },
      { label: 'D', text: 'BPA' }
    ],
    answer: ['A'],
    explanation: "A Service Level Agreement (SLA) is a contract between a service provider (company) and a client that specifies, in measurable terms, what services the provider will furnish. Key components of an SLA include defining the scope of services ('what will be provided'), service quality, and performance metrics, which explicitly cover aspects like 'the accepted time needed to provide...resources.'",
    incorrectOptionsExplanation: "· B. MOU (Memorandum of Understanding): An MOU is a non-binding agreement that outlines the intentions of two or more parties. It is generally less specific and formal than an SLA.\n· C. MOA (Memorandum of Agreement): An MOA is similar to an MOU and describes a cooperative relationship. It typically doesn't detail specific service levels like an SLA.\n· D. BPA (Business Partners Agreement): A BPA outlines the terms and conditions of a partnership between distinct business entities, not specific service delivery terms to a client.",
    isMultipleChoice: false
  },
  {
    id: 246,
    question: "Which of the following describes an executive team that is meeting in a board room and testing the company's incident response plan?",
    options: [
      { label: 'A', text: 'Continuity of operations' },
      { label: 'B', text: 'Capacity planning' },
      { label: 'C', text: 'Tabletop exercise' },
      { label: 'D', text: 'Parallel processing' }
    ],
    answer: ['C'],
    explanation: "A tabletop exercise involves key personnel discussing simulated emergency scenarios in an informal, stress-free environment, often in a meeting room like a boardroom. Participants review and discuss their roles, responsibilities, and the procedures outlined in the incident response plan without performing actual hands-on actions. This method is designed to identify plan weaknesses and familiarize team members, including executives, with the plan.",
    incorrectOptionsExplanation: "· A. Continuity of operations (COOP): COOP refers to an organization's ability to maintain its essential functions during a disruption. The described activity is a specific type of test for a plan, not the entirety of COOP.\n· B. Capacity planning: This is the process of determining and ensuring that the organization has sufficient IT resources to meet current and future demands.\n· D. Parallel processing: This is a mode of computer operation and is irrelevant to incident response plan testing methodologies.",
    isMultipleChoice: false
  },
  {
    id: 247,
    question: "Which of the following methods would most likely be used to identify legacy systems?",
    options: [
      { label: 'A', text: 'Bug bounty program' },
      { label: 'B', text: 'Vulnerability scan' },
      { label: 'C', text: 'Package monitoring' },
      { label: 'D', text: 'Dynamic analysis' }
    ],
    answer: ['B'],
    explanation: "Legacy systems are often characterized by outdated software, unpatched vulnerabilities, and deprecated components. Vulnerability scanning is a method that actively probes systems to identify such characteristics. According to NIST SP 800-115, vulnerability scanning is used to 'identify outdated software versions, missing patches, and misconfigurations.' These findings are strong indicators that a system may be legacy.",
    incorrectOptionsExplanation: "· A. Bug bounty program: This approach focuses on discovering specific security vulnerabilities, not on the systematic identification of systems as 'legacy'.\n· C. Package monitoring: While monitoring network packages can indicate legacy components, vulnerability scanning is generally more comprehensive for identifying an entire system as legacy.\n· D. Dynamic analysis: This method tests software by executing it to observe its behavior. It's not primarily a method for classifying a system as 'legacy'.",
    isMultipleChoice: false
  },
  {
    id: 248,
    question: "Which of the following considerations is the most important for an organization to evaluate as it establishes and maintains a data privacy program?",
    options: [
      { label: 'A', text: 'Reporting structure for the data privacy officer' },
      { label: 'B', text: 'Request process for data subject access' },
      { label: 'C', text: 'Role as controller or processor' },
      { label: 'D', text: 'Physical location of the company' }
    ],
    answer: ['C'],
    explanation: "Determining whether an organization acts as a data controller or a data processor is the most important foundational consideration when establishing and maintaining a data privacy program. This distinction dictates the scope of legal responsibilities, accountability, and specific obligations under applicable data protection laws (such as GDPR, CCPA/CPRA).",
    incorrectOptionsExplanation: "· A. Reporting structure for the data privacy officer: While important for governance, the DPO's specific tasks are heavily influenced by the organization's primary role as a controller or processor.\n· B. Request process for data subject access: This is a critical component, but the primary responsibility for handling these requests typically falls on the data controller.\n· D. Physical location of the company: While location can influence which laws seem applicable, many privacy regulations have extraterritorial scope. The role as controller or processor defines the specific duties under those laws.",
    isMultipleChoice: false
  },
  {
    id: 249,
    question: "Client files can only be accessed by employees who need to know the information and have specified roles in the company. Which of the following best describes this security concept?",
    options: [
      { label: 'A', text: 'Availability' },
      { label: 'B', text: 'Confidentiality' },
      { label: 'C', text: 'Integrity' },
      { label: 'D', text: 'Non-repudiation' }
    ],
    answer: ['B'],
    explanation: "Confidentiality, in the context of information security, is the principle of preserving authorized restrictions on information access and disclosure. The scenario described, where client files can only be accessed by employees who 'need to know' and have 'specified roles,' directly aligns with the definition of confidentiality. These measures are implemented to prevent unauthorized disclosure of sensitive information.",
    incorrectOptionsExplanation: "· A. Availability: This ensures timely and reliable access to and use of information by authorized users. The question focuses on restricting access, not ensuring its availability.\n· C. Integrity: This guards against improper information modification or destruction. The question's focus is on controlling access to information, not its accuracy.\n· D. Non-repudiation: This provides proof of the origin, delivery, or an action related to information. The scenario is about access control, not proving actions.",
    isMultipleChoice: false
  },
  {
    id: 250,
    question: "A user would like to install software and features that are not available with a smartphone's default software. Which of the following would allow the user to install unauthorized software and enable new features?",
    options: [
      { label: 'A', text: 'SOU' },
      { label: 'B', text: 'Cross-site scripting' },
      { label: 'C', text: 'Jailbreaking' },
      { label: 'D', text: 'Side loading' }
    ],
    answer: ['C'],
    explanation: "Jailbreaking is the process of removing software restrictions imposed by the operating system vendor on a smartphone (typically iOS, with 'rooting' being the analogous term for Android). This allows users to gain privileged control (root access) over the device's operating system. Consequently, users can install applications from sources other than the official app store ('unauthorized software') and modify the system to enable new features.",
    incorrectOptionsExplanation: "· A. SOU: This is not a standard or widely recognized acronym in the context of mobile operating system modification.\n· B. Cross-site scripting (XSS): This is a type of injection vulnerability typically found in web applications, unrelated to installing unauthorized software on a smartphone.\n· D. Sideloading: This is the process of installing an application package directly onto a mobile device, bypassing the official app store. While this allows installing 'unauthorized software,' it doesn't inherently 'enable new features' at the OS level that require elevated privileges. Jailbreaking is the more fundamental process that enables these broader capabilities.",
    isMultipleChoice: false
  }
];
