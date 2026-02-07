<?php
/**
 * Front Page Template
 *
 * One-page homepage layout. This template ONLY applies when this page
 * is set as the static front page in WordPress Settings > Reading.
 *
 * @package LeapUX
 */

get_header(); ?>

<div class="animate-in">

    <!-- ========================================
         Hero Section
    ======================================== -->
    <section class="hero-section">
        <div class="hero-bg">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/hero-ux-design.jpg' ); ?>" alt="<?php esc_attr_e( 'UX Design Workspace', 'leapux' ); ?>">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <?php esc_html_e( 'Senior-Led Digital Consultancy', 'leapux' ); ?>
                </div>
                <h1 class="hero-title">
                    <?php esc_html_e( 'Designing services for', 'leapux' ); ?> <span><?php esc_html_e( 'real-world delivery.', 'leapux' ); ?></span>
                </h1>
                <p class="hero-description">
                    <?php esc_html_e( 'UX and service design for complex environments. We combine evidence, discipline, and accountability to deliver results.', 'leapux' ); ?>
                </p>
                <div class="hero-actions">
                    <?php $contact_page = get_page_by_path( 'contact' ); ?>
                    <?php $services_page = get_page_by_path( 'services' ); ?>
                    <a href="<?php echo $contact_page ? esc_url( get_permalink( $contact_page ) ) : '#'; ?>" class="btn btn-primary">
                        <?php esc_html_e( 'Start a conversation', 'leapux' ); ?>
                    </a>
                    <a href="<?php echo $services_page ? esc_url( get_permalink( $services_page ) ) : '#'; ?>" class="btn btn-outline">
                        <?php esc_html_e( 'Our services', 'leapux' ); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================
         The Problem
    ======================================== -->
    <section class="problem-section" id="problem">
        <div class="container">
            <div class="problem-grid">
                <div class="problem-image-wrap" style="order: 2;">
                    <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                        alt="<?php esc_attr_e( 'Strategy Planning', 'leapux' ); ?>"
                    >
                </div>
                <div style="order: 1;">
                    <span class="problem-label"><?php esc_html_e( 'The Problem', 'leapux' ); ?></span>
                    <h3 style="font-size: clamp(1.5rem, 3vw, 2.25rem); line-height: 1.2; margin-bottom: 2rem;">
                        <?php esc_html_e( 'Digital services often struggle because they are designed around systems, not people.', 'leapux' ); ?>
                    </h3>
                    <p class="text-slate" style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2.5rem;">
                        <?php esc_html_e( 'LeapUX helps organizations understand their users, align teams, and design services that work in practice, not just on paper. We prioritize clarity over marketing fluff.', 'leapux' ); ?>
                    </p>
                    <div class="problem-pillars">
                        <?php
                        $pillars = array(
                            array( 'label' => __( 'Evidence-Led', 'leapux' ), 'color' => 'brand' ),
                            array( 'label' => __( 'Accessibility', 'leapux' ), 'color' => 'orange' ),
                            array( 'label' => __( 'Collaborative', 'leapux' ), 'color' => 'red' ),
                            array( 'label' => __( 'Validated', 'leapux' ), 'color' => 'black' ),
                        );
                        foreach ( $pillars as $pillar ) :
                        ?>
                        <div class="pillar">
                            <div class="pillar-bar <?php echo esc_attr( $pillar['color'] ); ?>"></div>
                            <div style="display: flex; align-items: center;">
                                <h4><?php echo esc_html( $pillar['label'] ); ?></h4>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================
         Our Approach
    ======================================== -->
    <section class="approach-section" id="approach">
        <div class="container">
            <div class="approach-grid">
                <div>
                    <span class="section-label"><?php esc_html_e( 'Our Approach', 'leapux' ); ?></span>
                    <h3 style="font-size: clamp(1.5rem, 3vw, 2.25rem); line-height: 1.2; margin-bottom: 2rem;">
                        <?php esc_html_e( 'Research, design, and validation — from discovery to delivery.', 'leapux' ); ?>
                    </h3>
                    <p class="text-slate" style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2.5rem;">
                        <?php esc_html_e( 'We support teams from early discovery through delivery by combining research, design, and validation.', 'leapux' ); ?>
                    </p>
                    <ul class="approach-list">
                        <?php
                        $approach_points = array(
                            __( 'Evidence before opinions', 'leapux' ),
                            __( 'Accessibility as a baseline, not an add-on', 'leapux' ),
                            __( 'Collaboration across disciplines', 'leapux' ),
                            __( 'Decisions informed by real user insight', 'leapux' ),
                        );
                        foreach ( $approach_points as $point ) :
                        ?>
                        <li>
                            <?php echo leapux_icon( 'check-circle' ); ?>
                            <span><?php echo esc_html( $point ); ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="approach-image-wrap">
                    <img 
                        src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/team-collaboration.jpg' ); ?>" 
                        alt="<?php esc_attr_e( 'Team collaboration on UX design', 'leapux' ); ?>"
                    >
                    <div class="approach-quote">
                        <?php esc_html_e( '"Good design is not about aesthetics — it\'s about clarity, risk reduction, and trust."', 'leapux' ); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================
         Services Overview
    ======================================== -->
    <section class="services-section" id="services">
        <div class="container">
            <div class="text-center mb-12">
                <span class="section-label"><?php esc_html_e( 'What We Do', 'leapux' ); ?></span>
                <h3 style="font-size: clamp(1.5rem, 3vw, 2.25rem); margin-bottom: 1.5rem;">
                    <?php esc_html_e( 'End-to-end design and delivery support', 'leapux' ); ?>
                </h3>
                <p class="text-slate" style="font-size: 1.125rem; max-width: 42rem; margin: 0 auto;">
                    <?php esc_html_e( 'From strategy through implementation, we partner with teams to build digital services that work in the real world.', 'leapux' ); ?>
                </p>
            </div>

            <div class="services-grid">
                <?php
                $services = array(
                    array(
                        'icon'  => 'compass',
                        'title' => __( 'Strategy & Transformation', 'leapux' ),
                        'desc'  => __( 'Define a clear vision for change and translate it into actionable, evidence-based plans.', 'leapux' ),
                    ),
                    array(
                        'icon'  => 'users',
                        'title' => __( 'User Research & Discovery', 'leapux' ),
                        'desc'  => __( 'Uncover real user needs to help teams make informed decisions and de-risk initiatives.', 'leapux' ),
                    ),
                    array(
                        'icon'  => 'paintbrush',
                        'title' => __( 'UX & Service Design', 'leapux' ),
                        'desc'  => __( 'Design end-to-end services that work across channels, systems, and organizational boundaries.', 'leapux' ),
                    ),
                    array(
                        'icon'  => 'accessibility',
                        'title' => __( 'Accessibility by Design', 'leapux' ),
                        'desc'  => __( 'Embed inclusive design from the start to meet regulatory requirements and improve usability.', 'leapux' ),
                    ),
                    array(
                        'icon'  => 'cpu',
                        'title' => __( 'AI & Automation Readiness', 'leapux' ),
                        'desc'  => __( 'Identify responsible, practical opportunities for automation and AI in your workflows.', 'leapux' ),
                    ),
                    array(
                        'icon'  => 'rocket',
                        'title' => __( 'Implementation Support', 'leapux' ),
                        'desc'  => __( 'Ensure design vision is correctly translated into code alongside engineering teams.', 'leapux' ),
                    ),
                );

                foreach ( $services as $service ) :
                ?>
                <div class="service-card">
                    <div class="service-icon">
                        <?php echo leapux_icon( $service['icon'] ); ?>
                    </div>
                    <h4><?php echo esc_html( $service['title'] ); ?></h4>
                    <p><?php echo esc_html( $service['desc'] ); ?></p>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center mt-12">
                <?php $services_page = get_page_by_path( 'services' ); ?>
                <a href="<?php echo $services_page ? esc_url( get_permalink( $services_page ) ) : '#'; ?>" class="btn-link">
                    <?php esc_html_e( 'View all services', 'leapux' ); ?>
                    <?php echo leapux_icon( 'arrow-right', 20 ); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- ========================================
         Who We Work With
    ======================================== -->
    <section class="partners-section" id="partners">
        <div class="container">
            <div class="text-center mb-12">
                <span class="section-label"><?php esc_html_e( 'Who We Work With', 'leapux' ); ?></span>
                <h3 style="font-size: clamp(1.5rem, 3vw, 2.25rem); margin-bottom: 1.5rem;">
                    <?php esc_html_e( 'Partners in complex, high-impact delivery', 'leapux' ); ?>
                </h3>
                <p class="text-slate" style="font-size: 1.125rem; max-width: 42rem; margin: 0 auto;">
                    <?php esc_html_e( 'We partner with organizations delivering complex, high-impact services, including governments, regulated industries, and mission-driven organizations.', 'leapux' ); ?>
                </p>
            </div>

            <div class="partners-icons">
                <?php
                $partners = array(
                    array( 'icon' => 'landmark',  'label' => __( 'Federal', 'leapux' ) ),
                    array( 'icon' => 'cross',     'label' => __( 'Healthtech', 'leapux' ) ),
                    array( 'icon' => 'landmark',  'label' => __( 'Finserv', 'leapux' ) ),
                    array( 'icon' => 'building2', 'label' => __( 'Enterprise', 'leapux' ) ),
                    array( 'icon' => 'heart',     'label' => __( 'Nonprofit', 'leapux' ) ),
                );
                foreach ( $partners as $partner ) :
                ?>
                <div class="partner-item">
                    <?php echo leapux_icon( $partner['icon'] ); ?>
                    <span><?php echo esc_html( $partner['label'] ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ========================================
         Footer CTA
    ======================================== -->
    <section class="cta-section">
        <div class="cta-bg">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" alt="">
        </div>
        <div class="container">
            <div class="cta-content">
                <h2><?php esc_html_e( 'Ready to improve how your service works in the real world?', 'leapux' ); ?></h2>
                <?php $contact_page = get_page_by_path( 'contact' ); ?>
                <a href="<?php echo $contact_page ? esc_url( get_permalink( $contact_page ) ) : '#'; ?>" class="btn btn-dark">
                    <?php esc_html_e( 'Contact Us', 'leapux' ); ?>
                </a>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
