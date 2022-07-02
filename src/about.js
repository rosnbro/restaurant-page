function renderAbout() {
    const aboutContent = document.createElement('main');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');

    aboutContent.classList.add('about');
    card.classList.add('card');
    cardText.classList.add('aboutText');

    cardTitle.textContent = 'About Us';
    cardText.textContent = 'Here at Pi Place, we believe in sharing delicious homemade pies for an affordable & thematically appropriate price. Our pies are baked from scratch using the highest quality ingredients, and available to you at our convenient location in the Blacksburg Farmers Market. \nPlease come by our table and grab a slice!';

    card.appendChild(cardTitle);
    card.appendChild(cardText);
    aboutContent.appendChild(card);

    return aboutContent;
}

export default renderAbout;