import { Link } from "react-router";


const Unauthorized = () => {
    return (
        <div>
            <h1>unauthorized</h1>
            <div>
                <Link to="/">Go to Home</Link>
            </div>
        </div>
    );
};

export default Unauthorized;