



function StartApp(provider) {
  // If the provider returned by detectEthereumProvider isn't the same as
  // window.ethereum, something is overwriting it – perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
}

export default StartApp;