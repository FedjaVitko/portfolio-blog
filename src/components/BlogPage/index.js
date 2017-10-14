import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactMarkdown from 'react-markdown';
import marked from 'marked';

import Blogs from 'components/BlogMainPage/Blogs';

import { Container, Divider, Rail, Sticky, Header } from 'semantic-ui-react';

import Prism from 'prismjs';

class BlogPage extends Component {

  constructor(props) {
    super(props);

    const Blog = new Blogs();

    this.state = {
      markdownContent: '',
      blogHeader: this.props.match.params.blog
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
    const { markdownContent, blogHeader } = this.state;
    const blogHeaderFormatted = blogHeader.split('-').join(' ');
    const imgUrl = require(`images/blogs/${blogHeader}.png`);

    return (
      <div ref={this.handleContextRef}>
        <Container
          text
          style={{
            fontSize: '19px' 
          }}
        >
          <h1 style={{
            textAlign: 'center',
            fontSize: '35px',
            fontWeight: '500',
            letterSpacing: '0.02em' 
            }}
          >
            { blogHeaderFormatted }
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: '16px',
            marginTop: '2em',
            color: 'grey',
            fontWeight: '100',
            letterSpacing: '0.08em' 
            }}
          >
            <em>
              posted in 
            </em>
            <a>
              JavaScript
            </a>
            <em>
              on October 10, 2017 by
            </em>
            <a>
              Fedor Vitkovskiy
            </a>
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
