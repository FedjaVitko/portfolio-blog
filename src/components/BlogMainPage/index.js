import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Grid, List, Icon, Sticky, Rail } from 'semantic-ui-react';

import BlogView from './BlogView';
import SideView from './SideView';

class BlogMainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    if(this.props.match.params.monthYear) 
      this.setState({
        monthYear: this.props.match.params.monthYear,
      })
    }
    
  componentWillReceiveProps(nextProps){

    this.setState({
      monthYear: nextProps.match.params.monthYear,
    }, () => console.log(this.state.monthYear))
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <Grid columns={2} style={{ marginLeft: '9em' }}>
        <Grid.Row>
          <Grid.Column width={10}>
            <BlogView monthYear={this.state.monthYear} />
          </Grid.Column>
          <Grid.Column width={3}>
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
