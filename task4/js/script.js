/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    // properties
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    // methods
    askWatchedMoviesCount: function () {
        let numberOfFilms = +prompt('Count of your watched movies: ');
        this.count = numberOfFilms;

        if (numberOfFilms < 10) {
            alert('Watched quite a few films.');
        } else if (numberOfFilms <= 30) {
            alert('You are a classic viewer.');
        } else if (numberOfFilms > 30) {
            alert('You are a cinephile.');
        } else {
            alert('An error ocurred.');
        }
    },
    toggleVisibleMyDB: function () {
        this.private = !this.private
    },
    showMyDB: function () {
        if (!this.private) console.log(this);
    },
    writeYourGenres: function () {
        const question_max_iteration = 3;
        for (let i = 0; i < question_max_iteration;) {
            genre = prompt(`Genre that you like with number ${i + 1}`)
            if (genre == null || genre == '') {
                alert('Something went wrong, try again!');
                continue;
            }
            this.genres.push(genre);
            i++; 
        }
    },
    askLastWatchedMovies: function () {
        const question_max_iteration = 2;
        for (let i = 0; i < question_max_iteration;) {
            movie_title = prompt('One of your last watched movies: ');
            if (movie_title == null || movie_title == '' || movie_title.length > 50) {
                alert('Something went wrong, try again!');
                continue;
            }
            movie_rating = prompt('How much will you rate it?');
            this.movies[movie_title] = movie_rating;
            i++; 
        }
    }
}

const person = Object.create(personalMovieDB);

person.askWatchedMoviesCount();
person.writeYourGenres();
person.askLastWatchedMovies();
person.showMyDB();
person.toggleVisibleMyDB();
person.showMyDB();

