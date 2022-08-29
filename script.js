// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

const sumNumbers = (a, b) => {
  let sum = "";

  if (typeof a === "undefined" || typeof b === "undefined") {
    console.log("введите два параметра");
  } else {
    if (typeof a === "number" && typeof b === "number") {
      sum = a + b;
    } else {
      console.log("введенные данные не являются числами");
    }
  }

  return sum;
};
console.log(sumNumbers(1, 100));

// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100

// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
function square(a) {
  if (typeof a !== "undefined") {
    console.log(a * a);
  } else {
    console.error(' Функция "square" не может быть вызвана без аргумента');
  }
}
square();

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {

   return Math.floor(Math.random() * (max - min)) + min;

}
let randomNumber = getRandomInteger(1,10)

let numberUser = +prompt("введите число");
const guesNumber = (number) => {
  number = numberUser;
  if (number > 10 || number < 1) {
    alert("ошибка,введите число от 1 до 10");
  } else {
    if (randomNumber == number) {
      alert("вы выиграли");
    } else {
      alert(
        `вы не угадали,ваше число - ${number}, а выпало число ${randomNumber}`
      );
    }
  }
};
guesNumber();

// Задание 4

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];

const filterFor = (arr, a) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a) {
      array.push(arr[i]);
    }
  }
  return array;
};
console.log(filterFor(arr, 5));

// Задание 5

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
const arr1 = [1, 2, 3, 4, 5];
const copyArr = arr1.map((element) => element);

console.log(copyArr);
console.log(arr1);

// Задание 6

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

const sumObjectValues = (object) => {
  let sum = 0;
  for (let key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    }
  }
  return sum;
};
console.log(sumObjectValues(objectWithNumbers));
