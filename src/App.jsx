
import { useEffect, useState } from "react";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState([]); //храним данные в переменной\состояние
  // достаем данные с сервера
  useEffect(() => {
    fetch("https://emoji.ymatuhin.workers.dev/")
      .then((result) => result.json())
      .then((data) => setData(getUnicData(data)))
      .catch((error) => alert(error));
  }, []); //пустой масив что бы функция вызвалась 1 раз

  // функция  переберающая входящие данные и удаляет оставляя уникальные keywords
  function getUnicData(data) {
    const unicData = [];
    data.forEach((card) => {
      unicData.push({
        ...card,
        keywords: [...new Set(card.keywords.split(" "))].join(" "),
      });
    });
    return unicData;
  }

  const [value, setValue] = useState(""); // состояние для поиска
  //функция возращает что записано в Search
  const searchCard = (evt) => {
    setValue(evt.target.value);
  };
  const newValue = value.trim().toLowerCase();
  // отфильтрованные карточки по поиску записываем в новвую переменную
  const filterData = data.filter(
    (elem) =>
      elem.title.trim().toLowerCase().includes(newValue) ||
      elem.keywords.trim().toLowerCase().includes(newValue)
  );

  // состояние количество на странице
  const [perPage, setPerPage] = useState(12);
  //состояние текущей страницы
  const [currenPage, setCurrentPage] = useState(1);

  //вычисляем количество страниц
  let pages = Math.ceil(filterData.length / perPage);
  //находим индекс последней карточки на странице
  let lastIndex = currenPage * perPage;
  //находим индекс первой карточки на странице
  let firstIndex = lastIndex - perPage;








  return (
    <>
      <Header value={value} inputHandler={searchCard} />
      <Main
        filterData={filterData}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
      />
      <Footer
        setPerPage={setPerPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
