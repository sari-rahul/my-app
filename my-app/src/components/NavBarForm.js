import React from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'


class NavBarForm extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn : true,
      }
    }

    handleClick =()=>{
        this.setState((prevState)=>({
            isloggedIn : prevState.isloggedIn ? false : true
        }), () => console.log(this.state.isloggedIn))
            
    }
    render(){
        return (
            <div className= {css.NavBar}>
                <h1> My Gallery </h1>
                
                <NavBarChild
                 isloggedIn={ this.state.isloggedIn}
                 handleClick={this.handleClick}/>
                 
            </div>
            
          )
    }
}
  

export default NavBarForm ;

