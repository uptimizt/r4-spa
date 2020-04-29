import React from 'react';
import BottomNavigationBar from './BottomNavigationBar.js';
import Btn from './Btn.js';
import useFetch from './useFetch.js';

import {
    Container,
    List,
    ListItem,
    Button,
    CssBaseline,
    Typography,
    Box,
    makeStyles,

} from '@material-ui/core';




function PostRow(props) {

    return (
        <ListItem button className="выаыва">
            <Typography
                variant="body1"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: props.post.title.rendered }}
            />

        </ListItem>

    );

}


export default function PostList() {

    const url = 'https://bizzapps.ru/wp-json/wp/v2/posts';

    const posts = useFetch(url);

    let listposts = posts.map((post, index) => {
        return (
            <PostRow
                post={post}
                key={index}
            />
        )
    })

    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={3}
                    p={3}
                    mb={11}
                >
                    <Typography variant="h1" component="h2">
                        Posts
                        </Typography>

                    <List className="posts-list">
                        {listposts}
                    </List>


                    <Btn />
                </Box>

            </Container>
            <BottomNavigationBar />
        </React.Fragment>

    );
}
