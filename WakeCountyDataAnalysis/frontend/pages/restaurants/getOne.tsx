import React, { useState, useEffect } from 'react';
import Dropdown from '../components/dropdown';
import DictionaryTable from '../components/table';

 
export default function LoopUpRestaurant() {

  const [selectedValues, setSelectedValues] = useState({});

  const handleDropdownSubmit = (values) => {
    setSelectedValues(values);
  };
  
    return (
      <>
      <div>
        <Dropdown onSubmit={handleDropdownSubmit}/>
      </div>
      {/* <div className='my-16'>
        <h1>Selected City: {selectedValues.city}</h1>
        <h1>Selected Year: {selectedValues.year}</h1>
      </div> */}
      <div className="my-16">
        <DictionaryTable city={selectedValues.city} year={selectedValues.year}/>
      </div>
      </>
    );
}

