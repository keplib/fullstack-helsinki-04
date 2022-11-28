const CountryListRow = ({ country }) => {

    const showButton = () => {
        console.log(country.name.common)
    }

    return (
        <div>
            <p>{country.name.common}</p>
            <button onClick={showButton}>show</button>
        </div>
    )
}

export default CountryListRow;