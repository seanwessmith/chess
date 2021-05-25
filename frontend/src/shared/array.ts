const deepCloneArray = (currentArray: (string[] | number[])[]): (string[] | number[])[] =>
  currentArray.map((arr: string[] | number[]) => arr.slice());

export {
  deepCloneArray,
};
