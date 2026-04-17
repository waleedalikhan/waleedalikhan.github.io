export type ProjectTag = 'SaaS' | 'Analytics' | 'AI' | 'DevTools' | 'Marketing' | 'Billing' | 'OSS';

export type Project = {
	slug: string;
	title: string;
	kicker: string;
	summary: string;
	role: string;
	tags: readonly ProjectTag[];
	stack: readonly string[];
	href: string;
	span: 'sm' | 'md' | 'lg' | 'xl';
	metric?: { value: string; label: string };
	featured?: boolean;
};

export const projects: readonly Project[] = [
	{
		slug: 'tradehat',
		title: 'TradeHat',
		kicker: 'SaaS Trading Platform',
		summary:
			'Real-time market insights platform with streaming charts, strategy back-testing, and a responsive frontend tuned for zero-jank data visualization.',
		role: 'Frontend Architect',
		tags: ['SaaS', 'Analytics'],
		stack: ['Next.js', 'React', 'TanStack', 'WebSockets', 'Tailwind'],
		href: 'https://tradehat.com/',
		span: 'xl',
		metric: { value: '<80ms', label: 'Chart frame time' },
		featured: true,
	},
	{
		slug: 'plausible',
		title: 'Plausible Analytics',
		kicker: 'Privacy-first Analytics',
		summary:
			'High-performance dashboards with minimal bundle size. Reusable Tailwind primitives, API-driven data pipelines, real-time traffic insights.',
		role: 'Core Contributor',
		tags: ['Analytics', 'OSS'],
		stack: ['React', 'Next.js', 'Tailwind'],
		href: 'https://plausible.io/',
		span: 'md',
		metric: { value: '<45kb', label: 'JS shipped' },
		featured: true,
	},
	{
		slug: 'cal',
		title: 'Cal.com',
		kicker: 'Scheduling Infrastructure',
		summary:
			'Complex calendar state management, reusable booking flows, and real-time availability across distributed calendar sources.',
		role: 'Core Contributor',
		tags: ['SaaS', 'OSS', 'DevTools'],
		stack: ['React', 'Next.js', 'Prisma'],
		href: 'https://cal.com/',
		span: 'md',
		featured: true,
	},
	{
		slug: 'dub',
		title: 'Dub.co',
		kicker: 'Open-source Link Infrastructure',
		summary:
			'Link analytics with real-time tracking metrics, campaign management UI, event attribution pipelines.',
		role: 'Core Contributor',
		tags: ['Analytics', 'OSS', 'Marketing'],
		stack: ['Next.js', 'Tinybird', 'Tailwind'],
		href: 'https://dub.co/',
		span: 'sm',
	},
	{
		slug: 'lemonsqueezy',
		title: 'Lemon Squeezy',
		kicker: 'SaaS Billing & Merchant of Record',
		summary:
			'Product dashboard interfaces for billing flows — subscriptions, checkout, revenue analytics, webhooks.',
		role: 'Core Contributor',
		tags: ['Billing', 'SaaS'],
		stack: ['React', 'Tailwind', 'Stripe'],
		href: 'https://lemonsqueezy.com/',
		span: 'sm',
	},
	{
		slug: 'novu',
		title: 'Novu',
		kicker: 'Notification Infrastructure',
		summary:
			'Modular notification dashboards for multi-channel workflows — email, SMS, in-app — with event-driven delivery.',
		role: 'Core Contributor',
		tags: ['DevTools', 'OSS'],
		stack: ['React', 'Node.js', 'MongoDB'],
		href: 'https://novu.co/',
		span: 'sm',
	},
	{
		slug: 'nurturingmail',
		title: 'Nurturing Mail',
		kicker: 'Marketing Automation',
		summary:
			'Campaign dashboards with reusable UI components, API integrations for scheduling, tracking, and segmentation.',
		role: 'Senior Developer',
		tags: ['Marketing', 'SaaS'],
		stack: ['React', 'Tailwind', 'Node.js'],
		href: 'https://nurturingmail.com/',
		span: 'md',
	},
	{
		slug: 'magicpeople',
		title: 'Magic People AI',
		kicker: 'AI-driven Recruitment',
		summary:
			'Recruitment dashboards with dynamic candidate data, AI-driven screening APIs, and clean data presentation.',
		role: 'Senior Developer',
		tags: ['AI', 'SaaS'],
		stack: ['Next.js', 'OpenAI', 'Tailwind'],
		href: 'https://magicpeople.ai/',
		span: 'md',
	},
	{
		slug: 'rankings',
		title: 'Rankings.io',
		kicker: 'SEO-optimized Marketing Site',
		summary:
			'High-performance SEO site on modern WordPress — Gutenberg + FSE, Tailwind UI, MySQL tuning, and technical SEO passes.',
		role: 'Frontend Lead',
		tags: ['Marketing'],
		stack: ['WordPress', 'Gutenberg', 'Tailwind'],
		href: 'https://rankings.io/',
		span: 'sm',
	},
] as const;

export const projectFilters: readonly ProjectTag[] = [
	'SaaS',
	'Analytics',
	'AI',
	'DevTools',
	'Marketing',
	'Billing',
	'OSS',
] as const;
