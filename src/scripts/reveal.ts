/**
 * Scroll-reveal via IntersectionObserver
 * --------------------------------------------------------------
 * Any element with [data-reveal] fades + rises into view the first
 * time it crosses the viewport. A `data-reveal-delay="N"` attribute
 * stacks delays for siblings without JS-computed timing.
 *
 * Respects prefers-reduced-motion: immediately marks visible.
 */

const SELECTOR = '[data-reveal]';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const markVisible = (el: Element): void => {
	el.classList.add('is-visible');
};

const init = (): void => {
	const nodes = document.querySelectorAll<HTMLElement>(SELECTOR);
	if (nodes.length === 0) return;

	if (prefersReducedMotion || !('IntersectionObserver' in window)) {
		nodes.forEach(markVisible);
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const delay = entry.target.getAttribute('data-reveal-delay');
				if (delay) {
					(entry.target as HTMLElement).style.setProperty('--reveal-delay', `${delay}ms`);
				}
				markVisible(entry.target);
				observer.unobserve(entry.target);
			});
		},
		{
			rootMargin: '0px 0px -10% 0px',
			threshold: 0.12,
		},
	);

	nodes.forEach((node) => observer.observe(node));
};

// Astro View Transitions friendly
document.addEventListener('astro:page-load', init);
if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);

export {};
