const removeDuplicates = (arr: number[]): number[] => {
  const ret: number[] = [];
  arr.forEach((i) => {
    if (!ret.includes(i)) ret.push(i);
  });
  return ret;
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
