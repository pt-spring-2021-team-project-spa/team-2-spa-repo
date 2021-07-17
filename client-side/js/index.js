<<<<<<< HEAD
import Footer from "./components/Footer.js";
=======
import apiActions from './api-actions/api-actions.js';
import Footer from './components/Footer.js';
>>>>>>> main
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js";
// import ArtListPage from "./pages/ArtListPage.js"
// import SciencePage from "./pages/SciencePage.js"
// import HistoryPage from "./pages/HistoryPage.js"
import GamesPage from "./pages/GamesPage.js";
import GameOfArtPage from "./pages/GameOfArtPage.js";
// import HistoryPage from './pages/HistoryPage.js'
import WorldWondersPage from './pages/WorldWondersPage.js';
// import WorldWonderPage from './pages/WorldWonderPage.js';
// import AboutUsPage from "./pages/AboutUsPage.js"
// import ContactUsPage from "./pages/ContactUsPage.js"


buildPage();

function buildPage() {
  header();
  navigateToHomePage();
  navigateToArtListPage();
  navigateToSciencePage();
  navigateToHistoryPage();
  navigateToGamesPage();
  startGameButton();
  navigateToAboutUsPage();
  navigateToContactPage();
  footer();
}

const app = document.querySelector("#app");

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function navigateToHomePage() {
  const homeButton = document.querySelector(".nav__list_home");
  homeButton.addEventListener("click", () => {
    app.innerHTML = HomePage();
  });
}

function navigateToArtListPage() {
  const artButton = document.querySelector(".nav__list_artList");
  artButton.addEventListener("click", () => {
    app.innerHTML = ArtListPage();
  });
}

function navigateToSciencePage() {
  const scienceButton = document.querySelector(".nav__list_science");
  scienceButton.addEventListener("click", () => {
    app.innerHTML = SciencePage();
  });
}




function navigateToGamesPage() {
  const gamesButton = document.querySelector(".nav__list_games");
  gamesButton.addEventListener("click", () => {
    app.innerHTML = GamesPage();
  });
}
  function navigateToHistoryPage() {
    const worldWondersButton = document.querySelector('.nav__list_history');
    worldWondersButton.addEventListener('click', () => {
        apiActions.getRequest('http://localhost:8080/worldWonders', (worldWonders) => {
            app.innerHTML = WorldWondersPage(worldWonders);
        });
    });
}

// function renderWorldWonderInfo() {
//     app.addEventListener('click', (event) => {
//         if (event.target.classList.contains('worldWonder__name')) {
//             const worldWonderUrl =
//               event.target.parentElement.querySelector('#worldWonderId').value;
//             apiActions.getRequest(worldWonderUrl, (worldWonder) => {
//               app.innerHTML = WorldWonderPage(worldWonder);
//             });
//           }
//     })
// }

function navigateToAboutUsPage() {
  const aboutUsButton = document.querySelector(".nav__list_aboutUs");
  aboutUsButton.addEventListener("click", () => {
    app.innerHTML = AboutUsPage();
  });
}

function navigateToContactPage() {
  const contactPageButton = document.querySelector(".nav__list_contactUs");
  contactPageButton.addEventListener("click", () => {
    app.innerHTML = ContactUsPage();
  });
}
