<?php
/**
 * Single Post Template
 *
 * Displays individual blog posts using The Loop.
 *
 * @package LeapUX
 */

get_header(); ?>

<!-- Post Hero -->
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
            <div class="post-meta" style="margin-top: 1.5rem;">
                <span class="author" style="color: var(--leap-orange);"><?php the_author(); ?></span>
                <time datetime="<?php echo get_the_date( 'c' ); ?>" style="color: var(--slate-400);"><?php echo get_the_date(); ?></time>
                <?php if ( has_category() ) : ?>
                    <span style="color: var(--slate-400);"><?php the_category( ', ' ); ?></span>
                <?php endif; ?>
            </div>
        <?php endwhile; endif; ?>
    </div>
</div>

<!-- Post Content -->
<div class="page-content">
    <div class="container">
        <?php
        rewind_posts();

        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages( array(
                        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'leapux' ),
                        'after'  => '</div>',
                    ) );
                    ?>

                    <!-- Post Tags -->
                    <?php if ( has_tag() ) : ?>
                        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                            <p style="font-size: 0.875rem; color: var(--slate-500); font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;">
                                <?php esc_html_e( 'Tags:', 'leapux' ); ?>
                            </p>
                            <?php the_tags( '<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">', '', '</div>' ); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </article>

            <!-- Post Navigation -->
            <nav style="max-width: 48rem; margin: 3rem auto 0; display: flex; justify-content: space-between; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                <div>
                    <?php previous_post_link( '%link', '&larr; %title' ); ?>
                </div>
                <div>
                    <?php next_post_link( '%link', '%title &rarr;' ); ?>
                </div>
            </nav>

            <!-- Comments -->
            <?php
            if ( comments_open() || get_comments_number() ) :
                echo '<div style="max-width: 48rem; margin: 3rem auto 0;">';
                comments_template();
                echo '</div>';
            endif;
            ?>

        <?php
            endwhile;
        endif;
        ?>
    </div>
</div>

<?php get_footer(); ?>
