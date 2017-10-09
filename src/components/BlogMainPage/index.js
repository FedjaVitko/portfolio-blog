import React, { Component } from 'react';

import { Container, Item } from 'semantic-ui-react';

import BlogItem from './BlogItem';
import { blogs } from './blogs';


class BlogMainPage extends Component {

  render() {
    return (
      <Container style={{ marginBottom: '3em' }}>
          <Item.Group style={{ width: '700px' }} divided>
            {blogs.map((blog) => (
                <BlogItem
                  imgSrc={ blog.imgSrc }
                  header={ blog.header }
                  date={ blog.date }
                  description={ blog.description }
                />
              )
            )}
          </Item.Group>
      </Container>
    );
  }
}

export default BlogMainPage;
