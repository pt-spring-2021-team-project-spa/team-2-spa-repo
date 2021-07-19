import '../../css/ArtStyle.css';

export default function PaintingsPage(paintings) {
	return `
  <div class="artObject__container">
  <div class="artObject">
  <h1>European Paintings</h1>
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
  </div>
  `;
}
