//Написати свою реалізацію функції isNaN.
function my_IsNaN(value) {
    return typeof value === "number" && value !== value; // проверяем является ли value числом && проверка на NaN. Если оба true то true, если хоть один false, то false.
}
console.log(my_IsNaN(NaN))
console.log(my_IsNaN(22))
console.log(my_IsNaN("hillel"))

// Необхідно написати власну реалізацію функцій padEnd та padStart,
// але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:
// - рядок, до якого буде додаватися символ.
// - символ, який буде додаватися.
// - Скільки додавати символів
// - булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
// - останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
function pad(string, symbol, length, boolean_value) {
    if (typeof string !== 'string' || typeof symbol !== 'string' || typeof length !== 'number' || typeof boolean_value !== 'boolean') {         // проверяем типы аргументов
           console.log("не вірний аргумент") }                  // ошибка при вводе не ожидаемого аргумента
    if (string.length >= length) {          //сравниваем длину строки с желаемой длиной строки
        return string;
        }
    let padding = symbol.repeat(length - string.length);        // сохраняем в переменной количество символов, чтобы достичь желаемой длины
    if (boolean_value) {                // добавляем символы:
        return padding + string;        // если истина то в начале строки
    } else {
        return string + padding;        //если ложь, то в конце строки
    }
}
console.log(pad("hillel", "!", 9, true))

//Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
// Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
// Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.
//Умови виконання ДЗ
// Функція виводить інформацію:
// - кількість згенерованих чисел
// - кількість парних чисел
// - кількість не парних чисел
// - відсоток парних до не парних
function checkProbabilityTheory(count) {
    let even = 0;                   //четные
    let not_even = 0;               //не четные

    for (let i = 0; i < count; i++) {           // цикл генераций от 0 до count раз
                 let randomNumber = Math.floor(Math.random() * 901 + 100);  // генерируем рандомное число при помощи Math.random,
                                                                                        // умножаем полученное число на наш диапазон и прибавляем 100,
                                                                                        //чтобы отсечь нижнюю границу диапазона. Округляем(Math.floor)
        // console.log(randomNumber)

        if (randomNumber % 2 === 0) {           //если четное, то увеличиваем even
            even++;
        } else {                               //если не четное, то увеличиваем not_even
            not_even++;
        }
    }
    let totalNumb = even + not_even;            // считаем общее количество сгенерированных чисел
    let percentEven = (even / totalNumb) * 100; // вычисляем процент четных чисел
    let percentNot_even = (not_even / totalNumb) * 100; // вычисляем процент нечетных чисел

    console.log("Кількість згенерованих чисел: " + totalNumb);
    console.log("Кількість парних чисел: " + even);
    console.log("Кількість непарних чисел: " + not_even);
    console.log("Відсоток парних до непарних: " + percentEven.toFixed(1) + "% : " + percentNot_even.toFixed(1) + "%");
}

checkProbabilityTheory(853);
