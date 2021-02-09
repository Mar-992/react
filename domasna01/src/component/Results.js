import React from 'react';

export function Results(props){
    return(
        <div id="results">

            {props.hasResults && <h3>Results</h3>}
            {props.multipleResults === true ?
            <h2>Fail</h2>:
            <h2>Pass</h2>
            }

        </div>
    )
}