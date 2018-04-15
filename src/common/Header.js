import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import {Elipsis} from "./Elipsis";

const Header = (props) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Course</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            <Elipsis interval={100} dots={10}/>
        </nav>
    );
};

Header.propTypes = {
};

export default Header;
