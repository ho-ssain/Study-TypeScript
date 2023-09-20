// TypeScript supports logical operators for combining and negating conditions.
const id: number = 393937;
const hasID: boolean = !!id;
const isBlocked: boolean = true;
const day = "Sunday";
const isAdult: boolean = age >= 18 && hasID;
const isWeekend: boolean = day === "Sunday" || day === "Saterday";
const hasPermission: boolean = !isBlocked;
