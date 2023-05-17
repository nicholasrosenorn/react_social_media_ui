import "./posts.scss"
import User from "../../assets/user_icon_img.png"
import PostImage from "../../assets/login_background.jpg"
import Post from "../post/Post"



const Posts = () => {

    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userID: 1,
            profilePic: {User}, 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: {PostImage}
        },
        {
            id: 2,
            name: "Jane Doe",
            userID: 2,
            profilePic: {User}, 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "",
        },
    ]

    return (
        <div className="posts">
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts