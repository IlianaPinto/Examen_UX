import React, { Component } from 'react';
import Formato from './Formato'
import { Card, Label, Button} from 'semantic-ui-react'
import firebase from "firebase"

class Cuadro extends Component{
    constructor(props){
        super(props)
        this.state={
            login: false
        }
    }

    handleSubmit = () =>{
        
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ login: !!user })
            if(user == null){
                alert("You are not log in");
            }else{
                alert("La cantidad total a pagar es de: Lps. "+this.props.precio);
            }
        })     
    }

    render(){
        return(
            <form>
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