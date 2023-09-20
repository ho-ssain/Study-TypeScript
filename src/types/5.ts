// Array Types in TS
/*
What is an Array in TS?
--> An array is a reference type with a special syntax for declaring and accessing elements. Array types are either of a single type or of multiple types using a union type. Array types are used in TS to define where to store the data. 
*/

let num: number[] = [1, 2, 3, 4];

let users: string[] = ["hk", "sk", "nk"];

let mixData1: (number | string)[] = [1, 2, 3, "hi"];

let mixData2: (number | string | boolean)[] = [1, 2, 3, "hi"];

// nested number type array.

let nestedArr1: number[][] = [
  [1, 3],
  [5, 6],
  [9, 9],
];

let nestedArr2: (number | string)[][] = [
  [1, 3, "Hi"],
  [5, 6, "hi"],
  [9, 9, "Hi"],
];

let mixData3: (number | string | (number | string)[])[] = [
  23,
  "Hi",
  [23, "44"],
];
