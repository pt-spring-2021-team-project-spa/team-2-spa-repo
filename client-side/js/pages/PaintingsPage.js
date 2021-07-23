import '../../css/ArtStyle.css';

export default function PaintingsPage(paintings) {
	return `
  <ul class='art__list'>
  <li class='art__list_asianArtsList'>Asian Arts</li>
  <li id="selectedDepartment" class="art__list_paintingsList">European Paintings</li>
  <li class='art__list_printsList'>Drawings and Prints</li>
  </ul>
  <div class="artObject__container">
  <div class="artObject">
    ${paintings.objectIDs
		.map((painting) => {
			return `
      <div class="artImage">
      <img id="image${painting}" src="" alt='[image-thinking]'/>
      </div>
      <div class="artObjectList">
      <h2 id="${painting}">[title-thinking]</h2>
      <div class="artArtist">
      <span>Artist: </span>
      <span id="artist${painting}">[artist-thinking]</span>
      </div>
      <div class="artYear">
        <span>Year:</span>
        <span id="year${painting}">[year-thinking]</span>
      </div>
        <div class="artArtistNationality">
          <span>Nationality: </span>
          <span id="artistNationality${painting}">[artist-nationality-thinking]</sp>
        </div>
        <div class="artCountry">
          <span>Country: </span>
          <span id="country${painting}">[country-thinking]</span>
        </div>
        <div class="artMedium">
          <span>Medium:</span>
          <span id="medium${painting}">[meidum-thinking]</span>
        </div>
        </div>
        </br>
      `;
		})
		.join('')}
    </div>
  </div>
  `;
}
