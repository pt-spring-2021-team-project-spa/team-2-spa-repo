import '../../css/ArtStyle.css';

export default function AsianArtsPage(asianArts) {
	return `
  <ul class='art__list'>
      <li id="selectedDepartment" class='art__list_asianArtsList'>Asian Arts</li>
      <li class="art__list_paintingsList">European Paintings</li>
      <li class='art__list_printsList'>Drawings and Prints</li>
  </ul>
  <div class="artObject__container">
  <div class="artObject">
        ${asianArts.objectIDs
			.map((asianArt) => {
				return `
        <div class="artImage">
        <img id="image${asianArt}" src="" alt='[image-thinking]'/>
        </div>
        <div class="artObjectList">
        <h2 id="${asianArt}">[title-thinking]</h2>
        <div class="artArtist">
        <span>Artist: </span>
        <span id="artist${asianArt}">[artist-thinking]</span>
        </div>
        <div class="artYear">
          <span>Year:</span>
          <span id="year${asianArt}">[year-thinking]</span>
        </div>
          <div class="artArtistNationality">
            <span>Nationality: </span>
            <span id="artistNationality${asianArt}">[artist-nationality-thinking]</sp>
          </div>
          <div class="artCountry">
            <span>Country: </span>
            <span id="country${asianArt}">[country-thinking]</span>
          </div>
          <div class="artMedium">
            <span>Medium:</span>
            <span id="medium${asianArt}">[meidum-thinking]</span>
          </div>
          </div>
          </br>            `;
			})
			.join('')}
    </div>
  </div>
  `;
}
