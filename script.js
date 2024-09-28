const cardWrapper = document.querySelector('.content-cards')
const searchinput = document.getElementById('search-input') 
const searchbutton = document.getElementById('search-button')

const films = [
    {
        id: 1,
        link: '/film.html',
        title: 'Марсианин',
        title2: 'марсианин',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './img/films/film.webp'
    },
    {
        id: 2,
        link: '/film.html',
        title: '1+1',
        title2: '1+1',
        original: 'Intouchables 2011',
        category: 'Драма, Комедия',
        rating: 8.8,
        image: './img/films/1+1.jpg'
    },
    {
        id: 3,
        link: '/film.html',
        title: 'Джентльмены',
        title2: 'джентльмены',
        original: 'The Gentlemen 2019',
        category: 'Криминал, комедия, боевик',
        rating: 8.6,
        image: './img/films/jent.jpg'
    },
    {
        id: 4,
        link: '/film.html',
        title: 'Брат',
        title2: 'брат',
        original: 'Brother 1997',
        category: 'Фантастика, приключения',
        rating: 8.3,
        image: './img/films/brother.jpg'
    },
    {
        id: 5,
        link: '/film.html',
        title: 'Волк с Уолл-стрит',
        title2: 'волк с Уолл-стрит',
        original: 'The Wolf of Wall Street 2013',
        category: 'Драма, криминал, биография, комедия',
        rating: 8.1,
        image: './img/films/wolf.jpg'
    },
    {
        id: 6,
        link: '/film.html',
        title: 'Один дома',
        title2: 'один дома',
        original: 'Home Alone 1990',
        category: 'Комедия, семейный',
        rating: 8.3,
        image: './img/films/home.jpg'
    }
]

const render = (array) => {
    
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards_items">
                <div class="content-cards_items_img">
                    <img src="${item.image}" alt="film">
                </div>

                <div class="content-cards_items_title">
                    <h5>${item.title},</h5>
                <span>${item.original}</span>
                    </div>
                <p class="content-cards_items_description">
                    ${item.category}
                </p>
                <p class="content-cards_items_rating">
                     ${item.rating}
                </p>
            </a>
            `)
    })
}

searchbutton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchinput.value)));
})

render(films)