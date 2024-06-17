import './styles/main.scss';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles/swiper.scss';


const header_content = document.querySelector('.header__content')
const header_title = document.querySelector('.header__title')

document.querySelectorAll('.menu__list-item').forEach(e =>
    e.addEventListener('click', e => {
        const active_menu_item = document.querySelector('.menu__link--active')
        const clicked_menu_item = e.target

        active_menu_item?.classList.remove('menu__link--active')

        if (active_menu_item === clicked_menu_item) {
            header_content.classList.remove('header__content--display')
        } else {
            header_title.textContent = clicked_menu_item.textContent
            clicked_menu_item.classList.add('menu__link--active')
            header_content.classList.add('header__content--display')
        }
    })
)

document.querySelectorAll('.button').forEach(e => {
    const text_width = e.querySelector('.button__text').getComputedTextLength();
    const svg_width = 24 + 24 + 3 + text_width
    const border_button = e.querySelector('.button__border')

    border_button.setAttribute('width', `${svg_width-1.5}`)
    e.setAttribute('viewBox', `0 0 ${svg_width} 56`)
    e.setAttribute('width', `${svg_width}`)
})

let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    modules: [Pagination],

    spaceBetween: 24,
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// window.addEventListener('load', () => {
//     document.querySelector('#load').style.display = 'none'
// })
