
/* 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя. */


var numb = prompt("Введіть 3 числа", "");
var numbArr = numb.split("")
var sum = numbArr.reduce(function (summ, item) {
  return sum += parseInt(item)
}, 0)
var result = sum / numbArr.length
alert(result)


/* 2. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран. */

let a = prompt("Enter a number")
let b = prompt("Enter b number")
let c = prompt("Enter c number")

let maxNum = Math.max(a, b, c)
alert(maxNum)

/* 3 Дано два числа A и B где(A < B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. */

var a = 2;
var b = 40;
var result = 0;
//суму всех чисел расположенных в числовом промежутке от А до В.
do {
  result += a;
  a++;
}
while (a <= b);
document.write(result);



/* нечетные значения */
while (a < b) {
  a++
  console.log(a++)
}


5. Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов(n принять от пользователя).
       Числа Фибоначчи – это элементы числовой последовательности, в которой каждое последующее число равно сумме двух предыдущих.


var a = 0;
var b = 1;
var sum = 0;
var user = +prompt('Enter number');
for (let i = 1; i <= user; i++) {
  sum = a + b;
  a = b;
  b = sum;
  document.write(a + " ");
}



6. Вывести на экран таблицу умножения от 0 до 9.

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + "*" + j + "=" + (i * j))
  }
}