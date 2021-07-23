import '../../css/ArtStyle.css';

export default function PaintingsPage(paintings) {
	return `
  <ul class='art__list'>
  <li class='art__list_asianArtsList'>Asian Arts</li>
  <li id="selectedDepartment" class="art__list_paintingsList">European Paintings</li>
  <li class='art__list_printsList'>Drawings and Prints</li>
  </ul>
  <div id="paintingsPage" class="artObject__container">
  <div class="artObject">
    ${paintings.objectIDs
		.map((painting) => {
			return `
      <div class="artImage">
      <img id="image${painting}" src="" alt='[image-thinking]'/>
      </div>
      <div class="artObjectList">
      <h2 id="${painting}">[title-thinking]</h2>
      <div class="artYear">
        <span><b>Date:</b></span>
        <span id="year${painting}">[year-thinking]</span>
      </div>
      <div class="artArtist">
      <span><b>Artist:</b></span>
      <span id="artist${painting}">[artist-thinking]</span>
      </div>
        <div class="artArtistNationality">
          <span><b>Nationality:</b></span>
          <span id="artistNationality${painting}">[artist-nationality-thinking]</sp>
        </div>
        <div class="artMedium">
          <span><b>Medium:</b></span>
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
