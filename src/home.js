function loadHomePage(){
    const content = document.getElementById('content');

    const homeContent = document.createElement('div');
    homeContent.classList.add('home-container');

    const quality = document.createElement('div');
    quality.classList.add('home-item');

    const quality_img = document.createElement('img');
    quality_img.src = '../images/restaurant-icon-pizza.png';
    quality_img.classList.add('img-icon');
    const quality_title = document.createElement('div');
    quality_title.textContent = "High quality pizza";
    const quality_description = document.createElement('div');
    quality_description.textContent = 'Our pizza is of the highest quality in town, all the ingredient is chosen fresh and of high quality';
    quality.appendChild(quality_img);
    quality.appendChild(quality_title);
    quality.appendChild(quality_description);

    const original = document.createElement('div');
    original.classList.add('home-item');

    const original_img = document.createElement('img');
    original_img.src = '../images/restaurant-icon-original.png'
    original_img.classList.add('img-icon');
    const original_title = document.createElement('div');
    original_title.textContent = "Original recipes"
    const original_description = document.createElement('div');
    original_description.textContent = 'Our menu contain original recipes with unique combinations not found in any other place'
    original.appendChild(original_img);
    original.appendChild(original_title);
    original.appendChild(original_description);

    const delivery = document.createElement('div');
    delivery.classList.add('home-item');

    const delivery_img = document.createElement('img');
    delivery_img.src = '../images/restaurant-icon-delivery.png'
    delivery_img.classList.add('img-icon');
    const delivery_title = document.createElement('div');
    delivery_title.textContent = "Fastest delivery"
    const delivery_description = document.createElement('div');
    delivery_description.textContent = 'Your order will be delivered as fast as possible'
    delivery.appendChild(delivery_img);
    delivery.appendChild(delivery_title);
    delivery.appendChild(delivery_description);

    homeContent.appendChild(quality);
    homeContent.appendChild(original);
    homeContent.appendChild(delivery);

    content.appendChild(homeContent);
}


export {loadHomePage}