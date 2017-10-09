import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import loginPic from "images/project1/project1[0].png";
import mainPic from "images/project1/project1[1].png";
import helpPic from "images/project1/project1[2].png";

import { Image, Container, Header, Segment, Icon, Button } from 'semantic-ui-react';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectPage extends Component {

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
            <Container style={{ float: 'left' }}>
                <div style={{ position: 'relative' }} >
                    <Link to='/projects/choir-scheduler'>
                        <Button icon='left arrow' size='massive' color='white' style={{ position: 'absolute', left: '2em', height: '100%', width: '50px', backgroundColor: 'white' }} />
                    </Link>
                    <h1 style={{ textAlign: 'center', letterSpacing: '0.02em', fontWeight: '500', fontSize: '40px', color: 'gray' }}>
                        Daily Challenge App
                    </h1>
                    <Button icon='right arrow' size='massive' style={{ position: 'absolute', right: '2em', top: '0', height: '100%', width: '50px', backgroundColor: 'white' }} />
                </div>
                <div style={{ marginTop: '5em', marginLeft: '2em', flexDirection: 'column' }}>
                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        What is this project about?
                    </Header>
                    <p style={{ fontSize: '17px' }}>
                        It is a daily challenge app. It is used to give yourself daily challenges.
                    </p>
                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        What technologies were used?
                    </Header>
                    <p style={{ fontSize: '17px' }}>
                        <ul>
                            <li>React.js</li>
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>Mongo DB</li>
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
                            <a href='https://github.com/TheoVitkovskiy/daily-challenge-app'>
                                <Icon link bordered inverted name='github' />
                            </a>
                            <a href='https://daily-challenge-app.heroku.com'>
                                daily-challenge-app.com
                            </a>
                        </p>
                    </p>

                </div>
                
            </Container>
        )
    }
}

export default ProjectPage;

