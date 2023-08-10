import React from "react";


function FilterCheckbox() {
    return (
        <label className="checkbox-label">
            <input type="checkbox" className='checkbox-input' />
            <p className="checkbox-name">Короткометражки</p>
        </label>
    )
}

export default FilterCheckbox;