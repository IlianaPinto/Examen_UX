import React, { Component } from 'react';
import {base} from './base.json';

function searchingfor(term){
    return function(x){
        return x.marca.includes(term) || !term;
    }
}

class Search extends Component{
    constructor(props){
        super(props)
            this.state = {
                buscar: '',
                base
            }
            this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({buscar: event.target.value})
    }

    render() {
        const {term,base} = this.state;
        return(
        <div>
            <form>
                <input type="text" onChange={this.searchHandler} value={term} name='buscar'></input>
            </form>
            {base.filter(searchingfor(term)).map(base =>   
                <div key={base.id}>
                    
                </div>
                )
            }    
        </div>)
      }

}

export default Search;