import s from './Card.module.css'

//компонент рисующий самму карточку
export function Card({ symbol, title, keywords }) {
  return (
    <>
      <div className={s.emoji_card}>
        <p className={s.emoji}>{symbol}</p>
        <p className={s.emoji_name}>{title} </p>
        <p className={s.emoji_keyworsds}>{keywords}</p>
      </div>
    </>
  );
}
