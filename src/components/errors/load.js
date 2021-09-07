import React from 'react';

export default function(props) {
  let msg = props.text || 'Error in loading! Try again...';
  
  return (
    <div className="container">
      <p>{msg}</p>
    </div>
  )

}