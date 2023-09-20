// for-in loop
// iterate over the properties of an object

const people: { [key: string]: string | number } = {
  name: "Lufi",
  age: 30,
};

for (const key in people) {
  console.log(people[key]);
}
