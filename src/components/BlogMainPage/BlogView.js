import React from 'react';

import { Container, Item } from 'semantic-ui-react';

import BlogItem from './BlogItem';
import Blogs from 'components/BlogMainPage/Blogs';

const Blog = new Blogs();

const BlogView = () => (
    <Container style={{ marginBottom: '3em' }}>
        <Item.Group style={{ width: '680px' }} divided>
        {Blog.getBlogs().map((blog, index) => (
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