<?php
/**
 * Template for Capabilities page (slug: capabilities)
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Consultancy">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <h1>Our Capabilities</h1>
            <p class="hero-subtitle" style="max-width: 48rem;">
                From strategy to delivery, we bring the expertise your team needs to design and build services that work in the real world.
            </p>
        </div>
    </section>

    <!-- Service Areas -->
    <section class="section" style="padding-bottom: 2rem;">
        <div class="container">
            <div class="text-center mb-16">
                <p class="section-label">Service Areas</p>
                <h2>Comprehensive support across the service lifecycle</h2>
            </div>

            <?php
            $services = array(
                array(
                    'title'   => 'Strategy & Transformation Planning',
                    'tagline' => 'Set direction before you invest.',
                    'image'   => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                    'desc'    => 'Define a clear vision for change and translate it into actionable, evidence-based plans. We align high-level objectives with governance, policy, and operational realities to ensure your transformation has a clear path to success from day one.',
                    'includes' => array( 'Vision and future-state definition', 'Stakeholder & governance analysis', 'Transformation roadmaps', 'Business case development', 'Operating model alignment' ),
                    'when'     => array( 'Early-stage transformation', 'Pre-RFP planning', 'Enterprise and program modernization' ),
                ),
                array(
                    'title'   => 'User Research & Service Discovery',
                    'tagline' => 'Build clarity before committing to build.',
                    'image'   => 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
                    'desc'    => 'Uncover real user needs, behaviors, and constraints to help teams make informed decisions. We move past assumptions to surface the risks and opportunities that inform design and technical specifications, de-risking complex initiatives early.',
                    'includes' => array( 'User and stakeholder research', 'Service and journey mapping', 'Accessibility and risk scanning', 'Opportunity framing', 'Evidence-based recommendations' ),
                    'when'     => array( 'Complex or stalled initiatives', 'Discovery and validation phases', 'High-visibility public services' ),
                ),
                array(
                    'title'   => 'UX & Service Design',
                    'tagline' => 'Design services that are ready to deliver.',
                    'image'   => 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
                    'desc'    => 'Design end-to-end services that work across channels, systems, and organizational boundaries. We combine user-centered design with continuous testing and validation to produce implementation-ready artifacts that respect real-world constraints.',
                    'includes' => array( 'End-to-end service design', 'UX architecture and UI design', 'Prototyping & concept validation', 'Usability testing', 'Implementation-ready design systems' ),
                    'when'     => array( 'Programs preparing for build', 'Executive or Treasury Board approvals', 'Multi-vendor delivery environments' ),
                ),
                array(
                    'title'   => 'Accessibility by Design',
                    'tagline' => 'Accessibility is a baseline, not a retrofit.',
                    'image'   => 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
                    'desc'    => 'Embed inclusive design from the start to meet regulatory requirements while improving usability for everyone. We help organizations navigate WCAG standards and build accessible practices into their core delivery teams.',
                    'includes' => array( 'WCAG and standards-aligned audits', 'Inclusive design patterns', 'Remediation strategies', 'Validation with users with disabilities', 'Accessibility QA for delivery' ),
                    'when'     => array( 'Public sector environments', 'Legacy platform modernization', 'Compliance-driven initiatives' ),
                ),
                array(
                    'title'   => 'AI & Automation Readiness',
                    'tagline' => 'Apply AI where it adds real value.',
                    'image'   => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
                    'desc'    => 'Identify responsible, practical opportunities for automation and AI. We analyze service workflows to find where technology can improve efficiency while respecting policy, privacy, and risk constraints of regulated environments.',
                    'includes' => array( 'Service and workflow analysis', 'AI opportunity identification', 'Ethics, risk, and governance assessment', 'Concept prototyping', 'Implementation recommendations' ),
                    'when'     => array( 'Organizations exploring AI/ML', 'Regulated or policy-constrained sectors', 'Operational efficiency initiatives' ),
                ),
                array(
                    'title'   => 'Implementation & Delivery Support',
                    'tagline' => 'Protect design intent through delivery.',
                    'image'   => 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
                    'desc'    => 'Ensure that design vision is correctly translated into code. We work alongside engineering teams to implement secure, scalable, and accessible solutions, providing the continuity needed between the design phase and live operation.',
                    'includes' => array( 'Design system alignment', 'Developer collaboration & UX QA', 'Handover documentation', 'Digital adoption strategies', 'Post-launch continuous improvement' ),
                    'when'     => array( 'Multi-vendor programs', 'In-flight delivery', 'Complex platforms and ecosystems' ),
                ),
            );

            foreach ( $services as $service ) : ?>
            <div class="service-card">
                <div class="service-card-grid">
                    <div class="service-card-image">
                        <img src="<?php echo esc_url( $service['image'] ); ?>" alt="<?php echo esc_attr( $service['title'] ); ?>">
                    </div>
                    <div class="service-card-body">
                        <div class="service-card-main">
                            <h3><?php echo esc_html( $service['title'] ); ?></h3>
                            <p class="service-card-tagline"><?php echo esc_html( $service['tagline'] ); ?></p>
                            <p><?php echo esc_html( $service['desc'] ); ?></p>
                        </div>
                        <div class="service-card-details">
                            <div class="service-card-details-col">
                                <h5>What's Included</h5>
                                <ul class="detail-list">
                                    <?php foreach ( $service['includes'] as $item ) : ?>
                                    <li><span class="detail-dot detail-dot-brand"></span><?php echo esc_html( $item ); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <div class="service-card-details-col">
                                <h5>When to use</h5>
                                <ul class="detail-list">
                                    <?php foreach ( $service['when'] as $item ) : ?>
                                    <li><span class="detail-dot detail-dot-orange"></span><?php echo esc_html( $item ); ?></li>
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
    <section class="section section-gray">
        <div class="container">
            <div class="text-center mb-16">
                <p class="section-label">Our Delivery Model</p>
                <h2 style="margin-bottom: 1.5rem;">A disciplined, insight-driven progression</h2>
                <p class="text-lg text-slate-600 max-w-4xl">Every engagement follows a proven approach that moves from understanding to action.</p>
            </div>
            <div class="grid grid-5">
                <?php
                $steps = array(
                    array( 'step' => 1, 'title' => "Start with what's real", 'desc' => 'Understand users, constraints, systems, and context', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>' ),
                    array( 'step' => 2, 'title' => 'Let insights lead', 'desc' => 'Surface patterns, risks, and opportunities that inform decisions', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>' ),
                    array( 'step' => 3, 'title' => 'Strategize with intent', 'desc' => 'Align actions to goals, capacity, and governance', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' ),
                    array( 'step' => 4, 'title' => 'Design for reality', 'desc' => 'Build for how things actually work — technically, operationally, and humanly', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>' ),
                    array( 'step' => 5, 'title' => 'Leave teams stronger', 'desc' => 'Deliver clarity, capability, and continuity beyond the engagement', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>' ),
                );
                foreach ( $steps as $step ) : ?>
                <div class="step-card">
                    <div class="step-icon"><?php echo $step['icon']; ?></div>
                    <span class="step-label">Step <?php echo $step['step']; ?></span>
                    <h4><?php echo esc_html( $step['title'] ); ?></h4>
                    <p><?php echo esc_html( $step['desc'] ); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Who We Partner With -->
    <section class="section section-white">
        <div class="container">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <p class="section-label">Who We Partner With</p>
                    <h2 style="margin-bottom: 1.5rem;">Collaborative, adaptive, grounded in shared ownership</h2>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        We work alongside the teams responsible for setting direction, delivering change, and sustaining services.
                    </p>
                </div>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <?php
                    $partners = array( 'Executive leadership', 'Policy and regulatory teams', 'Service owners and product leaders', 'IT and digital delivery', 'Communications and engagement teams', 'Operations and frontline staff' );
                    foreach ( $partners as $p ) : ?>
                    <div class="check-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span><?php echo esc_html( $p ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Why LeapUX -->
    <section class="section section-gray">
        <div class="container">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <p class="section-label">Why LeapUX</p>
                    <h2 style="margin-bottom: 1.5rem;">Evidence, discipline, and real-world impact</h2>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        We bring rigour and clarity to complex challenges, helping teams move from uncertainty to confident delivery.
                    </p>
                </div>
                <div style="display:flex;flex-direction:column;gap:1rem;">
                    <?php
                    $reasons = array(
                        'Research-driven by default — evidence before assumptions',
                        'Strategy and execution under one roof',
                        'Proven delivery in complex, high-stakes environments',
                        'Senior-led, cross-disciplinary teams',
                        'Focused on adoption and long-term impact',
                    );
                    foreach ( $reasons as $r ) : ?>
                    <div class="check-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span><?php echo esc_html( $r ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-white section-border-top" style="text-align: center;">
        <div class="container max-w-4xl">
            <h2 style="margin-bottom: 2rem;">Ready to design a service that works?</h2>
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Contact Us</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
