function renderHome() {
    const homeContent = document.createElement('main');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardSubtitle = document.createElement('h3');
    const cardText = document.createElement('h2');

    homeContent.classList.add('home');

    //cardTitle.textContent = 'Welcome to Pi Place!';
    //cardSubtitle.textContent = '';
    cardText.textContent = 'Home of the $3.14 Slice';

    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardText);
    homeContent.appendChild(card);

    return homeContent;
}

export default renderHome;