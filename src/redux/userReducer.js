const defaultState = {
    users: []
}

export function userReducer(state = defaultState, action) {
    if(action.type == "USER_ADD") {
        let copied = JSON.parse(JSON.stringify(state.users))
        copied.push(action.payload)

        return {...state, users: copied}

    } else if (action.type == "USER_DELETE") {
    } else if (action.type == "USER_EDIT") {
    } else {
        return state;
    }
}