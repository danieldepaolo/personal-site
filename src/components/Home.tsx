import danielImage from '../images/photos/20230423_121929.jpg';

export default function Home() {
  return (
    <div>
      <img src={danielImage} width={400} alt="Daniel DePaolo face" />
      <p>This is stuff about me!</p>
    </div>
  );
}
