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
      }
  }
 componentDidMount() {
  setTimeout(() => {
    this.setState({
      isLoaded:true,
    })
  }, 2000);

};


  render(){
    return(
      <div className={css.Content}>
          <div className={css.TitleBar}>
            <h1>My Photos</h1>
          </div>
          <div className={css.SearchResults}>
                {this.state.isLoaded ? <PostItems savedPosts={savedPosts}/>
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