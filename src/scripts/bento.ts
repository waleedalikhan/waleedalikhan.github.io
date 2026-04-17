/**
 * Bento card pointer tracking + filter behavior
 * --------------------------------------------------------------
 * 1. Writes pointer coords (--px, --py) as percentages on each
 *    .bento tile so the hover "spotlight" follows the cursor.
 * 2. Wires up filter chips that toggle data-filter attrs and
 *    hide/show cards by their data-tags value list.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const wireSpotlight = (): void => {
	if (prefersReducedMotion) return;
	const tiles = document.querySelectorAll<HTMLElement>('.bento');
	tiles.forEach((tile) => {
		tile.addEventListener('pointermove', (event) => {
			const rect = tile.getBoundingClientRect();
			const x = ((event.clientX - rect.left) / rect.width) * 100;
			const y = ((event.clientY - rect.top) / rect.height) * 100;
			tile.style.setProperty('--px', `${x}%`);
			tile.style.setProperty('--py', `${y}%`);
		});
	});
};

const wireFilters = (): void => {
	const chips = document.querySelectorAll<HTMLButtonElement>('[data-filter-chip]');
	const cards = document.querySelectorAll<HTMLElement>('[data-project-card]');
	if (chips.length === 0 || cards.length === 0) return;

	const apply = (value: string): void => {
		chips.forEach((chip) => {
			const pressed = chip.dataset.filterChip === value;
			chip.setAttribute('aria-pressed', pressed ? 'true' : 'false');
		});
		cards.forEach((card) => {
			const tags = (card.dataset.tags ?? '').split(',').map((t) => t.trim());
			const matches = value === 'all' || tags.includes(value);
			card.hidden = !matches;
			if (matches) {
				card.classList.remove('is-filtered-out');
			} else {
				card.classList.add('is-filtered-out');
			}
		});
	};

	chips.forEach((chip) => {
		chip.addEventListener('click', () => {
			const value = chip.dataset.filterChip ?? 'all';
			apply(value);
		});
	});
};

const init = (): void => {
	wireSpotlight();
	wireFilters();
};

document.addEventListener('astro:page-load', init);
if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);

export {};
