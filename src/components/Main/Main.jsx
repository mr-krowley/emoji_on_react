import style from "./Main.module.css";

import { Card } from "../Card/Card";

//компонент отоброжения карточек в майне
export const Main = ({ filterData }) => {
  return (
    <main>
      <div className={style.container}>
          {filterData.map((elem) => (
            <Card key={elem.title} {...elem} />
          ))}
      </div>
    </main>
  );
};
