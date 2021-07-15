export default function PrintsPage(prints) {
	return `
  <div class="object__container">
  <h1>The Drawings and Prints Page</h1>
    ${prints.objectIDs
		.map((print) => {
			return `
      <h2 id="${print}">title-Thinking</h2>
      <p>Artist:</p>
      <p id="artist${print}">artist-Thinking</p>
      <img id="image${print}" src="" alt='image-Thinking'/>
      `;
		})
		.join('')}
  </div>
  `;
}
