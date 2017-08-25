var basketControl = function(){

  $("#expand-basket").on("show.bs.collapse", function(){
    $(".basket-arrow").css("visibility", "hidden");
    $(".basket span.glyphicon").removeClass("glyphicon-trash");
    $(".basket span.glyphicon").addClass("glyphicon-menu-down");
    $(".basket").addClass("basket-collapse");
    $("#main-container").css("filter", "blur(2px) grayscale(10%)");
  });

  $("#expand-basket").on("hide.bs.collapse", function(){
    $(".basket-arrow").css("visibility", "visible");
    $(".basket span.glyphicon").removeClass("glyphicon-menu-down");
    $(".basket span.glyphicon").addClass("glyphicon-trash");
    $(".basket").removeClass("basket-collapse");
    $("#main-container").css("filter", "blur(0) grayscale(0)");
  });

};

$(document).ready(basketControl);
