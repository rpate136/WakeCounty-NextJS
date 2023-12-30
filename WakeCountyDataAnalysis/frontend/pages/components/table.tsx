import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backendIP from "../../backendIP"

const DictionaryTable = ({city,year}) => {
  const [dictionary, setDictionary] = useState(null);
  const backendIPAddress = backendIP.backendIP;

  useEffect(() => {
    axios.post(backendIPAddress+'/restaurants/getRestaurants', {"city":city ,"year":year})
      .then(response => {
        setDictionary(response.data);
      
      })
      .catch(error => {
        console.error('Error fetching dictionary:', error);
      });
  }, [year,city]);

  if (!dictionary) {
    // If dictionary is null, don't render the table
    return (
      <div>
        <p1 className="my-4 px-8">Make a selection for city and year</p1>
      </div>
    );
  }

  return (
<div className="my-4 px-8 min-w-full">
  <h1 className="text-2xl font-bold mb-4">Dictionary Table</h1>
  <table className="w-full border-collapse border border-gray-300 bg-black text-white">
    <thead>
      <tr>
        {Object.keys(dictionary[0]).map((key) => (
          <th key={key} className="py-2 px-4 border border-gray-300">{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {dictionary.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((value, index) => (
            <td key={index} className="py-2 px-4 border border-gray-300">{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default DictionaryTable;
