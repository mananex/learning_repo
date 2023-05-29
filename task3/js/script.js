/* Задание на урок:

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

function showMyDB (object) {
    if (!object.private) console.log(object);
}

function writeYourGenres (object) {
    for (let i = 0; i < 3; i++) {
        genre = prompt(`Genre that you like with number ${i + 1}`)
        object.genres.push(genre)
    }
}

let numberOfFilms = +prompt('Count of your watched movies: ');

if (numberOfFilms < 10) {
    alert('Watched quite a few films.');
} else if (numberOfFilms <= 30) {
    alert('You are a classic viewer.');
} else if (numberOfFilms > 30) {
    alert('You are a cinephile.');
} else {
    alert('An error ocurred.');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

let question_max_iteration = 2;
for (let i = 0; i < question_max_iteration;) {
    movie_title = prompt('One of your last watched movies: ');

    if (movie_title == null || movie_title == '' || movie_title.length > 50) {
        alert('Something went wrong, try again!');
        continue
    }

    movie_rating = prompt('How much will you rate it?');
    personalMovieDB.movies[movie_title] = movie_rating;
    i++; 
}

console.log(personalMovieDB);