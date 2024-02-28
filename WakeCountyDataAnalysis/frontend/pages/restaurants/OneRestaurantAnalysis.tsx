import React, { useState, useEffect } from 'react';
import Dropdown from '../components/dropdown';
import DictionaryTable from '../components/table';
import GetGraphs from '../components/graphs';
 
export default function LoopUpRestaurant() {

  const [selectedValues, setSelectedValues] = useState<{city:string,year:string}>({city: '',year: ''});

  const handleDropdownSubmit = (values: {city:string,year:string}) => {
    setSelectedValues(values);
  };
  
    return (
      
      <div className="overflow-visible">
        <div className="ml-6 mt-6 inline-block hover:border-4 border-blue-500 border-solid rounded p-2">
          <Dropdown onSubmit={handleDropdownSubmit}/>
        </div>
      
        <div className="my-20 px-8 overflow-visible">
          <DictionaryTable city={selectedValues.city} year={selectedValues.year}/>
        </div>

        <div>
          <GetGraphs></GetGraphs>
        </div>
      </div>
        
    );
}

