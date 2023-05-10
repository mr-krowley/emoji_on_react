
import { useEffect, useState } from 'react';
import './App.css';

import { Card } from './components/Card/Card';
import { Search } from './components/Search/Search';
import { Main } from './components/Main/Main';

function App() {

  const [data, setData] = useState([]); //храним данные в переменной\состояние
  // достаем данные с сервера
  useEffect(() => {
    fetch("https://emoji.ymatuhin.workers.dev/")
      .then(result => result.json())
      .then(data => setData(data))
      .catch(error => alert(error));
  },[])//пустой масив что бы функция вызвалась 1 раз



  const [value, setValue] = useState(''); // состояние для поиска 
  //функция возращает что записано в Search
  const searchCard = (evt) => {
    setValue(evt.target.value);
  }


console.log(data);
console.log(value);





  return (
    <>
      <Search value={value} inputHandler={searchCard}/>
      <Main data={data} value={value} />
      
    </>
  );
}

export default App;
