// The optional chaining operator (?.) allows you to safely access properties or methods of potentially null or undefined objects.

let user = {
  name: "hk",
};

const u_name: string | undefined = user?.name;
