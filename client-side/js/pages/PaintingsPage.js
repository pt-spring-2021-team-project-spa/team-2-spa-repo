export default function PaintingsPage(paintings) {
	return `
  <h1>The Paintings Page</h1>
  <div class="paintings__container">
    ${paintings.objectIDs
		.map((painting) => {
			return `
      <h2>${painting.objectID}</h2>
      `
		})
		.join('')}
  </div>
  `;
}
