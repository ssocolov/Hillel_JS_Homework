
// DZ_5


const a = prompt(['Оберіть одиницю вимірювання (год, кг, км)']);

// свитч для выбора единицы измерения

switch (a) {
    case 'год':
        var ours = (prompt(['Введіть кількість годин']));
        var ours_to_min = ours * 60;
        alert(ours + ' год, це ' + ours_to_min + ' хв.')
        break;

    case 'кг':
        var weight = (prompt(['Введіть вагу у КГ']));
        var kg_to_g = weight * 1000;
        alert(weight + ' кг, це ' + kg_to_g + ' грамів');
        break;

    case 'км':
        var long = (prompt(['Введіть відстань у КМ']));
        var km_to_m = long * 1000;
        alert(long + ' км, це ' + km_to_m + ' м');
        break;

    default:
        console.log(alert('Не вірне введення! Оновіть сторінку та введіть один з варіантів: год, кг, км.'));
}



