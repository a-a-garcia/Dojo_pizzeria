// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     let pizza = {}
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// } 

// console.log(pizzaOven("deep dish", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))

// console.log(pizzaOven("hand tossed", "marinara", ["mozzarella"], ["pepperoni", "sausage"]))

let crustTypes = ["deep dish", "hand tossed", "chicago style", "thin crust"] 
let sauceTypes = ["marinara", "traditional", "pesto", "alfredo"]
let cheeses = ["mozzarella", "feta", "monterey jack", "parmesan"]
let toppings = ["mushrooms", "olives", "onions", "pepperoni", "sausage", "bell peppers", "jalapenos", "pineapple", "spinach"]


function randomPizza() {
    let pizza = {}
    function randomizer(arr) {
        let arrRandomized = [];
        let randomNumber = Math.floor(Math.random() * arr.length) 
        arrRandomized.push(arr[randomNumber]) //randomly picking a topping from the array that is passed into this function
        console.log(arrRandomized)
    }
    function toppingRandomizer(arr) {
        let arrRandomized = [];
        let randomNumberOfToppings = Math.floor(Math.random() * 5); //randomly deciding how many toppings to put on the pizza, up to a maximum of 5
        for (let i = 0; i <= randomNumberOfToppings; i++) { //using a for loop to pick random toppings depending on the randomized number above
            let randomTopping = arr[Math.floor(Math.random() * arr.length)] // each time the loop runs, a new random topping will be selected from the toppings array
            if (!arrRandomized.includes(randomTopping)) { //only if the selected random topping is NOT in the array will it be pushed into the new randomized array.
                arrRandomized.push(randomTopping)
            }
        }
        console.log(arrRandomized)
        return arrRandomized
    }
    pizza.crustType = randomizer(crustTypes);
    pizza.sauceType = randomizer(sauceTypes);
    pizza.cheeses = randomizer(cheeses);
    pizza.toppings = toppingRandomizer(toppings);
}

randomPizza()