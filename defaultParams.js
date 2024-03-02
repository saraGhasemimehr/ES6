/*
"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"
*/

const groceryShop = (food = 'something') => `I'm going to buy ${food} from the grocery shop`;

 
console.log(groceryShop());