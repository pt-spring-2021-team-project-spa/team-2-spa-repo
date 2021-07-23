import "../../css/QuizPage.css";

export default function QuizPage() {
  return `
    <h1>Jackr Enterprises</h1>
    <h3>Mystery Educator Games</h3>
  
    <div class="quiz_container">
    <div class="Q_1_2">
    <article class="q1">
    <h2>Q1: What are the 3 subjects we talk about?</h2>
    <input type="radio" name="question1" id="correct1">Art, Science, and History<br>
    <input type="radio" name="question1" >Science, History, and All about Harry Potter<br>
    <input type="radio" name="question1" >Math, Gym, and All about Pokemon<br>
    <input type="radio" name="question1" >Art, Geography, and Health<br>
    </article>
    <article class="q2">
    <h2>Q2: What is one of the 7 Wonders of the World?</h2>
    <input type="radio" name="question2" >Brooklyn Bridge<br>
    <input type="radio" name="question2" >Statue of Liberty<br>
    <input type="radio" name="question2" >Smokey Mountains<br>
    <input type="radio" name="question2" id="correct2">Taj Mahal<br>
     </article>
     </div>
     <div class="Q_3_4">
     <article class="q3">
    <h2>Q3: What is one of the categories listed under art?</h2>
    <input type="radio" name="question3" >The Statues of the World<br>
    <input type="radio" name="question3" id="correct3">Asian Arts<br>
    <input type="radio" name="question3" >Picasso<br>
    <input type="radio" name="question3" >Pencil and Crayons<br>
    </article>
    <article class="q4">
    <h2>Q4: How old is the Great Wall of China?</h2>
    <input type="radio" name="question4" >3 million years old<br>
    <input type="radio" name="question4" >5,000 years old<br>
    <input type="radio" name="question4" id="correct4">2,300 years old<br>
    <input type="radio" name="question4" >30 years old<br>
    </article>
    </div>
      <div class="Q_5_6">
     <article class="q5">
    <h2>Q5: How tall is Chichen Itza?</h2>
    <input type="radio" name="question5" >50 feet tall<br>
    <input type="radio" name="question5" >200 feet tall<br>
    <input type="radio" name="question5" >5 feet tall<br>
    <input type="radio" name="question5" id="correct5">98 feet tall<br>
    </article>
    <article class="q6">
    <h2>Q6: For the science subject what are studying ?</h2>
    <input type="radio" name="question6" >Smithsonian<br>
    <input type="radio" name="question6" id="correct6">NASA<br>
    <input type="radio" name="question6" >Met Museum<br>
    <input type="radio" name="question6" >Marvel<br>
    </article>
    </div>
    <div class="submit_results">
    <input class="submit_Btn" type="submit" name="submit" value="Submit Quiz" id="result">
    <p class="number_right" id="number_correct"></p>
    </div>
    </div>
    
    
    `;
}
