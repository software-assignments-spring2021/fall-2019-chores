import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLinks from './HeaderLinks.jsx';
import logo from '../assets/img/logo.png';

class Sidebar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         width: window.innerWidth,
      };
   }

   activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1
         ? 'active'
         : '';
   }
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
               <a className="simple-text logo-mini">
                  <div className="logo-img">
                     <img src={logo} alt="logo_image" />
                  </div>
               </a>
               <a className="simple-text logo-normal">HouseKeeper</a>
            </div>
            <div className="sidebar-wrapper">
               <ul className="nav">
                  {this.state.width <= 991 ? <HeaderLinks /> : null}
                  {this.props.routes.map((prop, key) => {
                     if (!prop.redirect)
                        return (
                           <li
                              className={
                                 prop.upgrade
                                    ? 'active active-pro'
                                    : this.activeRoute(prop.layout + prop.path)
                              }
                              key={key}
                           >
                              <NavLink
                                 to={prop.layout + prop.path}
                                 className="nav-link"
                                 activeClassName="active"
                              >
                                 <i className={prop.icon} />
                                 <p>{prop.name}</p>
                              </NavLink>
                           </li>
                        );
                     return null;
                  })}
               </ul>
            </div>
         </div>
      );
   }
}

export default Sidebar;
