import type { Question } from '../../types';

export const questions: Question[] = [
    {
      id: 401,
      question: "Which of the following consequences would a retail chain most likely face from customers in the event the retailer is non-compliant with PCI DSS?",
      options: [
        { label: 'A', text: 'Contractual impacts' },
        { label: 'B', text: 'Sanctions' },
        { label: 'C', text: 'Fines' },
        { label: 'D', text: 'Reputational damage' }
      ],
      answer: ['D'],
      explanation: "Reputational damage is the most likely consequence a retail chain would face from customers due to PCI DSS non-compliance. Non-compliance, especially if it leads to a data breach, erodes customer trust and confidence in the retailer's ability to protect their sensitive payment information. This loss of trust can lead to customers choosing to shop elsewhere, directly impacting the retailer's reputation and business. The PCI Security Standards Council (SSC) itself highlights that news of a data compromise can cause irreparable damage to a company’s image, leading to a decline in customer trust and loyalty.",
      incorrectOptionsExplanation: "· A. Contractual impacts: These primarily refer to breaches of agreements between the retailer and entities like acquiring banks or payment processors, not directly impacts from customers.\n· B. Sanctions: These are penalties typically imposed by payment brands (like Visa, Mastercard) or regulatory bodies, not by customers.\n· C. Fines: These are monetary penalties levied by payment brands or acquiring banks against the non-compliant retailer, not by customers.",
      isMultipleChoice: false
    },
    {
      id: 402,
      question: "A security officer is implementing a security awareness program and is placing security-themed posters around the building and is assigning online user training. Which of the following would the security officer most likely implement?",
      options: [
        { label: 'A', text: 'Password policy' },
        { label: 'B', text: 'Access badges' },
        { label: 'C', text: 'Phishing campaign' },
        { label: 'D', text: 'Risk assessment' }
      ],
      answer: ['C'],
      explanation: "A security officer implementing a security awareness program that already includes posters and online user training would most likely implement a phishing campaign. Phishing campaigns are a common and effective method to train users to recognize and respond to phishing attempts, thereby enhancing security awareness. These simulated attacks provide practical reinforcement of the concepts covered in online training and highlighted by awareness posters. According to NIST SP 800-50, exercises and simulations, such as mock phishing attacks, are recognized methods for delivering security awareness and training.",
      incorrectOptionsExplanation: "· A. Password policy: A password policy is a set of rules. While a security awareness program would make users aware of this policy, implementing the policy itself is an administrative action, not an awareness training activity like posters or phishing simulations.\n· B. Access badges: Implementing access badges is a physical security control measure. An awareness program might train users on the proper use of badges, but the deployment of the badge system is not an awareness activity itself.\n· D. Risk assessment: A risk assessment is a foundational process used to identify security risks and inform the development of security programs, including awareness training. It typically precedes or guides the awareness program, rather than being an activity implemented within it.",
      isMultipleChoice: false
    },
    {
      id: 403,
      question: "The executive management team is mandating the company develop a disaster recovery plan. The cost must be kept to a minimum, and the money to fund additional internet connections is not available. Which of the following would be the best option?",
      options: [
        { label: 'A', text: 'Hot site' },
        { label: 'B', text: 'Cold site' },
        { label: 'C', text: 'Failover site' },
        { label: 'D', text: 'Warm site' }
      ],
      answer: ['B'],
      explanation: "A cold site is the most cost-effective disaster recovery option. It typically consists of a facility with basic infrastructure (power, HVAC) but without pre-installed IT equipment or data. This aligns with the mandate to keep costs to a minimum and the lack of funding for additional internet connections, which would be required for more readily available sites. Restoration at a cold site takes the longest but incurs the lowest ongoing operational expense.",
      incorrectOptionsExplanation: "· A. Hot site: This is the most expensive option, providing a fully operational duplicate of the primary site with real-time data synchronization and readily available internet connections, directly contradicting the cost and connectivity constraints.\n· C. Failover site: This term is often used synonymously with a hot site or describes the capability to switch to a redundant system. It implies high availability and connectivity, which are not compatible with minimal cost and no budget for extra internet.\n· D. Warm site: A warm site offers a compromise between a hot and cold site, with some pre-installed hardware and connectivity, making it more expensive than a cold site and likely requiring some form of internet connection.",
      isMultipleChoice: false
    },
    {
      id: 404,
      question: "A security analyst has determined that a security breach would have a financial impact of $15,000 and is expected to occur twice within a three-year period. Which of the following is the ALE for this risk?",
      options: [
        { label: 'A', text: '$7,500' },
        { label: 'B', text: '$10,000' },
        { label: 'C', text: '$15,000' },
        { label: 'D', text: '$30,000' }
      ],
      answer: ['B'],
      explanation: "The Annualized Loss Expectancy (ALE) is calculated using the formula: ALE = SLE × ARO.\n· The Single Loss Expectancy (SLE) is given as $15,000.\n· The Annualized Rate of Occurrence (ARO) is the frequency of the event on an annual basis. The breach is expected to occur twice within a three-year period, so the ARO is 2 occurrences / 3 years = 2/3 occurrences/year.\nTherefore, ALE = $15,000 × (2/3) = $30,000 / 3 = $10,000.",
      incorrectOptionsExplanation: "· A. $7,500: This value would result if the ARO were 0.5 (i.e., one occurrence every two years: $15,000 × 0.5 = 7,500). The problem states two occurrences in three years (ARO ≈ 0.67).\n· C. $15,000: This is the Single Loss Expectancy (SLE). It would be the ALE only if the ARO was 1 (i.e., the breach occurred exactly once per year).\n· D. $30,000: This figure represents the total expected loss over the three-year period (15,000 × 2 occurrences). The ALE is an annualized figure, not the total loss over multiple years.",
      isMultipleChoice: false
    },
    {
      id: 405,
      question: "Which of the following would most likely be deployed to obtain and analyze attacker activity and techniques?",
      options: [
        { label: 'A', text: 'Firewall' },
        { label: 'B', text: 'IDS' },
        { label: 'C', text: 'Honeypot' },
        { label: 'D', text: 'Layer 3 switch' }
      ],
      answer: ['C'],
      explanation: "A honeypot is a security resource designed to be probed, attacked, and compromised by adversaries. Its primary purpose is to gain information about attackers, their motives, and the attack methodologies they employ. By appearing as a legitimate and vulnerable target, a honeypot can attract and divert attackers from actual production systems, allowing security professionals to observe and analyze their activities in a controlled environment. This direct observation and collection of attacker interactions are crucial for understanding emerging threats and techniques.",
      incorrectOptionsExplanation: "· A. Firewall: A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Its primary function is to prevent unauthorized access, not to actively obtain and analyze attacker techniques in depth.\n· B. IDS (Intrusion Detection System): An IDS monitors network or system activities for malicious activities or policy violations and produces reports. While it detects attacks, its primary role is detection and alerting, rather than being a system intentionally deployed to be compromised for detailed attacker analysis.\n· D. Layer 3 switch: A Layer 3 switch is a network hardware device that routes traffic based on IP addresses. While it plays a crucial role in network infrastructure, it is not a security tool designed for obtaining and analyzing attacker activity or techniques.",
      isMultipleChoice: false
    },
    {
      id: 406,
      question: "A security analyst is evaluating a SaaS application that the human resources department would like to implement. The analyst requests a SOC 2 report from the SaaS vendor. Which of the following processes is the analyst most likely conducting?",
      options: [
        { label: 'A', text: 'Internal audit' },
        { label: 'B', text: 'Penetration testing' },
        { label: 'C', text: 'Attestation' },
        { label: 'D', text: 'Due diligence' }
      ],
      answer: ['D'],
      explanation: "Due diligence in cybersecurity and vendor management involves an investigation or audit of a potential investment or product to confirm all facts. Requesting a SOC 2 report is a common step in the due diligence process when evaluating a third-party vendor's security posture and compliance. This report provides assurance about the service organization's controls relevant to security, availability, processing integrity, confidentiality, or privacy.",
      incorrectOptionsExplanation: "· A. Internal audit: This is a self-assessment of an organization's own internal controls and processes, not typically an evaluation of an external vendor.\n· B. Penetration testing: This is a technical security exercise designed to find and exploit vulnerabilities in a system. While it can be part of due diligence, requesting a SOC 2 report is a distinct compliance and assurance activity.\n· C. Attestation: A SOC 2 report is a form of attestation, where an independent auditor attests to the vendor's controls. However, the analyst is conducting the due diligence process by requesting and reviewing this attestation, not performing the attestation itself.",
      isMultipleChoice: false
    },
    {
      id: 407,
      question: "A company processes and stores sensitive data on its own systems. Which of the following steps should the company take first to ensure compliance with privacy regulations?",
      options: [
        { label: 'A', text: 'Implement access controls and encryption.' },
        { label: 'B', text: 'Develop and provide training on data protection policies.' },
        { label: 'C', text: 'Create incident response and disaster recovery plans.' },
        { label: 'D', text: 'Purchase and install security software.' }
      ],
      answer: ['B'],
      explanation: "To ensure compliance with privacy regulations, a company must first establish the rules and ensure its personnel understand them. Developing data protection policies defines the organization's approach to handling sensitive data in accordance with legal requirements. Providing training on these policies ensures that employees are aware of their responsibilities and how to comply. These foundational steps guide subsequent actions, such as implementing technical controls or specific procedural plans. The NIST Privacy Framework emphasizes establishing governance, which includes creating and communicating policies, as a core component of managing privacy risks.",
      incorrectOptionsExplanation: "· A. Implement access controls and encryption: These are technical measures. While crucial for data protection, they should be implemented based on defined policies and risk assessments, not as an initial standalone step for compliance.\n· C. Create incident response and disaster recovery plans: These plans address how to react to adverse events. Their development is typically informed by overarching data protection policies that define what assets need protection and what constitutes a breach.\n· D. Purchase and install security software: This is a specific technical implementation. Decisions on acquiring and deploying software should align with an organization's established security and privacy policies and identified needs, rather than being the first step.",
      isMultipleChoice: false
    },
    {
      id: 408,
      question: "An IT administrator needs to ensure data retention standards are implemented on an enterprise application. Which of the following describes the administrator's role?",
      options: [
        { label: 'A', text: 'Processor' },
        { label: 'B', text: 'Custodian' },
        { label: 'C', text: 'Privacy officer' },
        { label: 'D', text: 'Owner' }
      ],
      answer: ['B'],
      explanation: "An IT administrator, when implementing data retention standards, is acting as a data custodian. The custodian is responsible for the technical environment and the management of data according to requirements set by the data owner or policies. This includes tasks like backup, recovery, and adherence to data retention policies.",
      incorrectOptionsExplanation: "· A. Processor: A data processor, often defined in privacy regulations like GDPR, processes personal data on behalf of a controller. While an IT admin might interact with systems that process data, their role in implementing retention standards is more specifically custodial.\n· C. Privacy Officer: A Privacy Officer is primarily responsible for an organization's privacy program, including policy development and compliance oversight, rather than the direct technical implementation of data retention on specific systems.\n· D. Owner: The data owner is typically a business executive or manager who has ultimate responsibility for the data, including defining access and retention requirements, but not usually the hands-on implementation.",
      isMultipleChoice: false
    },
    {
      id: 409,
      question: "Executives at a company are concerned about employees accessing systems and information about sensitive company projects unrelated to the employees' normal job duties. Which of the following enterprise security capabilities will the security team most likely deploy to detect that activity?",
      options: [
        { label: 'A', text: 'UBA' },
        { label: 'B', text: 'EDR' },
        { label: 'C', text: 'NAC' },
        { label: 'D', text: 'DLP' }
      ],
      answer: ['A'],
      explanation: "User Behavior Analytics (UBA), often part of User and Entity Behavior Analytics (UEBA), is specifically designed to detect anomalous activity by profiling normal user behavior and identifying deviations. Accessing systems and information unrelated to an employee's normal job duties constitutes such a deviation. UBA systems can analyze logs and user activities across various platforms to flag such suspicious behavior, making it the most direct capability to address the executives' concerns.",
      incorrectOptionsExplanation: "· B. EDR (Endpoint Detection and Response): EDR solutions focus on detecting and investigating threats at the endpoint level, such as malware or exploits. While valuable, EDR is not primarily designed to monitor for authorized users accessing unauthorized internal resources based on job roles.\n· C. NAC (Network Access Control): NAC solutions enforce policies for devices connecting to a network, determining whether a device is authorized and meets security criteria. It primarily controls access to the network itself, not what an already authenticated user does once on the network.\n· D. DLP (Data Loss Prevention): DLP technologies focus on identifying and preventing sensitive data from leaving the organization's control. While it might flag an employee trying to exfiltrate data, its core function is not to detect access to systems unrelated to job duties if no data exfiltration is attempted.",
      isMultipleChoice: false
    },
    {
      id: 410,
      question: "A security analyst is reviewing logs to identify the destination of command-and- control traffic originating from a compromised device within the on-premises network. Which of the following is the best log to review?",
      options: [
        { label: 'A', text: 'IDS' },
        { label: 'B', text: 'Antivirus' },
        { label: 'C', text: 'Firewall' },
        { label: 'D', text: 'Application' }
      ],
      answer: ['C'],
      explanation: "Firewall logs are the best source for identifying the destination of command-and- control (C2) traffic originating from a compromised device within an on-premises network. Firewalls are typically deployed at network boundaries and are designed to monitor and log all inbound and outbound network connections. These logs explicitly record details such as source IP address, destination IP address, destination port, and protocol for each traffic flow that passes through or is blocked by the firewall. This information is essential for tracing the external destination of C2 communications.",
      incorrectOptionsExplanation: "· A. IDS (Intrusion Detection System): IDS logs focus on identifying suspicious patterns or known malicious signatures. While an IDS might detect C2 traffic and log the destination, it's not its primary role to provide a comprehensive record of all outbound connection destinations, which a firewall log does.\n· B. Antivirus: Antivirus logs are host-based and primarily record information about detected malware, files scanned, and actions taken on the local device. They generally do not provide detailed logs of all outbound network destinations.\n· D. Application: Application logs record events specific to the functioning of a particular application. They would not offer a centralized or comprehensive view of all network traffic originating from a compromised device, especially if the C2 traffic is initiated by malware operating at a lower system level.",
      isMultipleChoice: false
    }
  ];
