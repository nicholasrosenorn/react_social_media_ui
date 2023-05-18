import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

import User from "../../assets/user_icon_img.png"
import Cover from "../..//assets/cover.png"

const Profile = () => {

    return (
        <div className="profile">
            <div className="images">
                <img src={Cover} alt="" className="cover" />
                <img src={User} alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                        <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                        <InstagramIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                        <TwitterIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                        <LinkedInIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>social.dev</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div> 
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />

                    </div>
                </div>
            <Posts />
            </div>
        </div>
    )

}

export default Profile