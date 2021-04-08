import React from 'react';
import "./card.css"
const Card = ({name  ,email, id}) => {
    return (    
        <div className="tc bg-light-green dib pa3 br4 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=100x100`} alt="robots"/>
                <div>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {email}
                    </p>   
                </div>
        </div>
   );   
}
export default Card;

// from line 5-15 it isn't html it is JSX and to write JSX you need to import React. 
// <h1> Robofriends </h1>
