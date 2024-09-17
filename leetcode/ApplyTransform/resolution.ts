function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const numbersArray: number[] = [];

    for(let index = 0 ; index < arr.length ; index++)
    {
        numbersArray.push(fn(arr[index], index));
    }

    return numbersArray;
};  