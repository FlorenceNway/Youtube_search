import React,{useState} from 'react'

const SearchBar = ({onSearch}) => {
    const [searchInput, setSearchInput] = useState("")

    const searchHandler = (e) => {
        setSearchInput(e.target.value)
        onSearch(searchInput)
    }

    return (
        <div className="searchBar">
            <input onChange={searchHandler} value={searchInput} placeholder={'Search...'}/>
        </div>
    )
}
export default  SearchBar;