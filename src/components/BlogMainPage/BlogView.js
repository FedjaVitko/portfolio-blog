import React from 'react';

import { Container, Item } from 'semantic-ui-react';

import { blogs } from 'Blogs';
import BlogItem from './BlogItem';

// const Blog = new Blogs();

const BlogView = () => (
    <Container style={{ marginBottom: '3em' }}>
        <Item.Group style={{ width: '680px' }} divided>
        {blogs.map((blog, index) => (
            <BlogItem
                key={ index }
                imgSrc={ blog.imgSrc }
                header={ blog.header }
                date={ blog.date }
                description={ blog.description }
                tags={ blog.tags }
            />
            )
        )}
        </Item.Group>
    </Container>
)

export default BlogView;