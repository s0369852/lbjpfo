$(function (){
    $("#Hbtn").click(function(){
        $("#Hbtn").toggleClass("act");
        $(".navbar_gnb").toggleClass("pull");
        $(".navbar_logbox").toggleClass("pull")
    });

    $(".toggle_show").slideUp(0);
    $("#showbtn").click(function(){
        $(".toggle_show").slideToggle(1500,function(){
        });
    });

    $(".day_num").click(function(){
        $(".day_num").removeClass('actday');
        $(this).addClass('actday');
    });

    var basicOption = {
        slideToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: "linear"
    };

    $(".slide_list").slick(basicOption);

    var mobileOption = {
        slideToShow: 1,
        slidesToScroll : 1,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: "linear",
        prevArrow : "<button type='button' class='slick-prev'><i class='xi-angle-left'></button>",
        nextArrow : "<button type='button' class='slick-next'><i class='xi-angle-right'></button>"
    };

    function mobileSize(){
        var deviceWidth = $(window).width();
        if (deviceWidth <= 460) {
            $(".mobile_slider").slick(mobileOption);
        } else if(deviceWidth > 460) {
            $(".mobile_slider").slick('unslick');
        }
    };
    
    var timer = null;
    $(window).on("resize",function(){
        clearTimeout(timer)
        timer = setTimeout(mobileSize,300)
    });
});
