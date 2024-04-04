// $('.custom_option5').prepend('<span style="margin-right: 3px;">회원가</span>');

// 프로모션 탭
$('.tab-link').on('click',function (){
    $('.tab-link').removeClass('on');
    $(this).addClass('on');

    var idx = $(this).index();
    $('.tab-content').removeClass('current');
    $('.tab-content').eq(idx).addClass('current');

});

// 프로모션 탭 위치 조정
$(window).on('load', function () {
    setTimeout(tab_promotion, 500);

    function tab_promotion() {
        // 프로모션 탭 위치 조정
        let sec01 = Math.ceil($('#section01').offset().top); // 선착순 50% 쿠폰
        let sec02 = Math.ceil($('#section02').offset().top); // 전 제품 스페셜 할인
        let sec03 = Math.ceil($('#section03').offset().top); // 블프 한정 패키지
        let sec04 = Math.ceil($('#section04').offset().top); // 한정수량 균일가
        let go_menu = [sec01, sec02, sec03, sec04]

        $('.promotionTab ul li').on('click', function () {
            var moveing = $(this).index();
            $('html').animate({scrollTop: go_menu[moveing] - 200}, 50);
        });
    };
});

// 임산부의 날 프로모션
var momday_slide = new Swiper(".momday-swiper", {   // 예비맘을 위한 셋업 슬라이드
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var momday_slide2 = new Swiper(".momday-swiper2", { // 기간 한정 혜택
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});


// green festa
var green_slide = new Swiper(".green-swiper", {   // 텐셀 모달 set
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var green_slide2 = new Swiper(".green-swiper2", {   // 모달 홈웨어
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var green_slide3 = new Swiper(".green-swiper3", {   // 홀가먼트
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var green_slide4 = new Swiper(".green-swiper4", {   // 보정 언더웨어
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

// autumn week
var autumn_slide = new Swiper(".autumn-swiper", {   // 어텀위크
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".autumn-swiper .swiper-button-next",
        prevEl: ".autumn-swiper .swiper-button-prev",
    },
});


// black friday
var blackfriday_slide = new Swiper(".blackfriday-swiper", {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        // clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});
var blackfriday_slide2 = new Swiper(".blackfriday-swiper2", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var schedule = new Swiper(".schedule-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});
var limit_slide1 = new Swiper(".limit-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var limit_slide2 = new Swiper(".limit-swiper2", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});
var limit_slide3 = new Swiper(".limit-swiper3", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        },
    },
});

var awards_slide = new Swiper(".awards-swiper", {
    slidesPerView: 1,
    pagination: {
        clickable: true,
    },
    effect: 'fade',
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

// 2024 새해 프로모션
$('.js-luckybag-cover').on('click',function (){
    $(this).fadeOut(400);
});

// 커버 지우개 이벤트
if ($('.cover-eraser').length > 0) {
    $('.cover-eraser__swipe').fadeOut(2000);
    $('body').addClass('scroll-lock'); // 커버 클릭시 이벤트

    $('[data-btn]').on('click', function () {
        var btnData = $(this).data('btn');

        if (btnData === 'swipe') {
            // 딤 숨기기
            $('.cover-eraser__swipe').addClass('is-hide');
        } else if (btnData === 'home') {
            // 메인으로 이동
            $('.cover-eraser').hide();
            $('body').removeClass('scroll-lock');
        }
    }); // 커버 지우개

    var coverImg = document.querySelectorAll('.cover-eraser__img');
    coverImg.forEach(function (el, i, array) {
        var elId = '#' + $(el).attr('id');
        $(el).eraser({
            size: 150,
            completeRatio: .4,
            completeFunction: function completeFunction() {
                $(elId).fadeOut(1000);
                $(elId).eraser('disable');

                if (i === array.length - 1) {
                    $('.cover-eraser').addClass('is-hide');
                    $('body').removeClass('scroll-lock');
                }
            }
        });
    });
} // 커버 지우개 이벤트

// season-off 프로모션
var seasonoff_slide = new Swiper(".seasonoff-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 2.1,
            spaceBetween: 30,
        },
    },
});
var seasonoff_slide = new Swiper(".seasonoff-swiper2", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 2.1,
            spaceBetween: 30,
        },
    },
});
var seasonoff_slide = new Swiper(".seasonoff-swiper3", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 2.1,
            spaceBetween: 30,
        },
    },
});

var lucky_slide = new Swiper(".lucky-swiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        1020: {
            slidesPerView: 1.9,
            spaceBetween: 28,
        },
    },
});

var lucky_slide = new Swiper(".lucky-swiper2", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        1020: {
            slidesPerView: 2.5,
            spaceBetween: 32,
        },
    },
});


var lucky_slide = new Swiper(".lucky-swiper3", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        1020: {
            slidesPerView: 1.9,
            spaceBetween: 28,
        },
    },
});

var spring_slide = new Swiper(".spring-swiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        1020: {
            slidesPerView: 1.9,
            spaceBetween: 28,
        },
    },
});

var spring_slide2 = new Swiper(".spring-swiper2", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        1020: {
            slidesPerView: 1.9,
            spaceBetween: 28,
        },
    },
});

var spring_slide3 = new Swiper(".spring-swiper3", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
        1020: {
            slidesPerView: 1.9,
            spaceBetween: 28,
        },
    },
});