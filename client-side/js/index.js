import apiActions from './api-actions/api-actions.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
// import ArtListPage from './components/ArtList.js'
import PaintingsPage from './pages/PaintingsPage.js';
// import HomePage from './pages/HomePage.js';

// let app = document.querySelector('#app');

buildPage();

function buildPage() {
	header();
	footer();
	// navigateToHomePage();
	renderPaintingsList();
}

function header() {
	const headerElement = document.querySelector('.header');
	headerElement.innerHTML = Header();
}

function footer() {
	const footerElement = document.querySelector('.footer');
	footerElement.innerHTML = Footer();
}

// function navigateToHomePage() {
// 	const homeButton = document.querySelector('.nav__list_home');
// 	homeButton.addEventListener('click', () => {
// 		app.innerHTML = HomePage();
// 	});
// }

function renderPaintingsList() {
	const paintingsListButton = document.querySelector(
		'.nav__list_paintingsList'
	);
	paintingsListButton.addEventListener('click', () => {
		console.log('render paintings department fired');
		const app = document.querySelector('#app');
		// requesting all objectIDs from dept. european paintings
		apiActions.getRequest(
			'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11',
			(paintings) => {
				// console.log(paintings)
				app.innerHTML = PaintingsPage(paintings);
			}
		);
	});
}
