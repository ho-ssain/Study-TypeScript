# ![TypeScript](./img/ts.png) TypeScript

Superset of JavaScript with extra features.

## [Basic TypeScript Concepts]

1. Types and Variables

   - [Data Types](#data-types)
   - [Type Annotations](#type-annotations)
   - [Variable Declaration](#variable-declaration)
   - [Identifiers and keywords](#identifiers-and-keywords)
   - [Variable Scope](#variable-scope)
   - [var let and const](#var-let-and-const)
   - [Constants](#constants)
   - [Type inference](#type-inference)

2. Interfaces and Type Aliases
3. Functions
4. Classes
5. Modules
6. Arrays and Iteration
7. Generics

==============> [Basic TypeScript Concepts] ===============>

(1)=>...................Types and Variables

- ### Data Types

  What is Data Type?
  => A data type is like a label that tells us what kind of value we're working with, whether it's a number, a word, a yes/no choice, or something else. This label determines the sorts of things we can do with that data, like math with numbers or searching with words

  => JS comes with 8 data types: 7 are known as primitive, and the other is an object type.
  The primitive types include-:

            1. number
            2. string
            3. boolean
            4. bigint
            5. symbol
            6. undefined
            7. null
            8. Everything else is just Object

  =>
  SO, TS support all of them and introduces it's own unique special types:

            1. unknown
            2. any
            3. void
            4. never
            5. Additionally, TypeScript offers both numeric and string-based enums, which enable developers to define sets of named constants.

  =>
  We can compose other types to create union or intersection types

  ( Union of the sets A and B , denoted A ∪ B , is the set of all objects that are a member of A , or B , or both. The union of {1, 2, 3} and {2, 3, 4} is the set {1, 2, 3, 4} . Intersection of the sets A and B , denoted A ∩ B , is the set of all objects that are members of both A and B . )

  Union Types in Typescript allows a variable to have the ability to store a value of several types

  Intersection types allow us to combine two or more types into one. The resulting type will have all the properties of all the types. This allows us to get a Single type from existing types that has all the properties of both the types

  _Any_
  Typescript allows us to opt-out of type checking by assigning any type to a variable. The compiler will not perform type checking on variables whose type is any.
  any is a special data type that can hold any data. You can change the data type. We use this when we do not know the type of data. any is specific to typescript.
  When a variable’s type is not given and typescript cannot infer its type from the initialization then it will be treated as an any type

  _Never_
  The never type represents the value that will never happen. We use it as the return type of a function, which does not return a value. For example, the function that always throws an exception is shown below.

  _Void_
  Void represents the absence of any return value. For example, the following function prints “hello” and returns without returning a value. Hence the return type is void.
  It is different from never. never means it never returns a value.

  _Unknown_
  Unknown Type
  unknown type means that the type of variable is not known. It is the type-safe counterpart of any.
  You can assign anything to an unknown type.
  But cannot assign unknown to any other types.

  _null_ and _undefined_
  undefined Denotes value is given to all uninitialized variables.
  null: Represents the intentional absence of object value.

- ### Type Annotations

  We annotate a variable by using a colon (:) followed by its type. There can be a space after the colon. For example, the following shows how to use the type annotation in variable declaration.

  let a:number = 12;

- ### Variable Declaration

  _Naming the Variable_
  We must follow these rules when naming the variable. For a more detailed description please read identifiers & keywords in typescript.

  - Variable name must be unique within the scope.
  - The first letter of a variable should be an upper case letter, Lower case letter, underscore or a dollar sign
  - Subsequent letters of a variable can have upper case letter, Lower case letter, underscore, dollar sign, or a numeric digit
  - They cannot be keywords.
  - Identifiers are case-sensitive.
  - They cannot contain spaces.

  We can declare the variables in four different ways.

  both type and initial value
  only the type
  only the initial value
  without type and initial value

- ### Identifiers and keywords

  When you name any identifier, you need to follow these rules.

  - The identifier name must be unique within the scope.
  - The first letter of an identifier should be a
    1. upper case letter
    2. Lower case letter
    3. underscore
    4. dollar sign
  - The subsequent letters of an identifier can have
    1. upper case letter
    2. Lower case letter
    3. underscore
    4. dollar sign
    5. numeric digit
  - We cannot use reserved keywords. The list of keywords is listed below
  - Identifiers are case-sensitive.
  - cannot use spaces in an identifier name.

- ### Variable Scope

  The Typescript variable can be in three scopes depending on how & where you have defined them.

  1. Global Scope
     => Define the global variable outside of any function/ class or code block and they become part of the global scope. We can use them anywhere within the program.
  2. Function Scope or Class Scope
     => The function or class variables defined inside the function/class etc are function scoped. They are available to use anywhere within the function. You cannot use them outside the function.
  3. Local Scope or Block scope
     =>The local variables are declared inside a code block. They are also known by the name block variable
     The code block is a section of source code clearly delimited using the curly braces. For example inside the if/try/catch/while/for block.

- ### var let and const

  => var is function scoped
  => var variables can be redefined or updated
  => var can be accessed before they are declared
  => let & const is block scoped

- ### Constants

  1. The initial value is a must
  2. const is block scoped
  3. the left-hand side of an assignment cannot be a constant
  4. Const is a read-only reference to a value
  5. Cannot access before the declaration
  6. Cannot Redeclare a const.

- ### Type inference

  Typescript tries to infer the type if you do not specify one, by determining the type of the initial value assigned to it or based on its usage.

  There are two ways types are inferred in Typescript. One is explicit and the other one is implicit
  Explicit Typing is when we just declare the variable with the types.

  In Implicit typing, we do not declare the types. Typescript makes an attempt to deduce the type from its usage.

(2)=> .................Interfaces and Type Aliases

(3)=> .................Functions

(4)=> .................Classes

(5)=> .................Modules

(6)=> .................Arrays and Iteration

(7)=> .................Generics
