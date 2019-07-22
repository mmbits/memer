import React from 'react';
import './App.css';

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
          <button disabled={loading || !text} type="submit">Search</button>
        </form>
      </div>
    );
  }
  
}

export default App;
