/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/



$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let input1 = $("#input1").val();
    let output1 = input1;
    $('#output-section-1').text(output1);
    $('#output-section-2').text(output1);
  });
});
