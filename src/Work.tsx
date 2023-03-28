import currencyImg from './images/Cc_Playground_Currencies_Page.png';
import perksImg from './images/Cc_Playground_Perks_Page.png';
import playgroundImg from './images/Cc_Playground_Playground_Page.png';
import transactionsImg from './images/Cc_Playground_Transactions_Page.png';

export default function Work() {
  return (
    <>
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
      <figure>
        <div className="screenshotContainer">
          <img src={playgroundImg} />
        </div>
        <figcaption>Reward card currencies list view. They are stored in the backend db.</figcaption>
      </figure>
      <figure>
        <div className="screenshotContainer">
          <img src={transactionsImg} />
        </div>
        <figcaption>Reward card currencies list view. They are stored in the backend db.</figcaption>
      </figure>
      <figure>
        <div className="screenshotContainer">
          <img src={currencyImg} />
        </div>
        <figcaption>Reward card currencies list view. They are stored in the backend db.</figcaption>
      </figure>
      <figure>
        <div className="screenshotContainer">
          <img src={perksImg} />
        </div>
        <figcaption>Reward card currencies list view. They are stored in the backend db.</figcaption>
      </figure>
    </>
  );
}
