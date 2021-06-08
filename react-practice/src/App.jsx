import React, { useEffect, useRef, useState } from "react";
const App = () => {

  const [name, setName] = useState("");
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.value = "hello";
  }

  return (
    <>
      <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={focus}>Focus</button>
    </>
  )




}

export default App;