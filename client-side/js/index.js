import Header from "./components/Header.js";



// let app = document.querySelector('#app');

buildPage();

function buildPage(){
    header();
}

function header(){
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

