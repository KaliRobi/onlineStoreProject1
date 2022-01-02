import React from 'react';

import './form-input.style.scss';


const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />

        {
        label ?   
        (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label` }
        >  {label}
        </label> )
        : null
        }
        
    </div>
)

export default FormInput;

       {/* if label is provided then it will render this: if the value has a lenght in the other props(user typed), then we add the shrink class to it, othervise we dont touche it */}
