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
            var nowDate = year + "." + mon + "." + date;
            var nowTime = apm + " " + hour + "시 " + min + "분 ";
            $('.clockbox').text(nowDate + "\n" + nowTime);
            setTimeout(timeclock, 1000);
        }
        timeclock();
        //1초마다 바뀌는 이미지
        var imageType = "mid";

        function tailChange() {
            if (imageType === "mid") {
                $('.navclock').css('background', 'url("img/tail_right.png") no-repeat  ');
                imageType = "right";
            } else {
                $('.navclock').css('background', 'url("img/tail_mid.png") no-repeat');
                imageType = "mid";
            }
            setTimeout(tailChange, 1000);
        }
        tailChange();


        //banner
        //1. 한줄로 모든 이미지를 정렬한다. 
        //2. 1번째 사진은 6번째 사진 뒤로 간다. 
        //3. 일정 시간 후 일정 시간에 걸쳐 왼쪽으로 이동한다. 
        //4. 계속 반복한다.

        //배너 밑에 li를 찾는다
        var slideMove = $('.adslides').children('img');
        //li의 width를 찾는다. 
        var imgW = slideMove.width();
        // li의 갯수를 찾는다. 
        var imgCount = slideMove.length;
        //배너의 총 길이를 찾는다. 
        var toImgW = imgW * imgCount;
        var adtimer = setInterval(adslidesMove,3000);
        
        function adslidesMove(){
            slideMove.eq(0).appendTo($('.adslides'));
            slideMove.eq(1).css({left : 0 , position : 'absolute'},1500);
        }
        

        $('.next').click(function(){
            clearInterval(adtimer);
            adslidesMove();
            adtimer = setInterval(adslidesMove,3000);
        })

         $('.prev').click(function(){
            clearInterval(adtimer);
            
            adtimer = setInterval(adslidesMove,3000);
        })
        
        //calender
        function calender() {
            document.write("<select name='birth' id='year'>");
            for (var i = 2002; i <= 2038; i++) {
                document.write("<option value='" + i + "'>" + i + "</option>")
            }
            document.write("</select>");
            document.write("<select name='birth' id='month'>");
            for (var j = 1; j <= 12; j++) {
                document.write("<option value='" + j + "'>" + j + "</option>")
            }
            document.write("</select>");
            document.write("<select name='birth' id='date'>");
            for (var k = 1; k <= 31; k++) {
                document.write("<option value='" + k + "'>" + k + "</option>")
            }
            document.write("</select>");
        }
        console.log(calender);

        //catnav
        $('.navmediin').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navmediin.html .snavmediin');
        });
        $('.navmediout').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navmediout.html .snavmediout');
        });
        $('.navhos').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navhos.html .snavhos');
        });
        $('.navmemo').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navmemo.html .snavmemo');
        });
        $('.navweight').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navweight.html .snavweight');
        });
        $('.navbookmark').on('click', function () {
            $('.firstpage').empty();
            $('.firstpage').load('navbookmark.html .snavbookmark');
        });
        $('#maintitle').on('click', function () {
            window.location.reload(true);
        });
    });
