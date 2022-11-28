import CountryDetailPage from "./CountryDetailPage";
import CountryListRow from "./CountryListRow";

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
            {countriesToShow.map(country => <CountryListRow country={country} />
            )}
        </div>
    )
}

export default CountryList;