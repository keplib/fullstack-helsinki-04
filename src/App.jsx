import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './components/SearchField';
import CountryList from './components/CountryList';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('')

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all').then(response => {
        setCountries(response.data)
        console.log(response.data);
      })
  }, [])

  return (
    <div>
      <p>{API_KEY}</p>
      <SearchField searchField={searchField} setSearchField={setSearchField} />
      <CountryList countries={countries} searchField={searchField} />
    </div>
  )
}

export default App
