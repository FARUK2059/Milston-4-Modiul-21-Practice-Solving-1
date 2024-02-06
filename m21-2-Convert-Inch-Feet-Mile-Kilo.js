                                          //  Modiul --- 21.2
                                            

// Concept ===>   Unit Convert Inch To Feet, Miles To Kilometre
                            //  start Modiul

                                        

/*
******** Concept --> 12 inch = 1 feet
*/ 

        /*******  > Inch to Feet <  ********/ 

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// const myHeight = inchToFeet(66);
const myHeight = inchToFeet(62);
console.log('My Height is :', myHeight);






        /*******  > Extra Inch to Feet Convert <  ********/ 

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaing = inch % 12;
    const result = feetNumber+ ' ' + 'ft' + '  '+ inchRemaing + ' ' + 'inch.';
    return result;
}

const AmarHeight = inchToFeet2(68);
console.log('My Height is :', AmarHeight);





        /*******  > Mile to Kilomiter <  ********/ 

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const toKilometer = mileToKilometer(15);
console.log('The find of kilomiter is :', toKilometer);
