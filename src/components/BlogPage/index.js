import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactMarkdown from 'react-markdown';
import marked from 'marked';

import { Helmet } from 'react-helmet';

import { Container, Divider, Rail, Sticky, Header } from 'semantic-ui-react';
import { blogs } from 'Blogs';
import ShareLinks from './ShareLinks';

import Prism from 'prismjs';


class BlogPage extends Component {
  
  
  constructor(props) {
    super(props);
    
    let blog;
    const blogHeaderFormatted = this.props.match.params.blog.split('-').join(' ');
    for (let i = 0; i < blogs.length; i++) {
      if(blogs[i].header == blogHeaderFormatted) {
        blog = blogs[i];
      }
    }

    console.log(blog);

    this.state = {
      markdownContent: '',
      blogHeader: this.props.match.params.blog,
      blog
    }
  }
  
  handleContextRef = contextRef => this.setState({ contextRef })

  componentWillMount() {
    const markdownPath = require(`blogs/${this.state.blogHeader}.md`);

    fetch(markdownPath)
      .then(response =>  {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdownContent: marked(text),
        })
      })
  }

  componentDidMount() {
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://http-fedor-vitkovskiy-netlify-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }



  render() {
    const { markdownContent, blogHeader, blog } = this.state;
    const imgUrl = require(`images/blogs/${blogHeader}.png`);

    return (
      <div ref={this.handleContextRef}>
        <Helmet>
            <title>{blog.header}</title>
            <meta name="description" content={ blog.description } />
            <meta name="keywords" content={ blog.tags.join() } />
            <meta name="twitter:card" content="summary" />
            <meta property="og:url" content={`https://fedor-vitkovskiy.netlify.com${this.props.location.pathname}`} />
            <meta property="og:title" content={blog.header} />
            <meta property="og:description" content={blog.description} />
            <meta property="og:image" content={imgUrl} />
        </Helmet>
        <Container
          text
          style={{
            fontSize: '19px',
            wordSpacing: '1.5px'
          }}
        >
          <h1 style={{
            textAlign: 'center',
            fontSize: '35px',
            fontWeight: '500',
            letterSpacing: '0.02em' 
            }}
          >
            { blog.header }
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: '16px',
            marginTop: '2em',
            fontWeight: '100',
            letterSpacing: '0.08em' 
            }}
          >
            posted in <a>JavaScript</a> on October 10, 2017 by<a> Fedor Vitkovskiy</a>
          </p>
          <Divider style={{ 
            margin: '1em' 
            }}
          />
          <img
            width='700px'
            src={ imgUrl }
          />
          <Divider style={{
              margin: '1.2em'
            }}
          />
          <ReactMarkdown source={markdownContent} />
          <ShareLinks relativePath={this.props.location.pathname} />
          <div
            id="disqus_thread"
            style={{ marginTop: '2em' }}
          />
        </Container>
      </div>
    );
  }
}

export default BlogPage;
