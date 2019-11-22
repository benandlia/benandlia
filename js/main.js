
$( document ).ready(function() {

  //accordions
  if($('.accordion').length){
    var allPanels = $('.accordion > dd');
    var allLines = $('.accordion > dt'); 
    var allButton = $('.accordion > dt > a > span'); 
    $('.accordion > dt > a').click(function() {
        $this = $(this);
        $target =  $this.parent().next();
        $button = $this.find('span');
        if($this.parent().hasClass('open')){
        	$this.parent().removeClass('open');
        }
        if(!$target.hasClass('active')){
           allPanels.removeClass('active').slideUp();
           allButton.removeClass('rotate');
           allLines.removeClass('open')
           $target.addClass('active').slideDown();
           $button.addClass('rotate');
           $this.parent().addClass('open').siblings().removeClass('open');
        }
        else if($target.hasClass('active')){
           allPanels.removeClass('active').slideUp();
           allButton.removeClass('rotate');
        }
        
      return false;
    });
  }
  
  //smooth scrolling
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });

  //coutndown
  function makeTimer() {

    var endTime = new Date("23 February 2020 5:00:00 GMT+01:00");      
      endTime = (Date.parse(endTime) / 1000);

      var now = new Date();
      now = (Date.parse(now) / 1000);

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400); 
  

      $("#days").html(days);

  }

  setInterval(function() { makeTimer(); }, 10);

    
});//end doc ready
