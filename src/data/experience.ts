export type Role = {
	company: string;
	title: string;
	location: string;
	period: string;
	href?: string;
	highlights: readonly string[];
	stack: readonly string[];
	active?: boolean;
};

export const experience: readonly Role[] = [
	{
		company: 'Softsons',
		title: 'Frontend Architect',
		location: 'Lahore, PK',
		period: 'Feb 2026 — Present',
		href: 'https://softsons.com/',
		active: true,
		highlights: [
			'Architecting multi-tenant SaaS frontends with Next.js 15 App Router, streaming SSR, and edge caching.',
			'Established a monorepo design-system shipping shared React/Svelte primitives with tokens-first theming.',
			'Reduced TTI by ~45% across flagship products through route-level code splitting and RSC-first patterns.',
		],
		stack: ['Next.js', 'React', 'TypeScript', 'Tailwind v4', 'Turborepo', 'PostgreSQL'],
	},
	{
		company: 'OpenCore',
		title: 'Senior Developer',
		location: 'Toronto, CA',
		period: 'Feb 2024 — Jan 2026',
		href: 'https://www.opencoregroup.com/',
		highlights: [
			'Led frontend for a distributed-systems observability product — real-time dashboards over WebSockets.',
			'Built a plugin API that third-party teams extended without touching core bundles.',
			'Drove WCAG 2.1 AA compliance pass and automated a11y CI gating across 80+ screens.',
		],
		stack: ['React', 'Remix', 'TanStack Query', 'Shadcn/UI', 'Node.js', 'AWS'],
	},
	{
		company: 'DreamsEngine',
		title: 'Senior Developer',
		location: 'Mexico City, MX',
		period: 'Mar 2021 — Jan 2024',
		href: 'https://dreamsengine.com/',
		highlights: [
			'Shipped 12+ B2B SaaS products for agency clients across LATAM and EU markets.',
			'Created the internal design language that cut new-project bootstrap time from ~2 weeks to 2 days.',
			'Mentored a team of 6 engineers; introduced trunk-based development and preview deployments.',
		],
		stack: ['Vue 3', 'Nuxt', 'React Native', 'Supabase', 'Vercel'],
	},
	{
		company: 'PepBoys',
		title: 'Frontend Developer',
		location: 'PA, USA',
		period: 'May 2020 — Feb 2021',
		href: 'https://pepboys.com/',
		highlights: [
			'Rebuilt checkout funnel pages driving a measurable lift in conversion on mobile.',
			'Migrated legacy jQuery widgets to modern React islands without a full rewrite.',
			'Collaborated with UX to ship a responsive redesign system-wide.',
		],
		stack: ['React', 'TypeScript', 'SCSS', 'BEM', 'Jest'],
	},
] as const;
