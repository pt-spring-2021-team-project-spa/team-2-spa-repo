export default function SatEarthPage(SatEarth) {
	return `
  <div class="science__container">
  <div class="science">
  <h1>Satellite Earth</h1>
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