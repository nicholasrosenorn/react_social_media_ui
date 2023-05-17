import "./posts.scss"
import User from "../../assets/user_icon_img.png"
import Post from "../../assets/login_background.jpg"



const Posts = () => {

    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userID: 1,
            profilePic: {User}, 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: {Post}
        },
        {
            id: 2,
            name: "Jane Doe",
            userID: 2,
            profilePic: {User}, 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
    ]

    return (
        <div className="posts">
            
        </div>
    )
}

export default Posts