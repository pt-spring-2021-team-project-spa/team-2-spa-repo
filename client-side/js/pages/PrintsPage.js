import '../../css/ArtStyle.css';

export default function PrintsPage(prints) {
	return `
  <ul class='art__list'>
  <li class='art__list_asianArtsList'>Asian Arts</li>
  <li class="art__list_paintingsList">European Paintings</li>
  <li id="selectedDepartment" class='art__list_printsList'>Drawings and Prints</li>
</ul>
  <div id="printsPage" class="artObject__container">
  <div class="artObject">
    ${prints.objectIDs
		.map((print) => {
			return `
      <div class="artImage">
      <img id="image${print}" src="" alt='[image-thinking]'/>
      </div>
      <div class="artObjectList">
      <h2 id="${print}">[title-thinking]</h2>
      <div class="artYear">
        <span><b>Date:</b></span>
        <span id="year${print}">[year-thinking]</span>
      </div>
      <div class="artArtist">
      <span><b>Artist:</b></span>
      <span id="artist${print}">[artist-thinking]</span>
      </div>
        <div class="artArtistNationality">
          <span><b>Nationality:</b></span>
          <span id="artistNationality${print}">[artist-nationality-thinking]</sp>
        </div>
        <div class="artMedium">
          <span><b>Medium:</b></span>
          <span id="medium${print}">[meidum-thinking]</span>
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
