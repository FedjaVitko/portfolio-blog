import React, { Component } from 'react';

import View from './View';

class App extends Component {

  constructor() {
	super();

	this.state = {
		visible: false,
		open: false,
		blogs: {
			"FirstBlog"  : { id: 1, filePath: './blogs/firstblog.md' },
			"SecondBlog" : { id: 2, filePath: './blogs/secondblog.md' },
			"ThirdBlog"  : { id: 3, filePath: './blogs/thirdblog.md' },
			"FourthBlog" : { id: 4, filePath: './blogs/fourthblog.md' },
		},
	}
  }
  
  toggleVisibility = () => this.setState({ 
	  visible: !this.state.visible,
	  open: !this.state.open 
	})

  render() {
		return (
			<View 
				{...this.state} 
				toggleVisibility = {this.toggleVisibility}
				handleClick = { this.handleClick }
			/>
		)
  	}
}

export default App;
