import "../../css/GamesPage.css";

export default function GamesPage() {
  return `
    <h1>Jackr Enterprises</h1>
    <h3>Mystery Educator Games</h3>
<div class="outside_container">
  <div class="quiz_container">
      <div id="question_container" class="hide">
        <div id="question">Question</div>
          <div id="answer_buttons" class="btn_grid">
            <button class="btn">Answer 1</button>
            <button class="btn">Answer 2</button>
            <button class="btn">Answer 3</button>
            <button class="btn">Answer 4</button>
          </div>
      </div>
          <div class="controls">
            <button id="start_btn" class="start_btn btn">Start</button>
            <button id="next_btn" class="next_btn btn">Next</button>
          </div>
  </div>
</div>
    `;
}
