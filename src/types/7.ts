// In TypeScript, the enum type is a way to define a set of named constant values, often representing a finite set of options or choices. Enums make your code more readable and self-documenting by giving friendly names to values. They help prevent the use of arbitrary or magic values in your code, which can lead to errors and make the code harder to understand.

// Enums in TypeScript can be used in a variety of scenarios, such as representing days of the week, menu options, or any situation where you have a predefined set of possible values. You can access the values of an enum using dot notation, like Color.Red, and you can also convert between the enum value and its numeric representation using type casting.

// Days of the Week:

enum Days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const today: Days = Days.Monday;
console.log(`Today is ${Days[today]}`);

// Menu Options:

enum MenuOptions {
  Home = "Home",
  About = "About Us",
  Contact = "Contact Us",
  Services = "Our Services",
}

const selectOption: MenuOptions = MenuOptions.Services;
console.log(`You selected: ${selectOption}`);

// HTTP Status Codes:

enum HttpStatus {
  Ok = 200,
  notFound = 404,
  InternalServerError = 500,
}

const responseCode: HttpStatus = HttpStatus.notFound;
console.log(`HTTP Status: ${responseCode}`);

// Card Suits:

enum Suit {
  Hearts = 1,
  Diamonds,
  Clubs,
  Spades,
}

const myCardSuit: Suit = Suit.Hearts;
console.log(`My card suit is ${Suit[myCardSuit]}`);

// Options in Drop down menu (React Example)

enum DropdownOptions {
  option1 = "option 1",
  option2 = "option 2",
  option3 = "option 3",
  option4 = "option 4",
}

// component
/*
function Dropdown() {
  return (
    <select>
      <option value={DropdownOptions.Option1}>Option 1</option>
      <option value={DropdownOptions.Option2}>Option 2</option>
      <option value={DropdownOptions.Option3}>Option 3</option>
    </select>
  );
}
*/

// Status Codes in API Responses (Express.js Example):

enum ApiStatus {
  Success = "success",
  Error = "error",
  NotFound = "notFound",
}

/*
app.get("/api/data", (req, res) => {
  const data = fetchData();
  if (data) {
    res.json({ status: ApiStatus.Success, data });
  } else {
    res.status(404).json({ status: ApiStatus.NotFound });
  }
});
*/
