import { Component } from 'react';
import ThemeContext from '../Context/ThemeContext';


class ToggleThemeButton extends Component{

    componentDidUpdate(){
        console.log(this.context.theme);
    }

    render (){
    return (
       <div >
       <button onClick = {this.context.toggleTheme}> {`toggle to ${ this.context.theme === 'dark' ? 'light' : 'dark'}`}</button>
      </div>
    
    
    );
  }}

  ToggleThemeButton.contextType = ThemeContext;
  
  export default ToggleThemeButton;
  