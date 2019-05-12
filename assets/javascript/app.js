$(document).on('click', '#play', function(){
    game.start();
 });
  
 
 $(document).on('click', '#done', function() {
     game.done();
 });

 start: function() {
  document.getElementById('play').style.display = 'none';
 }

timer = setInterval(game.countdown, 1000);

 $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();