const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', discountPrice);

// const couponsObj = {
//     'thirty_percent_discount': 30,
//     'twenty_percent_discount': 20,
//     'fifteen_percent_discount': 15,
// };

const couponList = [];
couponList.push({
    name: 'thirty_percent_discount',
    discount: 30,
})
couponList.push({
    name: 'twenty_percent_discount',
    discount: 20,
})
couponList.push({
    name: 'fifteen_percent_discount',
    discount: 15,
})

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

    function couponFilter(couponElement) { //{name, discount}
       return couponElement.name == coupon;
    }

    const couponInArray = couponList.find(couponFilter);

    if (couponInArray) {
        discount = couponInArray.discount
    } else {
        pResult.innerText = 'El cupón no es válido'
        return;
    }
  
    // const couponInArray = couponList.filter(couponFilter);

    // if (couponInArray.length > 0) {
    //     discount = couponInArray[0].discount
    // } else {
    //     pResult.innerText = 'El cupón no es válido'
    //     return;
    // }

    // if (couponsObj [coupon]) {
    //     discount = couponsObj [coupon]
    // } else {
    //     pResult.innerText = 'El cupón no es válido'
    //     return;
    // }

    // switch (coupon) {
    //     case 'thirty_percent_discount':
    //         discount = 30;
    //         break;
            
    //     case 'twenty_percent_discount':
    //         discount = 20;
    //         break;

    //     default:
    //         pResult.innerText = 'El cupón no es válido'
    //         return;
    // }

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