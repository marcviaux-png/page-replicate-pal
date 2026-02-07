<?php
/**
 * Title: Our Approach
 * Slug: leapux/testimonials
 * Categories: leapux
 * Description: Two-column section with approach checklist and team image with quote overlay.
 * Keywords: approach, testimonials, quote
 */
?>

<!-- wp:group {"tagName":"section","anchor":"approach","backgroundColor":"white","style":{"spacing":{"padding":{"top":"8rem","bottom":"8rem","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}},"layout":{"type":"constrained","contentSize":"1280px"},"className":"reveal-section"} -->
<section id="approach" class="wp-block-group reveal-section" style="padding-top:8rem;padding-bottom:8rem;padding-left:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30)">

	<!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"left":"4rem"}}}} -->
	<div class="wp-block-columns are-vertically-aligned-center">

		<!-- wp:column {"verticalAlignment":"center"} -->
		<div class="wp-block-column is-vertically-aligned-center">

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"0.625rem","fontWeight":"900","textTransform":"uppercase","letterSpacing":"0.2em"}},"textColor":"orange"} -->
			<p style="font-size:0.625rem;font-weight:900;text-transform:uppercase;letter-spacing:0.2em">Our Approach</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"bottom":"2rem"}}}} -->
			<h2 style="margin-bottom:2rem">Research, design, and validation — from discovery to delivery.</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}},"textColor":"slate-600"} -->
			<p style="font-size:1.125rem;line-height:1.7">We support teams from early discovery through delivery by combining research, design, and validation.</p>
			<!-- /wp:paragraph -->

			<!-- wp:list {"style":{"spacing":{"blockGap":"1.25rem"},"typography":{"fontSize":"1rem","fontWeight":"500"},"margin":{"top":"2.5rem"}},"className":"approach-checklist"} -->
			<ul class="approach-checklist" style="font-size:1rem;font-weight:500">
				<li>✓ Evidence before opinions</li>
				<li>✓ Accessibility as a baseline, not an add-on</li>
				<li>✓ Collaboration across disciplines</li>
				<li>✓ Decisions informed by real user insight</li>
			</ul>
			<!-- /wp:list -->

		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center"} -->
		<div class="wp-block-column is-vertically-aligned-center">

			<!-- wp:group {"style":{"position":{"type":""}}} -->
			<div class="wp-block-group">

				<!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"1.5rem"}},"className":"grayscale-hover"} -->
				<figure class="wp-block-image size-large has-custom-border grayscale-hover"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team collaboration on UX design" style="border-radius:1.5rem"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"padding":{"top":"1.5rem","bottom":"1.5rem","left":"1.5rem","right":"1.5rem"}},"border":{"radius":"1rem"}},"backgroundColor":"white","className":"quote-card"} -->
				<div class="wp-block-group quote-card" style="border-radius:1rem;padding-top:1.5rem;padding-bottom:1.5rem;padding-left:1.5rem;padding-right:1.5rem">

					<!-- wp:paragraph {"style":{"typography":{"fontStyle":"italic","fontWeight":"500","lineHeight":"1.6"}},"textColor":"black"} -->
					<p style="font-style:italic;font-weight:500;line-height:1.6">"Good design is not about aesthetics — it's about clarity, risk reduction, and trust."</p>
					<!-- /wp:paragraph -->

				</div>
				<!-- /wp:group -->

			</div>
			<!-- /wp:group -->

		</div>
		<!-- /wp:column -->

	</div>
	<!-- /wp:columns -->

</section>
<!-- /wp:group -->
