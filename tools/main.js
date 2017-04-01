  $( document).ready(function() {
    $('#header').fadeOut(0);
    $('#middle').fadeOut(0);
    
    $('#header').fadeIn({queue: false, duration: 'slow'});
    
    $( "#header" ).animate({
      'letter-spacing': '0px'
    }, 1500, 'swing');
    
    $('#middle').fadeIn(2000);
    
  });