import React from 'react';

import Header from './Header';

class App extends React.Component {
  state = { 
    pageHeader: 'Naming Contests' 
  };
  componentDidMount() {
   
  }
  componentWillUnmount() {
    
  }
  render() {
    return (
      <div className="App">
        <Header message="Naming Contests" />
        <div>
          {this.state.pageHeader}
        </div>
      </div>
    );
  }
}

export default App;
