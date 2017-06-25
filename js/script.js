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

    $('#slide01').slick({
      arrows: false,
      autoplay:true,
      autoplaySpeed: 3800,
      fade: true
    });

  $('#slide02').slick({
    arrows: false,
    autoplay:true,
    autoplaySpeed: 4000,
    fade: true
  });

    $('.emmyadd').html("<strong>Text:</strong> 301-706-7912");

  });
})(jQuery);
