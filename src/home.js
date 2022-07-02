function renderHome() {
    const homeContent = document.createElement('main');
    const card = document.createElement('div');

    homeContent.classList.add('home');
    card.classList.add('card');

    card.textContent = 'Home of the $3.14 Slice';

    homeContent.appendChild(card);

    return homeContent;
}

export default renderHome;