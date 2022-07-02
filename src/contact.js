function renderContact() {
    const contactContent = document.createElement('main');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardContent = document.createElement('div');
    const comSection = document.createElement('div');
    const phoneLabel = document.createElement('p');
    const phoneNum = document.createElement('a');
    const emailLabel = document.createElement('p');
    const email = document.createElement('a');
    const addySection = document.createElement('div');
    const addressContact = document.createElement('address');
    const hoursContact = document.createElement('p');
    
    contactContent.classList.add('contact');
    card.classList.add('card');
    cardContent.classList.add('contactContent');

    cardTitle.textContent = 'Contact';
    phoneLabel.textContent = 'Phone:'
    phoneNum.href = 'tel:+13145551592';
    phoneNum.textContent = '(314) 555-1592';
    emailLabel.textContent = 'Email:';
    email.href = 'mailto:piplace@example.com';
    email.textContent = 'piplace@example.com';
    hoursContact.innerHTML = '<b>Hours</b><br>Wed: 2PM - 6PM<br>Sat: 8AM - 2PM';
    addressContact.innerHTML = 'Blacksburg Farmers Market<br>108 W Roanoke St.<br>Blacksburg, VA 24060';

    comSection.appendChild(phoneLabel);
    comSection.appendChild(phoneNum);
    comSection.appendChild(emailLabel);
    comSection.appendChild(email);
    addySection.appendChild(addressContact);
    addySection.appendChild(hoursContact);
    cardContent.appendChild(comSection);
    cardContent.appendChild(addySection);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    contactContent.appendChild(card);

    return contactContent;
}

export default renderContact;