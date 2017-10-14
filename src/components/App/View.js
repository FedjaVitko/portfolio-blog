import React from 'react';

import { Sidebar, Segment } from 'semantic-ui-react';

import Hamburger from 'react-hamburger-menu';

import SideNav from 'components/SideNav';
import Routes from './Routes';

const View = ({
    visible, blogs, toggleVisibility, handleClick, open
}) => {
    return (
        <div>
            <Sidebar.Pushable
                as={ Segment }
                attached='bottom' 
            >
                <SideNav 
                    visible={ visible }
                    toggleVisibility={ toggleVisibility }
                />
                
                <Sidebar.Pusher>
                    <div style={{
                        marginLeft: '92%',
                        marginTop: '3em' 
                        }}
                    >
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
                    <Routes />
                </Sidebar.Pusher>

            </Sidebar.Pushable>
        </div>
    );
}

export default View;