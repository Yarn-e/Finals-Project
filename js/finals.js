
$(document).ready(function() {
  
  console.log('test 123');
  
  $('.Game').hover(
    function() {
      $(this).find('.description').slideDown();
    },
    function() {
      $(this).find('.description').slideUp();
    }
  );
  
});
                  