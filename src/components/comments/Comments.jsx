import "./comments.scss"
import User from "../../assets/user_icon_img.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext";


const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    //TEMPORARY
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
            name: "John Doe",
            userID: 1,
            profilePic: {User}, 
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            name: "Jane Doe",
            userID: 2,
            profilePic: {User}, 
        },
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src={Object.values(currentUser.profilePic)} alt="" />
                <input placeholder="write a comment" /> 
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src ={Object.values(comment.profilePic)} alt=""/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments