import React, {useState, useEffect} from 'react';
import { DataRecords } from './DataRecords';
import MySelectMulti from './MySelectMulti';
import ParametresMulti from "./Parametres.jsx";
import './App.css'


 
function App() {

  const dataRecords = new DataRecords();
  const [multiSelect, setmultiSelect] = useState([]);
  const [records, setRecords] = useState([]);
  
  const sensors=[
    {id: 1, name: 'Effective days'},
    {id: 2, name: 'Power'},
    {id: 3, name: 'Temperature In'},
    {id: 4, name: 'Boron'},
    {id: 5, name: 'Flow'},
    {id: 6, name: 'Inlet Pressure'},
    {id: 7, name: 'Outlet Pressure'}
  ]

useEffect(() => {
  dataRecords.getData().then(data => setRecords(data));
  }, []); 


  function selectParam(arr) {
    var filterObj = sensors
    .filter(el => arr.includes(String(el.id)))
    .map(el => el);
    return filterObj;
  }  

  
  return (
    <>
    <MySelectMulti options={sensors} onChange={setmultiSelect} />
    {<div>{multiSelect.join(",")}</div>}
    <ParametresMulti param={selectParam(multiSelect)} record={records}/>
    


    </>
    
  )


  }



  export default App;