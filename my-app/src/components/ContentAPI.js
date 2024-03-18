import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from "../posts.json";
import PostItemsAPI from './PostItemsAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secret';


class ContentAPI extends Component {

  constructor(props) {
    super(props)
      this.state ={
        isLoaded :false,
        posts:[],
        savedPosts:[],
      }
  }
 componentDidMount() {
    this.fetchImages();
};
async fetchImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
    const fetchedPosts = response.data.hits;
    this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
    })
}

handleChange= (event) =>{
    const name = event.target.value.toLowerCase(); 
    const filteredPosts = savedPosts.filter((post)=>{
      return post.name.toLowerCase().includes(name);
    })

    this.setState({
      posts : filteredPosts
    })
}
  render(){
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
              <h4>posts found: {this.state.posts.length}</h4>
            </form>
          </div>
          <div className={css.SearchResults}>
                {this.state.isLoaded ? <PostItemsAPI savedPosts={this.state.posts}/>
                :<Loader/>}

                 
                {/*<PostItems savedPosts={savedPosts}/> 
                {savedPosts.map((post)=>{
              return <div className={css.SearchItem} key={post.title}>
                            <p>{post.title}</p>
                            <p>{post.name}</p>
                            <img src={post.image} alt="random"/>
                            <p>{post.description}</p>
                     </div>
                        })} 
               */}        
          </div>
        
      </div>

    )
  }

}    
export default ContentAPI;