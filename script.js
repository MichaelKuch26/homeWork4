// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  }; if (i % 2 === 0 && i !== 0) {
    console.log(`${i} - четное число`);
  }; if (i % 2 !== 0) {
    console.log(`${i} - нечетное число`);
  };
};

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.splice(3,2);
console.log(arr1);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
let arr = [];
arr.push(Math.floor(Math.random(9)*10));
arr.push(Math.floor(Math.random(9)*10));
arr.push(Math.floor(Math.random(9)*10));
arr.push(Math.floor(Math.random(9)*10));
arr.push(Math.floor(Math.random(9)*10));
console.log(arr);
let sum = 0;
let minNum = arr[0];
let numThree = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (minNum > arr[i]) { 
    minNum = arr[i];
  }
  if (arr[i] === 3) {
    numThree = arr[i];
    console.log(` В этом массиве есть число ${numThree}`);
  }
}
console.log(minNum);
console.log(sum);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let fig = "";
for (let i = 0; i < 20; i++) {
  fig += "x";
  console.log(fig);
}