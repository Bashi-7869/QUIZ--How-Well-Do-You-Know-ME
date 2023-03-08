chalk = require('chalk');
readlineSync = require('readline-sync');
var question = require("./question")
var play = require("./play")
var score = 0

console.log(chalk.blueBright.bold.bgBlack.underline("How Well Do You Know Bashi, Play Quiz"));

do{
  var userName = readlineSync.question(chalk.yellowBright.bold("\n\n Welcome, Enter Your Name To Continue: "));
  
  if(userName !== ""){
    break
  }
    else{
      console.log(chalk.blueBright.bold("\n Something went Wrong! \n\n Try again: "));
  }
    
}
  while(true);

console.log(chalk.cyan.bold.bgBlack("\n Welcome " + userName + " This Quiz Will Check How Well Do You Know Me!\n Don't Forget To Answer All The Question Honestly..... \n"));

console.log(chalk.yellowBright.bold.bgBlack("Game Rules:\n\n Correct Answer: 10 points\nIncorrect Answer: 0 points\n There will Be Alternatives Out Of Which You Have To Select One Appropriate Choice(No Need To Write Complete Answers, Only Type The Option)\n"));

for(i=0; i<question.length; i++){
  var currentQuestion = question[i]
  var userQuestion = play(currentQuestion.question,currentQuestion.Answer[0])

  if(userQuestion === true){

    score = score + 10;
    
    console.log(chalk.yellowBright.underline.bold.bgBlack("\nYour Score Is: " + score));

    console.log(chalk.cyanBright.bold("\n\n Well Done " + userName + " Your Answer Is Absolutely Correct"));            
  }
  else{
  
    
    console.log(chalk.yellowBright.underline.bold.bgBlack("\nYour Score Is: " + score));

    console.log(chalk.red.bold("\n\n Your Answer is Incorrect"));

    console.log(chalk.yellowBright.bold("\n\n Correct Answer Was: ", currentQuestion.Answer[1]));
  }

  }
console.log("\n--------------------------------------------------------------------------------")
  
console.log(chalk.yellowBright.bold.underline("\n\nYour Final Score Out Of 100 is: " +score + "\n\n"));

console.log(chalk.magenta.bold.bgBlack("Check Out The Current High Score: \n"));

var array = ["Soham: 70 ","Banu: 70 ","Priya: 70"]

for(k=0; k<array.length; k++){

  console.log(array[k]);
}

if(score > 70){

  console.log(chalk.blue.bold.underline("\n Congratulation " + userName + "You Have Beaten The High Score. Send Me A Screenshot So That I Will Update Your New Best Record"));
}

else{

  console.log(chalk.green.bold.underline("\n You Failed To Beat The HighScore"));
}

