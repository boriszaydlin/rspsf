<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $secondary_menu_heading: The title of the menu used by the secondary links.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['branding']: Items for the branding region.
 * - $page['header']: Items for the header region.
 * - $page['navigation']: Items for the navigation region.
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see omega_preprocess_page()
 */
?>
<div id="page-wrapper" data-role="page">
<a name="top" class="anchor"></a>
	<!-- MOBILE MENU -->
	<div id="mobile-menu"> 
    <?php if($main_menu): ?>
			<?php print theme('links__system_primary_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'inline', 'clearfix', 'main-menu'), 'data-role' => 'panel')/*, 'heading' => array('text' => t('Menu'),'level' => 'h2','class' => array('element-invisible'))*/)); ?>
		<?php endif;//MENU ?>
  </div> 
  <!-- EOF MOBILE MENU -->
  
	<header id="page-header" class="header" role="banner">
		<!-- LOGO -->
	    <?php if ($site_name): ?>
	      <h1 class="site-name">
	        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
	      </h1>
	    <?php endif;//logo ?>
	
		<!-- MENU -->
		<?php if($main_menu): ?>
			<nav>	
				<?php print theme('links__system_primary_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'inline', 'clearfix', 'main-menu'), 'data-role' => 'panel')/*, 'heading' => array('text' => t('Menu'),'level' => 'h2','class' => array('element-invisible'))*/)); ?>
			</nav>
			<a href="#" class="" id="mobile-trigger"><i class="fa fa-bars"></i></a>
		<?php endif;//MENU ?>
	
	</header>
	<article id="content">
		<!-- HERO -->
		<?php if($page['hero']): ?>		
			<div id="hero">
				<?php print render($page['hero']); ?>
			</div>
		<?php endif;//HERO ?>
		<a name="about" class="anchor"></a>
		<?php print render($page['content']); ?>
		<a name="team" class="anchor"></a>
		<?php print render($page['team']); ?>
		<a name="facts" class="anchor"></a>
		<?php print render($page['facts']); ?>
		<a name="whatwedo" class="anchor"></a>
		<?php print render($page['whatwedo']); ?>
		<a name="feedback" class="anchor"></a>
		<?php print render($page['feedback']); ?>
		<a name="works" class="anchor"></a>
		<?php print render($page['works']); ?>
		<a name="services" class="anchor"></a>
		<?php print render($page['services']); ?>
		<a name="responsive" class="anchor"></a>
		<?php print render($page['responsive']); ?>
		<a name="video" class="anchor"></a>
		<?php print render($page['video']); ?>
		<a name="clients" class="anchor"></a>
		<?php print render($page['clients']); ?>
	</article>
		
	<footer class="page-footer" role="contentinfo">
		<a name="contact" class="anchor"></a>
    <?php print render($page['contact']); ?>
  </footer>
  
</div><!-- end: page-wrapper -->
