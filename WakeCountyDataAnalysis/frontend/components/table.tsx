import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const DictionaryTable = () => {
  
  const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
  const [colDefs, setColDefs] = useState([
        {field: "HSISID"},
        {field: "NAME", filter:true},
        {field: "ADDRESS1"},
        {field: "ADDRESS2"},
        {field: "CITY", filter:true},
        {field: "POSTALCODE"},
        {field: "PHONENUMBER"},
        {field: "FACILITYTYPE"},
        {field: "PERMITID"},
        {field: "RESTAURANTOPENDATE", filter:true}
  ]);

  // var backendIP = process.env.FLASK_APP_BACKEND_URI
  var backendIP= "http://127.0.0.1:5001"

  useEffect(() => {
    const uri = `${backendIP}/restaurants/getRestaurants`;
    axios.get(uri)
      .then(response => {
        setDictionary(response.data);
        console.log("The dictionary is: ", response.data);
      })
      .catch(error => {
        console.error('Error fetching dictionary:', error);
      });
  }, []);
  

  return (
    <div
    className="m-5 ag-theme-quartz-dark ml-5" // applying the grid theme
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
