import React from 'react'
import SearchBar from './SearchBar'
import '../style/Header.scss'

 const Header = ({ onSearch }) => {
   return (
     <div className="header">
       <img
         src={require("../images/youtubelogo.svg")}
         className="youtubeLogo"
       />
       <SearchBar onSearch={onSearch} />
       <div className="avatar">
        <p className='avatarText'>FN</p>
       </div>
     </div>
   );
 };
export default Header;