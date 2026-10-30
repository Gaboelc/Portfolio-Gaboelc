// Single source of truth for CV content.
// Both the home page sections and the printable /cv page read from here, so
// updating a role or a skill only ever happens in one file.
// Mirrors "CV 7.0 — Analytics Engineer"; keep the two in step.
// Prose is a Text ({ en, es }); job titles, company names, dates and figures
// are written once and shared by both languages.

import type { Text } from '../i18n';

export const profile = {
  name: 'Gabriel León Castro',
  role: 'Analytics Engineer',
  location: 'San José, Costa Rica',
  email: 'gabrielleon917@gmail.com',
  summary: {
    en: "Analytics engineer with 6+ years in data, working between the warehouse and the business: SQL transformations in Snowflake and Redshift, star-schema semantic models and the Power BI reports on top. Migrated a global bakery manufacturer's semantic models from SQL Server to Snowflake at Hakkōda (an IBM company), cutting refresh time ~42%, and re-engineered Vivo Gaming's reporting layer from 60+ to ~10-minute refreshes. Fluent in English.",
    es: 'Analytics engineer con más de 6 años en datos, trabajando entre el warehouse y el negocio: transformaciones SQL en Snowflake y Redshift, modelos semánticos en esquema estrella y los reportes de Power BI encima. Migré los modelos semánticos de un fabricante global de panadería de SQL Server a Snowflake en Hakkōda (una empresa de IBM), reduciendo el tiempo de actualización ~42%, y rediseñé la capa de reportería de Vivo Gaming para pasar de más de 60 a ~10 minutos de actualización. Inglés fluido.',
  } as Text,
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
  /** The title as the employer wrote it; not translated. */
  role: string;
  company: string;
  location: Text;
  /** One line of context on the employer, where the name alone says little. */
  context?: Text;
  /** The single figure a reader should leave the row with. */
  metric?: Text;
  highlights: Text[];
}

const heredia: Text = { en: 'Heredia, Costa Rica', es: 'Heredia, Costa Rica' };

export const experience: Role[] = [
  {
    start: '2026-04',
    end: '2026-10',
    role: 'Business Intelligence Analyst',
    company: 'Vivo Gaming',
    location: { en: 'Remote', es: 'Remoto' },
    context: {
      en: 'B2B live-casino provider. Sole BI analyst for Risk, Finance and studio managers. Role eliminated in company-wide layoffs.',
      es: 'Proveedor B2B de casino en vivo. Único analista de BI para Riesgo, Finanzas y los gerentes de estudio. El puesto se eliminó en un recorte de personal de toda la empresa.',
    },
    metric: { en: '60+ → ~10 min refresh', es: '60+ → ~10 min de actualización' },
    highlights: [
      {
        en: 'Moved transformation logic from Power Query into Redshift SQL views, removed duplicate and stale loads and added incremental refresh: refresh time fell from 60+ minutes to a ~10-minute average, ending recurring timeouts.',
        es: 'Moví la lógica de transformación de Power Query a vistas SQL en Redshift, eliminé cargas duplicadas y obsoletas y agregué actualización incremental: el tiempo de actualización bajó de más de 60 minutos a un promedio de ~10, y se acabaron los timeouts recurrentes.',
      },
      {
        en: 'Optimized DAX calculated columns and measures and cut Power Query steps by ~50% across the full report suite.',
        es: 'Optimicé columnas calculadas y medidas DAX y reduje los pasos de Power Query en ~50% en todo el conjunto de reportes.',
      },
      {
        en: "Built on-demand, RLS-secured billing reports for 3 B2B clients, replacing Finance's manual monthly statements (2–3-day turnaround); gathered requirements directly with each client.",
        es: 'Construí reportes de facturación bajo demanda, protegidos con RLS, para 3 clientes B2B, que reemplazaron los estados de cuenta mensuales que Finanzas armaba a mano (2–3 días); levanté los requerimientos directamente con cada cliente.',
      },
      {
        en: 'Built daily Power Automate alerts on 6 risk metrics, replacing a manual check that was sometimes skipped.',
        es: 'Creé alertas diarias en Power Automate sobre 6 métricas de riesgo, que reemplazaron una revisión manual que a veces no se hacía.',
      },
      {
        en: "Eliminated a single point of failure by moving daily Excel feeds from an ex-employee's network share to SharePoint.",
        es: 'Eliminé un punto único de falla al mover los archivos de Excel diarios desde la carpeta de red de un exempleado a SharePoint.',
      },
    ],
  },
  {
    start: '2024-10',
    end: '2026-02',
    role: 'Consultant II, Analytics Engineering',
    company: 'Hakkōda, an IBM Company',
    location: heredia,
    metric: { en: '−42% refresh time', es: '−42% en actualización' },
    highlights: [
      {
        en: "Migrated a global bakery manufacturer's 2 semantic models from SQL Server to Snowflake during its migration, rebuilding them as star schemas with SQL pushdown and incremental refresh; refresh time fell ~42% (60 to 35 min).",
        es: 'Migré los 2 modelos semánticos de un fabricante global de panadería de SQL Server a Snowflake durante su migración, reconstruyéndolos como esquemas estrella con SQL pushdown y actualización incremental; el tiempo de actualización bajó ~42% (de 60 a 35 min).',
      },
      {
        en: "Led the client's Power BI workstream for 14 months (8 reports, ~20 users), presenting progress directly to its directors.",
        es: 'Lideré el frente de Power BI del cliente durante 14 meses (8 reportes, ~20 usuarios) y presenté el avance directamente a sus directores.',
      },
      {
        en: 'Migrated 30 of 90+ Tableau reports to Power BI for a medical-sector client during a 3-month engagement.',
        es: 'Migré 30 de más de 90 reportes de Tableau a Power BI para un cliente del sector médico en un proyecto de 3 meses.',
      },
    ],
  },
  {
    start: '2022-08',
    end: '2024-08',
    role: 'Data Analyst',
    company: 'Intel Corporation (via SGF Global)',
    location: heredia,
    metric: { en: '~20 Power BI reports', es: '~20 reportes de Power BI' },
    highlights: [
      {
        en: "Built ~20 Power BI reports for Supply Chain, Finance, HR and Manufacturing on Intel's internal BI services team.",
        es: 'Construí ~20 reportes de Power BI para Cadena de Suministro, Finanzas, Recursos Humanos y Manufactura en el equipo interno de servicios de BI de Intel.',
      },
      {
        en: 'Wrote SQL for extraction and transformation, automated reports in Python (pandas) and built Power Apps forms.',
        es: 'Escribí SQL de extracción y transformación, automaticé reportes en Python (pandas) y construí formularios en Power Apps.',
      },
    ],
  },
  {
    start: '2021-05',
    end: '2022-04',
    role: 'Data Specialist',
    company: 'DHL',
    location: heredia,
    metric: { en: 'Excel → SQL Server', es: 'Excel → SQL Server' },
    highlights: [
      {
        en: "Designed and built a centralized SQL Server database for the Americas Service Desk, replacing Excel files in a shared folder with direct ingestion from the agents' call-tracking tool.",
        es: 'Diseñé y construí una base de datos centralizada en SQL Server para el Service Desk de las Américas, que reemplazó los archivos de Excel de una carpeta compartida con ingesta directa desde la herramienta de registro de llamadas de los agentes.',
      },
      {
        en: 'As the Americas data analyst, tracked KPIs for ~50 service desk agents with Power BI and Python dashboards.',
        es: 'Como analista de datos de las Américas, di seguimiento a los KPI de ~50 agentes del service desk con dashboards en Power BI y Python.',
      },
    ],
  },
  {
    start: '2019-10',
    end: '2021-04',
    role: 'Data Analyst',
    company: 'Intel Corporation',
    location: heredia,
    highlights: [
      {
        en: 'Automated data collection and analysis with SQL and Python, and built Power BI and Excel dashboards for leadership.',
        es: 'Automaticé la recolección y el análisis de datos con SQL y Python, y construí dashboards en Power BI y Excel para la gerencia.',
      },
      {
        en: 'Modeled and analyzed processor architecture data to inform current optimizations and future architecture design.',
        es: 'Modelé y analicé datos de arquitectura de procesadores para orientar las optimizaciones actuales y el diseño de arquitecturas futuras.',
      },
    ],
  },
];

export interface Degree {
  title: Text;
  place: string;
  start: string;
  end: string;
  location: string;
}

export const education: Degree[] = [
  {
    title: { en: "Bachelor's Degree in Data Science", es: 'Bachillerato en Ciencia de Datos' },
    place: 'LEAD University',
    start: '2020-01',
    end: '2023-12',
    location: 'San José, Costa Rica',
  },
];

export interface Certification {
  title: string;
  place: string;
  issued: string;
  expires: string;
}

export const certifications: Certification[] = [
  { title: 'SnowPro Core Certified', place: 'Snowflake', issued: '2025-01', expires: '2027-01' },
];

export interface Skill {
  name: Text | string;
  /** What kind of thing it is, written like a column type. */
  type: Text;
  /** Where it was used, from the CV. Empty until there is something to cite. */
  used?: Text;
}

export interface SkillGroup {
  title: Text;
  items: Skill[];
}

const type = (en: string, es: string): Text => ({ en, es });

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'SQL & data platforms', es: 'SQL y plataformas de datos' },
    items: [
      {
        name: 'SQL',
        type: type('language', 'lenguaje'),
        used: {
          en: 'Every role since 2019: Redshift views, Snowflake transformations, SQL Server',
          es: 'En todos mis puestos desde 2019: vistas en Redshift, transformaciones en Snowflake, SQL Server',
        },
      },
      {
        name: 'Snowflake',
        type: type('warehouse', 'warehouse'),
        used: {
          en: 'SnowPro Core, valid through 01/2027; the Hakkōda semantic-model migration',
          es: 'SnowPro Core, vigente hasta 01/2027; la migración de modelos semánticos en Hakkōda',
        },
      },
      {
        name: 'Amazon Redshift',
        type: type('warehouse', 'warehouse'),
        used: { en: "The SQL views behind Vivo Gaming's reports", es: 'Las vistas SQL detrás de los reportes de Vivo Gaming' },
      },
      {
        name: 'Microsoft SQL Server',
        type: type('database', 'base de datos'),
        used: {
          en: "DHL's Service Desk database; the source side of the Hakkōda migration",
          es: 'La base de datos del Service Desk de DHL; el origen de la migración en Hakkōda',
        },
      },
    ],
  },
  {
    title: { en: 'Modeling & BI', es: 'Modelado y BI' },
    items: [
      {
        name: { en: 'Star schema', es: 'Esquema estrella' },
        type: type('modeling', 'modelado'),
        used: { en: 'Both Hakkōda semantic models, rebuilt on Snowflake', es: 'Los dos modelos semánticos de Hakkōda, reconstruidos sobre Snowflake' },
      },
      {
        name: { en: 'Semantic models', es: 'Modelos semánticos' },
        type: type('modeling', 'modelado'),
        used: {
          en: "2 at Hakkōda (8 reports, ~20 users); Vivo Gaming's report suite",
          es: '2 en Hakkōda (8 reportes, ~20 usuarios); el conjunto de reportes de Vivo Gaming',
        },
      },
      {
        name: 'DAX',
        type: type('measures', 'medidas'),
        used: { en: 'Calculated columns and measures optimized at Vivo Gaming', es: 'Columnas calculadas y medidas optimizadas en Vivo Gaming' },
      },
      {
        name: 'Power Query (M)',
        type: type('transformation', 'transformación'),
        used: { en: 'Steps cut by ~50% across the Vivo Gaming suite', es: 'Pasos reducidos ~50% en todo el conjunto de Vivo Gaming' },
      },
      {
        name: { en: 'Incremental refresh', es: 'Actualización incremental' },
        type: type('performance', 'rendimiento'),
        used: { en: 'Vivo Gaming and Hakkōda', es: 'Vivo Gaming y Hakkōda' },
      },
      {
        name: 'RLS',
        type: type('security', 'seguridad'),
        used: { en: 'On-demand billing reports for 3 B2B clients', es: 'Reportes de facturación bajo demanda para 3 clientes B2B' },
      },
      { name: { en: 'Calculation groups', es: 'Grupos de cálculo' }, type: type('modeling', 'modelado') },
    ],
  },
  {
    title: { en: 'Tools & automation', es: 'Herramientas y automatización' },
    items: [
      { name: 'Tabular Editor', type: type('tooling', 'herramienta') },
      { name: 'DAX Studio', type: type('tooling', 'herramienta') },
      { name: { en: 'Paginated reports', es: 'Reportes paginados' }, type: type('reporting', 'reportería') },
      { name: 'Gateways', type: type('infrastructure', 'infraestructura') },
      {
        name: 'Tableau',
        type: type('bi', 'bi'),
        used: {
          en: '30 of 90+ reports migrated to Power BI for a medical-sector client',
          es: '30 de más de 90 reportes migrados a Power BI para un cliente del sector médico',
        },
      },
      {
        name: 'Power Automate',
        type: type('automation', 'automatización'),
        used: { en: 'Daily alerts on 6 risk metrics at Vivo Gaming', es: 'Alertas diarias sobre 6 métricas de riesgo en Vivo Gaming' },
      },
      {
        name: 'Python (pandas)',
        type: type('scripting', 'scripting'),
        used: { en: 'Report automation at Intel; KPI dashboards at DHL', es: 'Automatización de reportes en Intel; dashboards de KPI en DHL' },
      },
    ],
  },
];

export const languages: { code: string; name: Text; level: Text }[] = [
  { code: 'es', name: { en: 'Spanish', es: 'Español' }, level: { en: 'native', es: 'nativo' } },
  { code: 'en', name: { en: 'English', es: 'Inglés' }, level: { en: 'fluent', es: 'fluido' } },
];

export interface Project {
  title: Text;
  company: string;
  /** The client, where it differs from the employer. */
  client?: Text;
  period: string;
  /** Shown as the case's file name; the extension picks its keycap. */
  file: string;
  /** Headline figure. Omitted where there is no honest number to quote. */
  metric?: { value: string; label: Text };
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
  problem: Text;
  approach: Text;
  outcome: Text;
  stack: string[];
  /** Older work kept for range; shown short, after the main case studies. */
  earlier?: boolean;
}

// Case studies rather than artefacts: client work cannot be shown, so each one
// is problem -> what I did -> measured result. No screenshots, by design.
export const projects: Project[] = [
  {
    title: { en: 'Getting a report suite under ten minutes', es: 'Un conjunto de reportes por debajo de diez minutos' },
    company: 'Vivo Gaming',
    period: '2026',
    file: 'vivo_gaming.pbix',
    metric: { value: '60+ → ~10', label: { en: 'minutes, average refresh', es: 'minutos, actualización promedio' } },
    chart: { unit: 'min', max: 60, before: 60, after: 10, beforeLabel: '60+ min', afterLabel: '~10 min', lowerIsBetter: true },
    problem: {
      en: "As the only BI analyst for Risk, Finance and the studio managers, I inherited a report suite that took more than an hour to refresh and regularly timed out. The transformation logic lived in Power Query, loads were duplicated or stale, Finance built each B2B client's monthly statement by hand in two to three days, and the daily Excel feeds sat on the network share of someone who no longer worked there.",
      es: 'Como único analista de BI para Riesgo, Finanzas y los gerentes de estudio, heredé un conjunto de reportes que tardaba más de una hora en actualizarse y fallaba por timeout con frecuencia. La lógica de transformación vivía en Power Query, había cargas duplicadas u obsoletas, Finanzas armaba a mano el estado de cuenta mensual de cada cliente B2B en dos o tres días, y los archivos de Excel diarios estaban en la carpeta de red de alguien que ya no trabajaba ahí.',
    },
    approach: {
      en: 'Moved the transformation logic out of Power Query into Redshift SQL views, removed the duplicate and stale loads and added incremental refresh. Optimized the DAX calculated columns and measures and cut Power Query steps by about half across the suite. Built on-demand, RLS-secured billing reports for three B2B clients after gathering requirements directly with each of them, set up daily Power Automate alerts on six risk metrics, and moved the Excel feeds to SharePoint.',
      es: 'Saqué la lógica de transformación de Power Query y la pasé a vistas SQL en Redshift, eliminé las cargas duplicadas y obsoletas y agregué actualización incremental. Optimicé las columnas calculadas y medidas DAX y reduje aproximadamente a la mitad los pasos de Power Query en todo el conjunto. Construí reportes de facturación bajo demanda, protegidos con RLS, para tres clientes B2B después de levantar los requerimientos directamente con cada uno, configuré alertas diarias en Power Automate sobre seis métricas de riesgo y moví los archivos de Excel a SharePoint.',
    },
    outcome: {
      en: 'Average refresh dropped to about ten minutes and the timeouts stopped. Finance no longer assembles client statements by hand, the risk check runs every day instead of when someone remembers, and no feed depends on a single person’s folder any more.',
      es: 'La actualización promedio bajó a unos diez minutos y los timeouts desaparecieron. Finanzas ya no arma los estados de cuenta a mano, la revisión de riesgo corre todos los días en lugar de cuando alguien se acuerda, y ningún archivo depende ya de la carpeta de una sola persona.',
    },
    stack: ['Amazon Redshift', 'SQL', 'Power BI', 'DAX', 'Power Query', 'RLS', 'Power Automate'],
  },
  {
    title: { en: 'Rebuilding semantic models on Snowflake', es: 'Reconstruir modelos semánticos sobre Snowflake' },
    company: 'Hakkōda, an IBM Company',
    client: { en: 'Global bakery mfr.', es: 'Panificadora global' },
    period: '2024 - 2026',
    file: 'snowflake_migration.sql',
    metric: { value: '60 → 35', label: { en: 'minutes per dataset refresh (−42%)', es: 'minutos por actualización del dataset (−42%)' } },
    chart: { unit: 'min', max: 60, before: 60, after: 35, beforeLabel: '60 min', afterLabel: '35 min', lowerIsBetter: true },
    problem: {
      en: 'Reporting ran on Microsoft SQL Server while the client, a global bakery manufacturer, moved its warehouse to Snowflake. The Power BI semantic models refreshed several times a day at roughly 60 minutes each, so refresh cycles collided — a new one starting before the previous had finished. The models carried unused columns, bidirectional relationships, heavy Power Query transformations, and DAX doing work that belonged upstream.',
      es: 'Los reportes corrían sobre Microsoft SQL Server mientras el cliente, un fabricante global de panadería, migraba su warehouse a Snowflake. Los modelos semánticos de Power BI se actualizaban varias veces al día y cada actualización tardaba unos 60 minutos, así que los ciclos chocaban: uno nuevo empezaba antes de que terminara el anterior. Los modelos cargaban columnas sin uso, relaciones bidireccionales, transformaciones pesadas en Power Query y DAX haciendo trabajo que correspondía hacer antes, en el warehouse.',
    },
    approach: {
      en: 'Worked alongside the data engineer during the Snowflake migration, with Snowpipe for ingestion and SQL for the transformation layer, and modeled the star schema underneath it. I pushed the transformations and calculations down into the warehouse, so they run once against Snowflake instead of on every refresh, and rebuilt both semantic models on top of the star schema with incremental refresh.',
      es: 'Trabajé junto al ingeniero de datos durante la migración a Snowflake, con Snowpipe para la ingesta y SQL para la capa de transformación, y modelé el esquema estrella debajo. Llevé las transformaciones y los cálculos al warehouse, para que corran una sola vez en Snowflake en lugar de en cada actualización, y reconstruí ambos modelos semánticos sobre el esquema estrella con actualización incremental.',
    },
    outcome: {
      en: 'Refresh time fell from ~60 to ~35 minutes and the refresh cycles stopped overlapping. I led the client’s Power BI workstream for 14 months — 8 reports, ~20 users — presenting progress directly to its directors.',
      es: 'El tiempo de actualización bajó de ~60 a ~35 minutos y los ciclos dejaron de solaparse. Lideré el frente de Power BI del cliente durante 14 meses (8 reportes, ~20 usuarios) y presenté el avance directamente a sus directores.',
    },
    stack: ['Snowflake', 'Snowpipe', 'SQL', 'Power BI', 'Star schema'],
  },
  {
    title: { en: 'Modeling processors before the silicon exists', es: 'Modelar procesadores antes de que exista el silicio' },
    company: 'Intel Corporation',
    period: '2019 - 2021',
    file: 'processor_simulation.csv',
    problem: {
      en: 'Processor architecture decisions are made long before there is any hardware to measure, so they rest entirely on what simulation can be made to reveal.',
      es: 'Las decisiones de arquitectura de un procesador se toman mucho antes de que exista hardware que medir, así que dependen por completo de lo que la simulación logre revelar.',
    },
    approach: {
      en: 'Analyzed simulation output, built new components into the processor model itself, and added performance counters to capture behaviour that was not being measured. The work spanned Python, C++ and SQL over large simulation datasets, with the reporting layer built in Power BI and Streamlit so results could be explored rather than only read.',
      es: 'Analicé la salida de las simulaciones, construí componentes nuevos dentro del propio modelo del procesador y agregué contadores de rendimiento para capturar comportamiento que no se estaba midiendo. El trabajo combinó Python, C++ y SQL sobre grandes volúmenes de datos de simulación, con la capa de reportes en Power BI y Streamlit para que los resultados se pudieran explorar y no solo leer.',
    },
    outcome: {
      en: 'The analysis fed directly to the principal engineer leading the architecture, informing both optimization of the current design and decisions on future ones.',
      es: 'El análisis llegaba directamente al ingeniero principal a cargo de la arquitectura y orientaba tanto la optimización del diseño actual como las decisiones sobre los siguientes.',
    },
    stack: ['Python', 'C++', 'SQL', 'Power BI', 'Streamlit'],
  },
  {
    title: { en: 'Forecasting Service Desk demand', es: 'Pronosticar la demanda del Service Desk' },
    company: 'DHL',
    period: '2021 - 2022',
    file: 'demand_forecast.py',
    earlier: true,
    metric: { value: '63% → 81%', label: { en: 'prediction accuracy', es: 'precisión de la predicción' } },
    chart: { unit: '%', max: 100, before: 63, after: 81, beforeLabel: '63%', afterLabel: '81%', lowerIsBetter: false },
    problem: {
      en: 'Staffing at the Americas Service Desk was purely reactive: when volume rose the team hired, when it fell they let people go, and nobody could see a surge coming.',
      es: 'La contratación en el Service Desk de las Américas era puramente reactiva: cuando subía el volumen el equipo contrataba, cuando bajaba despedía, y nadie veía venir un aumento.',
    },
    approach: {
      en: 'A Gradient Boosting classifier predicting, one quarter ahead, whether incoming volume would exceed what the team could absorb, with the threshold taken from the agents’ actual daily capacity. Training on 2021 alone reached 63%; extending the history back to 2018 lifted it to 81%.',
      es: 'Un clasificador de Gradient Boosting que predecía, con un trimestre de anticipación, si el volumen entrante superaría lo que el equipo podía absorber, con el umbral tomado de la capacidad diaria real de los agentes. Entrenado solo con 2021 llegó a 63%; extender el histórico hasta 2018 lo subió a 81%.',
    },
    outcome: {
      en: 'Deployed on Azure as an alerting system that emailed team leads when their group was projected to fall short, so staffing was planned weeks ahead instead of decided under pressure.',
      es: 'Se desplegó en Azure como un sistema de alertas que enviaba un correo a los team leads cuando se proyectaba que su grupo no daría abasto, así que la contratación se planificaba con semanas de anticipación en lugar de decidirse bajo presión.',
    },
    stack: ['Python', 'scikit-learn', 'Azure', 'SQL'],
  },
];

/** Before/after refresh times, for the hero's query result. Same numbers as the
 * case charts, so the two can never disagree. */
export const refreshLog = projects
  .filter((p) => p.chart?.unit === 'min')
  .map(({ company, client, chart }) => ({
    client: client ?? ({ en: company, es: company } as Text),
    via: client ? company.split(',')[0] : null,
    before: chart!.before,
    beforeLabel: chart!.beforeLabel,
    after: chart!.after,
    afterLabel: chart!.afterLabel,
  }));
