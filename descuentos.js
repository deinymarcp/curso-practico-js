// const precioOrginial = 100;
// const descuento = 15;

function calcularPrecioDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularDescuento () {
    const inputPrice = document.getElementById("precio");
    const priceValue = inputPrice.value;

    const inputDescount = document.getElementById("descuento")
    const descountValue = inputDescount.value;

    const precioDescuento = calcularPrecioDescuento(priceValue, descountValue);

    const resultP = document.getElementById("PriceInfo");
    resultP.innerText = `Tu precio es ${priceValue}, el descuento es de ${descountValue} y el precio total con desceunto es de ${precioDescuento}.`;
}



// document.write(`Tu precio es ${priceValue}, el descuento es de ${descountValue} y el precio total con desceunto es de ${precioDescuento}`);