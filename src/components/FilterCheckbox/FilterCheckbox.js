import React from "react";


function FilterCheckbox(props) {
    return (
        <label className="checkbox-label">
            <input
                type="checkbox"
                name="checkBox"
                className='checkbox-input'
                checked={props.checkBoxChecked}
                onChange={props.handleChangeCheckBox}
            />
            <p className="checkbox-name">Короткометражки</p>
        </label>
    )
}

export default FilterCheckbox;