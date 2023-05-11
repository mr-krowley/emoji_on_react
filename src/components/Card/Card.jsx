import s from './Card.module.css'

//компонент рисующий самму карточку
export function Card({ symbol, title, keywords }) {
  return (
    <>
      <div className="Card">
        <p>{symbol}</p>
        <p>{title} </p>
        <p>{keywords}</p>
      </div>
    </>
  );
}
