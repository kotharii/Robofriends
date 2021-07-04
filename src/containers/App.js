import React,{ useState, useEffect } from "react";
import Cardlist from "../components/cardlist";
// import robots from './robots';
import Searchbox from "../components/Searchbox";
import "./Apps.css";
import Scroll from '../components/Scroll'
// import Errorboundry from "../components/Errorboundry.js"

const App = () => {
    // constructor(){
    //   super()
    //     this.state = {
    //         robots: [],
    //         searchfield: '',
    //     }
    // }

    const [ robots , setrobots ] = useState([]);
    const [ searchfield , setsearchfield ] = useState('');
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
        .then(users => {setrobots(users)});
    },[])   // the "[]" is the stopping condition...if you enter "[robots]" then it means that 
    // "it will keep on running the 'useEffect function' until the robots state will keep on changing"
   
    const onsearchchange = (event) => {
        setsearchfield (event.target.value)
    }

        // filteredrobots=()=>{
        //     searchfield.onchange.Tolowercase().includes()
        // };
    const filteredrobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })   
    // this.state.robots.length === 0 is the same as !this.state.robots.length as 
    // ! is not so it will return true and go in the if case automatically
    return !robots.length ?
    (<h1> Loading ... </h1>) :
    (
        <div className="tc">
                
            <h1 className="f1">Robofriends</h1>
            <Searchbox searchchange={onsearchchange}/>
            <Scroll>
                    <Cardlist robots={filteredrobots}/>
            </Scroll>
        </div>
    );    
}
export default App;
