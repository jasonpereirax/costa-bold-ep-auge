$(document).ready(function(){
    var userHasScrolled = false;
    
    window.onscroll = function (e) {
        userHasScrolled = true;
        return false;
    }

    
    $('.content').on('mousemove', function(e){
        e.stopPropagation();

        $('.view').scrollLeft( (e.pageX - $('body').scrollLeft()) * 3 - 650);
        $('.view').scrollTop( (e.pageY - $('body').scrollTop()) * 5 - 350);
    });
});