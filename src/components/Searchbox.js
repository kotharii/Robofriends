import React from "react";

const Searchbox = ( { searchfield, searchchange } ) => {
   return(
    <div className="pa2"> 
        <input className="pa3 ba br-pill b--green bg-lightest-blue" 
            type="search" 
            placeholder="search for robot here!"
            onChange={searchchange}>
        </input>
    </div>
   ); 
};
export default Searchbox;
