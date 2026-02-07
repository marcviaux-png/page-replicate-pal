<?php
/**
 * Template Name: Services
 * Template for the Services page — matches Services.tsx exactly.
 *
 * @package LeapUX
 */

get_header();

$core_areas = array(
    array(
        'headline' => 'Define the path forward.',
        'title'    => 'Strategic Advisory & Planning',
        'desc'     => 'We work with leadership to define vision, refine strategic priorities, and develop execution roadmaps that align with business objectives and market realities.',
        'image'    => get_template_directory_uri() . '/assets/images/core-strategic-planning.jpg',
    ),
    array(
        'headline' => 'Transform with purpose.',
        'title'    => 'Digital & Technology Strategy',
        'desc'     => 'From digital transformation to technology alignment, we help you identify and leverage the right solutions that deliver value-driven outcomes with scalability and efficiency.',
        'image'    => get_template_directory_uri() . '/assets/images/core-digital-strategy.jpg',
    ),
    array(
        'headline' => 'Efficiency in motion.',
        'title'    => 'Business Process Optimization',
        'desc'     => 'Improve performance, reduce friction, and unlock operational excellence with optimized processes tailored to how your teams work and grow.',
        'image'    => get_template_directory_uri() . '/assets/images/core-process-optimization.jpg',
    ),
    array(
        'headline' => 'Ideas that scale.',
        'title'    => 'Innovation & Product Strategy',
        'desc'     => 'We guide organizations in identifying new opportunities, validating ideas, and aligning product strategies with customer needs and business goals.',
        'image'    => get_template_directory_uri() . '/assets/images/core-innovation-strategy.jpg',
    ),
    array(
        'headline' => 'Lead the change.',
        'title'    => 'Change Leadership & Organizational Effectiveness',
        'desc'     => 'Transitions are complex. Our consulting supports cultural readiness, capability building, and change execution to ensure adoption and long-term success.',
        'image'    => get_template_directory_uri() . '/assets/images/core-change-leadership.jpg',
    ),
);

$how_we_work = array(
    array( 'title' => 'Client-centric engagement', 'desc' => 'We put your context first' ),
    array( 'title' => 'Outcome-focused solutions', 'desc' => 'Clear goals with measurable success criteria' ),
    array( 'title' => 'Collaborative delivery', 'desc' => 'Partnership throughout planning and execution' ),
);
?>

<div class="animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <div class="page-hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000" alt="Strategic Consulting">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div style="max-width: 48rem;">
                <h1>Services</h1>
                <p>Strategic Consulting for Growth & Transformation. We partner with teams to move from uncertainty to confident delivery — reducing risk, improving adoption, and building digital services that work in the real world.</p>
            </div>
        </div>
    </div>

    <!-- What We Do -->
    <section style="padding: 6rem 0; background: var(--leap-white);">
        <div class="container">
            <div class="two-col-grid gap-lg">
                <div>
                    <h2 style="margin-bottom: 1.5rem;">What We Do</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 1.5rem;">
                        At LeapUX, we partner with organizations to solve their most strategic challenges — from business model optimization and digital transformation to operational alignment and innovation strategy.
                    </p>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7;">
                        Our approach is collaborative, data-driven, and tailored to your goals. Whether you're launching a new initiative, scaling an existing team, or navigating change, our consulting services are designed to drive impact where it matters most.
                    </p>
                </div>
                <div style="position: relative;">
                    <div class="rounded-image" style="aspect-ratio: 4/3;">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/team-collaboration.jpg' ); ?>" alt="Team collaboration">
                    </div>
                    <div style="position: absolute; bottom: -1.5rem; left: -1.5rem; width: 8rem; height: 8rem; background: rgba(232,129,47,0.2); border-radius: 1rem; z-index: -1;"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Areas -->
    <section>
        <div class="core-area-intro">
            <h2>Core Areas of Consulting Support</h2>
            <p>We bring expertise across five interconnected disciplines to help you navigate complexity and achieve sustainable growth.</p>
        </div>

        <?php foreach ( $core_areas as $index => $area ) :
            $is_even = $index % 2 === 0;
        ?>
        <div class="core-area-section">
            <div class="core-bg">
                <img src="<?php echo esc_url( $area['image'] ); ?>" alt="<?php echo esc_attr( $area['title'] ); ?>">
                <div class="<?php echo $is_even ? 'core-overlay-left' : 'core-overlay-right'; ?>"></div>
            </div>
            <div class="core-area-content">
                <div class="core-area-text <?php echo $is_even ? '' : 'text-right-lg'; ?>">
                    <h3><?php echo esc_html( $area['headline'] ); ?></h3>
                    <p><span class="area-title"><?php echo esc_html( $area['title'] ); ?>.</span> <?php echo esc_html( $area['desc'] ); ?></p>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </section>

    <!-- How We Work -->
    <section style="padding: 6rem 0; background: var(--leap-black); color: var(--leap-white);">
        <div class="container">
            <div class="how-we-work-grid">
                <div>
                    <h2 style="margin-bottom: 1.5rem;">How We Work</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-300); line-height: 1.7; margin-bottom: 2.5rem;">
                        We start every engagement with discovery and analysis, then co-create approaches that fit your resources, timelines, and strategic priorities. Our aim is to build confidence, clarity, and capability inside your organization.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <?php foreach ( $how_we_work as $item ) : ?>
                        <div class="how-we-work-item">
                            <div class="circle-icon"><?php echo leapux_icon( 'check-circle', 20 ); ?></div>
                            <div>
                                <h4 style="color: var(--leap-white); margin-bottom: 0.25rem;"><?php echo esc_html( $item['title'] ); ?></h4>
                                <p style="color: var(--slate-400); margin: 0;"><?php echo esc_html( $item['desc'] ); ?></p>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div style="position: relative;">
                    <div class="rounded-image" style="aspect-ratio: 1;">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Collaborative meeting">
                    </div>
                    <div style="position: absolute; top: -1.5rem; right: -1.5rem; width: 6rem; height: 6rem; border: 4px solid var(--leap-orange); border-radius: 1rem; z-index: -1;"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Explore Capabilities -->
    <section style="padding: 6rem 0; background: var(--leap-white);">
        <div class="container">
            <div class="two-col-grid" style="gap: 3rem;">
                <div class="rounded-image" style="aspect-ratio: 4/3;">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Team planning session">
                </div>
                <div>
                    <h2 style="margin-bottom: 1.5rem;">Explore Our Detailed Capabilities</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 2rem;">
                        For a deeper look at specific services, methodologies, and the full range of expertise we bring to engagements, explore our capabilities.
                    </p>
                    <?php $cap_page = get_page_by_path( 'capabilities' ); ?>
                    <a href="<?php echo $cap_page ? esc_url( get_permalink( $cap_page ) ) : '#'; ?>" class="btn btn-primary">
                        View Our Capabilities <?php echo leapux_icon( 'arrow-right', 20 ); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section style="padding: 8rem 0; background: linear-gradient(135deg, var(--leap-orange), var(--leap-red)); color: var(--leap-white); text-align: center;">
        <div class="container" style="max-width: 56rem;">
            <h2 style="margin-bottom: 1.5rem;">Ready to Get Started?</h2>
            <p style="font-size: 1.125rem; color: rgba(255,255,255,0.9); margin-bottom: 2.5rem;">
                Whether you need a strategy session, a full consulting engagement, or targeted support, we're here to help you take the next step.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
                <?php $contact = get_page_by_path( 'contact' ); ?>
                <a href="<?php echo $contact ? esc_url( get_permalink( $contact ) ) : '#'; ?>" class="btn btn-white">Contact Us</a>
                <a href="<?php echo $contact ? esc_url( get_permalink( $contact ) ) : '#'; ?>" class="btn btn-outline-white">Schedule a Consultation</a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
