import React from "react";
import {IndexLink, Link} from "react-router";
import {Elipsis} from "./Elipsis";

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Course</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {loading && <Elipsis interval={100} dots={10}/>}
        </nav>
    );
};

Header.propTypes = {};

export default Header;
