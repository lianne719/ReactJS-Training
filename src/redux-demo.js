const redux = require('redux');

const defaultState = {
    totalLikes: 0
}

const mainReducer = (prevState=defaultState, action) => {
    if (action.type === 'INCREMENT_LIKE') {
        return {...prevState, totalLikes: prevState.totalLikes + 1}
    }
    return {...prevState}
}

const globalStore = redux.createStore(mainReducer);

globalStore.subscribe(() => {
    console.log(globalStore.getState())
});

globalStore.dispatch({type: 'INCREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_LIKE'});
globalStore.dispatch({type: 'INCREMENT_LIKE'});