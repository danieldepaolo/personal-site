import danielImage from '../src/images/photos/20230423_121929.jpg';

export default function About() {
  return (
    <div>
      <img src={danielImage} width={400} alt="Daniel DePaolo face" />
      <p>This is stuff about me!</p>
    </div>
  );
}
