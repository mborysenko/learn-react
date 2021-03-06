import React, {PropTypes} from "react";
import * as courseActions from "./actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CourseForm from "./CourseForm";
import toastr from "toastr";
import {authorsFormattedForDropdown} from "../../selectors/authorsFormattedForDropdown";

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    formIsValid() {
        let isOrNot = true;
        let errors = {};
        if(this.state.course.title.length < 5) {
            errors.title = "Title must be at least 5 characters.";
            isOrNot = false
        }
        this.setState({ errors });
        return isOrNot;
    }

    saveCourse(event) {
        event.preventDefault();

        if(!this.formIsValid()) {
            return;
        }
        this.setState({
            saving: true
        });
        this.props.actions
            .saveCourse(this.state.course)
            .then(() => {
                this.redirect();
            })
            .catch((error) => {
                toastr.error(error);
                this.setState({
                    saving: false
                });
            });
    }

    redirect() {
        this.setState({
            saving: false
        });
        toastr.success("Course saved");
        this.context.router.push("/courses");
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
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
            loading={this.state.saving}
        />);
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function getCourseById(courses, courseId) {
    let found = courses.find(c => c.id === courseId);
    return found ? found : null;
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

    let courseId = componentProps.params.id;
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    let authors = authorsFormattedForDropdown(state.authors);

    return {
        course,
        authors
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
