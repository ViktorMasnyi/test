import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Modal from '../../components/UI/Modal/Modal';
import RawPost from '../../components/RawPost/RawPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        isSearchActive: false,
        foundPosts: [],
        error: false,
        timer: null,
    };

    postSelectedHandler = (selectedPost)  => {
        this.setState({selectedPost: selectedPost})
    }

    postDismissHandler = () => {
        console.log('bang!!')
        this.setState({selectedPost: null})
    }

    handleSearch = (searchStr) => {
        let searchQuery = searchStr.toLowerCase();
        console.log(searchQuery.lenght);
        let foundPosts = this.state.posts.filter(el => el.title.toLowerCase()
            .indexOf(searchQuery) !== -1);
        this.setState({foundPosts: foundPosts, isSearchActive: true});
        //if (searchStr.lenght === 0) this.setState({isSearchActive: false});
    }

    handleSearchReset = (event) => {
        //event.preventDefault();
        this.setState({isSearchActive: false})
    }

    getContent = () => {
        if (this.state.isSearchActive) return;
        axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
            .then(responce => {
                const post = responce.data.hits;
                console.log(post);
                this.setState({posts: post})})
            .catch(error => {
                this.setState({error: true})
            })
    }

    componentDidMount() {
        this.getContent();      
        let timer = setInterval(this.getContent, 2000);
        this.setState({timer});        
    };

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render () {
        let posts = <p>something went wrong!</p>
        if (!this.state.error && !this.state.isSearchActive) {
            posts = this.state.posts.map(post => {
                return (
                    <Post 
                        key={post.objectID} 
                        title={post.title} 
                        author={post.author}
                        url={post.url}
                        createdAt={post.created_at_i}
                        clicked={() => this.postSelectedHandler(post)} />
                );
            })
        } else {
            posts = this.state.foundPosts.map(post => {
                return (
                    <Post 
                        key={post.objectID} 
                        title={post.title} 
                        author={post.author}
                        url={post.url}
                        createdAt={post.created_at_i}
                        clicked={() => this.postSelectedHandler(post)} />
                );
            });
        }        
        
        return (
            <div className="container">
                <Modal
                    isShown={!!this.state.selectedPost}
                    postDismissHandler={this.postDismissHandler}
                >
                    <RawPost
                        selectedPost={this.state.selectedPost}
                        postDismissHandler={this.postDismissHandler}
                    />
                </Modal>
                <form className="filter">
                    <input
                        className="filter__input"
                        placeholder="type here for search by title"
                        onChange={event => {this.handleSearch(event.target.value)}}
                        type="text"
                    />
                    <button
                        className="filter__reset"
                        type="reset"
                        onClick={event => this.handleSearchReset(event)}
                    >
                        Clear search result
                    </button>
                </form>
                <table className="Posts">
                    <thead className="Post">
                        <tr>
                            <th className="post__title">Title</th>
                            <th className="post__author">Author</th>
                            <th className="post__link">Link</th>
                            <th className="post__date">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Blog;
