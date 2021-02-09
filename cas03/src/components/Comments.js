import React from 'react';
import PropTypes from 'prop-types';

export function Comments(props){
    console.log(props);
    return(
        <div id="comments">
            <h2>Comments</h2>
            <ul>
            {
                props.komentari.map((komentar,i)=>{
                    return(
                        <li key={i}>
                            <p>Author: {komentar.author} </p>
                            <p>Content:{komentar.content} </p>
                        </li>
                    )
                })
            }
            </ul>
            <p>Cifra: {props.cifra} </p>

        </div>
    )
}

Comments.propTypes = {
    komentari: PropTypes.array.isRequired,
    cifra: PropTypes.number
}
