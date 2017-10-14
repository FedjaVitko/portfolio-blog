import React, { Component } from 'react';

class Projects extends Component {
    state = {
        projectIDs: {
            'daily-challenge-app' : 1,
            'choir-scheduler' : 2,
            'mama-scheduler': 3
        },
        projects: {
            1 :
                {
                    slug: 'daily-challenge-app',
                    name: 'Daily Challenge App',
                    about: 'It is a daily challenge app. It is used to give yourself daily challenges.',
                    technologies: ['React', 'Node', 'Express', 'Mongo DB', 'HTML/CSS'],
                    images: ['images/project1/project1[0]', 'images/project1/project1[1]', 'images/project1/project1[2]'],
                    githubURL: 'https://github.com/TheoVitkovskiy/daily-challenge-app',
                    webpageURL: 'https://daily-challenge-app.heroku.com',
                    webpageLink: 'daily-challenge-app.com'
                },
            2 : 
                {
                    slug: 'choir-scheduler',
                    name: 'Choir Scheduler',
                    about: 'It is used to give yourself daily challenges.',
                    technologies: ['React', 'Node', 'Express', 'Mongo DB', 'HTML/CSS'],
                    images: ['images/project1/project1[0]', 'images/project1/project1[1]', 'images/project1/project1[2]'],
                    githubURL: 'https://github.com/TheoVitkovskiy/daily-challenge-app',
                    webpageURL: 'https://daily-challenge-app.heroku.com',
                    webpageLink: 'daily-challenge-app.com'
                },
            3 : 
                {
                    slug: 'mama-scheduler',
                    name: 'Mama Scheduler',
                    about: 'It is used to give yourself daily challenges.',
                    technologies: ['React', 'Node', 'Express', 'Mongo DB', 'HTML/CSS'],
                    images: ['images/project1/project1[0]', 'images/project1/project1[1]', 'images/project1/project1[2]'],
                    githubURL: 'https://github.com/TheoVitkovskiy/daily-challenge-app',
                    webpageURL: 'https://daily-challenge-app.heroku.com',
                    webpageLink: 'daily-challenge-app.com'
                }
        }
    }

    getProjects = () => this.state.projects;
    getProjectIdByText = (text) => {console.log(text); return this.state.projectIDs[text]};
    getProjectById = (id) => {console.log(id + 'GET PROJECT BY ID');return this.state.projects[id]};

    getProject = (text) => this.getProjectById(this.getProjectIdByText(text));
    getNextProject = (text) => {
        let currId = this.getProjectIdByText(text);
        if (currId === Object.keys(this.getProjects()).length) {
            currId = 0;
        }
        return this.getProjectById(++currId);
    };
    getPrevProject = (text) => {
        let currId = this.getProjectIdByText(text);
        if (currId === 1) {
            let currLength = Object.keys(this.getProjects()).length;
            currId = ++currLength;
        }
        return this.getProjectById(--currId);
    };
}

export default Projects;

