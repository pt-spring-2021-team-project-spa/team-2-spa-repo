import "../../css/Random.css";

export default function RandomPage() {
  return `

<div class="results__container">
  <article id="art__result" class="result">
    <button id="art_btn">
      <a>Random piece of Art</a>
    </button>
  </article>
  <article id="science__result" class="result">
    <button id="science_btn">
      <a>Random piece of Science</a>
    </button>
  </article>
  <article id="history__result" class="result">
    <button id="history_btn">
      <a>Random piece of History</a>
    </button>
  </article>
</div>; 
`;
}
