import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './components/SearchField';
import CountryList from './components/CountryList';

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
      <SearchField searchField={searchField} setSearchField={setSearchField} />
      <CountryList countries={countries} searchField={searchField} />
    </div>
  )
}

export default App
