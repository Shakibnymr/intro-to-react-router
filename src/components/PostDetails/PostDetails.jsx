import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import './pd.css'

const PostDetails = () => {
    const details = useLoaderData()
    const navigate = useNavigate()
    const {postId} = useParams()
    console.log(details)
    const {content,image,status} = details
    const handleGoBack = () => {
        navigate(-1)
    }
    console.log(postId)
    return (
        <div>
            <h1>Details are given below</h1>
            <img src={image} alt="" />
            <p className="content"> Content: {content}</p>
            <p className="status">Status: {status}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;