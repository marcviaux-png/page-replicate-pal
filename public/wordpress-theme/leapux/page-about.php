<?php
/**
 * Template for About page (slug: about)
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <!-- Hero -->
    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="Office Environment">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <h1>About Us</h1>
            <p class="hero-subtitle" style="max-width: 48rem;">
                LeapUX is a senior-led digital consultancy helping organizations design, build, and deliver end-to-end services that work in the real world.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="section section-white">
        <div class="container">
            <div class="grid-12">
                <!-- Left Column -->
                <div class="col-span-8" style="display:flex;flex-direction:column;gap:6rem;">

                    <!-- Built for Complexity -->
                    <div>
                        <h2 style="display:flex;align-items:center;gap:1rem;margin-bottom:2rem;">
                            <span style="width:3rem;height:4px;background:var(--leap-brand);display:block;"></span>
                            Built for Complexity
                        </h2>
                        <div style="display:flex;flex-direction:column;gap:1.5rem;">
                            <p class="text-lg text-slate-600 leading-relaxed">
                                With over 15 years of industry experience and continuous operation since 2012, we deliver production work every year across government, enterprise, and regulated environments—where quality, security, and accountability are non‑negotiable.
                            </p>
                            <p class="text-lg text-slate-600 leading-relaxed">
                                Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first and define success metrics early.
                            </p>
                        </div>
                    </div>

                    <!-- Senior-Led Delivery -->
                    <div>
                        <h2 style="display:flex;align-items:center;gap:1rem;margin-bottom:2rem;">
                            <span style="width:3rem;height:4px;background:var(--leap-orange);display:block;"></span>
                            Senior-Led Delivery
                        </h2>
                        <div style="display:flex;flex-direction:column;gap:1.5rem;">
                            <p class="text-lg text-slate-600 leading-relaxed">
                                LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption.
                            </p>
                            <p class="text-lg text-slate-600 leading-relaxed">
                                Our proven delivery approach reduces rework, clarifies scope early, and keeps decisions moving. We ship consistently through weekly demos and transparent communication.
                            </p>
                        </div>
                    </div>

                    <!-- Callout -->
                    <div class="callout-block">
                        <h2>Discipline &amp; Transparency</h2>
                        <p>We operate with rigor because trust is earned through execution. Time is tracked to tasks, shared regularly, and tied directly to delivered outputs.</p>
                        <div class="callout-grid">
                            <div>• Risks raised early</div>
                            <div>• Decisions documented</div>
                            <div>• Issues followed to closure</div>
                            <div>• Clear owners and timelines</div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-span-4" style="display:flex;flex-direction:column;gap:2.5rem;">
                    <div class="stat-card">
                        <h3>Capabilities</h3>
                        <div class="stat-item">
                            <span class="stat-value">15+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">2012</span>
                            <span class="stat-label">Founded</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">EN/FR</span>
                            <span class="stat-label">Fully Bilingual</span>
                        </div>
                    </div>

                    <div class="quote-card">
                        <p>"Because delivery matters. We combine evidence, discipline, and accountability."</p>
                        <div class="quote-source">LeapUX Philosophy</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How We Work -->
    <section class="section section-gray">
        <div class="container">
            <div class="text-center mb-16">
                <p class="section-label">How We Work</p>
                <h2 style="margin-bottom: 1.5rem;">Evidence-driven, senior-led, built for the real world</h2>
                <p class="text-lg text-slate-600 max-w-4xl">
                    We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
                </p>
            </div>
            <div style="display:flex;flex-direction:column;gap:1.5rem;">
                <?php
                $how_items = array(
                    array(
                        'title'  => 'Senior-Led, Hands-On Delivery',
                        'desc'   => 'LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption. We scale thoughtfully as needs evolve—filling capacity gaps without the overhead or handoffs of a traditional agency.',
                        'points' => array( 'Senior expertise from start to finish', 'Proven delivery approach reduces rework', 'Weekly demos, clear ownership, transparent communication' ),
                        'icon'   => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
                    ),
                    array(
                        'title'  => 'Discipline, Transparency, and Follow-Through',
                        'desc'   => 'We operate with rigor and transparency because trust is earned through execution. Time is tracked to tasks, shared regularly, and tied directly to delivered outputs. We work with agreed cadences, burn visibility, and clear change control.',
                        'points' => array( 'Time tracked to tasks and deliverables', 'Risks raised early, decisions documented', 'Issues followed through to closure with defined owners' ),
                        'icon'   => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
                    ),
                    array(
                        'title'  => 'Built for Complex Delivery',
                        'desc'   => 'Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first, define success metrics early, and revisit them throughout delivery.',
                        'points' => array( 'Clear artifacts and acceptance criteria', 'Shared ownership at every stage', 'Services move to adoption, not stall after launch' ),
                        'icon'   => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
                    ),
                    array(
                        'title'  => 'Bilingual and National by Design',
                        'desc'   => 'As a Canadian firm, LeapUX delivers fully bilingually in English and French, including stakeholder workshops, formal deliverables, and national program alignment. Our work reflects the linguistic, accessibility, and policy realities of delivering services for all Canadians.',
                        'points' => array( 'Full bilingual delivery in English and French', 'Stakeholder workshops and formal deliverables', 'Aligned with Canadian accessibility and policy requirements' ),
                        'icon'   => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
                    ),
                    array(
                        'title'  => 'Outcomes That Last',
                        'desc'   => 'Above all, we care about outcomes—not just launches. We show this through thorough documentation, clear handover, operational support, and plans for post-launch evolution. We help organizations succeed after go-live, with services that are maintainable, adopted, and able to improve over time.',
                        'points' => array( 'Thorough documentation and clear handover', 'Operational support post-launch', 'Plans for continuous improvement' ),
                        'icon'   => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
                    ),
                );
                foreach ( $how_items as $item ) : ?>
                <div class="how-card">
                    <div class="how-card-header">
                        <div class="how-card-icon"><?php echo $item['icon']; ?></div>
                        <div style="flex:1;">
                            <h4><?php echo esc_html( $item['title'] ); ?></h4>
                            <p><?php echo esc_html( $item['desc'] ); ?></p>
                            <ul class="how-card-points">
                                <?php foreach ( $item['points'] as $point ) : ?>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span><?php echo esc_html( $point ); ?></span>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Who We Work With -->
    <section class="section section-gray">
        <div class="container max-w-4xl text-center">
            <p class="section-label">Who We Work With</p>
            <h2 style="margin-bottom: 1.5rem;">Partners in complex, high-impact delivery</h2>
            <p class="text-lg text-slate-600">
                We partner with organizations delivering complex, high-impact services, including governments, regulated industries, and mission-driven organizations.
            </p>
        </div>
    </section>

    <!-- Why LeapUX -->
    <section class="section section-white">
        <div class="container max-w-4xl text-center">
            <p class="section-label">Why LeapUX</p>
            <h2 style="margin-bottom: 1.5rem;">Because delivery matters</h2>
            <p class="text-lg text-slate-600">
                We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
            </p>
        </div>
    </section>

    <!-- CTA -->
    <section class="section section-light section-border-top" style="text-align: center;">
        <div class="container max-w-3xl">
            <h2 style="margin-bottom: 2.5rem; text-wrap: balance;">Ready to work with a partner built for complex delivery?</h2>
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Talk to LeapUX</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
