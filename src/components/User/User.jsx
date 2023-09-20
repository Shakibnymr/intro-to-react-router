import { Link } from "react-router-dom";


const User = ({user}) => {
    const {firstname,lastname,email,birthDate,phone,website,address,id} = user
    const userStyles = {
        border: '2px solid yellow',
        padding: '10px' ,
        borderRadius: '20px'
    }
    return (
        <div style={userStyles}>
            <h2>{firstname} {lastname}</h2>
            <p>email: {email}</p>
<p>phone: {phone}</p>
<Link to={`/user/${id}`}>Show Details</Link>
<Link to={`/user/${id}`}>
<button>Click me</button>
</Link>
        </div>
    );
};

export default User;