import React, { Component } from 'react';
import PropTypes from 'prop-types';

import View from './View';

class SideNav extends Component {
    state = { 
        activeItem: 'home'
    };

    handleItemClick = (e, { name }) => {
        this.props.toggleVisibility()
        this.setState({ activeItem: name })
    };

    render() {
        return (
            <View
                {...this.state}
                {...this.props}
                handleItemClick = {this.handleItemClick}
            />
        )
    }
}

SideNav.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleVisibility: PropTypes.func.isRequired
}

export default SideNav;
