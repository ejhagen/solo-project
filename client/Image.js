import React, { Component } from 'react';


class Image extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        

      return (
        <div className='image'> SOME TEXT HERE IN IMAGE DIV
           <img src='badurl.com' />
        </div>
      )
    }
}

export default Image;