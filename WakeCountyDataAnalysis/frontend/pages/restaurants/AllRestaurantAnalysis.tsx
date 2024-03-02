import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic'


const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

 
export default function AllRestaurantAnalysis() {

    const [city,setCity] = useState<any>(); 
    const [facility,setFacility] = useState<any>();
    const [numberOfRest, setNumberOfRest] = useState<any>();
    const [map,setMap] = useState<any>();
    const [loading,setLoading] = useState<boolean>(true);

    var backendIP= "http://127.0.0.1:5001"

    useEffect (() => {
        const uri = `${backendIP}//restaurants/restaurantsAnalysisGraphs`;
        axios.get(uri)
          .then(response => {
            setCity(response.data.city)    
            setFacility(response.data.facility)
            setNumberOfRest(response.data.num_restaurants)
            setMap(response.data.map_fig)
            setLoading(false)    
          })
          .catch(error => {
            console.error('Error fetching dictionary:', error);
          });
    },[]);
    
    return (
      
      <div className="container mx-auto h-fit flex flex-col gap-0 m-0 overflow-visible bg-black-900">
      
        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Number of Restaurants </div>
            { !city &&<div className='text-lg py-8 bg-red-600 animate-pulse cursor-wait'> Loading </div> }
            { !loading && <Plot data={city.data} layout = {city.layout}/> }
            { !loading && <Plot data={numberOfRest.data} layout = {numberOfRest.layout}/> }

        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Breakdown of the Facility type </div>
            { !facility && <div className='text-lg py-8 bg-red-600 animate-pulse cursor-wait'> Loading </div> }
            { !loading && <Plot data={facility.data} layout = {facility.layout} />}

        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Map of Restaurants </div>
            { !map && <div className='text-lg py-8 bg-red-600 animate-pulse cursor-wait'> Loading </div> }
            { !loading && <Plot data={map.data} layout = {map.layout} />}  

      </div>
        
    );
}
