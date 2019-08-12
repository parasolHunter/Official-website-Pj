document.write('<link rel="stylesheet" href="../css/fireArrow.css?v=20190123">');
$(function() {
  var fireArrow = `<div id="fireArrow">
                    <div class="spaceship">
                      <div class="antenna"></div>
                      <div class="body"></div>
                      <div class="window"></div>
                      <div class="fins"></div>
                      <div class="rocket"></div>
                      <div class="fireWrapper">
                        <div class="fire">
                          <div></div>
                          <div></div>
                          <div></div><div></div><div></div><div></div>
                        </div>
                      </div>
                    </div>
                  </div>`;

  $("body").append(fireArrow);

  $("#baseContent").on('scroll',function(){
    var dh = $(window).height(); //网页可视区高度
    var hidtop = $(this).scrollTop(); //网页被卷去的高度
    
    if (dh >= hidtop) {
      $("#fireArrow").fadeOut();
    } else {
      $("#fireArrow").fadeIn();
    }
  });
  $("#fireArrow").on("click", function() {
    $("#baseContent").animate({ scrollTop: 0 }, 500);
  });
});
