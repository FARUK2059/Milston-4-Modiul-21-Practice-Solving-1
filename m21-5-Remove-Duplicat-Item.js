                                         //  Modiul --- 21.5
                                            

// Concept ===>  Remove Duplicate Items From An Array
                            //  start Modiul


/*
******** array has some duplicate elements
*/ 

const biriKhor = [ 'abul', 'babul', 'cabul', 'sokul', 'dekul', 'ekul', 'babul', 'dekul'];

function noDuplicat(array){
    console.log('Totla name', array);

    const unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicat(biriKhor);
console.log('The Unique Array is :', uniqueArray);

/*
******** array has some duplicate number of elements
*/ 

const numbers = [ 1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicat2(array){
    console.log( 'Totla Number :', array);

    const unique = [];
    for (const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueNumber = noDuplicat2(numbers);
console.log('The Unique Array is :', uniqueNumber);