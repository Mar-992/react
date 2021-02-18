import React from 'react';
import PropTypes from 'prop-types';

export function Input(props){

    console.log(props)

    return(
        <p>
            { props.showComment && props.showComment === true ?
                <textarea 
                rows={8}
                cols={20}
                />
                :
                <input 
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />}
             {
                props.name ==="password" ? <button type="button" className="eye-button" onClick={props.toggle}>
                    <i className={props.type === "password" ? 'fa-eye-slash' : 'fa-eye'}></i>
                </button> : null
             }
             {
                props.name === "password" ? <button type="button" onClick={props.toggleComment}>
                    button

                </button>:null
            }
            
        </p>
        
    )
}

Input.propTypes={
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    toggle:PropTypes.func,
    showComment: PropTypes.bool,
    toggleComment: PropTypes.func

}