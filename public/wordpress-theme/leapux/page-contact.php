<?php
/**
 * Template for Contact page (slug: contact)
 *
 * @package LeapUX
 */

get_header(); ?>

<main id="primary" class="site-main animate-in">

    <!-- Hero -->
    <section class="hero hero-page">
        <div class="hero-bg">
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" alt="Contact">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <h1>Let's Talk</h1>
            <p class="hero-subtitle" style="max-width: 48rem;">
                Ready to design a service that works? Get in touch and let's discuss how we can help your organization deliver with confidence.
            </p>
        </div>
    </section>

    <!-- Contact Form -->
    <section class="section section-white">
        <div class="container">
            <div class="grid-2-3">
                <!-- Form -->
                <div>
                    <h2 style="margin-bottom: 1rem;">Tell us about your project</h2>
                    <p class="text-lg text-slate-600 mb-10">Share a few details and we'll reach out to schedule a conversation.</p>

                    <!-- Replace with Contact Form 7 or Gravity Forms shortcode -->
                    <form method="post" action="#" class="contact-form">
                        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div class="form-group mb-0">
                                <label for="first-name" class="form-label">First name</label>
                                <input type="text" id="first-name" name="first_name" placeholder="Your first name" class="form-input" required>
                            </div>
                            <div class="form-group mb-0">
                                <label for="last-name" class="form-label">Last name</label>
                                <input type="text" id="last-name" name="last_name" placeholder="Your last name" class="form-input" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" placeholder="you@organization.com" class="form-input" required>
                        </div>

                        <div class="form-group">
                            <label for="organization" class="form-label">Organization</label>
                            <input type="text" id="organization" name="organization" placeholder="Your organization name" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">How can we help?</label>
                            <textarea id="message" name="message" placeholder="Tell us about your challenge, project, or question..." rows="6" class="form-textarea" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width:100%;max-width:20rem;">
                            Send Message →
                        </button>
                    </form>
                </div>

                <!-- Sidebar -->
                <div style="display:flex;flex-direction:column;gap:1.5rem;">
                    <div class="contact-sidebar-card">
                        <h4>Other ways to reach us</h4>
                        <div class="contact-method">
                            <div class="contact-method-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            </div>
                            <div>
                                <p class="font-medium text-black mb-4">Email us directly</p>
                                <a href="mailto:<?php echo esc_attr( get_theme_mod( 'leapux_email', 'contact@leapux.com' ) ); ?>">
                                    <?php echo esc_html( get_theme_mod( 'leapux_email', 'contact@leapux.com' ) ); ?>
                                </a>
                            </div>
                        </div>
                        <div class="contact-method">
                            <div class="contact-method-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <div>
                                <p class="font-medium text-black mb-4">Call us</p>
                                <a href="tel:<?php echo esc_attr( get_theme_mod( 'leapux_phone', '1-888-553-2789' ) ); ?>">
                                    <?php echo esc_html( get_theme_mod( 'leapux_phone', '1-888-553-2789' ) ); ?>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="contact-sidebar-card">
                        <h4>What happens next?</h4>
                        <?php
                        $steps = array(
                            "We'll review your message and get back to you within 1-2 business days.",
                            "We'll schedule a call to understand your needs and context.",
                            "If there's a fit, we'll propose an approach tailored to your situation."
                        );
                        foreach ( $steps as $i => $step ) : ?>
                        <div class="next-step">
                            <div class="next-step-num"><?php echo $i + 1; ?></div>
                            <p><?php echo esc_html( $step ); ?></p>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
