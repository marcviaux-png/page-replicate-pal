<?php
/**
 * Template for Services page (slug: services)
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <!-- Hero -->
    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000" alt="Strategic Consulting">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <h1>Services</h1>
            <p class="hero-subtitle" style="max-width: 48rem;">
                Strategic Consulting for Growth &amp; Transformation. We partner with teams to move from uncertainty to confident delivery — reducing risk, improving adoption, and building digital services that work in the real world.
            </p>
        </div>
    </section>

    <!-- What We Do -->
    <section class="section section-white">
        <div class="container">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <h2 style="margin-bottom: 1.5rem;">What We Do</h2>
                    <p class="text-lg text-slate-600 leading-relaxed mb-6">
                        At LeapUX, we partner with organizations to solve their most strategic challenges — from business model optimization and digital transformation to operational alignment and innovation strategy.
                    </p>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        Our approach is collaborative, data-driven, and tailored to your goals. Whether you're launching a new initiative, scaling an existing team, or navigating change, our consulting services are designed to drive impact where it matters most.
                    </p>
                </div>
                <div style="position: relative;">
                    <div class="image-rounded" style="aspect-ratio: 4/3;">
                        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/team-collaboration.jpg" alt="Team collaboration" style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div style="position:absolute;bottom:-1.5rem;left:-1.5rem;width:8rem;height:8rem;background:rgba(233,131,47,0.2);border-radius:var(--radius-2xl);z-index:-1;"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Areas Intro -->
    <section class="section-dark" style="text-align:center;padding:5rem 0;">
        <div class="container">
            <h2 style="color: var(--leap-white); margin-bottom: 1rem;">Core Areas of Consulting Support</h2>
            <p class="text-lg text-slate-400 max-w-4xl" style="margin: 0 auto 3rem;">
                We bring expertise across five interconnected disciplines to help you navigate complexity and achieve sustainable growth.
            </p>
            <a href="#core-0" class="scroll-arrow" aria-label="Scroll to first section">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
        </div>
    </section>

    <?php
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

    foreach ( $core_areas as $index => $area ) :
        $is_even    = $index % 2 === 0;
        $overlay    = $is_even ? 'fullbleed-overlay-left' : 'fullbleed-overlay-right';
        $align      = $is_even ? '' : 'align-right';
        $next_id    = $index < count( $core_areas ) - 1 ? 'core-' . ( $index + 1 ) : 'how-we-work';
    ?>
    <section id="core-<?php echo $index; ?>" class="fullbleed-section">
        <div class="fullbleed-bg">
            <img src="<?php echo esc_url( $area['image'] ); ?>" alt="<?php echo esc_attr( $area['title'] ); ?>">
            <div class="<?php echo $overlay; ?>"></div>
        </div>
        <div class="fullbleed-content">
            <div class="fullbleed-text <?php echo $align; ?>">
                <h3><?php echo esc_html( $area['headline'] ); ?></h3>
                <p><span class="highlight"><?php echo esc_html( $area['title'] ); ?>.</span> <?php echo esc_html( $area['desc'] ); ?></p>
            </div>
        </div>
        <a href="#<?php echo esc_attr( $next_id ); ?>" class="scroll-arrow" aria-label="Scroll to next section">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </a>
    </section>
    <?php endforeach; ?>

    <!-- How We Work -->
    <section id="how-we-work" class="section section-dark">
        <div class="container">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <h2 style="color: var(--leap-white); margin-bottom: 1.5rem;">How We Work</h2>
                    <p class="text-lg text-slate-300 leading-relaxed mb-10">
                        We start every engagement with discovery and analysis, then co-create approaches that fit your resources, timelines, and strategic priorities. Our aim is to build confidence, clarity, and capability inside your organization.
                    </p>
                    <div class="icon-list">
                        <?php
                        $how = array(
                            array( 'title' => 'Client-centric engagement',   'desc' => 'We put your context first' ),
                            array( 'title' => 'Outcome-focused solutions',   'desc' => 'Clear goals with measurable success criteria' ),
                            array( 'title' => 'Collaborative delivery',      'desc' => 'Partnership throughout planning and execution' ),
                        );
                        foreach ( $how as $item ) : ?>
                        <div style="display:flex;align-items:flex-start;gap:1rem;">
                            <div style="width:2rem;height:2rem;border-radius:50%;background:var(--leap-orange);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0.25rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </div>
                            <div>
                                <h4 style="color: var(--leap-white); margin-bottom: 0.25rem;"><?php echo esc_html( $item['title'] ); ?></h4>
                                <p style="color: var(--slate-400);"><?php echo esc_html( $item['desc'] ); ?></p>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div style="position:relative;">
                    <div class="image-rounded" style="aspect-ratio:1;overflow:hidden;">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Collaborative team meeting" style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div style="position:absolute;top:-1.5rem;right:-1.5rem;width:6rem;height:6rem;border:4px solid var(--leap-orange);border-radius:var(--radius-2xl);z-index:-1;"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Explore Capabilities -->
    <section class="section section-white">
        <div class="container">
            <div class="grid grid-2 grid-align-center">
                <div class="image-rounded" style="aspect-ratio:4/3;overflow:hidden;">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Team planning session" style="width:100%;height:100%;object-fit:cover;">
                </div>
                <div>
                    <h2 style="margin-bottom: 1.5rem;">Explore Our Detailed Capabilities</h2>
                    <p class="text-lg text-slate-600 leading-relaxed mb-8">
                        For a deeper look at specific services, methodologies, and the full range of expertise we bring to engagements, explore our capabilities. This links you directly into tailored descriptions of how we deliver value in each domain.
                    </p>
                    <a href="<?php echo esc_url( home_url( '/capabilities/' ) ); ?>" class="btn btn-primary">
                        View Our Capabilities →
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-gradient-orange" style="padding: 8rem 0; text-align: center;">
        <div class="container">
            <h2 style="color: var(--leap-white); margin-bottom: 1.5rem;">Ready to Get Started?</h2>
            <p class="text-lg mb-10" style="color:rgba(255,255,255,0.9);">
                Whether you need a strategy session, a full consulting engagement, or targeted support, we're here to help you take the next step.
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;">
                <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-white">Contact Us</a>
                <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-outline">Schedule a Consultation</a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
