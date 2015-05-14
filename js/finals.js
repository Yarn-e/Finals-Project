
$(document).ready(function() {
  
  $('.Game').hover(
    function() {
      $(this).find('.description').slideDown();
    },
    function() {
      $(this).find('.description').slideUp();
    }
  );
  $('.next').click(
    function() {
      $(this).show("slide", { direction: "left" }, 1000);
    }
  );
});