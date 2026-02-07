<?php
/**
 * Template for AI Services page (slug: ai-services)
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" alt="AI Services">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <h1>AI-Powered UX &amp; Digital Transformation</h1>
            <p class="hero-subtitle" style="max-width: 48rem;">
                Turn complexity into clarity. We help organizations improve usability, streamline workflows, and scale smarter using practical, human-centered AI.
            </p>
        </div>
    </section>

    <!-- How We Help -->
    <section class="section" style="padding: 5rem 0; background: #F8FAFC;">
        <div class="container max-w-5xl">
            <div class="text-center mb-12">
                <h2>How We Help</h2>
            </div>
            <div class="grid grid-2">
                <?php
                $how_help = array(
                    'Identify usability issues before they impact adoption or revenue',
                    'Automate high-friction workflows with AI-ready solutions',
                    'Continuously improve digital experiences using real user data',
                    'Introduce AI responsibly, transparently, and effectively',
                );
                foreach ( $how_help as $item ) : ?>
                <div class="check-item" style="padding: 1.5rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span class="text-lg text-slate-700"><?php echo esc_html( $item ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Productized Offers -->
    <section class="section section-white">
        <div class="container max-w-6xl">
            <div class="text-center mb-16">
                <p class="section-label">Productized AI Offers</p>
                <h2>Clear outcomes. Fixed scope. Fast results.</h2>
            </div>

            <?php
            $offers = array(
                array(
                    'name'     => 'Usability Pulse™',
                    'tagline'  => 'A High-Value UX Audit (7 Days)',
                    'desc'     => 'A fast, AI-assisted UX audit that finds the leaks before they cost you customers.',
                    'best_for' => 'SaaS companies and enterprise teams with critical user flows.',
                    'review'   => 'One high-impact user journey where usability matters most.',
                    'how'      => array( 'AI-assisted heuristic evaluation', '5 remote user tests', 'AI synthesis to identify patterns and friction points' ),
                    'get'      => array( '15–20 page findings deck', '10 prioritized UX fixes with impact estimates' ),
                    'timeline' => '7 business days',
                    'price'    => '$2,500 flat',
                    'cta'      => 'Get a UX Pulse Assessment',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
                ),
                array(
                    'name'     => 'FlowFix Blueprint™',
                    'tagline'  => 'A Strategic AI & Automation Roadmap (2 Weeks)',
                    'desc'     => 'A clear, actionable roadmap to automate clunky workflows with AI—without guesswork.',
                    'best_for' => 'Government and enterprise teams bogged down by manual, repetitive processes.',
                    'review'   => '1–2 key workflows with high automation potential.',
                    'how'      => array( 'Stakeholder interviews', 'AI-assisted workflow mapping', 'Solution and feasibility evaluation' ),
                    'get'      => array( 'Workflow maps highlighting bottlenecks', 'Prioritized automation roadmap', 'Estimated ROI and effort level' ),
                    'timeline' => '2 weeks',
                    'price'    => '$4,000 flat',
                    'cta'      => 'Request a FlowFix Blueprint',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
                ),
                array(
                    'name'     => 'UX Continuum™',
                    'tagline'  => 'Always-On UX & AI Insights (Subscription)',
                    'desc'     => 'Ongoing usability monitoring, AI analysis, and actionable improvements—every month.',
                    'best_for' => 'SaaS, public sector, or enterprise teams that want continuous UX improvement.',
                    'review'   => 'Top 3–5 user flows that drive adoption, efficiency, or revenue.',
                    'how'      => array( 'Monthly usability testing', 'AI-powered sentiment analysis', 'Continuous insight synthesis' ),
                    'get'      => array( 'Monthly UX Health Dashboard', 'Short video summary with prioritized action items' ),
                    'timeline' => 'Rolling monthly',
                    'price'    => '$3,500 / month',
                    'cta'      => 'Start UX Continuum',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
                ),
            );

            foreach ( $offers as $i => $offer ) : ?>
            <div class="offer-card">
                <div class="offer-header">
                    <div class="offer-icon"><?php echo $offer['icon']; ?></div>
                    <div>
                        <span class="offer-number"><?php echo $i + 1; ?>.</span>
                        <h3><?php echo esc_html( $offer['name'] ); ?></h3>
                        <p class="offer-tagline"><?php echo esc_html( $offer['tagline'] ); ?></p>
                    </div>
                </div>
                <p class="text-lg text-slate-700 mb-6"><?php echo esc_html( $offer['desc'] ); ?></p>

                <div class="grid grid-2 mb-6">
                    <div style="display:flex;flex-direction:column;gap:1rem;">
                        <div>
                            <h4 class="font-semibold mb-4">Best for</h4>
                            <p class="text-slate-600"><?php echo esc_html( $offer['best_for'] ); ?></p>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">What we review</h4>
                            <p class="text-slate-600"><?php echo esc_html( $offer['review'] ); ?></p>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:1rem;">
                        <div>
                            <h4 class="font-semibold mb-4">How it works</h4>
                            <ul class="icon-list">
                                <?php foreach ( $offer['how'] as $h ) : ?>
                                <li class="icon-list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    <span class="text-sm text-slate-600"><?php echo esc_html( $h ); ?></span>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">What you get</h4>
                            <ul class="icon-list">
                                <?php foreach ( $offer['get'] as $g ) : ?>
                                <li class="icon-list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                    <span class="text-sm text-slate-600"><?php echo esc_html( $g ); ?></span>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="offer-footer">
                    <div class="offer-timeline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span><?php echo esc_html( $offer['timeline'] ); ?></span>
                    </div>
                    <div class="offer-price">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        <span><?php echo esc_html( $offer['price'] ); ?></span>
                    </div>
                    <a href="#get-started" class="btn btn-primary" style="margin-left:auto;padding:0.75rem 1.5rem;">👉 <?php echo esc_html( $offer['cta'] ); ?></a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- AI Add-Ons -->
    <section class="section" style="padding: 5rem 0; background: #F8FAFC;">
        <div class="container max-w-6xl">
            <div class="text-center mb-16">
                <p class="section-label">AI Add-Ons</p>
                <h2 style="margin-bottom: 1rem;">Build Recurring Value, Only Where You Need It</h2>
                <p class="text-lg text-slate-600">Choose individual AI capabilities or bundle them into plans for simplicity.</p>
            </div>

            <h4 class="text-center font-bold mb-6">Bundled AI Plans</h4>
            <div class="grid grid-4 mb-16">
                <?php
                $plans = array(
                    array( 'name' => 'Base AI Plan',              'price' => '$49–$99 / month',     'features' => array( 'AI Website Chatbot', 'AI Lead Scoring', 'Basic CRM Sync' ) ),
                    array( 'name' => 'Marketing AI Plan',         'price' => '$149–$299 / month',   'features' => array( 'AI Blog Strategy', 'Social Media Auto-Posting', 'Review Generation', 'AI Nurture Emails' ) ),
                    array( 'name' => 'Growth Automation Plan',    'price' => '$299–$699 / month',   'features' => array( 'AI Appointment Setter', 'AI Reporting Dashboard', 'Advanced CRM Automations', 'Document Generator' ) ),
                    array( 'name' => 'Full AI Ops Plan',          'price' => '$899–$1,499 / month', 'features' => array( 'Multi-system automations', 'Custom LLM agents', 'Full automation management' ) ),
                );
                foreach ( $plans as $plan ) : ?>
                <div class="plan-card">
                    <h5><?php echo esc_html( $plan['name'] ); ?></h5>
                    <p class="plan-price"><?php echo esc_html( $plan['price'] ); ?></p>
                    <ul class="icon-list">
                        <?php foreach ( $plan['features'] as $f ) : ?>
                        <li class="icon-list-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            <span class="text-sm text-slate-600"><?php echo esc_html( $f ); ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>

            <h4 class="text-center font-bold mb-6">Individual AI Add-Ons</h4>
            <div class="grid grid-5">
                <?php
                $addons = array(
                    array( 'name' => 'AI Website Chatbot',         'price' => '$49 / month' ),
                    array( 'name' => 'AI Lead Scoring',            'price' => '$29 / month' ),
                    array( 'name' => 'AI Smart Autoresponder',     'price' => '$29 / month' ),
                    array( 'name' => 'AI Review Generator',        'price' => '$49 / month' ),
                    array( 'name' => 'AI Social Media Auto-Post',  'price' => '$129 / month' ),
                    array( 'name' => 'AI Blog & SEO Engine',       'price' => '$199 / month' ),
                    array( 'name' => 'AI Appointment Setter',      'price' => '$99 / month' ),
                    array( 'name' => 'AI CRM Updater',             'price' => '$49 / month' ),
                    array( 'name' => 'AI Call Summaries',          'price' => '$59 / month' ),
                    array( 'name' => 'AI Analytics Dashboard',     'price' => '$129 / month' ),
                );
                foreach ( $addons as $addon ) : ?>
                <div class="addon-card">
                    <div class="addon-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                        <span><?php echo esc_html( $addon['name'] ); ?></span>
                    </div>
                    <p class="addon-price"><?php echo esc_html( $addon['price'] ); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Why Work With Us -->
    <section class="section section-white">
        <div class="container max-w-5xl">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <p class="section-label">Why Work With Us</p>
                    <h2>Practical AI that delivers real results</h2>
                </div>
                <div style="display:flex;flex-direction:column;gap:1rem;">
                    <?php
                    $reasons = array(
                        'UX-first, not tool-first',
                        'Human-centered AI (ethical, explainable, practical)',
                        'Fixed-scope offers with clear outcomes',
                        'Designed for enterprise and public-sector realities',
                    );
                    foreach ( $reasons as $r ) : ?>
                    <div class="check-item" style="background:#F8FAFC;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                        <span><?php echo esc_html( $r ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Lead Form -->
    <section id="get-started" class="section section-gradient-orange" style="padding: 5rem 0;">
        <div class="container max-w-3xl">
            <div class="text-center mb-12">
                <h2 style="color: var(--leap-white);">Let's Talk About Your AI Opportunity</h2>
            </div>
            <form method="post" action="#" class="form-card" style="background: var(--leap-white); box-shadow: 0 25px 50px rgba(0,0,0,0.15);">
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Full Name *</label>
                        <input type="text" name="full_name" class="form-input" placeholder="Your name" required>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Work Email *</label>
                        <input type="email" name="work_email" class="form-input" placeholder="you@company.com" required>
                    </div>
                </div>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Organization *</label>
                        <input type="text" name="organization" class="form-input" placeholder="Company name" required>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Role / Title *</label>
                        <input type="text" name="role" class="form-input" placeholder="Your role" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Organization Type *</label>
                    <select name="org_type" class="form-select" required>
                        <option value="">Select type</option>
                        <option>SaaS</option>
                        <option>Enterprise</option>
                        <option>Government / Public Sector</option>
                        <option>Non-profit</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Brief description of your challenge (optional)</label>
                    <textarea name="challenge" class="form-textarea" rows="4" placeholder="Tell us about your current challenges or goals..."></textarea>
                </div>
                <div class="form-group">
                    <label class="form-checkbox-label">
                        <input type="checkbox" required>
                        <span class="text-sm text-slate-600">I agree to be contacted about my inquiry. *</span>
                    </label>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">👉 Request a Consultation</button>
                <p class="text-center text-sm text-slate-500 mt-6">No spam. No obligation. We'll review your needs and recommend the right next step.</p>
            </form>
        </div>
    </section>

</main>

<?php get_footer(); ?>
