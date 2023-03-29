const seattleImages = Object.values(import.meta.glob("./images/photos/Seattle/*", { eager: true, as: 'url' }));
import Screenshot from "./Screenshot";

export default function Photography() {
  return (
    <>
      <h2>Seattle Photos</h2>
      <div className="photoGrid">
        {seattleImages.map((path) => (
          <Screenshot key={path} image={path} />
        ))}
      </div>
    </>
  );
}
