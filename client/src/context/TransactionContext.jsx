import React, { useEffect, useState } from "react";

import { CONTRACT_ADDRESS, ABICODE } from "../assets/constants";


const ethers = require("ethers")


// we are exporting it To ot will be used to read data
export const TransactionContext = React.createContext();
// de structreing
const { ethereum } = window;

const getWalletConnection = () => {
  const provider = new ethers.Providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transationContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    ABICODE,
    signer
  );

  console.log({
    provider,
    signer,
    TransactionContext
  });
};


// will provide access to data
export const TransactionProvider = ({ childern }) => {
  return (
    <TransactionContext.Provider value={{ value: "Test Value-----------" }}>
      {childern}
    </TransactionContext.Provider>
  );
};
