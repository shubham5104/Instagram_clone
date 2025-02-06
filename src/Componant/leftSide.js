import './leftSide.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import React from 'react'
import InstagramLogo from '../assets/InstagramLogo.png';

const LeftSide = () => {
  return (
    <div>
<div className="leftSide">
        <div className='logoPart'>
            <img className='logoimg' src={InstagramLogo} alt ='Instagram'/>
        </div>
        <div className='navLinkPart'>
            <div className="navLink">
                <HomeIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Home</div>
            </div>
            <div className="navLink">
                <SearchIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Search</div>
            </div>
            <div className="navLink">
                <ExploreIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Explore</div>
            </div>
            <div className="navLink">
                <MovieIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Reels</div>
            </div>
            <div className="navLink">
                <MailOutlineIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Messages</div>
            </div>
            <div className="navLink">
                <FavoriteBorderIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Notifications</div>
            </div>
            <div className="navLink">
                <AddCircleOutlineIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Create</div>
            </div>
            <div className="navLink">
                <AccountCircleIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Profile</div>
            </div>

            <div className="belowPart">
            <div className="navLink">
                <SmartToyIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Ai Studio</div>
            </div>
            <div className="navLink">
                <GestureIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">Thread</div>
            </div>
            <div className="navLink">
                <MenuIcon sx={{fontSize:"30px", margin:"0 13px 0 0"}}/>
                <div className="navName">More</div>
            </div>
            
            </div>
        </div>
        </div>

    </div>
  )
}

export default LeftSide