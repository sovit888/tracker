import React,{useState,useContext} from 'react'
import Add from "./Add"
import {stateValue} from "../App"
import "./home.css";

const Home = () => {
    const [bool,setBool]=useState(false)
    const {state}=useContext(stateValue)
    const toggle=event=>setBool(!bool);
const showBalance=()=>{
    return state.reduce((initial,final)=>{
        if(final.received){
            initial+=(Number(final.amount)||0)
        }
        else{
            initial-=(Number(final.amount)||0)
        }
return initial;
    },0)
}

    return (
     <>
     <div className="home">
         <div className="content">
 <h1>Expenses Tracker</h1>
 <h1>My Balance is {showBalance()}</h1>
 {bool? <Add bool={bool} setBool={setBool}/>:
 <>
 <ul className="list">
     {state.map((value,index)=>{
return <li className="list-item" key={index}>
    <div className="list-item-left">
 <h1>{value.name}</h1>
    <p>{value.purposes}</p>
    </div>
   <div className="list-item-right">
       <p className={`${!value.received&&"sent"}`}>{value.received?"+":"-"} Rs {value.amount}</p>
   </div>
</li>
     })}

 </ul>
     <button onClick={toggle} className="btn">
         Add List
     </button>
      </>}
         </div>
     </div>
     </>
    )
}

export default Home
