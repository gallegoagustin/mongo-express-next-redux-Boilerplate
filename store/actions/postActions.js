import * as types from '../types';
import axios from 'axios'

export const postTodo = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/Todo')
        .then((r) => dispatch({ type: types.POST_TODO, payload: r.data}))
    }
}