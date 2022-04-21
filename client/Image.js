import React, { Component } from 'react';


class Image extends Component {
  constructor(props) {
      super(props);        
  }

  render() {       
    
    return (
      <div className='image'>          
          <img src={this.props.imgSource} />
      </div>
    )
  }
};

export default Image;