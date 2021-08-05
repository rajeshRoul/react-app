const initialState = {
    loading: false,
    authors: [],
    error: '',
}

const reducer = (
    state = initialState,
    action: { type: string; payload?: any }
): typeof initialState => {
    switch (action.type) {
        case 'Fetch_Authors_Request':
            return {
                ...state,
                loading: true,
            }
        case 'Fetch_Authors_Success':
            return {
                loading: false,
                authors: action.payload,
                error: '',
            }
        case 'Fetch_Authors_Failure':
            return {
                loading: false,
                authors: [],
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer
