// redux
import { connectWallet } from "../redux/index";
import { Connect, connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useSelector } from "react-redux";

import Web3 from "web3";
import { ethers } from "ethers";
// import {ether} from 'ethers'
import { Button } from "react-bootstrap";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import CaroiselTag from "../components/clickables/CaroiselTag";
// running socket on 3001 port and frontend is runnin on 3000 port
// use it emit and listen events
const socket = io.connect("http://localhost:3001");
const { ethereum } = window;


const Donate = (props) => {
  const walletAddress = useSelector((state) => state.walletAddress);

  const [message, setMessage] = useState("");
  // send data
  const sendMessage = () => {
    socket.emit("send_data", { message: message });
  };

  // listen data
  useEffect(() => {
    socket.on("recieve_message_from_server", (data) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <div>
      <button >Connect To Wallet</button>
      <h1 id="inp">{walletAddress}</h1>
      <input
        placeholder="Message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>click me</button>
    </div>
  );
};

export default Donate;
