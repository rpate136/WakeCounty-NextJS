import React, { useState, useEffect } from 'react';
import Dropdown from '../components/dropdown';
import DictionaryTable from '../components/table';

 
export default function LoopUpRestaurant() {

  const [selectedValues, setSelectedValues] = useState<{city:string,year:string}>({city: '',year: ''});

  const handleDropdownSubmit = (values: {city:string,year:string}) => {
    setSelectedValues(values);
  };
  
    return (
      
      <div className="overflow-visible">
        <div className="overflow-visible">
          <Dropdown onSubmit={handleDropdownSubmit}/>
        </div>
      
        <div className="my-40 overflow-visible">
          <DictionaryTable city={selectedValues.city} year={selectedValues.year}/>
        </div>
      </div>
      
    );
}

