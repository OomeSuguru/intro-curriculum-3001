// 階乗とは 1 からその与えられた自然数までの数をすべてかけたものです。
// たとえば 5 の階乗は、5 * 4 * 3 * 2 * 1 で、120 になります。
'use strict'
var sum = 0;
function hoge(x) {
  var number = x;
  for (let i = 0; i <= number; i++){
    sum *= i;
  }
}