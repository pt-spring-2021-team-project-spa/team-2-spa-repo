import '../../css/ArtStyle.css';

export default function PrintsPage(prints) {
	return `
  <ul class='art__list'>
  <li class='art__list_asianArtsList'>Asian Arts</li>
  <li class="art__list_paintingsList">European Paintings</li>
  <li id="selectedDepartment" class='art__list_printsList'>Drawings and Prints</li>
</ul>
  <div class="artObject__container">
  <div class="artObject">
    ${prints.objectIDs
		.map((print) => {
			return `
      <div class="artImage">
      <img id="image${print}" src="" alt='[image-thinking]'/>
      </div>
      <div class="artObjectList">
      <h2 id="${print}">[title-thinking]</h2>
      <div class="artTitle">
      <span>Title:</span>
      <span id="${print}">[title-thinking]</span>
      </div>
      <div class="artArtist">
      <span>Artist: </span>
      <span id="artist${print}">[artist-thinking]</span>
      </div>
      <div class="artYear">
        <span>Year:</span>
        <span id="year${print}">[year-thinking]</span>
      </div>
        <div class="artArtistNationality">
          <span>Nationality: </span>
          <span id="artistNationality${print}">[artist-nationality-thinking]</sp>
        </div>
        <div class="artCountry">
          <span>Country: </span>
          <span id="country${print}">[country-thinking]</span>
        </div>
        <div class="artMedium">
          <span>Medium:</span>
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
