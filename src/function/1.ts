// different ways to write function

// optional Parameters
// --> In TypeScript, an optional parameter is a parameter in a function or method that may or may not be provided by the caller when invoking the function. This means that you can define a function parameter as optional by appending a ? character to the parameter name. Optional parameters are particularly useful when you want to make certain arguments in a function call optional while still providing default values or handling cases where those arguments are missing.

// required Parameters
// -->In TypeScript, a required parameter is a parameter in a function or method that must be provided by the caller when invoking the function. Required parameters do not have a ? character appended to their names, which distinguishes them from optional parameters.

// rest Parameters
// ---> In TypeScript, a rest parameter is a feature that allows you to represent an indefinite number of function arguments as an array. Rest parameters are denoted by the ... (three dots) followed by a parameter name, which collects any remaining arguments into an array. This can be especially useful when you want to work with a variable number of arguments in a function.

// generic function
// --> In TypeScript, a generic function is a function that can work with multiple data types while maintaining type safety. Generics allow you to write functions that are flexible and reusable, as they can adapt to different types without sacrificing type checking at compile time. Generics are often denoted by type parameters enclosed in angle brackets <>.

// Here's an example of a simple generic function that swaps the values of two variables:

function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}
const result = swap<string>("world!", "Hello");
console.log(result);
