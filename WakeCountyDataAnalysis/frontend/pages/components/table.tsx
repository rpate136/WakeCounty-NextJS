import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const DictionaryTable = ({city,year}:{city:string,year:string}) => {
  
  const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
  const [colDefs, setColDefs] = useState([
        {field: "HSISID"},
        {field: "NAME"},
        {field: "ADDRESS1"},
        {field: "ADDRESS2"},
        {field: "CITY"},
        {field: "STATE"},
        {field: "POSTALCODE"},
        {field: "PHONENUMBER"},
        {field: "FACILITYTYPE"},
        {field: "PERMITID"},
        {field: "SHAPE"},
        {field: "year"}
  ]);

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
  

  // if (dictionary.length == 0) {
  //   // If dictionary is null, don't render the table
  //   return (
  //     <div className="overflow-y-auto">
  //       <h1 className="my-4 px-8">Make a selection for city and year</h1>
  //     </div>
  //   );
  // }

  return (
    <div
    className="ag-theme-quartz-dark" // applying the grid theme
    style={{ height: 600, width: 1500}} // the grid will fill the size of the parent container
   >
     <AgGridReact 
         rowData={dictionary}
         columnDefs={colDefs}
         pagination={true}
     />
   </div>
  );
};

export default DictionaryTable;
