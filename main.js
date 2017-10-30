function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    var correct = 0;

    if ( question1 == "Sacramento" ) {
        correct++;
    }
    if ( question2 == "Albany" ) {
        correct++;
    }
    if ( question3 == "Hartford" ) {
        correct++;
    }

    var messages = ["Great job!", "That's okay.", "Fail!"];
    var pictures = [
        'http://www.gifimagesdownload.com/wp-content/uploads/2016/02/success-gif.gif',
        'https://media.tenor.com/images/654e16beb777b2895abe0aa0394447d9/tenor.gif',
        'http://www.pbh2.com/wordpress/wp-content/uploads/2013/10/fail-gif.gif'
    ]
    var range;

    if ( correct < 1 ) {
        range = 2;
    }
    if ( correct > 0 && correct < 3 ) {
        range = 1;
    }
    if ( correct > 2 ) {
        range = 0;
    }

    document.getElementById('after_submit').style.visibility = "visible";

    document.getElementById('message').innerHTML = messages[range];
    document.getElementById('picture').src = pictures[range];
    document.getElementById('number_correct').innerHTML = "You got " + correct  + " correct!";
}
