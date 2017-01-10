$(function() {
  $("button#dark_scheme_button").click(function() {
    $("body").removeClass("light_scheme");
    $("body").addClass("dark_scheme");
  });

  $("button#light_scheme_button").click(function() {
    $("body").removeClass("dark_scheme");
    $("body").addClass("light_scheme");
  });

  $("button#og_scheme_button").click(function() {
    $("body").removeClass("dark_scheme");
    $("body").removeClass("light_scheme");
  });
});
