import { useState, useEffect } from "react";


function AdminPage({facade}) {
    const init = {id:"",link1:"",link2:""};
    const [coinsCredentials, setCoinsCredentials] = useState(init);
    
  
    const performCoins = (evt) => {
      evt.preventDefault();
      facade.postData(coinsCredentials.id, coinsCredentials.link1, coinsCredentials.link2);
      console.log(coinsCredentials.id, coinsCredentials.link1, coinsCredentials.link2);
    };
    const onChange = (evt) => {
      setCoinsCredentials({
        ...coinsCredentials,
        [evt.target.id]: evt.target.value,
      })
      ;
    };
    return ( <div>
        <div>
      <div>
        <div/>
        <div>
          <h2>Add a coin</h2>
          <form onChange={onChange}>
            <div>
              <input
                type="text"
                placeholder="Fx. bitcoin"
                name="id"
                id="id"
              />
              <p>Kraken: "http://Kraken.com/api/xxx/"<input
                type="text"
                placeholder="BTCUSD"
                name="link"
                id="link1"
              />/ticker</p>
               <p>Yobit: "http://yobit.com/api/xxx/"<input
                type="text"
                placeholder="btc_usdt"
                name="link"
                id="link2"
              />/ticker</p>
              <div>
                  
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  onClick={performCoins}
                >
                  Add coin
                </button>
              </div>
            </div>
          </form>
          <div/>
        </div>
      </div>
    </div>
    </div> );
}

export default AdminPage;