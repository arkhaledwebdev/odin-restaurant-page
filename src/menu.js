function loadMenu() {
    const content = document.getElementById('content');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-container');

    // Pepperoni Pizza
    const pepperoniPizza = document.createElement('div');
    pepperoniPizza.classList.add('menu-item');
    const pepperoniPizza_title = document.createElement('div');
    pepperoniPizza_title.textContent = "Pepperoni"
    pepperoniPizza_title.classList.add('pizza-title');
    const pepperoniPizza_contents = document.createElement('div');
    pepperoniPizza_contents.textContent = "Loaded with Pepperoni and Extra Mozzarella Cheese";
    pepperoniPizza_contents.classList.add('pizza-contents');
    const pepperoniPizza_price = document.createElement('div');
    pepperoniPizza_price.textContent = "12$";
    pepperoniPizza_price.classList.add('pizza-price');
    pepperoniPizza.appendChild(pepperoniPizza_title);
    pepperoniPizza.appendChild(pepperoniPizza_contents);
    pepperoniPizza.appendChild(pepperoniPizza_price);

    // Cheese Lovers Pizza
    const cheesePizza = document.createElement('div');
    cheesePizza.classList.add('menu-item');
    const cheesePizza_title = document.createElement('div');
    cheesePizza_title.textContent = "Cheese Lovers"
    cheesePizza_title.classList.add('pizza-title');
    const cheesePizza_contents = document.createElement('div');
    cheesePizza_contents.textContent = "A blend of 6 delicious cheeses (Gouda, Cheddar, Emmental, Romano, Mozzarella, Edam )";
    cheesePizza_contents.classList.add('pizza-contents');
    const cheesePizza_price = document.createElement('div');
    cheesePizza_price.textContent = "15$";
    cheesePizza_price.classList.add('pizza-price');
    cheesePizza.appendChild(cheesePizza_title);
    cheesePizza.appendChild(cheesePizza_contents);
    cheesePizza.appendChild(cheesePizza_price);

    // Chicken Ranch Pizza
    const chickenPizza = document.createElement('div');
    chickenPizza.classList.add('menu-item');
    const chickenPizza_title = document.createElement('div');
    chickenPizza_title.textContent = "Chicken Ranch"
    chickenPizza_title.classList.add('pizza-title');
    const chickenPizza_contents = document.createElement('div');
    chickenPizza_contents.textContent = "Grilled Chicken, Tomato, Fresh Mushroom, Ranch Sauce";
    chickenPizza_contents.classList.add('pizza-contents');
    const chickenPizza_price = document.createElement('div');
    chickenPizza_price.textContent = "20$";
    chickenPizza_price.classList.add('pizza-price');
    chickenPizza.appendChild(chickenPizza_title);
    chickenPizza.appendChild(chickenPizza_contents);
    chickenPizza.appendChild(chickenPizza_price);

    // Shrimps pizza
    const shrimpsPizza = document.createElement('div');
    shrimpsPizza.classList.add('menu-item');
    const shrimpsPizza_title = document.createElement('div');
    shrimpsPizza_title.textContent = "Shrimps pizza"
    shrimpsPizza_title.classList.add('pizza-title');
    const shrimpsPizza_contents = document.createElement('div');
    shrimpsPizza_contents.textContent = "Shrimps, Tomato, Onions, Green Pepper";
    shrimpsPizza_contents.classList.add('pizza-contents');
    const shrimpsPizza_price = document.createElement('div');
    shrimpsPizza_price.textContent = "25$";
    shrimpsPizza_price.classList.add('pizza-price');
    shrimpsPizza.appendChild(shrimpsPizza_title);
    shrimpsPizza.appendChild(shrimpsPizza_contents);
    shrimpsPizza.appendChild(shrimpsPizza_price);

    menuContent.appendChild(pepperoniPizza);
    menuContent.appendChild(cheesePizza);
    menuContent.appendChild(chickenPizza);
    menuContent.appendChild(shrimpsPizza);

    content.appendChild(menuContent);
}

export { loadMenu }





