$(function () {
    // $(".Hbtn").click(function () {
    //     $(".navbar_gnb").css({ display: "block" });
    //     $(".navbar_logbox").css({ display: "block" });
    // });

    $(".slide_list").slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: "linear",
        prevArrow: "<button class='prevBtn btns'><i class='xi-arrow-left'></i></button>",
        nextArrow: "<button class='nextBtn btns'><i class='xi-arrow-right'></i></button>",
    });
});
