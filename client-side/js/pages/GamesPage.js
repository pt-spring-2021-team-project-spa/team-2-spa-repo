import "../../css/GamesPage.css";

export default function GamesPage() {
  return `
    <h1>Jackr Enterprises</h1>
    <h3>Mystery Educator Games</h3>
   <div class="games__container">
            
          <article>
              <button><a  class="art__game">Game of Art</a></button>
            <p>
              Brief description of game
            </p>
          </article>
          <article>
              <button><a class="science__game">Game of Science</a></button>
              <p>
              Brief description of game
              </p>
            </article>
            <article>
              <button><a class="history__game">Game of History</a></button>
            <p>
              Brief description of game
            </p>
          </article>
          </div> 

    `;
}
