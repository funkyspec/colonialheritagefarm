(function($) {
  $(function() { // DOM Ready

    // Toggle navigation
    $('#nav-toggle').click(function() {
      this.classList.toggle("active");
      // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
        $('body').removeClass('show-nav');
      } else { // If sidebar is hidden:
        $('body').addClass('show-nav');
        // Display sidebar
      }
    });

    $('.emmyadd').html("<strong>Email:</strong> Stephenbkelly@gmail.com<br><strong>Text:</strong> 301-706-7912");
    
  });
})(jQuery);