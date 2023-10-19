//Задача 1
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
// Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
// Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

let juniorQA = {
    name: "Сергей",
    address: "Earth",
    certificate: true,
    english: "intermediate",
    "likes JS": true,
    getInfo: function () {
        let info = "";
        for (let key in juniorQA) {
            if (juniorQA.hasOwnProperty(key)) {
                info += key + ": " + juniorQA[key] + "\n";
                if (typeof juniorQA[key] === "function") {
                    continue;
                }
                console.log(key, ":", juniorQA[key]);
            }
        }
    }
};
juniorQA.getInfo()
console.log("____________________________________________")
juniorQA.age = 38;
juniorQA.getInfo()

// Задача 2
// Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
//         var services = {
//         "стрижка": "60 грн",
//         "гоління": "80 грн",
//         "Миття голови": "100 грн"
//           };
// "Послуги" можуть додаватися по ходу роботи:
//     services['Розбити скло'] = "200 грн";
// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price
//
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
        price: function() {
        let total = 0;
        for (let serviceName in this) {
            if (typeof this[serviceName] === "string") {
                let price = parseInt(this[serviceName]);
                if (!isNaN(price)) {
                    total += price;
                }
            }
        }
        return total + " грн";
    },
    minPrice: function() {
        let min = Infinity;
        for (let serviceName in this) {
            if (typeof this[serviceName] === "string") {
                let price = parseInt(this[serviceName]);
                if (!isNaN(price) && price < min) {
                    min = price;
                }
            }
        }
        return min + " грн";
    },
    maxPrice: function() {
        let max = 0;
        for (let serviceName in this) {
            if (typeof this[serviceName] === "string") {
                let price = parseInt(this[serviceName]);
                if (!isNaN(price) && price > max) {
                    max = price;
                }
            }
        }
        return max + " грн";
    }
};
services["Розбити скло"] = "200 грн";
services["Бокал шампанського"] = "150 грн";
services["Розповісти анекдот про путіна"] = "10 грн";
console.log(services);
console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна вартість послуги: " + services.minPrice());
console.log("Максимальна вартість послуги: " + services.maxPrice());