import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Grid, List, Icon, Sticky, Rail } from 'semantic-ui-react';

import BlogView from './BlogView';
import SideView from './SideView';

class BlogMainPage extends Component {

  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Grid columns={2} style={{ marginLeft: '9em' }}>
        <Grid.Row>
          <Grid.Column width={10}>
            <BlogView />
          </Grid.Column>
          <Grid.Column width={4}>
            <Rail>
              <SideView />
            </Rail>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default BlogMainPage;
