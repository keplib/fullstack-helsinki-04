import CountryDetailPage from "./CountryDetailPage";

const CountryList = ({ countries, searchField }) => {

    let countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchField.toLowerCase()));

    if (countriesToShow.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else if (countriesToShow.length === 1) {
        return (
            <CountryDetailPage country={countriesToShow[0]} />
        )
    }

    return (
        <div>
            <p>{searchField}</p>
            {countriesToShow.map(country => <p>{country.name.common}</p>
            )}
        </div>
    )
}

export default CountryList;