import React from 'react'
import useWindowSize from './useWindowSize'
import Desktop from './Desktop';
import Mobile from './Mobile';

function App() {
  const size= useWindowSize();
    if(size.width>768){
      return ( <div><Desktop /></div> );
        }
        else{
           return( <div> <Mobile /></div> );
        }
}

export default App;
