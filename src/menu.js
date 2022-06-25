function renderMenu() {
    const menuContent = document.createElement('main');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardSubtitle = document.createElement('h3');
    const cardText = document.createElement('p');

    menuContent.classList.add('menu');

    cardTitle.textContent = 'Menu';
    cardSubtitle.textContent = 'Each slice of pie is only $3.14!';
    cardText.innerHTML = `Blueberry<br>Apple<br>Peach<br>Chocolate Chess<br>Pecan<br>`;

    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardText);
    menuContent.appendChild(card);

    return menuContent;
}

export default renderMenu;