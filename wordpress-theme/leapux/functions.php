<?php
/**
 * LeapUX Block Theme - Functions
 *
 * Minimal functions file for theme setup, asset enqueuing,
 * and block pattern registration.
 *
 * @package LeapUX
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme setup: declare support for block features.
 */
function leapux_setup() {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'custom-logo', array(
		'height'      => 40,
		'width'       => 160,
		'flex-height' => true,
		'flex-width'  => true,
	) );
}
add_action( 'after_setup_theme', 'leapux_setup' );

/**
 * Enqueue front-end styles and scripts.
 */
function leapux_enqueue_assets() {
	// Custom CSS for animations and micro-interactions
	wp_enqueue_style(
		'leapux-custom',
		get_theme_file_uri( 'assets/css/custom.css' ),
		array(),
		wp_get_theme()->get( 'Version' )
	);

	// Lightweight vanilla JS for scroll animations & scrollspy
	wp_enqueue_script(
		'leapux-main',
		get_theme_file_uri( 'assets/js/main.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true // Load in footer
	);
}
add_action( 'wp_enqueue_scripts', 'leapux_enqueue_assets' );

/**
 * Enqueue editor styles so the block editor matches the front end.
 */
function leapux_editor_assets() {
	wp_enqueue_style(
		'leapux-editor',
		get_theme_file_uri( 'assets/css/custom.css' ),
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'enqueue_block_editor_assets', 'leapux_editor_assets' );

/**
 * Register block patterns.
 */
function leapux_register_patterns() {
	register_block_pattern_category( 'leapux', array(
		'label' => __( 'LeapUX', 'leapux' ),
	) );
}
add_action( 'init', 'leapux_register_patterns' );
