import '../../css/ArtStyle.css';

export default function PrintsPage(prints) {
	return `
  <div class="artObject__container">
  <div class="artObject">
  <h1>Drawings and Prints</h1>
    ${prints.objectIDs
		.map((print) => {
			return `
      <h2 id="${print}">title-Thinking</h2>
      <p id="artist${print}">artist-Thinking</p>
      <img id="image${print}" src="" alt='image-Thinking'/>
      `;
		})
		.join('')}
    </div>
  </div>
  `;
}
