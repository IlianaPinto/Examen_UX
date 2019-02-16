import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Producto from './Producto'


function ProductList(props) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={4}>
          {props.products.map(p => {
            return (
              <Grid.Column>
                <Producto
                  key={p.id}
                  name={p.marca}
                  picture={p.imglink}
                  price={p.price}
                  status={p.status}
                  onSaveProduct={() => props.onSaveProduct(p.id)}
                  onIncrementProduct={() => props.onIncrementProduct(p.id)}
                  onRemoveProduct={() => props.onRemoveProduct(p.id)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProductList