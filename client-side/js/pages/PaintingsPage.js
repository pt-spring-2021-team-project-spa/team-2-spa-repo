export default function PaintingsPage(paintings) {
  console.log(paintings);
  // const painting = paintings.objectIDs;
  // console.log(painting);


	return `
  <h1>The Paintings Page</h1>
  <div class="paintings__container">
    ${paintings.objectIDs
		.map((painting) => {
      // console.log(painting.primaryImageSmall)
      // const paintingImage = painting.primaryImageSmall[0].href;
			return `
      <h2 id="${painting}">thinking</h2>
      `
		})
		.join('')}
  </div>
  `;
}
{/* <h2>${painting.objectID}</h2> */}

{/* <img src=${paintingImage} alt=''/> */}