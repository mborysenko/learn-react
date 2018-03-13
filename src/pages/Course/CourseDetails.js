import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as corseActions from "./actions";

class CourseDetails extends React.Component {
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
        return (
            <div className="jumbotron">
                <h1>Course Page</h1>
                <p>This page contains the Table of Contents</p>
                {this.props.courses.map(this.courseRow)}
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

CourseDetails.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(corseActions, dispatch)
    };
}

function mapStateToProps(state, componentProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);