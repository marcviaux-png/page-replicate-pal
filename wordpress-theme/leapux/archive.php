<?php
/**
 * Archive Template
 *
 * Displays posts from categories, tags, dates, and authors.
 *
 * @package LeapUX
 */

get_header(); ?>

<!-- Archive Hero -->
<div class="page-hero">
    <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="">
        <div class="hero-overlay"></div>
    </div>
    <div class="container">
        <h1><?php the_archive_title(); ?></h1>
        <?php the_archive_description( '<p>', '</p>' ); ?>
    </div>
</div>

<!-- Archive Content -->
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
                    <p class="text-slate"><?php esc_html_e( 'No content matched your criteria.', 'leapux' ); ?></p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
