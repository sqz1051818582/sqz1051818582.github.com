  var swiperV = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      spaceBetween: 50
  });
  var swiperH = new Swiper('.swiper-container-h', {
      pagination: '.swiper-pagination-h',
      paginationClickable: true,
      nextButton: '.swiper-button-next', //下一页
      prevButton: '.swiper-button-prev', //上一页
      spaceBetween: 50
  });
  var sum = 0;
  $(".btn").on("click", "a", function () {
      var score = $(this).attr("data-score"),
          num = parseInt(score);
      sum += num;
      console.log(sum)

  })