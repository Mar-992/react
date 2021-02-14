import React from 'react';
import PropTypes from 'prop-types';

export function Input(props){

    console.log(props)

    return(
        <p>
            <input 
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            
            />
            {/* <span><i className="fa fa-eye"> </i></span> */}
            {
                props.name ==="password" ? <button type="button" className="eye-button" onClick={props.toggle}>
                    <i className={"fa " + (props.type === "password" ? 'fa-eye-slash' : 'fa-eye') }></i>
                </button> : null
            }
        </p>
        
    )
}

Input.propTypes={
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    toggle:PropTypes.func
}