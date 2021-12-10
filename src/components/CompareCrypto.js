import facade from "../apiFacade";
import { useState, useEffect } from "react";

function CompareCrypto() {
  const [compareCrypto, setCompareCrypto] = useState([
    { crypto: "", exchange: "", price: "" },
  ]);

  const [topMovers, setTopMovers] = useState([
    { name: "", change: ""},
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

  const updates1 = (data) => {
    const topMoversList = [];
    data.map((i) => {
      topMoversList.push({
        name: i.name,
        change: i.change,
      });
    });
    setTopMovers(topMoversList);
  };

  useEffect(() => {
    facade.fetchData("crypto/cryptoList", updates);
  }, [facade]);

  useEffect(() => {
    facade.fetchData("crypto/topmovers", updates1);
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

  function tableRows1() {
    return topMovers.map((i) => {
      return (
        <tr>
          <td>{i.name}</td>
          <td>{i.change}%</td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <h2>Welcome to our crypto comparison site :)</h2>
      <div className="row row-cols-2">
        
      <h3>Top Movers</h3>
      <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>{tableRows1()}</tbody>
        </table>
        <h3>Crypto prices from different exchanges</h3>
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
