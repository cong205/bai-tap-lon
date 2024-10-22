
const qualityProduct = document.getElementById('quanlity');

const minusProduct = document.querySelector('.cart__count--minus');
const plusProduct = document.querySelector('.cart__count--plus');

console.log(minusProduct);

let costProduct = document.querySelector('.cart__money');
let moneyProduct = costProduct.textContent;
moneyProduct = parseInt(moneyProduct.replace(/\./g, ''), 10);

let tien = moneyProduct;
console.log(typeof(tien));

// Định dạng số với dấu phân cách hàng nghìn (theo chuẩn Việt Nam)


minusProduct.onclick = function(e) {
    if(moneyProduct === 0) {
        return;
    }
    let quanlity = --qualityProduct.value;
    moneyProduct -= tien;
    price = moneyProduct.toLocaleString('vi-VN');
    costProduct.textContent = price;
}
plusProduct.onclick = function(e) {
    let quanlity = qualityProduct.value++;
    moneyProduct += tien;
    price = moneyProduct.toLocaleString('vi-VN');
    costProduct.textContent = price;
}


