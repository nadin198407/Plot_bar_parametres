import { useEffect, useState } from "react";
import Plot from "react-plotly.js";


const layout = {
  width : 1500, height: 600, title: 'Parametr Graph', xaxis: {type: 'date'}
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
          //  {
          //   x: record.filter(({parameter_id}) => id == parameter_id).map(({create_epoch_tms}) => create_epoch_tms),
          //   y: record.filter(({parameter_id}) => id == parameter_id).map(({value}) => value),
          //   type: 'scatter',
          //   mode: 'line',
          //   name
          //  },
           {
            type: 'bar', 
            x: record.filter(({parameter_id}) => id == parameter_id).map(({create_tms}) => create_tms), 
            y: record.filter(({parameter_id}) => id == parameter_id).map(({value}) => value),
          
            text:"1",
            textposition: 'auto',
            hoverinfo: 'none',
            opacity: 0.6,
            marker: {
              color: 'rgb(158,202,225)',
              line: {
                color: 'rgb(8,48,107)',
                width: 1.5
              }
            }
          },
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
    