import React from 'react';

const ProgressLoader = (props) => {
    return (
        <div>
            {
                props.isLoading ?
                <h1>...Loading...</h1>
                :
                props.children
            }
        </div>
    );
}

export default ProgressLoader;