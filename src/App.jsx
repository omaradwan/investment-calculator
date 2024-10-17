
import Input from "./components/Input.jsx"
import Table from "./components/Table.jsx";
import { useState } from "react";

let INITIAL_VALUES=[1,1,1,1];
function App() {
  const [values,setValues]=useState(INITIAL_VALUES)
  function handleChange(indx,event){
    setValues(prvValues=>{
    
      let updatedArray=[...prvValues];
      updatedArray[indx]=event.target.value;
      return updatedArray
    })
  }
  return (
    <>
      <Input first="Initial investment" second="Annual salary" third="Expected return" fourth="duration" onChange={handleChange}/>
      <Table values={values}/>
    </>
    
   
  )
}

export default App
