import { useEffect, useState } from "react";
import Plot from "react-plotly.js";


const layout = {
  width : 1500, height: 600, title: 'Parametr Graph', xaxis: {type: 'date'}, bargap: 0.15
};

export default function ParametresMulti({ param = [{}], record = []}) {

    const [plot, setPlot] = useState([]);


    useEffect(() => {
      if(!record.length || !param.length) return;
      console.log(record);
      console.log(param);
      const newPlot = [];

      param.forEach(({id, name, }) => {
        
        
        function formateDate(array){
          
          let y =  array.map( (index) => { 
            let newDate = new Date(index);
                let dd = newDate.getDate();
              if (dd < 10) dd = '0' + dd;
               let mm = newDate.getMonth() + 1;
              if (mm < 10) mm = '0' + mm;
              let yy = newDate.getFullYear() % 100;
              if (yy < 10) yy = '0' + yy;
              let hh = newDate.getHours();
              if (hh < 10) hh = '0' + hh;
              let ss = newDate.getSeconds();
              if (ss < 10) ss = '0' + ss;

                let res = dd + "." + mm + "." + yy + ", " + hh + ":" + ss;
            return res;
        })
        return y;
        }
    
        
        
        
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
            // text:"1",
            customdata: formateDate(record.filter(({parameter_id}) => id == parameter_id).map(({create_tms}) => create_tms)),
            textposition: 'auto',
            hovertemplate: '<i>Parameter</i>: '  + name +
                            '<br>Date</b>:%{customdata}'  +
                            '<br>Value</b>:%{y}<br>',
            opacity: 0.6,
            name
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
    