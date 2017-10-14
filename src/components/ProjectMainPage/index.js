import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Image, Container, Header, Segment, Icon, Button } from 'semantic-ui-react';

import loginPic from "images/project1/project1[0].png";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Projects from './Projects';

class ProjectMainPage extends Component {

    componentWillMount() {
        const Project = new Projects();
        
        const currProjectStub = this.props.match.params.project;
        console.log(currProjectStub);

        const currProject = Project.getProject(currProjectStub);
        const nextProject = Project.getNextProject(currProjectStub);
        const prevProject = Project.getPrevProject(currProjectStub);

        this.state = {
            currProject,
            nextProject,
            prevProject
        }
    }

    componentWillReceiveProps(nextProps) {
        const Project = new Projects();
        
        const currProjectStub = nextProps.match.params.project;
        console.log(currProjectStub);

        const currProject = Project.getProject(currProjectStub);
        const nextProject = Project.getNextProject(currProjectStub);
        const prevProject = Project.getPrevProject(currProjectStub);

        this.state = {
            currProject,
            nextProject,
            prevProject
        }

    }

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
        };

        const {
            name,
            projectHeader,
            about,
            technologies,
            images,
            githubURL,
            webpageURL,
            webpageLink
        } = this.state.currProject;

        return (
            <Container>
                <div style={{ position: 'relative' }} >
                    <Link to={`/projects/${this.state.prevProject.slug}`}>
                        <Button
                            icon='left arrow'
                            size='massive'
                            color='white'
                            style={{
                                position: 'absolute',
                                left: '2em',
                                height: '100%',
                                width: '50px',
                                backgroundColor: 'white' 
                            }}
                        />
                    </Link>
                    <h1 
                        style={{ 
                            textAlign: 'center',
                            letterSpacing: '0.02em',
                            fontWeight: '500',
                            fontSize: '40px',
                            color: 'gray' }}
                    >
                        {name}
                    </h1>
                    <Link to={`/projects/${this.state.nextProject.slug}`}>
                        <Button
                            icon='right arrow'
                            size='massive'
                            style={{
                                position: 'absolute',
                                right: '2em',
                                top: '0',
                                height: '100%',
                                width: '50px',
                                backgroundColor: 'white' 
                            }}
                        />
                    </Link>
                </div>
                <div style={{ marginTop: '5em', marginLeft: '2em', flexDirection: 'column' }}>
                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        What is this project about?
                    </Header>
                    <p style={{ fontSize: '17px' }}>
                        {about}
                    </p>
                    <Header as='h2' dividing style={{ color: 'gray' }}>
                        What technologies were used?
                    </Header>
                    <p style={{ fontSize: '17px' }}>
                        <ul>
                            {technologies.map((tech) => (
                                <li>{tech}</li>
                            ))}
                        </ul>
                    </p>
                    <div>
                        <Slider {...settings}>
                            {images.map((image) => {
                                let imgUrl = require(`../../${image}.png`);
                                return (
                                    <div>
                                        <Image 
                                            style={{
                                                height: '500px',
                                                width: '970px',
                                                margin: 'auto',
                                                marginBottom: '1em'
                                            }} 
                                            src={ imgUrl } 
                                        />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <Header
                        as='h2'
                        dividing
                        style={{ color: 'gray' }}
                    >
                        How can I access the site?
                    </Header>
                    <p style={{
                        fontSize: '17px',
                        marginBottom: '2em' 
                        }}
                    >
                        <p>
                            <a href={githubURL}>
                                <Icon
                                    link
                                    bordered
                                    inverted
                                    name='github' 
                                />
                            </a>
                            <a href={webpageURL}>
                                {webpageLink}
                            </a>
                        </p>
                    </p>

                </div>
            </Container>
        )
    }
}

export default ProjectMainPage;

