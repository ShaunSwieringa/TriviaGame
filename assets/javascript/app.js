var questionsAnswers = [{
    question: "What Battle did Tyrion get his scar?",
    choices: ["Battle of the Blackwater", "Battle of the Bastards", "Battle of the Whispering Wood", "Battle of Hardhome"],
    correctAnswer: "Battle of the Blackwater"

}, {
    question: "Whats Bran's Dad's name?",
    choices: ["Rob Stark", "Ned Stark", "Robert Baratheon", "Tywin Lannister"],
    correctAnswer: "Ned Stark"

}, {
    question: "What is the name of Arya's direwolf?",
    choices: ["Ghost", "Gendry", "Nymeria", "Shadowfax"],
    correctAnswer: "Nymeria"

}, {
    question: "How many Stark children are there counting Jon?",
    choices: ["4", "6", "3", "5"],
    correctAnswer: "6"

}, {
    question: "Who was Jon fighting against in the battle of the bastards?",
    choices: ["Ramsey Bolton", "Roose Bolton", "Walder Frey", "Night King"],
    correctAnswer: "Ramsey Bolton"

}, {
    question: "What is Jon Snow's real name?",
    choices: ["Rhaegar Targaryen", "Viserys Targaryen", "Daenerys Targaryen", "Aegon Targaryen"],
    correctAnswer: "dil"
}];

var panel = $('#quiz-area');

$(document).on('click', '#play', function(){
    game.start();
 });
  
 
 $(document).on('click', '#done', function() {
     game.done();
 });

var game = {
    correct: 0,
    incorrect: 0,
    counter: 50,
    countdown: function() {
        game.counter--;
        $('#counter-number').html(game.counter);
        
        if (game.counter === 0) { 
            game.done();
        }
    },

start: function() {
  document.getElementById('play').style.display = 'none';

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
},

done: function() {

    $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() == questionsAnswers[0].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questionsAnswers[1].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() == questionsAnswers[2].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() == questionsAnswers[3].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() == questionsAnswers[4].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    this.result();
    },
    result: function() {

        clearInterval(timer);
         document.getElementById('play').style.display = 'block';

        $('#subwrapper h2').remove();
        panel.html('<h2>Finished!</h2>');
        panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questionsAnswers.length - (this.incorrect + this.correct)) + '</h3>');
    }

};

