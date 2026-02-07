/**
 * LeapUX Block Theme — Main JS
 *
 * Lightweight vanilla JS for:
 *  1. Reveal-on-scroll animations (IntersectionObserver)
 *  2. Scrollspy: highlights active nav link based on visible section
 *  3. Sticky header shadow on scroll
 *
 * No libraries. No build step. No jQuery.
 * Respects prefers-reduced-motion.
 *
 * @package LeapUX
 * @since 1.0.0
 */

(function () {
	'use strict';

	// Bail early if user prefers reduced motion
	var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

	if (prefersReducedMotion.matches) {
		// Make all reveal sections visible immediately
		document.querySelectorAll('.reveal-section').forEach(function (el) {
			el.classList.add('is-visible');
		});
		return;
	}

	// -----------------------------------------------------------------------
	// 1. Reveal-on-Scroll
	// -----------------------------------------------------------------------

	var revealObserver = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					revealObserver.unobserve(entry.target); // Animate once
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px',
		}
	);

	document.querySelectorAll('.reveal-section').forEach(function (el) {
		revealObserver.observe(el);
	});

	// -----------------------------------------------------------------------
	// 2. Scrollspy — Active Navigation Link
	// -----------------------------------------------------------------------

	var sections = document.querySelectorAll('section[id]');
	var navLinks = document.querySelectorAll('.wp-block-navigation a');

	if (sections.length && navLinks.length) {
		var scrollspyObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						var id = entry.target.getAttribute('id');
						navLinks.forEach(function (link) {
							link.classList.remove('active-section');
							var href = link.getAttribute('href');
							if (href && href.includes('#' + id)) {
								link.classList.add('active-section');
							}
						});
					}
				});
			},
			{
				threshold: 0.3,
				rootMargin: '-80px 0px -40% 0px',
			}
		);

		sections.forEach(function (section) {
			scrollspyObserver.observe(section);
		});
	}

	// -----------------------------------------------------------------------
	// 3. Sticky Header Shadow
	// -----------------------------------------------------------------------

	var header = document.querySelector('.site-header');
	if (header) {
		var sentinel = document.createElement('div');
		sentinel.style.height = '1px';
		sentinel.style.position = 'absolute';
		sentinel.style.top = '0';
		sentinel.style.left = '0';
		sentinel.style.right = '0';
		sentinel.style.pointerEvents = 'none';
		document.body.prepend(sentinel);

		var headerObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) {
						header.classList.add('scrolled');
					} else {
						header.classList.remove('scrolled');
					}
				});
			},
			{ threshold: 0 }
		);

		headerObserver.observe(sentinel);
	}
})();
