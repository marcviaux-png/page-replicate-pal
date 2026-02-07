<?php
/**
 * Template Name: AI Training
 * Template for AI Training & Enablement page — matches AITraining.tsx exactly.
 *
 * @package LeapUX
 */

get_header();

$why_matters = array(
    'Making faster, more informed decisions',
    'Designing better digital experiences for customers and employees',
    'Automating low-value work while augmenting human expertise',
    'Attracting and retaining top talent',
    'Staying competitive as markets and expectations shift',
);

$approach = array(
    'Role-based (executives, managers, designers, developers, operations)',
    'Experience-driven (rooted in UX and service design principles)',
    'Strategic and practical (from vision to execution)',
    'Tool-agnostic (focused on outcomes, not vendors)',
);

$programs = array(
    array(
        'icon'     => 'lightbulb',
        'title'    => 'AI Foundations: Understanding AI Today and Tomorrow',
        'subtitle' => 'Learn how AI works—and how to think about it strategically',
        'desc'     => 'This foundational training demystifies AI for non-technical and technical audiences alike.',
        'items_label' => 'What participants learn:',
        'items'    => array( 'What AI is (and isn\'t): machine learning, generative AI, automation', 'How AI systems learn, reason, and generate outputs', 'Current capabilities and limitations', 'Ethical, legal, and UX implications of AI', 'How AI is expected to evolve in the next 3–5 years' ),
        'value'    => 'Builds AI literacy across your organization so teams can make informed decisions, ask better questions, and reduce risk.',
    ),
    array(
        'icon'     => 'target',
        'title'    => 'AI Strategy & Readiness Assessment',
        'subtitle' => 'Identify the right AI strategy for your organization',
        'desc'     => 'Not every business needs the same AI solutions. We assess where AI makes sense—and where it doesn\'t.',
        'items_label' => 'What we assess:',
        'items'    => array( 'Business goals and operational challenges', 'Data maturity and infrastructure', 'User and customer experience opportunities', 'Risk, compliance, and governance considerations', 'Organizational readiness and skill gaps' ),
        'extras_label' => 'Outputs:',
        'extras'   => array( 'AI opportunity map', 'Prioritized use cases', 'Recommended tools, platforms, and approaches', 'A realistic AI adoption roadmap' ),
        'value'    => 'Avoids wasted investment and ensures AI initiatives are aligned to real business and user needs.',
    ),
    array(
        'icon'     => 'wrench',
        'title'    => 'Applied AI Tools Training',
        'subtitle' => 'Hands-on training with the tools that matter most',
        'desc'     => 'Based on your assessment, we deliver practical training on the AI tools your teams will actually use.',
        'items_label' => 'Common areas include:',
        'items'    => array( 'Generative AI tools (e.g., copilots, content generation, research)', 'Workflow automation and no-code/low-code AI platforms', 'AI for design, research, and UX optimization', 'AI for analytics, insights, and decision support' ),
        'value'    => 'Accelerates adoption, increases productivity, and ensures tools are used responsibly and effectively.',
    ),
    array(
        'icon'     => 'code',
        'title'    => 'Building Your Own AI-Powered Applications',
        'subtitle' => 'From idea to working prototype',
        'desc'     => 'For teams ready to go deeper, we offer training on building custom AI-enabled solutions.',
        'items_label' => 'What participants learn:',
        'items'    => array( 'Designing AI-powered user experiences', 'Prompt engineering and model interaction', 'Using APIs and platforms to integrate AI', 'Prototyping and testing AI features', 'Governance, monitoring, and continuous improvement' ),
        'formats'  => array( 'Workshops', 'Team-based labs', 'Guided pilots' ),
        'value'    => 'Empowers internal teams to innovate faster while maintaining control over data, UX, and outcomes.',
    ),
    array(
        'icon'     => 'shield',
        'title'    => 'Responsible & Ethical AI by Design',
        'subtitle' => 'Build trust into every AI experience',
        'desc'     => 'AI changes how users experience transparency, fairness, and control. We help teams design responsibly.',
        'items_label' => 'Topics include:',
        'items'    => array( 'Bias and fairness in AI systems', 'Explainability and transparency', 'Human-in-the-loop design', 'Accessibility and inclusive AI', 'Governance and accountability models' ),
        'value'    => 'Reduces risk, strengthens trust, and aligns AI use with organizational values and regulations.',
    ),
);

$audiences = array( 'Executives and leadership teams', 'Digital, innovation, and transformation leaders', 'UX, product, and design teams', 'IT and engineering teams', 'Operations, HR, marketing, and policy teams' );

$why_invest = array(
    'Get ahead of change instead of reacting to it',
    'Augment human skills, not replace them',
    'Increase ROI on digital and AI investments',
    'Reduce risk through better understanding and governance',
    'Design better experiences for customers and employees',
);

$program_options = array(
    'AI Foundations: Understanding AI Today and Tomorrow',
    'AI Strategy & Readiness Assessment',
    'Applied AI Tools Training',
    'Building Your Own AI-Powered Applications',
    'Responsible & Ethical AI by Design',
);
?>

<div class="animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <div class="page-hero hero-ai-training">
        <div class="hero-bg">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/hero-ai-training.jpg' ); ?>" alt="AI Training">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div style="max-width: 48rem;">
                <h1>AI Training & Enablement</h1>
                <p style="margin-bottom: 2rem;">Design, Strategy, and AI—Working Better Together. We help businesses move beyond AI hype and into practical, human-centered AI adoption.</p>
                <div style="display:flex;flex-wrap:wrap;gap:1rem;">
                    <a href="#get-started" class="btn btn-primary">Get Started <?php echo leapux_icon( 'arrow-right', 20 ); ?></a>
                    <a href="#programs" class="btn btn-outline">View Programs</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Intro -->
    <section style="padding: 4rem 0; background: var(--slate-50);">
        <div class="container" style="max-width: 56rem; text-align: center;">
            <p style="font-size: 1.25rem; color: var(--slate-700); line-height: 1.7;">Our AI training blends <strong>UX, digital transformation, and applied AI</strong> to help teams think, design, and work differently.</p>
        </div>
    </section>

    <!-- Why AI Training Matters -->
    <section style="padding: 5rem 0; background: var(--leap-white);">
        <div class="container" style="max-width: 64rem;">
            <div class="text-center mb-12">
                <h2 style="margin-bottom: 1rem;">Why AI Training Matters Now</h2>
                <p style="font-size: 1.125rem; color: var(--slate-600);">Organizations that invest in AI capability today are:</p>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-bottom:3rem;">
                <?php foreach ( $why_matters as $wm ) : ?>
                <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:1.25rem;background:var(--slate-50);border-radius:0.75rem;">
                    <?php echo leapux_icon( 'check-circle' ); ?> <span style="color:var(--slate-700);"><?php echo esc_html( $wm ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
            <div style="background:linear-gradient(135deg,rgba(232,129,47,0.1),rgba(217,75,45,0.1));border:1px solid rgba(232,129,47,0.2);border-radius:1rem;padding:2rem;text-align:center;">
                <p style="font-size:1.125rem;color:var(--slate-700);margin-bottom:1rem;">Those that don't risk falling behind—not because AI replaces people, but because <strong>people using AI will outperform those who don't.</strong></p>
                <p style="font-size:1.25rem;font-weight:700;margin-bottom:1.5rem;">AI training is no longer optional. It's a core digital competency.</p>
                <a href="#get-started" class="btn btn-primary btn-sm">Build Your Team's AI Capabilities <?php echo leapux_icon( 'arrow-right', 16 ); ?></a>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section style="padding: 5rem 0; background: var(--slate-50);">
        <div class="container" style="max-width: 64rem;">
            <div class="two-col-grid">
                <div>
                    <h2 style="margin-bottom: 1.5rem;">Our Approach: Human-Centered AI Enablement</h2>
                    <p style="font-size:1.125rem;color:var(--slate-600);margin-bottom:2rem;">Unlike generic AI courses, our training is:</p>
                    <div style="display:flex;flex-direction:column;gap:1rem;">
                        <?php foreach ( $approach as $a ) : ?>
                        <div style="display:flex;align-items:flex-start;gap:0.75rem;">
                            <?php echo leapux_icon( 'sparkles', 20 ); ?> <span style="color:var(--slate-700);"><?php echo esc_html( $a ); ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div style="background:var(--leap-white);padding:2rem;border-radius:1rem;border:1px solid var(--slate-200);box-shadow:0 10px 25px rgba(0,0,0,0.08);">
                    <p style="font-size:1.25rem;color:var(--slate-700);line-height:1.7;">We help teams understand not just <strong>how</strong> to use AI—but <strong>when</strong>, <strong>why</strong>, and <strong>where</strong> it creates real value.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs -->
    <section id="programs" style="padding: 5rem 0; background: var(--leap-white);">
        <div class="container" style="max-width: 72rem;">
            <div class="text-center mb-16"><h2>AI Training Programs We Offer</h2></div>
            <?php foreach ( $programs as $i => $prog ) : ?>
            <div class="program-card">
                <div class="program-card-header">
                    <div class="icon-box icon-box-lg"><?php echo leapux_icon( $prog['icon'], 28 ); ?></div>
                    <div>
                        <span class="program-number">Program <?php echo $i + 1; ?></span>
                        <h3 style="font-size:1.5rem;"><?php echo esc_html( $prog['title'] ); ?></h3>
                    </div>
                </div>
                <p style="font-size:1.125rem;font-weight:500;color:var(--slate-700);margin-bottom:0.5rem;"><?php echo esc_html( $prog['subtitle'] ); ?></p>
                <p style="color:var(--slate-600);margin-bottom:1.5rem;"><?php echo esc_html( $prog['desc'] ); ?></p>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-bottom:1.5rem;">
                    <div>
                        <h4 style="font-weight:600;margin-bottom:0.75rem;"><?php echo esc_html( $prog['items_label'] ); ?></h4>
                        <ul style="list-style:none;padding:0;">
                            <?php foreach ( $prog['items'] as $item ) : ?>
                            <li style="display:flex;align-items:flex-start;gap:0.5rem;color:var(--slate-600);margin-bottom:0.5rem;"><?php echo leapux_icon( 'arrow-right', 16 ); ?> <?php echo esc_html( $item ); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php if ( ! empty( $prog['extras'] ) ) : ?>
                    <div>
                        <h4 style="font-weight:600;margin-bottom:0.75rem;"><?php echo esc_html( $prog['extras_label'] ); ?></h4>
                        <ul style="list-style:none;padding:0;">
                            <?php foreach ( $prog['extras'] as $ext ) : ?>
                            <li style="display:flex;align-items:flex-start;gap:0.5rem;color:var(--slate-600);margin-bottom:0.5rem;"><?php echo leapux_icon( 'arrow-right', 16 ); ?> <?php echo esc_html( $ext ); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php endif; ?>
                </div>
                <?php if ( ! empty( $prog['formats'] ) ) : ?>
                <div style="margin-bottom:1.5rem;">
                    <h4 style="font-weight:600;margin-bottom:0.5rem;">Formats:</h4>
                    <?php foreach ( $prog['formats'] as $fmt ) : ?>
                    <span class="format-tag"><?php echo esc_html( $fmt ); ?></span>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
                <div class="program-value-box">
                    <p style="color:var(--slate-700);"><strong>Value: </strong><?php echo esc_html( $prog['value'] ); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
            <div class="text-center" style="padding-top:2rem;">
                <p style="font-size:1.125rem;color:var(--slate-600);margin-bottom:1.5rem;">Ready to explore which program is right for your organization?</p>
                <a href="#get-started" class="btn btn-primary">Find the Right Program <?php echo leapux_icon( 'arrow-right', 20 ); ?></a>
            </div>
        </div>
    </section>

    <!-- Who This Is For -->
    <section style="padding: 5rem 0; background: var(--slate-50);">
        <div class="container" style="max-width: 64rem;">
            <div class="text-center mb-12"><h2>Who This Training Is For</h2></div>
            <div class="audience-grid" style="margin-bottom:2rem;">
                <?php foreach ( $audiences as $aud ) : ?>
                <div class="audience-card"><?php echo leapux_icon( 'users', 20 ); ?> <span style="color:var(--slate-700);"><?php echo esc_html( $aud ); ?></span></div>
                <?php endforeach; ?>
            </div>
            <p style="text-align:center;color:var(--slate-600);font-style:italic;margin-bottom:2rem;">Programs are customized for private sector, public sector, and non-profit organizations.</p>
            <div class="text-center"><a href="#get-started" class="btn btn-dark btn-sm">Schedule a Consultation <?php echo leapux_icon( 'arrow-right', 16 ); ?></a></div>
        </div>
    </section>

    <!-- Why Invest -->
    <section style="padding: 5rem 0; background: var(--leap-black);">
        <div class="container" style="max-width: 64rem;">
            <div class="text-center mb-12"><h2 style="color:var(--leap-white);">Why Invest in AI Training with LeapUX</h2></div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-bottom:3rem;">
                <?php foreach ( $why_invest as $wi ) : ?>
                <div class="why-invest-card"><?php echo leapux_icon( 'trending-up', 20 ); ?> <span><?php echo esc_html( $wi ); ?></span></div>
                <?php endforeach; ?>
            </div>
            <p style="text-align:center;font-size:1.25rem;color:var(--leap-white);margin-bottom:2.5rem;">AI success isn't about technology alone—it's about <strong style="color:var(--leap-orange);">people, processes, and experiences</strong> working together.</p>
            <div class="text-center"><a href="#get-started" class="btn btn-primary btn-lg">Start Your AI Journey <?php echo leapux_icon( 'arrow-right', 20 ); ?></a></div>
        </div>
    </section>

    <!-- Funding -->
    <section class="funding-section">
        <div class="container" style="max-width: 56rem; text-align: center;">
            <div style="color:var(--leap-white);"><?php echo leapux_icon( 'dollar-sign', 64 ); ?></div>
            <h2 style="color:var(--leap-white);margin:1.5rem 0 1rem;">Funding & Grants May Be Available</h2>
            <p style="font-size:1.25rem;color:rgba(255,255,255,0.9);margin-bottom:1.5rem;">Did you know that provincial and federal grants may help cover the cost of AI training?</p>
            <p style="font-size:1.125rem;color:rgba(255,255,255,0.8);margin-bottom:2rem;">Many organizations qualify for workforce development, innovation, and digital adoption funding programs.</p>
            <div class="funding-help-box">
                <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem;">We can help:</h3>
                <ul style="list-style:none;padding:0;">
                    <li style="display:flex;align-items:flex-start;gap:0.75rem;color:rgba(255,255,255,0.9);margin-bottom:0.75rem;"><?php echo leapux_icon( 'check-circle', 20 ); ?> Assess your eligibility</li>
                    <li style="display:flex;align-items:flex-start;gap:0.75rem;color:rgba(255,255,255,0.9);margin-bottom:0.75rem;"><?php echo leapux_icon( 'check-circle', 20 ); ?> Align training with funding criteria</li>
                    <li style="display:flex;align-items:flex-start;gap:0.75rem;color:rgba(255,255,255,0.9);"><?php echo leapux_icon( 'check-circle', 20 ); ?> Support documentation and justification</li>
                </ul>
            </div>
            <p style="color:rgba(255,255,255,0.9);margin-top:2rem;font-size:1.125rem;">Get in touch with us to see how your AI training investment could be funded.</p>
        </div>
    </section>

    <!-- Lead Form -->
    <section id="get-started" style="padding: 5rem 0; background: var(--leap-white);">
        <div class="container" style="max-width: 56rem;">
            <div class="text-center mb-12">
                <h2 style="margin-bottom: 1rem;">Get Started: Talk to an AI Training Specialist</h2>
                <p style="font-size:1.125rem;color:var(--slate-600);">Fill out the form below and we'll contact you to discuss your goals, challenges, and next steps.</p>
                <p style="font-size:0.875rem;color:var(--slate-500);margin-top:0.5rem;">Required fields are marked with *</p>
            </div>
            <form style="background:var(--slate-50);border-radius:1rem;padding:2rem 2.5rem;border:1px solid var(--slate-200);" method="post" action="#">
                <h3 class="form-section-title">Contact Information</h3>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group"><label class="form-label">Full Name *</label><input class="form-input" type="text" name="fullName"></div>
                    <div class="form-group"><label class="form-label">Job Title *</label><input class="form-input" type="text" name="jobTitle"></div>
                </div>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group"><label class="form-label">Work Email *</label><input class="form-input" type="email" name="workEmail"></div>
                    <div class="form-group"><label class="form-label">Phone Number</label><input class="form-input" type="tel" name="phone"></div>
                </div>

                <h3 class="form-section-title" style="margin-top:2.5rem;">Organization Information</h3>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group"><label class="form-label">Organization Name *</label><input class="form-input" type="text" name="organizationName"></div>
                    <div class="form-group"><label class="form-label">Industry / Sector *</label><input class="form-input" type="text" name="industry"></div>
                </div>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group">
                        <label class="form-label">Organization Size *</label>
                        <select class="form-select" name="organizationSize"><option value="">Select size</option><option>1–10</option><option>11–50</option><option>51–200</option><option>200+</option></select>
                    </div>
                    <div class="form-group"><label class="form-label">Location *</label><input class="form-input" type="text" name="location"></div>
                </div>

                <h3 class="form-section-title" style="margin-top:2.5rem;">AI & Training Needs</h3>
                <div class="form-group">
                    <label class="form-label">Primary challenge or opportunity *</label>
                    <textarea class="form-textarea" name="primaryChallenge" rows="3" style="min-height:5rem;"></textarea>
                </div>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group">
                        <label class="form-label">Current level of AI adoption *</label>
                        <select class="form-select" name="aiAdoptionLevel"><option value="">Select level</option><option>None</option><option>Exploring</option><option>Piloting</option><option>Actively Using</option></select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Desired timeline</label>
                        <select class="form-select" name="timeline"><option value="">Select timeline</option><option>Immediate</option><option>3–6 months</option><option>6–12 months</option></select>
                    </div>
                </div>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group"><label class="form-label">Teams or roles you want trained *</label><input class="form-input" type="text" name="teamsToTrain" placeholder="e.g., Leadership, IT, Marketing"></div>
                    <div class="form-group">
                        <label class="form-label">AI Training Programs *</label>
                        <div style="border:1px solid var(--slate-200);border-radius:var(--radius);overflow:hidden;">
                            <?php foreach ( $program_options as $po ) : ?>
                            <label style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;border-bottom:1px solid var(--slate-100);cursor:pointer;">
                                <input type="checkbox" name="selectedPrograms[]" value="<?php echo esc_attr( $po ); ?>" style="margin-top:0.25rem;width:1rem;height:1rem;accent-color:var(--leap-orange);">
                                <span style="font-size:0.875rem;color:var(--slate-700);"><?php echo esc_html( $po ); ?></span>
                            </label>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>

                <h3 class="form-section-title" style="margin-top:2.5rem;">Funding & Budget</h3>
                <div class="form-row" style="margin-bottom:1.5rem;">
                    <div class="form-group">
                        <label class="form-label">Interested in exploring grants or funding? *</label>
                        <select class="form-select" name="fundingInterest"><option value="">Select option</option><option>Yes</option><option>Not sure</option><option>No</option></select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Estimated budget range (Optional)</label>
                        <input class="form-input" type="text" name="budgetRange" placeholder="e.g., $5,000 - $15,000">
                    </div>
                </div>

                <label class="consent-label">
                    <input type="checkbox" name="consent">
                    <span style="color:var(--slate-700);">I agree to be contacted by LeapUX regarding AI training and related services *</span>
                </label>
                <button type="submit" class="btn btn-primary" style="width:100%;font-size:1.125rem;">Submit Request</button>
            </form>
        </div>
    </section>

    <!-- Final CTA -->
    <section style="padding: 5rem 0; background: var(--slate-50);">
        <div class="container" style="max-width: 48rem; text-align: center;">
            <h2 style="margin-bottom: 1.5rem;">Let's Build Your AI Capability—Together</h2>
            <p style="font-size:1.125rem;color:var(--slate-600);margin-bottom:2rem;">AI is reshaping how organizations operate, design, and compete. With the right training, your teams can lead that change with confidence.</p>
            <?php $contact = get_page_by_path( 'contact' ); ?>
            <a href="<?php echo $contact ? esc_url( get_permalink( $contact ) ) : '#'; ?>" class="btn btn-primary">Contact LeapUX Today</a>
        </div>
    </section>

</div>

<?php get_footer(); ?>
