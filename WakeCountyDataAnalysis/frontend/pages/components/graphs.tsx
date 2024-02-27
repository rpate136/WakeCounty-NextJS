import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import graphsJSON from './graph.json'

interface OneRestaurantAnalysisProps {
  hsisid: string;
}

const OneRestaurantAnalysis: React.FC<OneRestaurantAnalysisProps> = ({ hsisid }) => {

    const [graphs, setgraphs] = useState<{}>({'graph':'','critical':"",'desc':'','violation':''});
    const [graph1, setgraph1] = useState<any>({data:graphsJSON.data,layout:graphsJSON.layout});
    
    var backendIP= "http://127.0.0.1:5001"

    const callthis = () => {
      console.log(graph1)
    }
    
    useEffect(() => {
        console.log("API all")
    
          const uri = `${backendIP}/restaurants/oneRestGraphs?hsid=${hsisid}`;
          axios.get(uri)
            .then(response => {
              setgraphs(response.data);
              setgraph1(response.data.graph);
              // document.getElementById('graph-container').innerHTML = response.data.graph;
              console.log("The dictionary is: ", response.data.graph);
            })
            .catch(error => {
              console.error('Error fetching dictionary:', error);
            });

    },[]);

    if (hsisid.length == 0){
      console.log(hsisid)
        return (
            <div>Nothing to display</div>
        );
    }

    console.log("second return", hsisid);
    return (
      <div>
      {/* {false && <Plot data={graph1.data} layout={graph1.layout}/>} */}
      </div>
    );
}

export default OneRestaurantAnalysis;