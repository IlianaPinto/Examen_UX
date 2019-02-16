import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'


function Cart(props){
  return(
    <Feed>
      <Feed.Event>
        <Feed.Label image={props.imglink} />
        <Feed.Content>
          <Feed.Date content={props.marca} />
          <Feed.Summary>
            $ {props.total} ({props.order} productos)
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  )
}

export default Cart;