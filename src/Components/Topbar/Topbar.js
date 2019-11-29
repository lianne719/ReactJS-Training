import React from 'react';

import {Link} from 'react-router-dom'
import {Routes} from '../../Config/RouteEndpoints';
import {connect} from 'react-redux';

import classes from './Topbar.module.css';

const Topbar = (props) => {
  const topbarMenus = [
    {
      label: 'Home',
      targetUrl: Routes.HOMEPAGE
    },
    {
      label: props.loggedIn ? 'Logout' : 'Login',
      targetUrl: props.loggedIn ? Routes.HOMEPAGE : Routes.LOGIN_PAGE
    }
  ]
  
  return (
        <div className={classes.Topbar}>
          {
            topbarMenus.map((menuItem) => {
              return <Link className={classes.MenuItem} to={menuItem.targetUrl}>{menuItem.label}</Link>
            })
          }
          <p>Like Count: {props.totalLikes}</p>
        </div>
      ) 
}

const mapGlobalStateToProps = (globalState) => {
  return {
    totalLikes: globalState.totalLikes
  }
}

export default connect(mapGlobalStateToProps)(Topbar);