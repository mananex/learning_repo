/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


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