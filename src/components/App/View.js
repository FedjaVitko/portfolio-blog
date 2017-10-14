import React from 'react';

import { Sidebar, Segment, Rail, Sticky, Header } from 'semantic-ui-react';

import Hamburger from 'react-hamburger-menu';

import SideNav from 'components/SideNav';
import SocialMediaSidebar from './SocialMediaSidebar';
import Routes from './Routes';

const View = ({
    visible, blogs, toggleVisibility, open, handleContextRef, contextRef, socialMediaVisible
}) => {
    return (
        <div ref={handleContextRef}>
            <Sidebar.Pushable
                as={ Segment }
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
            <Rail>
                <Sticky context={contextRef}>
                  <SocialMediaSidebar visible={socialMediaVisible}/>
                </Sticky>
            </Rail>
        </div>
    );
}

export default View;