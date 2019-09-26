
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_APARTMENTS_LIST_BY_AMENITIES':
            return action.filter
        default:
            return state;
    }
}
