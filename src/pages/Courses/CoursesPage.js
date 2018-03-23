import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "./actions";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        let {courses} = this.props;
        return (
            <div className="jumbotron">
                <h1>Course Page</h1>
                <p>This page contains the Table of Contents</p>
                <CourseList courses={courses}/>
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value={"Save"}
                    onClick={this.onClickSave}
                />
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
