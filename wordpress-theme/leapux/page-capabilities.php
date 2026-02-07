<?php
/**
 * Template Name: Capabilities
 * Template for the Capabilities page — matches Capabilities.tsx exactly.
 *
 * @package LeapUX
 */

get_header();

$service_areas = array(
    array(
        'title'    => 'Strategy & Transformation Planning',
        'tagline'  => 'Set direction before you invest.',
        'image'    => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        'desc'     => 'Define a clear vision for change and translate it into actionable, evidence-based plans. We align high-level objectives with governance, policy, and operational realities to ensure your transformation has a clear path to success from day one.',
        'includes' => array( 'Vision and future-state definition', 'Stakeholder & governance analysis', 'Transformation roadmaps', 'Business case development', 'Operating model alignment' ),
        'bestFor'  => array( 'Early-stage transformation', 'Pre-RFP planning', 'Enterprise and program modernization' ),
    ),
    array(
        'title'    => 'User Research & Service Discovery',
        'tagline'  => 'Build clarity before committing to build.',
        'image'    => 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
        'desc'     => 'Uncover real user needs, behaviors, and constraints to help teams make informed decisions. We move past assumptions to surface the risks and opportunities that inform design and technical specifications, de-risking complex initiatives early.',
        'includes' => array( 'User and stakeholder research', 'Service and journey mapping', 'Accessibility and risk scanning', 'Opportunity framing', 'Evidence-based recommendations' ),
        'bestFor'  => array( 'Complex or stalled initiatives', 'Discovery and validation phases', 'High-visibility public services' ),
    ),
    array(
        'title'    => 'UX & Service Design',
        'tagline'  => 'Design services that are ready to deliver.',
        'image'    => 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        'desc'     => 'Design end-to-end services that work across channels, systems, and organizational boundaries. We combine user-centered design with continuous testing and validation to produce implementation-ready artifacts that respect real-world constraints.',
        'includes' => array( 'End-to-end service design', 'UX architecture and UI design', 'Prototyping & concept validation', 'Usability testing', 'Implementation-ready design systems' ),
        'bestFor'  => array( 'Programs preparing for build', 'Executive or Treasury Board approvals', 'Multi-vendor delivery environments' ),
    ),
    array(
        'title'    => 'Accessibility by Design',
        'tagline'  => 'Accessibility is a baseline, not a retrofit.',
        'image'    => 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
        'desc'     => 'Embed inclusive design from the start to meet regulatory requirements while improving usability for everyone. We help organizations navigate WCAG standards and build accessible practices into their core delivery teams.',
        'includes' => array( 'WCAG and standards-aligned audits', 'Inclusive design patterns', 'Remediation strategies', 'Validation with users with disabilities', 'Accessibility QA for delivery' ),
        'bestFor'  => array( 'Public sector environments', 'Legacy platform modernization', 'Compliance-driven initiatives' ),
    ),
    array(
        'title'    => 'AI & Automation Readiness',
        'tagline'  => 'Apply AI where it adds real value.',
        'image'    => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        'desc'     => 'Identify responsible, practical opportunities for automation and AI. We analyze service workflows to find where technology can improve efficiency while respecting policy, privacy, and risk constraints of regulated environments.',
        'includes' => array( 'Service and workflow analysis', 'AI opportunity identification', 'Ethics, risk, and governance assessment', 'Concept prototyping', 'Implementation recommendations' ),
        'bestFor'  => array( 'Organizations exploring AI/ML', 'Regulated or policy-constrained sectors', 'Operational efficiency initiatives' ),
    ),
    array(
        'title'    => 'Implementation & Delivery Support',
        'tagline'  => 'Protect design intent through delivery.',
        'image'    => 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
        'desc'     => 'Ensure that design vision is correctly translated into code. We work alongside engineering teams to implement secure, scalable, and accessible solutions, providing the continuity needed between the design phase and live operation.',
        'includes' => array( 'Design system alignment', 'Developer collaboration & UX QA', 'Handover documentation', 'Digital adoption strategies', 'Post-launch continuous improvement' ),
        'bestFor'  => array( 'Multi-vendor programs', 'In-flight delivery', 'Complex platforms and ecosystems' ),
    ),
);

$steps = array(
    array( 'icon' => 'lightbulb',    'step' => 1, 'title' => "Start with what's real",     'desc' => 'Understand users, constraints, systems, and context' ),
    array( 'icon' => 'trending-up',  'step' => 2, 'title' => 'Let insights lead',          'desc' => 'Surface patterns, risks, and opportunities that inform decisions' ),
    array( 'icon' => 'target',       'step' => 3, 'title' => 'Strategize with intent',     'desc' => 'Align actions to goals, capacity, and governance' ),
    array( 'icon' => 'layers',       'step' => 4, 'title' => 'Design for reality',         'desc' => 'Build for how things actually work — technically, operationally, and humanly' ),
    array( 'icon' => 'sparkles',     'step' => 5, 'title' => 'Leave teams stronger',       'desc' => 'Deliver clarity, capability, and continuity beyond the engagement' ),
);

$partners = array( 'Executive leadership', 'Policy and regulatory teams', 'Service owners and product leaders', 'IT and digital delivery', 'Communications and engagement teams', 'Operations and frontline staff' );

$why_items = array(
    array( 'icon' => 'search',    'text' => 'Research-driven by default — evidence before assumptions' ),
    array( 'icon' => 'building',  'text' => 'Strategy and execution under one roof' ),
    array( 'icon' => 'shield',    'text' => 'Proven delivery in complex, high-stakes environments' ),
    array( 'icon' => 'users',     'text' => 'Senior-led, cross-disciplinary teams' ),
    array( 'icon' => 'rocket',    'text' => 'Focused on adoption and long-term impact' ),
);
?>

<div class="animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <div class="page-hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Consultancy">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div style="max-width: 48rem;">
                <h1>Our Capabilities</h1>
                <p>From strategy to delivery, we bring the expertise your team needs to design and build services that work in the real world.</p>
            </div>
        </div>
    </div>

    <!-- Service Areas -->
    <section style="padding: 6rem 0;">
        <div class="container">
            <div class="text-center mb-16">
                <span class="section-label">Service Areas</span>
                <h2>Comprehensive support across the service lifecycle</h2>
            </div>
            <?php foreach ( $service_areas as $sa ) : ?>
            <div class="capability-card">
                <div class="capability-card-inner">
                    <div class="capability-card-image">
                        <img src="<?php echo esc_url( $sa['image'] ); ?>" alt="<?php echo esc_attr( $sa['title'] ); ?>">
                    </div>
                    <div class="capability-card-body">
                        <div class="capability-card-main">
                            <h3><?php echo esc_html( $sa['title'] ); ?></h3>
                            <div class="capability-card-tagline"><?php echo esc_html( $sa['tagline'] ); ?></div>
                            <p><?php echo esc_html( $sa['desc'] ); ?></p>
                        </div>
                        <div class="capability-card-footer">
                            <div class="capability-card-footer-col">
                                <h4>What's Included</h4>
                                <ul style="list-style:none;padding:0;">
                                    <?php foreach ( $sa['includes'] as $inc ) : ?>
                                    <li><span class="dot dot-brand"></span> <?php echo esc_html( $inc ); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <div class="capability-card-footer-col">
                                <h4>When to use</h4>
                                <ul style="list-style:none;padding:0;">
                                    <?php foreach ( $sa['bestFor'] as $bf ) : ?>
                                    <li><span class="dot dot-orange"></span> <?php echo esc_html( $bf ); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Delivery Model -->
    <section style="padding: 8rem 0; background: var(--bg-light);">
        <div class="container">
            <div class="text-center mb-16">
                <span class="section-label">Our Delivery Model</span>
                <h2 style="margin-bottom: 1.5rem;">A disciplined, insight-driven progression</h2>
                <p style="font-size: 1.125rem; color: var(--slate-600); max-width: 42rem; margin: 0 auto;">Every engagement follows a proven approach that moves from understanding to action.</p>
            </div>
            <div class="delivery-steps-grid">
                <?php foreach ( $steps as $s ) : ?>
                <div class="delivery-step">
                    <div class="step-icon"><?php echo leapux_icon( $s['icon'] ); ?></div>
                    <span class="step-label">Step <?php echo $s['step']; ?></span>
                    <h4><?php echo esc_html( $s['title'] ); ?></h4>
                    <p><?php echo esc_html( $s['desc'] ); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Who We Partner With -->
    <section style="padding: 8rem 0;">
        <div class="container">
            <div class="two-col-grid gap-lg">
                <div>
                    <span class="section-label">Who We Partner With</span>
                    <h2 style="margin-bottom: 1.5rem;">Collaborative, adaptive, grounded in shared ownership</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7;">We work alongside the teams responsible for setting direction, delivering change, and sustaining services.</p>
                </div>
                <div class="partner-cards-grid">
                    <?php foreach ( $partners as $p ) : ?>
                    <div class="partner-card">
                        <?php echo leapux_icon( 'check-circle', 20 ); ?>
                        <span><?php echo esc_html( $p ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Why LeapUX -->
    <section style="padding: 8rem 0; background: var(--bg-light);">
        <div class="container">
            <div class="two-col-grid gap-lg">
                <div>
                    <span class="section-label">Why LeapUX</span>
                    <h2 style="margin-bottom: 1.5rem;">Evidence, discipline, and real-world impact</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7;">We bring rigour and clarity to complex challenges, helping teams move from uncertainty to confident delivery.</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <?php foreach ( $why_items as $w ) : ?>
                    <div class="why-item">
                        <?php echo leapux_icon( $w['icon'], 20 ); ?>
                        <span><?php echo esc_html( $w['text'] ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section style="padding: 8rem 0; background: var(--leap-white); text-align: center; border-top: 1px solid var(--border-color);">
        <div class="container" style="max-width: 56rem;">
            <h2 style="margin-bottom: 2rem;">Ready to design a service that works?</h2>
            <?php $contact = get_page_by_path( 'contact' ); ?>
            <a href="<?php echo $contact ? esc_url( get_permalink( $contact ) ) : '#'; ?>" class="btn btn-primary">Contact Us</a>
        </div>
    </section>

</div>

<?php get_footer(); ?>
