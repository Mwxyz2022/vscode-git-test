import { CREATE_POST, FETCH_POSTS } from './types'

const initialState = {
  posts: [],
  fetchPosts: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }
    case FETCH_POSTS:
      return { ...state, fetchPosts: action.payload }
    default:
      return state
  }
}
