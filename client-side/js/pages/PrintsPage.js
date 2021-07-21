import '../../css/ArtStyle.css';

export default function PrintsPage(prints) {
	return `
  <ul class='art__list'>
  <li class='art__list_asianArtsList'>Asian Arts</li>
  <li class="art__list_paintingsList">European Paintings</li>
  <li id="selectedDepartment" class='art__list_printsList'>Drawings and Prints</li>
</ul>
  <div class="artObject__container">
  <div class="artObject">
  <h1>Drawings and Prints</h1>
    ${prints.objectIDs
		.map((print) => {
			return `
      <h2 id="${print}">[title-thinking]</h2>
      <p id="artist${print}">[artist-thinking]</p>
      <img id="image${print}" src="" alt='[image-thinking]'/>
      `;
		})
		.join('')}
    </div>
  </div>
  `;
}
