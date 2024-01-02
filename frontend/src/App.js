import React, { Component } from 'react';
import AuthComponent from './components/AuthComponent';

class App extends Component {
  render() {
    const { clientId } = this.props;
    // Use clientId as needed
    return (
      <div className="App">
        <AuthComponent clientId={clientId} />
      </div>
    );
  }
}

export default App;