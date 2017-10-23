import React from 'react';

import { Grid } from 'semantic-ui-react';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

    const {
        FacebookShareButton,
        GooglePlusShareButton,
        TwitterShareButton
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const GooglePlusIcon = generateShareIcon('google');
    const TwitterIcon = generateShareIcon('twitter');

    const ShareLinks = ({ relativePath }) => {
        const shareUrl = `https://fedor-vitkovskiy.netlify.com/${relativePath}`;
        return (
        <div>
            <Grid className='flex-center' style={{ marginTop: '1em' }}>
                <Grid.Row columns={3}>
                    <Grid.Column width={2}>
                        <FacebookShareButton url={shareUrl} style={{cursor: 'pointer'}}>
                            <FacebookIcon size={42} round />
                        </FacebookShareButton>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <GooglePlusShareButton url={shareUrl} style={{cursor: 'pointer'}}>
                            <GooglePlusIcon size={42} round />
                        </GooglePlusShareButton>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <TwitterShareButton url={shareUrl} style={{cursor: 'pointer'}}>
                            <TwitterIcon size={42} round />
                        </TwitterShareButton>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        ) 
    }

export default ShareLinks;