// The site is in English at / and Spanish at /es/. Everything that differs by
// language is a Text ({ en, es }) resolved with t(); everything that does not
// (numbers, dates, names, stacks) is stored once.

export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];
export type Text = Record<Lang, string>;

export const t = (text: Text | string, lang: Lang) => (typeof text === 'string' ? text : text[lang]);

/** The language of a page, from its URL: anything under /es is Spanish. */
export const langOf = (url: URL): Lang =>
  url.pathname === '/es' || url.pathname.startsWith('/es/') ? 'es' : 'en';

/** The same page in the other language: /cv <-> /es/cv. */
export const pathIn = (lang: Lang, url: URL) => {
  const base = url.pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return lang === 'es' ? `/es${base === '/' ? '/' : base}` : base;
};

/** A root-relative link in the given language: href('/cv', 'es') -> '/es/cv'. */
export const href = (path: string, lang: Lang) => (lang === 'es' ? `/es${path}` : path);

const months: Record<Lang, string[]> = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
};

/** "2024-10" -> "October 2024" / "octubre 2024". */
export const formatMonth = (yearMonth: string, lang: Lang) => {
  const [year, month] = yearMonth.split('-');
  return `${months[lang][Number(month) - 1]} ${year}`;
};

/** "2024-10" -> "Oct 2024" / "oct 2024". */
export const formatMonthShort = (yearMonth: string, lang: Lang) =>
  formatMonth(yearMonth, lang).replace(/^(\p{L}{3})\p{L}*/u, '$1');

export const formatPeriod = (start: string, end: string, lang: Lang) =>
  `${formatMonth(start, lang)} - ${formatMonth(end, lang)}`;
