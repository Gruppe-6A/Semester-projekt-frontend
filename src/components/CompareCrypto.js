import facade from "../apiFacade";
import { useState, useEffect } from "react";

function CompareCrypto() {
  const [compareCrypto, setCompareCrypto] = useState([
    { crypto: "", exchange: "", price: "" },
  ]);

  const updates = (data) => {
    const compareCryptoList = [];
    data.map((i) => {
      compareCryptoList.push({
        crypto: i.name,
        price: i.price,
        exchange: i.exchange,
      });
    });
    setCompareCrypto(compareCryptoList);
  };

  useEffect(() => {
    facade.fetchData("crypto/cryptoList", updates);
  }, [facade]);

  function tableRows() {
    return compareCrypto.map((i) => {
      const str = i.exchange;
      const str2 = str.charAt(0).toUpperCase() + str.slice(1);
      const cryptoBigSmall = i.crypto;
      const cryptoBig =
        cryptoBigSmall.charAt(0).toUpperCase() + cryptoBigSmall.slice(1);
      return (
        <tr>
          <td>{cryptoBig}</td>
          <td>${i.price}</td>
          <td>{str2}</td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <h2>Welcome to our crypto comparison site :)</h2>
      <div className="row row-cols-2">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Crypto</th>
              <th scope="col">Price</th>
              <th scope="col">Exchange</th>
            </tr>
          </thead>
          <tbody>{tableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CompareCrypto;
