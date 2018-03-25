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

        this.updateCourseState.bind(this);
    }

    onSave() {

    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        this.setState({course});
    }

    render() {
        return (<CourseForm
            allAuthors={this.props.authors}
            course={this.state.course}
            errors={this.state.errors}
            onChange={this.updateCourseState}/>);
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
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
    let authorOptions = state.authors.map((a) => {
        return {
            value: a.id,
            text: [a.firstName, a.lastName].join(" ")
        };

    });
    return {
        course,
        authors: authorOptions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
