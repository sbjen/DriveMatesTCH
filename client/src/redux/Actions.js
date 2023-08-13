import { CONNECT_WALLET } from "./ActionTypes";

// create action creater which is object with type property

export const connectWallet = () => {
  return {
    type: CONNECT_WALLET,
  };
};
