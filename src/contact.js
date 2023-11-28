function loadContact(){

    const content = document.getElementById('content');

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-container');

    const address = document.createElement('div');
    address.classList.add('contact-item');
    const address_title = document.createElement('div');
    address_title.classList.add('contact-title');
    address_title.textContent = "Address";
    const address_content = document.createElement('div');
    address_content.classList.add('contact-content');
    address_content.textContent = "Apt. 217 596 Huels Brook, Bradleybury, ND 46237";
    address.appendChild(address_title);
    address.appendChild(address_content);

    const phone = document.createElement('div');
    phone.classList.add('contact-item');
    const phone_title = document.createElement('div');
    phone_title.classList.add('contact-title');
    phone_title.textContent = "Phone";
    const phone_content = document.createElement('div');
    phone_content.classList.add('contact-content');
    phone_content.textContent = "+13257193559 or +18054427675";
    phone.appendChild(phone_title);
    phone.appendChild(phone_content);

    contactContent.appendChild(address);
    contactContent.appendChild(phone);

    content.appendChild(contactContent);
}

export {loadContact}