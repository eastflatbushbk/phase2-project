import React from "react"
import {NavLink} from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "12px",
    margin: "0 6px 2px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };

function NavBar(){
    return <div>
              <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
       Tasks
      </NavLink>
      <NavLink
        to="/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Add tasks
      </NavLink>
      <NavLink
        to="/done"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Delete page
      </NavLink>
           
         </div>;

}
export default NavBar