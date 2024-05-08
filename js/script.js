const priceForKm = '0.276';
const userKM = prompt('quanti km vuoi fare?');
const userAge = prompt('quanti anni hai?');
let discountYoung = '21';
let discountOld = '42';
let comparisonA = userAge < 18;
let comparisonB = userAge > 65;
let price

if (comparisonA === true) {
    let price = ((userKM * priceForKm) - ((userKM * priceForKm) / 100) * discountYoung)
    console.log(price.toFixed(2) + '€');
} else if (comparisonB == true) {
    let price = ((userKM * priceForKm) - ((userKM * priceForKm) / 100) * discountOld)
    console.log(price.toFixed(2) + '€');
} else {
    let price = (userKM * priceForKm)
    console.log(price.toFixed(2) + '€');
}

