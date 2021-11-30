import { useState, useEffect } from "react";
import facade from "../apiFacade";

function CompareCrypto({ facade }) {
    const [Krakencrypto, setKrakenCrypto] = useState({ crypto: "", exchange: "", price: ""});
    const [Krakencrypto1, setKrakenCrypto1] = useState({ crypto: "", exchange: "", price: ""});
    const [yobitcrypto, setYobitCrypto] = useState({ crypto: "", exchange: "", price: ""});
    const [yobitcrypto1, setYobitCrypto1] = useState({ crypto: "", exchange: "", price: ""});
    
    const updates = (data) => {
    setKrakenCrypto({crypto: data[2].name, exchange: data[2].exchange, price: data[2].price});
    setKrakenCrypto1({crypto: data[3].name, exchange: data[3].exchange, price: data[3].price});
    setYobitCrypto({crypto: data[0].name, exchange: data[0].exchange, price: data[0].price});
    setYobitCrypto1({crypto: data[1].name, exchange: data[1].exchange, price: data[1].price});
  };

  useEffect(() => {
    facade.fetchData("crypto/momsasødepigenfrabyen", updates);
  }, [facade]);
  
  return (
      <>
        <h3>
            Prisen på {Krakencrypto.crypto} er {Krakencrypto.price}, i følge {Krakencrypto.exchange}, <br/>
            Prisen på {Krakencrypto1.crypto} er {Krakencrypto1.price}, i følge {Krakencrypto1.exchange}, <br/> 
            Prisen på {yobitcrypto.crypto} er {yobitcrypto.price}, i følge {yobitcrypto.exchange}, <br/>
            Prisen på {yobitcrypto1.crypto} er {yobitcrypto1.price}, i følge {yobitcrypto1.exchange}, <br/>
            
        </h3>

      </>
  );

}
export default CompareCrypto;