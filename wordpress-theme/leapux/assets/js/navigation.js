/**
 * LeapUX Theme Navigation
 *
 * Handles header scroll behavior, mobile menu toggle,
 * and logo swapping between light/dark variants.
 *
 * @package LeapUX
 */
(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const toggleOpen = mobileToggle ? mobileToggle.querySelector('.toggle-open') : null;
  const toggleClose = mobileToggle ? mobileToggle.querySelector('.toggle-close') : null;
  const logoLight = header ? header.querySelector('.logo-light') : null;
  const logoDark = header ? header.querySelector('.logo-dark') : null;

  let isMenuOpen = false;

  /**
   * Handle scroll — add/remove 'scrolled' class
   * and swap logo variant.
   */
  function handleScroll() {
    if (!header) return;

    const scrolled = window.scrollY > 20;
    header.classList.toggle('scrolled', scrolled);

    // Swap logos
    if (logoLight && logoDark) {
      logoLight.style.display = scrolled ? 'none' : 'block';
      logoDark.style.display = scrolled ? 'block' : 'none';
    }
  }

  /**
   * Toggle mobile menu
   */
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (mobileNav) {
      mobileNav.classList.toggle('open', isMenuOpen);
    }

    if (toggleOpen && toggleClose) {
      toggleOpen.style.display = isMenuOpen ? 'none' : 'block';
      toggleClose.style.display = isMenuOpen ? 'block' : 'none';
    }

    // When menu is open, show dark logo regardless of scroll position
    if (logoLight && logoDark) {
      if (isMenuOpen) {
        logoLight.style.display = 'none';
        logoDark.style.display = 'block';
      } else {
        handleScroll(); // Restore based on scroll position
      }
    }
  }

  /**
   * Close mobile menu on link click
   */
  function setupMobileNavLinks() {
    if (!mobileNav) return;

    const links = mobileNav.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMenuOpen) {
          toggleMenu();
        }
      });
    });
  }

  /**
   * Close mobile menu on Escape key
   */
  function handleKeydown(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      toggleMenu();
    }
  }

  // Initialize
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Set initial state

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMenu);
  }

  setupMobileNavLinks();
  document.addEventListener('keydown', handleKeydown);
})();
