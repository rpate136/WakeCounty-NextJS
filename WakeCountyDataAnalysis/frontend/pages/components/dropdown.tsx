import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import backendIP from "../../backendIP"

interface DropdownProps {
  onSubmit: (data: { city: string; year: string }) => void;
}

export default function Dropdown({ onSubmit }: DropdownProps) {
  
  const [listOfCities, setlistOfCities] = useState<[]>([]);
  const [listOfYears, setlistOfYears] = useState<[]>([]);
  const [city, setCity] = useState<string>('');
  const [year, setYear] = useState<string>('');
  // var backendIP= process.env.FLASK_APP_BACKEND_URI || "http://127.0.0.1:5000"
  var backendIP= "http://127.0.0.1:5001"
  

  const handleSubmit = () => {
    onSubmit({city,year});
    console.log("The backend API is: " + backendIP)
  }

  // for getting list of cities
  useEffect(() => {
    const uri = backendIP.concat('/restaurants/getList')
    axios.get(uri)
    .then(response => {
      // Handle the response data
      setlistOfCities(response.data)
    })
    .catch(error => {
      // Handle the error
      console.log("API call IP: "+uri);
      console.log(error)
    });
    }, []);

    // for getting list of years
  useEffect(() => {
      const uri = backendIP.concat('/restaurants/getYear')
      axios.get(uri)
      .then(response => {
        // Handle the response data
        setlistOfYears(response.data)
      })
      .catch(error => {
        // Handle the error
        console.log("API call IP: "+uri);
        console.error(error);
      });
    }, []);

    const handleSelectChange = (input: { label: string }[]) => {
      console.log(input)
      const value: string = input[0].label ;
      setCity(value);
    };
    
    const handleInputChange = (input: { label: string }[]) => {
      const value: string = input[0].label;
      setYear(value);
    };
    

    return (
    
    <div className="overflow-visible flex flex-row w-100 gap-10 pt-6 px-8">
        
        <div className="flex items-center gap-4 "> {/* Use flex and items-center to align children horizontally */}
          <h1 className="text-1xl font-bold">Select City</h1>
          <Select
            options={listOfCities}
            values={[{ label: city }]}
            onChange={handleSelectChange}
            dropdownHeight = "500px"
            dropdownGap={8} // Adjust the gap as needed
            style={{ width: '200px' }}
            className="overflow-visible w-full max-w-lg px-6 py-4 bg-gray-100 border border-gray-300 rounded focus:ring focus:ring-indigo-300 text-black"
            // contentClassName="bg-white text-blue-600 overflow-visible"
          />
        </div>

        <div className="flex items-center gap-4"> {/* Use flex and items-center to align children horizontally */}
          <h1 className="text-1xl font-bold">Select Year</h1>
          <Select
            options={listOfYears}
            values={[{ label: year }]}
            onChange={handleInputChange}
            dropdownHeight = "500px"
            dropdownGap={8} // Adjust the gap as needed
            style={{ width: '200px' }}
            className="overflow-visible w-full max-w-lg px-6 py-4 bg-gray-100 border border-gray-300 rounded focus:ring focus:ring-indigo-300 text-black"
            // contentClassName="bg-white text-blue-600 overflow-visible"
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

