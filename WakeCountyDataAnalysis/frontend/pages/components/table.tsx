import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backendIP from "../../backendIP"
import { log } from 'console';

const DictionaryTable = ({city,year}:{city:string,year:string}) => {
  
  const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
  // var backendIP = process.env.FLASK_APP_BACKEND_URI
  var backendIP= "http://127.0.0.1:5001"

  useEffect(() => {
    const uri = `${backendIP}/restaurants/getRestaurants?city=${city}&year=${year}`;
    axios.get(uri)
      .then(response => {
        setDictionary(response.data);
        console.log("The dictionary is: ", response.data);
      })
      .catch(error => {
        console.error('Error fetching dictionary:', error);
      });
  }, [year, city]);
  

  if (dictionary.length == 0) {
    // If dictionary is null, don't render the table
    return (
      <div>
        <h1 className="my-4 px-8">Make a selection for city and year</h1>
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
