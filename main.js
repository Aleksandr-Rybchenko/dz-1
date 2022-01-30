// String
//   1.Найти все методы которые используются для работы
// со строками в JS с одним примером - выиграет тот кто найдет
// больше методов ;)))
//   Также добавьте комментарии к этому методу
//   Пример:
//   сonst a = ‘test’;
//   // длинна строки
//   console.log(‘result:’ s.length);

const str = "hello world"; // "" ӏ '' | ``
//0 - первая позиция в строке, 1 - вторая, 2 - третья ...

// lenght Возвращает длину строки
console.log(str.length);
// constructor Возвращает функцию конструктора строки
console.log(str.constructor);
// prototype Позволяет добавлять свойства и методы к объекту
// import {BigNumber} from 'ethers'
// String.prototype.toBigNumber = function () {
//   return BigNumber.from(this);
// };
// console.log("21".toBigNumber());

// Доступ к свойствам
console.log(str[2]); //string[0]
// Сравнение строк:
console.log("abz" > "abc"); // больше = true
console.log("abc" < "abz"); // меньше = true
// charAt() Возвращает символ по указанному индексу (позиции)
console.log(str.charAt(0));
// charCodeAt() Возвращает Unicode символа по указанному индексу
console.log(str.charCodeAt(0));
// concat() Объединяет две или более строк и возвращает новую объединенную строку
let concatText = "привет мир",
  dash = "-",
  space = " ";
console.log(str.concat(space, dash, space, concatText));
// endsWith() Проверяет, заканчивается ли строка указанной строкой/символами
console.log(str.endsWith("world")); // true
console.log(str.endsWith("hello")); // false
// fromCharCode() Преобразует значения Unicode в символы
console.log(String.fromCharCode(65));
// includes() Проверяет, содержит ли строка указанную строку/символы
console.log(str.includes("hello")); // true
console.log(str.includes("Hello")); // false
// indexOf() Возвращает позицию первого найденного вхождения указанного значения в строке
console.log(str.indexOf("h")); // 0
// lastIndexOf() Возвращает позицию последнего найденного вхождения указанного значения в строке
console.log(str.lastIndexOf("w"));
// localeCompare() Сравнивает две строки в текущем языковом стандарте
console.log(str.toLocaleLowerCase().localeCompare(str.toLocaleLowerCase())); // 0
// match() Ищет в строке совпадение с регулярным выражением и возвращает совпадения
console.log(str.match(/o/g)); // ["o", "o"]
// repeat() Возвращает новую строку с указанным количеством копий существующей строки
console.log(str.repeat(2));
// replace() Ищет в строке указанное значение или регулярное выражение и возвращает новую строку, в которой указанные значения заменены
console.log(str.replace("world", "Sasha")); // "hello Sasha"
// search() Выполняет поиск в строке указанного значения или регулярного выражения и возвращает позицию совпадения
console.log(str.search("hello"));
//split() Разбивает строку на массив подстрок
console.log(str.split(","));
// slice() Извлекает часть строки и возвращает новую строку
console.log(str.slice(-8, -3)); // 'lo wo'
// startsWith() Проверяет, начинается ли строка с указанных символов
console.log(str.startsWith("hell"));
// substr() Извлекает символы из строки, начиная с указанной начальной позиции и заканчивая указанным количеством символов
console.log(str.substr(0, 5));
// substring() Извлекает символы из строки между двумя указанными индексами
console.log(str.substring(0, 5));
// toLocaleLowerCase() Преобразует строку в строчные буквы в соответствии с локалью хоста
console.log(str.toLocaleLowerCase());
// toLocaleUpperCase() Преобразует строку в прописные буквы в соответствии с локалью хоста
console.log(str.toLocaleUpperCase());
// toLowerCase() Преобразует строку в строчные буквы
console.log(str.toLowerCase());
// toUpperCase() Преобразует строку в прописные буквы
console.log(str.toUpperCase());
// toString() Возвращает значение объекта String
console.log(Number(100500).toString());
// trim() Удаляет пробелы с обоих концов строки
console.log("         hello world       ".trim());
// valueOf() Возвращает примитивное значение объекта String
console.log(str.valueOf());

// МЕТОДЫ СТРОК HTML ОБОЛОЧКИ

// anchor() Создает привязку
console.log("link".anchor("schoolsw3.com"));
// big() Отображает строку крупным шрифтом
console.log("dsad".big());
// blink() Отображает мигающую строку
console.log("dsad".blink());
// bold() Выводит строку полужирным шрифтом
console.log("dsad".bold());
// fixed() Отображает строку с использованием шрифта с фиксированным шагом
console.log("dsad".fixed("TimesNewRoman"));
// fontcolor() Отображает строку с использованием указанного цвета
console.log("dsad".fontcolor("#fff"));
// fontsize() Отображает строку указанного размера
console.log("dsad".fontsize(20));
// italics() Отображает строку курсивом
console.log("dsad".italics(2));
// link() Отображает строку как гиперссылку
console.log("dsad".link(" https://google.com/ "));
// small() Отображает строку мелким шрифтом
console.log("dsad".small());
// strike() Отображает строку с зачеркиванием
console.log("dsad".strike());
// sub() Отображает строку в виде подстрочного текста
console.log("dsad".sub());
// sup() Отображает строку в виде надстрочного текста
console.log("dsad".sup());


// Number
//  2. Найти все методы которые используются для работы с числами в JS - с одним примером - выиграет тот кто найдет больше методов ;)))
// Почитать
// https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/ch1.md
// Глобальный объект Window
// https://learn.javascript.ru/global-object
// Движок v8
// Серия про V8
// https://habr.com/ru/company/ruvds/blog/337042/
// Типы данных, оператор typeof

// Свойства числа
const num = 100500;
// constructor Возвращает функцию, создавшую прототип числа JavaScript
console.log(num.constructor);
// MAX_VALUE Возвращает наибольшее возможное число в JavaScript
console.log(Number.MAX_VALUE);
// MIN_VALUE Возвращает наименьшее возможное число в JavaScript
console.log(Number.MIN_VALUE);
// NEGATIVE_INFINITY Представляет отрицательную бесконечность (возвращается при переполнении)
console.log(Number.NEGATIVE_INFINITY);
// NaN Представляет значение "не число"
console.log(NaN);
// POSITIVE_INFINITY Представляет бесконечность (возвращается при переполнении)
console.log(Number.POSITIVE_INFINITY);
// prototype Позволяет добавлять свойства и методы к объекту
console.log(Number.prototype);

// Есть 3 метода JavaScript, которые можно использовать для преобразования переменных в числа:
// Метод Number()
console.log(Number("21"));
// Метод parseInt()
console.log(Number("21"));
// Метод parseFloat()
console.log(Number("21"));

// Числовые методы
// isFinite() Проверяет, является ли значение конечным числом
console.log(Number.isFinite(num)) //true
// isInteger() Проверяет, является ли значение целым числом
console.log(Number.isInteger(num)) // true
// isNaN() Проверяет, является ли значение Number.NaN
console.log(Number.isNaN(num))
// isSafeInteger() Проверяет, является ли значение безопасным целым числом
console.log(Number.isSafeInteger())
// toExponential(x) Преобразует число в экспоненциальное представление
console.log(num.toExponential())
// toFixed(x) Форматирует число, используя x цифр после десятичной точки
console.log(num.toFixed())
// toLocaleString() Преобразует число в строку в зависимости от языковых настроек
console.log(num.toLocaleString())
// toPrecision(x) Форматирует число до длины x
console.log(num.toPrecision())
// toString() Преобразует число в строку
console.log(num.toString())
// valueOf() Возвращает примитивное значение числа

//  Есть строка ‘’https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/'
// - вытянуть из этой строки домен,
// вытянуть название статьи,
// убрать дефис икаждое слово сделать с заглавной буквы
const string = "https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/";
// Получаем домен с помощью регулярного выражения
const domainName = string.match(/^https?:\/\/([^\/]+)\.[^\/]+/)[1];
// Получаем название статьи с помощью регулярного выражения
const articleName = string.slice(17, string.length - 1).split("-");

const everyWordToCapitalise = articleName
  // Приводим каждую первую букву елемента массива к верниму регистру
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  // Приводим массив к строке
  .toString()
  // Заменяем запятые - пробелами
  .replace(/,/g, " ");

console.log("[DOMAIN]: ", domainName);
console.log("[ATICLE TITLE]: ", everyWordToCapitalise);


