import '../../css/ArtStyle.css';

export default function Art() {
	return `
    <ul class='art__list'>
    <li class='art__list_asianArtsList'>Asian Arts</li>
    <li class="art__list_paintingsList">European Paintings</li>
    <li class='art__list_printsList'>Drawings and Prints</li>
    </ul>
    <div class="artPage">
        <h1>Welcome to the Art Department!</h1>
        <h2>Click on a department above to view a RANDOM art piece provided by the MET Museum</h2>
        </br>
        <p>**Some pieces don't have images, so click the department again to get a new one!**</p>
    </div>
    `;
}
