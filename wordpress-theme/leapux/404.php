<?php
/**
 * 404 Template
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content" style="text-align: center; max-width: 36rem; margin: 0 auto;">
            <h1>404</h1>
            <p class="hero-subtitle" style="max-width: 100%;">The page you're looking for doesn't exist or has been moved.</p>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">Back to Home</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
