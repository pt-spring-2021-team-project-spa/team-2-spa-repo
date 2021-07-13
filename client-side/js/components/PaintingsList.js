import PaintingTile from './PaintingTile.js';

export default function PaintingsList(paintingsList) {
  return `
  <div class='paintingsList__container'>
  ${departments.results
    .map((d) => {
      return `
      ${PersonTile(person)}
      `;
    })
    .join('')}
</div>
    `;
}