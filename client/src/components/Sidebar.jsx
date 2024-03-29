import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from '../utils';

import logo from '../assets/img/logo.png';

export default class Sidebar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         width: window.innerWidth,
      };
   }

   logout = event => {
      event.preventDefault();
      Auth.deleteToken();
      window.location.pathname = '/login';
   };

   updateDimensions() {
      this.setState({ width: window.innerWidth });
   }

   componentDidMount() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions.bind(this));
   }

   render() {
      return (
         <div id="sidebar" className="sidebar">
            <div className="logo">
               <div className="simple-text logo-mini">
                  <div className="logo-img">
                     <img src={logo} alt="logo_image" />
                  </div>
               </div>
               <div className="simple-text logo-normal">HouseKeeper</div>
            </div>
            <div className="sidebar-wrapper">
               <ul className="nav">
                  {this.props.routes.map((prop, key) => {
                     if (!prop.redirect)
                        return (
                           <li className={prop.pathname} key={key}>
                              <NavLink
                                 to={prop.path}
                                 className="nav-link"
                                 activeClassName="active"
                              >
                                 <p>{prop.name}</p>
                              </NavLink>
                           </li>
                        );
                     return null;
                  })}
                  <li className="Logout">
                     <NavLink
                        to="#"
                        className="nav-link"
                        activeClassName="active"
                        onClick={this.logout}
                     >
                        <p>Logout</p>
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}
