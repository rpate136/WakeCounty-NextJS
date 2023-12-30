import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import backendIP from "../../backendIP"

 
export default function Dropdown({onSubmit}) {
  
  const [listOfCities, setlistOfCities] = useState([]);
  const [listOfYears, setlistOfYears] = useState([]);
  const [city, setCity] = useState('');
  const [year, setYear] = useState('');
  const backendIPAddress = backendIP.backendIP;

  const handleSubmit = () => {
    onSubmit({city,year});
  }

  // for getting list of cities
  useEffect(() => {
    axios.get(backendIPAddress+'/restaurants/getList')
    .then(response => {
      // Handle the response data
      setlistOfCities(response.data)
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
    }, []);

    // for getting list of years
    useEffect(() => {
      axios.get(backendIPAddress+'/restaurants/getYear')
      .then(response => {
        // Handle the response data
        setlistOfYears(response.data)
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
      }, []);

    const handleSelectChange = (selectedValues) => {
      const value = selectedValues[0].label;
      setCity(value);
    };

    const handleInputChange = (event) => {
      const value = event[0].label;
      setYear(value);
    };

    return (
    
<div className="overflow-visible flex flex-row w-100 gap-10 pt-6 px-8">
    
    <div className="flex items-center gap-4"> {/* Use flex and items-center to align children horizontally */}
      <h1 className="text-1xl font-bold">Select City</h1>
      <Select
        options={listOfCities}
        value={city}
        onChange={handleSelectChange}
        className="w-full px-6 py-4 bg-gray-100 border border-gray-300 rounded focus:ring focus:ring-indigo-300 text-black"
        contentClassName="bg-white text-blue-600 overflow-visible"
      />
    </div>

    <div className="flex items-center gap-4"> {/* Use flex and items-center to align children horizontally */}
      <h1 className="text-1xl font-bold">Select Year</h1>
      <Select
        options={listOfYears}
        value={year}
        onChange={handleInputChange}
        className="w-full px-6 py-4 bg-gray-100 border border-gray-300 rounded focus:ring focus:ring-indigo-300 text-black"
        contentClassName="bg-white text-blue-600 overflow-visible"
      />
    </div>

    <div className="flex items-center gap-4"> {/* Use flex and items-center to align children horizontally */}
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Submit
      </button>
    </div>
  
  </div>
  
  )
}

