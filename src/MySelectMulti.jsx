
import React from 'react';

export default function MySelectMulti({options, onChange}) {

     const mychangemulti = () => {
        var selected = [];
        var elem = document.getElementById("multi_select").options;
        for (var option of elem){
            if(option.selected){
                selected.push(option.value);
            }
        }
        onChange(selected);
        console.log(selected);
}


return <select onChange={mychangemulti} multiple={true} id="multi_select">
        <option> Choose......</option>
         {options.map((option, index) => { return <option value={option.id} key={index}>{option.name}</option>})}
        </select>
}



