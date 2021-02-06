// import React, { Component } from 'react';
import {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { toast } from  'react-toastify';

import Input from './Input/Input';
import contactsAction from '../../redux/contacts-actions';

import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    const contacts = useSelector((state) => state.contacts.items);
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    function handleNameChange (e) {
        const value = e.target.value;
        setName(value);
    }

    function handleNamberChange (e) {
        const value = e.target.value;
        setNumber(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === '' || number.trim() === '') {
            toast.error('Заполните поле');
            return
        }

        const normalizedName = name.toLowerCase();
        const hasContact = contacts.find(({name}) => name.toLowerCase() === normalizedName);
        
        if(hasContact) {
            toast.error(`Контакт с именем ${name} уже существует`)
            return
        }

        dispatch(contactsAction.addContact(name, number))
        reset();
    }

    function reset () {
        setName('');
        setNumber('');
    }

    return (
        <form key='AddContactForm' onSubmit={handleSubmit} autoComplete="off">
            <Input label="Name" type="text" name="name" value={name} onChange={handleNameChange} />
            <Input label="Number" type="text" name="number" value={number} onChange={handleNamberChange} />
            <button type='submit'  children='Add contact'></button>
        </form>
    )
}


// const mapDispatchToProps = dispatch => ({
//     addContact: (name, number) => dispatch(contactsAction.addContact(name, number))
// })

// export default connect(null, mapDispatchToProps)(ContactForm);


