const CountryDetailPage = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.keys(country.languages).map((key, index) => {
                    return (
                        <li key={index}>{country.languages[key]}</li>
                    )
                })}
            </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default CountryDetailPage;