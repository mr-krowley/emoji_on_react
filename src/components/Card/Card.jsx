export function Card({ symbol, title, keywords }) {
  return (
    <>
      <div className="item">
        <p>{symbol}</p>
        <p>{title} </p>
        <p>{keywords}</p>
      </div>
    </>
  );
}
