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
        var adimgW = $('.adslides').find('img').width();
        var adimgNum = $('.adslides').find('img').length;
        $('.adslides').width(adimgNum * adimgW);
        var adtimer = setInterval(adslidesMove, 3000);

        function adslidesMove() {
            var rolling = $('.adslides').find('a');
            rolling.eq(0).animate({
                left: adimgW
            }, 1000, function () {
                rolling.eq(0).appendTo($('.adslides'));
            });
            rolling.eq(1).animate({
                left: adimgW
            });
        }
        setInterval(adslidesMove, 3000);

        var currentNum = 0;
        var newNum = currentNum + 1;

        $('.prev').on('click', function (event) {
            event.preventDefault();
            clearInterval(adtimer);
            newNum = currentNum - 1;
            if (newNum <= 6) {
                newNum = adimgNum - 1;
            }
            setInterval(adslidesMove, 3000);
        });

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
