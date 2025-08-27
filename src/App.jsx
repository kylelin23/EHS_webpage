import './App.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'

function App() {


  const [data, setData] = useState([]);

  // Grab data from sampleData.csv
  useEffect(() => {
      fetch('sampleData.csv')
        .then(response => response.text())
        .then(text => {
          const result = Papa.parse(text, { header: true }) // Put parsed data in result
          setData(result.data) // data = result
        })
    }, [])

    // CODE PARSING HERE:
    // Parsed data is in variable called data
    
    console.log(data[0]);

  return (

    <div className = "container">
      <div className = "header">
        <h1>Teaching Practices</h1>
      </div>
      <div className = "dataContainer">
        <pre className = "data">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App

