//декларативний опис
//відстань між точками
let x1 = 2, y1 = 2, x2 = 1, y2 = 5, x3 = 0, y3 = -2;
// let distance12 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// let distance13 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
// let distance23 = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
let distance12 = distance(x1, y1, x2, y2);
let distance13 = distance(x1, y1, x3, y3);
let distance23 = distance(x2, y2, x3, y3);
document.write(`${distance12} <br> ${distance13} <br> ${distance23}`);

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}