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
		$(window).on('hashchange', function(e){
			history.replaceState ("", document.title, e.originalEvent.oldURL);
		});
		function anchorScroll(anchorBlock, anchorTime){
			$("body, html").animate({
				scrollTop: $(anchorBlock).offset().top
			}, anchorTime);
			return false;
		}
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			//anchorScroll(href, 2000);
			$("body, html").animate({
				scrollTop: $(href).offset().top
			}, 2000);
			return false;
		});
		$("#question-btn").click(function(){
			$("#question-toggle").slideToggle("slow");
			$(this).toggleClass("clicked");
			if ( $(this).hasClass("clicked") ) {
				$(this).text("Скрыть вопросы");
			}else{
				$(this).text("Показать вопросы");
				anchorScroll("#question-wrap", "slow");
			}
		});
		$("#review-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: ["", ""]
		});
});	