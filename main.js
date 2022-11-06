"use strict";

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько вы его оцените?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilm()

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

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классный зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Просмотрено много фильмов!');
    } else {
        console.log('ошибка');
    }
}

// detectPersonalLevel()



function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}
showMyDB()

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i - 1}?`, '');
        personalMovieDB.genres.push(a)
    }
}
writeYourGenres()