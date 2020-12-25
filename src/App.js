import React,{createContext,useReducer} from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./Components/Home"
import Test from "./Components/Test"
import {  initialState,reducer} from "./reducer/reducer"

export const stateValue=createContext();
const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <stateValue.Provider value={{state,dispatch}}>
  <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home}/>
    <Route exact path="/test" component={Test}/>
   </Switch>
   </BrowserRouter>
    </stateValue.Provider>
    </>
  )
}

export default App
