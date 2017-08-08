import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: ['Gmail', 'Drive', 'Calendar']
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header menu={this.state.menu} />
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
