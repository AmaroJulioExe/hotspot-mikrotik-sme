


$(function() {                       //run when the DOM is ready
  $(".navbar-nav").click(function() {  //use a class, since your ID gets mangled
    $(".navbar-collapse").removeClass("in");
          //add the class to the clicked element
  });
});
