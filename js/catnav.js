    $(function () {
        //메뉴바

        $('.titlemenu').click('onclick', function () {
            $(this).siblings().css("display", "block");
            $(this).find('img').attr("src", "img/footallmenu.png");

        })

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
        // $(function () {
        //     var container = $('.adbanner'),
        //         slideGroup = container.find('.adslides'),
        //         slides = slideGroup.find('a'),
        //         nav = container.find('.bannerbtn'),
        //         indicate = container.find('.guidebtn'),
        //         slideCount = slides.length,
        //         indicateHtml = '',
        //         currentIndex = 0,
        //         duration = 500,
        //         interval = 3500,
        //         easing='easeInOutExpo'
        //         timer;

        //     //슬라이드 가로로 배열
        //     //슬라이드 마다 해야할 일  왼쪽의 포지션값이 달라져야한다. 
        //     //left의 값이 각 슬라이드마다 변해야 한다. 
        //     slides.each(function (i) {
        //         var newleft = i * 100 + '%';
        //         $(this).css({left: newleft});

        //         //밑에 흰색 점 나오는 부분 html 작성
        //         indicateHtml += '<a href="">' + (i + 1) + '</a>';
        //     });
        //     $(indicate).html(indicateHtml);

        //     //슬라이드 이동 함수
        //     function goToSlides(index){
        //         //i 0 left:0%, i 1 left:-100%
        //         slides.animate({left : -100*index + '%'},duration,easing);
        //         currentIndex = index;
        //         console.log(currentIndex);
        //     };

        //     // //인디케이터로 이동하는 방법 
        //     // indicate.find('a').click(function(e){
        //     //     e.preventDefault();//링크로 작동되지 않고 고유의 event처리가 될 수 있도록 하는 
        //     //     var idx = $(this).index();//눌린것의 순서를 알아오는 것 
        //     //     console.log(idx);
        //     //     goToSlides(idx);//인디케이터의 고유 순번을 gotoslide로 전달해준다. 
        //     // });
        //     // 좌우버튼 이동하기
        //     nav.find('.prev').click(function(){
        //         e.preventDefault();
        //         var i = currentIndex -1;
        //         goToSlides(i);
        //     });
        //     nav.find('.next').click(function(){
        //         e.preventDefault();
        //         var i = currentIndex +1;
        //         goToSlides(i);
        //     })
        // });

        var wid = $(".adbanner").width();
        var i = $(".guidebtn li.on").index();
        var len = $(".adslides a").length;

        $(".prev").click(function () {


            if (i == 0) {

                i = len - 1;


            } else {

                i = i - 1;

            }

            showSlide();
        });

        $(".next").click(function () {

            if (i == 5) {

                i = 0;


            } else {

                i = i + 1;

            }
            showSlide();
        });

        $(".guidebtn li").click(function () {

            i = $(this).index();

            showSlide();


        });

        function showSlide() {
            $(".guidebtn li").removeClass("on");
            $(".guidebtn li").eq(i).addClass("on");
            $(".adslides a").stop(true, true).fadeOut();
            $(".adslides a").eq(i).stop(true, true).fadeIn();
        }




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


        // // memo graph plugins
       
        //   var options = {
        //     title: {
        //         text: "Spline Chart with Export as Image"
        //     },
        //     animationEnabled: true,
        //     exportEnabled: true,
        //     data: [
        //     {
        //         type: "spline", //change it to line, area, column, pie, etc
        //         dataPoints: [
        //             { x: 10, y: 10 },
        //             { x: 20, y: 12 },
        //             { x: 30, y: 8 },
        //             { x: 40, y: 14 },
        //             { x: 50, y: 6 },
        //             { x: 60, y: 24 },
        //             { x: 70, y: -4 },
        //             { x: 80, y: 10 }
        //         ]
        //     }
        //     ]
        // };
        // $("#chartContainer").CanvasJSChart(options);
        
        //catnav
        $('.navmedi').on('click', function () {
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