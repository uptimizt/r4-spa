import React from 'react';
import BottomNavigationBar from './BottomNavigationBar.js';

import {
    Container,
    List,
    ListItem,
    Button,
    CssBaseline,
    Typography,
    Box,
 
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
                    >
                        <Typography variant="h1" component="h2">
                            Posts
                        </Typography>

                        <List className="posts-list">
                            {listposts}
                        </List>

                        <Button variant="contained" color="primary">
                            Hi!
                        </Button>
                    </Box>

                </Container>
                <BottomNavigationBar />
            </React.Fragment>


        );
    }
}

export default PostList;