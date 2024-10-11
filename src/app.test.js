// Import the function sum from the app.js file
const { fromEuroToDollar } = require('./app.js');
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


describe ('fromEuroToDollar', () =>{
    test("One euro should be 1.07 dollars", function() {
        // Importo la funcion desde app.js
        const { fromEuroToDollar } = require('./app.js');
    
        // Uso la función como debe ser usada
        const dollars = fromEuroToDollar(3.5);
    
        // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
        const expected = 3.5 * 1.07;
    
        // Hago mi comparación (la prueba)
        expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })
});


describe ('fromDollarToYen', () => {
    test("One dolar should be 146.26 yen", function() {
        
        const { fromDollarToYen } = require('./app.js');
    
        const yen = fromDollarToYen(3.5);
    
        const expected = 3.5 * 146.26;
    
        expect(yen).toBe(expected); 
    })
});


describe ('fromYenToPound', () => {
    test("One pound should be 179.88 yen", function() {
        
        const { fromYenToPound } = require('./app.js');
    
        const pound = fromYenToPound(3.5);
    
        const expected = 3.5 * 179.88;
    
        expect(pound).toBe(expected); 
    })

});