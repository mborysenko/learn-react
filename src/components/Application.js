import React, {PropTypes} from "react";
import Header from "../common/Header";

class Application extends React.Component {
    render() {
        return (<div className={"edu-application container-fluid"}>
                <Header/>
                <div>{this.props.children}</div>
            </div>);
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

export default Application;
