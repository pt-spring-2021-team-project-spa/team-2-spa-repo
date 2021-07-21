import '../../css/ArtStyle.css';

export default function PaintingsPage(paintings) {
	return `
  <ul class='art__list'>
  <li class='art__list_asianArtsList'>Asian Arts</li>
  <li id="selectedDepartment" class="art__list_paintingsList">European Paintings</li>
  <li class='art__list_printsList'>Drawings and Prints</li>
</ul>
  <div class="artObject__container">
  <div class="artObject">
  <h1>European Paintings</h1>
    ${paintings.objectIDs
		.map((painting) => {
			return `
      <h2 id="${painting}">[title-thinking]</h2>
      <p id="artist${painting}">[artist-thinking]</p>
      <img id="image${painting}" src="" alt='[image-thinking]'/>
      `;
		})
		.join('')}
    </div>
  </div>
  `;
}
