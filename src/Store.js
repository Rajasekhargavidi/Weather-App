import React, { Component } from 'react'

class Store extends Component {
    constructor(props){
        super(props);
        // Main App State
        this.state = {
            appName : "Wheather Up"
        }
    }
    render() {
        return React.Children.map(this.props.children,(child)=>{
            return React.cloneElement(child,{...this.state});
        })   
    }
}

export default Store