//ДЗ 1 Без А
var x = "Щука пойманная на Тиогу имеет + 10 ко вкусу"       // "Тиога" это модель приманки от производителя Lucky John
var re = /[^AaАа]{6,}/
// console.log(re.test(x));
console.log(x.match(re)[0]);


//ДЗ 2 Параноя
// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
//  За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
// - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function paranoia(arr){
    const re = /^([a-zA-Z0-9]+\.{1})?[a-zA-Z0-9]+\@(gmail|yahoo)\.com$/;
    let allowed_address = [];
    for (let i = 0; i < arr.length; i++) {
        if (re.test(arr[i].email)) {
            allowed_address.push(arr[i].email);
        }
    }
    return allowed_address;
}

console.log(paranoia(arr));