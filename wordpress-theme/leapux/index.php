<?php
/**
 * The main template file.
 *
 * This is the fallback template used when no more specific template is found.
 * It displays a list of posts using The Loop.
 *
 * @package LeapUX
 */

get_header(); ?>

<!-- Page Hero -->
<div class="page-hero">
    <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="">
        <div class="hero-overlay"></div>
    </div>
    <div class="container">
        <h1><?php
            if ( is_home() && get_option( 'page_for_posts' ) ) {
                echo get_the_title( get_option( 'page_for_posts' ) );
            } elseif ( is_search() ) {
                printf( esc_html__( 'Search Results for: %s', 'leapux' ), get_search_query() );
            } else {
                esc_html_e( 'Latest Posts', 'leapux' );
            }
        ?></h1>
        <?php if ( is_home() ) : ?>
            <p><?php esc_html_e( 'Insights, updates, and perspectives from the LeapUX team.', 'leapux' ); ?></p>
        <?php endif; ?>
    </div>
</div>

<!-- Post List -->
<div class="page-content">
    <div class="container">
        <div class="post-list">
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <div class="post-meta">
                            <span class="author"><?php the_author(); ?></span>
                            <time datetime="<?php echo get_the_date( 'c' ); ?>"><?php echo get_the_date(); ?></time>
                        </div>
                        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="excerpt">
                            <?php the_excerpt(); ?>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="read-more">
                            <?php esc_html_e( 'Read More →', 'leapux' ); ?>
                        </a>
                    </article>
                <?php endwhile; ?>

                <!-- Pagination -->
                <div class="pagination">
                    <?php
                    the_posts_pagination( array(
                        'mid_size'  => 2,
                        'prev_text' => '&laquo;',
                        'next_text' => '&raquo;',
                    ) );
                    ?>
                </div>
            <?php else : ?>
                <div class="text-center" style="padding: 4rem 0;">
                    <h2><?php esc_html_e( 'No posts found', 'leapux' ); ?></h2>
                    <p class="text-slate"><?php esc_html_e( 'Check back soon for new content.', 'leapux' ); ?></p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
