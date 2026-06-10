export interface HwwStepItem {
  icon: string;
  title: string;
  body: string;
}

export interface HwwStep {
  n: string;
  img: string;
  title: string;
  accent: string;
  body: string;
  items: [string, string, string][];
  meta: [string, string][];
}

export const HWW_FLOWS: Record<"staff" | "dedicated", HwwStep[]> = {
  staff: [
    {
      n: "01",
      img: "/assets/howwework/staff-1.jpg",
      title: "Evaluation",
      accent: "of an existing product",
      body: "We discuss your idea, vision, and business targets. That sets scope and requirements. In staff augmentation, we adjust to your existing team.",
      items: [
        [
          "file-lock-2",
          "Confidentiality (NDA), if required",
          "You retain full intellectual property rights, and any details can be covered by an NDA.",
        ],
        [
          "users",
          "Building the team",
          "After the initial discussion you receive CVs of the proposed members. We can arrange technical interviews with individual candidates.",
        ],
      ],
      meta: [
        ["Our role", "Tell us about your requirements and needs"],
        [
          "Your role",
          "Facilitate discussions, answer questions, and conduct code reviews",
        ],
        ["Duration", "2 to 5 days"],
        [
          "Outcome",
          "The agreement is signed and you get exactly the team you need",
        ],
      ],
    },
    {
      n: "02",
      img: "/assets/howwework/staff-2.jpg",
      title: "Onboarding",
      accent: "and integration",
      body: "Your new engineers integrate into your workflow, tools, and rituals. They ramp on the codebase fast and start contributing within the first sprint.",
      items: [
        [
          "plug",
          "Access and tooling",
          "We set up access, environments, and accounts so the team is productive from day one.",
        ],
        [
          "git-merge",
          "Codebase ramp-up",
          "Engineers study the architecture, conventions, and backlog, pairing with your team where useful.",
        ],
      ],
      meta: [
        ["Our role", "Provide senior engineers and ramp them quickly"],
        ["Your role", "Grant access and share context and conventions"],
        ["Duration", "3 to 7 days"],
        ["Outcome", "Engineers embedded and shipping inside your process"],
      ],
    },
    {
      n: "03",
      img: "/assets/howwework/staff-3.jpg",
      title: "Delivery",
      accent: "inside your process",
      body: "Our engineers work as part of your team, in your sprints, under your direction. You keep full control of priorities while we add senior capacity.",
      items: [
        [
          "activity",
          "Your cadence",
          "We follow your sprints, standups, and review process, reporting exactly how you prefer.",
        ],
        [
          "shield-check",
          "Quality built in",
          "Tests, code review, and clean delivery come standard, never as an afterthought.",
        ],
      ],
      meta: [
        ["Our role", "Deliver high-quality work within your team"],
        ["Your role", "Own the roadmap and prioritize the backlog"],
        ["Duration", "Ongoing, flexible"],
        ["Outcome", "More senior throughput without the hiring overhead"],
      ],
    },
    {
      n: "04",
      img: "/assets/howwework/staff-4.jpg",
      title: "Scale",
      accent: "up or down",
      body: "As your needs change, we flex the team. Add specialists for a push or scale back between phases, with no long recruitment cycles.",
      items: [
        [
          "trending-up",
          "Elastic capacity",
          "Ramp the team to match your roadmap, sprint by sprint.",
        ],
        [
          "handshake",
          "Long-term partnership",
          "Low turnover means the people who learned your product stay on it.",
        ],
      ],
      meta: [
        ["Our role", "Flex capacity to match your needs"],
        ["Your role", "Signal upcoming changes in scope"],
        ["Duration", "Ongoing, flexible"],
        ["Outcome", "A team that scales with your ambition"],
      ],
    },
  ],
  dedicated: [
    {
      n: "01",
      img: "/assets/howwework/discovery.jpg",
      title: "Evaluation",
      accent: "and discovery",
      body: "We discuss your idea, vision, and business targets you want to achieve. This helps us set a clear scope, requirements, and a costed roadmap.",
      items: [
        [
          "file-lock-2",
          "Confidentiality (NDA), if required",
          "You retain full intellectual property rights, and any details can be covered by an NDA.",
        ],
        [
          "compass",
          "Shaping the solution",
          "We translate goals into architecture, scope, and a delivery plan before any code is written.",
        ],
      ],
      meta: [
        ["Our role", "Analyze needs and shape the solution"],
        ["Your role", "Share your idea, vision, and business targets"],
        ["Duration", "2 to 5 days"],
        ["Outcome", "A clear, costed roadmap to production"],
      ],
    },
    {
      n: "02",
      img: "/assets/howwework/team.jpg",
      title: "Team assembly",
      accent: "and project kick-off",
      body: "We assemble a team based on your requirements. You interview and pick the talents you want on your dedicated development team.",
      items: [
        [
          "rocket",
          "Introductory workshops",
          "Clients get to know the development team, one of the key benefits of a dedicated team over staff augmentation.",
        ],
        [
          "clipboard-check",
          "Kick-off outcomes",
          "You meet the team and we align expectations so everyone is on the same page from the start.",
        ],
      ],
      meta: [
        ["Our role", "Propose patterns, implement tooling, and run workshops"],
        ["Your role", "Give feedback, make decisions, keep an open mind"],
        ["Duration", "7 to 14 days"],
        [
          "Outcome",
          "Shared understanding of objectives, milestones, and risks",
        ],
      ],
    },
    {
      n: "03",
      img: "/assets/howwework/dev.jpg",
      title: "Development",
      accent: "phase",
      body: "We follow Agile and Lean principles, dividing work into two-week sprints that each deliver usable parts of the system across web and mobile.",
      items: [
        [
          "repeat",
          "Two-week sprints",
          "Plan, define, develop, test, review, and accept, then increment. You verify and adjust throughout.",
        ],
        [
          "layers",
          "Full-stack delivery",
          "Design, frontend, backend, DevOps, and QA, working as one coordinated team.",
        ],
      ],
      meta: [
        ["Our role", "Manage the process, lead meetings, deliver increments"],
        ["Your role", "Take part in meetings and follow through on actions"],
        ["Duration", "Depends on scope"],
        ["Outcome", "Deliverables that meet your expectations"],
      ],
    },
    {
      n: "04",
      img: "/assets/howwework/launch.jpg",
      title: "Software",
      accent: "project launch",
      body: "After launching the MVP we continue development, maintenance, and support, making room for additional features after customer feedback.",
      items: [
        [
          "rocket",
          "Launch and beyond",
          "For a top-notch operation, we keep your software well-maintained and updated.",
        ],
        [
          "message-circle",
          "Feedback loops",
          "We fold in real customer feedback to prioritize what gets built next.",
        ],
      ],
      meta: [
        ["Our role", "Build beautiful, reliable software"],
        ["Your role", "Provide regular feedback, stay in touch with the team"],
        ["Duration", "Depends on scope"],
        ["Outcome", "A product highly desirable to your end users"],
      ],
    },
  ],
};
