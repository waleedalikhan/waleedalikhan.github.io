export type SkillGroup = {
	id: string;
	title: string;
	tagline: string;
	items: readonly string[];
};

export const skills: readonly SkillGroup[] = [
	{
		id: 'core',
		title: 'Core Frameworks',
		tagline: 'What I reach for to build product',
		items: [
			'React',
			'Next.js',
			'Svelte 5',
			'Vue 3',
			'Nuxt 4',
			'Astro',
			'Remix',
			'TypeScript',
			'TanStack',
		],
	},
	{
		id: 'styling',
		title: 'Styling & Design Systems',
		tagline: 'Design tokens in, pixel-perfect UI out',
		items: [
			'Tailwind v4',
			'Shadcn/UI',
			'MUI',
			'Design Systems',
			'Figma',
			'SCSS',
			'BEM',
			'a11y / WCAG 2.1',
		],
	},
	{
		id: 'backend',
		title: 'Backend & DevOps',
		tagline: 'Full-stack where it matters',
		items: [
			'Node.js',
			'PostgreSQL',
			'GraphQL',
			'REST',
			'Docker',
			'AWS Amplify / AppSync',
			'Vercel',
			'CI/CD',
			'Edge Runtime',
		],
	},
	{
		id: 'mobile',
		title: 'Mobile',
		tagline: 'Native-feeling cross-platform apps',
		items: [
			'React Native (CLI)',
			'Expo',
			'NativeWind',
			'Zustand',
			'Redux Saga',
			'Firebase',
			'Supabase',
		],
	},
	{
		id: 'testing',
		title: 'Quality & Testing',
		tagline: 'Shipping with confidence',
		items: [
			'Vitest',
			'Jest',
			'Playwright',
			'Testing Library',
			'E2E',
			'Lighthouse CI',
			'Bundle analysis',
		],
	},
	{
		id: 'workflow',
		title: 'Workflow & Collaboration',
		tagline: 'Structured, proactive, team-first',
		items: ['Git / GitHub', 'Jira', 'Linear', 'Scrum', 'Cursor', 'Claude Code', 'LLM / Agentic AI'],
	},
] as const;
