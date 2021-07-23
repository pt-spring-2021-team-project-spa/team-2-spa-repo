import leeImg from '../../images/lee.jpg';
import nickImg from '../../images/nick.jpg';
import shuaybImg from '../../images/shuayb.jpg';
import tylerImg from '../../images/tyler.jpg';
import amberImg from '../../images/amber.jpg';


export default function AboutUs() {
  return `
      <h1>About Our Team</h1>
      <h3>Thank you for visiting our site! Here is a little bit more about our team</h3>
</div>
  <div class="employees">
    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Lee Powell</h2>
          <img src=${leeImg} alt='Lee' />
          <p class="title">Director</p>
          <p1> ""Automate the redundant," is the mantra that lead to me learning software development."</p1>
          <p class="email">LPowell@Spa.org</p>
          <button type="Contact">Contact</button>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Nick Billhardt</h2>
          <img src=${nickImg} alt='Nick' />
          <p class="title">Director</p>
          <p1> "I am willing to put in the work to get the results. I also understand that sometimes we have to help others in order to succeed as a whole." </p1>
          <p class="email">NBillhardt@Spa.org</p>
          <button type="Contact">Contact</button>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Tyler Koenig</h2>
          <img src=${tylerImg} alt='Tyler' />
          <p class="title">Director</p>
          <p1> Will always lend a helping hand, has great enthusiasm, and likes to be apart of a team. </p1>
          <p class="email">TKoenig@Spa.org</p>
          <button type="Contact">Contact</button>
        </div>
      </div>
    </div>
    <div class="column">
        <div class="card">
          <div class="container">
            <h2>Shuayb Farrah</h2>
            <img src=${shuaybImg} alt='Shuyab' />
            <p class="title">Director</p>
            <p1>"As a positive-minded and detail-oriented individual who works well within a team. I am a also critical thinker, detail-oriented and extremely driven person."</p1>
            <p class="email">SFarrah@Spa.org</p>
            <button type="Contact">Contact</button>
          </div>
        </div>
      </div>
    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Amber Lindley</h2>
          <img src=${amberImg} alt='Amber' />
          <p class="title">Director</p>
          <p1> "A enthusiastic and outgoing individual, who is passionate for the work I do. Loves to problem solve, the feeling when you get the solution is so satisfying. "</p1>
          <p class="email">Alindley@Spa.org</p>
          <button type="Contact">Contact</button>
        </div>
      </div>
    </div>
  </div>
  `;
}
