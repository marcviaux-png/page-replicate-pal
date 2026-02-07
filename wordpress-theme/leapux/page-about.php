<?php
/**
 * Template Name: About
 * Template for the About page — matches About.tsx exactly.
 *
 * @package LeapUX
 */

get_header();

$how_items = array(
    array(
        'icon'   => 'users',
        'title'  => 'Senior-Led, Hands-On Delivery',
        'desc'   => 'LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption. We scale thoughtfully as needs evolve—filling capacity gaps without the overhead or handoffs of a traditional agency.',
        'points' => array( 'Senior expertise from start to finish', 'Proven delivery approach reduces rework', 'Weekly demos, clear ownership, transparent communication' ),
    ),
    array(
        'icon'   => 'clock',
        'title'  => 'Discipline, Transparency, and Follow-Through',
        'desc'   => 'We operate with rigor and transparency because trust is earned through execution. Time is tracked to tasks, shared regularly, and tied directly to delivered outputs. We work with agreed cadences, burn visibility, and clear change control.',
        'points' => array( 'Time tracked to tasks and deliverables', 'Risks raised early, decisions documented', 'Issues followed through to closure with defined owners' ),
    ),
    array(
        'icon'   => 'target',
        'title'  => 'Built for Complex Delivery',
        'desc'   => 'Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first, define success metrics early, and revisit them throughout delivery.',
        'points' => array( 'Clear artifacts and acceptance criteria', 'Shared ownership at every stage', 'Services move to adoption, not stall after launch' ),
    ),
    array(
        'icon'   => 'languages',
        'title'  => 'Bilingual and National by Design',
        'desc'   => 'As a Canadian firm, LeapUX delivers fully bilingually in English and French, including stakeholder workshops, formal deliverables, and national program alignment. Our work reflects the linguistic, accessibility, and policy realities of delivering services for all Canadians.',
        'points' => array( 'Full bilingual delivery in English and French', 'Stakeholder workshops and formal deliverables', 'Aligned with Canadian accessibility and policy requirements' ),
    ),
    array(
        'icon'   => 'award',
        'title'  => 'Outcomes That Last',
        'desc'   => 'Above all, we care about outcomes—not just launches. We show this through thorough documentation, clear handover, operational support, and plans for post-launch evolution. We help organizations succeed after go-live, with services that are maintainable, adopted, and able to improve over time.',
        'points' => array( 'Thorough documentation and clear handover', 'Operational support post-launch', 'Plans for continuous improvement' ),
    ),
);
?>

<div class="animate-in">

    <!-- Hero -->
    <div class="page-hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" alt="Office">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <h1>About Us</h1>
            <p>LeapUX is a senior-led digital consultancy helping organizations design, build, and deliver end-to-end services that work in the real world.</p>
        </div>
    </div>

    <!-- Main Content -->
    <section style="padding: 8rem 0;">
        <div class="container">
            <div class="about-layout">
                <!-- Left Column -->
                <div>
                    <div style="margin-bottom: 6rem;">
                        <h2 style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <span class="about-section-bar" style="background: var(--leap-brand);"></span>
                            Built for Complexity
                        </h2>
                        <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 1.5rem;">
                            With over 15 years of industry experience and continuous operation since 2012, we deliver production work every year across government, enterprise, and regulated environments—where quality, security, and accountability are non‑negotiable.
                        </p>
                        <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7;">
                            Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first and define success metrics early.
                        </p>
                    </div>

                    <div style="margin-bottom: 6rem;">
                        <h2 style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <span class="about-section-bar" style="background: var(--leap-orange);"></span>
                            Senior-Led Delivery
                        </h2>
                        <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 1.5rem;">
                            LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption.
                        </p>
                        <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7;">
                            Our proven delivery approach reduces rework, clarifies scope early, and keeps decisions moving. We ship consistently through weekly demos and transparent communication.
                        </p>
                    </div>

                    <div class="about-discipline-box">
                        <h2 style="font-style: italic; margin-bottom: 1.5rem;">Discipline & Transparency</h2>
                        <p style="font-size: 1.125rem; color: var(--slate-600); line-height: 1.7; margin-bottom: 2rem;">
                            We operate with rigor because trust is earned through execution. Time is tracked to tasks, shared regularly, and tied directly to delivered outputs.
                        </p>
                        <div class="about-discipline-grid">
                            <div>• Risks raised early</div>
                            <div>• Decisions documented</div>
                            <div>• Issues followed to closure</div>
                            <div>• Clear owners and timelines</div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <aside style="display: flex; flex-direction: column; gap: 2.5rem;">
                    <div class="about-sidebar-stats">
                        <h3>Capabilities</h3>
                        <div class="stat-item">
                            <div class="stat-value">15+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">2012</div>
                            <div class="stat-label">Founded</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">EN/FR</div>
                            <div class="stat-label">Fully Bilingual</div>
                        </div>
                    </div>

                    <div class="about-sidebar-quote">
                        <p>"Because delivery matters. We combine evidence, discipline, and accountability."</p>
                        <div class="quote-attribution">LeapUX Philosophy</div>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- How We Work -->
    <section style="padding: 8rem 0; background: var(--bg-light);">
        <div class="container">
            <div class="text-center mb-16">
                <span class="section-label">How We Work</span>
                <h2 style="margin-bottom: 1.5rem;">Evidence-driven, senior-led, built for the real world</h2>
                <p style="font-size: 1.125rem; color: var(--slate-600); max-width: 42rem; margin: 0 auto;">We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.</p>
            </div>
            <?php foreach ( $how_items as $item ) : ?>
            <div class="how-we-work-card">
                <div class="how-we-work-card-header">
                    <div class="icon-box"><?php echo leapux_icon( $item['icon'] ); ?></div>
                    <div style="flex: 1;">
                        <h4><?php echo esc_html( $item['title'] ); ?></h4>
                        <p><?php echo esc_html( $item['desc'] ); ?></p>
                        <ul>
                            <?php foreach ( $item['points'] as $pt ) : ?>
                            <li><?php echo leapux_icon( 'check-circle', 20 ); ?> <span><?php echo esc_html( $pt ); ?></span></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Who We Work With -->
    <section style="padding: 8rem 0; background: var(--bg-light);">
        <div class="container" style="max-width: 56rem; text-align: center;">
            <span class="section-label">Who We Work With</span>
            <h2 style="margin-bottom: 1.5rem;">Partners in complex, high-impact delivery</h2>
            <p style="font-size: 1.125rem; color: var(--slate-600);">We partner with organizations delivering complex, high-impact services, including governments, regulated industries, and mission-driven organizations.</p>
        </div>
    </section>

    <!-- Why LeapUX -->
    <section style="padding: 8rem 0;">
        <div class="container" style="max-width: 56rem; text-align: center;">
            <span class="section-label">Why LeapUX</span>
            <h2 style="margin-bottom: 1.5rem;">Because delivery matters</h2>
            <p style="font-size: 1.125rem; color: var(--slate-600);">We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.</p>
        </div>
    </section>

    <!-- CTA -->
    <section style="padding: 8rem 0; background: var(--leap-light); text-align: center; border-top: 1px solid var(--border-color);">
        <div class="container" style="max-width: 48rem;">
            <h2 style="margin-bottom: 2.5rem; text-wrap: balance;">Ready to work with a partner built for complex delivery?</h2>
            <?php $contact = get_page_by_path( 'contact' ); ?>
            <a href="<?php echo $contact ? esc_url( get_permalink( $contact ) ) : '#'; ?>" class="btn btn-primary">Talk to LeapUX</a>
        </div>
    </section>

</div>

<?php get_footer(); ?>
