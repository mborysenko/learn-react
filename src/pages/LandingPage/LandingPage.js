import React from "react";
import {Link} from "react-router";

class LandingPage extends React.Component {
    render() {
        return (
            <div className={"jumbotron"}>
                <h1>Welcome to Laboratory</h1>
                <Link to={"/about"} activeClassName={"btn btn-primary btn-lg"}>Learn more...</Link>
            </div>
        );
    }
}

export default LandingPage;
