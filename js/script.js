//Задача №1
let visot = 10, shirina = 20, dlina = 40;
let plosh = 2*(dlina*shirina + shirina*visot + dlina*visot);
console.log("Площадь:",plosh);
console.log(dlina > visot ? "длина больше" : "высота больше");


//Задача 2
let ploshadUchastka = 10; //Значение в сотках
ploshadUchastka = ploshadUchastka*100; //Переводим в квадратные метры
let gradkaDlina = 15;
let gradkaShirina = 25;
let ploshadGradki = gradkaDlina*gradkaShirina;
console.log("Площадь участка:",ploshadUchastka);
console.log("Площадь одной грядки:",ploshadGradki);
console.log("Свободные метры",ploshadUchastka % ploshadGradki);

//Задача 3
let ploshadOvala = 15; //Значение в Дм
ploshadOvala = 15*100; //Переводим в см
let virizaem = 600;
console.log("Площадь кольца",ploshadOvala - virizaem);

//Задача 4
let X = null;
let Y = null;
X = 2;
Y = 3;
console.log("Значение Y больше",Y > X);


//Задача 6
let razmerKredita = 500000;
let srok = 3;
let stavka = 7;
let procenti = razmerKredita + razmerKredita / 100 * 7 * 3;
console.log("Переплата",procenti - razmerKredita);









