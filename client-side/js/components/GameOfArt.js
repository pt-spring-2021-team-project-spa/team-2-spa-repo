export default function GameOfArt() {
  return `
  <h1>Mystery Educator Game of Art</h1>
<form name="quiz" id="quiz">
  <div>
    <p>1: What is the first Wonder?</p>
    <p><input type="radio" name="question1" value="1">A. 1</p>
    <p><input type="radio" name="question1" value="2">B. 2</p>
    <p><input type="radio" name="question1" value="3">C. 3</p>
    <p><input type="radio" name="question1" value="4">D. 4</p>
  </div>
  <div>
    <p>2: What is the top mnt?</p>
    <p><input type="radio" name="question2" value="1">A. 5</p>
    <p><input type="radio" name="question2" value="2">B. 3</p>
    <p><input type="radio" name="question2" value="3">C. 7</p>
    <p><input type="radio" name="question2" value="4">D. 6</p>
  </div>
  <div>
    <p>3: What is the Last Wonder?</p>
    <p><input type="radio" name="question3" value="1">A. 1</p>
    <p><input type="radio" name="question3" value="2">B. 2</p>
    <p><input type="radio" name="question3" value="3">C. 3</p>
    <p><input type="radio" name="question3" value="4">D. 4</p>
  </div>
  <div>
    <p>4: What is the first Wonder?</p>
    <p><input type="radio" name="question4" value="1">A. 1</p>
    <p><input type="radio" name="question4" value="2">B. 2</p>
    <p><input type="radio" name="question4" value="3">C. 3</p>
    <p><input type="radio" name="question4" value="4">D. 4</p>
  </div>
  <div>
    <p>5: What is the first Wonder?</p>
    <p><input type="radio" name="question5" value="1">A. 1</p>
    <p><input type="radio" name="question5" value="2">B. 2</p>
    <p><input type="radio" name="question5" value="3">C. 3</p>
    <p><input type="radio" name="question5" value="4">D. 4</p>
  </div>
  <input type="button" name="" value="Submit" onclick="check()">
   <p id="result"></p>
</form>
`;
}
