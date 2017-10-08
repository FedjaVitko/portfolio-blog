import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import { Container } from 'semantic-ui-react';

import Prism from 'prismjs';


class BlogMainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstblood: '',
    }
  }


  componentWillMount() {
    const firstbloodPath = require('blogs/firstblood.md');

    fetch(firstbloodPath)
      .then(response =>  {
        return response.text()
      })
      .then(text => {
        this.setState({
          firstblood: marked(text),
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
    const { firstblood } = this.state;

    return (
      <Container>
        <h1>BlogPage</h1>
      </Container>
    );
  }
}

export default BlogMainPage;
