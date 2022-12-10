import React, { Component } from "react";
import { nanoid } from 'nanoid';
import css from './ContactBook.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameId = nanoid();

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    
    handleSubmit = event => {
        event.preventDefault();

        const { name, number } = this.state;
        this.props.contactAdd(name, number);
        this.reset();
    };
    
    reset = () => {
        this.setState({ name: "", number: "" });
    }    

    render() {
        const { name, number } = this.state;
        return (
            <>
            <form onSubmit={this.handleSubmit} className={css.box_contact}>
            <label htmlFor={this.nameId} className={css.label}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={this.nameId}
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
                    onChange={this.handleChange}
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
    }
};

export default ContactForm;