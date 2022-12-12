import { useState } from "react";
import { nanoid } from 'nanoid';
import css from './ContactBook.module.css';

function ContactForm({contactAdd}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');   

    const nameId = nanoid();

    function handleSubmit(event) {
        event.preventDefault();
        contactAdd(name, number);
        reset();
    };
    
    function reset() {
        setName('');
        setNumber('');
    }    

    return (
            <>
            <form onSubmit={handleSubmit} className={css.box_contact}>
            <label htmlFor={nameId} className={css.label}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={nameId}
                    placeholder="Enter name"        
                    required
                />
            </label>
            <label className={css.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id="phone"
                    placeholder="000-00-00"
                    required
                />
            </label>
            <button type='submit' className={css.button}>Add contact</button>
            </form>
            </>
    )
};

export default ContactForm;