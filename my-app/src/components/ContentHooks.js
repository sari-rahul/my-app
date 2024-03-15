import React, {useState ,useEffect } from 'react'
import css from './css/Content.module.css';
import {savedPosts} from "../posts.json";
import PostItems from './PostItems';
import Loader from './Loader';



function ContentHooks() {
    const[isLoaded, setIsLoaded] = useState(false);
    const[fetchedPosts, setfetchedPost] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true);
            setfetchedPost(savedPosts);
        },2000)
    },[]);

    const handleChange = (e)=>{
        const name = e.target.value.toLowercase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        setfetchedPost(filteredPosts)
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
                        onChange={(e)=>handleChange(e)}
                   />
                  <h4>posts found: {fetchedPosts.length}</h4>
                </form>
              </div>
              <div className={css.SearchResults}>
                    {isLoaded ? <PostItems savedPosts={fetchedPosts}/>
                    :<Loader/>}    
              </div>
            
          </div>
    
        )
      }

export default ContentHooks