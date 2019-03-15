import React, { Component } from 'react';
import './App.css';
import { Card, Label, Button, Image } from 'semantic-ui-react'
import Formato from './Formato'

export default function ProductListItem(props){
    return <div className = "card mt-4">
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
                    <Button basic compact color='blue' floated='middle' onClick={() => props.addToCart(props.product)} > Add to car </Button>       
                    </Card.Content>       
                </div>
        </div>
}
