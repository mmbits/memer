import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




class App extends React.Component {
  state={
    memes:[],
    loading:false,
    text:'',
  }

  getMemes = async (e) => {  //async allows use of await
    e.preventDefault()  //prevents page reloading
    this.setState({loading:true})
  }

  render() {
    var {memes, loading, text} = this.state
    return (
      <div className="App">
        stuff goes here
        <form className="App-header" onSubmit={this.getMemes}>
          <input value={text}
            onChange={e=> this.setState({text: e.target.value})}
          />
          <Button variant="contained"
           color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
 
        </form>
      </div>
    );
  }
  
}

export default App;
