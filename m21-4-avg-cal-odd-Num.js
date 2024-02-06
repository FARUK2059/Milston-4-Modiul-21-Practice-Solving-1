                                          //  Modiul --- 21.4
                                            

// Concept ===>   Calculate The Average Of The Odd Numbers In An Array
                            //  start Modiul

                                        

/*
******** function taskes an array as parameter
******** giv me the average of the odd numbers in the arrey
*/ 

// const numbers = [ 42, 13, 58, 65, 81, 7 ];
const numbers = [ 42, 13, 58, 65, 81, 7, 47, 56, 77];

function oddAverage(numbers){
    console.log('Inpute Number', numbers);

    const odds = [];

    for (const number of numbers) {
        // console.log(number);
        if ( number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }

    console.log('odd number is :', odds);

    let sum = 0;
    for (const number of odds){
        sum = sum + number;
    }

    const count = odds.length;
    // console.log(sum);
    console.log('total odd :', sum, 'total odd Item :', count);

    const avg = sum / count ;

    return avg;
    
}

const avg = oddAverage(numbers);
console.log('average of the odd numbers is :', avg);