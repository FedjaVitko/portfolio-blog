import React from 'react';

import { Container, Item, Grid, List, Icon } from 'semantic-ui-react';

import foto3 from "images/foto3.png";

const SideView = () => (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <img src={ foto3 } width='120px' height='140px'/>
                </Grid.Column>
                <Grid.Column width={7}>
                    <p style={{ fontSize: '30px', marginTop: '1em', letterSpacing: '0.2em', fontWeight: '100', color: 'rgb(46, 64, 83)'}}>Fedor Vitkovskiy</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} style={{ marginLeft: '1em' }}>
                <Grid.Column>
                    <Icon size='big' link name='github' />
                    <p><em>Follow me on GitHub</em></p>
                    <Icon size='big' link name='twitter' />
                    <p><em>Follow me on Twitter</em></p>
                    <h3 style={{ fontSize: '26px' }}>Archives</h3>
                    <List animated style={{ fontSize: '15px' }}>
                    <List.Item>
                        <List.Content>
                        <List.Header style={{ fontWeight: '300' }}>October 2017</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header style={{ fontWeight: '300' }}>September 2017</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header style={{ fontWeight: '300' }}>August 2017</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header style={{ fontWeight: '300' }}>July 2017</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header style={{ fontWeight: '300' }}>June 2017</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        <List.Header style={{ fontWeight: '300' }}>Mai 2017</List.Header>
                        </List.Content>
                    </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
)

export default SideView