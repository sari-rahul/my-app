import React from 'react'

function NavBarChild(props) {
  return (
    <div>
            {props.isloggedIn ? (
                    <button onClick={props.handleClick}>Login</button>
                ) : 
                    (<form>
                        <label htmlFor = "username">Username:</label>
                        <input placeholder="username" id="username"/>
                            
                        <label htmlFor = "password">Password:</label>
                        <input placeholder="password" id="password"/>
                        <button onClick={ props.handleClick}>Submit</button>
                    </form>)
            }
    </div>
  )
}

export default NavBarChild;

