import type { Question } from '../../types';

export const questions: Question[] = [
    {
      id: 451,
      question: "A security engineer would like to enhance the use of automation and orchestration within the SIEM. Which of the following would be the primary benefit of this enhancement?",
      options: [
        { label: 'A', text: 'It increases complexity.' },
        { label: 'B', text: 'It removes technical debt.' },
        { label: 'C', text: 'It adds additional guard rails.' },
        { label: 'D', text: 'It acts as a workforce multiplier.' }
      ],
      answer: ['D'],
      explanation: "Enhancing automation and orchestration within a Security Information and Event Management (SIEM) system primarily acts as a workforce multiplier. This means that automated processes can handle repetitive, time-consuming tasks such as alert triage, data enrichment, and initial response actions. This allows the existing security personnel to focus their expertise on more complex threat analysis, investigation, and strategic initiatives, thereby increasing the overall capacity and effectiveness of the security team without necessarily increasing its size. This addresses the common challenge of high alert volumes and limited analyst availability.",
      incorrectOptionsExplanation: "· A. It increases complexity: While implementing automation can introduce new systems or workflows that have their own complexity, the goal and primary benefit of automation is typically to manage or reduce overall operational complexity and workload in the long term, not to increase it as a benefit.\n· B. It removes technical debt: Automation can contribute to addressing technical debt if it replaces outdated, inefficient manual processes. However, this is generally a secondary effect or a specific application, not the primary overarching benefit of enhancing automation and orchestration in a SIEM context.\n· C. It adds additional guard rails: Automation and orchestration inherently enforce consistent, predefined processes, which can be considered as adding guardrails. While a significant benefit, the ability to scale the team's operational capacity (workforce multiplication) is often the more impactful and primary driver for automation in a busy SOC environment managing a SIEM.",
      isMultipleChoice: false
    },
    {
      id: 452,
      question: "A security engineer configured a remote access VPN. The remote access VPN allows end users to connect to the network by using an agent that is installed on the endpoint, which establishes an encrypted tunnel. Which of the following protocols did the engineer most likely implement?",
      options: [
        { label: 'A', text: 'GRE' },
        { label: 'B', text: 'IPSec' },
        { label: 'C', text: 'SD-WAN' },
        { label: 'D', text: 'EAP' }
      ],
      answer: ['B'],
      explanation: "The question describes a remote access VPN that uses an agent on the endpoint to establish an encrypted tunnel. IPSec (Internet Protocol Security) is a suite of protocols that provides security for Internet Protocol communications by authenticating and encrypting each IP packet. It is widely used to create VPNs, including remote access scenarios where an agent (VPN client software) is installed on the end-user's device to establish a secure, encrypted tunnel to the corporate network.",
      incorrectOptionsExplanation: "· A. GRE (Generic Routing Encapsulation): GRE is a tunneling protocol that can encapsulate various network layer protocols. However, GRE itself does not provide encryption. It is often used in conjunction with IPSec (GRE over IPSec) to secure the tunneled traffic.\n· C. SD-WAN (Software-Defined Wide Area Network): SD-WAN is an architecture or approach to managing and optimizing wide area networks. While SD-WAN solutions often utilize encrypted tunnel protocols like IPSec as part of their underlying technology, SD-WAN itself is not a specific protocol that establishes the encrypted tunnel.\n· D. EAP (Extensible Authentication Protocol): EAP is an authentication framework, not a tunneling protocol. It is used to provide various authentication methods within secure network protocols, including those used by VPNs like IKEv2 (often part of IPSec). EAP handles the authentication process, not the creation of the encrypted tunnel itself.",
      isMultipleChoice: false
    },
    {
      id: 453,
      question: "Which of the following security concepts is accomplished with the installation of a RADIUS server?",
      options: [
        { label: 'A', text: 'CIA' },
        { label: 'B', text: 'AA' },
        { label: 'C', text: 'ACL' },
        { label: 'D', text: 'PEM' }
      ],
      answer: ['B'],
      explanation: "Remote Authentication Dial-In User Service (RADIUS) is a networking protocol that provides centralized Authentication, Authorization, and Accounting (AAA) management for users who connect and use a network service. The option 'AA' directly refers to Authentication and Authorization, which are two of the three core components of the AAA framework that RADIUS implements. Authentication verifies a user's identity, and Authorization determines the level of access granted to that user.",
      incorrectOptionsExplanation: "· A. CIA: While RADIUS contributes to overall security, which encompasses Confidentiality, Integrity, and Availability (CIA), it doesn't directly accomplish all three as its primary function. For instance, RADIUS authenticates users but doesn't inherently encrypt all user data traffic (Confidentiality) on the network itself.\n· C. ACL: An Access Control List (ACL) is a set of rules that specifies which users or system processes are granted access to objects, as well as what operations are allowed on given objects. RADIUS can inform decisions that lead to the application of ACLs by authenticating and authorizing users, but RADIUS itself is not an ACL.\n· D. PEM: Privacy Enhanced Mail (PEM) is an IETF proposed standard for securing email messages. It deals with encryption, authentication, message integrity, and key management for email, which is functionally distinct from the network access control provided by RADIUS.",
      isMultipleChoice: false
    },
    {
      id: 454,
      question: "An employee who was working remotely lost a mobile device containing company data. Which of the following provides the best solution to prevent future data loss?",
      options: [
        { label: 'A', text: 'MDM' },
        { label: 'B', text: 'DLP' },
        { label: 'C', text: 'FDE' },
        { label: 'D', text: 'EDR' }
      ],
      answer: ['A'],
      explanation: "Mobile Device Management (MDM) provides the most comprehensive solution to prevent future data loss when a mobile device containing company data is lost. MDM solutions allow organizations to enforce security policies, remotely lock or wipe lost or stolen devices, enforce encryption, and manage applications and data on mobile endpoints. This directly addresses the scenario by providing control over the device and its data, even when it's not in physical possession of the company.",
      incorrectOptionsExplanation: "· B. DLP (Data Loss Prevention): While DLP aims to prevent sensitive data from leaving secure boundaries, it's a broader strategy. Endpoint DLP can be a part of mobile security, often integrated with or complementary to MDM, but MDM is more directly focused on managing the device itself in case of loss.\n· C. FDE (Full Disk Encryption): FDE protects data at rest by encrypting the entire storage. It's a critical security feature, often enforced by MDM, but FDE alone doesn't offer remote management capabilities like wiping or locking a lost device.\n· D. EDR (Endpoint Detection and Response): EDR solutions focus on continuously monitoring endpoints to detect and respond to cyber threats like malware and ransomware. While EDR can apply to mobile devices, its primary function is threat detection and response, not specifically data loss prevention due to physical device loss.",
      isMultipleChoice: false
    },
    {
      id: 455,
      question: "Which of the following is a benefit of vendor diversity?",
      options: [
        { label: 'A', text: 'Patch availability' },
        { label: 'B', text: 'Zero-day resiliency' },
        { label: 'C', text: 'Secure configuration guide applicability' },
        { label: 'D', text: 'Load balancing' }
      ],
      answer: ['B'],
      explanation: "Vendor diversity, a form of heterogeneity, is a crucial security strategy. Its primary benefit in the context of the given options is Zero-day resiliency. If an organization relies on products from multiple vendors, a zero-day exploit targeting a vulnerability in one vendor's product is less likely to compromise the entire infrastructure. Systems from other vendors, presumably not sharing the same vulnerability, would remain unaffected, thus limiting the scope of the attack and providing resilience against such unknown or unpatched threats. This approach prevents a single point of failure related to a specific vendor's compromised software.",
      incorrectOptionsExplanation: "· A. Patch availability: Vendor diversity can complicate patch management rather than simplify it, as it requires tracking and applying patches from multiple sources with potentially different schedules and mechanisms. While it offers alternatives if one vendor is slow, overall 'availability' in terms of ease or speed is not a direct benefit.\n· C. Secure configuration guide applicability: Implementing secure configurations across diverse vendor products typically increases complexity. Each vendor may have its own distinct configuration guides and best practices, requiring more effort to ensure consistent security posture rather than simplifying applicability.\n· D. Load balancing: Load balancing is a technique for distributing traffic across multiple servers to improve performance and availability. While the servers in a load- balanced pool could be from different vendors, load balancing itself is not a direct security benefit derived from vendor diversity, nor does vendor diversity inherently create load balancing.",
      isMultipleChoice: false
    }
  ];
