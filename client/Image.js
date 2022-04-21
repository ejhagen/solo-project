import React, { Component } from 'react';


class Image extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        
      console.log('props in Image', this.props)
      return (
        <div className='image'>
           <img src={this.props.imgSource} />
        </div>
      )
    }
}

export default Image;