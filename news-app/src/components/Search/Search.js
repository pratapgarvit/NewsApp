const Search = (props) => {
    return (
        <div>
            <input id='searchInput' type='text'></input>
            <button onClick={props.clickHandler}>Search</button>
        </div>
    )
}

export default Search;