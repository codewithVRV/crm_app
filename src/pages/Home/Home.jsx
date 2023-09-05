import { Link } from "react-router-dom";

function Home () {
    return (
        <>
            <h1>This is home page</h1>
            <Link to={"/login"}>Go to Login Page</Link>
        </>
    )
}

export default Home;