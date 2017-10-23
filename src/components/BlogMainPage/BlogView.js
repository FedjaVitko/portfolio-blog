import React from 'react';

import { Container, Item } from 'semantic-ui-react';

import { blogs } from 'Blogs';
import BlogItem from './BlogItem';

// const Blog = new Blogs();

const BlogView = ({ monthYear }) => {
    let blogsFiltered;
    if (monthYear) {
        blogsFiltered = blogs.filter((blog) => blog.date.slice(3) === monthYear);
    } else {
        blogsFiltered = blogs;
    }
    return(
        <Container style={{ marginBottom: '3em' }}>
            <Item.Group style={{ width: '680px' }} divided>
            {blogsFiltered.map((blog, index) => (
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
}

export default BlogView;