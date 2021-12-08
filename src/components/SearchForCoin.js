import { useState, useEffect } from "react";
import facade from "../apiFacade";

function SearchForCoin({ facade }) {
  const initialState = { searchBox: "" };
  const [searchCrypto, setSearchCrypto] = useState(initialState);

  const updates = (data) => ({
    crypto: data.name,
    price: data.price,
    exchange: data.exchange,
  });

  const handleSubmit = (evt) => {
    alert(JSON.stringify(searchCrypto));
  };

  const handleInput = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setSearchCrypto(value);
    console.log(searchCrypto);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input type="text" placeholder="Fx. bitcoin" id="searchBox" />
        <div>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary mb-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForCoin;
