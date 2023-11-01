// Задача 1 "Тусувати масив"
// function myBlend(arr) {
//         for (let i = arr.length - 1; i > 0; i--) {   //перебираем элементы массива в обратном порядке
//         let randomIndex = Math.floor(Math.random() * (i + 1));    //генерируем случайный индекс в границах массива
//         let temp = arr[i];            //сохраняем значение поточного элемента массива arr[i] в переменной temp
//         arr[i] = arr[randomIndex];      // меняем поточный элемент на arr[randomIndex]
//         arr[randomIndex] = temp;        // меняем элемент arr[randomIndex] на начальное значение temp
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myBlend(arr);
// console.log(arr);

// Задача 2 "BigBoss"
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                            partners: [{
                                name: 'Нова компанія',
                                type: 'subSubCompany',
                                uses: 'Якесь рішення',
                                sells: 'Ще одне',
                            }]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [{
                name: "Qwerty",
                type: "subSubCompany",
                uses: "Рішення для продажу квитків",
                sells: "Рішення для продажу квитків",
                partners: [{
                    name: 'Qwerty1',
                    type: 'subSubCompany',
                    uses: 'any',
                    sells: 'any',
                    partners: [{
                        name: 'Qwerty2',
                        type: 'subSubCompany',
                        uses: 'tickets',
                        sells: 'sale'
                    }]
                }]
            }]
        }
    ]
};

function findValueByKey(object, companyName) {
    if (object.name === companyName) {
        return {
            object,
        };
    } else {
        for (let i in object) {
            if (Array.isArray(object[i])) {
                for (let o = 0; o < object[i].length; o++) {
                    if (typeof object[i] === "object") {
                        let rec_findValueByKey = findValueByKey(object[i][o], companyName);
                        if (rec_findValueByKey != undefined) {
                            return rec_findValueByKey;
                        }
                    }
                }
            }
        }
    }
    return null;
}
console.log(findValueByKey(company, 'Qwerty'));