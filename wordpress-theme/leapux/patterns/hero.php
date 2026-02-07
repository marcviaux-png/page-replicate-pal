<?php
/**
 * Title: Hero Section
 * Slug: leapux/hero
 * Categories: leapux
 * Description: Full-screen hero with background image, tagline, headline, and CTAs.
 * Keywords: hero, banner, landing
 */
?>

<!-- wp:cover {"url":"","dimRatio":80,"overlayColor":"black","isUserOverlayColor":true,"minHeight":100,"minHeightUnit":"vh","isDark":true,"className":"hero-section","style":{"spacing":{"padding":{"top":"10rem","bottom":"6rem","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} -->
<div class="wp-block-cover is-dark hero-section" style="min-height:100vh;padding-top:10rem;padding-bottom:6rem;padding-left:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30)">
	<span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-80 has-background-dim"></span>

	<!-- wp:group {"layout":{"type":"constrained","contentSize":"1280px","justifyContent":"left"},"style":{"spacing":{"blockGap":"0"}}} -->
	<div class="wp-block-group">

		<!-- wp:group {"layout":{"type":"constrained","contentSize":"700px","justifyContent":"left"}} -->
		<div class="wp-block-group">

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"0.625rem","fontWeight":"900","textTransform":"uppercase","letterSpacing":"0.3em"},"spacing":{"margin":{"bottom":"3rem"}},"border":{"radius":"9999px","width":"1px"}},"textColor":"orange","className":"hero-badge"} -->
			<p class="hero-badge" style="border-radius:9999px;border-width:1px;font-size:0.625rem;font-weight:900;text-transform:uppercase;letter-spacing:0.3em;margin-bottom:3rem">Senior-Led Digital Consultancy</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"clamp(3rem, 6vw, 5rem)","lineHeight":"0.95","letterSpacing":"-0.02em","fontWeight":"700"},"spacing":{"margin":{"bottom":"2rem"}}},"textColor":"white"} -->
			<h1 style="font-size:clamp(3rem, 6vw, 5rem);font-weight:700;letter-spacing:-0.02em;line-height:0.95;margin-bottom:2rem">Designing services for <mark style="background-color:transparent;color:#e8812f" class="has-inline-color">real-world delivery.</mark></h1>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"style":{"typography":{"fontSize":"1.25rem","fontWeight":"300","lineHeight":"1.7"},"spacing":{"margin":{"bottom":"3rem"}}},"textColor":"slate-400"} -->
			<p style="font-size:1.25rem;font-weight:300;line-height:1.7;margin-bottom:3rem">UX and service design for complex environments. We combine evidence, discipline, and accountability to deliver results.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"blockGap":"1rem"}}} -->
			<div class="wp-block-buttons">

				<!-- wp:button {"backgroundColor":"orange","textColor":"white","style":{"typography":{"fontSize":"0.75rem","fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.15em"},"spacing":{"padding":{"top":"1.25rem","bottom":"1.25rem","left":"2.5rem","right":"2.5rem"}},"border":{"radius":"9999px"}}} -->
				<div class="wp-block-button" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.15em"><a class="wp-block-button__link has-orange-background-color has-white-color has-text-color has-background wp-element-button" href="#contact" style="border-radius:9999px;padding-top:1.25rem;padding-right:2.5rem;padding-bottom:1.25rem;padding-left:2.5rem">Start a conversation</a></div>
				<!-- /wp:button -->

				<!-- wp:button {"className":"is-style-outline","style":{"typography":{"fontSize":"0.75rem","fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.15em"},"spacing":{"padding":{"top":"1.25rem","bottom":"1.25rem","left":"2.5rem","right":"2.5rem"}},"border":{"radius":"9999px","width":"1px","color":"#ffffff33"},"color":{"text":"#ffffff"}}} -->
				<div class="wp-block-button is-style-outline" style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.15em"><a class="wp-block-button__link has-text-color wp-element-button" href="#services" style="border-radius:9999px;border-width:1px;border-color:#ffffff33;color:#ffffff;padding-top:1.25rem;padding-right:2.5rem;padding-bottom:1.25rem;padding-left:2.5rem">Our services</a></div>
				<!-- /wp:button -->

			</div>
			<!-- /wp:buttons -->

		</div>
		<!-- /wp:group -->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:cover -->
