import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

export default function OneRestaurantAnalysis(){

  const [restID, setrestID] = useState<string>('04092017012');

    const handleSubmit = () => {
      
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
      </div>

    );
}