import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import loginPic from "images/project1/project1[0].png";
import mainPic from "images/project1/project1[1].png";
import helpPic from "images/project1/project1[2].png";

import { Image, Container, Header, Segment, Icon, Button } from 'semantic-ui-react';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectMainPage extends Component {

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
        };

        return (
            <Container>
                <div style={{ position: 'relative' }}>
                    <Button icon='left arrow' size='massive' color='white' style={{ position: 'absolute', left: '6em', height: '100%', width: '50px', backgroundColor: 'white' }} /> 
                    <h1 style={{ textAlign: 'center', letterSpacing: '0.02em', fontWeight: '500', fontSize: '40px', color: 'gray' }}>
                        Choir Scheduler
                    </h1>
                    <Link to='/projects/daily-challenge-app'>
                    <Button icon='right arrow' size='massive' style={{ position: 'absolute', right: '6em', top: '0', height: '100%', width: '50px', backgroundColor: 'white' }} />
                    </Link>
                </div>
                <div style={{ marginTop: '5em', flexDirection: 'column' }}>
                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        What is this project about?
                    </Header>
                    <p style={{ fontSize: '17px' }}>
                        It is an appointment planning app. In this case it is used to schedule chor rehearsals
                        as well as allow for a sign out functionality from each rehearsal.
                    </p>
                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        What technologies were used?
                    </Header>
                    <p style={{ fontSize: '17px' }}>
                        <ul>
                            <li>React.js</li>
                            <li>Firebase</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </p>
                    <div>
                        <Slider {...settings}>
                            <div><Image style={{  height: '500px', width: '970px', margin: 'auto' }} src={ loginPic } /></div>
                            <div><Image style={{  height: '500px', width: '970px', margin: 'auto' }} src={ mainPic } /></div>
                            <div><Image style={{  height: '500px', width: '970px', margin: 'auto', marginBottom: '1em' }} src={ helpPic } /></div>
                        </Slider>
                    </div>

                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        How can I access the site?
                    </Header>
                    <p style={{ fontSize: '17px', marginBottom: '2em' }}>
                        <p>
                            <a href='https://github.com/TheoVitkovskiy/chor-termin-planer'>
                                <Icon link bordered inverted name='github' />
                            </a>
                            <a href='https://chor-termin-planer.netlify.com'>
                                chor-termin-planer.com
                            </a>
                        </p>
                        <p>
                            <b>Login:</b> admin <br/>
                            <b>Password:</b> password
                        </p>

                    </p>

                </div>
                
            </Container>
        )
    }
}

export default ProjectMainPage;
