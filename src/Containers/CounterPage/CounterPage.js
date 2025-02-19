import React from 'react';
import {connect} from 'react-redux';

import classes from './CounterPage.module.css'

const CounterPage = (props) => {
    return(
        <div className={classes.Content}>
            <h1>{props.totalLikes}</h1>
            <button onClick={props.onLikeClick}>Like</button>
            <button onClick={props.onDislikeClick}>Dislike</button>
        </div>
    )
}

const mapGlobalStateToProps = (globalState) => {
    return {
      totalLikes: globalState.totalLikes
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        onLikeClick: () => {dispatch({type: 'INCREMENT_LIKE'})},
        onDislikeClick: () => {dispatch({type: 'DECREMENT_LIKE'})}
    }
}

export default connect(mapGlobalStateToProps, mapDispatchToProps)(CounterPage);