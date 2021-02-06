import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-actions';

// import types from './contacts-types'

// const itemsReducer = (state = [], {type, payload}) => {

//     switch (type) {  
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload)
        
//         default:
//             return state

//     }

// }

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload
           
//         default:
//            return state
//     }
// }

const itemsReducer = createReducer([], {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
})

const filterReducer = createReducer('', {
    [actions.filterContact]: (_, action) => action.payload
})

export default combineReducers({
   items: itemsReducer,
   filter: filterReducer,
})

