$('.custom_option5').prepend('<span style="margin-right: 3px;">회원가</span>');

// info 탭
$('.tab-link').on('click',function (){
    $('.tab-link').removeClass('on');
    $(this).addClass('on');

    var idx = $(this).index();
    $('.tab-content').removeClass('current');
    $('.tab-content').eq(idx).addClass('current');
});


// 메인 자동 슬라이드
var info_swiper = new Swiper(".info-swiper", {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 9,
    spaceBetween: 15,
});

// 탭 클릭 시 이동
setTimeout(tab_scroll, 500);

function tab_scroll(){
    let slim9 = Math.ceil($('#tab01').offset().top); // 슬림9
    let slim9m = Math.ceil($('#tab02').offset().top); // 슬림9M
    let touchsoul = Math.ceil($('#tab03').offset().top); // 터치소울
    let go_tab = [slim9,slim9m,touchsoul ]

    $('.tab-link > a').on('click', function (){
        let move = $(this).index();
        $('html').animate( { scrollTop : go_tab[move]-190}, 50 );
    });

};