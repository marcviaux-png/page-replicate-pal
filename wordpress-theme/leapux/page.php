<?php
/**
 * The page template
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <?php while ( have_posts() ) : the_post(); ?>

        <!-- Hero -->
        <section class="hero hero-page">
            <div class="hero-bg">
                <?php if ( has_post_thumbnail() ) : ?>
                    <?php the_post_thumbnail( 'leapux-hero', array( 'style' => 'width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1) brightness(0.65);' ) ); ?>
                <?php else : ?>
                    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="">
                <?php endif; ?>
                <div class="hero-overlay"></div>
            </div>
            <div class="container hero-content" style="max-width: 48rem;">
                <h1><?php the_title(); ?></h1>
            </div>
        </section>

        <!-- Content -->
        <section class="section section-white">
            <div class="container" style="max-width: 48rem;">
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </div>
        </section>

    <?php endwhile; ?>

    <!-- CTA -->
    <section class="cta-section" style="background-color: var(--leap-orange);">
        <div class="container" style="position: relative; z-index: 10;">
            <h2 style="font-size: clamp(2rem, 4vw, 3rem); text-wrap: balance;">
                Ready to work with a partner built for complex delivery?
            </h2>
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-dark">Contact Us</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
