import { useEffect, useState } from "react";

export default function LoggedIn({ facade }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [errorMsg, setErrorMsg] = useState("All is good");

  useEffect(() => {
    facade
      .fetchLoggedIn()
      .then((data) => setDataFromServer(data.msg))
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) =>
            console.log(setErrorMsg(e.code + ": " + e.message))
          );
        } else {
          console.log("Network error");
        }
      });
  }, [facade]);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <p>{errorMsg}</p>
    </div>
  );
}
