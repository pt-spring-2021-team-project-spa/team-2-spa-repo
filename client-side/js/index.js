import apiActions from "./api-actions/api-actions.js";
// import Art from './pages/ArtPage.js'
import Art from "./components/Art.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import PaintingsPage from "./pages/PaintingsPage.js";
import PrintsPage from "./pages/PrintsPage.js";
import RoverPage from "./pages/RoverPage.js";
import AsianArtsPage from "./pages/AsianArtsPage.js";
import HomePage from "./pages/HomePage.js";
import SatEarthPage from "./pages/SatEarthPage.js";
import SciencePage from "./pages/SciencePage.js";
import PotdPage from "./pages/PotdPage.js";
// import HistoryPage from './pages/HistoryPage.js'
import WorldWondersPage from "./pages/WorldWondersPage.js";
import WorldWonderPage from "./pages/WorldWonderPage.js";
// import AboutUsPage from "./pages/AboutUsPage.js"
// import ContactUsPage from "./pages/ContactUsPage.js"

buildPage();

function buildPage() {
  header();
  footer();
  navigateToHomePage();
  navigateToHistoryPage();
  navigateToAboutUsPage();
  navigateToContactPage();
  renderArtPage();
  renderAsianArtsList();
  renderPaintingsList();
  renderPotdPage();
  renderRoverPage();
  renderPrintsList();
  renderSciencePage();
}

const app = document.querySelector("#app");
const pullAmount = 12;


function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function renderArtPage() {
  const artListButton = document.querySelector(".nav__list_artList");
  artListButton.addEventListener("click", () => {
    console.log("render art page fired");
    let app = document.querySelector("#app");
    app.innerHTML = Art();
  });
}

function renderAsianArtsList() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("art__list_asianArtsList")) {
      apiActions.getRequest(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=6",
        (asianArts) => {
          console.log(asianArts);
          asianArts.objectIDs = asianArts.objectIDs.splice(0, pullAmount);
          console.log(asianArts);
          app.innerHTML = AsianArtsPage(asianArts);
          for (let i = 0; i < pullAmount; i++) {
            asianArts.objectIDs[i];
            apiActions.getRequest(
              "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
                asianArts.objectIDs[i],
              (asianArt) => {
                console.log(asianArts);
                document.getElementById(asianArt.objectID).innerText =
                  asianArt.title;
                document.getElementById(
                  "artist" + asianArt.objectID
                ).innerText = asianArt.artistDisplayName;
                document.getElementById("image" + asianArt.objectID).src =
                  asianArt.primaryImage;
              }
            );
          }
        }
      );
    }
  });
}

function renderPaintingsList() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("art__list_paintingsList")) {
      apiActions.getRequest(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11",
        (paintings) => {
          console.log(paintings);
          paintings.objectIDs = paintings.objectIDs.splice(0, pullAmount);
          console.log(paintings);
          app.innerHTML = PaintingsPage(paintings);
          for (let i = 0; i < pullAmount; i++) {
            paintings.objectIDs[i];
            apiActions.getRequest(
              "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
                paintings.objectIDs[i],
              (painting) => {
                console.log(painting);
                document.getElementById(painting.objectID).innerText =
                  painting.title;
                document.getElementById(
                  "artist" + painting.objectID
                ).innerText = painting.artistDisplayName;
                document.getElementById("image" + painting.objectID).src =
                  painting.primaryImageSmall;
              }
            );
          }
        }
      );
    }
  });
}

function renderPrintsList() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("art__list_printsList")) {
      apiActions.getRequest(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=9",
        (prints) => {
          console.log(prints);
          prints.objectIDs = prints.objectIDs.splice(0, pullAmount);
          console.log(prints);
          app.innerHTML = PrintsPage(prints);
          for (let i = 0; i < pullAmount; i++) {
            prints.objectIDs[i];
            apiActions.getRequest(
              "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
                prints.objectIDs[i],
              (print) => {
                console.log(print);
                document.getElementById(print.objectID).innerText = print.title;
                document.getElementById("artist" + print.objectID).innerText =
                  print.artistDisplayName;
                document.getElementById("image" + print.objectID).src =
                  print.primaryImage;
              }
            );
          }
        }
      );
    }
  });
}

function navigateToHomePage() {
  const homeButton = document.querySelector(".nav__list_home");
  homeButton.addEventListener("click", () => {
    app.innerHTML = HomePage();
  });
}

function renderSciencePage() {
  const scienceButton = document.querySelector(".nav__list_science");
  scienceButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = SciencePage();
  });
}

function renderPotdPage() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.parentElement.classList.contains("science__list")) {
      const potD = document.querySelector(".science__list_potd");
      potD.addEventListener("click", () => {
        apiActions.getRequest(
          "https://api.nasa.gov/planetary/apod?api_key=WV0eX3Rt3FuYTS6kbJpJ5S5VPlEgCVqgf13mD7NM",
          (photo) => {
            console.log("photo", photo);
            app.innerHTML = PotdPage(photo);
          }
        );
      });
    }
  });
}



function navigateToHistoryPage() {
  const worldWondersButton = document.querySelector(".nav__list_history");
  worldWondersButton.addEventListener("click", () => {
    apiActions.getRequest(
      "http://localhost:8080/worldWonders",
      (worldWonders) => {
        app.innerHTML = WorldWondersPage(worldWonders);
      }
    );
  });
}

window.onload = function () {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("worldWonder__name")) {
      const worldWonderUrl =
        event.target.parentElement.querySelector("#worldWonderId").value;
      apiActions.getRequest(worldWonderUrl, (worldWonder) => {
        app.innerHTML = WorldWonderPage(worldWonder);
      });
    }
  });
};

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
