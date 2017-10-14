import React, { Component } from 'react';

class Blogs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogNames: ['React Redux', 'React Router v4', 'React v16'],
      blogHtml: {},
      blogs: [
        {
          imgSrc: 'images/blogs/Understanding-Promises.png',
          header: 'Understanding Promises',
          date: '10.10.2017',
          description: 'At Codementor, we’ve used React + Redux to build several projects. There are projects made entirely with Redux, and there are projects where we’ve used Redux along with an existing Fluxxor project.',
          tags: ['Programming', 'JavaScript', 'ES7', 'ECMAScript 2016']
        },
        {
          imgSrc: 'images/blogs/React-Router-v4.png',
          header: 'React Router v4',
          date: '09.10.2017',
          description: 'I met Michael Jackson for the first time at React Rally 2016, soon after writing an article on React Router 3. Michael is one of the principal authors of React Router along with Ryan Florence.',
          tags: ['Programming', 'React']
        },
        {
          imgSrc: 'images/blogs/React-v16.png',
          header: 'React v16',
          date: '21.08.2017',
          description: 'If you have a React 15.5 app which doesn’t use deprecated features and doesn’t throw errors, then React 16 just works! Of course, “it just works” doesn’t make for a very interesting story. So lucky for you, it didn’t just work for me.',
          tags: ['Programming', 'React']
        },
        {
          imgSrc: 'images/blogs/React-Redux.png',
          header: 'React Redux',
          date: '07.05.2017',
          description: 'At Codementor, we’ve used React + Redux to build several projects. There are projects made entirely with Redux, and there are projects where we’ve used Redux along with an existing Fluxxor project.',
          tags: ['Programming', 'React']
        },
      ]
    }

  }


  addBlog = (blog) => {console.log(blog); this.state.blogs.push(blog); console.log(this.state.blogs)};

  getBlogs = () => this.state.blogs;

  getBlogHtml = () => {
    let blogHtmlCopy = {};
    
        this.state.blogNames.forEach((name, index, arr) => {
          let markdownPath = require(`blogs/${name.split(' ').join('-')}.md`);
          fetch(markdownPath)
          .then(response =>  {
            return response.text()
          })
          .then(text => {
            blogHtmlCopy[index] = text;
          })
          .then(html => {
            if((arr.length - 1) === index) {              
              this.state.blogHtml = JSON.parse(JSON.stringify(blogHtmlCopy));
              return this.state.blogHtml;
            }
          })
        })
  }
  
}

export default Blogs;
 