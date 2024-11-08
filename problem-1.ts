const sumArray = (arr: number[]): number => {
  let ret: number = 0;
  arr.forEach((i) => (ret += i));
  return ret;
}

// console.log(sumArray([1, 2, 3, 4, 5]));