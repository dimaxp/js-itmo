'use strict';

// Задача 1
function dayMy(a) {
a = String(a);
let myarr = a.split('');
myarr = myarr[myarr.length - 1];

    if (myarr == 1)
    {
        console.log(a + " день");
    }
    else if (a >= 11 && a <= 14) {console.log(a + " дней"); return;}
    else if (myarr >= 2 && myarr <= 4) {console.log(a + " дня");}


    else {console.log(a + " дней");}

}

dayMy(23);


//Задача 3

 function copyArr(bff)
{


    let massiveTwo = [];

    for(let i = 0; i <= bff.length - 1; i++)
    {
           massiveTwo.push(bff[i]);

    }
    console.log(massiveTwo);

}

let massivOne = [1,2,3];
copyArr(massivOne);



//Задача 4
function podschet(n,m)
{
    for (;n<=m; n++);
    console.log(n);
}

podschet(0,10);



function podschetRek(n,m)
{
    if(n<=m)
    {   console.log(n);
        podschetRek(n+1);
    }
}

podschet(0,15);




//Задача 5
let peredaem = function (ww) {
    return function (shag) {
        console.log(ww - shag);
    }
};
peredaem(5)(2);


