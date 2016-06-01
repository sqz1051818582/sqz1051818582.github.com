/*  var i = 0;
  var ms = 6000;
  var timer = setInterval(function () {
      i = i + (1000 / ms)
      $(".wrap div").css({
          "width": i + '%'
      })
      $("b").html(Math.round(i) + '%')
      i > 100 ? clearInterval(timer) : 1;
  }, 10)

  window.setTimeout("window.location = 'index.html '", 6900)*/
var pics = [
        './imgs/again.png',
        './imgs/aidela.jpg',
        './imgs/airen.jpg',
        './imgs/bg.jpg',
        './imgs/boy.png',
        './imgs/cattle.png',
        './imgs/constellation.png',
        './imgs/crab.png',
        './imgs/daren.jpg',
        './imgs/f2a.jpg',
        './imgs/f2b.jpg',
        './imgs/f2c.jpg',
        './imgs/f3a.jpg',
        './imgs/f3b.jpg',
        './imgs/f3c.jpg',
        './imgs/f4a.jpg',
        './imgs/f4b.jpg',
        './imgs/f4c.jpg',
        './imgs/fa.jpg',
        './imgs/fb.jpg',
        './imgs/fc.jpg',
        './imgs/fd.jpg',
        './imgs/ffail.jpg',
        './imgs/firend1.jpg',
        './imgs/fish.png',
        './imgs/fjin1.jpg',
        './imgs/fjin2.jpg',
        './imgs/friend.jpg',
        './imgs/friend2.jpg',
        './imgs/friend3.jpg',
        './imgs/friend4.jpg',
        './imgs/girl.jpg',
        './imgs/girl.png',
        './imgs/hand.png',
        './imgs/jinnangbtn.png',
        './imgs/l1a.jpg',
        './imgs/l1b.jpg',
        './imgs/l1c.jpg',
        './imgs/l2a.jpg',
        './imgs/l2b.jpg',
        './imgs/l2c.jpg',
        './imgs/l2d.jpg',
        './imgs/l3a.jpg',
        './imgs/l3b.jpg',
        './imgs/l3c.jpg',
        './imgs/l4a.jpg',
        './imgs/l4b.jpg',
        './imgs/l4c.jpg',
        './imgs/leftbtn.png',
        './imgs/rightbtn.png',
        './imgs/lion.png',
        './imgs/ljin1.jpg',
        './imgs/ljin2.jpg',
        './imgs/love1.jpg',
        './imgs/love2.jpg',
        './imgs/love3.jpg',
        './imgs/love4.jpg',
        './imgs/manbanpai.jpg',
        './imgs/mo.png',
        './imgs/nv.png',
        './imgs/selstar.jpg',
        './imgs/sex.jpg'
]
var obj = {
    init: function () {
        this.pics();
    },
    pics: function () {
        var imgs = [],
            s = 0;
        for (var i = 0; i < pics.length; i++) {
            imgs[i] = new Image();
            imgs[i].src = pics[i];
            //console.log(imgs[i].src)

            imgs[i].onload = function () {
                s++;
                var tex = Math.floor(s / imgs.length * 100);
                console.log(tex)
                $("b").html(tex + "%")

                $(".wrap div").css("width", tex + "%");
                if (tex == 100) {
                    window.location = "index.html";
                }
            }
            imgs[i].onerror = function (e) {
                //console.log(e)
                //console.log(e.length)
            }
        }

    }
}
obj.init()