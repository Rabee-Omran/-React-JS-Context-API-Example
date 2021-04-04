import One from './components/One';
import ToggleThemeButton from './components/ToggleThemeButton';
import React, { Component } from 'react';
import ThemeContext from './Context/ThemeContext';

class App  extends Component{

  state = {

    theme: 'dark'

  }

  toggleTheme =  () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    })
  }


render(){
  return (
    <ThemeContext.Provider value = {{'theme' : this.state.theme, 'toggleTheme' : this.toggleTheme }}>
    <div style = {{background: this.state.theme === 'dark' ? 'green' : 'white'}}>
      Hi From App
     <One/>
     <ToggleThemeButton />
    </div>
    </ThemeContext.Provider>
  );
}}

export default App;
