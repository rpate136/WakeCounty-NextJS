import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic'
import DFtoTable from './DFtoTable'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function GetGraphs(){

  const [restID, setrestID] = useState<string>('04092017012'); //sample id = 04092017012
  const [plots, setPlots] = useState<any>({'graph':null,'critical':null,'desc':null,'violation':null, "info":null});
  const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
  const [colDefs, setColDefs] = useState<any>([]);
  // const [graph1, setgraph1] = useState<any>({data:null,layout:null});

  var backendIP= "http://127.0.0.1:5001"

    const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log("API all")
        const uri = `${backendIP}/restaurants/oneRestGraphs?hsid=${restID}`;
        axios.get(uri)
          .then(response => {
            setPlots(response.data);
            // const keys = Object.keys(response.data.desc);
            // const transformedArray = keys.map(key => ({ field: key }));
            // setColDefs(transformedArray)
            console.log("The dictionary is: ", response.data);
          })
          .catch(error => {
            console.error('Error fetching dictionary:', error);
          });
    }

    return (
      <div className='overflow-visible flex-col gap-6 pt-6 px-8 relative bg-zinc-900'>
        <div className='inline-block hover:border-4 border-blue-500 border-solid rounded p-2'>
        <div className='overflow-visible flex flex-row tems-center gap-6 px-6'>  
          <h1 className="text-1xl font-bold py-3">Enter HSISID</h1>
          <form className ='py-2 text-1xl' id='hsisid' onSubmit={handleSubmit}>
          <label>   
            <input className='h-8 py-2 bg-white text-black' type="text" value={restID} onChange={(e) => setrestID(e.target.value)} />
          </label>
          {/* <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' /> */}
          </form>
          <button onClick={handleSubmit} className="py-2 px-4 items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
            Submit
          </button>
        </div>
          {/* {!plots.info && <h1>Click Submit to get info</h1>} */}
          {plots.info && 
            <div className='px-8 py-4 border-full border-solid rounded p-4'>
            <h1 className="text-xl font-bold">{plots.info.NAME}</h1>
            <p className="text-lg">{plots.info.ADDRESS1}</p>
            <p className="text-lg">{plots.info.ADDRESS2}</p>
            <p className="text-lg">{plots.info.CITY}, NC</p>
            <p className="text-lg">Phone: {plots.info.PHONENUMBER}</p>
            </div>
          }
        </div>
      <div className='column'>
      {plots.graph && <Plot data={plots.graph.data} layout={plots.graph.layout}/>}
      {plots.violation && <Plot data={plots.violation.data} layout={plots.violation.layout}/>}
      {plots.desc && <DFtoTable dataframe={plots.desc} size={{ height: 700, width: 1000}}/>}
      {/* {plots.critical && <DFtoTable dataframe={plots.critical} size={{ height: 200, width: 200}}/>} */}
      </div> 

      </div>

    );
}