import React,{Component} from "react";
import Cardlist from "../components/cardlist";
// import robots from './robots';
import Searchbox from "../components/Searchbox";
import "./Apps.css";
import Scroll from '../components/Scroll'
// import Errorboundry from "../components/Errorboundry.js"

class App extends Component {
    constructor(){
      super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
        .then(users => this.setState({ robots : users }))
    }
   
    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    // filteredrobots=()=>{
    //     searchfield.onchange.Tolowercase().includes()
    // };
    render(){
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })   
        // this.state.robots.length === 0 is the same as !this.state.robots.length as 
        // ! is not so it will return true and go in the if case automatically
        return !this.state.robots.length ?
        (<h1> Loading ... </h1>) :
        (
            <div className="tc">
                    
                <h1 className="f1">Robofriends</h1>
                <Searchbox searchfield={this.state.searchfield} searchchange={this.onsearchchange}/>
                <Scroll>
                        <Cardlist robots={filteredrobots}/>
                    
                </Scroll>
            </div>
        );
    };    
}
export default App;
// hello saxy baby