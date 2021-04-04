import ThemeContext from '../Context/ThemeContext';
import React, {useContext} from 'react';

function Two() {

 const context = useContext(ThemeContext)
    return (
     <div style = {{color: context.theme === 'dark' ? 'white' : 'green'}}>
         Hi From Two <br/>
         theme : {context.theme}
      </div> 
      
     
    );
  }
  
  export default Two;
  