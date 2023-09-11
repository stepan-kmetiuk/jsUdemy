'use strict';
//? початок роботи 6-й урок:
// npm init
// npm init @eslint/config
//? =====================================================
// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PasalCase // first letter BIG;
//?======================================================
// number 1,2,3
// string 'str', 'Stepan'
// boolean true/felse
// null   // pystota
// undefined
// Simbol
// bigint
// ObJeKTs:
// object [], function, object Data, RegEx, Error
//=======================================================
// interpoliacia
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);
//?=======================================================

//? lesson15 ================
// плюч перед виразом називається унарний плюс +(str) переториться в число
// console.log(4 + +"4")

// let incr = 10,
//   decr = 10;

// постфіксная форма
// incr++; // збільшення числа не 1 incriment
// decr--; // зьеншення числа не 1  decriment

// префіксная форма
// ++incr;
// --decr;
// console.log(incr)
// console.log(decr)
//? ============================================================================
//? lesson16 GitHub ================
//? lesson19 ================
/* Задание на урок: 19

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// let result = '';
// const length = 7;

// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);

// goup: for (let i = 0; i < 3; i++) {
//   console.log(`first level : ${i}`);
//   for (let j = 0; j < 3; j++){
//     console.log(`second level : ${j}`);
//     for (let k = 0; k < 6; k++){
//       if (k === 5) break goup;
//       console.log(`third level : ${k}`);
//     }
//   }
// }

// let i = 2;

// while (i <= 16) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// Место для третьей задачи
// function thirdTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
//   }

//   console.log(result)
//   return result;
// }
// thirdTask();

// const lines = 4;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);
// const lines = 5;
// let result = '';
// for (let i = 0; i < lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   console.log(result)
// }

// const lines = 5;
// let result = '';

// Задача зірочкі!!!!

// for (let i = 0; i <= lines; i++) {
// 	console.log(`це перший цикл = ${i}`)
// 	for (let j = 0; j < lines - i; j++) {
// 		result += 'i`m j )';
// 		console.log(`це другий цикл = ${j}`)
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 		console.log(`third : ${j}`)
// 	}
// 	result += '\n';
// }

// console.log(result);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('odin is poslednix prosmotrenix filmov', '');
// 			 b = +prompt('na skolko ocenite ego??', '');
// 			 c = prompt('odin is poslednix prosmotrenix filmov', '');
// 			 d = prompt('odin is poslednix prosmotrenix filmov', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//   const a = prompt('odin is poslednix prosmotrenix filmov', ''),
//     b = prompt('na skolko ocenite ego??', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы классический зритель');
// } else {
//   console.log('ERROR');
// }
// console.log(personalMovieDB);
// =========================================================================================================================

// lesson 25 =======================
// function-Expresion
// function showFirstMassage(argnum) {
//   console.log(argnum);
// }
// showFirstMassage(8888);

// function Declaration
// const logger = function () {
//   console.log('hello wordl');
// };
// logger();

// ES6 це стрілочна функція ()=>

// const calc = (a, b) => {
// 	return a + b;
// };
// ARGUMENTS

// const usdCurr = 40;

// function arg(amount,curr) {
// 	console.log(usdCurr * amount);
// }
// arg(100, usdCurr)
