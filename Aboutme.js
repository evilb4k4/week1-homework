'use strict';

//yes no questions
// var userScore = 0;
//
// function yesNoQuestion (){
// var answer = prompt('Do you like scary stories?');
// if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
//   alert('BOO! (it\'s a short story)');
//   userScore++;
// } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
//   alert('It\'s your loss.');
// } else {
//   alert('No need to get scared and start typing out control');
// }
//
// var answer = prompt('Are you ready to party?');
// if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
//   alert('OKAY! You go buy the Beer');
//   userScore++;
// } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
//   alert('OK');
// } else {
//   alert('I\'ll take that as a no.');
// }
//
// var answer = prompt('Do you like Superman?');
// if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
//   alert('Superman is cool.');
//   userScore++;
// } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
//   alert('Hater');
// } else {
//   alert('Simple yes or no question.');
// }
//
// var answer = prompt('Do you like tacos?');
// if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
//   alert('Tacos are awsome!');
//   userScore++;
// } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
//   alert('More tacos for me then');
// } else {
//   alert('I\'ll take that as a no.');
// }
//
// var answer = prompt('Do you play video game?');
// if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
//   alert('Video games are my favorite pass time');
//   userScore++;
// } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
//   alert('It okay we all can\'t be cool');
// } else {
//   alert('So maybe?');
// }
// }
// yesNoQuestion();
// //question 6
// function guessNumber(){
// for (var x = 1; x < 4; x++) {
//   var  question6 = prompt('Can you guess how old I am?');
//   var parsed = parseInt(question6);
//   console.log('it works');
//   if (parsed === 31) {
//     alert('You\'re spot on! I\'m 31 year old');
//     userScore++;
//   } else if (parsed < 31) {
//     alert('Too low');
//   } else if (parsed > 31) {
//     alert('Too high');
//   } else {
//     alert('That\'s not an answer!');
//     console.log('user entered bad data');
//   }
//   }
// }
//
// guessNumber();
//
// function guessCountry(){
// var newArray = ['England','Mexico','Germany','Korea', 'Turkey', 'Russia'];
//
// for (var i = 0; i < newArray.length; i++){
//  var answer = prompt('Can you guess what country I\'ve travel to while in the military?');
//  console.log('it works');
//  var modifiedAns = answer[0].toUpperCase() +answer.slice(1, answer.length).toLowerCase();
//    if (modifiedAns === newArray[i]) {
//       alert('Correct!');
//       userScore++;
//       break;
//    } else {
//       alert('Hint: One of the countries is connected to the USA');
//    }
//  }
//  }
// guessCountry();
//
// alert('Your score is ' + userScore + ' out of 7');
