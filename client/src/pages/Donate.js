// redux
import { useEffect, useState } from "react";
import {TransactionContext} from "../context/TransactionContext"
import React, { useContext } from 'react';
// running socket on 3001 port and frontend is runnin on 3000 port
// use it emit and listen events
// const socket = io.connect("http://localhost:3001");



const Donate = () => {
// 
//   const {value} = useContext(TransactionContext);
//   console.log(value)

  const [message, setMessage] = useState("");
  // send data


  // listen da

  return (
    <div>
      <button >Connect To Wallet</button>
      <h1 id="inp">"give your address "</h1>
      <input
        placeholder="Message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button 
      // onClick={sendMessage}
      >click me</button>
    </div>
  );
};

export default Donate;
