import facade from "../apiFacade";
import { useState, useEffect } from "react";


function Exercise3({facade}) {
  const [joke, setJoke] = useState({ joke: '', ref: ''});
  const updates = (data) => {
    setJoke({joke: data.value, ref: data.url});
  }

  useEffect(() => { 
    facade.fetchData('jokes', updates); 


  }, [facade])

  return(
    <>
    <h1> 
      "{joke.joke}"
    </h1>

    </>
  )
}

export default Exercise3;
