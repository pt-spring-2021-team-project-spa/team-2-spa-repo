import "../../css/ScienceStyle.css";

// export default function SciencePage() {
//   return `
//     <h2>Science Categories</h2>
//         <ul class='science__list'>
//             <li class='science__list_satEarth'>Satellite Images of Earth</li>
//             <li class='science__list_potd'>Photo Of The Day</li>
//             <li class='science__list_rover'>The Mars Rover</li>
//         </ul>
//     `;
// }
export default function SciencePage(photo) {
  return `
      <h1>Welcome to NASA Knowledge</h1>
      <div class='potd__container'>
         <h2>${photo.explanation}</h2>
         <img src=${photo.hdurl} alt='NASA Knowledge Picture' />
      </div>
      `;
}
