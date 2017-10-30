// Stage argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {//state is set to null, otherwise state is undefined
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}