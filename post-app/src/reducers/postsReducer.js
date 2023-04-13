import { LOAD_POSTS, ADD_POST, DELETE_POST } from '../actions/actionTypes'

function postsReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_POSTS:
            return action.posts;

        case ADD_POST:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    description: action.description
                }
            ];


        case DELETE_POST:
            return state.filter(post => post.id !== action.id);

        default:
            return state;
    }
}

export default postsReducer
