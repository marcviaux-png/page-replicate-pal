<?php
/**
 * LeapUX Theme Functions
 *
 * @package LeapUX
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme Setup
 */
function leapux_setup() {
    // Add title tag support
    add_theme_support( 'title-tag' );

    // Add post thumbnail support
    add_theme_support( 'post-thumbnails' );

    // Add custom logo support
    add_theme_support( 'custom-logo', array(
        'height'      => 40,
        'width'       => 160,
        'flex-width'  => true,
        'flex-height' => true,
    ) );

    // Add HTML5 support
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Register navigation menus
    register_nav_menus( array(
        'primary'    => __( 'Primary Menu', 'leapux' ),
        'footer'     => __( 'Footer Menu', 'leapux' ),
    ) );

    // Add responsive embeds support
    add_theme_support( 'responsive-embeds' );

    // Add editor styles
    add_theme_support( 'editor-styles' );

    // Custom image sizes
    add_image_size( 'leapux-hero', 2000, 1200, true );
    add_image_size( 'leapux-card', 800, 600, true );
}
add_action( 'after_setup_theme', 'leapux_setup' );

/**
 * Enqueue Styles and Scripts
 */
function leapux_enqueue_assets() {
    // Google Fonts - Inter
    wp_enqueue_style(
        'leapux-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap',
        array(),
        null
    );

    // Main theme stylesheet
    wp_enqueue_style(
        'leapux-style',
        get_stylesheet_uri(),
        array( 'leapux-google-fonts' ),
        wp_get_theme()->get( 'Version' )
    );

    // Navigation scroll script
    wp_enqueue_script(
        'leapux-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'leapux_enqueue_assets' );

/**
 * Customizer Settings
 */
function leapux_customize_register( $wp_customize ) {
    // Contact Info Section
    $wp_customize->add_section( 'leapux_contact_info', array(
        'title'    => __( 'Contact Information', 'leapux' ),
        'priority' => 30,
    ) );

    // Phone Number
    $wp_customize->add_setting( 'leapux_phone', array(
        'default'           => '1-888-553-2789',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'leapux_phone', array(
        'label'   => __( 'Phone Number', 'leapux' ),
        'section' => 'leapux_contact_info',
        'type'    => 'text',
    ) );

    // Email
    $wp_customize->add_setting( 'leapux_email', array(
        'default'           => 'contact@leapux.com',
        'sanitize_callback' => 'sanitize_email',
    ) );
    $wp_customize->add_control( 'leapux_email', array(
        'label'   => __( 'Email Address', 'leapux' ),
        'section' => 'leapux_contact_info',
        'type'    => 'email',
    ) );

    // Address
    $wp_customize->add_setting( 'leapux_address', array(
        'default'           => '1554 Carling Ave. Unit 42, Ottawa, ON K1Z 7M4',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'leapux_address', array(
        'label'   => __( 'Address', 'leapux' ),
        'section' => 'leapux_contact_info',
        'type'    => 'textarea',
    ) );

    // Social Media Section
    $wp_customize->add_section( 'leapux_social', array(
        'title'    => __( 'Social Media', 'leapux' ),
        'priority' => 35,
    ) );

    $social_networks = array( 'facebook', 'linkedin', 'instagram' );
    foreach ( $social_networks as $network ) {
        $wp_customize->add_setting( "leapux_{$network}", array(
            'default'           => "https://{$network}.com",
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( "leapux_{$network}", array(
            'label'   => ucfirst( $network ) . __( ' URL', 'leapux' ),
            'section' => 'leapux_social',
            'type'    => 'url',
        ) );
    }
}
add_action( 'customize_register', 'leapux_customize_register' );

/**
 * Custom excerpt length
 */
function leapux_excerpt_length( $length ) {
    return 25;
}
add_filter( 'excerpt_length', 'leapux_excerpt_length' );

/**
 * Remove default WordPress emoji scripts
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Add preconnect for Google Fonts
 */
function leapux_resource_hints( $urls, $relation_type ) {
    if ( 'preconnect' === $relation_type ) {
        $urls[] = array(
            'href' => 'https://fonts.googleapis.com',
            'crossorigin' => true,
        );
        $urls[] = array(
            'href' => 'https://fonts.gstatic.com',
            'crossorigin' => true,
        );
    }
    return $urls;
}
add_filter( 'wp_resource_hints', 'leapux_resource_hints', 10, 2 );
