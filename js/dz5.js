'use strict';
//Задача 1


let pole = document.getElementById("pole")

let n = 4;

for (let i = 0; i < n; i++){

let div = document.createElement("div");
 pole.appendChild(div).classList.add("hell");

    for (let s = 0; s < n; s++){
        let div2 = document.createElement("div");
        div.appendChild(div2).classList.add("hell3");
    }


}








//Задача 2

setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minute = (date.getMinutes() >= 10) ?  date.getMinutes() : '0' +date.getMinutes();
    let seconds = (date.getSeconds() >= 10) ? date.getSeconds() : '0' + date.getSeconds();
    let go = hours+':'+minute+':'+seconds;
    let chasiki = document.getElementById('chasiki');
    let tik = document.querySelector("span");
    chasiki.removeChild(tik);
    tik = document.createElement('span');
    let text = document.createTextNode(go);
    tik.appendChild(text);
    chasiki.appendChild(tik).classList.add('tik');;

}, 1000);





//Задача 3

let users = createUserArr();//  данные для вывода в таблицу
function createUserArr() {
    let arr = [];
    for (let i = 0; i < 15; i++){
        arr.push(
            {
                id: i,
                name: "Какое-то имя",
                email: "Email",
                phone: "+79991112233",
                position: "Должность"
            }
        )
    }
    return arr;
}
console.log(users[0].id);


for (let i = 0; i < users.length; i++){

let mytable = document.querySelector("#mytable > tbody");
let tr = document.createElement("tr");
let myobb = users[i];

    for (let s in myobb) {
        let textmy = document.createTextNode(myobb[s]);
        let td = document.createElement("td");
        td.appendChild(textmy);
        tr.appendChild(td);

    }

    mytable.appendChild(tr);



}


