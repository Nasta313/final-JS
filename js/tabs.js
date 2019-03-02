$(document).ready(function(){
	$('.tab-content').hide();
    $('.tab:first').addClass('tab-active');
    $('.tab-content:first').fadeIn();
	$('.link').click(function(e){
        e.preventDefault();
        $('.tab-content').hide();
        $('.tab-active').removeClass('tab-active');

        $(this).addClass('tab-active');
        $('#'+$(this).attr('title')).fadeIn();
    });
});
