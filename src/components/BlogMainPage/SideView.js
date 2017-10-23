import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Item, Grid, List, Icon, Divider } from 'semantic-ui-react';

import foto3 from "images/foto3.png";

const SideView = () => (
        <Grid>
            <Grid.Row columns={2} style={{ margin: '0 auto' }}>
                <Grid.Column>
                    <img src={ foto3 } width='120px' height='140px' style={{ marginLeft: '1.4em' }}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ margin: '0 auto', paddingTop: '0' }}>
                <Grid.Column style={{ marginLeft: '2em', marginBottom: '0', lineHeight: '0' }}>
                    <h2 style={{ margin: '0 auto', fontWeight: '100', marginLeft: '0.8em'}}><span style={{color: 'red'}}>F</span>edor</h2>
                    <h2 style={{ margin: '0 auto', fontWeight: '100', marginRight: '0.8em'}}><span style={{color: 'red'}}>V</span>itkovskiy</h2>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} style={{ marginLeft: '3em', paddingTop: '0', paddingBottom: '0' }}>
                <Divider style={{ width: '100px', marginTop: '0' }} />
                        <Grid.Column>
                            <a href='https://github.com/TheoVitkovskiy' target='_blank'>
                                <Icon size='big' color='black' link name='github' />
                            </a>
                            <a href='https://twitter.com/fedor3519' target='_blank'>
                                <Icon size='big' color='black' link name='twitter' />
                            </a>
                        </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                {/* <h3 style={{ fontSize: '22px', marginLeft: '2.3em', marginBottom: '0', fontWeight: '300'}}>Archives</h3> */}
            <Grid.Column>
            {/* <Divider style={{ width: '100px', marginLeft: '2em' }}/> */}
                <List animated style={{ fontSize: '15px', marginLeft: '1.5em' }}>
                    <List.Item>
                        <List.Content>
                            <Link to="/blogs/months/10.2017">
                                <List.Header style={{ fontWeight: '300' }}>October 2017 (8)</List.Header>
                            </Link>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Link to="/blogs/months/09.2017">
                                <List.Header style={{ fontWeight: '300' }}>September 2017 (9)</List.Header>
                            </Link>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Link to="/blogs/months/08.2017">
                                <List.Header style={{ fontWeight: '300' }}>August 2017 (9)</List.Header>
                            </Link>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Link to="/blogs/months/07.2017">
                                <List.Header style={{ fontWeight: '300' }}>July 2017 (10)</List.Header>
                            </Link>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Link to="/blogs/months/06.2017">
                                <List.Header style={{ fontWeight: '300' }}>June 2017 (5)</List.Header>
                            </Link>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Link to="/blogs/months/05.2017">
                                <List.Header style={{ fontWeight: '300' }}>Mai 2017 (3)</List.Header>
                            </Link>
                        </List.Content>
                    </List.Item>
                    </List>
            </Grid.Column>
            </Grid.Row> 
            
        </Grid>
)

export default SideView