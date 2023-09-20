// Metadata means "data about data". Metadata is defined as the data providing information about one or more aspects of the data; it is used to summarize basic information about data that can make tracking and working with specific data easier. Some examples include: Means of creation of the data

// Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even modify itself while running. In some cases, this allows programmers to minimize the number of lines of code to express a solution, in turn reducing development time.

// Decorators in TypeScript are a form of metaprogramming that allow you to add metadata or behavior to classes, methods, properties, or other declarations. They are essentially functions that are applied to your code using the @decorator syntax. Decorators provide a way to modify or extend the behavior of classes, methods, or properties without changing their source code directly. They are commonly used in frameworks like Angular and libraries like Mobx to add features like component configuration, routing, and state management

function myDecor(target: any) {
  console.log(`Decorator called on in class ${target.constructor.name}`);
}

@myDecor
class MyClass {
  myProperty: string = "Hello, World!";
}

const instance = new MyClass();
