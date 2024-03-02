import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/dropdown';
import DictionaryTable from '../../components/table';
import GetGraphs from '../../components/graphs';
 
export default function LoopUpRestaurant() {

    return (
      
      <div className="container mx-auto overflow-visible bg-zinc-900">
      
      <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> List of Restaurants in Wake County</div>
        <div className=" overflow-visible">
          <DictionaryTable />
        </div>

        <div className='my-4 bg-gray-900 border border-white text-3xl text-white font-bold tracking-wider text-center p-5'> Inspection Information for a Restaurant</div>
        <div className='container mx-auto overflow-visible'>
          <GetGraphs></GetGraphs>
        </div>
      </div>
        
    );
}

