import React from 'react';
import PropTypes from 'prop-types';

export function Posts(props){
    //console.log(props)
    return(
        <div id="posts">
            {
                props.postList.lenght > 0 ? <ul>
                    {props.postList.map(post => {
                        return(
                            <li key={post.id}>
                                <span>Title:{post.title} </span>
                                <br/>
                                <span>Body:{post.body} </span>
                            </li>
                        )
                    })}
                </ul> : <h2>Loading Posts</h2>
            }
        </div>
    )
}

Posts.propTypes={
    postList:PropTypes.array.isRequired
}