import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";

const Header = (props) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/course" activeClassName="active">Course</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

Header.prototype.propTypes = {
};

export default Header;
