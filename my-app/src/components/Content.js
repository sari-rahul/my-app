import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from "../posts.json";
import PostItems from './PostItems';
import Loader from './Loader';


class Content extends Component {

  constructor(props) {
    super(props)
      this.state ={
        isLoaded :false,
        "posts":[],
      }
  }
 componentDidMount() {
  setTimeout(() => {
    this.setState({
      isLoaded:true,
      posts:savedPosts
    })
  }, 2000);

};

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
                {this.state.isLoaded ? <PostItems savedPosts={this.state.posts}/>
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
export default Content;