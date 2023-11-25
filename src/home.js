function loadHomePage(){
    const content = document.getElementById('content');
    const homeBg = document.createElement('img')
    homeBg.src = '../images/pizza_bg.jpg';
    content.appendChild(homeBg);

}


export {loadHomePage}