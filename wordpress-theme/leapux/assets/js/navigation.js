/**
 * LeapUX Navigation Script
 *
 * Handles scroll-based header styling, mobile menu toggle, and logo swap.
 */
( function () {
    'use strict';

    const header       = document.getElementById( 'site-header' );
    const toggle       = document.getElementById( 'mobile-menu-toggle' );
    const mobileNav    = document.getElementById( 'mobile-nav' );
    const iconOpen     = document.getElementById( 'menu-icon-open' );
    const iconClose    = document.getElementById( 'menu-icon-close' );
    const logoImg      = document.getElementById( 'site-logo-img' );

    let isOpen = false;

    // Scroll handler — add/remove "scrolled" class
    function onScroll() {
        if ( ! header ) return;
        if ( window.scrollY > 20 ) {
            header.classList.add( 'scrolled' );
        } else {
            header.classList.remove( 'scrolled' );
        }

        // Swap logo if data attributes exist
        if ( logoImg && logoImg.dataset.light && logoImg.dataset.dark ) {
            logoImg.src = window.scrollY > 20 ? logoImg.dataset.dark : logoImg.dataset.light;
        }
    }

    // Mobile menu toggle
    function toggleMenu() {
        isOpen = ! isOpen;
        if ( mobileNav ) {
            mobileNav.classList.toggle( 'open', isOpen );
        }
        if ( iconOpen )  iconOpen.style.display  = isOpen ? 'none'  : 'block';
        if ( iconClose ) iconClose.style.display = isOpen ? 'block' : 'none';
        if ( toggle ) toggle.setAttribute( 'aria-expanded', String( isOpen ) );
    }

    // Close mobile menu when a link is clicked
    if ( mobileNav ) {
        mobileNav.querySelectorAll( 'a' ).forEach( function ( link ) {
            link.addEventListener( 'click', function () {
                if ( isOpen ) toggleMenu();
            } );
        } );
    }

    // Bind events
    window.addEventListener( 'scroll', onScroll, { passive: true } );
    if ( toggle ) toggle.addEventListener( 'click', toggleMenu );

    // Run on load
    onScroll();
} )();
