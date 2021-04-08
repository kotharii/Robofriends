import React from 'react';

const Scroll =(props) => {
    return (
        <div style= {{overflowY: 'scroll', height:'80vh', padding:'10px 0px 0px 0px'}}>
            {props.children}
        </div>
    );
}
export default Scroll;
// border: '1px solid black',
