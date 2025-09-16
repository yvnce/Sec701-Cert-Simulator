import type { Question } from '../../types';

export const questions: Question[] = [
    {
      id: 351,
      question: "During a recent log review, an analyst discovers evidence of successful injection attacks. Which of the following will best address this issue?",
      options: [
        { label: 'A', text: 'Authentication' },
        { label: 'B', text: 'Secure cookies' },
        { label: 'C', text: 'Static code analysis' },
        { label: 'D', text: 'Input validation' }
      ],
      answer: ['D'],
      explanation: "Injection attacks, such as SQL injection or Cross-Site Scripting (XSS), occur when untrusted data is sent to an interpreter as part of a command or query. Input validation is the process of ensuring that application inputs are well-formed, expected, and safe before they are processed. This directly addresses the root cause of injection attacks by preventing malicious data from being executed. Properly implemented input validation can filter, sanitize, or reject harmful inputs, thereby mitigating the risk of successful injection.",
      incorrectOptionsExplanation: "· A. Authentication: Authentication verifies the identity of a user but does not prevent an authenticated user from submitting malicious input that could lead to an injection attack if inputs are not validated.\n· B. Secure cookies: Secure cookie attributes (e.g., HttpOnly, Secure) protect cookie data from client-side script access or transmission over unencrypted channels, primarily addressing session hijacking or information disclosure, not general input injection vulnerabilities.\n· C. Static code analysis: Static code analysis (SAST) is a valuable tool for identifying potential injection vulnerabilities in source code during development. However, it is a detection mechanism, not a direct runtime defense that addresses an ongoing successful attack. The actual addressing involves fixing the code, often by implementing input validation.",
      isMultipleChoice: false
    },
    {
      id: 352,
      question: "The physical security team at a company receives reports that employees are not displaying their badges. The team also observes employees tailgating at controlled entrances. Which of the following topics will the security team most likely emphasize in upcoming security training?",
      options: [
        { label: 'A', text: 'Social engineering' },
        { label: 'B', text: 'Situational awareness' },
        { label: 'C', text: 'Phishing' },
        { label: 'D', text: 'Acceptable use policy' }
      ],
      answer: ['A'],
      explanation: "The reported issues, employees not displaying badges and tailgating, are significant physical security vulnerabilities. Training on 'Social Engineering' directly addresses these concerns. Tailgating is a classic social engineering technique to gain unauthorized physical access. Similarly, employees not wearing badges can facilitate impersonation, another social engineering tactic, or indicate a general disregard for security protocols that social engineers can exploit. Official guidance, such as from NIST, explicitly includes tailgating and impersonation under the umbrella of social engineering awareness and training topics. This makes it the most emphasized topic to address the observed behaviors.",
      incorrectOptionsExplanation: "· B. Situational awareness: While important for recognizing and preventing security breaches, including those exploited by social engineering, 'Situational Awareness' is often a broader skill or outcome fostered by specific training modules like 'Social Engineering.' It's less of a direct training topic title covering the described issues compared to 'Social Engineering.'\n· C. Phishing: Phishing is a form of social engineering that primarily occurs via electronic means (e.g., email) to obtain sensitive information or deploy malware. It is not the most direct topic to address physical tailgating and badge display issues.\n· D. Acceptable Use Policy (AUP): An AUP outlines rules for using company assets. While policies regarding badges and preventing tailgating would be part of or referenced by an AUP or physical security policy, training typically needs to go beyond merely stating policy to be effective, often by explaining the threats (like social engineering) that necessitate these policies.",
      isMultipleChoice: false
    },
    {
      id: 353,
      question: "Which of the following is a benefit of an RTO when conducting a business impact analysis?",
      options: [
        { label: 'A', text: 'It determines the likelihood of an incident and its cost.' },
        { label: 'B', text: 'It determines the roles and responsibilities for incident responders.' },
        { label: 'C', text: 'It determines the state that systems should be restored to following an incident.' },
        { label: 'D', text: 'It determines how long an organization can tolerate downtime after an incident.' }
      ],
      answer: ['D'],
      explanation: "The Recovery Time Objective (RTO), a critical component defined during a Business Impact Analysis (BIA), specifies the maximum tolerable duration of time that a system, service, or function can be down after a failure or disaster occurs. It essentially answers the question: 'How quickly must we recover?' The BIA process involves identifying critical business functions and the potential impacts of their disruption, which then informs the setting of the RTO. This directly addresses how long an organization can withstand the unavailability of a particular process or system before unacceptable consequences arise.",
      incorrectOptionsExplanation: "· A. It determines the likelihood of an incident and its cost. This is more aligned with a risk assessment and the broader BIA process which analyzes potential impacts (costs), not specifically the RTO. The RTO is a target set based on impact, not a determinant of likelihood or total cost.\n· B. It determines the roles and responsibilities for incident responders. These are typically defined in an Incident Response Plan or Business Continuity Plan, not directly by the RTO. The RTO influences recovery priorities but doesn't detail roles.\n· C. It determines the state that systems should be restored to following an incident. This describes the Recovery Point Objective (RPO), which defines the acceptable amount of data loss measured in time (e.g., data must be recoverable to a state no more than 1 hour old).",
      isMultipleChoice: false
    },
    {
      id: 354,
      question: "A company has yearly engagements with a service provider. The general terms and conditions are the same for all engagements. The company wants to simplify the process and revisit the general terms every three years. Which of the following documents would provide the best way to set the general terms?",
      options: [
        { label: 'A', text: 'MSA' },
        { label: 'B', text: 'NDA' },
        { label: 'C', text: 'MOU' },
        { label: 'D', text: 'SLA' }
      ],
      answer: ['A'],
      explanation: "A Master Service Agreement (MSA) is the most appropriate document for setting general terms and conditions for ongoing, multiple engagements with a service provider. An MSA establishes the foundational legal and commercial terms that govern the overall relationship and future transactions between the parties. Specific details for each individual engagement or project can then be outlined in separate, simpler documents like Statements of Work (SOWs) or service orders, which incorporate the terms of the MSA. This approach simplifies the process for recurring engagements as the core terms do not need to be renegotiated each time.",
      incorrectOptionsExplanation: "· B. NDA (Non-Disclosure Agreement): An NDA is specifically focused on protecting confidential information shared between parties. While it might be part of the overall contractual framework, it does not define the general terms for service provision.\n· C. MOU (Memorandum of Understanding): An MOU typically outlines a preliminary understanding or intent between parties before a formal contract. It is generally less comprehensive and may not be legally binding for establishing ongoing service terms.\n· D. SLA (Service Level Agreement): An SLA defines specific, measurable aspects of a service, such as performance metrics, availability, and responsibilities. While often used with MSAs, an SLA details what service levels will be met, not the overarching general contractual terms for all engagements.",
      isMultipleChoice: false
    },
    {
      id: 355,
      question: "A certificate authority needs to post information about expired certificates. Which of the following would accomplish this task?",
      options: [
        { label: 'A', text: 'TPM' },
        { label: 'B', text: 'CRL' },
        { label: 'C', text: 'PKI' },
        { label: 'D', text: 'CSR' }
      ],
      answer: ['B'],
      explanation: "A Public Key Infrastructure (PKI) is the comprehensive system of policies, procedures, and technology used to manage the lifecycle of digital certificates, including their creation, distribution, and the handling of their expiration. Information about a certificate's expiration is embedded directly within the certificate (specifically, the notAfter field) as defined by PKI standards. Certificate Authorities (CAs), operating within the PKI framework, issue these certificates and make them available, often through repositories. Thus, the PKI accomplishes the task of making information about expired certificates available by managing and distributing the certificates that inherently contain this expiration data.",
      incorrectOptionsExplanation: "· A. TPM (Trusted Platform Module): A TPM is a hardware component that provides secure storage for cryptographic keys and performs cryptographic functions. It does not post information about expired certificates.\n· B. CRL (Certificate Revocation List): A CRL is a list of certificates that have been revoked by the CA before their scheduled expiration date. Sources like NIST SP 800-32 explicitly state CRLs are for 'unexpired certificates that have been revoked.' Therefore, CRLs are not the primary mechanism for expired certificates, which are invalid due to passing their notAfter date.\n· D. CSR (Certificate Signing Request): A CSR is a message sent from an applicant to a CA to request a digital certificate. It is part of the certificate issuance process, not for publishing information about already expired certificates.",
      isMultipleChoice: false
    },
    {
      id: 356,
      question: "During a SQL update of a database, a temporary field used as part of the update sequence was modified by an attacker before the update completed in order to allow access to the system. Which of the following best describes this type of vulnerability?",
      options: [
        { label: 'A', text: 'Race condition' },
        { label: 'B', text: 'Memory injection' },
        { label: 'C', text: 'Malicious update' },
        { label: 'D', text: 'Side loading' }
      ],
      answer: ['A'],
      explanation: "A race condition occurs when a system's behavior depends on the sequence or timing of uncontrollable events. In the described scenario, the attacker exploits the time window between the initialization or use of a temporary field and the completion of the SQL update. By modifying this field before the update sequence finishes using it for its intended, legitimate purpose, the attacker manipulates the outcome, leading to unauthorized access. This exploitation of the timing of operations is characteristic of a race condition vulnerability.",
      incorrectOptionsExplanation: "· B. Memory injection: This involves introducing malicious code or data into a process's memory space, often through vulnerabilities like buffer overflows. The scenario describes modifying a legitimate temporary field's value during an operation, not injecting arbitrary code into memory.\n· C. Malicious update: This is a general description of the outcome or intent. 'Race condition' is the specific type of vulnerability that enables the update to become malicious. The question asks for the best description of the vulnerability itself.\n· D. Sideloading: This term typically refers to installing applications onto a device (often mobile) from an unofficial source or transferring files between two local devices. It's unrelated to exploiting temporary field states in a database update.",
      isMultipleChoice: false
    },
    {
      id: 357,
      question: "An unexpected and out-of-character email message from a Chief Executive Officer’s corporate account asked an employee to provide financial information and to change the recipient's contact number. Which of the following attack vectors is most likely being used?",
      options: [
        { label: 'A', text: 'Business email compromise' },
        { label: 'B', text: 'Phishing' },
        { label: 'C', text: 'Brand impersonation' },
        { label: 'D', text: 'Pretexting' }
      ],
      answer: ['A'],
      explanation: "Business Email Compromise (BEC) is a specific type of cyberattack where adversaries impersonate a trusted figure, often a CEO or another executive, to trick an employee into transferring funds or divulging sensitive information. The scenario described an unexpected email from a CEO's corporate account requesting financial information and a contact number change directly aligns with the tactics of BEC, particularly CEO fraud, a subtype of BEC. While it involves elements of phishing and pretexting, BEC is the most precise and comprehensive description of this targeted attack vector.",
      incorrectOptionsExplanation: "· B. Phishing: Phishing is a broader category of attack that uses deceptive communications to steal information. BEC is a highly targeted form of phishing, making BEC a more precise answer in this context (Principle A: Precision).\n· C. Brand impersonation: While the CEO's authority (a form of personal brand) is used, 'brand impersonation' typically refers to an attacker mimicking a company or organization, not specifically an individual executive within it via their actual (or seemingly actual) email account. BEC is more specific to this scenario.\n· D. Pretexting: Pretexting is the act of creating a fabricated scenario (the pretext) to obtain information. It is a technique used within many social engineering attacks, including BEC and phishing, rather than being the overarching attack vector itself.",
      isMultipleChoice: false
    },
    {
      id: 358,
      question: "An organization is evaluating new regulatory requirements associated with the implementation of corrective controls on a group of interconnected financial systems. Which of the following is the most likely reason for the new requirement?",
      options: [
        { label: 'A', text: 'To defend against insider threats altering banking details' },
        { label: 'B', text: 'To ensure that errors are not passed to other systems' },
        { label: 'C', text: 'To allow for business insurance to be purchased' },
        { label: 'D', text: 'To prevent unauthorized changes to financial data' }
      ],
      answer: ['B'],
      explanation: "Corrective controls are implemented to identify and rectify errors or incidents after they have been detected. In the context of interconnected financial systems, a primary concern for regulators is systemic risk and maintaining data integrity across the entire ecosystem. If an error occurs in one system, it can rapidly propagate to connected systems, leading to widespread inaccuracies and potential instability. Therefore, a new regulatory requirement for corrective controls would most likely aim to ensure that once errors are detected, they are not only fixed within the originating system but also prevented from being passed to other interconnected systems, thus containing the impact and preserving the integrity of the broader financial network.",
      incorrectOptionsExplanation: "· A. To defend against insider threats altering banking details: While corrective actions would be taken if an insider threat materializes, regulatory requirements for corrective controls are typically broader, addressing all types of errors and incidents, not just those from a specific threat actor like insiders.\n· C. To allow for business insurance to be purchased: The implementation of robust controls, including corrective ones, can positively influence an organization's insurability or insurance premiums. However, this is generally an indirect benefit and not the primary driver for financial regulators to mandate specific corrective controls. Regulatory drivers focus more on operational resilience and market stability.\n· D. To prevent unauthorized changes to financial data: The act of 'preventing' unauthorized changes is primarily the role of preventive controls (e.g., access controls, authorization mechanisms). Corrective controls are reactive; they address unauthorized changes after they have occurred, aiming to remediate the impact and restore integrity.",
      isMultipleChoice: false
    },
    {
      id: 359,
      question: "A security analyst is prioritizing vulnerability scan results using a risk-based approach. Which of the following is the most efficient resource for the analyst to use?",
      options: [
        { label: 'A', text: 'Business impact analysis' },
        { label: 'B', text: 'Common Vulnerability Scoring System' },
        { label: 'C', text: 'Risk register' },
        { label: 'D', text: 'Exposure factor' }
      ],
      answer: ['B'],
      explanation: "The Common Vulnerability Scoring System (CVSS) is the most efficient resource for an analyst to use when initially prioritizing vulnerability scan results using a risk- based approach. CVSS provides a numerical score representing the severity of a vulnerability based on its intrinsic characteristics. Security analysts use these scores as a primary and efficient input to rank vulnerabilities, allowing them to focus on the most critical issues first. While a comprehensive risk assessment also considers asset criticality and threat intelligence, CVSS offers a standardized and readily available metric for initial prioritization directly from scan data.",
      incorrectOptionsExplanation: "· A. Business impact analysis (BIA): A BIA identifies critical business functions and the impact of their disruption. While crucial for understanding the organizational context of a vulnerability's impact (an input to overall risk), it's a broader analysis, not the direct scoring mechanism for prioritizing a list of specific technical vulnerabilities from a scan.\n· C. Risk register: A risk register is a document that logs identified risks, their assessments (often including CVSS-derived scores and BIA considerations), and treatment plans. It is an outcome or a tracking tool of the risk management process, not the primary resource used to perform the initial prioritization of scan results.\n· D. Exposure factor (EF): An EF represents the percentage of an asset's value that would be lost if a specific threat materializes. It's a component of detailed quantitative risk analysis and is generally too granular and complex for the efficient initial prioritization of a list of vulnerabilities from a scan.",
      isMultipleChoice: false
    },
    {
      id: 360,
      question: "Which of the following is an example of memory injection?",
      options: [
        { label: 'A', text: 'Two processes access the same variable, allowing one to cause a privilege escalation.' },
        { label: 'B', text: 'A process receives an unexpected amount of data, which causes malicious code to be executed.' },
        { label: 'C', text: 'Malicious code is copied to the allocated space of an already running process.' },
        { label: 'D', text: 'An executable is overwritten on the disk, and malicious code runs the next time it is executed.' }
      ],
      answer: ['C'],
      explanation: "Memory injection, often referred to as process injection, is a technique where malicious code is inserted into the address space of an already running, legitimate process. Option C, 'Malicious code is copied to the allocated space of an already running process,' accurately and directly describes this core action. This encompasses various methods, such as allocating memory in a target process (e.g., using VirtualAllocEx in Windows) and then writing the malicious code into that allocated space (e.g., using WriteProcessMemory), followed by execution.",
      incorrectOptionsExplanation: "· A. Two processes access the same variable, allowing one to cause a privilege escalation. This describes a vulnerability related to shared memory or a race condition. While it can lead to privilege escalation by manipulating data, it's not primarily about injecting new executable code into another process's memory space.\n· B. A process receives an unexpected amount of data, which causes malicious code to be executed. This describes a buffer overflow. While buffer overflows can be a method to achieve memory injection (by overflowing a buffer with shellcode), option C provides a more direct and general description of the act of memory injection itself. Memory injection as a technique is not limited to vulnerabilities triggered by 'unexpected amounts of data' in this manner.\n· D. An executable is overwritten on the disk, and malicious code runs the next time it is executed. This describes a file-based attack, such as trojanizing an application or replacing an executable. The malicious code executes when the modified program is launched from the disk, not by injecting code into the memory of an already running process.",
      isMultipleChoice: false
    }
  ];
