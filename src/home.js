function renderHome() {
    const homeContent = document.createElement('main');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardSubtitle = document.createElement('h3');
    const cardText = document.createElement('p');

    cardTitle.textContent = 'Welcome to Pi Place!';
    cardSubtitle.textContent = 'Home of the $3.14 Slice';
    cardText.textContent = 'Here at Pi Place, we believe in sharing delicious homemade pies for an affordable & thematically appropriate price. Our pies are baked from scratch using the highest quality ingredients, and available to you at our convenient location in the Blacksburg Farmers Market. \nPlease come by our table and grab a slice!';

    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardText);
    homeContent.appendChild(card);

    return homeContent;
}

export default renderHome;