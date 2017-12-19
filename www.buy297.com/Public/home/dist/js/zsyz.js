;(function($){
	$(".policy-mian").hide()
	$(".policy-mian-a").hide()
	$(".policy").eq(0).click(function(){
		$(".policy-mian").slideToggle()
	})
	$(".policy").eq(1).click(function(){
		$(".policy-mian-a").slideToggle()
	})
	var ind
	$(".tab-nav-item li span").click(function(){
//		$(this).index().addClass('')
		ind=$(this).parents('li').index()
		$(".tab-nav-item li").eq(ind).find('span').addClass('active')
		$(".tab-nav-item li").eq(ind).siblings().find('span').removeClass('active')
		$('.tab-main-a').eq(ind).show().siblings().hide()
	})
	$(".tab-nav-item li").eq(0).find('span').trigger("click")
})(jQuery)
