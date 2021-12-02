import { useState, useEffect } from "react";
import facade from "../apiFacade";
import LoggedIn from "./LoggedIn";


function Portfolio() {
  const userName = facade.getUsername();
  const init = {username: userName, cryptoid:"",count:""};
    const [UCCredentials, setUCCredentials] = useState(init);
    const [Portfolio, setPortfolio] = useState([{crypto: "", amount: ""}]);
    console.log(userName)

    /* useEffect(() => {
      facade.postUserCrypto(UCCredentials.username, UCCredentials.cryptoid, UCCredentials.amount);
    }, [facade]); */

    const updates = (data) => {
      const portfoliolist = []
      data.map(i => { console.log(i.count);portfoliolist.push({crypto: i.cryptoValutaDTO.id, amount: i.count})})
      setPortfolio(portfoliolist)
      console.log(Portfolio)      
    };

     const performUC = (evt) => {
      evt.preventDefault();
      facade.postUserCrypto(UCCredentials.username,UCCredentials.cryptoid, UCCredentials.count);
      console.log(UCCredentials.username,UCCredentials.cryptoid, UCCredentials.count);
    }; 
    const onChange = (evt) => {
      setUCCredentials({
        ...UCCredentials,
        [evt.target.id]: evt.target.value,
      })
      ;
    };

    function tableRows (){
     return Portfolio.map(i => {return(<tr>
      <td>{i.crypto}</td>
      <td>{i.amount}</td>
   </tr>)})
    }

    useEffect(() => {
      facade.fetchData("crypto/portfolio/" + userName, updates);
    }, [facade]);

  return ( <div>
    <div>
  <div>
    <div/>
    <div>
      <h2>Add a coin to Portfolio</h2>
      <form onChange={onChange}>
        <div>
          <input
            type="text"
            placeholder="cryptoid..."
            name="id"
            id="cryptoid"
          />
          <br/>
          <br/>
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
      <div/>
      <h3>Portfolio</h3>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Cryptovaluta</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
   {tableRows()}
   
  </tbody>
</table>
    </div>
  </div>
</div>
</div> );
}

export default Portfolio;
