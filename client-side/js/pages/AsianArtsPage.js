import '../../css/ArtStyle.css';

export default function AsianArtsPage(asianArts) {
	return `
  <ul class='art__list'>
      <li class='art__list_asianArtsList'>Asian Arts</li>
      <li class="art__list_paintingsList">European Paintings</li>
      <li class='art__list_printsList'>Drawings and Prints</li>
  </ul>
  <div class="artObject__container">
  <div class="artObject">
      <h1>The Asian Arts</h1>
        ${asianArts.objectIDs
          .map((asianArt) => {
            return `
              <h2 id="${asianArt}">[title-thinking]</h2>
              <p id="artist${asianArt}">[artist-thinking]</p>
              <img id="image${asianArt}" src="" alt='[image-thinking]'/>
            `;
          })
        .join('')}
    </div>
  </div>
  `;
}
