function renderContact() {
    const contactContent = document.createElement('main');
    const card = document.createElement('div');
    
    contactContent.classList.add('contact');

    contactContent.appendChild(card);

    return contactContent;
}

export default renderContact;