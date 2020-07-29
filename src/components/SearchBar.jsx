import React,{useState} from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("")

    const searchHandler = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div>
            <input onChange={searchHandler} value={searchInput} placeholder={'Search...'}/>
        </div>
    )
}
export default  SearchBar;