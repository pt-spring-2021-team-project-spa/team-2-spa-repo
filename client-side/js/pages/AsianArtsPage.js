import '../../css/ArtStyle.css';

export default function AsianArtsPage(asianArts) {
	return `
  <div class="artObject__container">
  <div class="artObject">
  <h1>The Asian Arts</h1>
    ${asianArts.objectIDs
		.map((asianArt) => {
			return `
      <h2 id="${asianArt}">title-Thinking</h2>
      <p id="artist${asianArt}">artist-Thinking</p>
      <img id="image${asianArt}" src="" alt='image-Thinking'/>
      `;
		})
		.join('')}
    </div>
  </div>
  `;
}
