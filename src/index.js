import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import './style.css';


function build(page) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(renderHeader());
    content.appendChild(renderMain(page));
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

    homeButton.addEventListener('click', () => {
        build('home');
        //homeButton.classList.add('active');
    });
    menuButton.addEventListener('click', () => {
        build('menu');
        //homeButton.classList.add('active');
    });
    contactButton.addEventListener('click', () => {
        build('contact');
        //homeButton.classList.add('active');
    });

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    homeButton.classList.add('navItem');
    homeButton.classList.add('active');
    menuButton.classList.add('navItem');
    contactButton.classList.add('navItem');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function renderMain(page) {
    switch (page) {
        case 'menu':
            return renderMenu();
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