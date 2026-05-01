'use strict';
let num = 5;
let min = 3;
let max = 10;

let isBetween = function(num, min, max){
    if(num >= min && num <= max)
        return true;
    else return false;
};