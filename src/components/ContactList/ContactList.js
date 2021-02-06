import { useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types';

import Contact from "./Contact/Contact";
import contactsAction from '../../redux/contacts-actions';

export default function ContactsList() {

    const visibleContacts = useSelector((state) => {
        const { filter, items } = state.contacts;
        const normalizedFilter = filter.toLowerCase();
    
        return  items.filter(item => item.name.toLowerCase().includes(normalizedFilter))
    });

    const dispatch = useDispatch();

    return (
        <ul>
            {visibleContacts.map(contact => (<Contact key={contact.id} contact={contact} onDelete={() => dispatch(contactsAction.deleteContact(contact.id))}/>))}
      </ul>
    )
}

// const mapStateToProps = (state) => {
//     const { filter, items } = state.contacts;
//     const normalizedFilter = filter.toLowerCase();

//     return {visibleContacts: items.filter(item => item.name.toLowerCase().includes(normalizedFilter))}
// }

// const mapDispatchToProps = dispatch => ({
//     onDelete: id => dispatch(contactsAction.deleteContact(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)

