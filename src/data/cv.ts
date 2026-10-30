// Single source of truth for CV content.
// Both the home page sections and the printable /cv page read from here, so
// updating a role or a skill only ever happens in one file.
// Mirrors "CV 7.0 — Analytics Engineer"; keep the two in step.

export const profile = {
  name: 'Gabriel León Castro',
  role: 'Analytics Engineer',
  location: 'San José, Costa Rica',
  email: 'gabrielleon917@gmail.com',
  summary:
    "Analytics engineer with 6+ years in data, working between the warehouse and the business: SQL transformations in Snowflake and Redshift, star-schema semantic models and the Power BI reports on top. Migrated a global bakery manufacturer's semantic models from SQL Server to Snowflake at Hakkōda (an IBM company), cutting refresh time ~42%, and re-engineered Vivo Gaming's reporting layer from 60+ to ~10-minute refreshes. Fluent in English.",
  links: {
    linkedin: 'https://www.linkedin.com/in/gaboelc/',
    github: 'https://github.com/Gaboelc',
    website: 'https://www.gaboelc.dev/',
  },
} as const;

export interface Role {
  /** YYYY-MM. Kept machine-readable so the work table can sort and print it. */
  start: string;
  end: string;
  role: string;
  company: string;
  location: string;
  /** One line of context on the employer, where the name alone says little. */
  context?: string;
  /** The single figure a reader should leave the row with. */
  metric?: string;
  highlights: string[];
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** "2024-10" -> "October 2024". */
export const formatMonth = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-');
  return `${months[Number(month) - 1]} ${year}`;
};

export const formatPeriod = ({ start, end }: Pick<Role, 'start' | 'end'>) =>
  `${formatMonth(start)} - ${formatMonth(end)}`;

export const experience: Role[] = [
  {
    start: '2026-04',
    end: '2026-10',
    role: 'Business Intelligence Analyst',
    company: 'Vivo Gaming',
    location: 'Remote',
    context:
      'B2B live-casino provider. Sole BI analyst for Risk, Finance and studio managers. Role eliminated in company-wide layoffs.',
    metric: '60+ → ~10 min refresh',
    highlights: [
      'Moved transformation logic from Power Query into Redshift SQL views, removed duplicate and stale loads and added incremental refresh: refresh time fell from 60+ minutes to a ~10-minute average, ending recurring timeouts.',
      'Optimized DAX calculated columns and measures and cut Power Query steps by ~50% across the full report suite.',
      "Built on-demand, RLS-secured billing reports for 3 B2B clients, replacing Finance's manual monthly statements (2–3-day turnaround); gathered requirements directly with each client.",
      'Built daily Power Automate alerts on 6 risk metrics, replacing a manual check that was sometimes skipped.',
      "Eliminated a single point of failure by moving daily Excel feeds from an ex-employee's network share to SharePoint.",
    ],
  },
  {
    start: '2024-10',
    end: '2026-02',
    role: 'Consultant II, Analytics Engineering',
    company: 'Hakkōda, an IBM Company',
    location: 'Heredia, Costa Rica',
    metric: '−42% refresh time',
    highlights: [
      "Migrated a global bakery manufacturer's 2 semantic models from SQL Server to Snowflake during its migration, rebuilding them as star schemas with SQL pushdown and incremental refresh; refresh time fell ~42% (60 to 35 min).",
      "Led the client's Power BI workstream for 14 months (8 reports, ~20 users), presenting progress directly to its directors.",
      'Migrated 30 of 90+ Tableau reports to Power BI for a medical-sector client during a 3-month engagement.',
    ],
  },
  {
    start: '2022-08',
    end: '2024-08',
    role: 'Data Analyst',
    company: 'Intel Corporation (via SGF Global)',
    location: 'Heredia, Costa Rica',
    metric: '~20 Power BI reports',
    highlights: [
      "Built ~20 Power BI reports for Supply Chain, Finance, HR and Manufacturing on Intel's internal BI services team.",
      'Wrote SQL for extraction and transformation, automated reports in Python (pandas) and built Power Apps forms.',
    ],
  },
  {
    start: '2021-05',
    end: '2022-04',
    role: 'Data Specialist',
    company: 'DHL',
    location: 'Heredia, Costa Rica',
    metric: 'Excel → SQL Server',
    highlights: [
      "Designed and built a centralized SQL Server database for the Americas Service Desk, replacing Excel files in a shared folder with direct ingestion from the agents' call-tracking tool.",
      'As the Americas data analyst, tracked KPIs for ~50 service desk agents with Power BI and Python dashboards.',
    ],
  },
  {
    start: '2019-10',
    end: '2021-04',
    role: 'Data Analyst',
    company: 'Intel Corporation',
    location: 'Heredia, Costa Rica',
    highlights: [
      'Automated data collection and analysis with SQL and Python, and built Power BI and Excel dashboards for leadership.',
      'Modeled and analyzed processor architecture data to inform current optimizations and future architecture design.',
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
];

export const certifications: Credential[] = [
  {
    title: 'SnowPro Core Certified',
    place: 'Snowflake',
    period: 'Issued January 2025 · Valid through January 2027',
    location: null,
  },
];

export interface Skill {
  name: string;
  /** What kind of thing it is, written like a column type. */
  type: string;
  /** Where it was used, from the CV. Empty until there is something to cite. */
  used?: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'SQL & data platforms',
    items: [
      { name: 'SQL', type: 'language', used: 'Every role since 2019: Redshift views, Snowflake transformations, SQL Server' },
      { name: 'Snowflake', type: 'warehouse', used: 'SnowPro Core, valid through 01/2027; the Hakkōda semantic-model migration' },
      { name: 'Amazon Redshift', type: 'warehouse', used: "The SQL views behind Vivo Gaming's reports" },
      { name: 'Microsoft SQL Server', type: 'database', used: "DHL's Service Desk database; the source side of the Hakkōda migration" },
    ],
  },
  {
    title: 'Modeling & BI',
    items: [
      { name: 'Star schema', type: 'modeling', used: 'Both Hakkōda semantic models, rebuilt on Snowflake' },
      { name: 'Semantic models', type: 'modeling', used: "2 at Hakkōda (8 reports, ~20 users); Vivo Gaming's report suite" },
      { name: 'DAX', type: 'measures', used: 'Calculated columns and measures optimized at Vivo Gaming' },
      { name: 'Power Query (M)', type: 'transformation', used: 'Steps cut by ~50% across the Vivo Gaming suite' },
      { name: 'Incremental refresh', type: 'performance', used: 'Vivo Gaming and Hakkōda' },
      { name: 'RLS', type: 'security', used: 'On-demand billing reports for 3 B2B clients' },
      { name: 'Calculation groups', type: 'modeling' },
    ],
  },
  {
    title: 'Tools & automation',
    items: [
      { name: 'Tabular Editor', type: 'tooling' },
      { name: 'DAX Studio', type: 'tooling' },
      { name: 'Paginated reports', type: 'reporting' },
      { name: 'Gateways', type: 'infrastructure' },
      { name: 'Tableau', type: 'bi', used: '30 of 90+ reports migrated to Power BI for a medical-sector client' },
      { name: 'Power Automate', type: 'automation', used: 'Daily alerts on 6 risk metrics at Vivo Gaming' },
      { name: 'Python (pandas)', type: 'scripting', used: 'Report automation at Intel; KPI dashboards at DHL' },
    ],
  },
];

export const languages = [
  { name: 'Spanish', code: 'es', level: 'native' },
  { name: 'English', code: 'en', level: 'fluent' },
];

export interface Project {
  title: string;
  company: string;
  /** The client, where it differs from the employer. */
  client?: string;
  period: string;
  /** Shown as the case's file name; the extension picks its keycap. */
  file: string;
  /** Headline figure. Omitted where there is no honest number to quote. */
  metric?: { value: string; label: string };
  /** Before/after for the bar chart. lowerIsBetter for times, not for accuracy. */
  chart?: {
    unit: string;
    max: number;
    before: number;
    after: number;
    beforeLabel: string;
    afterLabel: string;
    lowerIsBetter: boolean;
  };
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  /** Older work kept for range; shown short, after the main case studies. */
  earlier?: boolean;
}

// Case studies rather than artefacts: client work cannot be shown, so each one
// is problem -> what I did -> measured result. No screenshots, by design.
export const projects: Project[] = [
  {
    title: 'Getting a report suite under ten minutes',
    company: 'Vivo Gaming',
    period: '2026',
    file: 'vivo_gaming.pbix',
    metric: { value: '60+ → ~10', label: 'minutes, average refresh' },
    chart: { unit: 'min', max: 60, before: 60, after: 10, beforeLabel: '60+ min', afterLabel: '~10 min', lowerIsBetter: true },
    problem:
      "As the only BI analyst for Risk, Finance and the studio managers, I inherited a report suite that took more than an hour to refresh and regularly timed out. The transformation logic lived in Power Query, loads were duplicated or stale, Finance built each B2B client's monthly statement by hand in two to three days, and the daily Excel feeds sat on the network share of someone who no longer worked there.",
    approach:
      'Moved the transformation logic out of Power Query into Redshift SQL views, removed the duplicate and stale loads and added incremental refresh. Optimized the DAX calculated columns and measures and cut Power Query steps by about half across the suite. Built on-demand, RLS-secured billing reports for three B2B clients after gathering requirements directly with each of them, set up daily Power Automate alerts on six risk metrics, and moved the Excel feeds to SharePoint.',
    outcome:
      'Average refresh dropped to about ten minutes and the timeouts stopped. Finance no longer assembles client statements by hand, the risk check runs every day instead of when someone remembers, and no feed depends on a single person’s folder any more.',
    stack: ['Amazon Redshift', 'SQL', 'Power BI', 'DAX', 'Power Query', 'RLS', 'Power Automate'],
  },
  {
    title: 'Rebuilding semantic models on Snowflake',
    company: 'Hakkōda, an IBM Company',
    client: 'Global bakery mfr.',
    period: '2024 - 2026',
    file: 'snowflake_migration.sql',
    metric: { value: '60 → 35', label: 'minutes per dataset refresh (−42%)' },
    chart: { unit: 'min', max: 60, before: 60, after: 35, beforeLabel: '60 min', afterLabel: '35 min', lowerIsBetter: true },
    problem:
      'Reporting ran on Microsoft SQL Server while the client, a global bakery manufacturer, moved its warehouse to Snowflake. The Power BI semantic models refreshed several times a day at roughly 60 minutes each, so refresh cycles collided — a new one starting before the previous had finished. The models carried unused columns, bidirectional relationships, heavy Power Query transformations, and DAX doing work that belonged upstream.',
    approach:
      'Worked alongside the data engineer during the Snowflake migration, with Snowpipe for ingestion and SQL for the transformation layer, and modeled the star schema underneath it. I pushed the transformations and calculations down into the warehouse, so they run once against Snowflake instead of on every refresh, and rebuilt both semantic models on top of the star schema with incremental refresh.',
    outcome:
      'Refresh time fell from ~60 to ~35 minutes and the refresh cycles stopped overlapping. I led the client’s Power BI workstream for 14 months — 8 reports, ~20 users — presenting progress directly to its directors.',
    stack: ['Snowflake', 'Snowpipe', 'SQL', 'Power BI', 'Star schema'],
  },
  {
    title: 'Modeling processors before the silicon exists',
    company: 'Intel Corporation',
    period: '2019 - 2021',
    file: 'processor_simulation.csv',
    problem:
      'Processor architecture decisions are made long before there is any hardware to measure, so they rest entirely on what simulation can be made to reveal.',
    approach:
      'Analyzed simulation output, built new components into the processor model itself, and added performance counters to capture behaviour that was not being measured. The work spanned Python, C++ and SQL over large simulation datasets, with the reporting layer built in Power BI and Streamlit so results could be explored rather than only read.',
    outcome:
      'The analysis fed directly to the principal engineer leading the architecture, informing both optimization of the current design and decisions on future ones.',
    stack: ['Python', 'C++', 'SQL', 'Power BI', 'Streamlit'],
  },
  {
    title: 'Forecasting Service Desk demand',
    company: 'DHL',
    period: '2021 - 2022',
    file: 'demand_forecast.py',
    earlier: true,
    metric: { value: '63% → 81%', label: 'prediction accuracy' },
    chart: { unit: '%', max: 100, before: 63, after: 81, beforeLabel: '63%', afterLabel: '81%', lowerIsBetter: false },
    problem:
      'Staffing at the Americas Service Desk was purely reactive: when volume rose the team hired, when it fell they let people go, and nobody could see a surge coming.',
    approach:
      'A Gradient Boosting classifier predicting, one quarter ahead, whether incoming volume would exceed what the team could absorb, with the threshold taken from the agents’ actual daily capacity. Training on 2021 alone reached 63%; extending the history back to 2018 lifted it to 81%.',
    outcome:
      'Deployed on Azure as an alerting system that emailed team leads when their group was projected to fall short, so staffing was planned weeks ahead instead of decided under pressure.',
    stack: ['Python', 'scikit-learn', 'Azure', 'SQL'],
  },
];

/** Before/after refresh times, for the hero's query result. Same numbers as the
 * case charts, so the two can never disagree. */
export const refreshLog = projects
  .filter((p) => p.chart?.unit === 'min')
  .map(({ company, client, chart }) => ({
    client: client ?? company,
    via: client ? company.split(',')[0] : null,
    before: chart!.before,
    beforeLabel: chart!.beforeLabel,
    after: chart!.after,
    afterLabel: chart!.afterLabel,
  }));
