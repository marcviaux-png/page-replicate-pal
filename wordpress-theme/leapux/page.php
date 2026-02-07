<?php
/**
 * Standard Page Template
 *
 * Used for all WordPress Pages that don't have a more specific template.
 * Uses The Loop to display page content.
 *
 * @package LeapUX
 */

get_header(); ?>

<!-- Page Hero -->
<div class="page-hero">
    <div class="hero-bg">
        <?php if ( has_post_thumbnail() ) : ?>
            <?php the_post_thumbnail( 'full' ); ?>
        <?php else : ?>
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="">
        <?php endif; ?>
        <div class="hero-overlay"></div>
    </div>
    <div class="container">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <h1><?php the_title(); ?></h1>
        <?php endwhile; endif; ?>
    </div>
</div>

<!-- Page Content -->
<div class="page-content">
    <div class="container">
        <?php
        // Reset the loop for content
        rewind_posts();

        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post();
        ?>
            <article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages( array(
                        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'leapux' ),
                        'after'  => '</div>',
                    ) );
                    ?>
                </div>
            </article>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</div>

<?php get_footer(); ?>
