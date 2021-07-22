export default function PotdPage(photo) {
    return `
      <h1>NASA's Picture of the Day</h1>
      <div class='potd__container'>
         <h2>${photo.explanation}</h2>
         <img src=${photo.hdurl} alt='NASA's Pictrue of the Day' />
      </div>
      `;
  }