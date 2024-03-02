import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic'
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import backendIp from '../backendIP';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function GetGraphs(){

  const [restID, setrestID] = useState<string>('04092017012'); //sample id = 04092017012
  const [plots, setPlots] = useState<any>({'graph':null,'critical':null,'desc':null,'violation':null, "info":null});
  const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
  const [colDefs, setColDefs] = useState<any>([]);
  // const [graph1, setgraph1] = useState<any>({data:null,layout:null});

  var backendIP = backendIp.backendIP || "http://127.0.0.1:5001"

    const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log("API all")
        const uri = `${backendIP}/restaurants/oneRestGraphs?hsid=${restID}`;
        axios.get(uri)
          .then(response => {
            setPlots(response.data);
            console.log("The dictionary is: ", response.data);
          })
          .catch(error => {
            console.error('Error fetching dictionary:', error);
          });
        }
        
    useEffect(() => {
      if (plots.desc) {
        setDictionary(plots.desc);
        const keys = Object.keys(plots.desc[0]);
        console.log(keys)
        const transformedArray = keys.map(key => ({ field: key }));
        console.log(transformedArray)
        setColDefs(transformedArray)
        setColDefs([{field: 'Description',width: 700},{field:'count'}])
      }
    }, [plots]);
  

    return (
      <div id ='graphs' className='h-screen overflow-visible flex-col gap-6 pt-6 px-8 relative'>

        <div id ='button&info' className='inline-block bg-zinc-900 text-white hover:border-4 border-blue-500 border-solid rounded p-2'>

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

        {!plots.info && <div id='no chart message' className='text-center align-middle mt-40 text-4xl font-bold text-white mb-4 rainbow-text animate-pulse'> Charts will display here</div>}
        
        <div className='py-4'>
          {plots.graph && <Plot data={plots.graph.data} layout={plots.graph.layout}/>}
          {plots.violation && <Plot data={plots.violation.data} layout={plots.violation.layout}/>}
          {plots.desc && 
              <div className="ag-theme-quartz-dark py-10" style={{ height: '100%', width: 800}}>
              <AgGridReact 
                  rowData={dictionary}
                  columnDefs={colDefs}
                  pagination={false}
                  domLayout={'autoHeight'}
                />
              </div>
          }
        </div> 

      </div>

    );
}