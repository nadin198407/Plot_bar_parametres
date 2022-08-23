import { useEffect, useState } from "react";
import Plot from "react-plotly.js";


const layout = {
  width : 800, height: 800, title: 'Parametr Graph', xaxis: {type: 'date'}
};

export default function ParametresMulti({ param = [{}], record = []}) {

    const [plot, setPlot] = useState([])
    
    useEffect(() => {
      if(!record.length || !param.length) return;
      console.log(record);
      console.log(param);
      const newPlot = [];
      param.forEach(({id, name}) => {
        newPlot.push(
           {
            x: record.filter(({parameter_id}) => id == parameter_id).map(({create_epoch_tms}) => create_epoch_tms),
            y: record.filter(({parameter_id}) => id == parameter_id).map(({value}) => value),
            type: 'scatter',
            mode: 'line',
            name
           }
          );
          
       });
      console.log(newPlot);
      setPlot(newPlot);
      console.log(plot);
    
    }, [param, record])
    
    
    
    
    
        return (
          <Plot
          data={plot}
          layout={layout} />
        );
      }
    