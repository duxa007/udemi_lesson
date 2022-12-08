"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }
    },
    rememberMyFilm: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классный зритель!');
        } else if (personalMovieDB.count >= 30) {
            console.log('Просмотрено много фильмов!');
        } else {
            console.log('ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
            if (a === '' || a == null) {
                i--
            } else {
                personalMovieDB.genres.push(a)
            }
        }
        personalMovieDB.genres.forEach(function(item, i, arr) {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilm()
// personalMovieDB.toggleVisibleMyDB()
personalMovieDB.detectPersonalLevel()
personalMovieDB.showMyDB()
personalMovieDB.writeYourGenres()



//

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


