//positive, negative, and edge case tests for the three methods

const {addItem, removeItem, getTotalItems} = require('../cart.js'); 


describe(`addItem`, function(){
    //positive test case
    test(`Should add specified number of items to cart`, function(){
       const cart = [];
       const result = addItem(cart, "apple", 1);
        expect(result).toEqual(['apple']);

    });

    test(`Should add item to cart multiple times`, function(){
        const cart = [];
        const result = addItem(cart, "apple", 3);
        expect(result).toEqual(['apple', 'apple', 'apple']);
    });

    test(`Does not add items if quantity is zero`, function(){
        const cart = [];
        const result = addItem(cart, 'apple', 0);
        expect(result).toEqual([]);
    })

    //negative test case
    test(`String in quantity parameter should add nothing to array`, function(){
        const cart = [];
        const result = addItem(cart, "apple", "fry");
        expect(result).toEqual([]);

    })

    test(`Number in string parameter should...`, function(){
        const cart = [];
        const result = addItem(cart, 1, 2);
        expect(result).toEqual([]);

    })

    test(`Negative number should fail gracefully.`, function(){
        const cart = [];
        const result = addItem(cart, 'apple', -2);
        expect(result).toEqual([]);
    })

    //Edge Case
    test(`Empty strings should not be added to the cart`, function(){
        const cart = [];
        const result = addItem(cart, "", 44);
        expect(result).toEqual([]);

    })

});

describe(`removeItem`, function(){
    //positive case
    test(`Should remove specified item from cart.`, function(){
        const cart = ["cheese"];
        const result = removeItem(cart, "cheese");
        expect(result).toEqual([]);
    
    })

    //negative case
    test(`Should handle removing from empty cart`, function(){
        const cart = [];
        const result = removeItem(cart, "apple");
        expect(result).toEqual([]);
    })

     test(`Should continue functioning if no item argument provided`, function(){
        const cart = [];
        const result = removeItem(cart);
        expect(result).toEqual([]);

     })
    //Edge case
    test(`Should continue functioning with strange inputs.`, function(){
        const cart = [];
        const result = removeItem(cart, null);
        expect(result).toEqual([]);

     })

     test(`Should continue functioning if cart parameter is funky`, function(){
        const cart = [];
        const result = removeItem(null, "apple");
        expect(result).toEqual([]);

     }) //Why does this test fail? I am not capturing the null error for some reason. 

    });

    describe(`getTotalItems`, function(){
        //positive case
        test('Function should return the number of items in the array.', function(){
            const cart = ['1', '2', '3', '4', '5'];
            const result = getTotalItems(cart);
            expect(result).toEqual(5)

         })
        //negative test
        test('If cart is not an array, return 0 and print an error.', function(){
            const cart = [];
            const result = getTotalItems("not an array");
            expect(result).toEqual(0);


        })
        //edge cases
        test('Empty array should return 0', function(){
            const cart = [];
            const result = getTotalItems([]);
            expect(result).toEqual(0);
        })

        test('Mixed-types array does not cause error to throw and counts correctly.', function(){
            const cart = [];
            const result = getTotalItems([1, 'cheese', ['hi', 'bye']]);
            expect(result).toEqual(3);
        })


    });