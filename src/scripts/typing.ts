/**
 * Terminal-style typing effect
 * --------------------------------------------------------------
 * Cycles through phrases in [data-typing] elements whose
 * content is read from a JSON array on `data-typing-words`.
 *
 * - Uses Web Animations API for the caret blink (handled in CSS).
 * - Kills itself on prefers-reduced-motion, just renders the first word.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TYPE_DELAY = 55;
const ERASE_DELAY = 30;
const PAUSE_HOLD = 1800;
const PAUSE_BEFORE_NEXT = 400;

const wait = (ms: number): Promise<void> =>
	new Promise((resolve) => window.setTimeout(resolve, ms));

const runCycle = async (el: HTMLElement, words: readonly string[]): Promise<void> => {
	let index = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const word = words[index % words.length]!;
		// type
		for (let i = 1; i <= word.length; i++) {
			el.textContent = word.slice(0, i);
			await wait(TYPE_DELAY);
		}
		await wait(PAUSE_HOLD);
		// erase
		for (let i = word.length; i >= 0; i--) {
			el.textContent = word.slice(0, i);
			await wait(ERASE_DELAY);
		}
		await wait(PAUSE_BEFORE_NEXT);
		index++;
	}
};

const init = (): void => {
	const nodes = document.querySelectorAll<HTMLElement>('[data-typing]');
	nodes.forEach((el) => {
		const raw = el.dataset.typingWords;
		if (!raw) return;
		let words: readonly string[] = [];
		try {
			words = JSON.parse(raw) as readonly string[];
		} catch {
			words = raw.split('|').map((s) => s.trim()).filter(Boolean);
		}
		if (words.length === 0) return;

		if (prefersReducedMotion) {
			el.textContent = words[0]!;
			return;
		}

		void runCycle(el, words);
	});
};

document.addEventListener('astro:page-load', init);
if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);

export {};
