$(document).ready(function(){

var ggirls =  ["Rose","Blanche", "Dorothy", "Sophia"];
var answer;

    function random(){
        return Math.floor(Math.random() * 3)
    }

    $('#submit').click(function(event){
        event.preventDefault();
        var girl = ggirls[random()];
        var outPut = $('#output');

        // this funciton that calls itself if there is a matching golden girls name

        function printAnswer(){
            if(answer === girl){
                girl = ggirls[random()];
                printAnswer();
            } else {
                answer = girl;
                outPut.text(answer);
            }
        };

        // this is running the function for the first time one the submit is clicked.
        printAnswer();
    });
});