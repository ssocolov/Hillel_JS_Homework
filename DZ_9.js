// Задача 1 "Тусувати масив"
function myBlend(arr) {
        for (let i = arr.length - 1; i > 0; i--) {   //перебираем элементы массива в обратном порядке
        let randomIndex = Math.floor(Math.random() * (i + 1));    //генерируем случайный индекс в границах массива
        let temp = arr[i];            //сохраняем значение поточного элемента массива arr[i] в переменной temp
        arr[i] = arr[randomIndex];      // меняем поточный элемент на arr[randomIndex]
        arr[randomIndex] = temp;        // меняем элемент arr[randomIndex] на начальное значение temp
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);

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
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
        for (let i in company.clients) {
            if (company.clients[i].name === companyName) {
                return Object.entries(company.clients[i]);
            } else {
                for (let o in company.clients[i].partners) {
                    if (company.clients[i].partners[o].name === companyName) {
                        return Object.entries(company.clients[i].partners[o]);
                    } else {
                        for (let p in company.clients[i].partners[o].partners) {
                            if (company.clients[i].partners[o].partners[p].name === companyName) {
                                return Object.entries(company.clients[i].partners[o].partners[p]);
                                } else {
                                    if (companyName === 'Велика Компанія') {
                                        return Object.entries(company);
                                }
                            }
                        }
                    }
                }
            }
        }
}

console.log(findValueByKey('Клієнт 2'));