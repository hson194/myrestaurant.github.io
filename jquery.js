$(document).ready(function(){
	$("#slide_todaymenu").slick({
		autoplay:true,
		dots:true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed :1000
	});


	$("div.meal div.mealChangeTab").slice(0, 4).addClass("showMeal");
	$("div.meal div.loadMore").click(function(){
		$("div.meal div.mealChangeTab:hidden").slice(0, 4).addClass("showMeal");
		if(($("div.meal div.mealChangeTab:hidden")).length == 0){
			$("div.meal div.loadMore").hide();
		}
		/* $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);*/
    });




	$("div.meal div.mealChangeTab2").slice(0, 4).addClass("showMeal");
	$("div.meal div.loadMore2").click(function(){
		$("div.meal div.mealChangeTab2:hidden").slice(0, 4).addClass("showMeal");
		if(($("div.meal div.mealChangeTab2:hidden")).length == 0){
			$("div.meal div.loadMore2").hide();
		}
		/* $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);*/
    });



	$("div.meal div.mealChangeTab3").slice(0, 4).addClass("showMeal");
	$("div.meal div.loadMore3").click(function(){
		$("div.meal div.mealChangeTab3:hidden").slice(0, 4).addClass("showMeal");
		if(($("div.meal div.mealChangeTab3:hidden")).length == 0){
			$("div.meal div.loadMore3").hide();
		}
		/* $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);*/
    });



	$("div.meal div.mealChangeTab4").slice(0, 4).addClass("showMeal");
	$("div.meal div.loadMore4").click(function(){
		$("div.meal div.mealChangeTab4:hidden").slice(0, 4).addClass("showMeal");
		if(($("div.meal div.mealChangeTab4:hidden")).length == 0){
			$("div.meal div.loadMore4").hide();
		}
		/* $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);*/
    });

})