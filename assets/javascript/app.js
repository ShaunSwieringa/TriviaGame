var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function() {
        game.counter;
        $('#counter-number').html(game.counter);
        
        if (game.counter === 0) {
            game.done();
        }
    }};

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

    for (var i = 0; i < questionsAnswers.length; i++) {
        panel.append('<h2>' + questionsAnswers[i].question + '</h2>');
        for (var j = 0; j < questionsAnswers[i].choices.length; j++) {
            panel.append('<p><input type="checkbox" name="question' + '-' + i + '" value="' + questionsAnswers[i].choices[j] + '">' + "     " +questionsAnswers[i].choices[j] + "</p>");
        }
    }

panel.append('<button class="btn-primary" id="done">Done</button>');