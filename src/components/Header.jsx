import React from 'react'
import SearchBar from './SearchBar'
import '../style/Header.scss'

 const Header = () => {
    return (
        <div className="header">
            <img src={require('../images/youtubelogo.svg')} className="youtubeLogo"/>
            <SearchBar/>
        </div>
    )
}
export default Header;