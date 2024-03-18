import React, { Component, useEffect, useState } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from "../posts.json";
import PostItemsAPI from './PostItemsAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secret';


function ContentAPIHooks() {
    const [isLoaded ,setIsLoaded] = useState(false);
    const [posts ,setPosts] = useState ([]);
    const [savvedPost, setSavedPost] =useState ([]);

    
    useEffect(()=>{
        fetchImages();
    },[])

    const fetchImages = async()=>{
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;

        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPost(fetchedPosts);
    }
    const handleChange= (event) =>{
        const name = event.target.value.toLowerCase(); 
        const filteredPosts = savedPosts.filter((post)=>{
          return post.name.toLowerCase().includes(name);
        })
        setPosts(filteredPosts);
    }

    return(
        <div className={css.Content}>
            <div className={css.TitleBar}>
              <h1>My Photos</h1>
              <form action="">
                <label htmlFor="searchInput">Search</label>
                <input 
                      type="search" 
                      id='searchInput' 
                      onChange={(e)=>this.handleChange(e)}
                 />
                <h4>posts found: {posts.length}</h4>
              </form>
            </div>
            <div className={css.SearchResults}>
                  {isLoaded ? <PostItemsAPI savedPosts={posts}/>
                  :<Loader/>}     
            </div>
          
        </div>
  
      )
    }

export default ContentAPIHooks