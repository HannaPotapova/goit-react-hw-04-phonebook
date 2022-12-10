import PropTypes from 'prop-types';
import css from './ContactBook.module.css'

const Filter = ({ findeName }) => {
    return (
        <>
            <label className={css.label}>
                Find contacts by name
                <input
                    type="text"
                    name="name"
                    onChange={findeName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder='Enter a search name'
                />
            </label>
        </>
    )
}

Filter.propTypes = {
    findeName: PropTypes.func,
}

export default Filter;