import style from './Header.module.css';
import { Search } from '../Search/Search';


export const Header = ({value, inputHandler  }) => {
  return (
    <header className={style.Header}>
      <h1 className={style.h1}>Emoji Finder</h1>
      <p className={style.copyright}>Find emoji by keywords</p>
      <form>
        <Search value={value} inputHandler={inputHandler} />
      </form>
    </header>
  );
}
