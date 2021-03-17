//DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'; //Routes

// COMPONENTS
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import Post_Item from './components/post-item';
import NotFound from './components/404';
import Life from './components/life';
import Conditional from './components/conditional';
import User from './components/user';


const App = () => {
  return (
    <BrowserRouter> {/*Need this to create Routes*/}
      <div>
        <header>
            <nav>
              <NavLink to="/">Home</NavLink><br /> 
              <NavLink to="/posts">Posts</NavLink><br />
              <NavLink to="/user">User</NavLink><br />
              <NavLink to="/profile">Profile</NavLink><br />
              <NavLink to="/life">Life</NavLink><br />
              <NavLink to="/conditional">Conditional</NavLink>
            </nav>
            <hr />
        </header>

        <Switch> {/*Similar to switch function, put the general routes below*/}          
          <Route path="/profile" component={Profile} />
          <Route path="/posts/:id" component={Post_Item} />
          <Route path="/life" component={Life} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/posts" component={Posts} />
          <Route path="/user" component={User} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound}/>
          
        </Switch>
      </div>
      
    </BrowserRouter>
  )
}
//Use to Render whatever inside the app to #root in the index.html
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)