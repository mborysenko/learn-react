import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "./actions";
import CourseList from "./CourseList";
import {browserHistory} from "react-router";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push("/course")
    }

    render() {
        let {courses} = this.props;
        return (
            <div className="jumbotron">
                <h1>Course Page</h1>
                <input
                    type="submit"
                    value={"Add new course"}
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <p>This page contains the Table of Contents</p>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function mapStateToProps(state, componentProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
