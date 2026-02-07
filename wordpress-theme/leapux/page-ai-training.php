<?php
/**
 * Template for AI Training page (slug: ai-training)
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in" style="background: var(--leap-light);">

    <!-- Hero -->
    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000" alt="AI Training">
            <div style="position:absolute;inset:0;background:rgba(0,0,0,0.5);"></div>
        </div>
        <div class="container hero-content">
            <h1>AI Training &amp; Enablement</h1>
            <p class="hero-subtitle" style="max-width: 48rem;">
                Design, Strategy, and AI—Working Better Together. We help businesses move beyond AI hype and into practical, human-centered AI adoption.
            </p>
            <div class="hero-actions">
                <a href="#get-started" class="btn btn-primary">Get Started →</a>
                <a href="#programs" class="btn btn-outline">View Programs</a>
            </div>
        </div>
    </section>

    <!-- Intro -->
    <section style="padding: 4rem 0; background: #F8FAFC;">
        <div class="container max-w-4xl text-center">
            <p class="text-xl text-slate-700 leading-relaxed">
                Our AI training blends <strong>UX, digital transformation, and applied AI</strong> to help teams think, design, and work differently.
            </p>
        </div>
    </section>

    <!-- Why AI Training Matters -->
    <section class="section section-white">
        <div class="container max-w-5xl">
            <div class="text-center mb-12">
                <h2>Why AI Training Matters Now</h2>
                <p class="text-lg text-slate-600 mt-4">Organizations that invest in AI capability today are:</p>
            </div>
            <div class="grid grid-3 mb-12">
                <?php
                $why_matters = array(
                    'Making faster, more informed decisions',
                    'Designing better digital experiences for customers and employees',
                    'Automating low-value work while augmenting human expertise',
                    'Attracting and retaining top talent',
                    'Staying competitive as markets and expectations shift',
                );
                foreach ( $why_matters as $item ) : ?>
                <div class="check-item" style="background:#F8FAFC;padding:1.25rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span class="text-slate-700"><?php echo esc_html( $item ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
            <div style="background:linear-gradient(135deg,rgba(233,131,47,0.1),rgba(216,84,44,0.1));border:1px solid rgba(233,131,47,0.2);border-radius:var(--radius-2xl);padding:2rem;text-align:center;">
                <p class="text-lg text-slate-700 mb-4">
                    Those that don't risk falling behind—not because AI replaces people, but because <strong>people using AI will outperform those who don't.</strong>
                </p>
                <p class="text-xl font-bold mb-6">AI training is no longer optional. It's a core digital competency.</p>
                <a href="#get-started" class="btn btn-primary">Build Your Team's AI Capabilities →</a>
            </div>
        </div>
    </section>

    <!-- Our Approach -->
    <section class="section" style="padding: 5rem 0; background: #F8FAFC;">
        <div class="container max-w-5xl">
            <div class="grid grid-2 grid-align-center">
                <div>
                    <h2 style="margin-bottom:1.5rem;">Our Approach: Human-Centered AI Enablement</h2>
                    <p class="text-lg text-slate-600 mb-8">Unlike generic AI courses, our training is:</p>
                    <div class="icon-list">
                        <?php
                        $approach = array(
                            'Role-based (executives, managers, designers, developers, operations)',
                            'Experience-driven (rooted in UX and service design principles)',
                            'Strategic and practical (from vision to execution)',
                            'Tool-agnostic (focused on outcomes, not vendors)',
                        );
                        foreach ( $approach as $a ) : ?>
                        <div class="icon-list-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                            <span class="text-slate-700"><?php echo esc_html( $a ); ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div style="background:var(--leap-white);padding:2rem;border-radius:var(--radius-2xl);border:1px solid var(--border-color);box-shadow:0 10px 25px rgba(0,0,0,0.08);">
                    <p class="text-xl text-slate-700 leading-relaxed">
                        We help teams understand not just <strong>how</strong> to use AI—but <strong>when</strong>, <strong>why</strong>, and <strong>where</strong> it creates real value.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs -->
    <section id="programs" class="section section-white">
        <div class="container max-w-6xl">
            <div class="text-center mb-16">
                <h2>AI Training Programs We Offer</h2>
            </div>

            <?php
            $programs = array(
                array(
                    'title'    => 'AI Foundations: Understanding AI Today and Tomorrow',
                    'subtitle' => 'Learn how AI works—and how to think about it strategically',
                    'desc'     => 'This foundational training demystifies AI for non-technical and technical audiences alike.',
                    'items'    => array( 'What AI is (and isn\'t): machine learning, generative AI, automation', 'How AI systems learn, reason, and generate outputs', 'Current capabilities and limitations', 'Ethical, legal, and UX implications of AI', 'How AI is expected to evolve in the next 3–5 years' ),
                    'label'    => 'What participants learn',
                    'value'    => 'Builds AI literacy across your organization so teams can make informed decisions, ask better questions, and reduce risk.',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
                ),
                array(
                    'title'    => 'AI Strategy & Readiness Assessment',
                    'subtitle' => 'Identify the right AI strategy for your organization',
                    'desc'     => 'Not every business needs the same AI solutions. We assess where AI makes sense—and where it doesn\'t.',
                    'items'    => array( 'Business goals and operational challenges', 'Data maturity and infrastructure', 'User and customer experience opportunities', 'Risk, compliance, and governance considerations', 'Organizational readiness and skill gaps' ),
                    'label'    => 'What we assess',
                    'value'    => 'Avoids wasted investment and ensures AI initiatives are aligned to real business and user needs.',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
                ),
                array(
                    'title'    => 'Applied AI Tools Training',
                    'subtitle' => 'Hands-on training with the tools that matter most',
                    'desc'     => 'Based on your assessment, we deliver practical training on the AI tools your teams will actually use.',
                    'items'    => array( 'Generative AI tools (e.g., copilots, content generation, research)', 'Workflow automation and no-code/low-code AI platforms', 'AI for design, research, and UX optimization', 'AI for analytics, insights, and decision support' ),
                    'label'    => 'Common areas include',
                    'value'    => 'Accelerates adoption, increases productivity, and ensures tools are used responsibly and effectively.',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
                ),
                array(
                    'title'    => 'Building Your Own AI-Powered Applications',
                    'subtitle' => 'From idea to working prototype',
                    'desc'     => 'For teams ready to go deeper, we offer training on building custom AI-enabled solutions.',
                    'items'    => array( 'Designing AI-powered user experiences', 'Prompt engineering and model interaction', 'Using APIs and platforms to integrate AI', 'Prototyping and testing AI features', 'Governance, monitoring, and continuous improvement' ),
                    'label'    => 'What participants learn',
                    'value'    => 'Empowers internal teams to innovate faster while maintaining control over data, UX, and outcomes.',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
                ),
                array(
                    'title'    => 'Responsible & Ethical AI by Design',
                    'subtitle' => 'Build trust into every AI experience',
                    'desc'     => 'AI changes how users experience transparency, fairness, and control. We help teams design responsibly.',
                    'items'    => array( 'Bias and fairness in AI systems', 'Explainability and transparency', 'Human-in-the-loop design', 'Accessibility and inclusive AI', 'Governance and accountability models' ),
                    'label'    => 'Topics include',
                    'value'    => 'Reduces risk, strengthens trust, and aligns AI use with organizational values and regulations.',
                    'icon'     => '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
                ),
            );

            foreach ( $programs as $i => $prog ) : ?>
            <div class="offer-card">
                <div class="offer-header">
                    <div class="offer-icon"><?php echo $prog['icon']; ?></div>
                    <div>
                        <span class="offer-number">Program <?php echo $i + 1; ?></span>
                        <h3><?php echo esc_html( $prog['title'] ); ?></h3>
                    </div>
                </div>
                <p class="text-lg font-medium text-slate-700 mb-4"><?php echo esc_html( $prog['subtitle'] ); ?></p>
                <p class="text-slate-600 mb-6"><?php echo esc_html( $prog['desc'] ); ?></p>

                <div class="mb-6">
                    <h4 class="font-semibold mb-4"><?php echo esc_html( $prog['label'] ); ?>:</h4>
                    <ul class="icon-list">
                        <?php foreach ( $prog['items'] as $item ) : ?>
                        <li class="icon-list-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            <span class="text-slate-600"><?php echo esc_html( $item ); ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <div class="value-box">
                    <p class="text-slate-700"><strong>Value: </strong><?php echo esc_html( $prog['value'] ); ?></p>
                </div>
            </div>
            <?php endforeach; ?>

            <div class="text-center pt-8">
                <p class="text-lg text-slate-600 mb-6">Ready to explore which program is right for your organization?</p>
                <a href="#get-started" class="btn btn-primary">Find the Right Program →</a>
            </div>
        </div>
    </section>

    <!-- Who This Is For -->
    <section class="section" style="padding: 5rem 0; background: #F8FAFC;">
        <div class="container max-w-5xl">
            <div class="text-center mb-12">
                <h2>Who This Training Is For</h2>
            </div>
            <div class="grid grid-3 mb-8">
                <?php
                $audiences = array(
                    'Executives and leadership teams',
                    'Digital, innovation, and transformation leaders',
                    'UX, product, and design teams',
                    'IT and engineering teams',
                    'Operations, HR, marketing, and policy teams',
                );
                foreach ( $audiences as $audience ) : ?>
                <div class="check-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span class="text-slate-700"><?php echo esc_html( $audience ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
            <p class="text-center text-slate-600 mb-8" style="font-style:italic;">Programs are customized for private sector, public sector, and non-profit organizations.</p>
            <div class="text-center">
                <a href="#get-started" class="btn btn-dark">Schedule a Consultation →</a>
            </div>
        </div>
    </section>

    <!-- Why Invest -->
    <section class="section section-dark">
        <div class="container max-w-5xl">
            <div class="text-center mb-12">
                <h2 style="color: var(--leap-white);">Why Invest in AI Training with LeapUX</h2>
            </div>
            <div class="grid grid-3 mb-12">
                <?php
                $invest = array(
                    'Get ahead of change instead of reacting to it',
                    'Augment human skills, not replace them',
                    'Increase ROI on digital and AI investments',
                    'Reduce risk through better understanding and governance',
                    'Design better experiences for customers and employees',
                );
                foreach ( $invest as $item ) : ?>
                <div style="display:flex;align-items:flex-start;gap:0.75rem;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:1.25rem;border-radius:var(--radius-xl);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--leap-orange)" stroke-width="2" style="flex-shrink:0;margin-top:2px;"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    <span class="text-slate-300"><?php echo esc_html( $item ); ?></span>
                </div>
                <?php endforeach; ?>
            </div>
            <p class="text-center text-xl text-white mb-10">
                AI success isn't about technology alone—it's about <strong style="color:var(--leap-orange);">people, processes, and experiences</strong> working together.
            </p>
            <div class="text-center">
                <a href="#get-started" class="btn btn-primary" style="padding:1.5rem 3.5rem;letter-spacing:0.3em;box-shadow:0 15px 35px rgba(233,131,47,0.3);">Start Your AI Journey →</a>
            </div>
        </div>
    </section>

    <!-- Funding -->
    <section class="section section-gradient-orange">
        <div class="container max-w-4xl text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="margin:0 auto 1.5rem;"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <h2 style="color:var(--leap-white);margin-bottom:1rem;">Funding &amp; Grants May Be Available</h2>
            <p class="text-xl mb-6" style="color:rgba(255,255,255,0.9);">Did you know that provincial and federal grants may help cover the cost of AI training?</p>
            <p class="text-lg mb-8" style="color:rgba(255,255,255,0.8);">Many organizations qualify for workforce development, innovation, and digital adoption funding programs.</p>
            <div class="funding-card">
                <h3>We can help:</h3>
                <ul class="icon-list icon-list-white">
                    <li class="icon-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Assess your eligibility</span></li>
                    <li class="icon-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Align training with funding criteria</span></li>
                    <li class="icon-list-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Support documentation and justification</span></li>
                </ul>
            </div>
            <p style="color:rgba(255,255,255,0.9);margin-top:2rem;" class="text-lg">Get in touch with us to see how your AI training investment could be funded.</p>
        </div>
    </section>

    <!-- Lead Form -->
    <section id="get-started" class="section section-white">
        <div class="container max-w-4xl">
            <div class="text-center mb-12">
                <h2>Get Started: Talk to an AI Training Specialist</h2>
                <p class="text-lg text-slate-600 mt-4">Fill out the form below and we'll contact you to discuss your goals, challenges, and next steps.</p>
                <p class="text-sm text-slate-500 mt-4">Required fields are marked with *</p>
            </div>
            <form method="post" action="#" class="form-card">
                <h3 class="form-section-title">Contact Information</h3>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Full Name *</label>
                        <input type="text" name="full_name" class="form-input" required>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Job Title *</label>
                        <input type="text" name="job_title" class="form-input" required>
                    </div>
                </div>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Work Email *</label>
                        <input type="email" name="work_email" class="form-input" required>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Phone Number</label>
                        <input type="tel" name="phone" class="form-input">
                    </div>
                </div>

                <h3 class="form-section-title">Organization Information</h3>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Organization Name *</label>
                        <input type="text" name="org_name" class="form-input" required>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Industry / Sector *</label>
                        <input type="text" name="industry" class="form-input" required>
                    </div>
                </div>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Organization Size *</label>
                        <select name="org_size" class="form-select" required>
                            <option value="">Select size</option>
                            <option>1–10</option>
                            <option>11–50</option>
                            <option>51–200</option>
                            <option>200+</option>
                        </select>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Location *</label>
                        <input type="text" name="location" class="form-input" required>
                    </div>
                </div>

                <h3 class="form-section-title">AI &amp; Training Needs</h3>
                <div class="form-group">
                    <label class="form-label">Primary challenge or opportunity *</label>
                    <textarea name="challenge" class="form-textarea" rows="3" required></textarea>
                </div>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Current level of AI adoption *</label>
                        <select name="ai_adoption" class="form-select" required>
                            <option value="">Select level</option>
                            <option>None</option>
                            <option>Exploring</option>
                            <option>Piloting</option>
                            <option>Actively Using</option>
                        </select>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Desired timeline</label>
                        <select name="timeline" class="form-select">
                            <option value="">Select timeline</option>
                            <option>Immediate</option>
                            <option>3–6 months</option>
                            <option>6–12 months</option>
                        </select>
                    </div>
                </div>

                <h3 class="form-section-title">Funding &amp; Budget</h3>
                <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="form-group mb-0">
                        <label class="form-label">Interested in exploring grants? *</label>
                        <select name="funding" class="form-select" required>
                            <option value="">Select option</option>
                            <option>Yes</option>
                            <option>Not sure</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div class="form-group mb-0">
                        <label class="form-label">Estimated budget range (Optional)</label>
                        <input type="text" name="budget" class="form-input" placeholder="e.g., $5,000 - $15,000">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-checkbox-label">
                        <input type="checkbox" required>
                        <span class="text-slate-700">I agree to be contacted by LeapUX regarding AI training and related services *</span>
                    </label>
                </div>

                <button type="submit" class="btn btn-primary" style="width:100%;">Submit Request</button>
            </form>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="section" style="padding: 5rem 0; background: #F8FAFC;">
        <div class="container max-w-3xl text-center">
            <h2 style="margin-bottom: 1.5rem;">Let's Build Your AI Capability—Together</h2>
            <p class="text-lg text-slate-600 mb-8">
                AI is reshaping how organizations operate, design, and compete. With the right training, your teams can lead that change with confidence.
            </p>
            <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Contact LeapUX Today</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
