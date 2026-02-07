<?php
/**
 * The header template
 *
 * @package LeapUX
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="LeapUX — Senior-led digital consultancy for UX, service design, and strategic consulting.">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="site-header" class="site-header">
    <div class="container">
        <div class="header-inner">
            <!-- Logo -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" aria-label="<?php bloginfo( 'name' ); ?>">
                <?php if ( has_custom_logo() ) :
                    // Get custom logo without wrapping link
                    $logo_id = get_theme_mod( 'custom_logo' );
                    $logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
                ?>
                    <img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php bloginfo( 'name' ); ?>" id="site-logo-img">
                <?php else : ?>
                    <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/leapux-logo.png" alt="<?php bloginfo( 'name' ); ?>" id="site-logo-img"
                         data-light="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/leapux-logo.png"
                         data-dark="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/leapux-logo-dark.png">
                <?php endif; ?>
            </a>

            <!-- Desktop Navigation -->
            <nav class="main-nav" aria-label="<?php esc_attr_e( 'Primary Navigation', 'leapux' ); ?>">
                <?php
                $nav_items = array(
                    array( 'label' => 'Services',     'url' => home_url( '/services/' ) ),
                    array( 'label' => 'Capabilities', 'url' => home_url( '/capabilities/' ) ),
                );

                foreach ( $nav_items as $item ) :
                    $is_active = ( trailingslashit( get_permalink() ) === trailingslashit( $item['url'] ) );
                ?>
                    <a href="<?php echo esc_url( $item['url'] ); ?>"
                       class="nav-link <?php echo $is_active ? 'active' : ''; ?>">
                        <?php echo esc_html( $item['label'] ); ?>
                    </a>
                <?php endforeach; ?>

                <!-- AI Dropdown -->
                <div class="nav-dropdown">
                    <button class="nav-link nav-dropdown-trigger" aria-expanded="false">
                        AI
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div class="nav-dropdown-content">
                        <?php
                        $ai_links = array(
                            array( 'label' => 'AI Services',              'url' => home_url( '/ai-services/' ) ),
                            array( 'label' => 'AI Training & Enablement', 'url' => home_url( '/ai-training/' ) ),
                        );
                        foreach ( $ai_links as $ai ) :
                            $is_active = ( trailingslashit( get_permalink() ) === trailingslashit( $ai['url'] ) );
                        ?>
                            <a href="<?php echo esc_url( $ai['url'] ); ?>"
                               class="<?php echo $is_active ? 'active' : ''; ?>">
                                <?php echo esc_html( $ai['label'] ); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- About -->
                <?php
                $about_url = home_url( '/about/' );
                $about_active = ( trailingslashit( get_permalink() ) === trailingslashit( $about_url ) );
                ?>
                <a href="<?php echo esc_url( $about_url ); ?>"
                   class="nav-link <?php echo $about_active ? 'active' : ''; ?>">
                    About
                </a>

                <!-- CTA -->
                <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="nav-cta">
                    Contact Us
                </a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="<?php esc_attr_e( 'Toggle Menu', 'leapux' ); ?>" aria-expanded="false">
                <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" id="mobile-nav">
        <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a>
        <a href="<?php echo esc_url( home_url( '/capabilities/' ) ); ?>">Capabilities</a>
        <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a>
        <p class="mobile-nav-ai-label">AI</p>
        <a href="<?php echo esc_url( home_url( '/ai-services/' ) ); ?>" class="mobile-nav-ai-link">AI Services</a>
        <a href="<?php echo esc_url( home_url( '/ai-training/' ) ); ?>" class="mobile-nav-ai-link">AI Training &amp; Enablement</a>
        <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="mobile-nav-cta">Contact Us</a>
    </div>
</header>
