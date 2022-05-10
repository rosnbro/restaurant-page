import Home from './home';
import Menu from './menu';
import Contact from './contact';
import './style.css';
import Background from './pie.jpg';

const content = document.getElementById('content');

function init() {
    renderBackground();
    renderHeader();
}

function renderBackground() {
    const background = new Image();

    background.src = Background;
    background.alt = 'A top view photo of a pie';
    background.classList.add('background');

    content.appendChild(background);
}

function renderHeader() {
    const header = document.createElement('header');
    const title = document.createElement('h1');

    title.textContent = 'Pi Place';

    content.appendChild(title);
}

init();