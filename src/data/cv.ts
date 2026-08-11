// Single source of truth for CV content.
// Both the home page sections and the printable /cv page read from here, so
// updating a role or a skill only ever happens in one file.

export const profile = {
  name: 'Gabriel León Castro',
  role: 'Analytics Engineer',
  location: 'San José, Costa Rica',
  email: 'gabrielleon917@gmail.com',
  tagline: 'Where data guides, decisions thrive',
  summary:
    'Analytics Engineer with 5+ years building scalable data models, semantic layers, and BI solutions on modern stacks (Snowflake, Power BI, SQL-based ELT). Proven track record designing production-ready reporting solutions, defining business metrics, and performing deep-dive analysis to identify root causes and improvement opportunities. Experienced translating business requirements into analytical solutions and dashboards that support operational decision-making across cross-functional teams.',
  links: {
    linkedin: 'https://www.linkedin.com/in/gaboelc/',
    github: 'https://github.com/Gaboelc',
    website: 'https://www.gaboelc.dev/',
  },
} as const;

export interface Role {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    period: 'October 2024 - February 2026',
    role: 'Consultant II, Analytics Engineering',
    company: 'Hakkōda, an IBM Company',
    location: 'Heredia, Costa Rica',
    highlights: [
      'Redesigned Power BI semantic models that cut dataset refresh times by ~42% (from ~60 to ~35 min), improving usability for 6 business stakeholders.',
      'Developed and supported Snowflake-based data warehouse solutions, including data modeling, ingestion pipelines, and transformation layers aligned with analytics best practices.',
      'Collaborated with cross-functional teams (data engineers, analysts, and business users) to gather requirements and deliver scalable, production-ready analytics solutions.',
    ],
  },
  {
    period: 'August 2022 - August 2024',
    role: 'Data Analyst',
    company: 'SGF Global',
    location: 'Heredia, Costa Rica',
    highlights: [
      'Developed and maintained dashboards and reports using Power BI and Tableau.',
      'Designed SQL queries and scripts to extract, transform, and analyze data from relational databases.',
      'Built forms and automations using Power Apps and Power Automate to improve operational workflows.',
      'Built automated reporting and exploratory analysis in Python/Pandas on survey and operational datasets.',
    ],
  },
  {
    period: 'May 2021 - April 2022',
    role: 'Data Specialist',
    company: 'DHL',
    location: 'Heredia, Costa Rica',
    highlights: [
      "Designed and implemented a centralized database infrastructure for the Americas Service Desk.",
      'Built a Gradient Boosting classifier forecasting Service Desk demand a quarter ahead, deployed on Azure as an alerting system; widening the training history lifted accuracy from 63% to 81%.',
      'Analyzed agent KPIs to support performance improvement and compensation models.',
      'Built dashboards and reports using Power BI and Python to communicate insights to stakeholders.',
      'Cleaned, transformed, and analyzed large datasets using SQL.',
    ],
  },
  {
    period: 'October 2019 - April 2021',
    role: 'Data Analyst',
    company: 'Intel Corporation',
    location: 'Heredia, Costa Rica',
    highlights: [
      'Developed SQL queries and Python scripts to automate data collection and analysis.',
      'Conducted exploratory data analysis to identify trends and performance improvement opportunities.',
      'Built dashboards and reports using Power BI and Excel for leadership teams.',
      'Modeled and analyzed processor architecture data to support current architecture optimization and future architecture development.',
    ],
  },
];

export interface Credential {
  title: string;
  place: string;
  period: string;
  location: string | null;
}

export const education: Credential[] = [
  {
    title: "Bachelor's Degree in Data Science",
    place: 'LEAD University',
    period: 'January 2020 - December 2023',
    location: 'San José, Costa Rica',
  },
  {
    title: 'Technical Degree in Computer Networking',
    place: 'Colegio Técnico Profesional de Hatillo',
    period: 'February 2017 - December 2019',
    location: 'San José, Costa Rica',
  },
];

export const certifications: Credential[] = [
  {
    title: 'SnowPro Core Certified',
    place: 'Snowflake',
    period: 'Issued January 2025 · Valid through January 2027',
    location: null,
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Data & Analytics',
    items: ['SQL', 'Python', 'Power BI', 'Tableau', 'Snowflake'],
  },
  {
    title: 'Data Engineering',
    items: ['ETL / ELT', 'Data Modeling', 'Data Warehousing'],
  },
  {
    title: 'Programming & Libraries',
    items: ['Pandas', 'NumPy'],
  },
  {
    title: 'Databases',
    items: ['SQL Databases', 'NoSQL Databases'],
  },
  {
    title: 'Tools & Productivity',
    items: ['Excel (Advanced)', 'Power Apps', 'Power Automate'],
  },
];

export interface Project {
  title: string;
  company: string;
  period: string;
  /** Headline figure. Omitted where there is no honest number to quote. */
  metric?: { value: string; label: string };
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
}

// Case studies rather than artefacts: client work cannot be shown, so each one
// is problem -> what I did -> measured result. No screenshots, by design.
export const projects: Project[] = [
  {
    title: 'Forecasting Service Desk demand',
    company: 'DHL',
    period: '2021 - 2022',
    metric: { value: '63% → 81%', label: 'prediction accuracy' },
    problem:
      'Staffing at the Americas Service Desk was purely reactive. When call and chat volume rose the team hired agents, and when it fell they let them go. Nobody could see a surge coming, so every swing in demand became a hiring or firing decision made under pressure.',
    approach:
      'A Gradient Boosting classifier predicting, one quarter ahead, whether incoming volume would exceed what the existing team could absorb. The threshold came from the agents’ actual daily capacity, so the output mapped onto a staffing decision rather than an abstract number. The first version trained on 2021 alone and reached 63%; extending the window back to 2018 lifted it to 81%, because the wider history exposed the model to both pre-pandemic and pandemic demand instead of a single regime.',
    outcome:
      'Deployed on Azure as an alerting system: when the model projected that a team lead’s group would struggle to meet volume, an automated email went out and we reviewed it together. Team leads moved from reacting to volume swings to planning staffing weeks ahead on a data-backed basis.',
    stack: ['Python', 'scikit-learn', 'Gradient Boosting', 'Azure', 'SQL'],
  },
  {
    title: 'Rebuilding reporting on Snowflake',
    company: 'Hakkōda, an IBM Company',
    period: '2024 - 2026',
    metric: { value: '~42%', label: 'faster dataset refresh' },
    problem:
      'Reporting ran on Microsoft SQL Server while the client moved its warehouse to Snowflake. The Power BI semantic models refreshed several times a day at roughly 60 minutes each, so refresh cycles collided — a new one starting before the previous had finished. The models carried unused columns, bidirectional relationships, heavy Power Query transformations, and DAX doing work that belonged upstream.',
    approach:
      'Worked alongside the data engineer to migrate the warehouse to Snowflake, using Snowpipe for ingestion and SQL for the transformation layer, and modeled the star schema underneath it. With the warehouse in place I pushed the transformations and calculations down into it, so they run once against Snowflake instead of on every refresh, and rebuilt the semantic models on top of the star schema.',
    outcome:
      'Refresh time fell from ~60 to ~35 minutes. The refresh cycles stopped overlapping, and the six business stakeholders who rely on these models stopped competing with the pipeline for their own data.',
    stack: ['Snowflake', 'Snowpipe', 'SQL', 'Power BI', 'Star schema'],
  },
  {
    title: 'Modeling processors before the silicon exists',
    company: 'Intel Corporation',
    period: '2019 - 2021',
    problem:
      'Processor architecture decisions are made long before there is any hardware to measure, so they rest entirely on what simulation can be made to reveal.',
    approach:
      'Analyzed simulation output, built new components into the processor model itself, and added performance counters to capture behaviour that was not being measured. The work spanned Python, C++ and SQL over large simulation datasets, with the reporting layer built in Power BI and Streamlit so results could be explored rather than only read.',
    outcome:
      'The analysis fed directly to the principal engineer leading the architecture, informing both optimization of the current design and decisions on future ones.',
    stack: ['Python', 'C++', 'SQL', 'Big Data', 'Power BI', 'Streamlit'],
  },
];

export const alsoFamiliar: string[] = [
  'R Language',
  'TensorFlow',
  'Scikit-Learn',
  'Streamlit',
  'Azure',
  'AWS',
  'Apache Hadoop',
  'Apache Spark',
];
