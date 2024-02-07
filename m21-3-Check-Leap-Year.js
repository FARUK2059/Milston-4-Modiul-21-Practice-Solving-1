                                         //  Modiul --- 21.3
                                            

// Concept ===>   Check Whether A Year Is A Leap Year Or Not
                            //  start Modiul


/*
******** 1. Year will be leep Year if the year is divisible by 4.
*/ 

function isLeapYear (year){
    if (year % 4 === 0){
        return true;
    }

    else {
        return false;
    }
}

// const isLipi = isLeapYear(2043);
// const isLipi = isLeapYear(2040);
const isLipi = isLeapYear(2038);
console.log(isLipi);

/*
******** 2. Those year thet is not divisible by 100, if the year is divisible by 4: than it will be a leep year.
*/ 

function isLeapYear2(year){
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }

    if (year % 100 === 0 && year % 400 === 0){
        return true;
    }

    else {
        return false;
    }
}

const isLipi2 = isLeapYear2(2100);
const isLipi3 = isLeapYear2(2090);
const isLipi4 = isLeapYear2(2400);
const isLipi5 = isLeapYear2(1900);
const isLipi6 = isLeapYear2(2052);
console.log(isLipi2, isLipi3, isLipi4, isLipi5, isLipi6);