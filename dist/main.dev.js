"use strict";

var countin = document.querySelector('.countin');
var plus = document.querySelector('.plus');
var clear = document.querySelector('.clear');
var takbirsoni = 0;
plus.addEventListener("click", function () {
  takbirsoni++;
  countin.textContent = takbirsoni;
});
clear.addEventListener("click", function () {
  takbirsoni = 0;
  countin.textContent = takbirsoni;
});