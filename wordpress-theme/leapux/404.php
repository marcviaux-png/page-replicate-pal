<?php
/**
 * 404 Error Page Template
 *
 * @package LeapUX
 */

get_header(); ?>

<div class="error-404">
    <div class="container">
        <h1>404</h1>
        <h2><?php esc_html_e( 'Page not found', 'leapux' ); ?></h2>
        <p><?php esc_html_e( 'The page you\'re looking for doesn\'t exist or has been moved.', 'leapux' ); ?></p>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">
            <?php esc_html_e( 'Return Home', 'leapux' ); ?>
        </a>
    </div>
</div>

<?php get_footer(); ?>
