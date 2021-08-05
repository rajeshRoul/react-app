import axios from 'axios'

export const fetchAuthorsRequest = (): { type: string } => {
    return {
        type: 'Fetch_Authors_Request',
    }
}

export const fetchAuthorsSuccess = (
    authors: any
): { type: string; payload: any } => {
    return {
        type: 'Fetch_Authors_Success',
        payload: authors,
    }
}

export const fetchAuthorsFailure = (
    error: any
): { type: string; payload: any } => {
    return {
        type: 'Fetch_Authors_Failure',
        payload: error,
    }
}

export const fetchAuthors = () => {
    return (dispatch: any) => {
        dispatch(fetchAuthorsRequest())
        axios
            .get('https://picsum.photos/v2/list')
            .then((response) => {
                const users = response.data
                dispatch(fetchAuthorsSuccess(users))
            })
            .catch((error) => {
                dispatch(fetchAuthorsFailure(error.message))
            })
    }
}
