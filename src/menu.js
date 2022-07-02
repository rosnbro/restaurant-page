function renderMenu() {
    const menuContent = document.createElement('main');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardContent = document.createElement('div');

    const priceSection = document.createElement('div');
    const priceHeading = document.createElement('h3');
    const prices = document.createElement('h4');

    const flavorSection = document.createElement('div');
    const flavorHeading = document.createElement('h3');
    const flavorList = document.createElement('ul');
    const flavors = ['Apple', 'Blueberry', 'Cherry', 'Chocolate Chess', 'Key Lime', 'Peach', 'Pecan', 'Pumpkin', 'Wild Berry'];

    menuContent.classList.add('menu');
    card.classList.add('card');
    cardContent.classList.add('menuContent');

    cardTitle.textContent = 'Menu';
    priceHeading.textContent = 'Prices:';
    prices.innerHTML = 'Slice - $3.14<br>Half Pie - $15.92<br>Whole Pie - $65.35';
    flavorHeading.textContent = 'Our Current Flavor Selection:';
    flavors.forEach(flavor => {
        let listItem = document.createElement('li');
        listItem.textContent = flavor;
        flavorList.appendChild(listItem);
    });

    priceSection.appendChild(priceHeading);
    priceSection.appendChild(prices);

    flavorSection.appendChild(flavorHeading);
    flavorSection.appendChild(flavorList);

    cardContent.appendChild(priceSection);
    cardContent.appendChild(flavorSection);

    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    menuContent.appendChild(card);

    return menuContent;
}

export default renderMenu;