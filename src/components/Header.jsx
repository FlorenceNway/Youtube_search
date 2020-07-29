import React from 'react'
import SearchBar from './SearchBar'

 const Header = () => {
    return (
        <div>
            <img src={require('../images/youtubelogo.svg')} className="youtubeLogo"/>
            <SearchBar/>
        </div>
    )
}
export default Header;