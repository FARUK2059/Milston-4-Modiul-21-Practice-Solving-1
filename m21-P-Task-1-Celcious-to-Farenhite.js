                                         //  Modiul --- 21.9


/*
******** Write a function to convert temperature from Celsius to Fahrenheit.
*/ 
                                            /*** > Tasks 1 < **/ 

function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit: F = (C * 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Example usage:
// const celsiusTemperature = celsiusToFahrenheit(30);
const celsiusTemperature = celsiusToFahrenheit(45);
console.log('30 degre celcius to Farenhite valu is :', celsiusTemperature);
