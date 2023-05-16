import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
//import User from "../../assets/user_icon_img.png"
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

  const {toggle, darkMode } = useContext(DarkModeContext);
  const {currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to = "/" style={{textDecoration: "none"}}>
                    <span>Quaint</span>
                </Link>
                <HomeOutlinedIcon />
                { darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} /> }
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="search"/>
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src={Object.values(currentUser.profilePic)} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )

}

export default NavBar