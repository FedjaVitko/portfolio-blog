import React, { Component } from 'react';

import View from './View';

class App extends Component {

	constructor() {
		super();

		this.state = {
			visible: false,
			open: false,
			socialMediaVisible: false
		}
	}

	toggleVisibility = () => this.setState({ 
		visible: !this.state.visible,
		open: !this.state.open 
	})

	handleContextRef = contextRef => this.setState({ contextRef })

  	render() {
		return (
			<View 
				{...this.state} 
				toggleVisibility = {this.toggleVisibility}
				handleContextRef = {this.handleContextRef}
				contextRef = {this.state.contextRef}
			/>
		)
  	}
}

export default App;
