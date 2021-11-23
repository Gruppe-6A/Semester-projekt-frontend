import { useEffect, useState } from "react";

export default function LoggedIn({ facade }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [errorMsg, setErrorMsg] = useState("All is good");
  const updates = (data) => {
    setDataFromServer(data.msg);
  };

  const updatesAdmin = (data) => {
    setDataFromServer(data.msg);
  };

  useEffect(() => {
    facade.fetchLoggedIn("user", updates).catch((err) => {
      if (err.status) {
        err.fullError.then((e) =>
          console.log(setErrorMsg(e.code + ": " + e.message))
        );
      } else {
        console.log("Network error");
      }
    });

    facade.fetchLoggedIn("admin", updatesAdmin).catch((err) => {
      if (err.status) {
        err.fullError.then((e) =>
          console.log(setErrorMsg(e.code + ": " + e.message))
        );
      } else {
        console.log("Network error");
      }
    });
  }, [facade]);
  if (updatesAdmin !== null) {
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{dataFromServer}</h3>
      </div>
    );
  }
}
