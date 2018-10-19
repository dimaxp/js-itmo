'use strict';

// Задание 1
// 1.1. создать 2 объекта sity1 и sity2 со следующими свойствами:
//     name, population, mayor
// двумя разными способами (первый объект одним способом, второй другим)
//
// 1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)
//


let sity1 = {
    name: 'Cherepovets',
    population: 350000,
    mayor: 'Kuvshinnikov',
    pereezd1: function (a) {this.population = this.population + a;
        sity2.population = sity2.population - a;

        return this.population;
    }

};




console.log(sity1);



let sity2 = {};
sity2["name"] = 'StP';
sity2["population"] = 5000000000;
sity2["mayor"] = 'Matvienko';


console.log(sity2);

// console.log(sity1.pereezd(sity2['Population'],400));
console.log(sity1.pereezd1(400000));
console.log(sity2.population);



/*1.3. Написать функцию (вне этих объектов),
которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)*/

let whoIs = function (s) {

    return s.mayor;

}


console.log(whoIs(sity2));




/*1.4. Создать объект president c методом changeCountryMayor(),
   благодаря которому он сможет менять мэра города
(в зависимости от объекта, переданного в качестве аргумента)*/


let president = {
    changeCountryMayor: function (mm) {
       return mm.mayor = "Новый мэр";
    }
}
president.changeCountryMayor(sity1);
console.log(sity1.mayor);



// Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку


let mystr2 = "Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку";
let mypodstr = "и";

//let counts = mystr2.indexOf(mypodstr);

let searchPod = function (hh,ll)
{
    let znak = 0;

    for (var inn = 0; hh.length < hh.indexOf(ll,znak); inn++)
    {znak = hh.indexOf(ll);}

return inn;
}
// console.log(counts);
console.log(searchPod(mystr2,mypodstr));


// К сожалению не успел доделать что хотел(



// Задание 3
// Написать функцию - конвертер строки.
//     Возможности:
// перевод всех символов в верхний регистр,
//     перевод всех символов в нижний регистр,


let mystr = "Написать функцию - конвертер строки. Возможности: перевод всех символов в верхний регистр, перевод всех символов в нижний регистр";

let perevodStr = function (a) {

if (a){
return mystr = mystr.toLowerCase();
 }
else {return mystr = mystr.toUpperCase();}

 }

console.log(perevodStr(1));
