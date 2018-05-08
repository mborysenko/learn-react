import React, {PropTypes} from "react";
import Header from "../common/Header";
import {connect} from "react-redux"

class Application extends React.Component {
    render() {
        return (<div className={"edu-application container-fluid"}>
            <Header loading={this.props.loading}/>
            <div>{this.props.children}</div>
        </div>);
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: (state.asyncCallsInProgress > 0)
    }
}

export default connect(mapStateToProps)(Application);
