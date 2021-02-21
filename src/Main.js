import React,{ useState, useEffect, useReducer} from 'react';
import About from './About';
import Home from './Home';
import Market1 from './Market1';
import MyAssets from './MyAssets';
import { Route ,Routes,Link} from 'react-router-dom';
import bgImage from './images/btc.JPG';
import logo from './images/logo.png';

const Web3 = require('web3');
const rpcURL = "https://bsc-dataseed1.binance.org:443";
let web3 = new Web3(rpcURL);



function Main(){
  const [connect, setConnect] = useState(false);
  let acc;
 const buttonClick = async ()=>{
          // Modern dapp browsers...
      if (window.ethereum) {
        Main.web3Provider = window.ethereum;
        try {
          // Request account access
          await window.ethereum.enable();
        } catch (error) {
          // User denied account access...
          console.error("User denied account access")
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        Main.web3Provider = window.web3.currentProvider;
      }
      // If no injected web3 instance is detected, fall back to Ganache
      else {
        Main.web3Provider = new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org:443');
      }
      web3 = new Web3(Main.web3Provider);
      setConnect(true)
      const accounts = await web3.eth.getAccounts() 
      acc= accounts
      console.log(accounts)
      document.getElementById("aa").innerHTML = accounts
  }
   

    
    return(

        <div>
                  <div className="row" style={{backgroundColor:"#260625"}}>
              <div className="col text-center">
                {
                  
                  connect == true? <div style={{color:'white'}} > Connected &nbsp;&nbsp; <span id="aa" style={{color:'white'}}></span></div>:
              <button type="button" class="btn btn-danger" onClick={()=>{buttonClick()}}>Connect to Wallet</button>
                }            
            
              </div>
            </div>   
         <div>
        <nav className="navbar navbar-expand-lg navbar" style={{padding:'30px', backgroundColor:'#731271'}}>
        <a className="navbar-brand" href="#"><img src={logo} alt="LOGO" width='80px' style={{marginLeft:'60px', marginRight:'20px'}}/><span style={{color:'white', fontWeight:'bold',fontFamily:'Reggae One, cursive'}}>CRYPTO LOLLY</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <br/>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" style={{  color:"white" ,fontWeight:'bold', border:'4px solid white',marginRight:'30px',width:'130px', textAlign:'center'}}>
              <Link exact  to="/" style={{ color:"white"}} > <i class="fas fa-ice-cream"></i> Create Lolly  <span class="sr-only">(current)</span></Link>
            </li>
            <br/>
  
            <li className="nav-item" style={{color:"white" ,fontWeight:'bold', border:'4px solid white',marginRight:'30px',width:'130px', textAlign:'center'}}>
            <Link to="market" style={{  color:"white"}} ><i class="fas fa-chart-bar"></i> Market</Link>
            </li>
            <br/>

             <li className="nav-item" style={{color:"white" ,fontWeight:'bold', border:'4px solid white',marginRight:'30px',width:'130px', textAlign:'center'}}>
            <Link to="assets" style={{  color:"white"}} ><i class="fab fa-ethereum"></i> My Asstes</Link>
            </li>  
            
          </ul>
        </div>
      </nav>
      </div>
    
      <div style={{backgroundImage: `url(${bgImage})`, backgroundAttachment:'fixed',	overflowX: 'hidden'}}> 

          <Routes>  
          <Route path="/" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="market" element={<Market1/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="assets" element={<MyAssets/>}></Route>
         
        </Routes>
    
      </div>
        </div>

    )
}

export default Main;