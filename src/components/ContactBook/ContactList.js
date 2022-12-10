import PropTypes from 'prop-types';
import css from './ContactBook.module.css';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                    <li key={contact.id} className={css.item}>
                        {contact.name}: {contact.number}
                        <button type='submit' onClick={() => deleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    deleteContact: PropTypes.func,
}

export default ContactList;