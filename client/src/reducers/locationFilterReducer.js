import {FETCH_APARTMENTS_LIST} from './../actions/types';

export default (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case 'FETCH_APARTMENTS_LIST_BY_LOCATION':
            return action.filter
        default:
            return state;
    }
}
