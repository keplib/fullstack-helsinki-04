const CountryListRow = ({ country, setSelectedCountry, setIsSelected }) => {

    const showButton = () => {
        console.log(country.name.common)
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