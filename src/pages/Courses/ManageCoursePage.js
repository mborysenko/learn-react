import React, {PropTypes} from "react";
import * as courseActions from "./actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
    }

    render() {
        return (<CourseForm
                allAuthors={[]}
                course={this.state.course}
                errors={this.state.errors}/>);
    }

    onSave() {

    }

    onChange() {

    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function mapStateToProps(state, componentProps) {
    let course = {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
    };
    return {
        course
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
