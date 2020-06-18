import React from 'react';
import MainNavigation from './MainNavigation';
import BottomNavigation from './BottomNavigation';



export default function PageTemplate(props) {

  return (
    <div>
      <MainNavigation />
      <div style={{ paddingBottom: 100 }} className='container'>
        {props.children}
      </div >
      <BottomNavigation />
    </div>
  );
}