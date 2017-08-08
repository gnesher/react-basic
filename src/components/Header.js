import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="row">
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.props.menu.map((item, idx) => {
                return <li key={idx}><a href="#">{item}</a></li>
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
