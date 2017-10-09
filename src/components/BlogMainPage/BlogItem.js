import React from 'react';
import { Link } from 'react-router-dom';

import { Item, Button, Label, Icon } from 'semantic-ui-react';


const BlogItem = ({
    imgSrc, header, date, description,
}) => {
    const img = require(`../../${imgSrc}`);
    return(
    <Item>
        <Item.Image style={{ height: '170px', width: '300px' }} src={ img } />
        <Item.Content verticalAlign='middle'>
            <Item.Extra style={{ marginBottom: '0.5em', marginTop: '0' }}>
                <Label>Programming</Label>
                <Label>React</Label>
            </Item.Extra>
            <Link style={{ textDecoration: 'none', color: 'rgb(50,50,50)' }}to={`/blogs/${header.split(' ').join('-')}`}>
            <Item.Header style={{ fontSize: '1.5em' }}>{ header }</Item.Header>
            </Link>
            <Item.Meta content={ date } />
            <Item.Description style={{ fontSize: '1.1em' }}>{ description }</Item.Description>
            <Item.Extra>
                <Link to={`/blogs/${header.split(' ').join('-')}`}>
                    <Button floated='right' style={{ backgroundColor: 'rgb(102,102,102)', color: 'white', marginTop: '2em' }}>
                        Read more
                        <Icon style={{ marginLeft: '0.5em', marginTop: '0.02em' }} name='arrow circle right'/>
                    </Button>
                </Link>
                
            </Item.Extra>
        </Item.Content>
    </Item>
    )
}

export default BlogItem;