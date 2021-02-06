import React from 'react';
export function Comments(props){

    //console.log(props);
    return(
        <div id="comments">
            
            {props.hasComments && <h3>Comments</h3>}

            {props.multipleComments === true ? 
            <h2>This Component has Multiple Comments</h2>
             : <h2>No Multiple Comments Here!!</h2>
            }

        </div>
    )
}