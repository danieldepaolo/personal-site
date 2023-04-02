import Screenshot from './Screenshot';

import currencyImg from './images/screenshots/Cc_Playground_Currencies_Page.png';
import perksImg from './images/screenshots/Cc_Playground_Perks_Page.png';
import playgroundImg from './images/screenshots/Cc_Playground_Playground_Page.png';
import transactionsImg from './images/screenshots/Cc_Playground_Transactions_Page.png';
import siGameHeaderPost from './images/screenshots/SI_Game_Header.png';
import siGameHeaderLive from './images/screenshots/SI_Game_Header_Live_NHL.png';
import sspContact from './images/screenshots/Self_Service_Portal_Contact_Us.png';
import sspProfile from './images/screenshots/Self_Service_Portal_Profile.png';
import sspComms from './images/screenshots/Self_Service_Portal_Communications.png';
import niceDaysCounterSeattle from './images/screenshots/Nice_Days_Counter_Seattle_2018_Results.png';
import niceDaysCounterChicago from './images/screenshots/Nice_Days_Counter_Chicago_2018_Results.png';

export default function Work() {
  return (
    <>
      <h2>Professional</h2>
      <div className="card">
        <h3>Sports Illustrated Game Page Headers</h3>
        <div className="screenshotGrid">
          <Screenshot
            imageSrc={siGameHeaderPost}
            caption={
              <>
                Game header in post-game state. <a href="https://www.si.com/nba/game/dallas-mavericks-vs-indiana-pacers-march-27-2023">Page in production</a>.
              </>}
          />
          <Screenshot
            imageSrc={siGameHeaderLive}
            caption="Game header in live game state. It will only be in this state for the duration of the game, so a link wouldn't work here."
          />
        </div>
      </div>
      <div className="card">
        <h3>Self-Service Portal</h3>
        <div className="screenshotGrid">
          <Screenshot imageSrc={sspContact} />
          <Screenshot imageSrc={sspProfile} />
          <Screenshot imageSrc={sspComms} />
        </div>
      </div>

      <h2>Personal Projects</h2>
      <div className="card">
        <h3>CC Playground</h3>
        <p>When I was very much into optimizing my spend on the right collection of rewards credit cards, I made this web app. I never actually deployed it anywhere, but I used it plenty to optimize my credit cards. Some features of it: </p>
        <h4>User features</h4>
        <ul>
          <li>Has registration and login functionality</li>
          <li>UI for uploading transactions from a text file (designed to ingest Mint transactions export). The categories are important and are used to calculate bonus based on selected cards.</li>
          <li>UI for selecting what credit cards to include in the annual bonus $ calculation, assuming optimal spend (ex. Putting a flight on the travel card)</li>
          <li>Shows what currencies (various types of miles, cents, bank currencies like Citi ThankYou Points) are earned in a year</li>
        </ul>
        <h4>Technical features</h4>
        <ul>
          <li>Uses React in the front-end</li>
          <li>Uses ExpressJs in the back-end with a MongoDB database (mongoose library)</li>
          <li>Database stores transactions, credit cards, currency types, and card perks</li>
        </ul>
        <h4>Screenshots</h4>
        <div className="screenshotGrid">
          <Screenshot imageSrc={playgroundImg} caption="The primary view where the user can select cards and find out the value they'd get with that combination." />
          <Screenshot imageSrc={transactionsImg} caption="Table showing the user's transactions." />
          <Screenshot imageSrc={currencyImg} caption="Reward card currencies list view. They are stored in the backend db." />
          <Screenshot imageSrc={perksImg} caption="Reward card perks list view." />
        </div>
      </div>
      <div className="card">
        <h3>Nice Days Counter</h3>
        <p>
            When I am considering moving to a new city, I am interested to learn about the weather there. 
            I thought of the idea of a "nice day" and how many a place would have per year. 
            However, people do not all have the same opinion about what constitutes a nice day.
            With this app, the user can define what a nice day is and then figure out how many nice days
            there are per year in a given city.
        </p>
        <h4>Technical features</h4>
        <ul>
          <li>React in the front-end, Material-UI for the form controls and other stuff, and recharts for the chart</li>
          <li>Express backend that fetches from DarkSky weather API. Unfortunately this API lost support on March 31, 2023 due to a previous acquisition by Apple.</li>
        </ul>
        <h4>Screenshots</h4>
        <div className="screenshotGrid">
          <Screenshot imageSrc={niceDaysCounterSeattle} caption="Seattle's weather is not as bad as you think! That is, with my definition of a nice day." />
          <Screenshot imageSrc={niceDaysCounterChicago} caption="Chicago... is a bit rough." />
        </div>
      </div>
    </>
  );
}
