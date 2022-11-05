"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?','');
    let b = prompt('На сколько вы его оцените?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
// let i = 0
// while (i < 2) {
//     i++;
//         let a = prompt('Один из последних просмотренных фильмов?','');
//     let b = prompt('На сколько вы его оцените?','');
//
//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// let i = 0
// do {
//     i++;
//         let a = prompt('Один из последних просмотренных фильмов?','');
//     let b = prompt('На сколько вы его оцените?','');
//
//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }  while (i < 2);

console.log(personalMovieDB)

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классный зритель!');
} else if (personalMovieDB.count >= 30) {
    console.log('Просмотрено много фильмов!');
} else {
    console.log('ошибка');
}
