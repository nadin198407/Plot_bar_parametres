import React, { useState, useEffect } from 'react';
import { DataRecords } from './DataRecords';
import MySelectMulti from './MySelectMulti';
import ParametresMulti from "./Parametres.jsx";
import './App.css'



function App() {

    const dataRecords = new DataRecords();
    const [multiSelect, setmultiSelect] = useState([]);
    const [records, setRecords] = useState([]);
    const [sensors, setSensors] = useState([]);

    useEffect(() => {
        dataRecords.getData().then((d) => {setRecords(d.data);
        setSensors(d.parameters);    
        });
    }, []);

    function selectParam(arr) {
        var filterObj = sensors
            .filter(el => arr.includes(String(el.id)))
            .map(el => el);
        return filterObj;
    }


    function chooseSensors(param, datas) {
        const newArr = [];
        console.log(param);
        console.log(datas);
        const resultArray = param.filter((item) => {
            return datas.some((item2) => item2.parameter_id === item.id);
        }
        );
        console.log(resultArray);
        resultArray.forEach(({ id, name }) => newArr.push(
            {
                id,
                name
            }));
        console.log(newArr);
        return newArr
    }





    return (
        <>
            <MySelectMulti options={chooseSensors(sensors, records)} onChange={setmultiSelect} />
            {/* {<div>{multiSelect.join(",")}</div>} */}
            <ParametresMulti param={selectParam(multiSelect)} record={records} />



        </>

    )


}



export default App;