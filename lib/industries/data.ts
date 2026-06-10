import {
  INDUSTRY_SLUGS,
  type IndustriesRecord,
  type Industry,
  type IndustrySlug,
} from "./types";

export { INDUSTRY_SLUGS } from "./types";

const INDUSTRIES: IndustriesRecord = {
  "health-tech": {
    slug: "health-tech",
    name: "Health Tech",
    metaTitle: "Xorora — Health Tech Software Development",
    metaDescription:
      "Businesses partner with Xorora to develop custom, AI powered software for patients, providers, and payers, engineered to fit your care model, streamline operations, and improve outcomes as you grow.",
    headerBg: "/assets/healthtech/header-bg.jpg",
    hero: {
      title: "HealthTech software development.",
      subtitle:
        "Businesses partner with Xorora to develop custom, AI powered software for patients, providers, and payers, engineered to fit your care model, streamline operations, and improve outcomes as you grow.",
      badges: [
        { icon: "shield-check", label: "HIPAA ready" },
        { icon: "lock", label: "GDPR compliant" },
        { icon: "award", label: "SOC 2 & ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Why it is different",
          title: "Navigating the complexities of HealthTech.",
          subtitle:
            "Building healthcare software is not like building any other SaaS product. We work with our clients keeping these in mind.",
        },
        items: [
          {
            icon: "shield-check",
            title: "Compliance requirements",
            body: "HIPAA, HITECH, FDA, and the Cures Act. We build with compliance from day one.",
          },
          {
            icon: "heart-handshake",
            title: "Healthcare user experience",
            body: "Crafting impactful experiences for patients, providers, and payers.",
          },
          {
            icon: "file-lock-2",
            title: "PHI data security",
            body: "Healthcare grade encryption in transit and at rest, audit trails, and enterprise level cloud security.",
          },
          {
            icon: "maximize-2",
            title: "Scalable architecture",
            body: "Built for scale, with low tech debt and cost efficient cloud usage.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "services",
        heading: {
          label: "What we build",
          title: "Our HealthTech expertise.",
          subtitle:
            "Check our services for a wide range of the HealthTech industry.",
        },
        items: [
          {
            name: "Custom healthcare app development",
            body: "We develop custom web and mobile apps focused on exceptional security, performance, and usability.",
            cta: "Get consultation",
          },
          {
            name: "Medical big data and analytics",
            body: "Data plays a key role in HealthTech. We ensure its proper storage and management, so you can derive valuable insights.",
            cta: "Order an estimate",
          },
          {
            name: "Integrations with third party services",
            body: "We integrate your existing software with services and tools for optimized patient management, medical records, and more.",
            cta: "Share your idea",
          },
          {
            name: "EHR and EMR systems development",
            body: "Improve your patient experience with custom built EHR and EMR systems for medical records and patient management.",
            cta: "Leave a request",
          },
          {
            name: "Telehealth app development",
            body: "Modern medicine is remote. If you have a telehealth application idea in mind, we help you implement it with robust and secure technologies.",
            cta: "Get a quote",
          },
          {
            name: "Digital transformation of medical business",
            body: "We help established medical businesses digitalize their workflows and gain a competitive edge.",
            cta: "Contact us",
          },
        ],
        bg: "surface",
      },
      {
        type: "ai-cards",
        heading: {
          label: "AI powered solutions",
          title: "AI for enhanced healthcare services.",
          subtitle:
            "We integrate core AI technologies into clinical platforms, enabling care teams to move faster and serve patients better while strengthening safety and compliance.",
        },
        items: [
          {
            icon: "brain-circuit",
            title: "Predictive analytics for patient care",
            body: "Using data to forecast health outcomes and personalize patient care strategies. This optimizes treatment plans, prevents adverse events, and supports better resource allocation for improved health management.",
            featured: true,
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=70",
          },
          {
            icon: "bot",
            title: "AI agents for healthcare operations",
            body: "Automate scheduling, intake, and coordination so care teams spend less time on operations and more with patients.",
            image:
              "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=70",
          },
          {
            icon: "flask-conical",
            title: "AI integration in medical research",
            body: "Accelerate discovery with models that surface patterns across clinical and research data.",
            image:
              "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=70",
          },
          {
            icon: "messages-square",
            title: "Conversational chat and voicebots",
            body: "Round the clock chat and voice assistants that triage, answer, and guide patients.",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=70",
          },
          {
            icon: "workflow",
            title: "AI powered automation of administrative tasks",
            body: "Cut administrative load with automated coding, documentation, and claims workflows.",
            image:
              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=70",
          },
        ],
      },
      {
        type: "certifications",
        heading: {
          label: "Trust & compliance",
          title: "Healthcare software security standards and certifications.",
        },
        paragraphs: [
          "Xorora recognizes the critical importance of compliance within the healthcare domain.",
          "We are dedicated to helping our clients navigate and adhere to stringent regulatory requirements, such as HIPAA, HITRUST, the HITECH Act, FDA, and the ONC Cures Act Final Rule.",
        ],
        items: [
          { id: "hipaa", description: "Health data privacy" },
          { id: "hitrust", description: "CSF risk framework" },
          { id: "soc2", description: "Security controls audit" },
          { id: "fda", description: "Medical software" },
          { id: "iso27001", description: "Information security" },
        ],
      },
      {
        type: "process-chart",
        heading: {
          label: "How we deliver",
          title: "Health tech development process at Xorora.",
        },
        lead: "Xorora is a HealthTech focused design and development partner. We use a proven lifecycle to build secure, compliant apps that ship and scale with confidence.",
        steps: [
          {
            x: 8,
            y: 80,
            label: "Gathering requirements, shaping product vision",
          },
          {
            x: 22,
            y: 70,
            label: "Tech research, shaping product architecture",
          },
          { x: 37, y: 60, label: "Branding and design" },
          { x: 52, y: 49, label: "Feature development, sprints and demos" },
          { x: 66, y: 39, label: "Testing, verification and validation" },
          { x: 80, y: 27, label: "Release" },
          { x: 93, y: 14, label: "Ongoing support" },
        ],
        ctaLabel: "Book a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question: "What types of health tech software can you build?",
            answer:
              "We build telehealth platforms, EHR and patient portals, remote monitoring tools, clinical analytics dashboards, practice management systems, and patient mobile apps, all tailored to your care model.",
          },
          {
            question: "How do you handle HIPAA and patient data security?",
            answer:
              "Security and compliance are built into the foundation with encryption, access controls, audit logging, and rigorous testing, designed to meet standards such as HIPAA, SOC 2, and GDPR.",
          },
          {
            question:
              "Can you integrate with existing EHR and hospital systems?",
            answer:
              "Yes. We integrate with major EHR systems, lab and imaging providers, and devices through standards such as HL7 and FHIR so data stays in sync across every system.",
          },
          {
            question:
              "What are the typical project timelines for health tech development?",
            answer:
              "A focused MVP usually ships in a few months, while a full platform with integrations and compliance work runs longer. After discovery we give a clear, milestone based timeline.",
          },
          {
            question: "How do you use AI in healthcare platforms?",
            answer:
              "We apply machine learning for imaging support, risk prediction, and monitoring, and use modern AI for clinical documentation, coding, and patient copilots where they add measurable value and remain safe.",
          },
          {
            question: "Do you provide post launch maintenance and support?",
            answer:
              "Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your patient base grows.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "band-cta",
        title: "Scale your vision with next generation health tech solutions.",
        subtitle:
          "We design and develop custom telehealth platforms, patient portals, remote monitoring tools, and clinical analytics dashboards built to align with your care model and improve outcomes at every stage of growth.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/healthtech/header-bg.jpg",
      },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    metaTitle: "Xorora — Real Estate Software Development",
    metaDescription:
      "Custom built property platforms, CRM and listing systems, tenant portals, and analytics dashboards engineered to fit your business model, streamline property operations, and deliver measurable ROI as you grow.",
    headerBg: "/assets/realestate/header-bg.jpg",
    hero: {
      title: "Custom real estate software for property driven companies.",
      subtitle:
        "Custom built property platforms, CRM and listing systems, tenant portals, and analytics dashboards engineered to fit your business model, streamline property operations, and deliver measurable ROI as you grow.",
      badges: [
        { icon: "shield-check", label: "SOC 2 ready" },
        { icon: "lock", label: "GDPR compliant" },
        { icon: "award", label: "ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Pain points & value proposition",
          title:
            "Pain points we solve with our real estate development services.",
          subtitle:
            "Most teams lose revenue because listings, CRM, and the client experience are not working in sync. We bring them together into one connected platform.",
        },
        items: [
          {
            icon: "clock",
            title: "Slow listings and manual data entry",
            body: "Turn hours into minutes. We automate listing creation, syndication, and updates so your inventory stays accurate across every channel without manual work.",
          },
          {
            icon: "layers",
            title: "Legacy systems holding you back",
            body: "Modernize without a full rebuild. We add a flexible, API ready layer over legacy CRM and ERP systems so you can launch new services quickly and integrate partners easily.",
          },
          {
            icon: "users",
            title: "Disconnected buyer and tenant experience",
            body: "Provide the right property at the right time. Our solutions read buyer and tenant behavior and deliver tailored listings inside an easy, modern interface.",
          },
          {
            icon: "file-check",
            title: "Complex contracts and compliance",
            body: "We embed digital agreements, e signatures, and compliance into your platform foundation so deals close faster and audits stop being a headache.",
          },
        ],
      },
      {
        type: "services",
        heading: {
          label: "Capabilities",
          title: "Real estate software development services we offer.",
          subtitle:
            "Our specialists deliver end to end real estate software that considers your current digital state and business goals.",
        },
        items: [
          {
            name: "Real estate software development",
            body: "Development of custom property solutions from scratch with a focus on performance, cost efficiency, scalability, and resiliency.",
          },
          {
            name: "Property CRM and listing platforms",
            body: "CRM, listing management, and syndication systems that keep your inventory, leads, and deals connected in one place.",
          },
          {
            name: "Legacy system modernization",
            body: "Reengineering your existing real estate solutions to meet the latest standards in security, usability, and interoperability.",
          },
          {
            name: "Real estate AI integration",
            body: "Integrating AI models into your property systems and building AI ready workflows for valuation, matching, and forecasting.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "why",
        heading: {
          label: "What sets us apart",
          title: "Why choose us.",
          subtitle:
            "We leverage profound real estate domain knowledge and precision engineering to deliver secure, scalable, and business focused solutions that differentiate in the marketplace.",
        },
        items: [
          {
            icon: "gem",
            title: "Deep proptech domain expertise",
            body: "An established history of delivery in complex property systems, from listing portals to multi market investment platforms.",
          },
          {
            icon: "trending-up",
            title: "ROI driven development",
            body: "Each feature is built to maximize efficiency, profitability, and quantifiable business value.",
          },
          {
            icon: "shield",
            title: "Mission critical reliability",
            body: "Systems designed for high uptime, handling sensitive transaction and tenant data with unyielding accuracy.",
          },
          {
            icon: "pointer",
            title: "Professional grade UX",
            body: "Intuitive interfaces that streamline complex property workflows for maximum adoption and productivity.",
          },
          {
            icon: "blocks",
            title: "Custom and scalable architecture",
            body: "Solutions scaled to your portfolio and configured for new markets and expansion from day one.",
          },
          {
            icon: "lock",
            title: "Security first philosophy",
            body: "Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.",
          },
        ],
        callout: {
          icon: "zap",
          text: "Close deals faster, increase occupancy, and drive growth with property software and custom AI built for your business reality.",
        },
      },
      {
        type: "ai-groups",
        heading: {
          label: "AI in real estate",
          title: "Automating real estate operations with AI.",
          subtitle:
            "We integrate core AI technologies into property platforms, enabling teams to move faster and serve clients better in a competitive market.",
        },
        items: [
          {
            icon: "scan-search",
            name: "Computer vision",
            subtitle:
              "Enhance listings, inspections, and tours through visual intelligence.",
            items: [
              "Automated photo tagging and quality scoring for listings",
              "Virtual staging and room recognition from uploaded images",
              "Damage and condition assessment from inspection photos",
            ],
          },
          {
            icon: "sparkles",
            name: "Recommendation systems",
            subtitle:
              "Drive engagement and conversions with hyper personalized property matching.",
            items: [
              "Intelligent property recommendations based on buyer behavior",
              "Personalized listing feeds aligned with budget and preferences",
              "Adaptive cross selling for mortgage, insurance, and services",
            ],
          },
          {
            icon: "chart-line",
            name: "Valuation and predictive analytics",
            subtitle:
              "Enable proactive decisions with accurate property predictions based on market data.",
            items: [
              "Automated valuation models for pricing and appraisal",
              "Rental yield and price trend forecasting by location",
              "Demand forecasting for development and acquisition",
            ],
          },
          {
            icon: "languages",
            name: "Natural language processing",
            subtitle:
              "Transform client interactions and document handling with language intelligence.",
            items: [
              "Conversational chatbots and voice assistants for round the clock support",
              "Automated lease and contract review and summarization",
              "Sentiment analysis of client feedback for decision support",
            ],
          },
          {
            icon: "radar",
            name: "Risk and fraud intelligence",
            subtitle:
              "Strengthen trust and resilience with systems that detect irregularities before they escalate.",
            items: [
              "Real time fraud detection in applications and payments",
              "Identity verification and tenant screening with adaptive models",
              "Risk scoring engines for lending and investment decisions",
            ],
          },
          {
            icon: "bot",
            name: "Generative AI for property insights",
            subtitle:
              "Unlock new efficiencies by using generative models to streamline marketing and analysis.",
            items: [
              "Automated listing descriptions and marketing copy",
              "Natural language query systems for portfolio data",
              "Personalized investment insights delivered directly to clients",
            ],
          },
        ],
        bg: "surface",
      },
      {
        type: "process-steps",
        heading: {
          label: "How we build",
          title: "How we build scalable real estate solutions.",
        },
        steps: [
          {
            number: "01",
            name: "Project discovery",
            body: "First, we analyze your business goals, market position, and property workflows to create clearly articulated goals, optimize processes, and isolate the best digital opportunities.",
          },
          {
            number: "02",
            name: "Team composition",
            body: "We assemble multidisciplinary teams with proptech, data, and compliance backgrounds, matched to your project scope, regulatory requirements, and growth plans.",
          },
          {
            number: "03",
            name: "Project delivery",
            body: "From MVP through enterprise scale implementation, we build listing portals, CRM platforms, tenant apps, and scalable architectures for sustained success.",
          },
        ],
        footer:
          "From concept to launch, Xorora builds real estate software that streamlines property operations, connects seamlessly with your existing systems, and scales with your business. Our approach draws on deep proptech experience, a proven technology stack, and a focus on measurable outcomes.",
        ctaLabel: "Request a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question: "What types of real estate software can you build?",
            answer:
              "We build listing portals, property and tenant CRM, brokerage platforms, property management systems, investment and analytics dashboards, and tenant or buyer mobile apps, all tailored to your business model.",
          },
          {
            question:
              "What are the typical project timelines for real estate app development?",
            answer:
              "A focused MVP usually ships in a few months, while a full platform with integrations runs longer. After discovery we give a clear, milestone based timeline so you always know what is being delivered and when.",
          },
          {
            question: "Can you integrate with MLS, CRM, and listing portals?",
            answer:
              "Yes. We integrate with MLS feeds, popular CRMs, listing portals, payment providers, and e signature tools through robust APIs so your data stays in sync across every system.",
          },
          {
            question: "Do you provide post launch maintenance and support?",
            answer:
              "Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your portfolio and user base grow.",
          },
          {
            question: "How do you use AI in real estate platforms?",
            answer:
              "We apply machine learning for valuation, property matching, and demand forecasting, and use modern AI for listing automation, document review, and client copilots where they add measurable value.",
          },
          {
            question: "How do you handle data security and compliance?",
            answer:
              "Security is built into the foundation with encryption, secure APIs, access controls, and rigorous testing, designed to meet standards such as SOC 2 and GDPR.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "band-cta",
        title: "Scale your vision with next generation real estate solutions.",
        subtitle:
          "We design and develop custom listing platforms, CRM systems, tenant portals, and property analytics dashboards built to align with your strategy and generate measurable ROI at every stage of growth.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/realestate/header-bg.jpg",
      },
    ],
  },
  fintech: {
    slug: "fintech",
    name: "Fintech",
    metaTitle: "Xorora — Fintech Software Development",
    metaDescription:
      "Custom built payment platforms, lending systems, risk management tools, and analytics dashboards engineered to fit your business model, streamline financial operations, and deliver measurable ROI as you grow.",
    headerBg: "/assets/fintech/header-bg.jpg",
    hero: {
      title: "Custom fintech software for future driven companies.",
      subtitle:
        "Custom built payment platforms, lending systems, risk management tools, and analytics dashboards engineered to fit your business model, streamline financial operations, and deliver measurable ROI as you grow.",
      badges: [
        { icon: "shield-check", label: "PCI DSS ready" },
        { icon: "lock", label: "PSD2 & GDPR" },
        { icon: "award", label: "ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Pain points & value proposition",
          title: "Pain points we solve with our fintech development services.",
          subtitle:
            "Most executives say poor decision making costs them revenue, often because systems, compliance, and customer experience are not working in sync. We fix that.",
        },
        items: [
          {
            icon: "user-check",
            title: "Slow and costly customer onboarding (KYC)",
            body: "Turn days into minutes. We automate identity verification and background checks, enabling a fully digital KYC process that is secure, fast, and compliant.",
          },
          {
            icon: "layers",
            title: "Legacy tech holding you back",
            body: "Modernize without a full rebuild. We add a flexible, API ready layer over legacy systems so you can launch new financial products quickly and integrate with partners easily.",
          },
          {
            icon: "sparkles",
            title: "Poor customer experience and no personalization",
            body: "Provide the right product at the right time. Our solutions read customer behavior and deliver individual financial products inside an easy, modern interface.",
          },
          {
            icon: "shield-check",
            title: "Advanced regulatory compliance (PSD2, PCI DSS, GDPR)",
            body: "We embed compliance into your platform foundation so you can expand globally without sleepless nights spent on audits.",
          },
        ],
      },
      {
        type: "services",
        heading: {
          label: "Capabilities",
          title: "Financial software development services we offer.",
          subtitle:
            "Our fintech specialists deliver end to end financial software development services that consider your current digital state and business goals.",
        },
        items: [
          {
            name: "FinTech software development",
            body: "Development of custom fintech solutions from scratch with a focus on performance, cost efficiency, scalability, and resiliency.",
          },
          {
            name: "Code audit for FinTech projects",
            body: "Comprehensive review of your financial software codebase to detect vulnerabilities or compliance gaps and shape an improvement strategy.",
          },
          {
            name: "Financial system modernization",
            body: "Reengineering your existing fintech solutions to meet the latest industry standards in security, usability, and interoperability.",
          },
          {
            name: "FinTech AI integration",
            body: "Integrating AI models into your financial systems and building AI ready workflows to enhance productivity and reduce manual effort.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "why",
        heading: {
          label: "What sets us apart",
          title: "Why choose us.",
          subtitle:
            "We leverage profound fintech domain knowledge and precision engineering to deliver secure, scalable, and business focused solutions that differentiate in the marketplace.",
        },
        items: [
          {
            icon: "gem",
            title: "Deep fintech domain expertise",
            body: "An established history of delivery in complex financial systems, from robo advisors to multi asset trading platforms.",
          },
          {
            icon: "trending-up",
            title: "ROI driven development",
            body: "Each feature is built to maximize efficiency, profitability, and quantifiable business value.",
          },
          {
            icon: "shield",
            title: "Mission critical reliability",
            body: "Systems designed for high uptime, handling sensitive financial information with unyielding accuracy.",
          },
          {
            icon: "pointer",
            title: "Professional grade UX",
            body: "Intuitive interfaces that streamline complex workflows for maximum adoption and productivity.",
          },
          {
            icon: "blocks",
            title: "Custom and scalable architecture",
            body: "Solutions scaled to your business and configured for global expansion from day one.",
          },
          {
            icon: "lock",
            title: "Security first philosophy",
            body: "Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.",
          },
        ],
        callout: {
          icon: "zap",
          text: "Cut risk. Increase efficiency. Drive growth with fintech software and custom AI built for your business reality.",
        },
      },
      {
        type: "featured-case",
        heading: { label: "Selected work", title: "Featured case study." },
        case: {
          slug: "regula",
          title: "Regulatory Intelligence Platform",
          description:
            "An automation first platform that monitors regulators continuously, scores the business impact of every change, and alerts compliance teams in under an hour. We engineered the real time crawling, AI analysis, and multi channel delivery end to end.",
          image: "/assets/regula/featured.jpg",
          metrics: [
            { value: "70%", label: "Less manual workload" },
            { value: "< 1 hr", label: "Change detection" },
            { value: "12 mo", label: "To production" },
          ],
          tags: ["RegTech", "FinTech", "AI Automation", "Compliance"],
        },
      },
      {
        type: "ai-groups",
        heading: {
          label: "AI in fintech",
          title: "Automating fintech operations with AI.",
          subtitle:
            "We integrate core AI technologies into financial platforms, enabling institutions to innovate faster and strengthen compliance in a rapidly evolving market.",
        },
        items: [
          {
            icon: "scan-face",
            name: "Computer vision",
            subtitle:
              "Enhance security, compliance, and customer experience through visual intelligence.",
            items: [
              "Biometric KYC and facial recognition for digital onboarding",
              "Document scanning and verification for IDs and contracts",
              "Fraud detection via image and video analysis",
            ],
          },
          {
            icon: "sparkles",
            name: "Recommendation systems",
            subtitle:
              "Drive engagement and revenue with hyper personalized financial services.",
            items: [
              "Intelligent product recommendations based on usage patterns",
              "Personalized investment suggestions aligned with risk profiles",
              "Adaptive cross selling for banking, insurance, and trading apps",
            ],
          },
          {
            icon: "chart-line",
            name: "Forecasting and predictive analytics",
            subtitle:
              "Enable proactive decision making with accurate financial predictions based on historical data.",
            items: [
              "Market trend forecasting for investment and trading strategies",
              "Credit risk prediction and default probability modeling",
              "Demand forecasting for loans, insurance, and financial products",
            ],
          },
          {
            icon: "languages",
            name: "Natural language processing",
            subtitle:
              "Transform customer interactions and compliance processes with language intelligence.",
            items: [
              "Conversational chatbots and voice assistants for round the clock support",
              "Automated compliance monitoring through documents",
              "Sentiment analysis of customer feedback for decision support",
            ],
          },
          {
            icon: "radar",
            name: "Anomaly detection and risk intelligence",
            subtitle:
              "Strengthen compliance and resilience with systems that detect irregularities before they escalate.",
            items: [
              "Real time anomaly detection in transactions to flag fraud",
              "Anti money laundering monitoring with adaptive ML models",
              "Risk scoring engines for early detection of credit defaults",
            ],
          },
          {
            icon: "bot",
            name: "Generative AI for financial insights",
            subtitle:
              "Unlock new efficiencies by using generative models to streamline analysis and client interactions.",
            items: [
              "Automated report generation for investors and stakeholders",
              "Natural language query systems for instant access to complex data",
              "Personalized financial insights delivered directly to customers",
            ],
          },
        ],
        bg: "surface",
      },
      {
        type: "process-steps",
        heading: {
          label: "How we build",
          title: "How we build scalable fintech solutions.",
        },
        steps: [
          {
            number: "01",
            name: "Project discovery",
            body: "First, we analyze your business goals, compliance needs, and financial procedures to create clearly articulated goals, optimize processes, and isolate the best digital opportunities.",
          },
          {
            number: "02",
            name: "Team composition",
            body: "We assemble multidisciplinary teams with fintech, security, and compliance backgrounds, matched to your project scope, regulatory requirements, and growth plans.",
          },
          {
            number: "03",
            name: "Project delivery",
            body: "From MVP through enterprise scale implementation, we build secure payment gateways, trading platforms, wealth management tools, and scalable architectures for sustained success.",
          },
        ],
        footer:
          "From concept to launch, Xorora builds fintech software that streamlines financial processes, connects seamlessly with your existing systems, and scales with your business. Our approach draws on deep fintech experience, a proven technology stack, and regulatory compliance.",
        ctaLabel: "Request a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question: "What is fintech KYC and AML and why is it important?",
            answer:
              "KYC (Know Your Customer) and AML (Anti Money Laundering) are compliance procedures used to verify user identity, prevent fraud, and combat financial crime. In fintech applications, strong KYC and AML compliance is crucial to meet legal requirements, protect against criminal transactions, and build customer trust.",
          },
          {
            question:
              "What are the typical project timelines for fintech app development?",
            answer:
              "A focused MVP usually ships in a few months, while a full platform with integrations and compliance work runs longer. After discovery we give a clear, milestone based timeline so you always know what is being delivered and when.",
          },
          {
            question:
              "What are the benefits of generative AI in fintech software?",
            answer:
              "Generative AI streamlines analysis, automates report generation, powers natural language access to complex data, and delivers personalized insights to customers, freeing your team to focus on higher value work.",
          },
          {
            question:
              "Do you provide post launch maintenance and DevOps services for fintech applications?",
            answer:
              "Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your user base grows.",
          },
          {
            question:
              "How do you use AI and LLMs to optimize financial decision making or risk assessment?",
            answer:
              "We apply machine learning for credit risk, fraud detection, and forecasting, and use modern LLMs for document processing, compliance monitoring, and operational copilots where they add measurable value.",
          },
          {
            question:
              "What is finance management in the context of fintech solutions?",
            answer:
              "Finance management covers the tools that help institutions and customers track, analyze, and act on financial data, from budgeting and analytics dashboards to automated reconciliation and reporting.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "band-cta",
        title: "Scale your vision with next generation fintech solutions.",
        subtitle:
          "We design and develop custom payment platforms, lending automation, risk systems, and financial analytics dashboards built to align with your strategy and generate measurable ROI at every stage of growth.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/fintech/header-bg.jpg",
      },
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    name: "E-commerce",
    metaTitle: "Xorora — E-commerce Software Development",
    metaDescription:
      "Custom built storefronts, headless commerce platforms, marketplace systems, and analytics dashboards engineered to fit your business model, lift conversion, and deliver measurable ROI as you scale.",
    headerBg: "/assets/ecommerce/header-bg.jpg",
    hero: {
      title: "Custom e-commerce software for growth driven brands.",
      subtitle:
        "Custom built storefronts, headless commerce platforms, marketplace systems, and analytics dashboards engineered to fit your business model, lift conversion, and deliver measurable ROI as you scale.",
      badges: [
        { icon: "shield-check", label: "PCI DSS ready" },
        { icon: "lock", label: "GDPR compliant" },
        { icon: "award", label: "SOC 2 & ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Pain points & value proposition",
          title:
            "Pain points we solve with our e-commerce development services.",
          subtitle:
            "Brands lose revenue when the storefront, inventory, and customer experience are not working in sync. We bring them together into one fast, connected platform.",
        },
        items: [
          {
            icon: "shopping-cart",
            title: "High cart abandonment and low conversion",
            body: "Turn browsers into buyers. We streamline checkout, speed up page loads, and personalize the journey so more visitors complete their purchase.",
          },
          {
            icon: "layers",
            title: "Legacy platforms that cannot keep up",
            body: "Modernize without a full rebuild. We add a flexible, headless layer over legacy commerce systems so you can launch new channels quickly and integrate partners easily.",
          },
          {
            icon: "boxes",
            title: "Fragmented inventory and channels",
            body: "Sell everywhere with one source of truth. We unify inventory, orders, and pricing across web, mobile, and marketplaces in real time.",
          },
          {
            icon: "shield-check",
            title: "Payment security and compliance",
            body: "We embed PCI DSS and GDPR compliance into your platform foundation so you can scale globally without sleepless nights spent on audits.",
          },
        ],
      },
      {
        type: "services",
        heading: {
          label: "Capabilities",
          title: "E-commerce software development services we offer.",
          subtitle:
            "Our specialists deliver end to end commerce software that considers your current digital state and business goals.",
        },
        items: [
          {
            name: "E-commerce software development",
            body: "Development of custom commerce solutions from scratch with a focus on performance, cost efficiency, scalability, and resiliency.",
          },
          {
            name: "Headless and storefront platforms",
            body: "Headless commerce, custom storefronts, and progressive web apps that load fast and convert across every device.",
          },
          {
            name: "Marketplace and multi vendor systems",
            body: "Multi vendor marketplaces with vendor onboarding, split payments, and unified catalog and order management.",
          },
          {
            name: "E-commerce AI integration",
            body: "Integrating AI models into your commerce stack for search, recommendations, pricing, and demand forecasting.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "why",
        heading: {
          label: "What sets us apart",
          title: "Why choose us.",
          subtitle:
            "We leverage profound commerce domain knowledge and precision engineering to deliver fast, scalable, and business focused solutions that differentiate in the marketplace.",
        },
        items: [
          {
            icon: "gem",
            title: "Deep commerce domain expertise",
            body: "An established history of delivery in complex commerce systems, from high traffic storefronts to multi vendor marketplaces.",
          },
          {
            icon: "trending-up",
            title: "Conversion driven development",
            body: "Each feature is built to maximize conversion, average order value, and quantifiable business value.",
          },
          {
            icon: "shield",
            title: "Mission critical reliability",
            body: "Systems designed for peak season uptime, handling sensitive payment data with unyielding accuracy.",
          },
          {
            icon: "pointer",
            title: "Professional grade UX",
            body: "Intuitive shopping experiences that streamline discovery and checkout for maximum conversion.",
          },
          {
            icon: "blocks",
            title: "Custom and scalable architecture",
            body: "Solutions scaled to your catalog and configured for new markets and channels from day one.",
          },
          {
            icon: "lock",
            title: "Security first philosophy",
            body: "Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.",
          },
        ],
        callout: {
          icon: "zap",
          text: "Lift conversion, increase order value, and drive growth with commerce software and custom AI built for your business reality.",
        },
      },
      {
        type: "ai-groups",
        heading: {
          label: "AI in e-commerce",
          title: "Automating e-commerce operations with AI.",
          subtitle:
            "We integrate core AI technologies into commerce platforms, enabling brands to move faster, convert more, and serve shoppers better in a competitive market.",
        },
        items: [
          {
            icon: "search",
            name: "AI search and discovery",
            subtitle:
              "Help shoppers find the right product faster with intelligent search.",
            items: [
              "Semantic and visual product search",
              "Typo tolerant, intent aware results",
              "Personalized merchandising by segment",
            ],
          },
          {
            icon: "sparkles",
            name: "Recommendation engines",
            subtitle:
              "Drive engagement and order value with hyper personalized suggestions.",
            items: [
              "Product recommendations from browsing behavior",
              "Personalized bundles and cross sell",
              "Adaptive offers aligned with intent",
            ],
          },
          {
            icon: "chart-line",
            name: "Pricing and demand analytics",
            subtitle:
              "Enable proactive decisions with accurate predictions from sales data.",
            items: [
              "Dynamic pricing and promotion modeling",
              "Demand forecasting for inventory planning",
              "Churn and lifetime value prediction",
            ],
          },
          {
            icon: "languages",
            name: "Conversational commerce",
            subtitle:
              "Transform support and selling with language intelligence.",
            items: [
              "Round the clock shopping assistants and chatbots",
              "Automated order tracking and returns help",
              "Sentiment analysis of reviews and feedback",
            ],
          },
          {
            icon: "radar",
            name: "Fraud and risk intelligence",
            subtitle:
              "Protect revenue with systems that detect irregularities before they escalate.",
            items: [
              "Real time fraud detection on transactions",
              "Chargeback and abuse prevention models",
              "Account takeover and bot mitigation",
            ],
          },
          {
            icon: "bot",
            name: "Generative AI for merchandising",
            subtitle:
              "Unlock efficiency by using generative models to scale content.",
            items: [
              "Automated product descriptions and copy",
              "Natural language query over catalog data",
              "Personalized campaigns delivered to shoppers",
            ],
          },
        ],
        bg: "surface",
      },
      {
        type: "process-steps",
        heading: {
          label: "How we build",
          title: "How we build scalable e-commerce solutions.",
        },
        steps: [
          {
            number: "01",
            name: "Project discovery",
            body: "First, we analyze your business goals, catalog, and customer journey to create clearly articulated goals, optimize processes, and isolate the best digital opportunities.",
          },
          {
            number: "02",
            name: "Team composition",
            body: "We assemble multidisciplinary teams with commerce, data, and compliance backgrounds, matched to your project scope, peak season requirements, and growth plans.",
          },
          {
            number: "03",
            name: "Project delivery",
            body: "From MVP through enterprise scale implementation, we build storefronts, checkout, marketplace systems, and scalable architectures for sustained success.",
          },
        ],
        footer:
          "From concept to launch, Xorora builds e-commerce software that streamlines operations, connects seamlessly with your existing systems, and scales with your business. Our approach draws on deep commerce experience, a proven technology stack, and a focus on measurable outcomes.",
        ctaLabel: "Request a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question: "What types of e-commerce software can you build?",
            answer:
              "We build custom storefronts, headless commerce platforms, progressive web apps, multi vendor marketplaces, B2B portals, and analytics dashboards, all tailored to your business model.",
          },
          {
            question:
              "Can you integrate with Shopify, platforms, and payment providers?",
            answer:
              "Yes. We integrate with Shopify, commercetools, and other platforms, plus payment providers, ERPs, and shipping and tax tools through robust APIs so your data stays in sync.",
          },
          {
            question:
              "What are the typical project timelines for e-commerce development?",
            answer:
              "A focused MVP usually ships in a few months, while a full platform with integrations runs longer. After discovery we give a clear, milestone based timeline.",
          },
          {
            question: "How do you handle peak season traffic and scale?",
            answer:
              "We architect for elastic scaling, caching, and load balancing so your store stays fast and available during launches, sales, and seasonal peaks.",
          },
          {
            question: "How do you use AI in commerce platforms?",
            answer:
              "We apply machine learning for search, recommendations, pricing, and fraud detection, and use modern AI for product content and shopping assistants where they add measurable value.",
          },
          {
            question: "Do you provide post launch maintenance and support?",
            answer:
              "Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your traffic grows.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "band-cta",
        title: "Scale your vision with next generation e-commerce solutions.",
        subtitle:
          "We design and develop custom storefronts, headless platforms, marketplaces, and commerce analytics dashboards built to align with your strategy and lift conversion at every stage of growth.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/ecommerce/header-bg.jpg",
      },
    ],
  },
  edtech: {
    slug: "edtech",
    name: "EdTech",
    metaTitle: "Xorora — EdTech Software Development",
    metaDescription:
      "We build EdTech software tailored to your learners, workflows, and growth targets, delivered by AI enabled engineering teams. We embed AI throughout the entire development lifecycle to ship up to twice as fast and at higher quality, with no proportional increase in headcount.",
    headerBg: "/assets/edtech/header-bg.jpg",
    hero: {
      title: "EdTech software development.",
      subtitle:
        "We build EdTech software tailored to your learners, workflows, and growth targets, delivered by AI enabled engineering teams. We embed AI throughout the entire development lifecycle to ship up to twice as fast and at higher quality, with no proportional increase in headcount.",
      badges: [
        { icon: "shield-check", label: "FERPA ready" },
        { icon: "lock", label: "GDPR compliant" },
        { icon: "award", label: "SOC 2 & ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
      ctaLabel: "Book a discovery call",
    },
    sections: [
      {
        type: "services",
        layout: "rows",
        heading: {
          label: "What we build",
          title: "EdTech software development services we offer.",
        },
        items: [
          {
            icon: "puzzle",
            title: "Custom EdTech software development",
            body: "As a full service education software company, we build solutions tailored to your learners, your content model, and your delivery goals. Architecture reflects your current scale and where you plan to be in three years, so you do not rebuild when you grow.",
          },
          {
            icon: "graduation-cap",
            title: "Learning management systems (LMS)",
            body: "We build LMS platforms that make course management straightforward for administrators and frictionless for learners. Progress tracking, enrollment workflows, and reporting are built into the platform.",
          },
          {
            icon: "monitor-play",
            title: "E learning platform development",
            body: "We develop complete e learning platforms with collaborative tools, interactive content delivery, and the infrastructure to handle large concurrent audiences. The focus is on keeping learners engaged from first login through completion.",
          },
          {
            icon: "smartphone",
            title: "Mobile learning applications",
            body: "We build mobile learning apps for iOS and Android that give learners consistent access to content regardless of device or connectivity.",
          },
          {
            icon: "briefcase",
            title: "Corporate training platforms",
            body: "We deliver training platforms for onboarding, compliance, and upskilling that connect to your HR systems and surface real data on learner progress. Training that is tracked and measurable is training that gets done.",
          },
          {
            icon: "sparkles",
            title: "AI powered learning solutions",
            body: "We build AI features into learning platforms: adaptive learning paths, automated assessments, RAG based support chatbots, and recommendation engines that personalize every learner journey.",
          },
          {
            icon: "layers",
            title: "Legacy system modernization",
            body: "We migrate outdated education platforms to modern, cloud native architectures. Data integrity, user continuity, and integration with your current toolstack are handled through the transition.",
          },
        ],
        bg: "surface",
      },
      {
        type: "capabilities",
        heading: { label: "How we deliver", title: "Our capabilities." },
        items: [
          {
            number: "01",
            title: "Scalable learning platforms",
            body: "We architect platforms with horizontal scaling, load balancing, and automated failover, built to handle peak enrollment traffic without performance degradation.",
          },
          {
            number: "02",
            title: "Cloud native EdTech solutions",
            body: "We build on AWS, Azure, and GCP using containerized microservices, CI and CD pipelines, and infrastructure as code for rapid, reliable updates.",
          },
          {
            number: "03",
            title: "AI and personalization in education",
            body: "We implement adaptive learning algorithms, LLM fine tuning, RAG pipelines, and recommendation engines using tools like LangChain and modern LLMs.",
          },
          {
            number: "04",
            title: "Data analytics and learning insights",
            body: "We build analytics pipelines and dashboards that turn raw engagement data into actionable insight: enrollment funnels, cohort analysis, and at risk learner identification.",
          },
          {
            number: "05",
            title: "Product strategy and EdTech consulting",
            body: "We assess your platform state, define a technical roadmap, and help prioritize features against market timing and resource constraints.",
          },
          {
            number: "06",
            title: "AI enabled engineering delivery",
            body: "AI agents complete multi step tasks across the development cycle, writing test suites, generating components, and producing pull requests while engineers review every output and own all architectural decisions.",
          },
        ],
      },
      {
        type: "band-cta",
        title: "See how Xorora builds EdTech platforms that perform.",
        ctaPrimary: "Book a discovery call",
        bg: "navy-950",
      },
      {
        type: "what-you-get",
        heading: { label: "The outcome", title: "What you get." },
        items: [
          {
            icon: "mouse-pointer-2",
            title: "Built around your operations",
            body: "Every system is designed around how your platform actually runs, your content model, your user roles, and your integration requirements, without forcing a full infrastructure replacement.",
          },
          {
            icon: "sparkle",
            title: "Seamless user experience",
            body: "Clean, tested interfaces for both learners and administrators. Usability is validated through the build, not assumed.",
          },
          {
            icon: "maximize-2",
            title: "Scalable architecture",
            body: "Systems that grow with your platform. Adding user cohorts, new content types, or third party integrations does not require re architecture.",
          },
          {
            icon: "shield-check",
            title: "Compliance ready systems",
            body: "Data handling and access controls built from the start to meet GDPR, FERPA, and other applicable requirements.",
          },
        ],
      },
      {
        type: "faq",
        heading: {
          label: "Good to know",
          title: "EdTech software development FAQ.",
        },
        items: [
          {
            question: "What is educational software development?",
            answer:
              "Educational software development is the design and engineering of digital products for learning, including LMS platforms, e learning portals, mobile learning apps, and corporate training systems, built around your learners and content model.",
          },
          {
            question: "Do you offer EdTech legacy software modernization?",
            answer:
              "Yes. We migrate outdated education platforms to modern, cloud native architectures, handling data integrity, user continuity, and integration with your current toolstack through the transition.",
          },
          {
            question: "What does it cost to build an EdTech solution?",
            answer:
              "Cost depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know what each module and milestone costs before we start building.",
          },
          {
            question:
              "Do EdTech software development companies assist in digital transformation?",
            answer:
              "Yes. We help established education businesses digitalize their workflows, modernize platforms, and adopt AI so they can serve more learners and gain a competitive edge.",
          },
          {
            question: "Can AI improve the learning experience in my product?",
            answer:
              "Absolutely. We build adaptive learning paths, automated assessments, RAG based support chatbots, and recommendation engines that personalize each learner journey and improve outcomes.",
          },
          {
            question: "Is mobile app development important for EdTech?",
            answer:
              "Yes. Mobile learning gives learners consistent access regardless of device or connectivity, which improves engagement, completion rates, and reach.",
          },
          {
            question: "Does gamification increase learner engagement?",
            answer:
              "When designed well, gamification increases motivation and retention. We build points, streaks, badges, and progress mechanics that reinforce real learning rather than distract from it.",
          },
        ],
      },
      {
        type: "contact",
        info: {
          title: "Ready to bring your idea into reality?",
          paragraphs: [
            "We will sign an NDA if required, carefully analyze your request, and prepare a preliminary estimate.",
            "Then we meet to discuss your needs, answer questions, and align on next steps.",
          ],
          email: "partners@xorora.ai",
          phone: "+1 (415) 555-0148",
          budgetOptions: [
            "up to $10k",
            "$10k – $20k",
            "$20k – $50k",
            "$50k – $100k",
            "> $100k",
          ],
          hearAboutOptions: ["Clutch", "Google", "Referral", "LinkedIn"],
        },
      },
    ],
  },
  logistics: {
    slug: "logistics",
    name: "Logistics",
    metaTitle: "Xorora — Logistics Software Development",
    metaDescription:
      "Logistics software development services. Streamline supply chains, enable real time tracking, and automate warehouse operations with custom platforms engineered for your operation.",
    headerBg: "/assets/logistics/header-bg.jpg",
    hero: {
      title: "Logistics software development services.",
      bullets: [
        "Streamline supply chains and cut operational cost",
        "Real time tracking that builds customer loyalty",
        "Warehouse automation engineered for flawless accuracy",
      ],
      badges: [
        { icon: "shield-check", label: "ISO 9001" },
        { icon: "shield-check", label: "ISO 27001" },
        { icon: "award", label: "Clutch Top 1000" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "challenges",
        heading: {
          label: "Pain points & value proposition",
          title: "Common challenges in logistics software we solve.",
        },
        lead: "We solve the industry's most significant pain points with scalable, secure logistics software built to fit the way your operation actually runs.",
        items: [
          {
            number: "01",
            title: "Lack of real time visibility and control",
            body: "Without live tracking, logistics teams struggle to respond to disruptions.",
            solution:
              "We build real time vehicle and shipment tracking that gives dispatchers complete visibility and lets customers follow every delivery as it moves.",
          },
          {
            number: "02",
            title: "Inefficient planning and high operating cost",
            body: "Manual route planning wastes time, fuel, and people.",
            solution:
              "We engineer route optimization that cuts delivery times by double digits and removes the daily scheduling chaos.",
          },
          {
            number: "03",
            title: "Complex, opaque paperwork",
            body: "Paper based processes slow everything down and invite costly errors.",
            solution:
              "We digitize and automate document workflows for compliance, speed, and error prevention.",
          },
          {
            number: "04",
            title: "Fragmented IT systems",
            body: "Disconnected TMS, WMS, ERP, and GPS tools lead to duplicated work and poor decisions.",
            solution:
              "We create unified logistics platforms with smart integrations for one cohesive digital ecosystem.",
          },
        ],
      },
      {
        type: "industries",
        heading: {
          label: "Who we build for",
          title: "Industries we serve.",
          subtitle:
            "We do not do off the shelf. We build custom logistics software that fits your operational DNA.",
        },
        items: [
          {
            icon: "boxes",
            name: "3PLs and freight forwarders",
            body: "We build powerful multi client logistics platforms with automated workflows and partner integrations.",
            items: [
              "Centralized TMS with client, shipment, and billing management",
              "Client portals for tracking, scheduling, and document access",
              "ERP, WMS, and API integration with performance dashboards",
            ],
          },
          {
            icon: "shopping-cart",
            name: "E commerce and retail",
            body: "We create smart logistics software for fast, accurate, last mile fulfillment.",
            items: [
              "Real time delivery tracking and inventory aware routing",
              "Buyer behavior forecasting and campaign simulation",
              "Dynamic warehouse and picking optimization",
            ],
          },
          {
            icon: "factory",
            name: "Manufacturing companies",
            body: "We bring automation across inventory, warehouse, and transportation.",
            items: [
              "RFID and barcode enabled WMS",
              "Fleet scheduling aligned with production",
              "Analytics dashboards for inventory and distribution oversight",
            ],
          },
          {
            icon: "truck",
            name: "Fleets and carriers",
            body: "We unite fleet management and transportation software in one digital control center.",
            items: [
              "Predictive maintenance and load assignment",
              "Driver certification and monitoring",
              "Vehicle data integration for fuel efficiency and safety",
            ],
          },
          {
            icon: "bus",
            name: "Passenger transportation",
            body: "We craft passenger transit platforms built for scale.",
            items: [
              "Real time vehicle and passenger tracking",
              "Load based route assignment and planning",
              "Dispatcher dashboards and integrated trip scheduling",
            ],
          },
        ],
      },
      {
        type: "capabilities",
        heading: {
          label: "What sets us apart",
          title: "Core features and architecture of our logistics software.",
          subtitle:
            "Our logistics and transportation software stack is modular, scalable, and designed for long term adaptability.",
        },
        items: [
          {
            icon: "route",
            title: "Transportation Management System",
            body: "End to end transport management, route planning, order handling, carrier management, and freight calculation.",
          },
          {
            icon: "warehouse",
            title: "Warehouse Management System",
            body: "Fleet and warehouse management, vehicle details, maintenance schedules, fuel monitoring, and driver management.",
          },
          {
            icon: "package-check",
            title: "Last mile delivery module",
            body: "Door to door delivery management, dynamic route optimization for couriers, a driver app, and electronic proof of delivery.",
          },
          {
            icon: "satellite-dish",
            title: "Real time fleet tracking",
            body: "Feature rich GPS based vehicle tracking software for easy operational control and full visibility.",
          },
          {
            icon: "layout-dashboard",
            title: "Customizable dashboards",
            body: "A handy dashboard creator with widgets, KPIs, graphs, charts, and maps for monitoring your key metrics.",
          },
          {
            icon: "calculator",
            title: "Accounting systems integration",
            body: "APIs for easy data exchange of orders and statuses with your most valuable partners and counterparties.",
          },
          {
            icon: "share-2",
            title: "Client and partner integration",
            body: "Smart integrations that keep clients, carriers, and partners in sync across the whole network.",
          },
          {
            icon: "receipt",
            title: "Billing and invoicing module",
            body: "Computation of service charges from tariffs and actuals, with automatic invoicing built in.",
          },
          {
            icon: "sparkles",
            title: "AI based forecasting",
            body: "Demand forecasting, inventory optimization, and peak load forecasting powered by applied machine learning.",
          },
          {
            icon: "files",
            title: "Document management system",
            body: "A central repository for transport and warehouse documents with electronic approval and signature workflows.",
          },
        ],
      },
      {
        type: "process-tabs",
        heading: {
          label: "How we deliver",
          title: "Our logistics software development process.",
        },
        lead: "We use a proven development lifecycle to build custom solutions that streamline logistics, optimize workflows, and give visibility across transport and supply chains.",
        tabs: [
          {
            tab: "Define needs",
            body: "We analyze your logistics process, operating model, and target users to define requirements, goals, and KPIs. Our team identifies efficiency and cost drivers so your product delivers measurable results aligned with your business vision.",
            outcomes: [
              "Product vision document",
              "Deep workflow analysis",
              "Preliminary estimate",
              "Product creation roadmap",
            ],
          },
          {
            tab: "Solution design",
            body: "We translate requirements into architecture, data models, and a clean interface. Every screen and integration is mapped before a line of production code is written, so delivery stays predictable.",
            outcomes: [
              "System architecture",
              "UX and UI design",
              "Integration plan",
              "Tech stack decision",
            ],
          },
          {
            tab: "Delivery setup",
            body: "We stand up environments, pipelines, and the team model that fits you, whether dedicated team or staff augmentation. Security and observability are wired in from the first commit.",
            outcomes: [
              "CI and CD pipelines",
              "Cloud environment",
              "Security guardrails",
              "Team onboarding",
            ],
          },
          {
            tab: "Development",
            body: "We build in short, reviewable increments with continuous demos. You see working software every sprint, and the platform ships to production ready to scale across your transport and supply chain.",
            outcomes: [
              "Working software each sprint",
              "Continuous testing",
              "Production release",
              "Ongoing support",
            ],
          },
        ],
        ctaLabel: "Book a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question:
              "Can you integrate logistics software with existing ERP or CRM systems?",
            answer:
              "Yes. Custom logistics software integrates readily with your existing ERP, CRM, WMS, or accounting systems. We specialize in nimble platforms that exchange data smoothly and prevent workflow silos through robust API and EDI integrations.",
          },
          {
            question:
              "How much does it cost to develop a transportation management system?",
            answer:
              "Cost depends on scope, integrations, and team model. After a short discovery we provide a clear, itemized estimate so you know exactly what each module and milestone costs before we start building.",
          },
          {
            question:
              "Which AI tools are used in transportation and logistics?",
            answer:
              "We apply machine learning for demand forecasting, route optimization, predictive maintenance, and anomaly detection, plus modern LLMs for document processing and operational copilots where they add real value.",
          },
          {
            question:
              "Do you offer ongoing logistics software support and maintenance?",
            answer:
              "Yes. We offer ongoing support, monitoring, and iterative improvement so your platform stays reliable and keeps pace with your operation as it grows.",
          },
          {
            question:
              "What platforms can a transportation application support?",
            answer:
              "We deliver responsive web apps, native and cross platform mobile apps for drivers and dispatchers, and back office portals, all sharing one secure backend.",
          },
          {
            question:
              "What are the benefits of custom logistics software over off the shelf solutions?",
            answer:
              "Custom software fits your exact workflows, integrates with the tools you already run, and scales on your terms. You own the roadmap instead of waiting on a vendor and paying per seat for features you never use.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "band-cta",
        title: "Design logistics systems that grow with your business.",
        subtitle:
          "Custom TMS, WMS, route optimization, and real time tracking, engineered to match your operation, streamline workflows, and deliver clear ROI at scale.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/logistics/header-bg.jpg",
      },
    ],
  },
  saas: {
    slug: "saas",
    name: "SaaS",
    metaTitle: "Xorora — SaaS Software Development",
    metaDescription:
      "Custom built multi tenant platforms, billing and subscription systems, admin dashboards, and analytics engineered to fit your product, streamline operations, and deliver measurable ROI as you scale from first customer to enterprise.",
    headerBg: "/assets/saas/header-bg.jpg",
    hero: {
      title: "Custom SaaS software for scale driven companies.",
      subtitle:
        "Custom built multi tenant platforms, billing and subscription systems, admin dashboards, and analytics engineered to fit your product, streamline operations, and deliver measurable ROI as you scale from first customer to enterprise.",
      badges: [
        { icon: "shield-check", label: "SOC 2 ready" },
        { icon: "lock", label: "GDPR compliant" },
        { icon: "award", label: "ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Pain points & value proposition",
          title: "Pain points we solve with our SaaS development services.",
          subtitle:
            "SaaS teams lose momentum when tenancy, billing, and the product experience are not working in sync. We bring them together into one scalable platform.",
        },
        items: [
          {
            icon: "users",
            title: "Multi tenant complexity slows you down",
            body: "Ship to every customer safely. We build isolated, scalable multi tenancy so one account never affects another, and onboarding new tenants takes minutes.",
          },
          {
            icon: "layers",
            title: "Legacy monolith holding back releases",
            body: "Modernize without a full rewrite. We add modular, API first services around your core so you can ship features faster and integrate partners easily.",
          },
          {
            icon: "credit-card",
            title: "Billing and subscription sprawl",
            body: "One commercial backbone. We unify plans, usage metering, and billing so revenue operations run from a single, reliable system.",
          },
          {
            icon: "gauge",
            title: "Churn from poor onboarding and insight",
            body: "Turn signups into retained customers. We build guided onboarding, in product analytics, and health signals that surface risk before it becomes churn.",
          },
        ],
      },
      {
        type: "services",
        heading: {
          label: "Capabilities",
          title: "SaaS software development services we offer.",
          subtitle:
            "Our specialists deliver end to end SaaS software that considers your current digital state and business goals.",
        },
        items: [
          {
            name: "SaaS product development",
            body: "Development of custom multi tenant products from scratch with a focus on performance, cost efficiency, scalability, and resiliency.",
          },
          {
            name: "MVP and product engineering",
            body: "From first prototype to production, we build and harden the platform your business runs on, fast.",
          },
          {
            name: "Billing and subscription systems",
            body: "Plans, usage metering, and billing standardized across your product with Stripe and other providers.",
          },
          {
            name: "SaaS AI integration",
            body: "Integrating AI models into your platform for search, copilots, automation, and analytics that lift retention.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "why",
        heading: {
          label: "What sets us apart",
          title: "Why choose us.",
          subtitle:
            "We leverage profound SaaS domain knowledge and precision engineering to deliver scalable, reliable, and business focused products that differentiate in the marketplace.",
        },
        items: [
          {
            icon: "gem",
            title: "Deep SaaS domain expertise",
            body: "An established history of delivery in complex products, from multi tenant platforms to real time monitoring systems.",
          },
          {
            icon: "trending-up",
            title: "Retention driven development",
            body: "Each feature is built to maximize activation, retention, and quantifiable business value.",
          },
          {
            icon: "shield",
            title: "Mission critical reliability",
            body: "Systems designed for high uptime, handling customer data with unyielding accuracy.",
          },
          {
            icon: "pointer",
            title: "Professional grade UX",
            body: "Intuitive product experiences that streamline onboarding and daily use for maximum adoption.",
          },
          {
            icon: "blocks",
            title: "Custom and scalable architecture",
            body: "Multi tenant solutions scaled to your roadmap and configured for enterprise from day one.",
          },
          {
            icon: "lock",
            title: "Security first philosophy",
            body: "Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.",
          },
        ],
        callout: {
          icon: "zap",
          text: "Activate faster, retain longer, and scale with SaaS software and custom AI built for your business reality.",
        },
      },
      {
        type: "featured-cases",
        heading: { label: "Selected work", title: "Featured case studies." },
        cases: [
          {
            slug: "unified-ai-voice-operations",
            title: "AI Voice Operations Platform",
            description:
              "Four purpose built portals on one shared backend turned powerful voice agent technology into a commercially ready product.",
            image: "/assets/saas/voice-ops.jpg",
            metrics: [
              { value: "4", label: "Role-based portals" },
              { value: "16 mo", label: "To production" },
            ],
            tags: ["AI Voice", "B2B SaaS", "Multi-portal"],
          },
          {
            slug: "pingpanda",
            title: "SaaS Event Monitoring",
            description:
              "An API first event notifier: send a typed event, get an instant alert with full context. No dashboards to configure, no blind spots.",
            image: "/assets/saas/event-monitoring.jpg",
            metrics: [
              { value: "Real-time", label: "Event delivery" },
              { value: "13 mo", label: "To production" },
            ],
            tags: ["SaaS", "Real-time", "API-first"],
          },
        ],
      },
      {
        type: "process-steps",
        heading: {
          label: "How we build",
          title: "How we build scalable SaaS products.",
        },
        steps: [
          {
            number: "01",
            name: "Project discovery",
            body: "First, we analyze your product goals, customers, and workflows to create clearly articulated goals, optimize processes, and isolate the best opportunities to ship value fast.",
          },
          {
            number: "02",
            name: "Team composition",
            body: "We assemble multidisciplinary teams with SaaS, data, and compliance backgrounds, matched to your project scope, scale requirements, and growth plans.",
          },
          {
            number: "03",
            name: "Project delivery",
            body: "From MVP through enterprise scale implementation, we build multi tenant platforms, billing, dashboards, and scalable architectures for sustained success.",
          },
        ],
        footer:
          "From concept to launch, Xorora builds SaaS software that streamlines operations, connects seamlessly with your existing systems, and scales with your business. Our approach draws on deep product experience, a proven technology stack, and a focus on measurable outcomes.",
        ctaLabel: "Request a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question: "What types of SaaS software can you build?",
            answer:
              "We build multi tenant platforms, admin and customer dashboards, billing and subscription systems, internal tools, B2B portals, and analytics products, all tailored to your business model.",
          },
          {
            question: "How do you handle multi tenancy and data isolation?",
            answer:
              "We architect tenancy with strict data isolation, per tenant configuration, and scalable provisioning so one customer never affects another and onboarding stays fast.",
          },
          {
            question: "Can you integrate billing and third party services?",
            answer:
              "Yes. We integrate Stripe and other billing providers, auth systems, analytics, and partner APIs through robust integrations so your stack stays in sync.",
          },
          {
            question:
              "What are the typical project timelines for SaaS development?",
            answer:
              "A focused MVP usually ships in a few months, while a full platform with integrations runs longer. After discovery we give a clear, milestone based timeline.",
          },
          {
            question: "How do you use AI in SaaS products?",
            answer:
              "We apply machine learning for search, recommendations, and analytics, and use modern AI for copilots, automation, and content where they add measurable value.",
          },
          {
            question: "Do you provide post launch maintenance and support?",
            answer:
              "Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your customer base grows.",
          },
        ],
      },
      {
        type: "band-cta",
        title: "Scale your vision with next generation SaaS solutions.",
        subtitle:
          "We design and develop custom multi tenant platforms, billing systems, dashboards, and product analytics built to align with your strategy and generate measurable ROI at every stage of growth.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/saas/header-bg.jpg",
      },
    ],
  },
  startups: {
    slug: "startups",
    name: "Startups",
    metaTitle: "Xorora — Software Development for Startups",
    metaDescription:
      "From first prototype to funded scale up, we build MVPs, investor ready products, and the technical foundation your startup runs on, engineered to ship fast, prove traction, and grow without a costly rebuild.",
    headerBg: "/assets/startups/header-bg.jpg",
    hero: {
      title: "Custom software for ambitious startups.",
      subtitle:
        "From first prototype to funded scale up, we build MVPs, investor ready products, and the technical foundation your startup runs on, engineered to ship fast, prove traction, and grow without a costly rebuild.",
      badges: [
        { icon: "rocket", label: "MVP in weeks" },
        { icon: "handshake", label: "Founder friendly" },
        { icon: "trending-up", label: "Built to scale" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Pain points & value proposition",
          title: "Pain points we solve for startups.",
          subtitle:
            "Startups fail when speed, runway, and a scalable foundation are not working in sync. We help founders move fast without building something they will have to throw away.",
        },
        items: [
          {
            icon: "timer",
            title: "Speed to market is everything",
            body: "Miss the window, miss the round. We ship a focused MVP fast so you can validate, demo to investors, and start learning from real users in weeks, not quarters.",
          },
          {
            icon: "wallet",
            title: "Limited runway, every dollar counts",
            body: "Build lean, spend smart. We scope ruthlessly to the features that prove value and avoid the over engineering that burns runway before traction.",
          },
          {
            icon: "layers",
            title: "Prototypes that cannot scale",
            body: "No throwaway code. We build MVPs on a clean, modular foundation so the thing that wins your first customers can grow into your Series A platform.",
          },
          {
            icon: "users",
            title: "No in house engineering team yet",
            body: "We become your team. From product strategy to a production launch, we cover the full stack so founders can focus on customers and fundraising.",
          },
        ],
      },
      {
        type: "services",
        heading: {
          label: "Capabilities",
          title: "Startup software development services we offer.",
          subtitle:
            "Our specialists deliver end to end product development that considers your stage, runway, and growth goals.",
        },
        items: [
          {
            name: "MVP and prototype development",
            body: "We turn your idea into a working product fast, focused on the core features that prove value and win your first users.",
          },
          {
            name: "Product strategy and discovery",
            body: "We help shape your product vision, scope, and roadmap so engineering effort maps directly to traction and funding milestones.",
          },
          {
            name: "Full stack product engineering",
            body: "From frontend to backend, infrastructure, and integrations, we build and harden the platform your startup runs on.",
          },
          {
            name: "AI integration for startups",
            body: "We embed AI features and copilots into your product to differentiate early and deliver outsized value with a small team.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "why",
        heading: {
          label: "What sets us apart",
          title: "Why choose us.",
          subtitle:
            "We pair startup speed with engineering rigor to deliver products that win first customers and scale into funded platforms.",
        },
        items: [
          {
            icon: "rocket",
            title: "Speed without shortcuts",
            body: "We ship fast on a clean foundation, so your MVP is quick to launch and ready to scale when traction hits.",
          },
          {
            icon: "target",
            title: "Founder aligned scoping",
            body: "We scope ruthlessly to what proves value, protecting your runway and your roadmap.",
          },
          {
            icon: "gem",
            title: "Senior team, no training wheels",
            body: "Experienced engineers who have shipped real products, not a learning exercise on your dime.",
          },
          {
            icon: "pointer",
            title: "Investor ready polish",
            body: "Product quality and UX that demos well to users and to the people writing your next check.",
          },
          {
            icon: "blocks",
            title: "Built to scale from day one",
            body: "Modular architecture so the MVP grows into your funded platform without a rebuild.",
          },
          {
            icon: "handshake",
            title: "A true development partner",
            body: "We work like an extension of your team, invested in the outcome, not just the deliverable.",
          },
        ],
        callout: {
          icon: "zap",
          text: "Validate faster, raise with confidence, and scale with software and custom AI built for your startup reality.",
        },
      },
      {
        type: "ai-groups",
        heading: {
          label: "AI for startups",
          title: "Build an AI advantage early.",
          subtitle:
            "We integrate core AI capabilities into startup products, helping small teams punch far above their weight and stand out to users and investors.",
        },
        items: [
          {
            icon: "sparkles",
            name: "AI native product features",
            subtitle:
              "Differentiate from day one with AI built into the core experience.",
            items: [
              "Copilots and assistants tailored to your domain",
              "Smart search and recommendations",
              "Personalization that improves with usage",
            ],
          },
          {
            icon: "workflow",
            name: "Automation that saves runway",
            subtitle:
              "Do more with a small team by automating the manual work.",
            items: [
              "Automated onboarding and support flows",
              "Document and data processing pipelines",
              "Internal tools that replace busywork",
            ],
          },
          {
            icon: "chart-line",
            name: "Analytics and insight",
            subtitle:
              "Make confident decisions with data from your first users.",
            items: [
              "Product analytics and funnel tracking",
              "Cohort and retention insight",
              "Investor ready metrics dashboards",
            ],
          },
          {
            icon: "bot",
            name: "Generative AI prototyping",
            subtitle: "Move from idea to working demo at startup speed.",
            items: [
              "Rapid prototyping of AI concepts",
              "RAG pipelines over your own data",
              "Model evaluation and guardrails",
            ],
          },
        ],
        bg: "surface",
      },
      {
        type: "process-steps",
        heading: {
          label: "How we build",
          title: "How we build startup products.",
        },
        steps: [
          {
            number: "01",
            name: "Discovery and scoping",
            body: "We pressure test your idea, define the core MVP, and map the fastest path to a product that proves value to users and investors.",
          },
          {
            number: "02",
            name: "Design and build",
            body: "We design and engineer in short, demoable sprints so you see working software every week and can adjust as you learn.",
          },
          {
            number: "03",
            name: "Launch and scale",
            body: "We ship to production, instrument for insight, and harden the foundation so the MVP grows into your funded platform.",
          },
        ],
        footer:
          "From idea to launch, Xorora builds startup products that ship fast, prove traction, and scale with your business. Our approach draws on deep product experience, a proven technology stack, and a focus on the outcomes that move your startup forward.",
        ctaLabel: "Request a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question: "How fast can you build an MVP?",
            answer:
              "A focused MVP typically ships in a few weeks to a couple of months depending on scope. After a short discovery we give you a clear, milestone based timeline so you know exactly what launches and when.",
          },
          {
            question: "I am a non technical founder. Can you still help?",
            answer:
              "Absolutely. We act as your product and engineering team, translating your vision into a working product and guiding the technical decisions so you can focus on customers and fundraising.",
          },
          {
            question: "Will the MVP scale, or will we have to rebuild later?",
            answer:
              "We build MVPs on a clean, modular foundation specifically so the product that wins your first users can grow into your funded platform without a costly rewrite.",
          },
          {
            question: "How do you keep costs manageable on a tight runway?",
            answer:
              "We scope ruthlessly to the features that prove value, avoid over engineering, and work in small increments so spend always maps to progress you can see.",
          },
          {
            question: "Can you help make our product investor ready?",
            answer:
              "Yes. We focus on the product quality, UX polish, and metrics that demo well to users and investors, and we can help prepare the technical story for due diligence.",
          },
          {
            question: "Do you provide support after launch?",
            answer:
              "Yes. We offer ongoing development, maintenance, and DevOps so your product stays reliable and keeps improving as you grow.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "band-cta",
        title: "Turn your idea into a product investors believe in.",
        subtitle:
          "We design and build MVPs, investor ready products, and the technical foundation your startup runs on, engineered to ship fast and scale when traction hits.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/startups/header-bg.jpg",
      },
    ],
  },
  "travel-hospitality": {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    metaTitle: "Travel and Hospitality Software Development Services | Xorora",
    metaDescription:
      "Xorora offers travel and hospitality software development services: custom booking platforms, property and reservation systems, and guest apps engineered to grow revenue and loyalty.",
    headerBg: "/assets/travel/header-bg.jpg",
    hero: {
      title: "Travel and hospitality software development services.",
      subtitle:
        "Xorora delivers travel and hospitality software development services: custom booking platforms, property and reservation systems, and guest apps. As a travel app development company, we engineer software that fits your operation, elevates the guest experience, and delivers measurable ROI as you grow.",
      badges: [
        { icon: "shield-check", label: "PCI DSS ready" },
        { icon: "lock", label: "GDPR compliant" },
        { icon: "award", label: "SOC 2 & ISO 27001" },
      ],
      formTitle: "Start growing your business with us",
    },
    sections: [
      {
        type: "pain",
        heading: {
          label: "Pain points & value proposition",
          title: "Pain points we solve in travel and hospitality.",
          subtitle:
            "Operators lose revenue and loyalty when bookings, operations, and the guest experience are not working in sync. We bring them together into one seamless platform.",
        },
        items: [
          {
            icon: "calendar-x",
            title: "Fragmented bookings and channels",
            body: "Sell everywhere with one source of truth. We unify reservations, availability, and rates across web, mobile, and OTAs in real time so you never oversell.",
          },
          {
            icon: "layers",
            title: "Legacy systems that frustrate guests",
            body: "Modernize without a full rebuild. We add a flexible, API first layer over legacy PMS and booking systems so you can launch new services quickly.",
          },
          {
            icon: "sparkles",
            title: "Generic, impersonal guest experience",
            body: "Delight every traveler. Our solutions read guest behavior and deliver tailored offers, itineraries, and service inside an easy, modern interface.",
          },
          {
            icon: "shield-check",
            title: "Payment security and compliance",
            body: "We embed PCI DSS and GDPR compliance into your platform foundation so you can scale across regions without sleepless nights spent on audits.",
          },
        ],
      },
      {
        type: "clients",
        heading: {
          label: "Clients we work with",
          title: "Who we build for.",
          subtitle:
            "We partner with travel agencies, hotels, resorts, and hospitality startups to build custom platforms that enhance guest experiences, streamline bookings, and improve operational workflows.",
        },
        items: [
          {
            icon: "building",
            name: "Hotels & Resorts",
            body: "We partner with hotels and resorts to develop integrated management systems that streamline bookings, guest services, and room management, improving operational efficiency and guest experiences.",
          },
          {
            icon: "plane",
            name: "Travel Agencies",
            body: "As a travel app development company, we develop custom travel portals and booking systems that offer multi destination itineraries, seamless booking processes, and personalized travel recommendations for clients.",
          },
          {
            icon: "map",
            name: "Tour Operators",
            body: "We help tour operators build platforms that allow customers to easily browse, customize, and book tours, while back end systems manage scheduling, resources, and payments.",
          },
          {
            icon: "plane-takeoff",
            name: "Airlines & Transportation Services",
            body: "Our solutions help airlines and transportation providers manage bookings, ticketing, and passenger services with systems that ensure a smooth experience for travelers.",
          },
          {
            icon: "house",
            name: "Vacation Rentals",
            body: "We work with vacation rental companies to create custom property management systems that streamline bookings, manage property listings, and offer real time updates on availability and pricing.",
          },
          {
            icon: "utensils",
            name: "Restaurant & Hospitality Providers",
            body: "As a restaurant app development company, we design reservation systems, mobile apps, and loyalty programs that enhance customer experiences, streamline operations, and improve service efficiency.",
          },
        ],
        bg: "slate-50",
      },
      {
        type: "services",
        heading: {
          label: "Capabilities",
          title: "Travel and hospitality software services we offer.",
          subtitle:
            "Our specialists deliver end to end software that considers your current digital state and business goals.",
        },
        items: [
          {
            name: "Travel and hospitality software development",
            body: "Travel and hospitality software development services built from scratch with a focus on performance, cost efficiency, scalability, and resiliency.",
          },
          {
            name: "Booking and reservation systems",
            body: "Real time booking engines, channel management, and reservation systems that keep availability and rates in sync everywhere, including a business travel management app for corporate programs.",
          },
          {
            name: "Property and guest management",
            body: "PMS, guest apps, and loyalty programs that streamline operations and elevate every stage of the guest journey.",
          },
          {
            name: "Travel AI integration",
            body: "Integrating AI models into your stack for recommendations, dynamic pricing, support, and demand forecasting.",
          },
        ],
        bg: "surface",
      },
      {
        type: "why",
        heading: {
          label: "What sets us apart",
          title: "Why choose us.",
          subtitle:
            "We leverage profound travel and hospitality domain knowledge and precision engineering to deliver seamless, scalable, and guest focused solutions that differentiate in the marketplace.",
        },
        items: [
          {
            icon: "gem",
            title: "Deep travel domain expertise",
            body: "An established history of delivery in complex booking and hospitality systems, from PMS to multi channel reservation platforms.",
          },
          {
            icon: "trending-up",
            title: "Revenue driven development",
            body: "Each feature is built to maximize bookings, occupancy, and quantifiable business value.",
          },
          {
            icon: "shield",
            title: "Mission critical reliability",
            body: "Systems designed for peak season uptime, handling payments and guest data with unyielding accuracy.",
          },
          {
            icon: "pointer",
            title: "Professional grade guest UX",
            body: "Intuitive experiences that streamline discovery, booking, and stay for maximum satisfaction.",
          },
          {
            icon: "blocks",
            title: "Custom and scalable architecture",
            body: "Solutions scaled to your portfolio and configured for new properties and regions from day one.",
          },
          {
            icon: "lock",
            title: "Security first philosophy",
            body: "Compliance friendly design with encryption, secure APIs, and rigorous testing throughout.",
          },
        ],
        callout: {
          icon: "zap",
          text: "Increase direct bookings, raise occupancy, and grow loyalty with software and custom AI built for your business reality.",
        },
      },
      {
        type: "ai-groups",
        heading: {
          label: "AI in travel",
          title: "Automating travel operations with AI.",
          subtitle:
            "We integrate core AI technologies into travel and hospitality platforms, enabling operators to move faster, convert more, and serve guests better.",
        },
        items: [
          {
            icon: "sparkles",
            name: "Personalized recommendations",
            subtitle:
              "Turn browsers into bookings with tailored travel suggestions.",
            items: [
              "Destination and package recommendations",
              "Personalized upsells for rooms and add ons",
              "Adaptive itineraries based on preferences",
            ],
          },
          {
            icon: "chart-line",
            name: "Dynamic pricing and forecasting",
            subtitle: "Maximize revenue with data driven rates and planning.",
            items: [
              "Demand based dynamic pricing",
              "Occupancy and demand forecasting",
              "Channel and rate optimization",
            ],
          },
          {
            icon: "languages",
            name: "Conversational guest support",
            subtitle: "Serve travelers round the clock in any language.",
            items: [
              "Multilingual chat and voice assistants",
              "Automated booking changes and FAQs",
              "Sentiment analysis of guest reviews",
            ],
          },
          {
            icon: "radar",
            name: "Fraud and risk intelligence",
            subtitle: "Protect revenue and guests from fraud and abuse.",
            items: [
              "Real time payment fraud detection",
              "Chargeback and cancellation risk scoring",
              "Identity verification for high value bookings",
            ],
          },
        ],
        bg: "slate-50",
      },
      {
        type: "process-steps",
        heading: {
          label: "How we build",
          title: "How we build scalable travel solutions.",
        },
        steps: [
          {
            number: "01",
            name: "Project discovery",
            body: "First, we analyze your business goals, properties, and guest journey to create clearly articulated goals, optimize processes, and isolate the best opportunities.",
          },
          {
            number: "02",
            name: "Team composition",
            body: "We assemble multidisciplinary teams with travel, data, and compliance backgrounds, matched to your project scope, seasonality, and growth plans.",
          },
          {
            number: "03",
            name: "Project delivery",
            body: "From MVP through enterprise scale implementation, we build booking engines, PMS, guest apps, and scalable architectures for sustained success.",
          },
        ],
        footer:
          "From concept to launch, Xorora builds travel and hospitality software that streamlines operations, connects seamlessly with your existing systems, and scales with your business. Our approach draws on deep domain experience, a proven technology stack, and a focus on measurable outcomes.",
        ctaLabel: "Request a consultation",
      },
      {
        type: "faq",
        heading: { label: "Good to know", title: "Questions, answered." },
        items: [
          {
            question:
              "What types of travel and hospitality software can you build?",
            answer:
              "We build booking and reservation engines, property management systems, travel portals, guest and loyalty apps, channel managers, and analytics dashboards, all tailored to your operation.",
          },
          {
            question:
              "Do you work as a travel app development company and a restaurant app development company?",
            answer:
              "Yes. As a travel app development company and restaurant app development company, we build mobile and web apps for hotels, agencies, tour operators, and restaurants, including a business travel management app for corporate travel programs.",
          },
          {
            question: "Can you integrate with PMS, GDS, and OTA channels?",
            answer:
              "Yes. We integrate with property management systems, global distribution systems, OTA channels, payment providers, and review platforms through robust APIs so your data stays in sync.",
          },
          {
            question: "What are the typical project timelines?",
            answer:
              "A focused MVP usually ships in a few months, while a full platform with integrations runs longer. After discovery we give a clear, milestone based timeline.",
          },
          {
            question: "How do you handle peak season traffic and scale?",
            answer:
              "We architect for elastic scaling, caching, and load balancing so your booking flows stay fast and available during launches, sales, and seasonal peaks.",
          },
          {
            question: "How do you use AI in travel platforms?",
            answer:
              "We apply machine learning for recommendations, dynamic pricing, and demand forecasting, and use modern AI for multilingual guest support where it adds measurable value.",
          },
          {
            question: "Do you provide post launch maintenance and support?",
            answer:
              "Yes. We provide ongoing maintenance, monitoring, and DevOps so your platform stays secure, reliable, and ready to scale as your bookings grow.",
          },
        ],
      },
      {
        type: "band-cta",
        title: "Scale your vision with next generation travel solutions.",
        subtitle:
          "We design and develop custom booking platforms, property and reservation systems, guest apps, and travel analytics dashboards built to align with your strategy and grow revenue at every stage.",
        ctaPrimary: "Contact us",
        ctaSecondary: "Request a consultation",
        headerBg: "/assets/travel/header-bg.jpg",
      },
    ],
  },
};

export { INDUSTRIES };

export function getIndustryBySlug(slug: string): Industry | undefined {
  if (!INDUSTRY_SLUGS.includes(slug as IndustrySlug)) {
    return undefined;
  }
  return INDUSTRIES[slug as IndustrySlug];
}

export function getAllIndustrySlugs(): IndustrySlug[] {
  return [...INDUSTRY_SLUGS];
}
