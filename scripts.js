/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/

/*

create some examples:
string| k | ANSWER
abcba 2 'bcb'
ababa 1 any single letter
goat  3 'goa' or 'oat'
ohio  4 none
gold  4 'gold'

1.  Note:  Substring means characters that are adjacent to each other.

Solution:
some edge cases:
if k > s.length, the answer is none
if k === s.length, the answer is 1 only if all chars are unique
if k === 0, the answer is none
if k === 1, the answer is 1

other wise, when (0 < k) && (k < s.length),



*/

const searchSub = (yourString) => {
  outputArray = [];
  for (i = 0; i<yourString.length; i++) {
    let regex = new RegExp('[^' + yourString[i] + ']{1,}')
    let temp = '';
    for (j = 0; j < 2; j++) {
      if
    }
  }
  return outputArray;
}

let myString1 = 'alpha'
let answer1 = searchSub(myString1)
console.log('Answer = ',answer1)
let myString2 = 'aaa'
let answer2 = searchSub(myString2)
console.log('Answer = ',answer2)


const longestSub = (yourString, k) => {
  console.log(yourString, k)
  if (k > yourString.length) {return 'none'};
  if (k === 0) {return 'none'};
  if (k === 1) {return yourString[0]}
  if (k === yourString.length) {

  };
};

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let input1 = $("#input1").val();
    let input2 = parseInt($("#input2").val());
    let output1 = longestSub(input1,input2);
    console.log(output1);
    $('#output-section-1').text(output1);
    $('#output-section-2').text(0);
  });
});
