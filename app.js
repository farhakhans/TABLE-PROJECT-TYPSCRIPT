"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num1 = parseInt(prompt(" enter first number: "));
let num2 = parseInt(prompt("enter 2nd number : "));
console.log(num1 + num2);
// table creat of 3 table:
//  function printMultiplicationTable(num: number, length: number): void {
//      console.log(`Multiplication Table of ${num}:`);
//      for (let i = 1; i <= length; i++) {
//          const result = num * i;
//          console.log(`${num} * ${i} = ${result}`);     }
//  }
// //  3 ka table print karna:
//  printMultiplicationTable(3, 10); // Change second argument to change length of table
