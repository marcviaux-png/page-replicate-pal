<?php
/**
 * Front Page Template
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg">
            <?php if ( has_post_thumbnail() ) : ?>
                <?php the_post_thumbnail( 'leapux-hero', array( 'style' => 'width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1) brightness(0.65);' ) ); ?>
            <?php else : ?>
                <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=2000" alt="UX Design Workspace">
            <?php endif; ?>
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">Senior-Led Digital Consultancy</div>
                <h1>Designing services for <span class="highlight">real-world delivery.</span></h1>
                <p class="hero-subtitle">
                    UX and service design for complex environments. We combine evidence, discipline, and accountability to deliver results.
                </p>
                <div class="hero-actions">
                    <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Start a conversation</a>
                    <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn-outline">Our services</a>
                </div>
            </div>
        </div>
    </section>

    <!-- The Problem -->
    <section class="section section-light" style="border-bottom: 1px solid var(--border-color);">
        <div class="container">
            <div class="grid grid-2 grid-align-center" style="gap: 6rem;">
                <div style="order: 2;">
                    <div class="image-rounded" style="box-shadow: 0 25px 50px rgba(0,0,0,0.1);">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Strategy Planning" class="image-grayscale">
                    </div>
                </div>
                <div style="order: 1;">
                    <p class="section-label" style="color: var(--leap-brand); font-style: italic;">The Problem</p>
                    <h2 style="margin-bottom: 2rem; line-height: 1.2;">Digital services often struggle because they are designed around systems, not people.</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 2.5rem;">
                        LeapUX helps organizations understand their users, align teams, and design services that work in practice, not just on paper. We prioritize clarity over marketing fluff.
                    </p>
                    <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
                        <?php
                        $pillars = array(
                            array( 'label' => 'Evidence-Led', 'color' => 'var(--leap-brand)' ),
                            array( 'label' => 'Accessibility', 'color' => 'var(--leap-orange)' ),
                            array( 'label' => 'Collaborative', 'color' => 'var(--leap-red)' ),
                            array( 'label' => 'Validated', 'color' => 'var(--leap-black)' ),
                        );
                        foreach ( $pillars as $pillar ) : ?>
                            <div style="display: flex; gap: 1rem; align-items: center;">
                                <div style="width: 6px; height: 3rem; background: <?php echo $pillar['color']; ?>; border-radius: 9999px; flex-shrink: 0;"></div>
                                <h4 style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.875rem;"><?php echo esc_html( $pillar['label'] ); ?></h4>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="section section-white">
        <div class="container">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <p class="section-label">Our Approach</p>
                    <h2 style="margin-bottom: 2rem; line-height: 1.2;">Research, design, and validation — from discovery to delivery.</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 2.5rem;">
                        We support teams from early discovery through delivery by combining research, design, and validation.
                    </p>
                    <ul style="display: flex; flex-direction: column; gap: 1.25rem;">
                        <?php
                        $approach_points = array(
                            'Evidence before opinions',
                            'Accessibility as a baseline, not an add-on',
                            'Collaboration across disciplines',
                            'Decisions informed by real user insight',
                        );
                        foreach ( $approach_points as $point ) : ?>
                            <li style="display: flex; align-items: center; gap: 1rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--leap-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                <span style="font-weight: 500;"><?php echo esc_html( $point ); ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div style="position: relative;">
                    <div class="image-rounded" style="box-shadow: 0 25px 50px rgba(0,0,0,0.1);">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team collaboration on UX design" class="image-grayscale">
                    </div>
                    <div style="position: absolute; bottom: 1.5rem; right: 1.5rem; left: 1.5rem; max-width: 20rem; margin-left: auto; background: var(--leap-white); padding: 1.5rem; border-radius: var(--radius-2xl); box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                        <p style="font-weight: 500; line-height: 1.6; font-style: italic;">
                            "Good design is not about aesthetics — it's about clarity, risk reduction, and trust."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Overview -->
    <section class="section section-gray">
        <div class="container">
            <div class="section-center" style="margin-bottom: 4rem;">
                <p class="section-label">What We Do</p>
                <h2 style="margin-bottom: 1.5rem;">End-to-end design and delivery support</h2>
                <p style="font-size: 1.125rem; color: var(--slate-600); max-width: 42rem; margin: 0 auto;">
                    From strategy through implementation, we partner with teams to build digital services that work in the real world.
                </p>
            </div>
            <div class="grid grid-3">
                <?php
                $services = array(
                    array(
                        'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
                        'title' => 'Strategy & Transformation',
                        'desc'  => 'Define a clear vision for change and translate it into actionable, evidence-based plans.',
                    ),
                    array(
                        'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
                        'title' => 'User Research & Discovery',
                        'desc'  => 'Uncover real user needs to help teams make informed decisions and de-risk initiatives.',
                    ),
                    array(
                        'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>',
                        'title' => 'UX & Service Design',
                        'desc'  => 'Design end-to-end services that work across channels, systems, and organizational boundaries.',
                    ),
                    array(
                        'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>',
                        'title' => 'Accessibility by Design',
                        'desc'  => 'Embed inclusive design from the start to meet regulatory requirements and improve usability.',
                    ),
                    array(
                        'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
                        'title' => 'AI & Automation Readiness',
                        'desc'  => 'Identify responsible, practical opportunities for automation and AI in your workflows.',
                    ),
                    array(
                        'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
                        'title' => 'Implementation Support',
                        'desc'  => 'Ensure design vision is correctly translated into code alongside engineering teams.',
                    ),
                );
                foreach ( $services as $service ) : ?>
                    <div class="card">
                        <div class="card-icon">
                            <?php echo $service['icon']; ?>
                        </div>
                        <h4><?php echo esc_html( $service['title'] ); ?></h4>
                        <p><?php echo esc_html( $service['desc'] ); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="section-center" style="margin-top: 3rem;">
                <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" style="display: inline-flex; align-items: center; gap: 0.75rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--leap-orange);">
                    View all services →
                </a>
            </div>
        </div>
    </section>

    <!-- Who We Work With -->
    <section class="section section-white">
        <div class="container section-center">
            <p class="section-label">Who We Work With</p>
            <h2 style="margin-bottom: 1.5rem;">Partners in complex, high-impact delivery</h2>
            <p style="font-size: 1.125rem; color: var(--slate-600); max-width: 42rem; margin: 0 auto 3rem;">
                We partner with organizations delivering complex, high-impact services, including governments, regulated industries, and mission-driven organizations.
            </p>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 3rem;">
                <?php
                $sectors = array( 'Federal', 'Healthtech', 'Finserv', 'Enterprise', 'Nonprofit' );
                foreach ( $sectors as $sector ) : ?>
                    <span style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--slate-400);"><?php echo esc_html( $sector ); ?></span>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Footer CTA -->
    <section class="cta-section" style="background-color: var(--leap-orange);">
        <div class="container" style="position: relative; z-index: 10;">
            <h2 style="font-size: clamp(2rem, 4vw, 3rem); text-wrap: balance; letter-spacing: -0.025em;">
                Ready to improve how your service works in the real world?
            </h2>
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-dark">Contact Us</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
