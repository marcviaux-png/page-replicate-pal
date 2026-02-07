<?php
/**
 * The footer template
 *
 * @package LeapUX
 */

$phone   = get_theme_mod( 'leapux_phone', '1-888-553-2789' );
$email   = get_theme_mod( 'leapux_email', 'contact@leapux.com' );
$address = get_theme_mod( 'leapux_address', '1554 Carling Ave. Unit 42, Ottawa, ON K1Z 7M4' );

$facebook  = get_theme_mod( 'leapux_facebook', 'https://facebook.com' );
$linkedin  = get_theme_mod( 'leapux_linkedin', 'https://linkedin.com' );
$instagram = get_theme_mod( 'leapux_instagram', 'https://instagram.com' );
?>

<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">

            <!-- Logo & Contact -->
            <div>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/leapux-logo.png" alt="<?php bloginfo( 'name' ); ?>" class="footer-logo">
                </a>
                <div class="footer-contact">
                    <a href="tel:<?php echo esc_attr( $phone ); ?>">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <span><?php echo esc_html( $phone ); ?></span>
                    </a>
                    <a href="mailto:<?php echo esc_attr( $email ); ?>">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <span><?php echo esc_html( $email ); ?></span>
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span><?php echo nl2br( esc_html( $address ) ); ?></span>
                    </span>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="footer-heading">Quick Links</h4>
                <div class="footer-links">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
                    <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Us</a>
                    <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a>
                    <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact</a>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h4 class="footer-heading">Services</h4>
                <div class="footer-links">
                    <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Strategy &amp; Transformation</a>
                    <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">User Research</a>
                    <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">UX &amp; Service Design</a>
                    <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Accessibility</a>
                </div>
            </div>

            <!-- Social & Support -->
            <div>
                <h4 class="footer-heading">Follow Us</h4>
                <div class="footer-social">
                    <a href="<?php echo esc_url( $facebook ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                </div>
                <div class="footer-bilingual">
                    National Support • EN / FR
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. Operational since 2012.</p>
            <div class="footer-bottom-links">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
