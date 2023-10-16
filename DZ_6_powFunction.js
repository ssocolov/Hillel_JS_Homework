//Написати функцію pow(x,y) яка буде приймати 2 числа, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

function pow(numb,degree){
    let result = 1;
    for(let i = 0; i < degree; i++){
        result *= numb;
    }
    return result;
}

console.log(pow(2,3))

