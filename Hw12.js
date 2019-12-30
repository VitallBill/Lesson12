function show(data) {
    console.log(data);
}


//1. Написати код в якому: створити 5 обєктів класу Person, який матиме поля `name`, `age`. Створити об"єкт Map, додати об"єкти Person в Map. Зробити функцію яка буде приймати Map як вхідний параметр та виводитиме всі її елементи на текстову консоль у форматі: ` name : Andrii, age : 33`


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

var vasya = new Person('Vasya',25);
var masha = new Person('Masha',22);
var misha = new Person('Misha',26);
var lola = new Person('Lola',19);
var tanya = new Person('Tanya',21);

var map = new Map();

map.set(0,vasya)
   .set(1,masha)
   .set(2,misha)
   .set(3,lola)
   .set(4,tanya);

//show(map);

//var values = map.values();
//
//
//for (var pers of values) {
//    show(pers);
//}


function showAllInMap (mp){
    var values = map.values();
    for (var pers of values) {
    show(pers);
}
}

showAllInMap(map);


//2. Написати код в якому: створіть функцію, яка прийматиме два числа і тип операції над ними (множення ділення, додавання віднімання). Передбачити відловлювання exceptions за умови некоректних вхідних даних.


function adding(a,b) {
    return show(a+b);
}
//adding(5,2);
function substracting(a,b){
    return show(a-b);
}
//substracting(5,2);
//substracting(5,20);
function multiply(a,b){
    return show(a*b);
}
//multiply(2,10);
//multiply(2,-10);
function divide(a,b){
    return show(a/b);
}
//divide(5,2);
//divide(5,-2);
//divide(0,2);
//divide(2,0);

function setOperands (a,b,operation){

try{
    var res = operation(a,b);
    return show(res);

}catch(e){
    if (operation == undefined){
        show('Uncorrect operation!')
    }  else if (a !== 1 || b !== 1) {
        show('Uncorrect numbers')
    } else {
        show('Uncorrect input')
    }

}
}

setOperands(4,10,multiply);


//-----------------------------------------------------------------------
//пробував ще по типах помилок але референсні помилки не хоче ловити


//
//function setOperands2 (a,b,operation){
//
//try{
//    var res = operation(a,b);
//    return show(res);
//
//}catch (e) {
//    if (e instanceof TypeError) {
//        show('тип');
//    } else if (e instanceof ReferenceError) {
//        e = 'dsafasfas';
//        show(e)
//    } else if (e instanceof EvalError) {
//        show('оцен');
//    } else {
//       show('друг');
//    }
//}
//}
//setOperands2(2,3,m1ultiply);


