

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades: number[]): number[] {
    // Write your code here
    
    const newGrades : number[] = [];
    const multiples : number[] = [];
    
    for(let count = 1 ; count <= 20 ; count++)
    {
        let value = count * 5;
        
        multiples.push(value);
    }
    
    grades.forEach(grade => {
        
        if(grade < 38)
        {
           newGrades.push(grade);  
        }
        
        else
        {

            // Next multiple 
            let nextMultiple = Math.ceil(grade / 5) * 5;
                            
            if(nextMultiple - grade < 3)  newGrades.push(nextMultiple);
            
            else newGrades.push(grade);
            
        }    
    })
    
    return newGrades;
}