import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import './style.css';
import Background from './pie.jpg';



function init() {
    const content = document.getElementById('content');

    content.appendChild(renderHeader());
    content.appendChild(renderBackground());
    content.appendChild(renderHome());
    content.appendChild(renderFooter());
}

function renderHeader() {
    const header = document.createElement('header');
    const title = document.createElement('h1');

    title.textContent = 'Pi Place';
    
    header.appendChild(title);
    header.appendChild(renderNav());

    return header;
}

function renderNav() {
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    homeButton.classList.add('navItem');
    menuButton.classList.add('navItem');
    contactButton.classList.add('navItem');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function renderBackground() {
    const background = new Image();

    background.src = Background;
    background.alt = 'Top view photo of a pie';
    background.classList.add('background');

    return background;
}

function renderFooter() {

}

init();