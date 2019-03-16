import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Login from './login/Prueba'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button color="link" id="Popover1" type="button">
          Sign in!
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverBody><Login></Login></PopoverBody>
        </Popover>
      </div>
    );
  }
}