import One from './components/One';
import ToggleThemeButton from './components/ToggleThemeButton';
import React, { Component } from 'react';

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
    <div style = {{background: this.state.theme == 'dark' ? 'green' : 'white'}}>
      Hi From App
     <One theme = {this.state.theme}/>
     <ToggleThemeButton toggleTheme = {this.toggleTheme}/>
    </div>
  );
}}

export default App;
