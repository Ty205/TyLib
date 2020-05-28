/*
 * TyLib.js
 * A part of the TyLib project.
 * Copyright (C) 2020-present by Ty Gillespie. All rights reserved.
 * Licensed under the unlicense.
*/
"use strict";
// Functions.
/*
plural(number, first, second);
Function to return the singular of a given word if the number is 1 or -1, and return the multiple otherwise.
Arguments.
number: the number of items (normally a variable).
first; the singular option.
second: the multiple option.
*/
function plural(number, first, second) {
  if (number == 1 || number == -1) {
    return first;
  } else {
    return second;
  }
}
/*
RandomInteger(minimum, maximum);
returns a random (okay sudo random), number between the minimum and maximum numbers.
Arguments.
minimum: the minimum number.
maximum: the maximum number.
*/
function randomInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
/*
squareRoot(x);
Returns the square root of the given number.
Arguments.
x: the number to get the square root of.
*/
function squareRoot(x) {
  return Math.sqrt(x);
}
