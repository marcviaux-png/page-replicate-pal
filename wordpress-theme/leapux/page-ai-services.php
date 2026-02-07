<?php
/**
 * Template Name: AI Services
 * Template for AI Services page — matches AIServices.tsx exactly.
 *
 * @package LeapUX
 */

get_header();

$how_we_help = array(
    'Identify usability issues before they impact adoption or revenue',
    'Automate high-friction workflows with AI-ready solutions',
    'Continuously improve digital experiences using real user data',
    'Introduce AI responsibly, transparently, and effectively',
);

$offers = array(
    array(
        'icon'       => 'eye',
        'name'       => 'Usability Pulse™',
        'tagline'    => 'A High-Value UX Audit (7 Days)',
        'desc'       => 'A fast, AI-assisted UX audit that finds the leaks before they cost you customers.',
        'bestFor'    => 'SaaS companies and enterprise teams with critical user flows (sign-up, checkout, submissions, onboarding).',
        'review'     => 'One high-impact user journey where usability matters most.',
        'howItWorks' => array( 'AI-assisted heuristic evaluation', '5 remote user tests', 'AI synthesis to identify patterns and friction points' ),
        'whatYouGet' => array( '15–20 page findings deck', '10 prioritized UX fixes with impact estimates' ),
        'timeline'   => '7 business days',
        'price'      => '$2,500 flat',
        'cta'        => 'Get a UX Pulse Assessment',
    ),
    array(
        'icon'       => 'zap',
        'name'       => 'FlowFix Blueprint™',
        'tagline'    => 'A Strategic AI & Automation Roadmap (2 Weeks)',
        'desc'       => 'A clear, actionable roadmap to automate clunky workflows with AI—without guesswork.',
        'bestFor'    => 'Government and enterprise teams bogged down by manual, repetitive processes.',
        'review'     => '1–2 key workflows with high automation potential.',
        'howItWorks' => array( 'Stakeholder interviews', 'AI-assisted workflow mapping', 'Solution and feasibility evaluation' ),
        'whatYouGet' => array( 'Workflow maps highlighting bottlenecks', 'Prioritized automation roadmap', 'Estimated ROI and effort level' ),
        'timeline'   => '2 weeks',
        'price'      => '$4,000 flat',
        'cta'        => 'Request a FlowFix Blueprint',
    ),
    array(
        'icon'       => 'bar-chart-3',
        'name'       => 'UX Continuum™',
        'tagline'    => 'Always-On UX & AI Insights (Subscription)',
        'desc'       => 'Ongoing usability monitoring, AI analysis, and actionable improvements—every month.',
        'bestFor'    => 'SaaS, public sector, or enterprise teams that want continuous UX improvement without hiring internally.',
        'review'     => 'Top 3–5 user flows that drive adoption, efficiency, or revenue.',
        'howItWorks' => array( 'Monthly usability testing', 'AI-powered sentiment analysis (support tickets, feedback, usage)', 'Continuous insight synthesis' ),
        'whatYouGet' => array( 'Monthly UX Health Dashboard', 'Short video summary with prioritized action items' ),
        'timeline'   => 'Rolling monthly',
        'price'      => '$3,500 / month',
        'cta'        => 'Start UX Continuum',
    ),
);

$plans = array(
    array( 'name' => 'Base AI Plan',       'price' => '$49–$99 / month',    'features' => array( 'AI Website Chatbot', 'AI Lead Scoring', 'Basic CRM Sync' ) ),
    array( 'name' => 'Marketing AI Plan',  'price' => '$149–$299 / month',  'features' => array( 'AI Blog Strategy', 'Social Media Auto-Posting', 'Review Generation', 'AI Nurture Emails' ) ),
    array( 'name' => 'Growth Automation',  'price' => '$299–$699 / month',  'features' => array( 'AI Appointment Setter', 'AI Reporting Dashboard', 'Advanced CRM Automations', 'Document Generator' ) ),
    array( 'name' => 'Full AI Ops Plan',   'price' => '$899–$1,499 / month','features' => array( 'Multi-system automations', 'Custom LLM agents', 'Full automation management' ) ),
);

$addons = array(
    array( 'icon' => 'bot',              'name' => 'AI Website Chatbot',         'price' => '$49 / month' ),
    array( 'icon' => 'target',           'name' => 'AI Lead Scoring',            'price' => '$29 / month' ),
    array( 'icon' => 'message-square',   'name' => 'AI Smart Autoresponder',     'price' => '$29 / month' ),
    array( 'icon' => 'sparkles',         'name' => 'AI Review Generator',        'price' => '$49 / month' ),
    array( 'icon' => 'trending-up',      'name' => 'AI Social Media Auto-Post',  'price' => '$129 / month' ),
    array( 'icon' => 'file-text',        'name' => 'AI Blog & SEO Engine',       'price' => '$199 / month' ),
    array( 'icon' => 'calendar',         'name' => 'AI Appointment Setter',      'price' => '$99 / month' ),
    array( 'icon' => 'users',            'name' => 'AI CRM Updater',             'price' => '$49 / month' ),
    array( 'icon' => 'phone',            'name' => 'AI Call Summaries',           'price' => '$59 / month' ),
    array( 'icon' => 'layout-dashboard', 'name' => 'AI Analytics Dashboard',     'price' => '$129 / month' ),
);

$why_items = array(
    'UX-first, not tool-first',
    'Human-centered AI (ethical, explainable, practical)',
    'Fixed-scope offers with clear outcomes',
    'Designed for enterprise and public-sector realities',
);

$goals = array( 'Improve usability', 'Automate workflows', 'Reduce manual effort', 'Increase conversions', 'Explore AI opportunities' );
$services = array( 'Usability Pulse™', 'FlowFix Blueprint™', 'UX Continuum™', 'AI Add-Ons', 'Not sure yet' );
?>

<div class="animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <div class="page-hero">
        <div class="hero-bg">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/hero-ai-services.jpg' ); ?>" alt="AI Services">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div style="max-width: 48rem;">
                <h1>AI-Powered UX & Digital Transformation</h1>
                <p>Turn complexity into clarity. We help organizations improve usability, streamline workflows, and scale smarter using practical, human-centered AI.</p>
            </div>
        </div>
    </div>

    <!-- How We Help -->
    <section style="padding: 5rem 0; background: var(--slate-50);">
        <div class="container" style="max-width: 64rem;">
            <div class="text-center mb-12"><h2>How We Help</h2></div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                <?php foreach ( $how_we_help as $item ) : ?>
                <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; background: var(--leap-white); border-radius: 0.75rem; border: 1px solid var(--slate-200);">
                    <?php echo leapux_icon( 'check-circle' ); ?>
                    <span style="color: var(--slate-700); font-size: 1.125rem;"><?php echo esc_html( $item ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Productized Offers -->
    <section style="padding: 5rem 0; background: var(--leap-white);">
        <div class="container" style="max-width: 72rem;">
            <div class="text-center mb-16">
                <span class="section-label">Productized AI Offers</span>
                <h2>Clear outcomes. Fixed scope. Fast results.</h2>
            </div>
            <?php foreach ( $offers as $i => $offer ) : ?>
            <div class="offer-card">
                <div class="offer-card-header">
                    <div class="icon-box icon-box-lg"><?php echo leapux_icon( $offer['icon'], 28 ); ?></div>
                    <div>
                        <span class="offer-number"><?php echo $i + 1; ?>.</span>
                        <h3 style="font-size: 1.5rem;"><?php echo esc_html( $offer['name'] ); ?></h3>
                        <p style="color: var(--slate-600); font-weight: 500;"><?php echo esc_html( $offer['tagline'] ); ?></p>
                    </div>
                </div>
                <p style="font-size: 1.125rem; color: var(--slate-700); margin-bottom: 1.5rem;"><?php echo esc_html( $offer['desc'] ); ?></p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div>
                        <h4 style="font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><?php echo leapux_icon( 'users', 16 ); ?> Best for</h4>
                        <p style="color: var(--slate-600);"><?php echo esc_html( $offer['bestFor'] ); ?></p>
                        <h4 style="font-weight: 600; margin: 1rem 0 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><?php echo leapux_icon( 'target', 16 ); ?> What we review</h4>
                        <p style="color: var(--slate-600);"><?php echo esc_html( $offer['review'] ); ?></p>
                    </div>
                    <div>
                        <h4 style="font-weight: 600; margin-bottom: 0.5rem;">How it works</h4>
                        <ul style="list-style:none;padding:0;">
                            <?php foreach ( $offer['howItWorks'] as $hw ) : ?>
                            <li style="display:flex;align-items:flex-start;gap:0.5rem;color:var(--slate-600);margin-bottom:0.25rem;"><?php echo leapux_icon( 'arrow-right', 16 ); ?> <?php echo esc_html( $hw ); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <h4 style="font-weight: 600; margin: 1rem 0 0.5rem;">What you get</h4>
                        <ul style="list-style:none;padding:0;">
                            <?php foreach ( $offer['whatYouGet'] as $wyg ) : ?>
                            <li style="display:flex;align-items:flex-start;gap:0.5rem;color:var(--slate-600);margin-bottom:0.25rem;"><?php echo leapux_icon( 'check-circle', 16 ); ?> <?php echo esc_html( $wyg ); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
                <div class="offer-card-meta">
                    <div class="meta-item"><?php echo leapux_icon( 'clock', 20 ); ?> <span style="font-weight:500;color:var(--slate-700);"><?php echo esc_html( $offer['timeline'] ); ?></span></div>
                    <div class="meta-item meta-price"><?php echo leapux_icon( 'dollar-sign', 20 ); ?> <?php echo esc_html( $offer['price'] ); ?></div>
                    <a href="#get-started" class="btn btn-primary btn-sm" style="margin-left: auto;">👉 <?php echo esc_html( $offer['cta'] ); ?></a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- AI Add-Ons -->
    <section style="padding: 5rem 0; background: var(--slate-50);">
        <div class="container" style="max-width: 72rem;">
            <div class="text-center mb-16">
                <span class="section-label">AI Add-Ons</span>
                <h2 style="margin-bottom: 1rem;">Build Recurring Value, Only Where You Need It</h2>
                <p style="color: var(--slate-600); font-size: 1.125rem;">Choose individual AI capabilities or bundle them into plans for simplicity.</p>
            </div>
            <h4 style="text-align:center;font-weight:700;margin-bottom:1.5rem;">Bundled AI Plans</h4>
            <div class="plans-grid mb-16">
                <?php foreach ( $plans as $plan ) : ?>
                <div class="plan-card">
                    <h5><?php echo esc_html( $plan['name'] ); ?></h5>
                    <div class="plan-price"><?php echo esc_html( $plan['price'] ); ?></div>
                    <ul style="list-style:none;padding:0;">
                        <?php foreach ( $plan['features'] as $f ) : ?>
                        <li style="display:flex;align-items:flex-start;gap:0.5rem;font-size:0.875rem;color:var(--slate-600);margin-bottom:0.5rem;"><?php echo leapux_icon( 'check-circle', 16 ); ?> <?php echo esc_html( $f ); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>
            <h4 style="text-align:center;font-weight:700;margin-bottom:1.5rem;">Individual AI Add-Ons</h4>
            <div class="addons-grid">
                <?php foreach ( $addons as $addon ) : ?>
                <div class="addon-card">
                    <div class="addon-card-header">
                        <?php echo leapux_icon( $addon['icon'], 20 ); ?>
                        <span><?php echo esc_html( $addon['name'] ); ?></span>
                    </div>
                    <div class="addon-price"><?php echo esc_html( $addon['price'] ); ?></div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Why Work With Us -->
    <section style="padding: 5rem 0; background: var(--leap-white);">
        <div class="container" style="max-width: 64rem;">
            <div class="two-col-grid">
                <div>
                    <span class="section-label">Why Work With Us</span>
                    <h2 style="margin-bottom: 1.5rem;">Practical AI that delivers real results</h2>
                </div>
                <div style="display:flex;flex-direction:column;gap:1rem;">
                    <?php foreach ( $why_items as $wi ) : ?>
                    <div style="display:flex;align-items:center;gap:1rem;background:var(--slate-50);padding:1.25rem;border-radius:0.75rem;border:1px solid var(--slate-200);">
                        <?php echo leapux_icon( 'shield', 20 ); ?>
                        <span style="font-weight:500;"><?php echo esc_html( $wi ); ?></span>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Lead Form -->
    <section id="get-started" class="lead-form-section">
        <div class="container">
            <div class="lead-form-container">
                <h2>Let's Talk About Your AI Opportunity</h2>
                <form class="lead-form" method="post" action="#">
                    <div class="form-row" style="margin-bottom:1.5rem;">
                        <div class="form-group"><label class="form-label">Full Name *</label><input class="form-input" type="text" name="fullName" placeholder="Your name"></div>
                        <div class="form-group"><label class="form-label">Work Email *</label><input class="form-input" type="email" name="workEmail" placeholder="you@company.com"></div>
                    </div>
                    <div class="form-row" style="margin-bottom:1.5rem;">
                        <div class="form-group"><label class="form-label">Organization *</label><input class="form-input" type="text" name="organization" placeholder="Company name"></div>
                        <div class="form-group"><label class="form-label">Role / Title *</label><input class="form-input" type="text" name="role" placeholder="Your role"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Organization Type *</label>
                        <select class="form-select" name="organizationType">
                            <option value="">Select type</option>
                            <option>SaaS</option><option>Enterprise</option><option>Government / Public Sector</option><option>Non-profit</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Primary Goal (select all that apply) *</label>
                        <div class="checkbox-group">
                            <?php foreach ( $goals as $goal ) : ?>
                            <label class="checkbox-label"><input type="checkbox" name="goals[]" value="<?php echo esc_attr( $goal ); ?>"> <span style="color:var(--slate-700);"><?php echo esc_html( $goal ); ?></span></label>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Which service are you interested in? *</label>
                        <select class="form-select" name="serviceInterest">
                            <option value="">Select service</option>
                            <?php foreach ( $services as $svc ) : ?>
                            <option><?php echo esc_html( $svc ); ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Brief description of your challenge (optional)</label>
                        <textarea class="form-textarea" name="challenge" rows="4" placeholder="Tell us about your current challenges or goals..."></textarea>
                    </div>
                    <label class="consent-label">
                        <input type="checkbox" name="consent">
                        <span>I agree to be contacted about my inquiry. *</span>
                    </label>
                    <button type="submit" class="btn btn-primary" style="width:100%;font-size:1.125rem;">👉 Request a Consultation</button>
                    <p style="text-align:center;font-size:0.875rem;color:var(--slate-500);margin-top:1rem;">No spam. No obligation. We'll review your needs and recommend the right next step.</p>
                </form>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
