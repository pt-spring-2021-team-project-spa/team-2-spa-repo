import "../../css/QuizPage.css";

export default function QuizPage() {
  return `
    <h1>Jackr Enterprises</h1>
    <h3>Mystery Educator Games</h3>
  
    <div class="quiz_container">
    <h2>Q1: What are the 3 subjects we talk about?</h2>
    <input type="radio" name="question1" id="correct1">Art, Science, and History<br>
    <input type="radio" name="question1" >Science, History, and All about Harry Potter<br>
    <input type="radio" name="question1" >Math, Gym, and All about Pokemon<br>
    <input type="radio" name="question1" >Art, Geography, and Health<br>
     
    <h2>Q2: What is one of the 7 Wonders of the World?</h2>
    <input type="radio" name="question2" >Brooklyn Bridge<br>
    <input type="radio" name="question2" >Statue of Liberty<br>
    <input type="radio" name="question2" >Smokey Mountains<br>
    <input type="radio" name="question2" id="correct2">Taj Mahal<br>
     
    <h2>Q3: What is one of the categories listed under art?</h2>
    <input type="radio" name="question3" >The Statues of the World<br>
    <input type="radio" name="question3" id="correct3">Asian Arts<br>
    <input type="radio" name="question3" >Picasso<br>
    <input type="radio" name="question3" >Pencil and Crayons<br>
     
    <h2>Q4: How old is the Great Wall of China?</h2>
    <input type="radio" name="question4" >3 million years old<br>
    <input type="radio" name="question4" >5,000 years old<br>
    <input type="radio" name="question4" id="correct4">2,300 years old<br>
    <input type="radio" name="question4" >30 years old<br>
    
    <h2>Q5: How tall is Chichen Itza?</h2>
    <input type="radio" name="question5" >50 feet tall<br>
    <input type="radio" name="question5" >200 feet tall<br>
    <input type="radio" name="question5" >5 feet tall<br>
    <input type="radio" name="question5" id="correct5">98 feet tall<br>
    
    <input class="submit_Btn" type="submit" name="submit" value="Submit Quiz" id="result">
    
    </div>
    <p class="number_right" id="number_correct"></p>
    
    `;
}
