import {
	CREATE_POST,
	HIDE_ALERT,
	HIDE_LOADER,
	REQUEST_POSTS,
	SHOW_ALERT,
	SHOW_LOADER,
} from './types'

export const createPost = newPost => {
	return {
		type: CREATE_POST,
		payload: newPost,
	}
}

export const showLoader = () => {
	return {
		type: SHOW_LOADER,
	}
}

export const hideLoader = () => {
	return {
		type: HIDE_LOADER,
	}
}

export const hideAlert = () => {
	return {
		type: HIDE_ALERT,
	}
}

export const showAlert = text => {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text,
		})

		setTimeout(() => {
			dispatch(hideAlert())
		}, 3000)
	}
}

// export const fetchPosts = () => {
//   return async dispatch => {
//     try {
//       dispatch(showLoader())
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//       const json = await response.json()

//       setTimeout(() => {
//         dispatch({ type: FETCH_POSTS, payload: json })
//         dispatch(hideLoader())
//       }, 1000)
//     } catch (error) {
//       dispatch(showAlert('Что-то пошло не так!'))
//       dispatch(hideLoader())
//     }
//   }
// }

export const fetchPosts = () => {
	return {
		type: REQUEST_POSTS,
	}
}
