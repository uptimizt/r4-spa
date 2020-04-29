import React from 'react';


function PostRow(props){

    return <p>{props.post.title.rendered}</p>;

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
            <article>
                <h1>Posts</h1>
                {listposts}
            </article>
        );
    }
}

export default PostList;