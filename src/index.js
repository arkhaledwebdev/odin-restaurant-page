import { loadHomePage } from "./home";
import './style.css'

const content = document.getElementById('content');

const header = document.createElement('div');
header.classList.add('header');

const headerTitle = document.createElement('div');
headerTitle.classList.add('header-title')

headerTitle.textContent = 'Odin Pizza Restaurant';

header.appendChild(headerTitle);

const nav_container = document.createElement('div');
nav_container.classList.add('nav');
const nav_home = document.createElement('div');
nav_home.classList.add('nav-item');
nav_home.textContent = 'Home';
nav_container.appendChild(nav_home);
const nav_menu = document.createElement('div');
nav_menu.classList.add('nav-item');
nav_menu.textContent = 'Menu';
nav_container.appendChild(nav_menu);
const nav_contact = document.createElement('div');
nav_contact.classList.add('nav-item');
nav_contact.textContent = 'Contact us';
nav_container.appendChild(nav_contact);

header.appendChild(nav_container);

content.appendChild(header);

loadHomePage();