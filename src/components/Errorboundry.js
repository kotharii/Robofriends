import React, { Component } from 'react';

class Errorboundry extends Component{
    constructor(props){
        super(props)
        this.state = {
            haserror: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ haserror: true }) 
    }
    render(){
        if (this.state.haserror === true){
            return (
                <h1>Ooops this wasnt supposed to happen 😅</h1>
            );    
        }
        else {
            return (this.props.children)
        }
    }
}
export default Errorboundry;