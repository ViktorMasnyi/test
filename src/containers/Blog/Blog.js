import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostid: null,
        error: false,
    };

    postSelectedHandler = (id)  => {
        this.setState({selectedPostid: id})
    }

    componentDidMount() {
        axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
            .then(responce => {
                const post = responce.data.hits;
                console.log(post);
                //const updatedPost = post.map(el => { return {...el, author: 'Mas'}})
                this.setState({posts: post})})
            .catch(error => {
                //alert(error)
                this.setState({error: true})
            })
    };
    render () {
        let posts = <p>something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post 
                        key={post.objectID} 
                        title={post.title} 
                        author={post.author}
                        url={post.url}
                        createdAt={post.created_at_i}
                        clicked={() => this.postSelectedHandler(post.id)} />
                );
            })
        }
        
        return (
            <table className="Posts">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Link</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {posts}
                </tbody>
            </table>
        );
    }
}

export default Blog;