<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container">
        <div class="header-inner">
            <!-- Logo -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
                <img 
                    src="<?php echo esc_url( leapux_get_logo( 'light' ) ); ?>" 
                    alt="<?php bloginfo( 'name' ); ?>"
                    class="logo-light"
                >
                <img 
                    src="<?php echo esc_url( leapux_get_logo( 'dark' ) ); ?>" 
                    alt="<?php bloginfo( 'name' ); ?>"
                    class="logo-dark"
                    style="display: none;"
                >
            </a>

            <!-- Desktop Navigation -->
            <nav class="main-nav" aria-label="<?php esc_attr_e( 'Primary Navigation', 'leapux' ); ?>">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'items_wrap'     => '%3$s',
                    'walker'         => new LeapUX_Nav_Walker(),
                    'fallback_cb'    => 'leapux_fallback_menu',
                ) );
                ?>
            </nav>

            <!-- Mobile Toggle -->
            <button class="mobile-toggle" id="mobile-toggle" aria-label="<?php esc_attr_e( 'Toggle Menu', 'leapux' ); ?>">
                <span class="toggle-open"><?php echo leapux_icon( 'menu' ); ?></span>
                <span class="toggle-close" style="display: none;"><?php echo leapux_icon( 'x-close' ); ?></span>
            </button>
        </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" id="mobile-nav">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'primary',
            'container'      => false,
            'items_wrap'     => '<div class="mobile-nav-links">%3$s</div>',
            'fallback_cb'    => false,
        ) );
        ?>
    </div>
</header>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function leapux_fallback_menu() {
    $pages = array(
        'services'     => 'Services',
        'capabilities' => 'Capabilities',
        'about'        => 'About',
        'contact'      => 'Contact Us',
    );

    foreach ( $pages as $slug => $title ) {
        $page = get_page_by_path( $slug );
        if ( $page ) {
            $class = ( $slug === 'contact' ) ? 'nav-cta' : '';
            echo '<a href="' . esc_url( get_permalink( $page ) ) . '" class="' . esc_attr( $class ) . '">' . esc_html( $title ) . '</a>';
        }
    }
}
