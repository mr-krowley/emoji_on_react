import style from "./Main.module.css";
import { Card } from "../Card/Card";


//компонент отоброжения карточек в майне
export const Main = ({  filterData ,firstIndex,lastIndex}) => {
  return (
    <main>
      <div className={style.container}>
          {filterData.slice(firstIndex,lastIndex).map((elem) => (
            <Card key={elem.title} {...elem} />
          ))}
      </div>
    </main>
  );
};

