


import { ethers } from "ethers";
const { ethereum } = window;


async function connectToWallet() {
    try {
      if (window.ethereum) {
        var web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        var accounts = await web3.eth.getAccounts();
        var account = accounts[0];
        document.getElementById("inp").textContent = account;
      }
    } catch(error) {console.log(error); }
  }

  export {connectToWallet};
  