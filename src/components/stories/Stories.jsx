import "./stories.scss"
import Story from "../../assets/login_background.jpg"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Stories = () => {

    const {currentUser } = useContext(AuthContext);

    // TEMPORARY
    const stories =[
        {
            id: 1,
            name: "John Doe",
            img: {Story}
        },
        {
            id: 2,
            name: "John Doe",
            img: {Story}
        },
        {
            id: 3,
            name: "John Doe",
            img: {Story}
        },
        {
            id: 4,
            name: "John Doe",
            img: {Story}
        },
    ]

    return (
        <div className="stories">
            <div className="story">
                    <img src={Object.values(currentUser.profilePic)} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={Object.values(story.img)} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories