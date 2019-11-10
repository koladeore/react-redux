// a reduces take in two things:
// 1 the action (info about what happened)
//  2 copy of current state
function posts(state = [], action) {
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log("increment like!!!");
            // return the updated state
            const i = action.index;
            return [
                // before the one we are updating 
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                 // after the one we are updating
                ...state.slice(i + 1),

            ]
            default:
                return state;
    }

}

export default posts;