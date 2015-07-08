//adding map
    var infowindow = null;
    var gmarkers = [];

    var defaultIcon = new google.maps.MarkerImage('http://google.com/mapfiles/ms/micons/red-dot.png',
      // This marker is 32 pixels wide by 32 pixels tall.
      new google.maps.Size(32, 32),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      new google.maps.Point(16, 32));
  var shadow = new google.maps.MarkerImage('http://google.com/mapfiles/ms/micons/msmarker.shadow.png',
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
      new google.maps.Size(59, 32),
      new google.maps.Point(0,0),
      new google.maps.Point(16, 32));

   var activeIcon = new google.maps.MarkerImage('http://google.com/mapfiles/ms/micons/yellow-dot.png',
      // This marker is 20 pixels wide by 32 pixels tall.
      new google.maps.Size(32, 32),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      new google.maps.Point(16, 32));
  var shadow = new google.maps.MarkerImage('http://www.google.com/mapfiles/shadow50.png',
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
      new google.maps.Size(59, 32),
      new google.maps.Point(0,0),
      new google.maps.Point(16, 32));
      // Shapes define the clickable region of the icon.
      // The type defines an HTML &lt;area&gt; element 'poly' which
      // traces out a polygon as a series of X,Y points. The final
      // coordinate closes the poly by connecting to the first
      // coordinate.
  var shape = {
      coord: [9,0,6,1,4,2,2,4,0,8,0,12,1,14,2,16,5,19,7,23,8,26,9,30,9,34,11,34,11,30,12,26,13,24,14,21,16,18,18,16,20,12,20,8,18,4,16,2,15,1,13,0],
      type: 'poly'
  };

    function initialize() {

        var centerMap = new google.maps.LatLng(39.828175, -98.5795);

        var myOptions = {
            zoom: 4,
            center: centerMap,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        setMarkers(map, sites);
        infowindow = new google.maps.InfoWindow({
                content: "loading..."
            });

        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);
    }

    var sites = [
        ['Mount Evans', 39.58108, -105.63535, 4, 'This is Mount Evans.'],
        ['Irving Homestead', 40.315939, -105.440630, 2, 'This is the Irving Homestead.'],
        ['Badlands National Park', 43.785890, -101.90175, 1, 'This is Badlands National Park'],
        ['Flatirons in the Spring', 39.99948, -105.28370, 3, 'These are the Flatirons in the spring.']
    ];



    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                title: sites[0],
                icon: defaultIcon,
                zIndex: sites[3],
                html: sites[4]
            });

            var contentString = "Some content";

            google.maps.event.addListener(marker, "click", function () {
                //alert(this.html);
                for (var i=0; i<gmarkers.length; i++) {
                   gmarkers[i].setIcon(defaultIcon);
                }
                this.setIcon(activeIcon);
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
            gmarkers.push(marker);
        }
    }

(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
  Drupal.theme.prototype.rspsfExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
  Drupal.behaviors.rspsfExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.some-selector', context).once('foo', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.
        var $anchor = Drupal.theme('rspsfExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

        // The anchor is then appended to the current element.
        $anchor.appendTo(this);
      });
    }
  };
	
	$(document).ready(function(){
		//$("#main-menu" ).trigger( "updatelayout" );
		$(window).scroll(function(){
			if($(window).scrollTop() < 170){
				$('[role="banner"]').toggleClass( 'small', false );
			}else{
				$('[role="banner"]').toggleClass( 'small', true );
			}//if else
		});//window scroll
		
		
		$('.anchor').on('scrollSpy:enter', function() {
			console.log('enter:', $(this).attr('name'));
		});
	
		$('.anchor').on('scrollSpy:exit', function() {
			console.log('exit:', $(this).attr('name'));
		});
	
		$('.anchor').scrollSpy();
		
	});//document ready
	
	$(window).load(function(){
		setTimeout(function(){
			$('body').removeClass('loading');
			initialize(); 
		}, 2000);//setTimeout
	});
})(jQuery);
