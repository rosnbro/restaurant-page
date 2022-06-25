import renderHome from './home';
import renderMenu from './menu';
import renderAbout from './about';
import renderContact from './contact';
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
    aboutButton.textContent = 'About Us';
    contactButton.textContent = 'Contact';
    /*
    homeButton.classList.add('navItem');
    menuButton.classList.add('navItem');
    aboutButton.classList.add('navItem');
    contactButton.classList.add('navItem');
    */
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
    const social = document.createElement('div');
    const address = document.createElement('address');
    const hours = document.createElement('div');
    
    // ADD SOCIAL LINKS
    hours.innerHTML = 'Hours<br>Wed: 2PM - 6PM<br>Sat: 8AM - 2PM';
    address.innerHTML = 'Blacksburg Farmers Market<br>108 W Roanoke St.<br>Blacksburg, VA 24060';

    footer.appendChild(social);
    footer.appendChild(address);
    footer.appendChild(hours);

    return footer;
}

build('home');