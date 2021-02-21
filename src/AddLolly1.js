import React,{ useState } from 'react';
import { useStore } from './context/GlobalState';
import { addLolly } from './store/asyncActions';
import Loader from './images/loader.gif';

const AddLolly1  = () =>{
    const [{contract, accounts}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
    const [transactionError , setTransactionError] = useState("");
    const [title,setTitle] = React.useState({color1:"#D52358",color2:"#E95946",color3:"#DEAA43"});

  const colours = {
    colorOne : title.color1,
    colorTwo : title.color2,
    colorThree : title.color3 
  }
  
    const handleSubmit = async(e)=>{
        e.preventDefault();
  
        setTransactionSuccessful(true);
        setTransactionError("");
        try {
            setTransactionInprocess(true)
            const newTransaction = {
              colorOne : colours.colorOne,
              colorTwo : colours.colorTwo,
              colorThree: colours.colorThree
            }
            await addLolly(contract, accounts,newTransaction, dispatch);
            setTransactionInprocess(false);
            setTransactionSuccessful(true);
        }catch (error){
            console.log("error trax = ",error);
            setTransactionInprocess(false);
            setTransactionSuccessful(false);
            setTransactionError(error.message);
        }
        //setTitle('');
  }

  function changeTop(e) {
    const overlay = document.getElementById("lollyTop");  	  
    var picker = e.target.value;
     overlay.style.fill = picker;
  }
  
  function changeMiddle(e) {
    const overlay = document.getElementById("lollyMiddle");  	  
    var picker = e.target.value;
     overlay.style.fill = picker;
  }
  
  function changeBottom(e) {
    const overlay = document.getElementById("lollyBottom");  	  
     var picker = e.target.value;
     overlay.style.fill = picker;
  }

  

  return(
    <center>
    <div className="conatiner">
    <br/><br/>
    <div className="row justify-content-center">
    <div className="col-12" style={{ backgroundColor: '#731271', height:'100px', width:'100%', color:'white', fontFamily: 'Reggae One, cursive'}}>                  
    <div style={{marginTop:'2%'}}>        
        <h1><b>CREATE LOLLY</b></h1>
        </div>
   </div>
   
     <div className="col-4"> 
     <br/><br/> 
     <svg
     className="lollipop"
     width="163px"
     height="431px"
     viewBox="0 0 163 431"
     version="1.1"
     xmlns="http://www.w3.org/2000/svg"
 
   >
     <defs>
       <path
         d="M50.5845697,1.80919445e-14 L112.757384,3.19744231e-14 C129.058949,2.89798741e-14 142.575449,12.6254516 143.685437,28.8891833 L162.453983,303.889183 C163.619754,320.970275 150.717838,335.762281 133.636746,336.928053 C132.934162,336.976004 132.230148,337 131.52593,337 L31,337 C13.8791728,337 -1.56668718e-14,323.120827 -1.77635684e-14,306 C-1.78535483e-14,305.265258 0.0261215736,304.530748 0.0783152276,303.797862 L19.662885,28.7978622 C20.8183904,12.5726406 34.3182545,1.0093501e-14 50.5845697,7.10542736e-15 Z"
         id="path-1"
       ></path>
       <path
         d="M99,2.88483832e-14 L113,3.19744231e-14 C129.301566,2.89798741e-14 142.818065,12.6254516 143.928053,28.8891833 L162.696599,303.889183 C163.862371,320.970275 150.960455,335.762281 133.879363,336.928053 C133.176779,336.976004 132.472765,337 131.768546,337 L117.768546,337 C118.472765,337 119.176779,336.976004 119.879363,336.928053 C136.960455,335.762281 149.862371,320.970275 148.696599,303.889183 L129.928053,28.8891833 C128.818065,12.6254516 115.301566,2.89798741e-14 99,3.19744231e-14 Z"
         id="path-3"
       ></path>
     </defs>
     <g
       id="Page-2"
       stroke="none"
       strokeWidth="1"
       fill="none"
       fillRule="evenodd"
     >
       
       <g id="Lolly">
         <g
           id="handle"
           transform="translate(65.000000, 137.000000)"
           fillRule="nonzero"
         >
           <rect
             id="Rectangle"
             fill="#C06C50"
             x="0"
             y="2"
             width="32"
             height="292"
             rx="16"
           ></rect>
           <rect
             id="Rectangle"
             fill="#E3A28D"
             x="0"
             y="0"
             width="32"
             height="292"
             rx="16"
           ></rect>
           <polygon
             id="Rectangle-Copy-3"
             fillOpacity="0.181584013"
             fill="#E3A28D"
             points="0 200 32 200 32 218 0 223.801515"
           ></polygon>
         </g>
         <mask id="mask-2" fill="white">
           <use href="#path-1"></use>
         </mask>
         <use
           id="lollyBottom"
           fill="#DEAA43"
           fillRule="nonzero"
           href="#path-1"
         ></use>
         <rect
           id="lollyTop"
           fill="#D52358"
           fillRule="nonzero"
           mask="url(#mask-2)"
           x="-25"
           y="-9"
           width="224"
           height="134"
         ></rect>
         <rect
           id="lollyMiddle"
           fill="#E95946"
           fillRule="nonzero"
           mask="url(#mask-2)"
           x="-29"
           y="113"
           width="224"
           height="111"
         ></rect>
         <path
           d="M79.7697726,3.19744231e-14 C63.468207,2.89798741e-14 49.9517074,12.6254516 48.8417198,28.8891833 L30.0731738,303.889183 C28.9074019,320.970275 41.8093181,335.762281 58.89041,336.928053 C59.5929941,336.976004 60.2970081,337 61.0012266,337 L17,337 C-0.120827245,337 -14,323.120827 -14,306 C-14,305.265258 -13.9738784,304.530748 -13.9216848,303.797862 L5.66288496,28.7978622 C6.81839036,12.5726406 20.3182545,1.0093501e-14 36.5845697,7.10542736e-15 L79.7697726,2.77347066e-14 Z"
           id="shade"
           fill="#67000D"
           fillRule="nonzero"
           opacity="0.0961449033"
           mask="url(#mask-2)"
         ></path>
         <mask id="mask-4" fill="white">
           <use href="#path-3"></use>
         </mask>
         <use
           id="shine"
           fill="#FFFFFF"
           fillRule="nonzero"
           opacity="0.113420759"
           href="#path-3"
         ></use>
       
           <rect
             id="Rectangle"
             x="20"
             y="4.26325641e-14"
             width="4"
             height="4"
             rx="2"
           ></rect>
           <rect
             id="Rectangle-Copy"
             x="0"
             y="0"
             width="18"
             height="4"
             rx="2"
           ></rect>
         </g>
        
         <path
           d="M97,337 L65,337 L65,155 L65,153 C65,144.163444 72.163444,137 81,137 C89.836556,137 97,144.163444 97,153 L97,155 L97,337 Z"
           id="frozenhandle"
           fill=""
           fillRule="nonzero"
           opacity="0.0615234375"
         ></path>
       </g>
     
   </svg></div>
 
 
    
    <div className="col-4">
    <br/><br/> <br/><br/>
      <input type="color" value={(title.color1 == "")?("#D52358"):(title.color1)} style={{width:'80px',height:'40px'}} onChange={(e)=>setTitle({...title,color1:e.target.value} , changeTop(e))}></input>
      <br/><br/><br/><br/>
      <input type="color" value={(title.color2 == "")?("#E95946"):(title.color2)} style={{width:'80px',height:'40px'}} onChange={(e)=>setTitle({...title,color2:e.target.value},  changeMiddle(e))}></input>
      <br/><br/><br/><br/>
      <input type="color" value={(title.color3 == "")?("#DEAA43"):(title.color3)} style={{width:'80px',height:'40px'}} onChange={(e)=>setTitle({...title,color3:e.target.value}, changeBottom(e))}></input>
      </div>
      </div>

      <div className="row">
       
      <div  className="col-12">
      <br/><br/> 
      <input type="submit" class="btn" style={{ backgroundColor:"#731271", color:'#FFF', width:'360px' ,height:'75px', border:'10px solid white', borderRadius:'10px', fontWeight:'bold',fontFamily: 'Reggae One, cursive'}}  value="Create and Freeze Lolly" onClick={handleSubmit}>

      </input>
        {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />}
        {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}
      
      </div>
      </div>
    
  
    
    </div>
    </center>
  )

}
export default AddLolly1;