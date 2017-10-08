import React, { Component } from 'react';

import loginPic from "images/project1/project1[0].png";
import mainPic from "images/project1/project1[1].png";
import helpPic from "images/project1/project1[2].png";

import { Image, Container, Header, Segment } from 'semantic-ui-react';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectMainPage extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            fade: true
        };

        return (
            <Container style={{ float: 'left' }}>
                <h1 style={{ textAlign: 'center', letterSpacing: '0.05em', fontWeight: '100', marginBottom: '1em' }}>Chor Terminplaner</h1>
                <Slider {...settings}>
                    <div><Image style={{  height: '500px', width: '950px', margin: 'auto' }} src={ loginPic } /></div>
                    <div><Image style={{  height: '500px', width: '950px', margin: 'auto' }} src={ mainPic } /></div>
                    <div><Image style={{  height: '500px', width: '950px', margin: 'auto' }} src={ helpPic } />3</div>
                </Slider>
                <div className='flex-center' style={{ marginTop: '5em', flexDirection: 'column' }}>
                    <Header as='h2' dividing>
                        What is this project about?
                    </Header>
                    <p style={{ textAlign: 'center', fontSize: '24px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Header as='h2' dividing>
                        What technologies were used?
                    </Header>
                    <p style={{ textAlign: 'center', fontSize: '24px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                
            </Container>
        )
    }
}

export default ProjectMainPage;

