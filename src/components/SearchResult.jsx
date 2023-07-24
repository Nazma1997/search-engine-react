import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {!result && <p>There is no result</p>}
      {result}

    
    </div>
  );
};
