import React, {PropTypes} from "react";

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    let resultingClass = "form-group";
    if(error && error.length > 0) {
        resultingClass += " " + resultingClass;
    }
    return (<div className={resultingClass}>
        <label htmlFor={name}>{label}</label>
        <div>
            <input
                type="text"
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>);
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;
