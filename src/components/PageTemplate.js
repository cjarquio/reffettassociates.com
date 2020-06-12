import React from 'react';



export default function PageTemplate(props) {

  return (
    <div style={{paddingBottom:100}} className='container'>
      {props.children}
    </div >
  );
}