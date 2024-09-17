

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here
    
    let applesArray: number[] = [];
    let orangesArray: number[] = [];
    
    apples.map(appleLocation => {
        applesArray.push(appleLocation + a);
    });
    
    oranges.map(orangeLocation => {
       orangesArray.push(orangeLocation + b); 
    });
    
    let numberOfApplesInHome: number = 0;
    let numberOfOrangesInHome: number = 0;

    let index:number = 0;
    while(index < applesArray.length || index < orangesArray.length)
    {
        if(applesArray[index] >= s && applesArray[index] <= t)
        {
            numberOfApplesInHome++;
        }
        
        if(orangesArray[index] >= s && orangesArray[index] <= t)
        {
            numberOfOrangesInHome++;
        }
        
        index++
    }  
    
    console.log(numberOfApplesInHome);
    console.log(numberOfOrangesInHome);     
}