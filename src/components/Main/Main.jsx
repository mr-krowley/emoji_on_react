import style from "./Main.module.css";

import { Card } from "../Card/Card.module";


//компонент отоброжения карточек в майне
export const Main = ({ value, filterData }) => {
  return (
    <main>
      {filterData.map((elem) => (
        <Card key={elem.title} {...elem} />
      ))}
    </main>
  );
};
