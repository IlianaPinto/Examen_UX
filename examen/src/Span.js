import React, { Component } from 'react';

class Span extends Component{
    constructor(props){
        super(props)
        this.state={
            contador: 0
        }
    }

       

    render(){
        return(
            <span className="badge badge-pill badge-light ml-2"> Lps. {this.state.contador} </span>
        )
    }

}

export default Span;