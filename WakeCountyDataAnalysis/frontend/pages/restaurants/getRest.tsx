import React, { useState, useEffect } from 'react';
import axios from 'axios';
import graphsJSON from './graph.json'
import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function OneRestaurant(){

  const [restID, setrestID] = useState<string>('04092017012'); //sample id = 04092017012
  const [graphs, setgraphs] = useState<{}>({'graph':'','critical':"",'desc':'','violation':''});
  const [graph1, setgraph1] = useState<any>({data:null,layout:null});

  var backendIP= "http://127.0.0.1:5001"

    const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log("API all")
        const uri = `${backendIP}/restaurants/oneRestGraphs?hsid=${restID}`;
        axios.get(uri)
          .then(response => {
            setgraphs(response.data);
            setgraph1(response.data.graph);
            console.log("The dictionary is: ", response.data.graph);
          })
          .catch(error => {
            console.error('Error fetching dictionary:', error);
          });
    }

    return (
      <div>
      <div className='overflow-visible flex flex-row gap-10 pt-6 px-8 relative'>  
        <form id='hsisid' onSubmit={handleSubmit}>
        <h1 className="text-1xl font-bold">HSISID: </h1>
        <label>   
          <input type="text" value={restID} onChange={(e) => setrestID(e.target.value)} />
        </label>
        <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' />
        </form>
      </div>
      {graph1.data && graph1.layout && <Plot data={graph1.data} layout={graph1.layout}/>}
      </div>

    );
}