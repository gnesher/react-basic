import React from 'react';

class MenuItem extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {

    let item;
    if (this.props.selected === this.props.name) {
        item = <li className="active"><a href="#">{this.props.name}</a></li>
    } else {
        item = (<li>
                    <a onClick={(e)=> this.props.selectItem(this.props.name, e)} href="#">
                        {this.props.name}
                    </a>
                </li>)        
    } 

    return (item);
  }
};

export default MenuItem;
