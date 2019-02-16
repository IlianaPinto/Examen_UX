import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import SearchForm from './SearchForm'

class Menu extends Component {

  render() {
    return(
      <Segment textAlign='right' clearing style={{ marginTop: 15}}>
        <SearchForm/>
      </Segment>
    )
  }
}

export default Menu;