<?php
/**
 * Title: Contact CTA
 * Slug: leapux/contact
 * Categories: leapux
 * Description: Full-width call-to-action section with background image.
 * Keywords: contact, cta, call-to-action
 */
?>

<!-- wp:cover {"url":"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200","dimRatio":90,"overlayColor":"orange","isUserOverlayColor":true,"style":{"spacing":{"padding":{"top":"10rem","bottom":"10rem","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}},"anchor":"contact","className":"reveal-section"} -->
<div class="wp-block-cover reveal-section" id="contact" style="padding-top:10rem;padding-bottom:10rem;padding-left:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30)">
	<span aria-hidden="true" class="wp-block-cover__background has-orange-background-color has-background-dim-90 has-background-dim"></span>
	<img class="wp-block-cover__image-background" alt="" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" data-object-fit="cover"/>

	<!-- wp:group {"layout":{"type":"constrained","contentSize":"700px"}} -->
	<div class="wp-block-group">

		<!-- wp:heading {"textAlign":"center","level":2,"style":{"typography":{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"700","lineHeight":"1.2","letterSpacing":"-0.02em"},"spacing":{"margin":{"bottom":"3rem"}}},"textColor":"white"} -->
		<h2 class="has-text-align-center" style="font-size:clamp(2rem, 4vw, 3rem);font-weight:700;letter-spacing:-0.02em;line-height:1.2;margin-bottom:3rem">Ready to improve how your service works in the real world?</h2>
		<!-- /wp:heading -->

		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"black","textColor":"white","style":{"typography":{"fontSize":"0.75rem","fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.3em"},"spacing":{"padding":{"top":"1.5rem","bottom":"1.5rem","left":"3.5rem","right":"3.5rem"}},"border":{"radius":"9999px"}}} -->
			<div class="wp-block-button" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.3em"><a class="wp-block-button__link has-black-background-color has-white-color has-text-color has-background wp-element-button" href="/contact" style="border-radius:9999px;padding-top:1.5rem;padding-right:3.5rem;padding-bottom:1.5rem;padding-left:3.5rem">Contact Us</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:cover -->
