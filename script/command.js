$(function(){
    
    ////////////menu

    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(".main>li").find(".sub").stop().slideUp();
    });


    ////////////main fade
    $(".fade li").eq(0).siblings().hide();
            // $(".fade li").hide();
            // $(".fade li").eq(0).show();

    var n = 0

    setInterval(function(){
        if(n==2){
            n=0;
        }else{
            n++;
        }
        // if문 대신 n=(n+1)%3; 으로도 쓸 수 있음
        console.log(n)
    
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
    }, 2500);

    ///////////////탭메뉴

    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("off");
        $(this).removeClass("off");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"});

    }) //h2 click


    /////////////팝업
    $(".p_up").click(function(){
        $(".pop").show();
    })//

    $(".close").click(function(){
        $(".pop").hide();
    })//

}) //j