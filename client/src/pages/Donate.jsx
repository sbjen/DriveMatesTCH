import { Button } from "react-bootstrap";
import io from "socket.io-client";
import { useEffect, useState } from "react";
// running socket on 3001 port and frontend is runnin on 3000 port
// use it emit and listen events
const socket = io.connect("http://localhost:3001");



const Donate = () => {
   const [message, setMessage] = useState("");
// send data 
    const sendMessage = () => {
        socket.emit("send_data",{message: message});
    }


// listen data
useEffect(()=>{
    socket.on("recieve_message_from_server",(data) => {alert(data.message);  })
}, [socket])

  return(
    <div>
        <h1>HI Donate me</h1>
        <input placeholder="Message"  onChange={ (event) => { setMessage(event.target.value); }}/>
        <button onClick={sendMessage}>click me</button>

    </div>

  );
  
};

export default Donate;
