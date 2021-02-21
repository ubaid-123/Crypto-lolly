import { setupWeb3, setupContract, addEthereumAccounts, web3LoadingError } from "./actions";
import Web3 from "web3";
import { LOLLY_ADDRESS, LOLLY_ABI } from '../contract/LollyContract';

export const loadBlockchain = async(dispatch) =>{
    try {
        console.log("Web3 = ",Web3);
        console.log("Web3.givenProvider = ",Web3.givenProvider);

        if(Web3.givenProvider){
        
            
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
           
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(LOLLY_ABI,LOLLY_ADDRESS);
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ",contract);
            console.log("contract.methods = ",contract.methods);
           
        /*    let transactionCount = await contract.methods.transactionCount().call();
            console.log("transaction count = ",transactionCount);
            
            for(var i=0;i<transactionCount;i++){
                const {amount,transactionDescription,transactionOwner} = await contract.methods.transaction(i).call();
                let transactionObj = {
                    amount:parseInt(amount),
                    transactionDescription,
                    transactionOwner
                }
                //console.log("trascations == ",transactionObj);
                dispatch(addTransaction(transactionObj));
            }   
        */
       
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch(error){
        console.log("Error in loading Web3 = ",error);
        if(error.code===4001){
            
            dispatch(web3LoadingError(error.message));
        }
    }
}




export const addLolly = async(contract, accounts, transaction, dispatch)=>{
    console.log("before transaction");
    const receipt =  await contract.methods.createLolly(transaction.colorOne, transaction.colorTwo, transaction.colorThree)
    .send({
        from : accounts[0],
        value: 100
    });
    console.log("after  transaction ", receipt);
    
}

export const sell = async(contract, accounts,transaction, dispatch)=>{
    console.log("User Assets");
    const receipt =  await contract.methods.sell(transaction.id,transaction.price)
    .send({
        from : accounts[0],
        value: 100
        
    });
    console.log("after  transaction ", receipt);
    
}


export const buy = async(contract, accounts,transaction, dispatch)=>{
    console.log("User Assets");
    const receipt =  await contract.methods.buy(transaction.id)
    .send({
        from : accounts[0],
        value: 200
        
    });
    console.log("after  transaction ", receipt);
    
}


export const share = async(contract, accounts,transaction, dispatch)=>{
    console.log("User Assets");
    const receipt =  await contract.methods.share(transaction.id,transaction.rec)
    .send({
        from : accounts[0],
        
        
    });
    console.log("after  transaction ", receipt);
    
}


