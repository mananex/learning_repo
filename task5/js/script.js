/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').innerHTML = 'ДРАМА';
document.querySelector('.promo__bg').style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';

let movie_item_template = `<li class="promo__interactive-item">СКОТТ ПИЛИГРИМ ПРОТИВ...
                                <div class="delete"></div>
                           </li>`;

movieDB.movies.forEach((movie_title, index) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${index + 1}. ${movie_title}
                                <div class="delete"></div>
                            </li>`;
});