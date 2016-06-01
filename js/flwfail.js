  var swiper = new Swiper(".swiper-container", {
      direction: "vertical", //方向
      loop: false

  })
  $(".page1").hide();
  $(".page2").hide();
  $(".btn2").on("click", function () {
      var num = Math.floor(Math.random() * 2 + 1);
      $(".wrap").hide();
      $(".page" + num).show();
      console.log(num)
  })