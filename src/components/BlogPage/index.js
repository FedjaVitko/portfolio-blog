import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import marked from 'marked';

import { Container } from 'semantic-ui-react';

import Prism from 'prismjs';

class BlogPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markdownContent: '',
      blogHeader: this.props.match.params.blog,
    }
  }

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
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }



  render() {
    const { markdownContent, blogHeader } = this.state;
    const blogHeaderFormatted = blogHeader.split('-').join(' ');
    console.log(blogHeader);
    const imgUrl = require(`images/blogs/${blogHeader}.png`);
    console.log(imgUrl);

    return (
      <Container text>
        <img width='700px' src={imgUrl} />
        <h1 style={{textAlign: 'center'}}>{blogHeaderFormatted}</h1>
        <ReactMarkdown source={markdownContent} />
      </Container>

    );
  }
}

export default BlogPage;
