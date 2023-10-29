
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]; 
}

//Destructuracion del argumento de la funcion
export function taxCalcualtion( options: TaxCalculationOptions ): [number, number] {
    
    let {tax, products} = options;

    let total = 0;

    //Destructuracion del argumento pasado por el forEach
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//Destructuracion del array que devuelve el resultado
const [total, totalTax ] = taxCalcualtion({ 
    products: shoppingCart,
    tax: tax,
})


// console.log('Total', total);
// console.log('Tax', totalTax);

