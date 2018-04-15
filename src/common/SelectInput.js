import React, {PropTypes} from "react";

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (<div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div>
            <select
                name={name}
                value={value}
                className="form-control"
                onChange={onChange}
            >
                <option value="">{defaultOption}</option>
                {options.map((o) => {
                    return <option
                        key={o.value}
                        value={o.value}
                    >{o.text}</option>
                })}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>
);
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
