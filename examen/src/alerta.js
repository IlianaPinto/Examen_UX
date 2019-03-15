import React from 'react'
import { Alert } from 'reactstrap';
import Login from './login/Prueba'

const Example = (props) => {
    return (
      <div>
        <Alert color="secondary">
          <Login></Login>
        </Alert>    
      </div>
    );
  };
  
  export default Example;