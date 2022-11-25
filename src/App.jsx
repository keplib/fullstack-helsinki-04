import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all').then(response => {
        setCountries(response.data)
        console.log(response.data);
      })
  }, [])

  return (
    <div>
      <p>Hello</p>
      {countries.map(country => <p>{country.name.common}</p>
      )}
    </div>
  )
}

export default App
