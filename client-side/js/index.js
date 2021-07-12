import Footer from './components/Footer.js';
import Header from "./components/Header.js";
// import HomePage from "./pages/HomePage.js"
// import ArtListPage from "./pages/ArtListPage.js"
// import SciencePage from "./pages/SciencePage.js"
// import HistoryPage from "./pages/HistoryPage.js"
// import AboutUsPage from "./pages/AboutUsPage.js"
// import ContactUsPage from "./pages/ContactUsPage.js"

buildPage();

function buildPage(){
    header();
    navigateToHomePage();
    navigateToArtListPage();
    navigateToSciencePage();
    navigateToHistoryPage();
    navigateToAboutUsPage();
    navigateToContactPage();
    footer();
}

const app = document.querySelector('#app');

function header(){
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function footer(){
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function navigateToHomePage() {
    const homeButton = document.querySelector('.nav__list_home');
    homeButton.addEventListener('click', () => {
        app.innerHTML = HomePage();
    })
}

function navigateToArtListPage() {
    const artButton = document.querySelector('.nav__list_artList');
    artButton.addEventListener('click', () => {
        app.innerHTML = ArtListPage();
    })
}

function navigateToSciencePage() {
    const scienceButton = document.querySelector('.nav__list_science');
    scienceButton.addEventListener('click', () => {
        app.innerHTML = SciencePage();
    })
}

function navigateToHistoryPage() {
    const historyButton = document.querySelector('.nav__list_history');
    historyButton.addEventListener("click", () => {
        app.innerHTML = HistoryPage();
    })
}

function navigateToAboutUsPage() {
    const aboutUsButton = document.querySelector('.nav__list_aboutUs');
    aboutUsButton.addEventListener('click', () => {
        app.innerHTML = AboutUsPage();
    })
}

function navigateToContactPage() {
    const contactPageButton = document.querySelector('.nav__list_contactUs');
    contactPageButton.addEventListener('click', () => {
        app.innerHTML = ContactUsPage();
    })
}
