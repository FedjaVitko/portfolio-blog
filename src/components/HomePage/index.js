import React from 'react'

import { Container, Divider, Sidebar } from 'semantic-ui-react';

import HeaderComponent from './HeaderComponent';
import SocialLinks from './SocialLinks';

const HomePage = () => 
(
    <Container style={{ marginBottom: '8.3em' }}>
            
            <HeaderComponent />

            <Divider section />

            <div className='flex-center'>
                <div style={{ textAlign: 'center', maxWidth: '600px', fontSize: '22px' }}>
                    <p>
                        I am an entry-level MERN full-stack developer from Germany, 
                        Russia by birth! I am incredibly excited for new opportunities 
                        to learn and develop myself!
                    </p>
                </div>
            </div>

            <SocialLinks />

    </Container>
)

export default HomePage;