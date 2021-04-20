const deepCloneArray = (currentArray: (string[] | number[])[]): (string[] | number[])[] => {
  return currentArray.map((arr: string[] | number[]) => {
    return arr.slice();
  });
}

export {
  deepCloneArray,
}