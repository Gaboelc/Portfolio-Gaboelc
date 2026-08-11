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
