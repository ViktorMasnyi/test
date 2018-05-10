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
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => {
                const post = responce.data.slice(0, 3);
                const updatedPost = post.map(el => { return {...el, author: 'Mas'}})
                this.setState({posts: updatedPost})})
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
                        key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)} />
                );
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostid}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;