import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData()
    const {firstname,email,website}=user
    return (
        <div>
            <h2>User Name: {firstname}</h2>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;