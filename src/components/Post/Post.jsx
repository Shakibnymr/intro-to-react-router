import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    // console.log(post)
    const {category,id,status,title} = post
    const postStyles = {
        border: '2px solid yellow',
        padding: '10px' ,
        borderRadius: '20px',
        gap: '5px'
    }
    const navigate = useNavigate()

const handleSeeDetails = () => {
    navigate(`/post/${id}`)
}

    return (
        <div style={postStyles}>
            <h3>Post id: {id}</h3>
            <p>Category: {category}</p>
            <p>Status: {status}</p>
<p>Title: {title}</p>
<Link to={`/post/${id}`}>Show Details</Link>
<button onClick={handleSeeDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;