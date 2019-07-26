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

const searchSub = (yourString, k) => {
  outputArray = [];
  for (i = 0; i<yourString.length-1; i++) {
    let regex = new RegExp('[^' + yourString[i] + ']{' + k + ',}')
    let temp = '';
    for (j = 0; j < k; j++) {
      if (yourString[i+j+1] === undefined) {break;}
      if (yourString[i+j] != yourString[i+j+1]) {temp = temp+yourString[i+j+1]} else {break;}
    }
    outputArray.push(temp);
  }
  return outputArray;
}


const longestSub = (yourString, k) => {
  if (k > yourString.length) {return 'none'};
  if (k === 0) {return 'none'};
  if (k === 1) {return yourString[0]}
  let pre = searchSub(yourString, k);
  let length = 0;
  let answer = 0;
  console.log('pre', pre)
  for (i=0; i<pre.length; i++) {
    if (pre[i].length > length) {
      answer = pre[i];
      length = pre[i].length;
    }
    console.log('answer =', answer)
  };
  return answer;
};

let myString1 = 'abcba'
let answer1 = searchSub(myString1, 3)
console.log('Answer = ',answer1)
let answer2 = longestSub(myString1, 3)
console.log('Answer = ',answer2)

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let input1 = $("#input1").val();
    let input2 = parseInt($("#input2").val());
    let output1 = longestSub(input1,input2);
    console.log(output1);
    $('#output-section-1').text(output1);
  });
});
