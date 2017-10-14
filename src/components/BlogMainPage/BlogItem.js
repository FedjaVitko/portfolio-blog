import React from 'react';
import { Link } from 'react-router-dom';

import { Item, Button, Label, Icon } from 'semantic-ui-react';


const BlogItem = ({
    imgSrc, header, date, description, tags
}) => {
    const img = require(`../../${imgSrc}`);
    return(
    <Item>
        <Item.Image 
            style={{ height: '170px', width: '300px' }}
            src={ img } 
        />
        <Item.Content verticalAlign='middle'>
            <Item.Extra style={{ marginBottom: '0.5em', marginTop: '0' }}>
                {tags.map((tag) => (
                    <Label>{ tag }</Label>
                ))}
            </Item.Extra>
            <Link
                style={{ 
                    textDecoration: 'none',
                    color: 'rgb(50,50,50)' }}
                    to={`/blogs/${header.split(' ').join('-')}`}
            >
                <Item.Header 
                    style={{ 
                        fontSize: '1.5em',
                        width: '250px',
                        color: 'black',
                        fontWeight: '700'
                    }}
                >
                    { header }
                </Item.Header>
            </Link>
            <Item.Meta content={ date } />

            <Item.Description style={{ fontSize: '1.1em' }}>
                { description }
            </Item.Description>

            <Item.Extra>

                <Link to={`/blogs/${header.split(' ').join('-')}`}>
                    <Button 
                        floated='right'
                        style={{ backgroundColor: 'white',
                        color: 'rgb(102,102,102)'}}
                    >
                            Read more
                        <Icon 
                            style={{ marginLeft: '0.5em', marginTop: '2px' }} 
                            name='long arrow right'
                        />
                    </Button>
                </Link>
                
            </Item.Extra>
        </Item.Content>
    </Item>
    )
}

export default BlogItem;