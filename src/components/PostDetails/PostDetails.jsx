import { useLoaderData } from "react-router-dom";
import './pd.css'

const PostDetails = () => {
    const details = useLoaderData()
    console.log(details)
    const {content,image,status} = details
    return (
        <div>
            <h1>Details are given below</h1>
            <img src={image} alt="" />
            <p className="content"> Content: {content}</p>
            <p className="status">Status: {status}</p>
        </div>
    );
};

export default PostDetails;