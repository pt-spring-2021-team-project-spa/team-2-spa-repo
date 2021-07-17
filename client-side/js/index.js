import apiActions from './api-actions/api-actions.js';
import Footer from './components/Footer.js';
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

function navigateToGamesPage(){
    const gamesButton =document.querySelector(".nav__list_games");
    gamesButton.addEventListener("click", () =>{
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


function check() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var result = document.getElementById("result");
  if (q1 == "3") c++;
  if (q2 == "2") c++;
  if (q3 == "1") c++;
  if (q4 == "3") c++;
  if (q5 == "4") c++;

  if (c <= 3) {
    result.textContent =
      "Use promo code Trekr for a free gift based on age.";
  } else {
    result.textContent =
      "Use promo code winner for a free gift based on age";
  }
}