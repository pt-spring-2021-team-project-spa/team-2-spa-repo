import '../../css/ArtStyle.css';

export default function AsianArtsPage(asianArts) {
	return `
  <ul class='art__list'>
      <li id="selectedDepartment" class='art__list_asianArtsList'>Asian Arts</li>
      <li class="art__list_paintingsList">European Paintings</li>
      <li class='art__list_printsList'>Drawings and Prints</li>
  </ul>
  <h1>The Asian Arts</h1>
  <p>Hover over the image to find out the Artist, Year and Medium!</p>
  <div class="artObject__container">
  <div class="artObject">
        ${asianArts.objectIDs
			.map((asianArt) => {
				return `
              <h2 id="${asianArt}">[title-thinking]</h2>
              <div class="artObjectInfo">
              <p>Artist:</p>
              <p id="artist${asianArt}">[artist-thinking]</p>
              </br>
              <p>Year:</p>
              <p id="year${asianArt}">[year-thinking]</p>
              </br>
              <p>Medium:</p>
              <p id="medium${asianArt}">[medium-thinking]</p>
              </div>
              <img id="image${asianArt}" src="" alt='[image-thinking]'/>
            `;
			})
			.join('')}
    </div>
  </div>
  `;
}
