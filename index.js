import { add3Products, getAmount, getTotalQty, resetCart } from "./cart.js";

let cart = []; //carrello globale

//aggiungi tre elementi
console.log(add3Products(cart));
//calcolo prezzo totale
console.log(getAmount(cart));
//calcolo numero dei prodotti
console.log(getTotalQty(cart));
//svuota l'array
console.log(resetCart(cart));
