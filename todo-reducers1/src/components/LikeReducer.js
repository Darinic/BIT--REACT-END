function LikeReducer(state, action) {
let newState;
switch(action.type) {
    case 'Add' :
        newState = {likes:state.likes +1}
        break;

        case 'Remove' :
            newState = {likes:state.likes -1}
            break;

            default: throw new Error()
}

return newState
}

export default LikeReducer