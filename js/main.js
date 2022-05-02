$(document).ready(function (){
  const flowers_slider = new Swiper('.flowers_slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 6,
    
    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // настройки адаптивности
    breakpoints: {
      // если браузер больше >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер больше >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер больше >= 576px
      992: {
        slidesPerView: 6,
      }
    }
});


  const review_slider = new Swiper('.review_slider', {
    //параметры слайдера
    loop: true,
    slidesPerView: 1,

    //Подключаем стрелки
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
  });


$("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/byket1.jpg',
        opts : {
          caption : 'Наш клиент с букетом',
          thumb   : 'img/girl_one2.jpg'
        }
      },
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
    });
  
  
    
  
  });
$("#review-2").on('click', function() {
  
    $.fancybox.open([
      {
        src  : 'img/byket2.jpg',
        opts : {
          caption : 'Наш клиент с букетом',
          thumb   : ''
        }
      },
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
    });


