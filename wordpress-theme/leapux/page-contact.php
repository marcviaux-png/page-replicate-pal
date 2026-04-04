<?php
/**
 * Template Name: Contact
 * Template for the Contact page — matches Contact.tsx exactly.
 *
 * @package LeapUX
 */

get_header();

$next_steps = array(
    "We'll review your message and get back to you within 1-2 business days.",
    "We'll schedule a call to understand your needs and context.",
    "If there's a fit, we'll propose an approach tailored to your situation.",
);
?>

<div class="animate-in">

    <!-- Hero -->
    <div class="page-hero">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" alt="Contact">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div style="max-width: 48rem;">
                <h1>Let's Talk</h1>
                <p>Ready to deliver a service that works? Get in touch and let's discuss how we can help your organization deliver with confidence.</p>
            </div>
        </div>
    </div>

    <!-- Contact Form -->
    <section style="padding: 6rem 0;">
        <div class="container">
            <div class="contact-layout">
                <!-- Form -->
                <div>
                    <h2 style="margin-bottom: 1rem;">Tell us about your project</h2>
                    <p style="font-size: 1.125rem; color: var(--slate-600); margin-bottom: 2.5rem;">Share a few details and we'll reach out to schedule a conversation.</p>

                    <form method="post" action="#">
                        <div class="form-row" style="margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label class="form-label" for="firstName">First name</label>
                                <input class="form-input" type="text" id="firstName" name="firstName" placeholder="Your first name">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="lastName">Last name</label>
                                <input class="form-input" type="text" id="lastName" name="lastName" placeholder="Your last name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-input" type="email" id="email" name="email" placeholder="you@organization.com">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="organization">Organization</label>
                            <input class="form-input" type="text" id="organization" name="organization" placeholder="Your organization name">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="message">How can we help?</label>
                            <textarea class="form-textarea" id="message" name="message" rows="6" placeholder="Tell us about your challenge, project, or question..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: auto;">
                            Send Message <?php echo leapux_icon( 'send', 16 ); ?>
                        </button>
                    </form>
                </div>

                <!-- Sidebar -->
                <div>
                    <div class="contact-sidebar-card">
                        <h4>Other ways to reach us</h4>
                        <div class="contact-info-item">
                            <div class="info-icon"><?php echo leapux_icon( 'mail', 20 ); ?></div>
                            <div>
                                <p style="font-weight: 500; margin-bottom: 0.25rem;">Email us directly</p>
                                <a href="mailto:contact@leapux.com">contact@leapux.com</a>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <div class="info-icon"><?php echo leapux_icon( 'phone', 20 ); ?></div>
                            <div>
                                <p style="font-weight: 500; margin-bottom: 0.25rem;">Call us</p>
                                <a href="tel:1-888-553-2789">1-888-553-2789</a>
                            </div>
                        </div>
                    </div>

                    <div class="contact-sidebar-card">
                        <h4>What happens next?</h4>
                        <?php foreach ( $next_steps as $i => $step ) : ?>
                        <div class="next-step-item">
                            <div class="next-step-number"><?php echo $i + 1; ?></div>
                            <p style="color: var(--slate-600); line-height: 1.7;"><?php echo esc_html( $step ); ?></p>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<?php get_footer(); ?>
