import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid


const DFtoTable = ({dataframe,size}:any) => {
  
    const [dictionary, setDictionary] = useState<Record<string, any>[]>([]);
    const [colDefs, setColDefs] = useState<any>([]);
    const [style, setStyle] = useState<any>([]);
    
  useEffect(() => {
    if (dataframe) {
      setDictionary(dataframe);
      const keys = Object.keys(dataframe[0]);
      const transformedArray = keys.map(key => ({ field: key }));
      setColDefs(transformedArray)
      setStyle(size)
      console.log(size,dataframe)
    }
  }, [dataframe]);

  if (dictionary.length === 0) {
    return (
      <div className="overflow-y-auto">
        <h1 className="my-4 px-8">Make a selection for city and year</h1>
      </div>
    );
  }

  return (
    <div
    className="ag-theme-quartz-dark py-10" // applying the grid theme
    style={style} // the grid will fill the size of the parent container
   >
     <AgGridReact 
         rowData={dictionary}
         columnDefs={colDefs}
         pagination={false}
     />
   </div>
  );
};

export default DFtoTable;
