
import './App.css';
import StartApp from './components/metamask';
import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();






function App() {
  
if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  StartApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}



  return (
    <div className="App">

      
      



    </div>
  );
}

export default App;
