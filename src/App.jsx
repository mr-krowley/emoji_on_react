
import { useEffect, useState } from 'react';

import { Search } from './components/Search/Search';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

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
  // отфильтрованные карточки по поиску записываем в новвую переменную
  const filterData = data.filter((elem) => elem.title.includes(value));

  console.log(data);
  console.log(value);
  console.log(filterData);
 
  
  return (
    <>
      <Header value={value} inputHandler={searchCard} />
      <Main filterData={filterData} />
      <Footer/>
    </>
  );
}

export default App;
