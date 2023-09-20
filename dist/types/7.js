"use strict";
var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
const today = Days.Monday;
console.log(`Today is ${Days[today]}`);
var MenuOptions;
(function (MenuOptions) {
    MenuOptions["Home"] = "Home";
    MenuOptions["About"] = "About Us";
    MenuOptions["Contact"] = "Contact Us";
    MenuOptions["Services"] = "Our Services";
})(MenuOptions || (MenuOptions = {}));
const selectOption = MenuOptions.Services;
console.log(`You selected: ${selectOption}`);
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Ok"] = 200] = "Ok";
    HttpStatus[HttpStatus["notFound"] = 404] = "notFound";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
const responseCode = HttpStatus.notFound;
console.log(`HTTP Status: ${responseCode}`);
var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 1] = "Hearts";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Clubs"] = 3] = "Clubs";
    Suit[Suit["Spades"] = 4] = "Spades";
})(Suit || (Suit = {}));
const myCardSuit = Suit.Hearts;
console.log(`My card suit is ${Suit[myCardSuit]}`);
var DropdownOptions;
(function (DropdownOptions) {
    DropdownOptions["option1"] = "option 1";
    DropdownOptions["option2"] = "option 2";
    DropdownOptions["option3"] = "option 3";
    DropdownOptions["option4"] = "option 4";
})(DropdownOptions || (DropdownOptions = {}));
var ApiStatus;
(function (ApiStatus) {
    ApiStatus["Success"] = "success";
    ApiStatus["Error"] = "error";
    ApiStatus["NotFound"] = "notFound";
})(ApiStatus || (ApiStatus = {}));
