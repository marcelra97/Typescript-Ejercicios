import { Product, taxCalcualtion } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

//Tax = 0.15
const [total, totalTax ] = taxCalcualtion({
    tax: 0.15,
    products: shoppingCart
})

console.log('Total', total);
console.log('Tax', totalTax);
