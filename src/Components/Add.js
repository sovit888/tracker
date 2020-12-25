import React,{useState,useContext} from 'react'
import {stateValue} from "../App"
import "./form.css";

const Add = ({bool,setBool}) => {
    const {dispatch}=useContext(stateValue)
    const [data,setData]=useState({name:"",amount:"",received:false,purposes:""});

    const handleChange=type=>event=>{
        setData({...data,[type]:event.target.value})
    }
    const handleSubmit=event=>{
        event.preventDefault();
        dispatch({type:'INSERT',payload:data})
        setBool(!bool)
    }
    return (
       <>
       <form onSubmit={handleSubmit} className="add-form">
           <div className="form-group">
<input 
type="text" 
placeholder="Name of Person"
value={data.name}
onChange={handleChange("name")}
/>
           </div>
        <div className="form-group">
<input 
type="text" 
placeholder="Amount"
value={data.amount}
onChange={handleChange("amount")}
/>
        </div>
             <div className="form-group">
<input 
type="text" 
placeholder="purposes"
value={data.purposes}
onChange={handleChange("purposes")}
/>
           </div>
        <div className="checkbox">
            <input type="checkbox" onChange={e=>{
                setData({...data,received:e.target.checked})
            }}
            value={data.received}
            />
            <label>Received</label>
        </div>
<input 
type="submit" 
value="Confirm" 
className="add-button"
/>
       </form>
       </>
    )
}

export default Add
