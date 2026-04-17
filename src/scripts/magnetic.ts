/**
 * Magnetic Buttons
 * --------------------------------------------------------------
 * Elements with [data-magnetic] gently pull toward the cursor.
 * Strength scaled to button size so tiny icons don't warp wildly.
 *
 * - pointer: fine only
 * - respects prefers-reduced-motion
 * - transform updates are rAF-batched per element
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

type MagneticState = {
	rafId: number;
	nx: number;
	ny: number;
};

const init = (): void => {
	if (prefersReducedMotion || !hasFinePointer) return;

	const nodes = document.querySelectorAll<HTMLElement>('[data-magnetic]');
	if (nodes.length === 0) return;

	nodes.forEach((el) => {
		const strength = Number.parseFloat(el.dataset.magneticStrength ?? '0.35');
		const state: MagneticState = { rafId: 0, nx: 0, ny: 0 };

		const apply = (): void => {
			el.style.setProperty('--mx', `${state.nx}px`);
			el.style.setProperty('--my', `${state.ny}px`);
			state.rafId = 0;
		};

		const onMove = (event: PointerEvent): void => {
			const rect = el.getBoundingClientRect();
			const relX = event.clientX - rect.left - rect.width / 2;
			const relY = event.clientY - rect.top - rect.height / 2;
			state.nx = relX * strength;
			state.ny = relY * strength;
			if (state.rafId === 0) state.rafId = requestAnimationFrame(apply);
		};

		const onLeave = (): void => {
			state.nx = 0;
			state.ny = 0;
			if (state.rafId === 0) state.rafId = requestAnimationFrame(apply);
		};

		el.addEventListener('pointermove', onMove);
		el.addEventListener('pointerleave', onLeave);
	});
};

document.addEventListener('astro:page-load', init);
if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init);

export {};
