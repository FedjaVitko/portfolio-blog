import React from 'react';

import { Grid, Icon } from 'semantic-ui-react';

const SocialLinks = () =>
    (   
        <div className='flex-center' style={{ marginTop: '4em' }}>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <a href='https://www.linkedin.com/in/fedor-vitkovskiy-885585151/' target='_blank'>
                            <Icon link size='large' circular color='black' inverted name='linkedin square' />
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href='https://github.com/TheoVitkovskiy' target='_blank'>
                            <Icon link size='large' circular color='black' inverted name='github' />
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href='https://twitter.com/fedor3519' target='_blank'>
                            <Icon link size='large' circular color='black' inverted name='twitter' />
                        </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )

export default SocialLinks