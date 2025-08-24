import './App.css'
import Papa from 'papaparse';
import { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
      fetch('sampleData.csv')
        .then(response => response.text())
        .then(text => {
          const result = Papa.parse(text, { header: true })
          setData(result.data)
        })
    }, [])

  return (
    <div className = "container">
      <div className = "header">
        <h1>Teaching Practices</h1>
      </div>
      <div className = "dataContainer">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App