export const addToCart = (aCart, aProd) => {
    aCart.push(aProd);
    return aCart;
}

export const add3Products = (aCart) => {
    let newCart = addToCart(aCart, {name: 'iPhone', price: 1500, qty: 2});
    newCart = addToCart(aCart, {name: 'Galaxy S24', price: 1500, qty: 1});
    newCart = addToCart(aCart, {name: 'Pixel 8', price: 1500, qty: 1});
    return newCart;
};

export const getAmount = (cart) => {
    let amount = cart.reduce((accumulatore, numero)=>{
        return accumulatore + numero.price * numero.qty;
    },0);
    return amount;
};

export const getTotalQty = (cart) => {
    let quantity = cart.reduce((accumulatore, numero)=>{
        return accumulatore + numero.qty;
    },0);
    return quantity;
};

export const resetCart = (cart) =>{
    cart.splice(0,cart.length);
    return cart;
}