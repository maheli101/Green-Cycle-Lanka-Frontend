import React from 'react'
import { Button } from 'react-bootstrap'


function Supplier() {
  return (
    <div>
      <br/>
      
      <h1>
        Supplier page
      </h1>
      <br/>
      <Button variant="primary">Primary</Button>{' '}
      <div className="d-grid gap-2">
        <br/>
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div>
    </div>
  )
}

export default Supplier
