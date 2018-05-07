import React, {PropTypes} from "react";
import TextInput from "../../common/TextInput";
import SelectInput from "../../common/SelectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (<div className="jumbotron">
        <h1>Manage Courses Page</h1>
        <form>
            <TextInput name="title" value={course.title} label={"Title"} onChange={onChange} error={errors.title}/>
            <SelectInput
                name="authorId"
                value={course.authorId}
                label={"Author"}
                onChange={onChange}
                defaultOption={"Select Author"}
                options={allAuthors}
                error={errors.authorId}/>
            <TextInput name="category" value={course.category} label={"Category"} onChange={onChange} error={errors.category}/>
            <TextInput name="length" value={course.length} label={"Length"} onChange={onChange} error={errors.length}/>
            <input type="submit" onClick={onSave}
                   disabled={loading}
                   value={(loading) ? "Saving" : "Save"}
                    className={"btn btn-primary"}/>
        </form>
    </div>);
};

CourseForm.prototype.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;
