//Задача 2
let monthNum = new Date().getMonth();
if (monthNum === 11 || monthNum === 0 || monthNum === 1)
{console.log("Зима");}
if (monthNum === 2 || monthNum === 3 || monthNum === 4)
{console.log("Весна");}
if (monthNum === 5 || monthNum === 6 || monthNum === 7)
{console.log("Лето");}
if (monthNum === 8 || monthNum === 9 || monthNum === 10)
{console.log("Осень");}


//Задача 6
let tarelki = 30;
let sredstvo = 10;
do {
    console.log('Моющего средства осталось:', sredstvo);
if (sredstvo == 0) {
        console.log('Осталось грязных тарелок:', tarelki);
    break;
    }

else if (tarelki == 0) {
        console.log('Тарелки кончились. Осталось моющего средства:', sredstvo);
        break;
    }

sredstvo = sredstvo - 0.5;
tarelki = tarelki - 1;

} while (sredstvo >= 0 || tarelki >= 0);



//Задача 8
for (let i = 90; i >= 0; i=i-5) {
    console.log(i);
}




// Задача 9
let cif = 2;
for (let i = 20; i >= 0; i--) {
console.log(cif = cif * 2);
}


// Есть три вершины X, Y, Z.
//     Их координаты (x1, x2), (y1, y2), (z1, z2) заданы как целые числа.
//     Нужно определить - является ли треугольник с заданными координатами прямоугольным.

// let x1 = 10;
// let x2 = 10;
//
// let y1 = 30;
// let y2 = 25;
//
// let z1 = 20;
// let z2 = 45;



let x1 = 20;
let x2 = 20;

let y1 = 20;
let y2 = 40;

let z1 = 20;
let z2 = 40;


let storona1 = Math.pow(z1-x1,2) + Math.pow(z2-x2,2);
let storona2 = Math.pow(y2-x2,2) + Math.pow(y1-x1,2);
let storona3 = Math.pow(y2-z2,2) + Math.pow(z1-y1,2);

storona1 = Math.sqrt(storona1);
storona2 = Math.sqrt(storona2);
storona3 = Math.sqrt(storona3);




let arrStorony = [storona1,storona2,storona3];
arrStorony.sort(function(a,b){return a-b;});
console.log(arrStorony);
let summa = Math.pow(arrStorony[0],2) + Math.pow(arrStorony[1],2);
let gipotenuza = Math.pow(arrStorony[2],2);


if (gipotenuza === summa)
{console.log('Прямоугольник прямой');}
else
{console.log('Прямоугольник не прямой');}



