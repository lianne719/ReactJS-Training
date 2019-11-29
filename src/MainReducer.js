const defaultState = {
    totalLikes: 10
}

const MainReducer = (prevState=defaultState, action) => {
    if (action.type === 'INCREMENT_LIKE') {
        return {...prevState, totalLikes: prevState.totalLikes + 1}
    } else if (action.type === 'DECREMENT_LIKE') {
        return {...prevState, totalLikes: prevState.totalLikes - 1}
    }
    return {...prevState}
}

export default MainReducer;