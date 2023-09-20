# Typescript_Mastery

1. **What is TypeScript?**

   -> It is a statically typed, object-oriented programming language that was created by MicroSoft in the year 2012. TS is a superset of JS. which means it extends the capability of JS by adding type checking, type safety to the JS data types, classes and other OOp features.
   TypeScript is suitable for medium-large scale application
   JavaScript is suitable for small-scale application.
   It is a full-stack based language. we can write client-side code as well as server-side. It's has a saying that TS is a very powerfull language.

2. **TS vs JS**

   TS --->
   i) Static Type (we need to type-annote our variables at the time of declaring them.)
   ii) Compiled
   iii) Compilation Errors

   JS --->
   i) Dynamic Type (where the type of var is determined in run time)
   ii) Interpreted
   iii) Runtime Errors

3. **TypeScript Compiler**

   The TS Compiler is the set of settings or the compilation of settings that are actually responsible for converting or tranpiling or compiling our TS code to JS.
   How all of our TS code is compile into JS is the job of TS Compiler.

4. **Types in TS**
   **_primitive data types_**

   1. Number - Represents numeric values
   2. String - Represents textual data
   3. Boolean - Represents true or false values.
   4. Null - Represents the intentional absence of any object value.
   5. Undefined - Represents a variable that has been declared but has not been assigned a value
      (
      Undefined and null are two TypeScript primitive types used to represent nothing. They act similarly in a lot of cases, the main difference is the intent. Undefined pops up a lot when a variable hasn’t been defined, or for example when a function returns nothing. “null” on the other hand is often used intentfully. While undefined means “this thing doesn’t exist/we haven’t defined it”, null is usually used to mean “this thing exists, but I’ve specifically left it empty”.
      )

   6. Bigint - Represents large integers
   7. Symbol - Represents unique and immutable values
   8. any - Represents a dynamic or untyped value. no type checking.
   9. void - Represents the absence of a value
   10. never - Represents values that will never occur
       (
       TypeScript introduces two new ways to represent nothing, with Void and Never. If you’ve used any other type languages, you’re probably familiar with void. It represents a function that returns nothing.
       Never is an interesting new type, it represents something that should never happen.
       This could mean for example an infinite loop:
       )
   11. Unknown - The unknown type is similar to any, but it is type-safe. You must perform type checks or type assertions before using values of type unknown.

   **_non-primitive types, also known as reference types_**

   1. Object
   2. Array
   3. Tuple
   4. Function
   5. Class
   6. Interface
   7. Enum
   8. Tuple
   9. Union
   10. Intersection

5. **loops**

   1. for
   2. for..of
   3. for..in
   4. while
   5. do..while
   6. foreach loop
   7. map
   8. filter

6. **conditional statements**
