import Screenshot from './Screenshot';

import currencyImg from './images/screenshots/Cc_Playground_Currencies_Page.png';
import perksImg from './images/screenshots/Cc_Playground_Perks_Page.png';
import playgroundImg from './images/screenshots/Cc_Playground_Playground_Page.png';
import transactionsImg from './images/screenshots/Cc_Playground_Transactions_Page.png';
import siGameHeaderImg from './images/screenshots/SI_Game_Header.png';

export default function Work() {
  return (
    <>
      <a href="https://www.linkedin.com/in/danieldepaolo/">My LinkedIn Profile</a>
      <h2>Professional</h2>
      <h3>Sports Illustrated</h3>
      <Screenshot
        image={siGameHeaderImg}
        caption={
          <>
            Game header in post-game state. <a href="https://www.si.com/nba/game/dallas-mavericks-vs-indiana-pacers-march-27-2023">Page in production</a>.
          </>}
      />

      <h2>Personal Projects</h2>
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
      <div className="photoGrid">
        <Screenshot image={playgroundImg} caption="The primary view where the user can select cards and find out the value they'd get with that combination." />
        <Screenshot image={transactionsImg} caption="Table showing the user's transactions." />
        <Screenshot image={currencyImg} caption="Reward card currencies list view. They are stored in the backend db." />
        <Screenshot image={perksImg} caption="Reward card perks list view." />
      </div>
    </>
  );
}
