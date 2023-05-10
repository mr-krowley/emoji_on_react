export const Search = ({ value, inputHandler }) => {
  return (
    <input className="Search" value={value} onChange={inputHandler} type="text" />
  );
};
