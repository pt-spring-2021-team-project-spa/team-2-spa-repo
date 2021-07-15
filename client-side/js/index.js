import apiActions from './api-actions/api-actions.js';
import Art from './pages/ArtPage.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PaintingsPage from './pages/PaintingsPage.js';
import PrintsPage from './pages/PrintsPage.js';
import AsianArtsPage from './pages/AsianArtsPage.js';

// let app = document.querySelector('#app');

const pullAmount = 12;

buildPage();

function buildPage() {
	header();
	footer();
	renderArtPage();
	renderAsianArtsList();
	renderPaintingsList();
	renderPrintsList();
}

function header() {
	const headerElement = document.querySelector('.header');
	headerElement.innerHTML = Header();
}

function footer() {
	const footerElement = document.querySelector('.footer');
	footerElement.innerHTML = Footer();
}

function renderArtPage() {
	const artListButton = document.querySelector('.nav__list_artList');
	artListButton.addEventListener('click', () => {
		console.log('render art page fired');
		const app = document.querySelector('#app');
		app.innerHTML = Art();
	});
}

function renderAsianArtsList() {
	// const artApp = document.querySelector('#app');
	const asianArtsListButton = document.querySelector(
		'.nav__list_asianArtsList'
	);
	asianArtsListButton.addEventListener('click', () => {
		console.log('render asian arts list fired');
		const app = document.querySelector('#app');
		apiActions.getRequest(
			'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=6',
			(asianArts) => {
				console.log(asianArts);
				asianArts.objectIDs = asianArts.objectIDs.splice(0, pullAmount);
				console.log(asianArts);
				app.innerHTML = AsianArtsPage(asianArts);
				for (let i = 0; i < pullAmount; i++) {
					asianArts.objectIDs[i];
					apiActions.getRequest(
						'https://collectionapi.metmuseum.org/public/collection/v1/objects/' +
							asianArts.objectIDs[i],
						(asianArt) => {
							console.log(asianArts);
							document.getElementById(
								asianArt.objectID
							).innerText = asianArt.title;
							document.getElementById(
								'artist' + asianArt.objectID
							).innerText = asianArt.artistDisplayName;
							document.getElementById(
								'image' + asianArt.objectID
							).src = asianArt.primaryImage;
						}
					);
				}
			}
		);
	});
}

function renderPaintingsList() {
	const paintingsListButton = document.querySelector(
		'.nav__list_paintingsList'
	);
	paintingsListButton.addEventListener('click', () => {
		console.log('render paintings list fired');
		const app = document.querySelector('#app');
		// requesting all objectIDs from dept. european paintings
		apiActions.getRequest(
			'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11',
			(paintings) => {
				console.log(paintings);
				paintings.objectIDs = paintings.objectIDs.splice(0, pullAmount);
				console.log(paintings);
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
								'artist' + painting.objectID
							).innerText = painting.artistDisplayName;
							document.getElementById(
								'image' + painting.objectID
							).src = painting.primaryImageSmall;
						}
					);
				}
			}
		);
	});
}

function renderPrintsList() {
	const printsListButton = document.querySelector('.nav__list_printsList');
	printsListButton.addEventListener('click', () => {
		console.log('render prints list fired');
		const app = document.querySelector('#app');
		apiActions.getRequest(
			'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=9',
			(prints) => {
				console.log(prints);
				prints.objectIDs = prints.objectIDs.splice(0, pullAmount);
				console.log(prints);
				app.innerHTML = PrintsPage(prints);
				for (let i = 0; i < pullAmount; i++) {
					prints.objectIDs[i];
					apiActions.getRequest(
						'https://collectionapi.metmuseum.org/public/collection/v1/objects/' +
							prints.objectIDs[i],
						(print) => {
							console.log(print);
							document.getElementById(print.objectID).innerText =
								print.title;
							document.getElementById(
								'artist' + print.objectID
							).innerText = print.artistDisplayName;
							document.getElementById(
								'image' + print.objectID
							).src = print.primaryImage;
						}
					);
				}
			}
		);
	});
}
