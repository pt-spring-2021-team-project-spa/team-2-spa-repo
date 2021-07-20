export default function PotdPage(Potd) {
  return `
    <h1>Nasa's Picture of the Day</h1>
    <div class='potd__container'>
        ${Potd.reuslts.map((image) => {
          console.log(image);
        })}
    </div>
    `;
}
