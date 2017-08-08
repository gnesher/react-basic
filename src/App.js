import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
