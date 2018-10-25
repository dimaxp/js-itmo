/*
Задача 1
Дана радиокнопка и контейнер (div) с какой либо информацией.
Когда кнопка выбрана (checked) открывать div, в противном случае, скрывать блок.*/
'use strict';
let checka = document.getElementById('checka');
console.log(checka);
checka.addEventListener('click', Perekluchay);

console.log(checka.checked);
function Perekluchay() {
    if (!checka.checked)
    {  document.getElementById('skritblock').classList.remove('none');

        }
        else { document.getElementById('skritblock').classList.add('none');}


}





/*Задача 2
Реализовать возможность добавления комментариев
к статье.
    Текст комментария пользователь вводит в <textarea>,
    добавление происходит по нажатию на кнопку Комментировать.*/

let buttonComment = document.getElementById('sendcomment');
buttonComment.addEventListener('click', sendComment);


function sendComment(event) {
event.preventDefault();
let commentlist = document.getElementById('commentlist');
let textarea = document.getElementById('tetxcomment');
    textarea = textarea.value;
let textareatext = document.createTextNode(textarea);

console.log(textareatext);

let blockComment = document.createElement('div');
    blockComment.classList.add('commentone')
    blockComment.appendChild(textareatext);
    commentlist.appendChild(blockComment);
}





/*

Задача 4
Сгенерировать игровое поле (задача 1 предыдущего дз),
в ячейки рандомно спрятать несколько призов.
    Пользователю дается 3 попытки найти их -
по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд),
либо иконка, сообщающая, что приза нет.
    Количество оставшихся попыток выводим рядом с игровым полем.*/
let pole = document.getElementById("pole")

let n = 4;
let g = 0;

let randoms = [];


function getRand(f) {
return Math.floor(Math.random() * f*f);
}



for (let kk = 0; kk < 3; kk++)
{

    randoms.push(getRand(n));
}

console.log(randoms);








for (let i = 0; i < n; i++){

    let div = document.createElement("div");
    pole.appendChild(div).classList.add("hell");

    for (let s = 0; s < n; s++){
        let div2 = document.createElement("div");

        div2.setAttribute('data-index', g);
        g++;

        div.appendChild(div2).classList.add("hell3");
    }


}













let hell = document.getElementsByClassName("hell3");
console.log(hell);

for(let l = 0; l < hell.length; l++)
{
    hell[l].addEventListener('click', function () {
//console.log(randoms.indexOf(this.dataset.index));
        console.log(this.dataset.index);


    });
}



let popitka = 3;
