export default function AsianArtsPage(asianArts) {
	return `
  <div class="object__container">
  <h1>The Asian Art Page</h1>
    ${asianArts.objectIDs
		.map((asianArt) => {
			return `
      <h2 id="${asianArt}">title-Thinking</h2>
      <p>Artist:</p>
      <p id="artist${asianArt}">artist-Thinking</p>
      <img id="image${asianArt}" src="" alt='image-Thinking'/>
      `;
		})
		.join('')}
  </div>
  `;
}
