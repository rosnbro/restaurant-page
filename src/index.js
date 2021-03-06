import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';
import renderContact from './contact';
import instaIcon from './Instagram_simple_icon.svg';
import githubIcon from './GitHub-Icon.png';
import './style.css';


function build(page) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(renderHeader(page));
    content.appendChild(renderMain(page));
    content.appendChild(renderFooter());
}

function renderHeader(page) {
    const header = document.createElement('header');
    const title = document.createElement('h1');

    title.textContent = 'Pi Place';
    
    header.appendChild(title);
    header.appendChild(renderNav(page));

    return header;
}

function renderNav(page) {
    const nav = document.createElement('nav');
    const homeButton = document.createElement('a');
    const menuButton = document.createElement('a');
    const aboutButton = document.createElement('a');
    const contactButton = document.createElement('a');

    switch (page) {
        case 'menu':
            menuButton.classList.add('active');
            break;
        case 'about':
            aboutButton.classList.add('active');
            break;
        case 'contact':
            contactButton.classList.add('active');
            break;
        default: 'home'
            homeButton.classList.add('active');
            break;
    }

    homeButton.addEventListener('click', () => {
        build('home');
    });
    menuButton.addEventListener('click', () => {
        build('menu');
    });
    aboutButton.addEventListener('click', () => {
        build('about');
    });
    contactButton.addEventListener('click', () => {
        build('contact');
    });

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    aboutButton.innerHTML = 'About<br>Us';
    contactButton.textContent = 'Contact';
    
    homeButton.classList.add('navItem');
    menuButton.classList.add('navItem');
    aboutButton.classList.add('navItem');
    contactButton.classList.add('navItem');
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);

    return nav;
}

function renderMain(page) {
    switch (page) {
        case 'menu':
            return renderMenu();
        case 'about':
            return renderAbout();
        case 'contact':
            return renderContact();
        default: 'home'
            return renderHome();
    }
}

function renderFooter() {
    const footer = document.createElement('footer');
    const socials = document.createElement('div');
    const instagram = document.createElement('a');
    const instaLogo = document.createElement('img');
    const github = document.createElement('a');
    const githubLogo = document.createElement('img');
    const address = document.createElement('address');
    const hours = document.createElement('div');
    
    instaLogo.src = instaIcon;
    githubLogo.src = githubIcon;
    instagram.href = 'https://www.instagram.com/benrojammin/';
    github.href = 'https://github.com/rosnbro';
    hours.innerHTML = '<b>Hours</b><br>Wed: 2PM - 6PM<br>Sat: 8AM - 2PM';
    address.innerHTML = 'Blacksburg Farmers Market<br>108 W Roanoke St.<br>Blacksburg, VA 24060';

    instagram.appendChild(instaLogo);
    github.appendChild(githubLogo);
    socials.appendChild(instagram);
    socials.appendChild(github);
    footer.appendChild(socials);
    footer.appendChild(address);
    footer.appendChild(hours);

    return footer;
}

build('home');