// The map method is used to create a new array by applying a provided function to each element of an existing array. TypeScript infers the return type based on the provided function.

const pens: number[] = [2, 3, 4];
const pens2x: number[] = pens.map((p: number) => p * 2);
