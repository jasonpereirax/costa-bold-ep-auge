$(document).ready(function(){
    var userHasScrolled = false;

    $('.view').scrollTop(1450);

    if(userHasScrolled) {
        $('.content').on('mousemove', function(e){
            e.stopPropagation();

            $('.view').stop(true, true).scrollLeft( (e.pageX - $('body').scrollLeft()) * 3 - 650);
            $('.view').stop(true, true).scrollTop( (e.pageY - $('body').scrollTop()) * 5 - 350);
        });
    }
});