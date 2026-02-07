<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Logo & Contact Info -->
            <div class="footer-col">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" style="display: inline-block; margin-bottom: 2rem;">
                    <img src="<?php echo esc_url( leapux_get_logo( 'light' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" style="height: 2rem; width: auto;">
                </a>
                <div class="footer-contact">
                    <a href="tel:1-888-553-2789">
                        <?php echo leapux_icon( 'phone', 16 ); ?>
                        <span>1-888-553-2789</span>
                    </a>
                    <a href="mailto:contact@leapux.com">
                        <?php echo leapux_icon( 'mail', 16 ); ?>
                        <span>contact@leapux.com</span>
                    </a>
                    <div>
                        <?php echo leapux_icon( 'map-pin', 16 ); ?>
                        <span>1554 Carling Ave. Unit 42,<br>Ottawa, ON K1Z 7M4</span>
                    </div>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
                <h4><?php esc_html_e( 'Quick Links', 'leapux' ); ?></h4>
                <ul>
                    <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'leapux' ); ?></a></li>
                    <?php
                    $quick_links = array( 'about' => 'About Us', 'services' => 'Services', 'contact' => 'Contact' );
                    foreach ( $quick_links as $slug => $title ) :
                        $page = get_page_by_path( $slug );
                        if ( $page ) :
                    ?>
                    <li><a href="<?php echo esc_url( get_permalink( $page ) ); ?>"><?php echo esc_html( $title ); ?></a></li>
                    <?php endif; endforeach; ?>
                </ul>
            </div>

            <!-- Services -->
            <div class="footer-col">
                <h4><?php esc_html_e( 'Services', 'leapux' ); ?></h4>
                <ul>
                    <?php
                    $service_items = array(
                        'Strategy & Transformation',
                        'User Research',
                        'UX & Service Design',
                        'Accessibility',
                    );
                    $services_page = get_page_by_path( 'services' );
                    $services_url = $services_page ? get_permalink( $services_page ) : '#';
                    foreach ( $service_items as $item ) :
                    ?>
                    <li><a href="<?php echo esc_url( $services_url ); ?>"><?php echo esc_html( $item ); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Social & Support -->
            <div class="footer-col">
                <h4><?php esc_html_e( 'Follow Us', 'leapux' ); ?></h4>
                <div class="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <?php echo leapux_icon( 'facebook', 20 ); ?>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <?php echo leapux_icon( 'linkedin', 20 ); ?>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <?php echo leapux_icon( 'instagram', 20 ); ?>
                    </a>
                </div>
                <div class="footer-badge">
                    National Support &bull; EN / FR
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
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
