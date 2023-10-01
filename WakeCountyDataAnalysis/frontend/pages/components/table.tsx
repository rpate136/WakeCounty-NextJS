import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DictionaryTable = () => {
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    axios.get('http://example.com/api/dictionary')
      .then(response => {
        setDictionary(response.data);
      })
      .catch(error => {
        console.error('Error fetching dictionary:', error);
      });
  }, []);

  return (
    <div className = 'my-4'>
      <h1>Dictionary Table</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Key</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(dictionary).map(([key, value], index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="border border-gray-300 px-4 py-2">{key}</td>
              <td className="border border-gray-300 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DictionaryTable;
