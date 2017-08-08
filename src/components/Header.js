import React from 'react';
import MenuItem from './MenuItem';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'Gmail'
    }
  }

  handleClick(name, e) {
    e.stopPropagation();
    this.setState({selected: name});
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="row">
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.props.menu.map((item, idx) => {
                return <MenuItem selectItem={this.handleClick.bind(this)} selected={this.state.selected} key={idx} name={item} />
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;
