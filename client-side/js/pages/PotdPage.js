export default function PotdPage(photo) {
    return `
      <h1>Nasa's Picture of the Day</h1>
      <div class='potd__container'>
         <h2>${photo.explanation}</h2>
         <img src=${photo.hdurl} alt='' />
      </div>
      `;
  }