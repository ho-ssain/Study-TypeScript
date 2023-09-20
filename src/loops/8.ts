// The filter method is used to create a new array containing elements that pass a provided test function. TypeScript infers the return type based on the provided function.r

const a1: number[] = [1, 2, 3, 4, 5, 6, 7];
const odd: number[] = a1.filter((n: number) => n % 2 !== 0);
