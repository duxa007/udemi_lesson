"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstQuestionLastFilm = prompt('Один из последних просмотренных фильмов?','');
let firstQuestionLastFilmRate = prompt('На сколько вы его оцените?','');
let secondQuestionLastFilm = prompt('Один из последних просмотренных фильмов?','');
let secondQuestionLastFilmRate = prompt('На сколько вы его оцените?','');

personalMovieDB.movies[firstQuestionLastFilm] = firstQuestionLastFilmRate;

personalMovieDB.movies[secondQuestionLastFilm] = secondQuestionLastFilmRate;

console.log(personalMovieDB)