myFunction = function() {
  $("h1").fadeOut("slow");
  $("h1").fadeIn("slow");
  $("div.icon-divider").css("cursor", "pointer");
  $("div.icon-divider").on("click", function() {
    console.log("You've clicked me!");
    $(this)
      .animate({
        left: "250px",
        opacity: "0.5",
        height: "150px",
        width: "150px"
      })
      .slideUp(2000)
      .slideDown(2000)
      .animate({
        left: "0",
        opacity: "1",
        height: "33px",
        width: "100%"
      });
  });
  $("p").on("mouseleave", function() {
    $(this)
      .css("color", "fuchsia")
      .fadeOut("slow", function() {
        $(this)
          .text("This is magic!")
          .fadeIn();
      });
  });
};
