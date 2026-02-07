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

/* ========================================
   Theme Setup
======================================== */
function leapux_setup() {
    // Add document title tag support
    add_theme_support( 'title-tag' );

    // Add featured image support
    add_theme_support( 'post-thumbnails' );

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

    // Add custom logo support
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Register navigation menus
    register_nav_menus( array(
        'primary'  => __( 'Primary Menu', 'leapux' ),
        'footer'   => __( 'Footer Menu', 'leapux' ),
    ) );

    // Set content width
    if ( ! isset( $content_width ) ) {
        $content_width = 1280;
    }
}
add_action( 'after_setup_theme', 'leapux_setup' );

/* ========================================
   Enqueue Styles & Scripts
======================================== */
function leapux_enqueue_assets() {
    // Google Fonts: Inter
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

    // Navigation script
    wp_enqueue_script(
        'leapux-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'leapux_enqueue_assets' );

/* ========================================
   Custom Nav Walker for Primary Menu
======================================== */
class LeapUX_Nav_Walker extends Walker_Nav_Menu {
    /**
     * Track if we're inside a dropdown
     */
    private $in_dropdown = false;

    /**
     * Starts the list of sub-menu items.
     */
    public function start_lvl( &$output, $depth = 0, $args = null ) {
        $output .= '<div class="nav-dropdown-menu">';
        $this->in_dropdown = true;
    }

    /**
     * Ends the list of sub-menu items.
     */
    public function end_lvl( &$output, $depth = 0, $args = null ) {
        $output .= '</div>';
        $this->in_dropdown = false;
    }

    /**
     * Starts the element output.
     */
    public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        $is_active = in_array( 'current-menu-item', $classes ) || in_array( 'current-menu-ancestor', $classes );
        $has_children = in_array( 'menu-item-has-children', $classes );

        if ( $depth === 0 && $has_children ) {
            $output .= '<div class="nav-dropdown">';
            $active_class = $is_active ? ' active' : '';
            $output .= '<button class="dropdown-trigger' . $active_class . '">';
            $output .= esc_html( $item->title );
            $output .= ' <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
            $output .= '</button>';
        } elseif ( $depth === 0 ) {
            // Check if this is the Contact item (CTA button)
            if ( strtolower( $item->title ) === 'contact us' || strtolower( $item->title ) === 'contact' ) {
                $output .= '<a href="' . esc_url( $item->url ) . '" class="nav-cta">';
                $output .= esc_html( $item->title );
                $output .= '</a>';
            } else {
                $active_class = $is_active ? ' active' : '';
                $output .= '<a href="' . esc_url( $item->url ) . '" class="' . $active_class . '">';
                $output .= esc_html( $item->title );
                $output .= '</a>';
            }
        } else {
            // Sub-menu items
            $output .= '<a href="' . esc_url( $item->url ) . '">';
            $output .= esc_html( $item->title );
            $output .= '</a>';
        }
    }

    /**
     * Ends the element output.
     */
    public function end_el( &$output, $item, $depth = 0, $args = null ) {
        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        $has_children = in_array( 'menu-item-has-children', $classes );

        if ( $depth === 0 && $has_children ) {
            $output .= '</div>'; // Close .nav-dropdown
        }
    }
}

/* ========================================
   Theme Activation: Create Required Pages
======================================== */
function leapux_create_pages_on_activation() {
    // Required pages: slug => title
    $pages = array(
        'home'          => 'Home',
        'services'      => 'Services',
        'capabilities'  => 'Capabilities',
        'ai-training'   => 'AI Training & Enablement',
        'ai-services'   => 'AI Services',
        'about'         => 'About',
        'contact'       => 'Contact',
    );

    foreach ( $pages as $slug => $title ) {
        // Check if page already exists by slug
        $existing = get_page_by_path( $slug );

        if ( ! $existing ) {
            $page_data = array(
                'post_title'   => $title,
                'post_name'    => $slug,
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'post_content' => '',
                'post_author'  => 1,
            );

            wp_insert_post( $page_data );
        }
    }

    // Set the Home page as the static front page
    $home_page = get_page_by_path( 'home' );
    if ( $home_page ) {
        update_option( 'show_on_front', 'page' );
        update_option( 'page_on_front', $home_page->ID );
    }

    // Create Primary Menu if it doesn't exist
    $menu_name = 'Primary Menu';
    $menu_exists = wp_get_nav_menu_object( $menu_name );

    if ( ! $menu_exists ) {
        $menu_id = wp_create_nav_menu( $menu_name );

        if ( ! is_wp_error( $menu_id ) ) {
            // Add menu items
            $menu_items = array(
                'home'         => array( 'title' => 'Home',         'order' => 1, 'parent' => 0 ),
                'services'     => array( 'title' => 'Services',     'order' => 2, 'parent' => 0 ),
                'capabilities' => array( 'title' => 'Capabilities', 'order' => 3, 'parent' => 0 ),
                'ai'           => array( 'title' => 'AI',           'order' => 4, 'parent' => 0, 'is_parent' => true ),
                'ai-services'  => array( 'title' => 'AI Services',  'order' => 5, 'parent' => 'ai' ),
                'ai-training'  => array( 'title' => 'AI Training & Enablement', 'order' => 6, 'parent' => 'ai' ),
                'about'        => array( 'title' => 'About',        'order' => 7, 'parent' => 0 ),
                'contact'      => array( 'title' => 'Contact Us',   'order' => 8, 'parent' => 0 ),
            );

            $item_ids = array();

            foreach ( $menu_items as $slug => $item ) {
                // Skip the AI parent (it's just a label, not a real page)
                if ( isset( $item['is_parent'] ) && $item['is_parent'] ) {
                    $item_ids[ $slug ] = wp_update_nav_menu_item( $menu_id, 0, array(
                        'menu-item-title'  => $item['title'],
                        'menu-item-url'    => '#',
                        'menu-item-status' => 'publish',
                        'menu-item-position' => $item['order'],
                        'menu-item-type'   => 'custom',
                    ) );
                    continue;
                }

                $page = get_page_by_path( $slug );
                if ( $page ) {
                    $parent_id = 0;
                    if ( $item['parent'] !== 0 && isset( $item_ids[ $item['parent'] ] ) ) {
                        $parent_id = $item_ids[ $item['parent'] ];
                    }

                    $item_ids[ $slug ] = wp_update_nav_menu_item( $menu_id, 0, array(
                        'menu-item-title'     => $item['title'],
                        'menu-item-object'    => 'page',
                        'menu-item-object-id' => $page->ID,
                        'menu-item-type'      => 'post_type',
                        'menu-item-status'    => 'publish',
                        'menu-item-position'  => $item['order'],
                        'menu-item-parent-id' => $parent_id,
                    ) );
                }
            }

            // Assign menu to primary location
            $locations = get_theme_mod( 'nav_menu_locations' );
            $locations['primary'] = $menu_id;
            set_theme_mod( 'nav_menu_locations', $locations );
        }
    }
}
add_action( 'after_switch_theme', 'leapux_create_pages_on_activation' );

/* ========================================
   Helper: Get LeapUX Logo
======================================== */
function leapux_get_logo( $variant = 'light' ) {
    if ( has_custom_logo() ) {
        $custom_logo_id = get_theme_mod( 'custom_logo' );
        $image = wp_get_attachment_image_src( $custom_logo_id, 'full' );
        return $image ? $image[0] : '';
    }
    // Fallback to bundled logos
    if ( $variant === 'dark' ) {
        return get_template_directory_uri() . '/assets/images/leapux-logo-dark.png';
    }
    return get_template_directory_uri() . '/assets/images/leapux-logo.png';
}

/* ========================================
   Helper: SVG Icons
======================================== */
function leapux_icon( $name, $size = 24 ) {
    $icons = array(
        'compass'       => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
        'users'         => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        'paintbrush'    => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/><path d="M14.5 17.5 4.5 15"/></svg>',
        'accessibility' => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="m4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>',
        'cpu'           => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
        'rocket'        => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
        'check-circle'  => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
        'arrow-right'   => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
        'landmark'      => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
        'cross'         => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>',
        'building2'     => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
        'heart'         => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
        'phone'         => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'mail'          => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        'map-pin'       => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
        'facebook'      => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
        'linkedin'      => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
        'instagram'     => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
        'menu'          => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
        'x-close'       => '<svg xmlns="http://www.w3.org/2000/svg" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    );

    return isset( $icons[ $name ] ) ? $icons[ $name ] : '';
}
