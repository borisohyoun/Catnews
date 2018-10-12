    $(function () {
        //메뉴바
        var num = null;
        $('.titlemenu').on('click', function () {
            if (num != $(this).parent().index()) {
                num = $(this).parent().index();
                $('.submenu:visible').slideUp();
                $('.submenu:visible').siblings().children('.titlemenu>img').attr('src', '../img/footmenu.png');
                $(this).next().slideDown();
                $(this).children('img').attr('src', '../img/footallmenu.png');
                // .parent().siblings()
                
            }
        });

        //시계 
        function timeclock() {
            var now = new Date();
            var year = now.getFullYear();
            var mon = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var apm = "오전";
            if (hour >= 12) {
                apm = "오후";
            }
            if (hour > 12) {
                hour -= 12;
            }
            var min = now.getMinutes();
            var nowTime = year + "년 " + mon + "월 " + date + "일 " + "\n" + apm + " " + hour + "시 " + min + "분 ";

            $('.clockbox').text(nowTime);
            setTimeout(timeclock, 1000);
        }
        timeclock();
        //1초마다 바뀌는 이미지
        var imageType = "mid";

        function tailChange() {
            if (imageType === "mid") {
                $('.clockbox').css('background', 'url("img/tail_right.png") no-repeat  ');
                imageType = "right";
            } else {
                $('.clockbox').css('background', 'url("img/tail_mid.png") no-repeat');
                imageType = "mid";
            }
            setTimeout(tailChange, 1000);
        }
        tailChange();

        //banner
        var adimgW = $('.adslides').find('img').width();
        var adimgNum = $('.adslides').find('img').length;
        $('.adslides').width(adimgNum*adimgW);
        var adtimer = setInterval(adslidesMove, 3000);

        //  var currentNum = 0;
        //  var newNum = currentNum + 1;
        //  var imgs = $('.adslides').find('img');

        //배너 슬라이드, 밑에 버튼표시
        function adslidesMove() {
            // var adtimer = setInterval(adslidesMove, 3000);

         var currentNum = 0;
         var newNum = currentNum + 1;
         var imgs = $('.adslides>a>img');
            newNum = currentNum + 1;
            if (adimgNum <newNum) {
                newNum = 0;
            }
           // imgs.eq(currentNum).stop().animate({left: -adimgW}, 500);
            //현재의 순번으 이미지를 왼쪽으로 그림의 크기만큼 0.5초동안 이동해라. 
            imgs.eq(newNum).css({left: adimgW,zIndex: 10});
            //새로운 순번의 속성을 현재순번의 그림 옆으로 (left)의 좌표로 변경해라
            imgs.eq(newNum).stop().animate({left: 0}, 500, function () {
                // 새러운 순번의 모든것을 멈주고 왼쪽으로 0.5초동안 이동해라. 
                currentNum = newNum;
                //현재의 순번은 새로운 순번과 같다. 
            $('.guidebtn li a').filter('.on').removeClass('on');
            $('.guidebtn li').eq(newNum).find('a').addClass('on');
            $('.adslides ').animate({left:-adimgW},500,function(){
                $('.adslides').find('img').eq(0).appendTo($('.adslides'));
                $('.adslides').css('left',0);
                
            });
            });
        }
        // function adslidesMove(){
        //     $('.adslides').animate({left:-adimgW},500,function(){
        //         $('.adslides').find('img').eq(0).appendTo($('.adslides'));
        //         $('.adslides').css('left',0);
        //     });
        // }
        
        // //prev 기능 
        $('.next').on('click', function (event) {
            event.preventDefault();
            clearInterval(adtimer);
            adslidesMove();
            newNum = currentNum + 1;
            if (currentNum < 6) {
                newNum = adimgNum + 1;
            }else{
                newNum=$('.adslides').find('img').eq(0);
            }
            $('.guidebtn a').filter('.on').removeClass('on');
            $('.guidebtn li ').eq(newNum).find('a').addClass('on');
            imgs.eq(currentNum).stop().animate({left: -adimgW}, 500);
            imgs.eq(newNum).css({left: adimgW});
            imgs.eq(newNum).stop().animate({left: 0}, 500, function () {
                currentNum = newNum;
            });
            adtimer = setInterval(adslidesMove, 3000);
        });

        $('.prev').on('click', function (event) {
            event.preventDefault();
            clearInterval(adtimer);
            newNum = currentNum -1;
            if (newNum >= 6) {
                newNum = adimgNum - 1;
            }
            $('.guidebtn a').filter('.on').removeClass('on');
            $('.adslides').find('img').eq(adimgNum-1).prependTo('.adslides');
            $('.guidebtn li').eq(newNum).find('a').addClass('on');
            imgs.eq(currentNum).stop().animate({left: +adimgW}, 500);
            imgs.eq(newNum).css({left: adimgW});
            imgs.eq(newNum).stop().animate({left: 0}, 500, function () {
                currentNum = newNum;
            });
            adtimer = setInterval(adslidesMove, 3000);
        }); 
        
        // delay거는 법 set time out 으로 setTimeOut(funcion(){초})만 해도 된다, 함수 명 안정해도 된다.


        //catnav
        $('.navmediin').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navmediin.html .navmediin');
        });
        $('.navmediout').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navmediout.html .navmediout');
        });
        $('.navhos').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navhos.html .navhos');
        });
        $('.navmemo').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navmemo.html .navmemo');
        });
        $('.navweight').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navweight.html .navweight');
        });
        $('.navbookmark').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navbookmark.html .navbookmark');
        });
        $('#maintitle').on('click', function () {
            window.location.reload(true);
        });
    });
