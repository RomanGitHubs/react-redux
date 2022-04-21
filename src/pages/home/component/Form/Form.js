import React, {useState} from 'react';
import './Form.css'


const Form = ({addTodo, checkAllButton, isAllChecked, todos}) => {

    const [value, setValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const valueWithoutTrims = value.trim();
        if (!valueWithoutTrims) return;
        addTodo(valueWithoutTrims);

        setValue('')
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label">
              {!!todos.length && <input type="checkbox" className="checkbox-all" id="check-all"
                       onChange={() => checkAllButton()}
                       checked={isAllChecked}
                />}
            </label>
            <input className="input-todo" type="text"
                   placeholder="What needs to be done?"
                   onChange={event => setValue(event.target.value)}
                   value={value}
            />
        </form>
    )
}

export default Form;