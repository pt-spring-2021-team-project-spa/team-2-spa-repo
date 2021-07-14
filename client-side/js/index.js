import apiActions from './api-actions/api-actions.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PaintingsPage from './pages/PaintingsPage.js';


// let app = document.querySelector('#app');

const pullAmount = 25;

buildPage();

function buildPage() {
	header();
	footer();
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
				console.log(paintings);
				paintings.objectIDs = paintings.objectIDs.splice(0, pullAmount);
				console.log(paintings)
				app.innerHTML = PaintingsPage(paintings);
				for (let i = 0; i < pullAmount; i++) {
					paintings.objectIDs[i];
					apiActions.getRequest(
						'https://collectionapi.metmuseum.org/public/collection/v1/objects/' +
							paintings.objectIDs[i],
						(painting) => {
							console.log(painting);
							document.getElementById(
								painting.objectID
							).innerText = painting.title;
							document.getElementById(
								"artist" + painting.objectID
							).innerText = painting.artistDisplayName;
							document.getElementById(
								"image" + painting.objectID
							).src = painting.primaryImageSmall;
						}
					);
				}
			}
		);
	});
}