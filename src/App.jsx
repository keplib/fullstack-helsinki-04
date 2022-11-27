import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './components/SearchField';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('')

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
      <SearchField searchField={searchField} setSearchField={setSearchField} />
      {countries.map(country => <p>{country.name.common}</p>
      )}
    </div>
  )
}

export default App
