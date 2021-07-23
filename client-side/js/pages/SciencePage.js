import "../../css/ScienceStyle.css";

export default function SciencePage(photo) {
  return `
        <div class=Science__container'>
      <h1 class='Science__title'>Welcome to NASA Knowledge</h1>
      <div class='potd__container'>
         <h2 class='potd__container_explianation'>${photo.explanation}</h2>
         <img src=${photo.hdurl} alt='Error: Please reload the page.' />
      </div>
      </div>
      `;
}
