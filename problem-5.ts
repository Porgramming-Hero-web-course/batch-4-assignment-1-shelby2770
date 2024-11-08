const getProperty = <T, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
