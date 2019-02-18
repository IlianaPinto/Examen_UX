import React, { Component } from 'react';
import Formato from './Formato'
import { Card, Label, Button, Image } from 'semantic-ui-react'

class Cuadro extends Component{
    constructor(props){
        super(props)
        this.state={
            contador: this.props.precio
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        alert("La cantidad total a pagar es de: Lps. "+this.props.precio);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className = "card mt-4">
                    <div className="card-body">        
                        <img src={this.props.imglink}  width="200px" height="200px"/>
                        <Card.Content>
                        <Card.Header style={{fontSize: 15}}>{this.props.tipo}</Card.Header>
                        <Card.Meta>
                            <Formato number={this.props.precio}/>
                        </Card.Meta>
                        <Card.Description>
                            <br></br>
                            <Label>{this.props.marca}</Label>
                            <Label>{this.props.status} in stock</Label>
                        </Card.Description>
                        </Card.Content>
                        <br></br>
                        <Card.Content extra>
                        <Button basic compact color='blue' floated='middle' onClick={this.handleSubmit} > Add to car </Button>       
                        </Card.Content>       
                    </div>
                </div>  
            </form>
        )}

}

export default  Cuadro;