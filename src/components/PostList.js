import React, { useEffect, useState } from 'react';
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


class PostList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            apiUrl: 'https://bizzapps.ru/wp-json/wp/v2/posts'
        };
    }

    componentDidMount() {

     

        let postUrl = this.state.apiUrl;
        fetch(postUrl)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }

    render() {


        // const useStyles = makeStyles({
        //     box: {
        //         margin-bottom: '30px'
        //     },
        // });

        // const classes = useStyles();

        let listposts = this.state.posts.map((post, index) => {
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

                   
                        <Btn/>
                    </Box>

                </Container>
                <BottomNavigationBar />
            </React.Fragment>


        );
    }
}

export default PostList;