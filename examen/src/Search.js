import React, { Component } from 'react';
import {base} from './base.json';
import Cuadro from './Cuadro'

function searchingfor(buscar){
    return function(x){
        return x.marca.toLowerCase().includes(buscar.toLowerCase()) || !buscar;
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
        const {buscar,base} = this.state;
        return(
        <div>
            <form>
                <div className="component">
                    <br></br>
                    <input type="text" placeholder="Search" aria-label="Search" type="text" onChange={this.searchHandler} value={buscar} name='buscar'/>
                </div>
                    
            </form>
            {base.filter(searchingfor(buscar)).map(base =>   
                <div key={base.id}>
                    <div className="container">
                        <Cuadro precio={base.precio} tipo={base.tipo} marca={base.marca} imglink={base.imglink}></Cuadro>        
                    </div>        
                </div>
            )
            }    
        </div>)
      }

}

export default Search;