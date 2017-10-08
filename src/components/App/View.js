import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { Button, Sidebar, Segment } from 'semantic-ui-react';

import Hamburger from 'react-hamburger-menu';

import SideNav from 'components/SideNav';

import BlogMainPage from 'components/BlogMainPage';
import HomePage from 'components/HomePage';
import ProjectMainPage from 'components/ProjectMainPage';

const View = ({
    visible, blogs, toggleVisibility, handleClick, open
}) => {
    return (
        <BrowserRouter>
            <div style={{ height: '100vh'}}>
                
                <Sidebar.Pushable as={ Segment } attached='bottom' >
                    <SideNav 
                        visible={ visible }
                        toggleVisibility={ toggleVisibility }
                    />
                    
                    <Sidebar.Pusher>
                        <div style={{ marginLeft: '90%', marginTop: '3em' }}>
                            <Hamburger 
                                isOpen={ open }
                                menuClicked={ toggleVisibility }
                                strokeWidth={4}
                                color='grey'
                                width={44}
                                height={35}
                                borderRadius={3}
                                animationDuration="0.6"
                            />
                        </div>
                        <Route exact path='/'           component={ HomePage } />
                        <Route       path='/blog'       component={ BlogMainPage } />
                        <Route       path='/projects'   component={ ProjectMainPage } />
                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </div>
        </BrowserRouter>
    );
}

export default View;