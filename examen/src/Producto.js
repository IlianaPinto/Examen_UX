import React from 'react';
import { Card, Image, Label, Button } from 'semantic-ui-react';
import Formato from './Formato';

function Producto(props) {
    return(
      <Card style={{ marginTop: 15 }}>
        <Image size="small" src={props.imglink}  />
        <Card.Content>
          <Card.Header style={{fontSize: 15}}>{props.marca}</Card.Header>
          <Card.Meta>
            <Formato number={props.precio}/>
          </Card.Meta>
          <Card.Description>
            <Label>{props.marca}</Label>
            <Label>{props.status} en stock</Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic compact color='blue' floated='right' onClick={props.onSaveProduct} > Agregar al carrito </Button>
        </Card.Content>
        <Card.Content extra>
          <Button.Group floated='right'>
            <Button
              compact
              onClick={props.onIncrementProduct}
              >+</Button>
            <Button
              compact
              onClick={props.onRemoveProduct}
              >-</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }

export default Producto;