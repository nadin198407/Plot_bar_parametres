export class DataRecords {

    getData() {
        return fetch('data.json').then(res => res.json()).then(d => 
            d);
         

    }
}
