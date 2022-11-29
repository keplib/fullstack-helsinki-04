const CountryListRow = ({ country, setSelectedCountry, setIsSelected }) => {

    const showButton = () => {
        setIsSelected(true);
        setSelectedCountry(country);
    }

    return (
        <div>
            <p>{country.name.common}</p>
            <button onClick={showButton}>show</button>
        </div>
    )
}

export default CountryListRow;