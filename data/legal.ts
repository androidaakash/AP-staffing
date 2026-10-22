export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type LegalDocument = {
  slug: string;
  title: string;
  label: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  label: "LEGAL",
  updated: "1 September 2025",
  intro:
    "This Privacy Policy explains how Dream Gadge Ltd collects, uses, and protects personal information when you visit our website, engage our services, or apply for a role with us. We are committed to handling personal data lawfully, transparently, and with the same governance standards we apply to our clients. If you have any questions, please contact us at advisory@aakashap.com.",
  sections: [
    {
      heading: "Who We Are",
      paragraphs: [
        "Dream Gadge Ltd is a company registered in England and Wales that provides offshore recruitment process outsourcing and business process outsourcing services to clients in the United Kingdom, the United States, and internationally. Our delivery centres are located in Manila, Cape Town, Krakow, and Bangalore.",
        "For the purposes of UK data protection law, Dream Gadge Ltd is the data controller for personal information processed through this website and in the course of our own business operations. Where we process candidate or client data on behalf of a client organisation, we act as a data processor and the client remains the controller.",
      ],
    },
    {
      heading: "Information We Collect",
      paragraphs: [
        "We collect personal information in the following ways:",
      ],
      bullets: [
        "Information you provide directly, such as your name, email address, telephone number, company details, and any message you send through our contact forms or by email.",
        "Recruitment information, including CVs, employment history, qualifications, and references, when you apply for a role with us or through a client engagement.",
        "Client engagement data, such as contact details of client personnel and candidate records processed on behalf of clients under their documented instructions.",
        "Technical information, including IP address, browser type, device information, and pages visited, collected through cookies and similar technologies.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [
        "We use personal information to respond to enquiries, provide and administer our services, manage our contractual relationships, and operate our website securely. Where you have applied for a role, we use your information to assess your application, arrange interviews, and carry out pre-employment vetting where applicable.",
        "We may also use contact details to send service updates, industry insights, or marketing communications where permitted by law. You can opt out of marketing communications at any time using the unsubscribe link in any message or by contacting us directly. We do not sell personal information to third parties.",
      ],
    },
    {
      heading: "Legal Bases for Processing",
      paragraphs: [
        "Under the UK GDPR and the EU GDPR, we rely on the following legal bases: performance of a contract, where processing is necessary to provide services you or your organisation have engaged us for; legitimate interests, such as running and improving our business and responding to business enquiries; legal obligation, where we must retain or disclose information to comply with the law; and consent, where you have opted in to marketing or other optional processing.",
        "Where we rely on legitimate interests, we have carried out balancing assessments to confirm that our interests do not override your rights and freedoms. You may object to processing based on legitimate interests at any time.",
      ],
    },
    {
      heading: "Cookies and Similar Technologies",
      paragraphs: [
        "Our website uses cookies and similar technologies to enable core functionality, remember your preferences, and understand how visitors use our pages. Essential cookies are required for the website to function, while analytics cookies help us improve content and performance.",
        "You can manage or withdraw consent for non-essential cookies at any time through our cookie preferences tool or your browser settings. Full details are set out in our Cookie Policy & Preferences.",
      ],
    },
    {
      heading: "International Transfers",
      paragraphs: [
        "As an offshore services provider, we may transfer personal information to our delivery centres in the Philippines, South Africa, Poland, and India, and to vetted sub-processors in other jurisdictions. Where personal data is transferred outside the United Kingdom or the European Economic Area, we put appropriate safeguards in place.",
        "These safeguards include the UK International Data Transfer Agreement, the UK Addendum to the EU Standard Contractual Clauses, and supplementary technical and organisational measures such as encrypted channels, access controls, and data minimisation. Copies of the relevant safeguards are available on request.",
      ],
    },
    {
      heading: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Recruitment records are typically retained for up to twenty-four months after the conclusion of an application process, unless you ask us to keep them longer or applicable law requires otherwise.",
        "Client engagement records are retained for the duration of the contract and for a minimum of six years afterwards where required for tax, audit, or contractual purposes. When retention periods expire, data is securely deleted or anonymised in line with our information security standards.",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: [
        "Subject to applicable law, you have the following rights in relation to your personal information:",
      ],
      bullets: [
        "The right to access a copy of the personal information we hold about you.",
        "The right to request correction of inaccurate or incomplete information.",
        "The right to request erasure of information where there is no compelling reason for us to continue processing it.",
        "The right to restrict or object to certain processing activities, including direct marketing.",
        "The right to data portability, where processing is based on consent or contract and carried out by automated means.",
        "The right to withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal.",
        "The right to lodge a complaint with the Information Commissioner's Office or your local supervisory authority.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We apply administrative, technical, and physical controls designed to protect personal information against unauthorised access, loss, or alteration. These include ISO 27001-aligned information security management, role-based access control, virtual desktop infrastructure, and regular penetration testing.",
        "Our people operate under confidentiality agreements and receive annual data protection and security training. Further detail is set out in our Security & Service Level Commitments document.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy, wish to exercise your rights, or want to make a data protection request, contact us at advisory@aakashap.com or by post at Dream Gadge Ltd, London, United Kingdom. We will respond to verified requests within one month, as required by law.",
        "If you are not satisfied with our response, you have the right to complain to the Information Commissioner's Office in the United Kingdom or to the supervisory authority in your country of residence.",
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  slug: "terms-of-service",
  title: "Terms of Service",
  label: "LEGAL",
  updated: "1 September 2025",
  intro:
    "These Terms of Service govern the provision of recruitment process outsourcing, business process outsourcing, and related services by Dream Gadge Ltd to its clients. By engaging our services or using this website, you agree to these terms unless a separate written agreement states otherwise. If you have questions, contact advisory@aakashap.com.",
  sections: [
    {
      heading: "Scope of Services",
      paragraphs: [
        "Dream Gadge Ltd provides offshore recruitment process outsourcing and business process outsourcing services, which may include full cycle recruitment, candidate sourcing and screening, market intelligence, back office and administrative support, finance and accounting support, virtual staffing, and digital marketing services.",
        "The specific services, deliverables, and performance expectations for each engagement are set out in a written statement of work, order form, or master services agreement signed by both parties. In the event of conflict, the order of precedence is the signed statement of work, then the master services agreement, then these terms.",
      ],
    },
    {
      heading: "Engagement & Fees",
      paragraphs: [
        "Fees are agreed in the applicable statement of work and may be structured as monthly retainers, per-seat charges, per-hire fees, or milestone-based payments. Unless stated otherwise, invoices are issued monthly and are payable within thirty days of the invoice date, in the currency specified in the statement of work.",
        "Fees are exclusive of applicable taxes, duties, and pre-approved expenses, which will be charged at cost with reasonable supporting documentation. We may review and adjust rates on written notice in accordance with the review provisions of the relevant statement of work.",
      ],
    },
    {
      heading: "Client Responsibilities",
      paragraphs: [
        "The client agrees to provide accurate and complete information about its business, requirements, and processes, and to deliver timely feedback, approvals, and access needed for delivery. The client will designate an authorised point of contact empowered to make decisions relating to the engagement.",
        "The client is responsible for ensuring that its instructions, materials, and data are lawful, that it holds all necessary rights and consents, and that any use of our services complies with applicable employment, recruitment, and data protection laws in its jurisdiction.",
      ],
    },
    {
      heading: "Service Levels & Governance",
      paragraphs: [
        "Where service level agreements are agreed, they are documented in the statement of work and measured monthly against defined metrics such as response times, submission quality, and delivery volumes. Service credits, where applicable, are the client's sole financial remedy for missed service levels.",
        "Each engagement operates under a governance rhythm agreed at mobilisation, typically including weekly operational reviews and quarterly strategic reviews. Escalation paths and reporting formats are documented in the engagement handbook provided at kick-off.",
      ],
    },
    {
      heading: "Confidentiality",
      paragraphs: [
        "Each party may receive confidential information belonging to the other, including business plans, pricing, candidate data, and client lists. Both parties agree to use such information solely for the purposes of the engagement and to protect it with at least the same degree of care used for their own confidential information, and no less than a reasonable standard of care.",
        "These obligations do not apply to information that is or becomes public through no breach of these terms, was lawfully known before disclosure, or must be disclosed by law or court order. On termination, each party will return or securely destroy the other's confidential information on written request.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "Dream Gadge Ltd retains all rights in its methodologies, frameworks, tools, templates, training materials, and know-how, including any improvements made during an engagement. The client retains all rights in its own materials, data, and systems made available to us.",
        "Deliverables created specifically for the client under a statement of work are assigned to the client upon full payment of the associated fees, excluding our pre-existing and generally applicable materials, which remain our property and are licensed to the client for internal use.",
      ],
    },
    {
      heading: "Data Protection",
      paragraphs: [
        "Where we process personal data on behalf of the client, we do so as a data processor and the client acts as controller. The parties will enter into a data processing agreement that sets out the subject matter, duration, nature, and purpose of processing, and the obligations of each party under applicable data protection law.",
        "We maintain ISO 27001-aligned security controls, use vetted sub-processors, and notify clients without undue delay, and in any event within twenty-four hours, of becoming aware of a confirmed personal data breach affecting their data. International transfers are governed by the safeguards described in our Privacy Policy.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot lawfully be excluded. Subject to that, neither party is liable for indirect, consequential, or incidental losses, loss of profit, loss of business, or loss of anticipated savings.",
        "Subject to the paragraph above, each party's total aggregate liability arising out of or in connection with an engagement is limited to the total fees paid or payable by the client under the relevant statement of work in the twelve months immediately preceding the event giving rise to the claim.",
      ],
    },
    {
      heading: "Term & Termination",
      paragraphs: [
        "Each engagement begins on the effective date stated in the statement of work and continues for the initial term specified there, after which it renews for successive periods unless either party gives written notice of non-renewal at least sixty days before the end of the then-current term.",
        "Either party may terminate an engagement immediately for material breach that remains uncured thirty days after written notice, or on insolvency of the other party. On termination, the client will pay for services delivered and commitments properly incurred up to the effective date of termination, and each party will return or destroy confidential information as set out above.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These terms and any dispute or claim arising out of or in connection with them are governed by the laws of England and Wales. The parties submit to the exclusive jurisdiction of the courts of England and Wales, unless the applicable statement of work specifies a different dispute resolution procedure such as mediation or arbitration.",
        "Before commencing proceedings, the parties agree to attempt in good faith to resolve any dispute through escalation to senior representatives for a period of thirty days following written notice of the dispute.",
      ],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: [
        "We may update these terms from time to time to reflect changes in our services, legal requirements, or business practices. The current version is always available on this page and is dated at the top.",
        "Material changes will apply to new engagements from the date of publication and to existing engagements from the start of the next renewal term, unless otherwise agreed in writing. Continued use of our services after changes take effect constitutes acceptance of the updated terms.",
      ],
    },
  ],
};

export const COOKIE_POLICY: LegalDocument = {
  slug: "cookie-settings",
  title: "Cookie Policy & Preferences",
  label: "LEGAL",
  updated: "1 September 2025",
  intro:
    "This Cookie Policy explains what cookies are, how Dream Gadge Ltd uses them on this website, and how you can manage your preferences. We keep our use of cookies deliberately light: essential cookies for core functionality and, with your consent, analytics cookies that help us improve the site. For any questions, contact advisory@aakashap.com.",
  sections: [
    {
      heading: "What Are Cookies",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to the site owners about how the site is being used.",
        "Some cookies are deleted when you close your browser, while others remain for a defined period. Similar technologies such as pixels and local storage operate in comparable ways and are covered by this policy alongside cookies.",
      ],
    },
    {
      heading: "How We Use Cookies",
      paragraphs: [
        "We use cookies to keep the website secure and functional, to remember your cookie preferences, and to understand in aggregate how visitors find and use our pages. This helps us improve navigation, content, and the overall experience for visitors, clients, and candidates.",
        "We do not use cookies to build advertising profiles of you, and we do not sell cookie data to third parties. Where analytics tools are used, data is aggregated and configured to minimise the collection of personally identifiable information.",
      ],
    },
    {
      heading: "Types of Cookies We Use",
      paragraphs: [
        "The cookies used on this website fall into the following categories:",
      ],
      bullets: [
        "Essential cookies: strictly necessary cookies that enable core functionality such as page navigation, security, load balancing, and remembering your consent choices. These cookies cannot be switched off through our preferences tool because the website cannot function properly without them.",
        "Analytics cookies: performance and analytics cookies that help us understand how visitors interact with the website by collecting information such as pages visited, time on page, and referral source. These cookies are set only after you provide consent and can be withdrawn at any time.",
      ],
    },
    {
      heading: "Consent and Legal Basis",
      paragraphs: [
        "When you first visit our website, a cookie banner allows you to accept or reject non-essential cookies before they are set. Essential cookies are placed on the basis of our legitimate interests in operating a secure, functional website, while analytics cookies rely on your consent under applicable privacy and electronic communications law.",
        "You can withdraw or change your consent at any time using the cookie preferences tool accessible from the website footer, or by clearing cookies in your browser and revisiting the site to reset your choices.",
      ],
    },
    {
      heading: "Managing Your Preferences",
      paragraphs: [
        "Our cookie preferences tool lets you toggle analytics cookies on or off independently of essential cookies. Your choice is stored in a small preference cookie so that we do not ask you on every visit, and it is refreshed if you clear your browser data.",
        "Withdrawing consent does not affect the lawfulness of any processing carried out before withdrawal. After you change your preferences, any previously set analytics cookies will be removed from your device where technically feasible.",
      ],
    },
    {
      heading: "Browser Controls",
      paragraphs: [
        "All major browsers allow you to view, block, and delete cookies through their settings. Blocking all cookies may affect the functionality of this and other websites, including the ability to remember your cookie preferences.",
        "Analytics providers offer opt-out mechanisms for their measurement tools, and many browsers support Do Not Track signals or third-party tracking protection. Guidance on managing cookies is available in the help section of your chosen browser.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Cookie Policy from time to time to reflect changes in the technologies we use or in applicable law. The current version is always published on this page with the date of the last update shown at the top.",
        "If we make material changes to the way we use cookies, we will refresh consent requests where required so that you can review and update your preferences.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "If you have questions about our use of cookies or this policy, contact us at advisory@aakashap.com or by post at Dream Gadge Ltd, London, United Kingdom. Further information about your privacy rights is available in our Privacy Policy.",
      ],
    },
  ],
};

export const SECURITY_SLA: LegalDocument = {
  slug: "security-sla",
  title: "Security & Service Level Commitments",
  label: "TRUST & GOVERNANCE",
  updated: "1 September 2025",
  intro:
    "Security and service quality are the foundation of every Dream Gadge engagement. This document summarises the standards we hold ourselves to across our offshore delivery centres, from ISO 27001-aligned governance and virtual desktop infrastructure to published service level commitments. Detailed auditing evidence and contractual schedules are available to clients on request via advisory@aakashap.com.",
  sections: [
    {
      heading: "Our Security Framework",
      paragraphs: [
        "Dream Gadge Ltd operates a documented information security management system aligned to ISO 27001, covering governance, risk assessment, access control, supplier management, and continual improvement. Policies are reviewed at least annually and updated in response to changes in threat landscape, client requirements, and regulatory obligations.",
        "An internal security committee meets monthly to review incidents, audit findings, and remediation progress, reporting to executive leadership. All delivery centres operate to the same baseline controls, with local procedures tailored only where jurisdiction-specific law requires.",
      ],
    },
    {
      heading: "Certifications & Standards",
      paragraphs: [
        "Our controls are designed for alignment with ISO 27001 and audited against SOC 2 Type II trust services criteria through independent third-party assessments. We maintain compliance programmes for the UK GDPR and EU GDPR, including records of processing, data protection impact assessments, and documented international transfer safeguards.",
        "Clients may request our current audit reports, penetration test summaries, and insurance certificates under confidentiality. We also support client-led audits and due diligence questionnaires as part of onboarding and annual reviews.",
      ],
    },
    {
      heading: "Secure Delivery Infrastructure",
      paragraphs: [
        "All delivery work is performed on hardened virtual desktop infrastructure (VDI) hosted in controlled environments. Sessions run on thin clients with no local storage, and USB mass storage devices are blocked by default, with exceptions considered only where a client explicitly requires and approves a controlled alternative.",
        "Clipboard, file transfer, printing, and screen capture functions are subject to policy restrictions depending on client requirements, and all activity is logged to tamper-resistant audit trails. Endpoints are patched, centrally managed, and monitored for anomalous behaviour around the clock.",
      ],
    },
    {
      heading: "Zero-Local-Data Policy",
      paragraphs: [
        "Client and candidate data must never reside on local drives, personal devices, or removable media. Work product is created, stored, and transmitted exclusively within the client's approved systems or Dream Gadge's access-controlled repositories, with encryption in transit and at rest.",
        "Where clients provide systems such as Bullhorn, Vincere, or bespoke CRMs, access is provisioned through role-based permissions and multi-factor authentication. Offboarding is immediate: accounts, tokens, and device sessions are revoked within one business hour of a team member leaving an engagement.",
      ],
    },
    {
      heading: "Physical Security & Access Control",
      paragraphs: [
        "Delivery centres are protected by biometric access control, 24/7 CCTV coverage, visitor management procedures, and segregated production floors. Only vetted personnel with a documented business need receive access to production areas.",
        "Clean desk and clear screen policies are enforced, with secure lock-up for any approved physical materials and shredding facilities on site. Physical access logs are retained and reviewed, and access rights are recertified quarterly.",
      ],
    },
    {
      heading: "Workforce Vetting & Training",
      paragraphs: [
        "Every team member completes pre-employment screening proportionate to their role, including identity verification, criminal record checks where legally permissible, employment and education verification, and reference checks. All staff sign confidentiality and acceptable use agreements before accessing any client system.",
        "Onboarding includes security awareness training, and annual refresher training is mandatory for all delivery staff. Simulated phishing exercises and secure development or handling workshops run throughout the year, with completion tracked at the team level.",
      ],
    },
    {
      heading: "Incident Response & Notification",
      paragraphs: [
        "We maintain documented incident response playbooks covering detection, containment, eradication, recovery, and post-incident review, rehearsed through tabletop exercises at least twice a year. A 24/7 escalation path ensures security events reach the on-call response lead without delay.",
        "Clients will be notified within 24 hours of confirmation of a personal data breach affecting their data, with an initial impact assessment and followed by regular updates until resolution. A root-cause analysis and remediation report is provided within ten business days of incident closure.",
      ],
    },
    {
      heading: "Business Continuity & Disaster Recovery",
      paragraphs: [
        "Each delivery centre operates redundant power and network connectivity, geographically separated backup facilities, and tested failover procedures. Our target recovery time objective (RTO) is four hours and the target recovery point objective (RPO) is one hour for critical delivery systems.",
        "Business continuity and disaster recovery plans are reviewed at least annually and exercised through live failover tests. Results, lessons learned, and remediation actions are documented and shared with clients on request.",
      ],
    },
    {
      heading: "Service Level Commitments",
      paragraphs: [
        "The following commitments apply as standard across managed engagements, with any client-specific variations documented in the applicable statement of work:",
      ],
      bullets: [
        "Response time: acknowledgement of client queries and support requests within 4 business hours during agreed coverage windows.",
        "Platform uptime: 99.5% availability for Dream Gadge-managed delivery systems, measured monthly, excluding pre-announced maintenance windows.",
        "Submission quality: at least 90% of shortlisted candidates meet the agreed brief on first submission, measured through client feedback and interview progression rates.",
        "Incident notification: confirmed personal data breaches communicated to affected clients within 24 hours of confirmation, with follow-up reporting as described above.",
        "Reporting: monthly performance dashboards covering service levels, delivery volumes, and quality metrics, reviewed in scheduled governance calls.",
      ],
    },
    {
      heading: "Governance & Reporting",
      paragraphs: [
        "Every engagement operates under a governance cadence agreed at mobilisation, typically comprising weekly operational check-ins and quarterly strategic reviews. Service level performance, security metrics, and improvement plans are standing agenda items.",
        "Clients receive an annual security attestation summary and may request reasonable access to audit information, subject to confidentiality and the protection of other clients' data. Where service levels fall below target, we provide a documented remediation plan with owners and timelines.",
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  COOKIE_POLICY,
  SECURITY_SLA,
];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((document) => document.slug === slug);
}
