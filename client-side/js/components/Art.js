import '../../css/ArtStyle.css';

export default function Art() {
	return `
    <h1>ART CATEGORIES!</h1>
    <ul class='art__list'>
            <li class='art__list_asianArtsList'>Asian Arts</li>
            <li class="art__list_paintingsList">European Paintings</li>
            <li class='art__list_printsList'>Drawings and Prints</li>
        </ul>
        <h2>Welcome to the Art Department!</h2>
        <p>Here you can choose a department to view a random art piece provided by the MET Museum.</p>
        <p>Some pieces don't have an image associated with it, so click the department again to get a new piece!</p>
    `;
}
