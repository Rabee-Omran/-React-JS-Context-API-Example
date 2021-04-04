import Two from './Two';

function One(props) {
    return (
      <div className="App">
       Hi From One
       <Two theme = {props.theme}/>
      </div>
    );
  }
  
  export default One;
  