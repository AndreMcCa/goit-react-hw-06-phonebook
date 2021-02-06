import types from './contacts-types'
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// })

// const deleteContact = (id) => ({
    // type: types.DELETE,
    // payload: id,
// })

// const filterContact = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

const addContact = createAction(types.ADD, (name, number) => ({payload: {
        id: uuidv4(),
        name,
        number,
}
}))

const deleteContact = createAction(types.DELETE)
const filterContact = createAction(types.CHANGE_FILTER)

export default { addContact,  deleteContact, filterContact };