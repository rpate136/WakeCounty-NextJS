import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic'
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import backendIp from '../../backendIP';


const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

 
export default function AllRestaurantAnalysis() {

    const [inspector,setInspector] = useState<any>(); 
    const [violation,setViolation] = useState<any>();
    const [top20Rest, setTop20Rest] = useState<any>();
    const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
    const [colDefs, setColDefs] = useState<any>([]);
    const [loading,setLoading] = useState<boolean>(true);

    var backendIP= backendIp.backendIP || "http://127.0.0.1:5001"

    useEffect (() => {
        const uri = `${backendIP}//restaurants/overallAnalysisGraphs`;
        axios.get(uri)
          .then(response => {
            setInspector(response.data.inspector)    
            setViolation(response.data.violationCode)
            setTop20Rest(response.data.top20Rest)
            setLoading(false)    
          })
          .catch(error => {
            console.error('Error fetching dictionary:', error);
          });
    },[]);
    
    useEffect(() => {
        if (top20Rest) {
          setDictionary(top20Rest);
          console.log("Top 20: ", top20Rest)
          const keys = Object.keys(top20Rest[0]);
          console.log("Top 20 Keys: ", keys)
          const transformedArray = keys.map(key => ({ field: key }));
          console.log("Column titles: ", transformedArray)
          setColDefs(transformedArray)
        //   setColDefs([{field: 'Description',width: 700},{field:'count'}])
        }
      }, [top20Rest]);

    return (
      
      <div className="container mx-auto h-fit flex flex-col gap-0 m-0 overflow-visible bg-black-900">
      
        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Number of inspections by inspectors </div>
            { !inspector && <div className='text-lg py-8 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 animate-pulse cursor-wait'> Loading... </div> }
            { !loading && <Plot data={inspector.data} layout = {inspector.layout}/> }

        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Total Violations Count</div>
            { !violation && <div className='text-lg py-8 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 animate-pulse cursor-wait'> Loading... </div> }
            { !loading && <Plot data={violation.data} layout = {violation.layout} />}

        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Restaurants with the highest violations </div>
            { !top20Rest && <div className='text-lg py-8 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 animate-pulse cursor-wait'> Loading... </div> }
            {top20Rest && 
              <div className="ag-theme-quartz-dark py-10" style={{ height: '100%', width: '100%'}}>
              <AgGridReact 
                  rowData={dictionary}
                  columnDefs={colDefs}
                  pagination={false}
                  domLayout={'autoHeight'}
                />
              </div>
          }

      </div>
        
    );
}