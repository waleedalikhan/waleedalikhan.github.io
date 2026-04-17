/**
 * Cursor-Tracking Ambient Glow
 * --------------------------------------------------------------
 * Writes the cursor position to CSS custom properties on <html>,
 * which a pseudo-element on the body uses to render a radial
 * gradient. Skipped entirely on fine-pointer? no — we keep it on
 * pointer: fine only, and respect reduced-motion.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

if (!prefersReducedMotion && hasFinePointer) {
	const root = document.documentElement;
	let rafId = 0;
	let pendingX = window.innerWidth / 2;
	let pendingY = window.innerHeight / 2;

	const flush = (): void => {
		root.style.setProperty('--cursor-x', `${pendingX}px`);
		root.style.setProperty('--cursor-y', `${pendingY}px`);
		rafId = 0;
	};

	const onMove = (event: PointerEvent): void => {
		pendingX = event.clientX;
		pendingY = event.clientY;
		if (rafId === 0) rafId = requestAnimationFrame(flush);
	};

	window.addEventListener('pointermove', onMove, { passive: true });

	// Pause glow when tab is hidden — save CPU on background tabs.
	document.addEventListener('visibilitychange', () => {
		document.body.style.setProperty(
			'opacity',
			document.hidden ? '0.95' : '1',
		);
	});
}

export {};
