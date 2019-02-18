import React, { Component } from 'react';
import {base} from './base.json';
import { Card, Label, Button, Image } from 'semantic-ui-react'
import Formato from './Formato'

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
                    <div className="col-md-4">
                        <div className="row mt-4">
                            <div className = "card mt-4">
                                <div className="card-body">        
                                    <img src={base.imglink}  width="200px" height="200px"/>
                                    <Card.Content>
                                    <Card.Header style={{fontSize: 15}}>{base.tipo}</Card.Header>
                                    <Card.Meta>
                                        <Formato number={base.precio}/>
                                    </Card.Meta>
                                    <Card.Description>
                                        <br></br>
                                        <Label>{base.marca}</Label>
                                        <Label>{base.status} in stock</Label>
                                    </Card.Description>
                                    </Card.Content>
                                    <br></br>
                                    <Card.Content extra>
                                    <Button basic compact color='blue' floated='middle' onClick={this.onSaveProduct} > Add to car </Button>
                                    </Card.Content>       
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>          
                </div>
            )
            }    
        </div>)
      }

}

export default Search;