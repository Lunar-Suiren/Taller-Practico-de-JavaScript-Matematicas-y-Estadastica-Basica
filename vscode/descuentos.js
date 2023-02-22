const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', discountPrice);

function discountPrice() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = 'por favor llena el formulario';
        console.log(price, coupon);
        return;
    }

    let discount;

    switch (coupon) {
        case 'thirty_percent_discount':
            discount = 30;
            break;
            
        case 'twenty_percent_discount':
            discount = 20;
            break;

        default:
            pResult.innerText = 'El cupón no es válido'
            return;
    }

    // if (coupon == 'thirty_percent_discount') {
    //     discount = 30;
    // } else if (coupon == 'twenty_percent_discount') {
    //     discount = 20;
    // } else {
    //     pResult.innerText = 'El cupón no es válido';
    //     return;
    // }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio es $' + newPrice;
}