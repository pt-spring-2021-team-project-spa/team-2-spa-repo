export default function PaintingsPage(paintings) {
	return `
  <h1>The Paintings Page</h1>
  <div class="paintings__container">
    ${paintings.objectIDs
		.map((painting) => {
			return `
      <h2 id="${painting}">title-Thinking</h2>
      <p id="artist${painting}">artist-Thinking</p>
      <img id="image${painting}" src="" alt='image-Thinking'/>
      `;
		})
		.join('')}
  </div>
  `;
}
