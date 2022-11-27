const SearchField = ({ searchField, setSearchField }) => {

    const searchHandler = (event) => {
        setSearchField(event.target.value);
        console.log(searchField);
    }

    return (
        <div>
            <form>
                <label>
                    find countries:
                    <input type="text"
                        name="name"
                        value={searchField}
                        onChange={searchHandler}
                    />
                </label>
            </form>

        </div>
    )
}

export default SearchField;