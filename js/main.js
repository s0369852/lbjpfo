$(function (){
    $("#Hbtn").click(function(){
        $("#Hbtn").toggleClass("act");
        $(".navbar_gnb").toggleClass("pull");
        $(".navbar_logbox").toggleClass("pull")
    });

    $(".slide_list").slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: "linear"
    });

    // $("#Product").slick({
    //     slide: ".pdt",
    //     slideToShow: 3,
    //     slidesToScroll : 1,
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     fade: true,
    //     cssEase: "linear",
    //     resposive:[{
    //         breakpoint: 460,
    //         settings: {slideToShow: 1}
    //     }] 
    // })

    function mobileSize(){
        var deviceWidth = $(window).width();
        if (deviceWidth <= 460) {
            $(".pdt_slide").slick({
                slide: "section.pdt",
                slideToShow: 1,
                slidesToScroll : 1,
                infinite: true,
                speed: 300,
                fade: true,
                cssEase: "linear"
            });
        }
    };

    var timer = null;
    $(window).on("resize",function(){
        clearTimeout(timer)
        timer = setTimeout(mobileSize,300)
    })
    
});
