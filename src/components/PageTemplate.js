import React from 'react';
import MainNavigation from './MainNavigation';
import BottomNavigation from './BottomNavigation';



export default function PageTemplate(props) {

  return (
    <div>
      <MainNavigation />
      <div style={{ paddingBottom: 175 }} className='container'>
        {props.children}
      </div >
      <BottomNavigation />
    </div>
  );
}