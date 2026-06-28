import { useState, useEffect } from 'react'
import './App.css'

import FormatName from "./Components/DisplayAcName"

function App() {
  
  const [planes, setPlanes] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/api/airplane')
      .then(response => response.json())
      .then(json => setPlanes(json))
      .catch(error => console.error(error));
    }, [setPlanes]);

  return (
    <>
      <h1>AIRPLANES!</h1>

      {planes.map(plane => (
        <FormatName key={plane.id} manufacturer={plane.manufacturer} name={plane.fullName}/>
      ))}
    </>
  )
}

export default App

// <h2 key={plane.id}>{plane.manufacturer} {plane.fullName}</h2>