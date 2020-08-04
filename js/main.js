$(function (){
    $("#Hbtn").click(function(){
        $("#Hbtn").toggleClass("act");
        $(".navbar_gnb").toggleClass("pull");
        $(".navbar_logbox").toggleClass("pull")
    });

    $(".slide_list").slick({
        dots: true,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: "linear"
    });

    var slideOption = {
        slideToShow: 1,
        slidesToScroll : 1,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: "linear"
    }
    function mobileSize(){
        var deviceWidth = $(window).width();
        if (deviceWidth <= 460) {
            $(".slider").slick(slideOption);
        } else if(deviceWidth > 460) {
            $(".slider").slick('unslick');
        }
    };
    
    var timer = null;
    $(window).on("resize",function(){
        clearTimeout(timer)
        timer = setTimeout(mobileSize,300)
    })
});
