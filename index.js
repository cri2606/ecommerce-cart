/**
 * 1) Permettere di inserire nel carrello dei prodotti "Add to cart"
 * 2) Aggiungiamo 3 prodotti nel carrello
 * 3) Calcolo del totale da pagare "Get amount"
 * 4) Calcolo del totale quantità prodotti "Get total qty"
 * 5) Funzionalità che svuota il carrello "Reset Cart"
 */

let cart = []; //carrello globale

/**
 * 1) Permettere di inserire nel carrello dei prodotti "Add to cart"
 * Dichiarazione della funzione
 * Input: prodotto
 */
const addToCart = (aCart, aProd) => {
    aCart.push(aProd);
    return aCart;
}

/**
 * 2) Aggiungiamo 3 prodotti nel carrello
 * Input: carrello
 * Output: carrello con i nuovi tre prodotti
 */

const add3Products = (aCart) => {
    let newCart = addToCart(aCart, {name: 'iPhone', price: 1500, qty: 2});
    newCart = addToCart(cart, {name: 'Galaxy S24', price: 1500, qty: 1});
    newCart = addToCart(cart, {name: 'Pixel 8', price: 1500, qty: 1});
    return newCart;
};

cart = add3Products(cart); //chiamata alla funzione
console.log(cart);

//calcolo prezzo totale
const getAmount = (cart) => {
    let amount = cart.reduce((accumulatore, numero)=>{
        return accumulatore + numero.price * numero.qty;
    },0);
    return amount;
};

console.log(getAmount(cart));

//calcolo numero dei prodotti
const getTotalQty = (cart) => {
    let quantity = cart.reduce((accumulatore, numero)=>{
        return accumulatore + numero.qty;
    },0);
    return quantity;
};

console.log(getTotalQty(cart));

//svuota l'array
const resetCart = (cart) =>{
    cart.splice(0,cart.length);
    return cart;
}

console.log(resetCart(cart));
