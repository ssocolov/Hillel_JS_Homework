// Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу):
// на першому рядку - одна зірочка, на другій дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри:
// висота трикутника та символ, яким його потрібно "малювати".

console.log("______1______")

function drawTriangle (height, symbol) {
    let row = "";
    for (let i = 1; i <= height; i++){
        row += symbol;
        console.log(row)
    }
}

drawTriangle (5, "*");

console.log("______2______")

function drawTriangle1(height, symbol) {
    for (let i = 1; i <= height; i++) {  //цикл отвечает за каждую строку треугольника где i-это номер строки
        let row = '';                       //в каждой строке мы создаем переменную row
        for (let n = 1; n <= i; n++) {      // проходим от 1 до n, n-номер текущей строки
            row += symbol;                  //добавляем количество символов соответствующее номеру строки
        }
        console.log(row);
    }
}

drawTriangle1(5, "+");

console.log("______end______")