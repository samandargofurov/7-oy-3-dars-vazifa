const defaultState = {
    user: []
}

export function userReducer(state = defaultState, action) {
    if(action.type == "USER_ADD") {
        let copied = JSON.parse(JSON.stringify(state.user))
        copied.push(action.payload)

        return {...state, user: copied}

    } else if (action.type == "USER_DELETE") {
        let copied = JSON.parse(JSON.stringify(state.users))
        copied = copied.filter(el => {
            return el.id != action.payload
        })

        return {...state, user: copied}
    } else if (action.type == "USER_EDIT") {
    } else {
        return state;
    }
}