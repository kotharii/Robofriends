import React from "react";
import Card from "./card";


const Cardlist = ({robots}) =>{
    // if (true){
    //     throw new Error('hehe');
    // }
    return (
        <>
        {
            robots.map((user) => {
                return (
                <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
                );
            })
        } 
        </>
    );
}
export default Cardlist;
