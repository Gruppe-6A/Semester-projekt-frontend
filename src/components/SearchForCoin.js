import { useState, useEffect } from "react";
import facade from "../apiFacade";

function SearchForCoin({ facade }) {
  const [cryptoList, setCryptoList] = useState([
    {
      crypto: "",
    },
  ]);
  const [searchShow, setSearchShow] = useState(false);
  const [searchCrypto, setSearchCrypto] = useState("");
  const [krakenCrypto, setKrakenCrypto] = useState({
    crypto: "",
    exchange: "",
    price: "",
  });

  const [yobitCrypto, setYobitCrypto] = useState({
    crypto: "",
    exchange: "",
    price: "",
  });

  const updates1 = (data) => {
    const compareCryptoList = [];
    data.map((i) => {
      compareCryptoList.push({
        crypto: i.name,
      });
    });
    setCryptoList(compareCryptoList);
    console.log(cryptoList);
  };

  useEffect(() => {
    facade.fetchData("crypto/cryptoList", updates1);
  }, [facade]);

  const updates = (data) => {
    setYobitCrypto({
      crypto: data[0].name,
      exchange: data[0].exchange,
      price: data[0].price,
    });

    setKrakenCrypto({
      crypto: data[1].name,
      exchange: data[1].exchange,
      price: data[1].price,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    {
      {
        cryptoList
          .filter((name) => name.crypto.includes(searchCrypto))
          .map((filteredName) =>
            facade.fetchData(
              "crypto/cryptoList/" + filteredName.crypto,
              updates
            )
          );
      }
    }
  };

  const handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    setSearchCrypto(value);
    console.log(searchCrypto);
    if (value === searchCrypto) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function showDiv() {
    if (searchShow) {
      return (
        <div>
          <h3 onClick>
            Prisen på {krakenCrypto.crypto} er ${krakenCrypto.price}, ifølge{" "}
            {krakenCrypto.exchange}
          </h3>
          <h3>
            Prisen på {yobitCrypto.crypto} er ${yobitCrypto.price}, ifølge{" "}
            {yobitCrypto.exchange}
          </h3>
        </div>
      );
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input
          onChange={handleInput}
          type="text"
          placeholder="Fx. bitcoin"
          id="searchBox"
        />
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
      <div>{showDiv()}</div>
    </div>
  );
}

export default SearchForCoin;
