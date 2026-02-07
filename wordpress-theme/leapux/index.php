<?php
/**
 * The main template file
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <?php if ( have_posts() ) : ?>

        <!-- Hero -->
        <section class="hero hero-page">
            <div class="hero-bg">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="">
                <div class="hero-overlay"></div>
            </div>
            <div class="container hero-content">
                <h1><?php
                    if ( is_home() && ! is_front_page() ) {
                        single_post_title();
                    } elseif ( is_archive() ) {
                        the_archive_title();
                    } elseif ( is_search() ) {
                        printf( esc_html__( 'Search: %s', 'leapux' ), get_search_query() );
                    } else {
                        echo esc_html__( 'Latest Posts', 'leapux' );
                    }
                ?></h1>
            </div>
        </section>

        <!-- Posts -->
        <section class="section section-white">
            <div class="container">
                <div class="grid grid-3">
                    <?php while ( have_posts() ) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class( 'card' ); ?>>
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="image-rounded" style="margin-bottom: 1.5rem;">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail( 'leapux-card' ); ?>
                                    </a>
                                </div>
                            <?php endif; ?>

                            <h4>
                                <a href="<?php the_permalink(); ?>" style="color: var(--leap-black);">
                                    <?php the_title(); ?>
                                </a>
                            </h4>

                            <p style="font-size: 0.625rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--slate-500); margin: 0.75rem 0;">
                                <?php echo get_the_date(); ?>
                            </p>

                            <p><?php echo wp_trim_words( get_the_excerpt(), 20 ); ?></p>

                            <a href="<?php the_permalink(); ?>" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--leap-orange); font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 1rem;">
                                Read More →
                            </a>
                        </article>
                    <?php endwhile; ?>
                </div>

                <!-- Pagination -->
                <div style="text-align: center; margin-top: 4rem;">
                    <?php
                    the_posts_pagination( array(
                        'mid_size'  => 2,
                        'prev_text' => '← Previous',
                        'next_text' => 'Next →',
                    ) );
                    ?>
                </div>
            </div>
        </section>

    <?php else : ?>

        <section class="section section-white">
            <div class="container" style="text-align: center;">
                <h2>Nothing Found</h2>
                <p style="color: var(--slate-600); margin-top: 1rem;">
                    It seems we can't find what you're looking for.
                </p>
            </div>
        </section>

    <?php endif; ?>

</main>

<?php get_footer(); ?>
