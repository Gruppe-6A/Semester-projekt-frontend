import { useState, useEffect } from "react";
import facade from "../apiFacade";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


function Portfolio() {
  const userName = facade.getUsername();
  const init = { username: userName, cryptoid: "", count: "" };
  const [UCCredentials, setUCCredentials] = useState(init);
  const [Portfolio, setPortfolio] = useState([{ crypto: "", amount: "" }]);
  const [cryptoName, setCryptoName] = useState([{ crypto: "" }]);
  const [value, setValue] = useState("");

  const updates = (data) => {
    const portfoliolist = [];
    data.map((i) => {
      console.log(i.count);
      portfoliolist.push({ crypto: i.cryptoValutaDTO.id, amount: i.count });
    });
    setPortfolio(portfoliolist);
  };

  const updatesCryptoName = (data) => {
    const cryptoNameList = [];
    data.map((i) => {
      cryptoNameList.push({ crypto: i.name });
    });
    setCryptoName(cryptoNameList);
    console.log(cryptoName);
  };

  const performUC = (evt) => {
    evt.preventDefault();
    facade.postUserCrypto(UCCredentials.username, value, UCCredentials.count);
    console.log(UCCredentials.username, value, UCCredentials.count);
  };
  const onChange = (evt) => {
    setUCCredentials({
      ...UCCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  function tableRows() {
    return Portfolio.map((i) => {
      return (
        <tr>
          <td>{i.crypto}</td>
          <td>{i.amount}</td>
        </tr>
      );
    });
  }

  useEffect(() => {
    facade.fetchData("crypto/portfolio/" + userName, updates);
  }, [facade]);

  function listOfCryptoNames() {
    return cryptoName.map((i) => {
      return <Dropdown.Item eventKey={i.crypto}>{i.crypto}</Dropdown.Item>;
    });
  }

  useEffect(() => {
    facade.fetchData("crypto/cryptoList", updatesCryptoName);
  }, [facade]);

  const handleSelect = (e) => {
    setValue(e);
    console.log(value);
  };

  return (
    <div className="container">
      <div className="row row-cols">
        <h2>Add a coin to Portfolio</h2>
        <form onChange={onChange}>
          <div>
            {/* Skal fakisk bruge 'select' ikke DropdownButton */}
            <DropdownButton
              className="mb-2"
              title="Choose coin"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              {listOfCryptoNames()}
            </DropdownButton>
            <p>{value}</p>
            <input
              type="text"
              placeholder="amount..."
              name="count"
              id="count"
            />
            <div>
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={performUC}
              >
                Add coin
              </button>
            </div>
          </div>
        </form>
        <div />
        <h3>Portfolio</h3>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Cryptovaluta</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>{tableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Portfolio;
