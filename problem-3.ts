const countWordOccurrences = (s: string, t: string): number => {
  s = s.toLowerCase();
  t = t.toLocaleLowerCase();
  let ret: number = 0;
  for (let i = 0; i <= s.length - t.length; ++i) {
    if (s.substring(i, i + t.length) === t) ret++;
  }
  return ret;
};

// console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// );
