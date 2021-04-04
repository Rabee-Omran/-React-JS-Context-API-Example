
function Two(props) {
    return (
      <div style = {{color: props.theme == 'dark' ? 'white' : 'green'}}>
         Hi From Two <br/>
         theme : {props.theme}
      </div>
    );
  }
  
  export default Two;
  