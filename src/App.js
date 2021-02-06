import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from  'react-toastify';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from "./components/ContactForm/Input/Input";
import ContactList from "./components/ContactList/ContactList";

import contactsAction from './redux/contacts-actions';

export default function App(){

  const value = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch();

      return (
        <>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter label="Find contacts by name" value={value} type="text" name="filter"  onChange={(e) => dispatch(contactsAction.filterContact(e.target.value))}/>

          <ContactList />
          <ToastContainer autoClose={2500}/>
        </>
    )
  }
  


// const mapStateToProps = (state) => ({
//   value: state.contacts.value,
// })

// const mapDispatchToProps = dispatch => ({
//   filterChange: (e) =>  dispatch(contactsAction.filterContact(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)
