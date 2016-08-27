$(document).ready(function(){
		var header_menu_name = 'header-menu',
			header_menu = $('.' + header_menu_name),
			navbar_toggle = $('.navbar-toggle');
		function toggler(){
			navbar_toggle.toggleClass('navbar-toggle-open');
			header_menu.toggleClass('header-menu-open');
		}
		navbar_toggle.click(function(e){
			toggler();
			e.stopPropagation();
		});
		$(document).click(function(e){
			if( header_menu.hasClass(header_menu_name + '-open') ) {
				if ( ! $(e.target).is('.'+header_menu_name + ', .'+header_menu_name+"*") ) {
					toggler();
				}
			}
		});
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		$(window).on('hashchange', function(e){
			history.replaceState ("", document.title, e.originalEvent.oldURL);
		});
});	