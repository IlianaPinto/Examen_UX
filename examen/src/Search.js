import React, { Component } from 'react';
import {base} from './base.json';

class Search extends Component{
    constructor(props){
        super(props)
        this.state = { base }
    }

    render() {
        
        return (
            <div className="container">
                <div className="row mt-4">
                    <p>helo</p>
                </div>
            </div>   
        );
      }

}

export default Search;