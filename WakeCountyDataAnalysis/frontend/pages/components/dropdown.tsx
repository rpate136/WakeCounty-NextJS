import React, { useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';

 
export default function Dropdown() {
  
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/restaurants/getList')
    .then(response => {
      // Handle the response data
      console.log(response.data);
      setOptions(response.data)
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
    }, []);

  return (

    <div className="overflow-visible position: fixed flex flex-col w-72 gap-10 pt-6 px-8">
      <Select
        options={options}
        onChange={(selectedValues) => setCity(selectedValues)}
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:ring focus:ring-indigo-300 text-black"
        contentClassName="bg-white text-blue-600"
      />
    </div>
  )
}

